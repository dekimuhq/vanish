// Standalone data sanity check, runnable in CI without the test runner:
//   npm run validate:data
// Verifies catalog integrity + that every letter reference resolves. Exits non-zero on problems.
import { ACTIONS } from '../src/data/catalog'
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
}

const counts = [1, 2, 3, 4].map((t) => `T${t}=${ACTIONS.filter((a) => a.tier === t).length}`)
console.log(`Catalog: ${ACTIONS.length} actions (${counts.join(' ')}), ${Object.keys(LETTERS).length} letters`)

if (problems.length) {
  console.error(`\n✗ ${problems.length} problem(s):`)
  for (const p of problems) console.error('  - ' + p)
  process.exit(1)
}
console.log('✓ Catalog valid.')
