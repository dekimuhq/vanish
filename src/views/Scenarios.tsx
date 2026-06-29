import { Link, useParams } from 'react-router-dom'
import { ActionCard } from '../components/ActionCard'
import { ACTIONS_BY_ID } from '../data/catalog'
import { SCENARIOS, SCENARIOS_BY_ID } from '../data/scenarios'
import { useI18n } from '../i18n/i18n'
import { isRelevant } from '../lib/select'
import { useStore } from '../store/store'

export function Scenarios() {
  const { id } = useParams()
  if (id) return <ScenarioDetail id={id} />
  return <ScenarioList />
}

function ScenarioList() {
  const { t } = useI18n()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">{t('scenarios.title')}</h1>
        <p className="mt-1 text-sm text-slate-400">{t('scenarios.lead')}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {SCENARIOS.map((s) => (
          <Link
            key={s.id}
            to={`/scenarios/${s.id}`}
            className="rounded-lg border border-ink-700/60 bg-ink-800/40 p-4 transition hover:border-ink-600"
          >
            <h2 className="font-bold text-slate-100">{t(`scenario.${s.id}.title`)}</h2>
            <p className="mt-1 text-sm text-slate-400">{t(`scenario.${s.id}.intro`)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ScenarioDetail({ id }: { id: string }) {
  const { t } = useI18n()
  const { state } = useStore()
  const scenario = SCENARIOS_BY_ID[id]
  if (!scenario) {
    return (
      <div className="space-y-4">
        <Link to="/scenarios" className="text-sm text-slate-400 hover:text-slate-200">
          {t('common.back')}
        </Link>
        <p className="text-slate-300">{t('scenarios.notFound')}</p>
      </div>
    )
  }
  const actions = scenario.actionIds
    .map((aid) => ACTIONS_BY_ID[aid])
    .filter((a) => a && isRelevant(a, state.profile.region, state.profile.country))
  return (
    <div className="space-y-6">
      <Link to="/scenarios" className="text-sm text-slate-400 hover:text-slate-200">
        {t('common.back')}
      </Link>
      <div>
        <h1 className="text-2xl font-bold text-slate-100">{t(`scenario.${id}.title`)}</h1>
        <p className="mt-1 text-sm text-slate-400">{t(`scenario.${id}.intro`)}</p>
      </div>
      <div className="grid gap-3">
        {actions.map((a) => (
          <ActionCard key={a.id} action={a} />
        ))}
      </div>
    </div>
  )
}
