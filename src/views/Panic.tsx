import { ActionCard } from '../components/ActionCard'
import { panicActions } from '../lib/select'
import { useStore } from '../store/store'

export function Panic() {
  const { state } = useStore()
  const actions = panicActions(state.profile.region)
  const done = actions.filter((a) => state.progress[a.id]?.status === 'done').length

  return (
    <div className="space-y-6">
      <header className="card border-signal-danger/30 bg-signal-danger/[0.05] p-5">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-100">🆘 Panic Mode</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          If someone is actively trying to find, harass, or dox you, do these in order. They’re the highest-leverage
          steps to break the trail between your name and your location, fastest first.
        </p>
        <p className="mt-3 text-sm font-semibold text-signal-danger">
          If you are in immediate danger, contact your local emergency services first.
        </p>
        <p className="mt-1 text-xs text-slate-400">
          Survivor resources: in the US, the National DV Hotline runs an Address Confidentiality referral; many countries
          have equivalents. A local victim-services org can help you file public-record suppressions.
        </p>
      </header>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-100">Do these now</h2>
        <span className="text-sm text-slate-500">{done}/{actions.length} done</span>
      </div>

      <ol className="space-y-3">
        {actions.map((a, i) => (
          <li key={a.id} className="relative pl-9">
            <span className="absolute left-0 top-4 grid h-6 w-6 place-items-center rounded-full bg-signal-danger/15 font-mono text-xs text-signal-danger">
              {i + 1}
            </span>
            <ActionCard action={a} />
          </li>
        ))}
      </ol>
    </div>
  )
}
