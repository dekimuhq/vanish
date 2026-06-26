import { ActionCard } from '../components/ActionCard'
import { dueRechecks } from '../lib/score'
import { actionsForRegion, byQuickWin } from '../lib/select'
import { useStore } from '../store/store'

export function Brokers() {
  const { state } = useStore()
  const brokers = actionsForRegion(state.profile.region, state.profile.country)
    .filter((a) => a.category === 'data-brokers')
    .sort(byQuickWin)
  const done = brokers.filter((a) => state.progress[a.id]?.status === 'done').length
  const rechecks = dueRechecks(actionsForRegion(state.profile.region, state.profile.country), state)

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-100">Data-Broker Hit List</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-400">
          Brokers are who put your home address and phone in a stranger’s search results. Work the no-ID quick wins
          first, then the aggregators that feed everyone else. {' '}
          <span className="text-slate-500">{done}/{brokers.length} cleared.</span>
        </p>
      </header>

      {rechecks.length > 0 && (
        <div className="card border-signal-warn/30 bg-signal-warn/[0.04] p-4 text-sm">
          <strong className="text-signal-warn">↻ {rechecks.length} due to redo.</strong>{' '}
          <span className="text-slate-400">
            Brokers silently re-list you after 3–6 months — that’s why services charge monthly. Vanish just reminds you to
            redo the free opt-out.
          </span>
        </div>
      )}

      <div className="card p-4 text-sm text-slate-400">
        <strong className="text-slate-200">⚠️ The honest truth:</strong> opt-outs reduce your exposure, they don’t
        guarantee permanent invisibility. Links change and data reappears. Treat this as a recurring habit, not a
        one-time fix — and never pay a “removal guarantee.”
      </div>

      <div className="grid gap-3">
        {brokers.map((a) => (
          <ActionCard key={a.id} action={a} />
        ))}
      </div>
    </div>
  )
}
