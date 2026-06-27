import type { LetterKind, LetterRecord, LetterTemplate } from './types'

const DAY_MS = 86_400_000

/** Statutory response window, used as a REMINDER (not legal advice):
 *  GDPR Art.12(3) = one month (30 days — a deliberate approximation of the
 *  calendar "one month" that errs early on purpose); CCPA §1798.130 = 45 days. */
export function deadlineDays(kind: LetterKind): number {
  return kind === 'ccpa' ? 45 : 30
}

export function deadlineFor(kind: LetterKind, sentAt: string): string {
  const sent = new Date(sentAt).getTime()
  return new Date(sent + deadlineDays(kind) * DAY_MS).toISOString()
}

/** Whole days until the deadline; negative once it has passed. Uses ceil so we
 *  never under-report time left, and only reach 0 once the deadline has passed
 *  (consistent with isOverdue's strict `<`). */
export function daysRemaining(record: LetterRecord, now: Date = new Date()): number {
  return Math.ceil((new Date(record.deadlineAt).getTime() - now.getTime()) / DAY_MS)
}

export function isOverdue(record: LetterRecord, now: Date = new Date()): boolean {
  return record.status === 'sent' && new Date(record.deadlineAt).getTime() < now.getTime()
}

export function kindForTemplate(template: LetterTemplate): LetterKind {
  return template === 'gdpr-access' ? 'access' : template === 'ccpa-delete' ? 'ccpa' : 'erasure'
}

export function newLetter(input: {
  kind: LetterKind
  recipient: string
  sentAt: string
  linkedActionId?: string
}): LetterRecord {
  return {
    id: crypto.randomUUID(),
    kind: input.kind,
    recipient: input.recipient,
    linkedActionId: input.linkedActionId,
    sentAt: input.sentAt,
    deadlineAt: deadlineFor(input.kind, input.sentAt),
    status: 'sent',
  }
}

const KIND_LAW: Record<LetterKind, string> = {
  erasure: 'Article 17 GDPR (right to erasure)',
  access: 'Article 15 GDPR (right of access)',
  ccpa: 'the CCPA/CPRA (delete & opt-out)',
}

/** Legal basis for lodging the complaint itself (distinct from KIND_LAW, which
 *  is the basis of the *original* request). GDPR = the Art.77 right to complain. */
const KIND_COMPLAINT_RIGHT: Record<LetterKind, string> = {
  erasure: 'I am exercising my right under Article 77 GDPR to lodge a complaint with a supervisory authority.',
  access: 'I am exercising my right under Article 77 GDPR to lodge a complaint with a supervisory authority.',
  ccpa: 'I am submitting this complaint under the CCPA/CPRA to the competent enforcement authority.',
}

/** Complaint body for a controller that missed the response window. English
 *  canonical, matching lib/letters.ts. Names the supervisory authority when known,
 *  and cites the Art.77 right to complain (CCPA equivalent for ccpa). */
export function escalationLetter(record: LetterRecord, authorityName?: string): string {
  const sent = record.sentAt.slice(0, 10)
  const due = record.deadlineAt.slice(0, 10)
  return `To ${authorityName || 'the competent data protection supervisory authority'},

I am lodging a complaint regarding ${record.recipient || '[Organisation]'}.

On ${sent} I submitted a request under ${KIND_LAW[record.kind]}. The response period elapsed on ${due} and I have received no adequate response.

${KIND_COMPLAINT_RIGHT[record.kind]} I ask that you investigate this failure to comply and exercise your supervisory powers as appropriate. I can provide a copy of my original request and any correspondence on request.

Yours faithfully,
[Your full name]`
}

// ── Calendar export (.ics) ────────────────────────────────────────────────
// Zero-dependency RFC 5545 generator. We emit a VEVENT per still-pending letter
// so the user can drop the statutory response deadlines into their own calendar
// — closing the follow-up loop without any network, account, or reminder server.

/** Escape a TEXT value per RFC 5545 §3.3.11 (backslash, semicolon, comma, newline). */
function escapeICSText(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')
}

/** ISO instant → UTC timestamp form `YYYYMMDDTHHMMSSZ` (for DTSTAMP). */
function icsStamp(d: Date): string {
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')
}

/** ISO instant → all-day DATE form `YYYYMMDD`, optionally offset by whole days. */
function icsDate(iso: string, addDays = 0): string {
  const d = new Date(new Date(iso).getTime() + addDays * DAY_MS)
  return d.toISOString().slice(0, 10).replace(/-/g, '')
}

/**
 * Build an iCalendar document for every still-pending (status `sent`) letter's
 * response deadline. Each is an all-day event on the deadline date with a
 * one-day-prior display alarm. Returns `null` when there is nothing to export.
 */
export function buildDeadlineICS(letters: LetterRecord[], now: Date = new Date()): string | null {
  const pending = letters.filter((l) => l.status === 'sent')
  if (pending.length === 0) return null

  const stamp = icsStamp(now)
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Vanish//Letter deadlines//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ]

  for (const l of pending) {
    const law = KIND_LAW[l.kind]
    const summary = escapeICSText(`Vanish: response due — ${l.recipient || 'request'}`)
    const description = escapeICSText(
      `Statutory response window for your request under ${law} (sent ${l.sentAt.slice(0, 10)}). ` +
        'No reply by this date means you can lodge a complaint with your supervisory authority.',
    )
    lines.push(
      'BEGIN:VEVENT',
      `UID:${l.id}@vanish.cat`,
      `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${icsDate(l.deadlineAt)}`,
      `DTEND;VALUE=DATE:${icsDate(l.deadlineAt, 1)}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      `DESCRIPTION:${summary}`,
      'END:VALARM',
      'END:VEVENT',
    )
  }

  lines.push('END:VCALENDAR')
  // RFC 5545 §3.1 — lines are CRLF-delimited.
  return lines.join('\r\n') + '\r\n'
}
