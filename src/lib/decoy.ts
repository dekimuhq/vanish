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

// The interest pool, filler-bio text, and do/don't rules now live in the i18n
// content layer (`decoy.interests` / `decoy.bioTemplate` / `decoy.rulesDo` /
// `decoy.rulesDont`) and are rendered from there in `views/Decoy.tsx`. The old
// `DECOY_INTERESTS` / `buildDecoyBio` / `DECOY_RULES` constants were removed to
// kill the second, drift-prone source of truth.
