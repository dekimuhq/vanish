import { TIERS, type Tier } from './types'

/** Maps an onboarding concern id to the adversary it represents and the tier
 *  that realistically counters it. The research consensus across every serious
 *  source: match your effort to who you're actually hiding from. Going further
 *  than your threat model trades real convenience for no real safety. */
const CONCERN_MAP: Record<string, { tier: Tier; adversary: string }> = {
  stalking: { tier: 4, adversary: 'a specific person trying to find you' },
  bigtech: { tier: 3, adversary: 'Big Tech profiling & ad networks' },
  brokers: { tier: 2, adversary: 'data brokers selling your profile' },
  breaches: { tier: 2, adversary: 'breaches & account takeover' },
  recruiters: { tier: 1, adversary: 'casual searchers — dates, recruiters' },
  spam: { tier: 1, adversary: 'spammers & junk-mail lists' },
}

export interface AdversaryProfile {
  adversary: string
  recommendedTier: Tier
  rationale: string
}

/** The dominant (highest-tier) concern decides the recommended tier — you must
 *  plan for your strongest adversary, not your weakest. Returns null when no
 *  recognised concern was selected. */
export function adversaryFor(concerns: string[]): AdversaryProfile | null {
  const hits = concerns.map((c) => CONCERN_MAP[c]).filter(Boolean)
  if (hits.length === 0) return null
  const top = hits.reduce((a, b) => (b.tier > a.tier ? b : a))
  return {
    adversary: top.adversary,
    recommendedTier: top.tier,
    rationale: `Your strongest concern — ${top.adversary} — calls for ${TIERS[top.tier].name}. Match your effort to who you're actually hiding from; going further than your threat model costs convenience for no real gain.`,
  }
}
