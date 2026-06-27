import type { Level, Tier } from '../lib/types'
import { TIERS } from '../lib/types'
import { useI18n } from '../i18n/i18n'

const EFFORT_STYLE: Record<Level, string> = {
  // Borrowed from JustDeleteMe's difficulty colour-code: green=easy → red=hard.
  low: 'bg-signal-ok/15 text-signal-ok',
  med: 'bg-signal-warn/15 text-signal-warn',
  high: 'bg-signal-danger/15 text-signal-danger',
}

export function EffortPill({ level }: { level: Level }) {
  const { t } = useI18n()
  return <span className={`pill ${EFFORT_STYLE[level]}`} title={t('pills.effortTitle')}>{t(`pills.effort.${level}`)}</span>
}

export function ImpactPill({ level }: { level: Level }) {
  const { t } = useI18n()
  const label = t(`pills.impact.${level}`)
  const dots = level === 'high' ? '●●●' : level === 'med' ? '●●○' : '●○○'
  return (
    <span className="pill bg-ghost/10 text-ghost-bright" title={label}>
      <span className="font-mono tracking-tighter">{dots}</span>
      {label}
    </span>
  )
}

const TIER_ACCENT: Record<Tier, string> = {
  1: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/20',
  2: 'bg-ghost/10 text-ghost-bright border-ghost/20',
  3: 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20',
  4: 'bg-fuchsia-400/10 text-fuchsia-300 border-fuchsia-400/20',
}

export function TierBadge({ tier, withName = true }: { tier: Tier; withName?: boolean }) {
  const { t } = useI18n()
  return (
    <span className={`pill border ${TIER_ACCENT[tier]}`}>
      <span className="font-mono">T{tier}</span>
      {withName && t(`tier.${TIERS[tier].key}.name`)}
    </span>
  )
}
