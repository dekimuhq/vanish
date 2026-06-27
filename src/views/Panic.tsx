import { ActionCard } from '../components/ActionCard'
import { panicActions } from '../lib/select'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'

export function Panic() {
  const { state } = useStore()
  const { t } = useI18n()
  const actions = panicActions(state.profile.region, state.profile.country)
  const done = actions.filter((a) => state.progress[a.id]?.status === 'done').length

  return (
    <div className="space-y-6">
      <header className="card border-signal-danger/30 bg-signal-danger/[0.05] p-5">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-100">{t('panic.title')}</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">{t('panic.intro')}</p>
        <p className="mt-3 text-sm font-semibold text-signal-danger">{t('panic.danger')}</p>
        <p className="mt-1 text-xs text-slate-400">{t('panic.resources')}</p>
      </header>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-100">{t('panic.doNow')}</h2>
        <span className="text-sm text-slate-400">{t('panic.doneCount', { done, total: actions.length })}</span>
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
