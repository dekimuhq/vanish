import { describe, expect, it } from 'vitest'
import { ACTIONS, ACTIONS_BY_ID, CATALOG_VERIFIED_AT, verifiedAtOf } from './catalog'
import { LETTERS } from '../lib/letters'
import { CATEGORIES, TIERS } from '../lib/types'

describe('catalog integrity', () => {
  it('has a healthy number of actions across all four tiers', () => {
    expect(ACTIONS.length).toBeGreaterThanOrEqual(60)
    for (const t of [1, 2, 3, 4]) {
      expect(ACTIONS.filter((a) => a.tier === t).length).toBeGreaterThan(5)
    }
  })

  it('has unique ids', () => {
    const ids = ACTIONS.map((a) => a.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('uses only valid tiers and categories', () => {
    for (const a of ACTIONS) {
      expect(TIERS[a.tier]).toBeDefined()
      expect(CATEGORIES[a.category]).toBeDefined()
      expect(['low', 'med', 'high']).toContain(a.effort)
      expect(['low', 'med', 'high']).toContain(a.impact)
    }
  })

  it('every url is a valid https URL', () => {
    for (const a of ACTIONS) {
      if (!a.url) continue
      expect(() => new URL(a.url!), `${a.id} has invalid url`).not.toThrow()
      expect(a.url.startsWith('https://'), `${a.id} url should be https`).toBe(true)
    }
  })

  it('letter references point to real templates', () => {
    for (const a of ACTIONS) {
      if (a.letter) expect(LETTERS[a.letter], `${a.id} -> ${a.letter}`).toBeDefined()
    }
  })

  it('panic priorities are unique enough to give a stable order', () => {
    const panic = ACTIONS.filter((a) => a.panicPriority != null)
    expect(panic.length).toBeGreaterThan(5)
  })

  it('exposes a working id index', () => {
    expect(ACTIONS_BY_ID['hibp']?.title).toBe('Check Have I Been Pwned')
  })

  it('recurring actions are data brokers (the things that re-list you)', () => {
    for (const a of ACTIONS) {
      if (a.recurDays) expect(a.category).toBe('data-brokers')
    }
  })
})

describe('catalog provenance', () => {
  it('exposes a valid baseline verification date', () => {
    expect(CATALOG_VERIFIED_AT).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(Number.isNaN(Date.parse(CATALOG_VERIFIED_AT))).toBe(false)
  })

  it('verifiedAtOf returns the baseline unless an action overrides it', () => {
    const plain = ACTIONS.find((a) => !a.verifiedAt)!
    expect(verifiedAtOf(plain)).toBe(CATALOG_VERIFIED_AT)
    expect(verifiedAtOf({ ...plain, verifiedAt: '2026-09-09' })).toBe('2026-09-09')
  })
})
