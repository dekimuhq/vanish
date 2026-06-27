import { Link } from 'react-router-dom'
import { computeScore } from '../lib/score'
import { actionsForRegion, byQuickWin } from '../lib/select'
import { TIERS, type Tier } from '../lib/types'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'

// A print-optimised checklist of everything still to do. window.print() lets the
// user save it as a PDF or paper checklist — fully offline, no generator needed.
export function Report() {
  const { state } = useStore()
  const { t, localizeAction } = useI18n()
  const actions = actionsForRegion(state.profile.region, state.profile.country)
  const breakdown = computeScore(actions, state)
  const today = new Date().toISOString().slice(0, 10)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-slate-100">{t('report.title')}</h1>
          <p className="mt-1 text-sm text-slate-400">{t('report.subtitle')}</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary btn-sm" onClick={() => window.print()}>
            {t('report.print')}
          </button>
          <Link className="btn-ghost btn-sm" to="/">
            {t('common.back')}
          </Link>
        </div>
      </div>

      <p className="rounded-xl border border-ink-700/60 bg-ink-900/40 p-3 text-xs text-slate-400 print:hidden">
        <span className="text-ghost">⬡</span> {t('report.costNote')}
      </p>

      <article className="card space-y-6 p-6 print:border-none print:bg-white print:p-0 print:text-black">
        <header className="flex items-baseline justify-between border-b border-ink-700/60 pb-3 print:border-black/20">
          <div>
            <div className="text-lg font-bold text-slate-100 print:text-black">{t('report.docTitle')}</div>
            <div className="text-xs text-slate-400">
              {t('report.meta', {
                date: today,
                tier: t(`tier.${TIERS[state.profile.targetTier].key}.name`),
                region: state.profile.region.toUpperCase(),
              })}
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-3xl font-bold text-ghost print:text-black">{breakdown.score}</div>
            <div className="text-[10px] uppercase tracking-widest text-slate-400">{t('report.privacyScore')}</div>
          </div>
        </header>

        {([1, 2, 3, 4] as Tier[]).map((tier) => {
          const remaining = actions
            .filter((a) => a.tier === tier)
            .filter((a) => (state.progress[a.id]?.status ?? 'todo') === 'todo')
            .sort(byQuickWin)
          if (remaining.length === 0) return null
          return (
            <section key={tier} className="break-inside-avoid">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-ghost-dim print:text-black">
                {t('report.tierHeading', { tier, name: t(`tier.${TIERS[tier].key}.name`), count: remaining.length })}
              </h2>
              <ul className="space-y-2">
                {remaining.map((a) => {
                  const loc = localizeAction(a)
                  return (
                    <li key={a.id} className="flex gap-3 text-sm">
                      <span className="mt-0.5 inline-block h-4 w-4 shrink-0 rounded border border-slate-500 print:border-black" />
                      <span>
                        <span className="font-medium text-slate-100 print:text-black">{loc.title}</span>
                        <span className="text-slate-400"> · {t(`category.${a.category}`)}</span>
                        <div className="text-slate-400 print:text-black/70">{loc.summary}</div>
                        {a.url && <div className="break-all font-mono text-[11px] text-ghost-dim print:text-black/60">{a.url}</div>}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </section>
          )
        })}

        {breakdown.doneCount === breakdown.totalCount && (
          <p className="text-sm text-slate-400">{t('report.allDone')}</p>
        )}

        <footer className="border-t border-ink-700/60 pt-3 text-[11px] text-slate-400 print:border-black/20 print:text-black/60">
          {t('report.footer')}
        </footer>
      </article>
    </div>
  )
}
