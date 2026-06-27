import { describe, expect, it } from 'vitest'
import { sanitize } from './store'
import { SCHEMA_VERSION } from '../lib/types'

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
    expect(sanitize({ schemaVersion: 999 }).schemaVersion).toBe(SCHEMA_VERSION)
  })
})

describe('sanitize — new slices', () => {
  it('defaults letters to {} and lastBackupAt to null on legacy state', () => {
    const out = sanitize({ onboarded: true, progress: {} })
    expect(out.letters).toEqual({})
    expect(out.lastBackupAt).toBeNull()
    expect(out.schemaVersion).toBe(SCHEMA_VERSION)
  })

  it('keeps well-formed letters and drops malformed ones', () => {
    const out = sanitize({
      letters: {
        good: { id: 'good', kind: 'erasure', recipient: 'X', sentAt: '2026-06-01T00:00:00.000Z', deadlineAt: '2026-07-01T00:00:00.000Z', status: 'sent' },
        bad: { nope: true },
        missingField: { id: 'missingField', kind: 'erasure', recipient: 'X', deadlineAt: '2026-07-01T00:00:00.000Z', status: 'sent' },
        badStatus: { id: 'badStatus', kind: 'erasure', recipient: 'X', sentAt: '2026-06-01T00:00:00.000Z', deadlineAt: '2026-07-01T00:00:00.000Z', status: 'bogus' },
      },
    })
    expect(Object.keys(out.letters)).toEqual(['good'])
  })

  it('keeps a string lastBackupAt', () => {
    const out = sanitize({ lastBackupAt: '2026-06-27T00:00:00.000Z' })
    expect(out.lastBackupAt).toBe('2026-06-27T00:00:00.000Z')
  })
})
