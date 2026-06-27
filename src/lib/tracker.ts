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

/** Complaint body for a controller that missed the response window. English
 *  canonical, matching lib/letters.ts. Names the supervisory authority when known. */
export function escalationLetter(record: LetterRecord, authorityName?: string): string {
  const sent = record.sentAt.slice(0, 10)
  const due = record.deadlineAt.slice(0, 10)
  return `To ${authorityName || 'the competent data protection supervisory authority'},

I am lodging a complaint regarding ${record.recipient || '[Organisation]'}.

On ${sent} I submitted a request under ${KIND_LAW[record.kind]}. The response period elapsed on ${due} and I have received no adequate response.

I ask that you investigate this failure to comply and exercise your supervisory powers as appropriate. I can provide a copy of my original request and any correspondence on request.

Yours faithfully,
[Your full name]`
}
