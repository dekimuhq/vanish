import { describe, expect, it } from 'vitest'
import { sanitize } from './store'

describe('sanitize', () => {
  it('returns clean initial state for garbage input', () => {
    expect(sanitize(null).onboarded).toBe(false)
    expect(sanitize(42).progress).toEqual({})
    expect(sanitize('nope').profile.region).toBe('eu')
  })

  it('preserves valid progress entries and drops malformed ones', () => {
    const out = sanitize({
      onboarded: true,
      progress: {
        good: { status: 'done', updatedAt: '2026-01-01' },
        bad: 'not-an-object',
        alsoBad: { nope: true },
      },
    })
    expect(out.onboarded).toBe(true)
    expect(out.progress.good).toBeDefined()
    expect(out.progress.bad).toBeUndefined()
    expect(out.progress.alsoBad).toBeUndefined()
  })

  it('merges a partial profile over defaults', () => {
    const out = sanitize({ profile: { name: 'X', region: 'us' } })
    expect(out.profile.name).toBe('X')
    expect(out.profile.region).toBe('us')
    expect(out.profile.targetTier).toBe(2) // default preserved
  })

  it('always stamps the current schema version', () => {
    expect(sanitize({ schemaVersion: 999 }).schemaVersion).toBe(1)
  })
})
