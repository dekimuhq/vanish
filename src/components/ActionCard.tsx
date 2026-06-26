import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Action } from '../lib/types'
import { CATEGORIES } from '../lib/types'
import { useStore } from '../store/store'
import { EffortPill, ImpactPill, TierBadge } from './Pills'

interface Props {
  action: Action
  showTier?: boolean
}

/** Link-rot is the #1 operational risk for an opt-out catalog. When a direct
 *  link dies, fall back to a search for the current opt-out page. */
function fallbackSearch(title: string): string {
  const q = title.replace(/^opt out of\s+/i, '').trim()
  return `https://duckduckgo.com/?q=${encodeURIComponent(`${q} opt out removal`)}`
}

export function ActionCard({ action, showTier = true }: Props) {
  const { state, setStatus, clearStatus } = useStore()
  const [open, setOpen] = useState(false)
  const [deadLink, setDeadLink] = useState(false)
  const status = state.progress[action.id]?.status ?? 'todo'
  const cat = CATEGORIES[action.category]

  const ringState =
    status === 'done'
      ? 'border-signal-ok/40 bg-signal-ok/[0.04]'
      : status === 'skipped'
        ? 'border-ink-700/50 opacity-60'
        : 'border-ink-700/70 hover:border-ghost/30'

  return (
    <div className={`card animate-fade-up p-4 transition ${ringState}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => setStatus(action.id, status === 'done' ? 'todo' : 'done')}
          aria-pressed={status === 'done'}
          aria-label={status === 'done' ? `Mark "${action.title}" not done` : `Mark "${action.title}" done`}
          className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border text-sm transition ${
            status === 'done'
              ? 'border-signal-ok bg-signal-ok text-ink-950'
              : 'border-ink-600 text-transparent hover:border-ghost'
          }`}
        >
          ✓
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className={`font-semibold text-slate-100 ${status === 'skipped' ? 'line-through' : ''}`}>
              {action.title}
            </h3>
            {showTier && <TierBadge tier={action.tier} withName={false} />}
            <span className="pill bg-ink-700/60 text-slate-400">
              {cat.icon} {cat.name}
            </span>
          </div>

          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{action.summary}</p>

          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <EffortPill level={action.effort} />
            <ImpactPill level={action.impact} />
            {action.recurDays && (
              <span className="pill bg-ink-700/60 text-slate-400" title="Brokers re-list you; redo this periodically">
                ↻ re-check every {action.recurDays}d
              </span>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {action.url && (
              <a className="btn-primary btn-sm" href={action.url} target="_blank" rel="noopener noreferrer">
                {action.urlLabel ?? 'Open'} ↗
              </a>
            )}
            {action.url &&
              (deadLink ? (
                <a className="btn-ghost btn-sm" href={fallbackSearch(action.title)} target="_blank" rel="noopener noreferrer">
                  🔎 Search for current page
                </a>
              ) : (
                <button
                  className="btn-sm rounded-lg px-2 text-xs text-slate-500 hover:text-slate-300"
                  onClick={() => setDeadLink(true)}
                  title="Opt-out URLs change often"
                >
                  link dead?
                </button>
              ))}
            {action.letter && (
              <Link className="btn-ghost btn-sm" to={`/letters?t=${action.letter}`}>
                ✍️ Generate letter
              </Link>
            )}
            {action.internalTo && (
              <Link className="btn-ghost btn-sm" to={action.internalTo}>
                {action.internalLabel ?? 'Open tool'}
              </Link>
            )}
            {action.steps && (
              <button className="btn-ghost btn-sm" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
                {open ? 'Hide steps' : 'How-to'}
              </button>
            )}
            <div className="ml-auto flex items-center gap-1">
              {status !== 'skipped' ? (
                <button
                  className="btn-sm rounded-lg px-2 text-xs text-slate-500 hover:text-slate-300"
                  onClick={() => setStatus(action.id, 'skipped')}
                >
                  Not relevant
                </button>
              ) : (
                <button
                  className="btn-sm rounded-lg px-2 text-xs text-ghost-bright hover:underline"
                  onClick={() => clearStatus(action.id)}
                >
                  Restore
                </button>
              )}
            </div>
          </div>

          {open && action.steps && (
            <ol className="mt-3 space-y-1.5 rounded-xl bg-ink-900/60 p-3 text-sm text-slate-300">
              {action.steps.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="font-mono text-ghost-dim">{i + 1}.</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  )
}
