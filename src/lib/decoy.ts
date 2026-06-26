/** Decoy Kit — pure, offline generators for *diluting* your own profile.
 *
 *  The cross-research consensus ("poison, don't delete"): brokers and platforms
 *  re-list and rebuild, so deletion is a treadmill. Adding plausible noise to
 *  YOUR OWN low-stakes accounts degrades the confidence of anyone trying to
 *  pattern-match the real you.
 *
 *  Hard ethical scope — enforced by what these functions will and won't do:
 *  they only ever produce material for your *own* accounts. Nothing here
 *  impersonates a real person, forges reviews, or signs anyone else up. */

/** Plausible alternate renderings of your own name, to seed across throwaway
 *  profiles so a single canonical "you" is harder to assemble. Deterministic. */
export function nameVariants(fullName: string): string[] {
  const parts = fullName.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return []
  const first = parts[0]
  const last = parts[parts.length - 1]
  const out = new Set<string>()
  if (last && last !== first) {
    out.add(`${first[0]}. ${last}`)
    out.add(`${first} ${last[0]}.`)
    out.add(`${last}, ${first}`)
    out.add(`${first[0]}${last[0]}`.toUpperCase())
  }
  // light spelling drift on the first name only (common, non-identifying)
  const drift: Record<string, string> = { ph: 'f', y: 'i', ck: 'k', John: 'Jon', Catherine: 'Katherine' }
  let alt = first
  for (const [a, b] of Object.entries(drift)) alt = alt.replace(a, b)
  if (alt !== first) out.add(last && last !== first ? `${alt} ${last}` : alt)
  return [...out]
}

/** A curated pool of bland, non-identifying interests. The point is *statistical
 *  noise*, not a convincing persona — generic hobbies that match millions. */
export const DECOY_INTERESTS: readonly string[] = [
  'houseplants', 'cycling', 'baking sourdough', 'birdwatching', 'board games',
  'hiking', 'film photography', 'jazz', 'pottery', 'crosswords',
  'gardening', 'running', 'cooking', 'astronomy', 'cold-water swimming',
  'chess', 'knitting', 'road trips', 'coffee', 'live music',
]

/** Build a bland filler bio from a selection of interests. Pure. */
export function buildDecoyBio(interests: string[]): string {
  const list = interests.filter(Boolean)
  if (list.length === 0) return ''
  const head = list.slice(0, -1).join(', ')
  const tail = list[list.length - 1]
  const joined = list.length === 1 ? tail : `${head} and ${tail}`
  return `Just here for ${joined}. Keep it friendly. Opinions my own.`
}

/** The non-negotiable do/don't list shown in the UI. */
export const DECOY_RULES = {
  do: [
    'Only ever touch accounts that are YOURS.',
    'Use it on low-stakes throwaway profiles, never anything tied to money or ID.',
    'Aim for bland and generic — noise, not a convincing fake person.',
  ],
  dont: [
    'Never impersonate a real, named person.',
    'Never write fake reviews or ratings.',
    'Never sign up anyone else, or use anyone else’s details.',
    'Never use this to evade a creditor, a court, or law enforcement.',
  ],
} as const
