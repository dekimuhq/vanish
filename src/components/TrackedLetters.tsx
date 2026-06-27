import { useState } from 'react'
import type { LetterRecord, LetterStatus } from '../lib/types'
import { daysRemaining, isOverdue, escalationLetter } from '../lib/tracker'
import { authorityFor } from '../data/countries'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'

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

  return (
    <section className="space-y-3">
      <h2 className="font-semibold text-slate-100">{t('letters.tracked.title')}</h2>
      {letters.length === 0 ? (
        <p className="text-sm text-slate-500">{t('letters.tracked.empty')}</p>
      ) : (
        <ul className="space-y-3">
          {letters.map((l) => (
            <LetterRow
              key={l.id}
              letter={l}
              authorityName={authority?.name}
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
  onUpdate: (patch: Partial<Omit<LetterRecord, 'id'>>) => void
  onDelete: () => void
}

function LetterRow({ letter, authorityName, onUpdate, onDelete }: RowProps) {
  const { t } = useI18n()
  const [escalation, setEscalation] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const days = daysRemaining(letter)
  const overdue = isOverdue(letter)

  function escalate() {
    setEscalation(escalationLetter(letter, authorityName))
    onUpdate({ status: 'escalated', escalatedAt: new Date().toISOString() })
  }

  async function copy() {
    if (!escalation) return
    try {
      await navigator.clipboard.writeText(escalation)
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
            {overdue && authorityName && (
              <button className="btn-sm rounded-lg border border-signal-danger/40 px-2 text-xs text-signal-danger hover:bg-signal-danger/10" onClick={escalate}>
                {t('letters.tracked.escalate', { authority: authorityName })}
              </button>
            )}
          </>
        )}
        {letter.status !== 'resolved' && (
          <button className="btn-ghost btn-sm" onClick={() => onUpdate({ status: 'resolved' })}>{t('letters.tracked.resolved')}</button>
        )}
        <button className="btn-sm ml-auto px-2 text-xs text-slate-500 hover:text-slate-300" onClick={onDelete}>{t('letters.tracked.delete')}</button>
      </div>

      {escalation && (
        <div className="space-y-2">
          <pre className="max-h-48 overflow-auto whitespace-pre-wrap rounded-lg bg-ink-900/60 px-3 py-2 font-mono text-[12px] leading-relaxed text-slate-300">{escalation}</pre>
          <button className="btn-ghost btn-sm" onClick={copy}>{copied ? t('letters.tracked.copied') : t('letters.tracked.copyEscalation')}</button>
        </div>
      )}
    </li>
  )
}
