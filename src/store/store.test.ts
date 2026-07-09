import { describe, expect, it } from 'vitest'
import { sanitize, reducer } from './store'
import { SCHEMA_VERSION, initialState, type LetterRecord, type AppState, type ScanState } from '../lib/types'

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

  it('clamps an out-of-range targetTier from a corrupt import (no white-screen)', () => {
    // targetTier indexes TIERS in Report/Dashboard; an invalid value used to
    // crash the whole app. Must fall back to the default tier instead.
    expect(sanitize({ profile: { targetTier: 9 } }).profile.targetTier).toBe(2)
    expect(sanitize({ profile: { targetTier: 'three' } }).profile.targetTier).toBe(2)
    expect(sanitize({ profile: { targetTier: 4 } }).profile.targetTier).toBe(4) // valid kept
  })

  it('rejects an invalid region and drops an unknown country code', () => {
    const out = sanitize({ profile: { region: 'mars', country: 'zz' } })
    expect(out.profile.region).toBe('eu') // default
    expect(out.profile.country).toBeUndefined()
    expect(sanitize({ profile: { region: 'uk', country: 'de' } }).profile.country).toBe('de')
  })

  it('coerces a non-array concerns field to an empty array', () => {
    expect(sanitize({ profile: { concerns: 'stalking' } }).profile.concerns).toEqual([])
    expect(sanitize({ profile: { concerns: ['a', 5, 'b'] } }).profile.concerns).toEqual(['a', 'b'])
  })

  it('coerces non-string name/email/address to safe defaults', () => {
    const out = sanitize({ profile: { name: 42, email: null, address: {} } })
    expect(out.profile.name).toBe('')
    expect(out.profile.email).toBe('')
    expect(out.profile.address).toBe('')
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

const sample: LetterRecord = {
  id: 'L1', kind: 'erasure', recipient: 'Spokeo',
  sentAt: '2026-06-01T00:00:00.000Z', deadlineAt: '2026-07-01T00:00:00.000Z', status: 'sent',
}

describe('reducer — letters', () => {
  it('logs, updates, and deletes a letter', () => {
    let s = reducer(initialState(), { type: 'logLetter', record: sample })
    expect(s.letters.L1.recipient).toBe('Spokeo')

    s = reducer(s, { type: 'updateLetter', id: 'L1', patch: { status: 'resolved' } })
    expect(s.letters.L1.status).toBe('resolved')

    s = reducer(s, { type: 'deleteLetter', id: 'L1' })
    expect(s.letters.L1).toBeUndefined()
  })

  it('updateLetter on a missing id is a no-op', () => {
    const s = reducer(initialState(), { type: 'updateLetter', id: 'nope', patch: { status: 'resolved' } })
    expect(s.letters).toEqual({})
  })

  it('markBackedUp stamps lastBackupAt', () => {
    const s = reducer(initialState(), { type: 'markBackedUp', at: '2026-06-27T10:00:00.000Z' })
    expect(s.lastBackupAt).toBe('2026-06-27T10:00:00.000Z')
  })
})

const scanA: ScanState = {
  importedAt: '2026-07-09T00:00:00Z', engine: 'vanish-recon@0.1.0',
  profileFingerprint: 'fp', verified: true,
  exposures: [
    { probeId: 'username:GitHub', source: 'GitHub', category: 'username', confidence: 0.9, catalogActionId: 'prune-social-profiles' },
    { probeId: 'hibp-account', source: 'Breach', category: 'breach', confidence: 0.95, catalogActionId: 'change-breached-passwords' },
  ],
  resolved: [],
}

describe('scan layer', () => {
  it('migrates a v2 state (no scan field) to v3 with scan:null', () => {
    const v2: unknown = { schemaVersion: 2, onboarded: true, lang: 'en',
      profile: initialState().profile, progress: {}, letters: {}, lastBackupAt: null }
    const s = sanitize(v2)
    expect(s.schemaVersion).toBe(SCHEMA_VERSION)
    expect(s.scan).toBeNull()
  })

  it('sanitize drops a malformed scan to null', () => {
    const bad: unknown = { ...initialState(), scan: { exposures: 'nope' } }
    expect(sanitize(bad).scan).toBeNull()
  })

  it('sanitize keeps a well-formed scan', () => {
    const ok: AppState = { ...initialState(), scan: scanA }
    expect(sanitize(ok).scan?.exposures).toHaveLength(2)
  })

  it('importScan sets the scan and computes resolved vs the prior scan', () => {
    const withA = reducer({ ...initialState(), scan: scanA }, { type: 'importScan', scan: {
      ...scanA, importedAt: '2026-07-10T00:00:00Z',
      // GitHub gone this round; Breach remains
      exposures: [scanA.exposures[1]!], resolved: [],
    }})
    expect(withA.scan?.exposures).toHaveLength(1)
    expect(withA.scan?.resolved).toContain('GitHub')
  })

  it('importScan does not touch progress or letters', () => {
    const base: AppState = { ...initialState(), progress: { 'hibp': { status: 'done', updatedAt: 'x' } } }
    const out = reducer(base, { type: 'importScan', scan: scanA })
    expect(out.progress['hibp']?.status).toBe('done')
  })
})
