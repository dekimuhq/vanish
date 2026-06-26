import { describe, it, expect } from 'vitest'
import { adversaryFor } from './adversary'
import { nameVariants, buildDecoyBio, DECOY_INTERESTS } from './decoy'

describe('adversaryFor', () => {
  it('returns null for no recognised concerns', () => {
    expect(adversaryFor([])).toBeNull()
    expect(adversaryFor(['nonsense'])).toBeNull()
  })

  it('recommends the highest tier among selected concerns', () => {
    expect(adversaryFor(['spam'])?.recommendedTier).toBe(1)
    expect(adversaryFor(['spam', 'brokers'])?.recommendedTier).toBe(2)
    // stalking dominates everything → Ghost
    expect(adversaryFor(['spam', 'brokers', 'stalking'])?.recommendedTier).toBe(4)
  })

  it('names the dominant adversary', () => {
    expect(adversaryFor(['stalking'])?.adversary).toMatch(/specific person/i)
  })
})

describe('decoy generators', () => {
  it('produces deterministic name variants and never crashes on edge input', () => {
    expect(nameVariants('')).toEqual([])
    const v = nameVariants('John Smith')
    expect(v).toContain('J. Smith')
    expect(v).toContain('Smith, John')
    // deterministic
    expect(nameVariants('John Smith')).toEqual(v)
  })

  it('builds a bland bio from interests, empty when none', () => {
    expect(buildDecoyBio([])).toBe('')
    expect(buildDecoyBio(['chess'])).toMatch(/chess/)
    expect(buildDecoyBio(['chess', 'jazz'])).toMatch(/chess and jazz/)
  })

  it('keeps the interest pool non-empty and generic', () => {
    expect(DECOY_INTERESTS.length).toBeGreaterThan(10)
  })
})
