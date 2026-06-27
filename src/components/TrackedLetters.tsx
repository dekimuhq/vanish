import { useState } from 'react'
import type { LetterRecord, LetterStatus } from '../lib/types'
import { daysRemaining, isOverdue, escalationLetter, buildDeadlineICS } from '../lib/tracker'
import { authorityFor } from '../data/countries'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'

/** Anchor-download a text blob — same pattern as Letters.tsx, no deps, no network. */
function downloadText(content: string, filename: string, type: string): void {
  const url = URL.createObjectURL(new Blob([content], { type }))
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

const STATUS_STYLE: Record<LetterStatus, string> = {
  sent: 'text-ghost-bright',
  responded: 'text-slate-300',
  resolved: 'text-signal-ok',
  escalated: 'text-signal-danger',
  drafted: 'text-slate-500',
}

export function TrackedLetters() {
  const { state, updateLetter, deleteLetter } = useStore()
  const { t } = useI18n()
  const authority = authorityFor(state.profile.country)
  const letters = Object.values(state.letters).sort((a, b) => b.sentAt.localeCompare(a.sentAt))
  const pendingCount = letters.filter((l) => l.status === 'sent').length

  function exportCalendar() {
    const ics = buildDeadlineICS(letters)
    if (ics) downloadText(ics, 'vanish-deadlines.ics', 'text/calendar')
  }

  return (
    <section className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="font-semibold text-slate-100">{t('letters.tracked.title')}</h2>
        {pendingCount > 0 && (
          <button className="btn-ghost btn-sm ml-auto" onClick={exportCalendar}>
            {t('letters.tracked.addToCalendar')}
          </button>
        )}
      </div>
      {letters.length === 0 ? (
        <p className="text-sm text-slate-500">{t('letters.tracked.empty')}</p>
      ) : (
        <ul className="space-y-3">
          {letters.map((l) => (
            <LetterRow
              key={l.id}
              letter={l}
              authorityName={authority?.name}
              authorityUrl={authority?.url}
              onUpdate={(patch) => updateLetter(l.id, patch)}
              onDelete={() => deleteLetter(l.id)}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

interface RowProps {
  letter: LetterRecord
  authorityName?: string
  authorityUrl?: string
  onUpdate: (patch: Partial<Omit<LetterRecord, 'id'>>) => void
  onDelete: () => void
}

function LetterRow({ letter, authorityName, authorityUrl, onUpdate, onDelete }: RowProps) {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)
  const days = daysRemaining(letter)
  const overdue = isOverdue(letter)
  // The Art.77 complaint is auto-drafted the moment a letter is overdue — no
  // click needed — and also shown once the user has marked it escalated.
  const body = overdue || letter.status === 'escalated' ? escalationLetter(letter, authorityName) : null

  function markEscalated() {
    onUpdate({ status: 'escalated', escalatedAt: new Date().toISOString() })
  }

  function downloadComplaint() {
    if (body) downloadText(body, 'vanish-complaint.txt', 'text/plain')
  }

  async function copy() {
    if (!body) return
    try {
      await navigator.clipboard.writeText(body)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <li className="card space-y-2 p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold text-slate-100">{letter.recipient || '—'}</span>
        <span className={`pill bg-ink-700/60 ${STATUS_STYLE[letter.status]}`}>{t(`letters.status.${letter.status}`)}</span>
        <span className="ml-auto text-xs text-slate-500">{t('letters.tracked.sentOn', { date: letter.sentAt.slice(0, 10) })}</span>
      </div>

      {letter.status === 'sent' && (
        <p className={`text-sm ${overdue ? 'text-signal-danger' : 'text-slate-400'}`}>
          {overdue ? t('letters.tracked.overdue', { days: Math.abs(days) }) : t('letters.tracked.daysLeft', { days })}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        {letter.status === 'sent' && (
          <>
            <button className="btn-ghost btn-sm" onClick={() => onUpdate({ status: 'responded' })}>{t('letters.tracked.responded')}</button>
            {overdue && (
              <button className="btn-sm rounded-lg border border-signal-danger/40 px-2 text-xs text-signal-danger hover:bg-signal-danger/10" onClick={markEscalated}>
                {t('letters.tracked.markEscalated')}
              </button>
            )}
          </>
        )}
        {letter.status !== 'resolved' && (
          <button className="btn-ghost btn-sm" onClick={() => onUpdate({ status: 'resolved' })}>{t('letters.tracked.resolved')}</button>
        )}
        <button className="btn-sm ml-auto px-2 text-xs text-slate-500 hover:text-slate-300" aria-label={t('letters.tracked.delete')} onClick={onDelete}>{t('letters.tracked.delete')}</button>
      </div>

      {body && (
        <div className="space-y-2" role="status" aria-live="polite">
          <p className="text-xs text-signal-danger">{t('letters.tracked.overdueComplaint')}</p>
          <pre className="max-h-48 overflow-auto whitespace-pre-wrap rounded-lg bg-ink-900/60 px-3 py-2 font-mono text-[12px] leading-relaxed text-slate-300">{body}</pre>
          <div className="flex flex-wrap gap-2">
            <button className="btn-ghost btn-sm" onClick={copy}>{copied ? t('letters.tracked.copied') : t('letters.tracked.copyEscalation')}</button>
            <button className="btn-ghost btn-sm" onClick={downloadComplaint}>{t('letters.tracked.downloadComplaint')}</button>
            {authorityUrl && (
              <a className="btn-ghost btn-sm" href={authorityUrl} target="_blank" rel="noopener noreferrer">
                {t('letters.tracked.lodgeAt', { authority: authorityName || '' })}
              </a>
            )}
          </div>
        </div>
      )}
    </li>
  )
}
