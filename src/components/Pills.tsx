import type { Level, Tier } from '../lib/types'
import { TIERS } from '../lib/types'

const EFFORT_STYLE: Record<Level, string> = {
  // Borrowed from JustDeleteMe's difficulty colour-code: green=easy → red=hard.
  low: 'bg-signal-ok/15 text-signal-ok',
  med: 'bg-signal-warn/15 text-signal-warn',
  high: 'bg-signal-danger/15 text-signal-danger',
}
const EFFORT_LABEL: Record<Level, string> = { low: 'Easy', med: 'Moderate', high: 'Involved' }
const IMPACT_LABEL: Record<Level, string> = { low: 'Low impact', med: 'Solid impact', high: 'High impact' }

export function EffortPill({ level }: { level: Level }) {
  return <span className={`pill ${EFFORT_STYLE[level]}`} title="How much effort this takes">{EFFORT_LABEL[level]}</span>
}

export function ImpactPill({ level }: { level: Level }) {
  const dots = level === 'high' ? '●●●' : level === 'med' ? '●●○' : '●○○'
  return (
    <span className="pill bg-ghost/10 text-ghost-bright" title={IMPACT_LABEL[level]}>
      <span className="font-mono tracking-tighter">{dots}</span>
      {IMPACT_LABEL[level]}
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
  return (
    <span className={`pill border ${TIER_ACCENT[tier]}`}>
      <span className="font-mono">T{tier}</span>
      {withName && TIERS[tier].name}
    </span>
  )
}

export function tierAccent(tier: Tier): string {
  return TIER_ACCENT[tier]
}
