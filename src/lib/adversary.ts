import type { Tier } from './types'

/** Maps an onboarding concern id to the tier that realistically counters it.
 *  The research consensus across every serious source: match your effort to who
 *  you're actually hiding from. Going further than your threat model trades real
 *  convenience for no real safety. The adversary *phrase* itself is localized
 *  (`t('adversary.'+concernId)`), so only the structural mapping lives here. */
const CONCERN_TIER: Record<string, Tier> = {
  stalking: 4,
  bigtech: 3,
  brokers: 2,
  breaches: 2,
  recruiters: 1,
  spam: 1,
}

export interface AdversaryProfile {
  /** Concern id of the dominant adversary; resolve text via `t('adversary.'+id)`. */
  concernId: string
  recommendedTier: Tier
}

/** The dominant (highest-tier) concern decides the recommended tier — you must
 *  plan for your strongest adversary, not your weakest. Returns null when no
 *  recognised concern was selected. */
export function adversaryFor(concerns: string[]): AdversaryProfile | null {
  const hits = concerns
    .map((c) => (c in CONCERN_TIER ? { concernId: c, tier: CONCERN_TIER[c] } : null))
    .filter((x): x is { concernId: string; tier: Tier } => x !== null)
  if (hits.length === 0) return null
  const top = hits.reduce((a, b) => (b.tier > a.tier ? b : a))
  return { concernId: top.concernId, recommendedTier: top.tier }
}
