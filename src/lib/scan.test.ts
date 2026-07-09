import { describe, it, expect } from 'vitest'
import { parseScanReport, ScanError, mapToCatalog } from './scan'

const report = {
  version: 1, generatedAt: '2026-07-09T00:00:00Z', engine: 'vanish-recon@0.1.0',
  profileFingerprint: 'fp',
  findings: [
    { probeId: 'username:GitHub', category: 'username', matched: true, confidence: 0.9, matchedIdentifier: 'alice', evidenceUrl: 'https://github.com/alice' },
    { probeId: 'username:Reddit', category: 'username', matched: false, confidence: 0, matchedIdentifier: 'alice' },
    { probeId: 'hibp-account', category: 'breach', matched: true, confidence: 0.95, matchedIdentifier: 'a@b.co' },
  ],
  signature: { alg: 'ed25519', pub: '', sig: '' },
}

describe('parseScanReport', () => {
  it('keeps only matched findings and maps sources + catalog ids', async () => {
    // verifier stub returns false (no real key) → verified:false but still parses
    const scan = await parseScanReport(report, async () => false)
    expect(scan.exposures).toHaveLength(2)
    expect(scan.exposures.map((e) => e.source)).toEqual(['GitHub', 'Breach'])
    expect(scan.exposures.find((e) => e.probeId === 'hibp-account')?.catalogActionId).toBe('change-breached-passwords')
    expect(scan.verified).toBe(false)
  })

  it('marks verified:true when the verifier passes', async () => {
    const scan = await parseScanReport(report, async () => true)
    expect(scan.verified).toBe(true)
  })

  it('rejects a non-report object', async () => {
    await expect(parseScanReport({ nope: 1 }, async () => false)).rejects.toBeInstanceOf(ScanError)
  })
})

describe('mapToCatalog', () => {
  it('maps a username source to the social-prune action by default', () => {
    expect(mapToCatalog({ probeId: 'username:Foo', category: 'username' })).toBe('prune-social-profiles')
  })
  it('honors an explicit finding catalogActionId hint', () => {
    expect(mapToCatalog({ probeId: 'username:GitHub', category: 'username', catalogActionId: 'delete-dormant-accounts' })).toBe('delete-dormant-accounts')
  })
})
