import { useMemo, useState } from 'react'
import { useSearchParams, type SetURLSearchParams } from 'react-router-dom'
import { ActionCard } from '../components/ActionCard'
import { computeScore } from '../lib/score'
import { actionsForRegion, byQuickWin } from '../lib/select'
import { CATEGORIES, TIERS, type Category, type Tier } from '../lib/types'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'

export function Plan() {
  const { state } = useStore()
  const { t, tPlural, localizeAction } = useI18n()
  const [params, setParams] = useSearchParams()
  const [hideDone, setHideDone] = useState(false)
  const [category, setCategory] = useState<Category | 'all'>('all')
  const [query, setQuery] = useState('')

  const actions = actionsForRegion(state.profile.region, state.profile.country)
  const breakdown = computeScore(actions, state)
  const focusTier = params.get('tier') ? (Number(params.get('tier')) as Tier) : null

  const usedCategories = useMemo(() => Array.from(new Set(actions.map((a) => a.category))), [actions])
  const tiers = focusTier ? [focusTier] : ([1, 2, 3, 4] as Tier[])

  const q = query.trim().toLowerCase()
  const byCatAndDone = (a: (typeof actions)[number]) =>
    (category === 'all' || a.category === category) && (!hideDone || state.progress[a.id]?.status !== 'done')

  const toolbar = (
    <Toolbar
      focusTier={focusTier}
      setParams={setParams}
      category={category}
      setCategory={setCategory}
      usedCategories={usedCategories}
      hideDone={hideDone}
      setHideDone={setHideDone}
      query={query}
      setQuery={setQuery}
    />
  )

  if (q) {
    const results = actions
      .filter((a) => {
        const loc = localizeAction(a)
        return (
          loc.title.toLowerCase().includes(q) ||
          (loc.summary ?? '').toLowerCase().includes(q) ||
          t(`category.${a.category}`).toLowerCase().includes(q)
        )
      })
      .filter(byCatAndDone)
      .sort(byQuickWin)
    return (
      <div className="space-y-6">
        <Header />
        {toolbar}
        <p className="text-sm text-slate-500">
          {tPlural('plan.results', results.length, { query })}
        </p>
        <div className="grid gap-3">
          {results.map((a) => (
            <ActionCard key={a.id} action={a} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Header />
      {toolbar}
      {tiers.map((tier) => {
        const list = actions.filter((a) => a.tier === tier).filter(byCatAndDone).sort(byQuickWin)
        if (list.length === 0) return null
        const bt = breakdown.byTier[tier]
        return (
          <section key={tier}>
            <div className="mb-3 flex items-baseline justify-between border-b border-ink-700/60 pb-2">
              <div>
                <h2 className="text-lg font-bold text-slate-100">
                  <span className="font-mono text-slate-500">T{tier}</span> {t(`tier.${TIERS[tier].key}.name`)}
                  <span className="ml-2 text-sm font-normal text-slate-500">{t(`tier.${TIERS[tier].key}.tagline`)}</span>
                </h2>
                <p className="mt-0.5 text-xs text-slate-500">{t(`tier.${TIERS[tier].key}.who`)}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-slate-500">
                {bt.done}/{bt.total}
              </span>
            </div>
            <div className="grid gap-3">
              {list.map((a) => (
                <ActionCard key={a.id} action={a} showTier={false} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

function Header() {
  const { t } = useI18n()
  return (
    <header>
      <h1 className="text-2xl font-bold text-slate-100">{t('plan.title')}</h1>
      <p className="mt-1 text-sm text-slate-400">{t('plan.subtitle')}</p>
    </header>
  )
}

interface ToolbarProps {
  focusTier: Tier | null
  setParams: SetURLSearchParams
  category: Category | 'all'
  setCategory: (c: Category | 'all') => void
  usedCategories: Category[]
  hideDone: boolean
  setHideDone: (b: boolean) => void
  query: string
  setQuery: (s: string) => void
}

function Toolbar({
  focusTier,
  setParams,
  category,
  setCategory,
  usedCategories,
  hideDone,
  setHideDone,
  query,
  setQuery,
}: ToolbarProps) {
  const { t } = useI18n()
  return (
    <div className="card sticky top-2 z-10 space-y-2 p-3">
      <div className="flex flex-wrap items-center gap-2">
        <FilterChip active={focusTier === null} onClick={() => setParams({})}>
          {t('plan.allTiers')}
        </FilterChip>
        {([1, 2, 3, 4] as Tier[]).map((tier) => (
          <FilterChip key={tier} active={focusTier === tier} onClick={() => setParams({ tier: String(tier) })}>
            T{tier} {t(`tier.${TIERS[tier].key}.name`)}
          </FilterChip>
        ))}
        <span className="mx-1 hidden h-5 w-px bg-ink-700 sm:block" />
        <select
          className="input max-w-[10rem] py-1.5 text-xs"
          value={category}
          onChange={(e) => setCategory(e.target.value as Category | 'all')}
          aria-label={t('plan.filterByCategory')}
        >
          <option value="all">{t('plan.allCategories')}</option>
          {usedCategories.map((c) => (
            <option key={c} value={c}>
              {CATEGORIES[c].icon} {t(`category.${c}`)}
            </option>
          ))}
        </select>
        <label className="ml-auto flex cursor-pointer items-center gap-2 text-xs text-slate-400">
          <input type="checkbox" checked={hideDone} onChange={(e) => setHideDone(e.target.checked)} className="accent-ghost" />
          {t('plan.hideCompleted')}
        </label>
      </div>
      <input
        className="input py-1.5 text-sm"
        type="search"
        placeholder={t('plan.searchPlaceholder')}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label={t('plan.searchAria')}
      />
    </div>
  )
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`pill border px-2.5 py-1 text-xs transition ${
        active ? 'border-ghost/40 bg-ghost/10 text-ghost-bright' : 'border-ink-700 text-slate-400 hover:border-ink-600'
      }`}
    >
      {children}
    </button>
  )
}
