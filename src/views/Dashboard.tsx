import { Link } from 'react-router-dom'
import { ScoreRing } from '../components/ScoreRing'
import { ActionCard } from '../components/ActionCard'
import { TierBadge } from '../components/Pills'
import { computeScore, dueRechecks, momentum, scoreLabel } from '../lib/score'
import { actionsForRegion, byQuickWin } from '../lib/select'
import { TIERS, type Category, type Tier } from '../lib/types'
import { useStore } from '../store/store'

// Maps onboarding concerns to the categories whose actions should float up first.
const CONCERN_CATEGORIES: Record<string, Category[]> = {
  recruiters: ['search', 'social', 'data-brokers'],
  brokers: ['data-brokers'],
  bigtech: ['search', 'browser', 'accounts', 'email'],
  breaches: ['accounts', 'email'],
  stalking: ['data-brokers', 'search', 'social', 'legal'],
  spam: ['email', 'data-brokers', 'finance'],
}

export function Dashboard() {
  const { state } = useStore()
  const actions = actionsForRegion(state.profile.region, state.profile.country)
  const breakdown = computeScore(actions, state)
  const rechecks = dueRechecks(actions, state)
  const mo = momentum(state)
  const tone = scoreLabel(breakdown.score).tone

  const boosted = new Set<Category>(state.profile.concerns.flatMap((c) => CONCERN_CATEGORIES[c] ?? []))
  const next = actions
    .filter((a) => (state.progress[a.id]?.status ?? 'todo') === 'todo')
    .sort((a, b) => {
      const ba = boosted.has(a.category) ? 0 : 1
      const bb = boosted.has(b.category) ? 0 : 1
      return ba - bb || byQuickWin(a, b)
    })
    .slice(0, 4)

  return (
    <div className="space-y-6">
      <section className="card flex flex-col items-center gap-6 p-6 sm:flex-row sm:items-center sm:gap-8">
        <ScoreRing score={breakdown.score} />
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-slate-100">Your privacy score</h1>
          <p className="mt-1 text-sm text-slate-400">
            {breakdown.doneCount} of {breakdown.totalCount} actions done · target {' '}
            <TierBadge tier={state.profile.targetTier} />
          </p>
          <p className="mt-3 max-w-md text-sm text-slate-400">{ENCOURAGEMENT[tone]}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
            <Link to="/plan" className="btn-primary btn-sm">Open the ladder →</Link>
            <Link to="/report" className="btn-ghost btn-sm">🖨 Print my plan</Link>
            {rechecks.length > 0 && (
              <Link to="/brokers" className="btn-ghost btn-sm">↻ {rechecks.length} re-check{rechecks.length > 1 ? 's' : ''} due</Link>
            )}
          </div>
          {(mo.streakDays > 0 || mo.completedThisWeek > 0) && (
            <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-slate-400 sm:justify-start">
              {mo.streakDays > 0 && (
                <span className="pill border border-ghost/20 bg-ghost/5 text-ghost-bright">🔥 {mo.streakDays}-day streak</span>
              )}
              {mo.completedThisWeek > 0 && (
                <span className="pill border border-ink-600 text-slate-400">{mo.completedThisWeek} done this week</span>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {([1, 2, 3, 4] as Tier[]).map((t) => {
          const bt = breakdown.byTier[t]
          const pct = Math.round(bt.ratio * 100)
          return (
            <Link key={t} to={`/plan?tier=${t}`} className="card group p-4 transition hover:border-ghost/30">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500">T{t}</span>
                <span className="text-xs text-slate-500">{bt.done}/{bt.total}</span>
              </div>
              <div className="mt-1 font-semibold text-slate-100">{TIERS[t].name}</div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink-700">
                <div className="h-full rounded-full bg-ghost transition-all" style={{ width: `${pct}%` }} />
              </div>
              <div className="mt-1 text-[11px] text-slate-500">{TIERS[t].tagline}</div>
            </Link>
          )
        })}
      </section>

      {rechecks.length > 0 && (
        <section className="card border-signal-warn/30 bg-signal-warn/[0.04] p-4">
          <h2 className="flex items-center gap-2 font-semibold text-signal-warn">↻ Re-checks due</h2>
          <p className="mt-1 text-sm text-slate-400">
            Data brokers re-list you after a few months. These opt-outs are due to be redone:
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {rechecks.map((r) => (
              <li key={r.action.id} className={`pill border ${r.overdue ? 'border-signal-danger/40 text-signal-danger' : 'border-ink-600 text-slate-400'}`}>
                {r.action.title}
                {r.overdue ? ' · overdue' : ` · ${Math.max(0, Math.ceil((r.dueAt.getTime() - Date.now()) / 86_400_000))}d`}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-100">Recommended next</h2>
          <Link to="/plan" className="text-sm link">See all</Link>
        </div>
        {next.length > 0 ? (
          <div className="grid gap-3">
            {next.map((a) => (
              <ActionCard key={a.id} action={a} />
            ))}
          </div>
        ) : (
          <div className="card p-6 text-center text-sm text-slate-400">
            🎉 Every relevant action is done or skipped. You’re ghosting — keep the re-checks up.
          </div>
        )}
      </section>
    </div>
  )
}

const ENCOURAGEMENT: Record<'danger' | 'warn' | 'ok', string> = {
  danger: 'You’re wide open right now — but the first few actions are the highest-impact and take minutes. Start at the top.',
  warn: 'Good start. You’ve closed the easy gaps; the next tier is where real distance from brokers and Big Tech begins.',
  ok: 'You’re genuinely hard to track now. Maintain the re-checks and review your threat model each quarter.',
}
