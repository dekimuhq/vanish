import { describe, expect, it } from 'vitest'
import { actionsForRegion, isRelevant } from './select'
import { ACTIONS } from '../data/catalog'
import type { Action } from './types'

const base: Action = {
  id: 'x', title: 'x', tier: 2, category: 'data-brokers', summary: '', effort: 'low', impact: 'low',
}

describe('isRelevant — country scoping', () => {
  it('country-scoped action shows only to a matching country', () => {
    const a: Action = { ...base, countries: ['se'] }
    expect(isRelevant(a, 'eu', 'se')).toBe(true)
    expect(isRelevant(a, 'eu', 'fr')).toBe(false)
  })

  it('country-scoped action is hidden when country is unknown', () => {
    const a: Action = { ...base, countries: ['se'] }
    expect(isRelevant(a, 'eu', undefined)).toBe(false)
  })

  it('countries override regions', () => {
    const a: Action = { ...base, regions: ['all'], countries: ['de'] }
    expect(isRelevant(a, 'eu', 'fr')).toBe(false) // 'all' ignored once countries set
    expect(isRelevant(a, 'eu', 'de')).toBe(true)
  })

  it('falls back to region when no countries set', () => {
    expect(isRelevant({ ...base, regions: ['us'] }, 'us')).toBe(true)
    expect(isRelevant({ ...base, regions: ['us'] }, 'eu')).toBe(false)
    expect(isRelevant({ ...base, regions: ['all'] }, 'other')).toBe(true)
  })
})

describe('actionsForRegion — real catalog', () => {
  it('a Swede sees Swedish-only actions; a French user does not', () => {
    const se = actionsForRegion('eu', 'se').map((a) => a.id)
    const fr = actionsForRegion('eu', 'fr').map((a) => a.id)
    expect(se).toContain('optout-se-hitta')
    expect(fr).not.toContain('optout-se-hitta')
    expect(fr).toContain('optout-fr-bloctel')
  })

  it('an EU user with no country set sees no country-scoped actions', () => {
    const ids = actionsForRegion('eu', undefined).map((a) => a.id)
    const countryScoped = ACTIONS.filter((a) => a.countries).map((a) => a.id)
    for (const id of countryScoped) expect(ids).not.toContain(id)
  })
})
