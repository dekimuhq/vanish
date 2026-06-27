import { ActionCard } from '../components/ActionCard'
import { dueRechecks } from '../lib/score'
import { actionsForRegion, byQuickWin } from '../lib/select'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'

export function Brokers() {
  const { state } = useStore()
  const { t, tPlural } = useI18n()
  const brokers = actionsForRegion(state.profile.region, state.profile.country)
    .filter((a) => a.category === 'data-brokers')
    .sort(byQuickWin)
  const done = brokers.filter((a) => state.progress[a.id]?.status === 'done').length
  const rechecks = dueRechecks(actionsForRegion(state.profile.region, state.profile.country), state)

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-100">{t('brokers.title')}</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-400">
          {t('brokers.subtitle')} {' '}
          <span className="text-slate-400">{t('brokers.cleared', { done, total: brokers.length })}</span>
        </p>
      </header>

      {rechecks.length > 0 && (
        <div className="card border-signal-warn/30 bg-signal-warn/[0.04] p-4 text-sm">
          <strong className="text-signal-warn">{tPlural('brokers.dueToRedo', rechecks.length)}</strong>{' '}
          <span className="text-slate-400">{t('brokers.relistBody')}</span>
        </div>
      )}

      <div className="card p-4 text-sm text-slate-400">
        <strong className="text-slate-200">{t('brokers.honestLabel')}</strong> {t('brokers.honestBody')}
      </div>

      <div className="grid gap-3">
        {brokers.map((a) => (
          <ActionCard key={a.id} action={a} />
        ))}
      </div>
    </div>
  )
}
