import { Link, useParams } from 'react-router-dom'
import { ACTIONS_BY_ID } from '../data/catalog'
import { LEARN, LEARN_BY_ID } from '../data/learn'
import { useI18n } from '../i18n/i18n'

export function Learn() {
  const { id } = useParams()
  if (id) return <LearnDetail id={id} />
  return <LearnList />
}

function LearnList() {
  const { t } = useI18n()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-100">{t('learn.title')}</h1>
        <p className="mt-1 text-sm text-slate-400">{t('learn.lead')}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {LEARN.map((e) => (
          <Link
            key={e.id}
            to={`/learn/${e.id}`}
            className="rounded-lg border border-ink-700/60 bg-ink-800/40 p-4 transition hover:border-ink-600"
          >
            <h2 className="font-bold text-slate-100">{t(`learn.${e.id}.title`)}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

function LearnDetail({ id }: { id: string }) {
  const { t, tList, localizeAction } = useI18n()
  const entry = LEARN_BY_ID[id]
  if (!entry) {
    return (
      <div className="space-y-4">
        <Link to="/learn" className="text-sm text-slate-400 hover:text-slate-200">
          {t('common.back')}
        </Link>
        <p className="text-slate-300">{t('learn.notFound')}</p>
      </div>
    )
  }
  const paragraphs = tList(`learn.${id}.body`)
  const related = (entry.relatedActionIds ?? [])
    .map((aid) => ACTIONS_BY_ID[aid])
    .filter(Boolean)
    .map((a) => localizeAction(a))
  return (
    <div className="space-y-6">
      <Link to="/learn" className="text-sm text-slate-400 hover:text-slate-200">
        {t('common.back')}
      </Link>
      <div>
        <h1 className="text-2xl font-bold text-slate-100">{t(`learn.${id}.title`)}</h1>
        <div className="mt-3 space-y-3 text-slate-300">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      {related.length > 0 && (
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">{t('learn.related')}</h2>
          <ul className="space-y-1">
            {related.map((a) => (
              <li key={a.id}>
                <Link to={`/plan?q=${encodeURIComponent(a.title)}`} className="text-ghost-bright hover:underline">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {entry.externalUrl && (
        <a href={entry.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-sm inline-block">
          {entry.externalLabel ?? t('learn.readMore')} ↗
        </a>
      )}
    </div>
  )
}
