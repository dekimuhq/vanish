// Standalone data sanity check, runnable in CI without the test runner:
//   npm run validate:data
// Verifies catalog integrity + that every letter reference resolves. Exits non-zero on problems.
import { ACTIONS } from '../src/data/catalog'
import { COUNTRIES, EU_COUNTRIES, regionForCountry } from '../src/data/countries'
import { LETTERS } from '../src/lib/letters'
import { CATEGORIES, TIERS } from '../src/lib/types'

const problems: string[] = []
const ids = new Set<string>()

for (const a of ACTIONS) {
  if (ids.has(a.id)) problems.push(`duplicate id: ${a.id}`)
  ids.add(a.id)
  if (!TIERS[a.tier]) problems.push(`${a.id}: bad tier ${a.tier}`)
  if (!CATEGORIES[a.category]) problems.push(`${a.id}: bad category ${a.category}`)
  if (a.url) {
    try {
      const u = new URL(a.url)
      if (u.protocol !== 'https:') problems.push(`${a.id}: non-https url ${a.url}`)
    } catch {
      problems.push(`${a.id}: invalid url ${a.url}`)
    }
  }
  if (a.letter && !LETTERS[a.letter]) problems.push(`${a.id}: unknown letter ${a.letter}`)
  if (a.countries) {
    if (!a.countries.length) problems.push(`${a.id}: empty countries[] (omit the field instead)`)
    for (const c of a.countries) if (!COUNTRIES[c]) problems.push(`${a.id}: unknown country ${c}`)
  }
}

// Country table: EU-27 complete, codes consistent, authority URLs https.
if (EU_COUNTRIES.length !== 27) problems.push(`EU list has ${EU_COUNTRIES.length} countries, expected 27`)
for (const [code, info] of Object.entries(COUNTRIES)) {
  if (info.code !== code) problems.push(`country ${code}: code mismatch (${info.code})`)
  if (regionForCountry(code as never) !== info.region) problems.push(`country ${code}: region mapping mismatch`)
  if (info.authority) {
    try {
      if (new URL(info.authority.url).protocol !== 'https:') problems.push(`country ${code}: non-https authority url`)
    } catch {
      problems.push(`country ${code}: invalid authority url ${info.authority.url}`)
    }
  }
}
for (const code of EU_COUNTRIES) {
  if (COUNTRIES[code].region !== 'eu') problems.push(`EU country ${code} not mapped to region 'eu'`)
  if (!COUNTRIES[code].authority) problems.push(`EU country ${code} missing supervisory authority`)
}

const counts = [1, 2, 3, 4].map((t) => `T${t}=${ACTIONS.filter((a) => a.tier === t).length}`)
console.log(`Catalog: ${ACTIONS.length} actions (${counts.join(' ')}), ${Object.keys(LETTERS).length} letters`)
console.log(`Countries: ${Object.keys(COUNTRIES).length} (${EU_COUNTRIES.length} EU + UK/US/other)`)

if (problems.length) {
  console.error(`\n✗ ${problems.length} problem(s):`)
  for (const p of problems) console.error('  - ' + p)
  process.exit(1)
}
console.log('✓ Catalog valid.')
