import { Link } from 'react-router-dom'
import { computeScore } from '../lib/score'
import { actionsForRegion, byQuickWin } from '../lib/select'
import { CATEGORIES, TIERS, type Tier } from '../lib/types'
import { useStore } from '../store/store'

// A print-optimised checklist of everything still to do. window.print() lets the
// user save it as a PDF or paper checklist — fully offline, no generator needed.
export function Report() {
  const { state } = useStore()
  const actions = actionsForRegion(state.profile.region, state.profile.country)
  const breakdown = computeScore(actions, state)
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">Your Disappearance Plan</h1>
          <p className="mt-1 text-sm text-slate-400">A printable checklist of what’s left. Save it as PDF or print it.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary btn-sm" onClick={() => window.print()}>
            🖨 Print / Save as PDF
          </button>
          <Link className="btn-ghost btn-sm" to="/">
            ← Back
          </Link>
        </div>
      </div>

      <p className="rounded-xl border border-ink-700/60 bg-ink-900/40 p-3 text-xs text-slate-400 print:hidden">
        <span className="text-ghost">⬡</span> Vanish raises the <em>cost</em> of finding you. Against a funded,
        determined adversary nothing is absolute — and the thing that gets people caught is rarely the tech, it’s
        consistency and ego (a reused handle, one slip). Match your effort to who you’re actually hiding from.
      </p>

      <article className="card space-y-6 p-6 print:border-none print:bg-white print:p-0 print:text-black">
        <header className="flex items-baseline justify-between border-b border-ink-700/60 pb-3 print:border-black/20">
          <div>
            <div className="text-lg font-bold text-slate-100 print:text-black">Vanish — Disappearance Plan</div>
            <div className="text-xs text-slate-500">Generated {today} · target {TIERS[state.profile.targetTier].name} · region {state.profile.region.toUpperCase()}</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-3xl font-bold text-ghost print:text-black">{breakdown.score}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">privacy score</div>
          </div>
        </header>

        {([1, 2, 3, 4] as Tier[]).map((t) => {
          const remaining = actions
            .filter((a) => a.tier === t)
            .filter((a) => (state.progress[a.id]?.status ?? 'todo') === 'todo')
            .sort(byQuickWin)
          if (remaining.length === 0) return null
          return (
            <section key={t} className="break-inside-avoid">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-ghost-dim print:text-black">
                Tier {t} · {TIERS[t].name} — {remaining.length} to do
              </h2>
              <ul className="space-y-2">
                {remaining.map((a) => (
                  <li key={a.id} className="flex gap-3 text-sm">
                    <span className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border border-slate-500 print:border-black" />
                    <span>
                      <span className="font-medium text-slate-100 print:text-black">{a.title}</span>
                      <span className="text-slate-500"> · {CATEGORIES[a.category].name}</span>
                      <div className="text-slate-400 print:text-black/70">{a.summary}</div>
                      {a.url && <div className="break-all font-mono text-[11px] text-ghost-dim print:text-black/60">{a.url}</div>}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}

        {breakdown.doneCount === breakdown.totalCount && (
          <p className="text-sm text-slate-400">Nothing left — every relevant action is done or skipped. Keep up the re-checks.</p>
        )}

        <footer className="border-t border-ink-700/60 pt-3 text-[11px] text-slate-500 print:border-black/20 print:text-black/60">
          Made with Vanish — a fully-offline privacy coach. Opt-out links change; verify before acting. Not legal advice.
        </footer>
      </article>
    </div>
  )
}
