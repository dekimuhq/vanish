import { describe, expect, it } from 'vitest'
import { COUNTRIES, COUNTRY_GROUPS, EU_COUNTRIES, authorityFor, regionForCountry } from './countries'

const EU_27 = [
  'at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr',
  'de', 'gr', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl',
  'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se',
]

describe('country table', () => {
  it('lists exactly the EU-27', () => {
    expect([...EU_COUNTRIES].sort()).toEqual([...EU_27].sort())
  })

  it('every code key matches its info.code', () => {
    for (const [code, info] of Object.entries(COUNTRIES)) {
      expect(info.code).toBe(code)
      expect(info.name.length).toBeGreaterThan(0)
      expect(info.flag.length).toBeGreaterThan(0)
    }
  })

  it('maps every EU country to region eu, with an https authority', () => {
    for (const c of EU_COUNTRIES) {
      expect(COUNTRIES[c].region).toBe('eu')
      const auth = COUNTRIES[c].authority
      expect(auth, `${c} should have an authority`).toBeDefined()
      expect(auth!.url.startsWith('https://'), `${c} authority should be https`).toBe(true)
    }
  })

  it('maps the coarse buckets correctly', () => {
    expect(regionForCountry('gb')).toBe('uk')
    expect(regionForCountry('us')).toBe('us')
    expect(regionForCountry('ot')).toBe('other')
    expect(regionForCountry('fr')).toBe('eu')
    expect(regionForCountry(undefined)).toBe('eu') // backward-compatible default
  })

  it('exposes the UK supervisory authority and none for the US', () => {
    expect(authorityFor('gb')?.name).toContain('ICO')
    expect(authorityFor('us')).toBeUndefined()
    expect(authorityFor(undefined)).toBeUndefined()
  })

  it('groups cover every country exactly once', () => {
    const grouped = COUNTRY_GROUPS.flatMap((g) => g.codes)
    expect(grouped.length).toBe(Object.keys(COUNTRIES).length)
    expect(new Set(grouped).size).toBe(grouped.length)
  })

  it('covers EEA non-EU members (IS/NO) with their authority, region eu, and a dedicated group', () => {
    for (const c of ['is', 'no'] as const) {
      expect(COUNTRIES[c].region).toBe('eu') // GDPR applies via the EEA Agreement
      const auth = COUNTRIES[c].authority
      expect(auth, `${c} should have a supervisory authority`).toBeDefined()
      expect(auth!.url.startsWith('https://')).toBe(true)
      expect(regionForCountry(c)).toBe('eu')
    }
    // They are grouped under EEA, not folded into the EU-27.
    expect(EU_COUNTRIES).not.toContain('is')
    expect(EU_COUNTRIES).not.toContain('no')
    const eea = COUNTRY_GROUPS.find((g) => g.key === 'eea')
    expect(eea?.codes).toEqual(['is', 'no'])
  })
})
