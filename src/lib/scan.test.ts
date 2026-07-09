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
  it('does not resolve prototype-member probeIds to an inherited property', () => {
    // '__proto__'/'constructor'/'toString' index Object.prototype on a raw
    // lookup — must fall through to the category default, not a method/object.
    expect(mapToCatalog({ probeId: '__proto__', category: 'username' })).toBe('prune-social-profiles')
    expect(mapToCatalog({ probeId: 'constructor', category: 'username' })).toBe('prune-social-profiles')
    expect(mapToCatalog({ probeId: 'toString', category: 'breach' })).toBe('hibp')
  })
})

describe('parseScanReport — hardening against adversarial input', () => {
  const withFindings = (findings: unknown[]) => ({ ...report, findings })

  it('clamps confidence: non-finite → 0, finite out-of-range clamped to [0,1], in-range untouched', async () => {
    // Per A1: Number.isFinite gate → NaN and ±Infinity default to 0; finite
    // values clamp into [0,1] (e.g. 1e999 parses to Infinity → 0; 5 → 1).
    const scan = await parseScanReport(withFindings([
      { probeId: 'username:Inf', category: 'username', matched: true, confidence: Infinity },
      { probeId: 'username:Nan', category: 'username', matched: true, confidence: NaN },
      { probeId: 'username:Over', category: 'username', matched: true, confidence: 5 },
      { probeId: 'username:Under', category: 'username', matched: true, confidence: -3 },
      { probeId: 'username:Ok', category: 'username', matched: true, confidence: 0.42 },
    ]), async () => false)
    const byId = Object.fromEntries(scan.exposures.map((e) => [e.probeId, e.confidence]))
    expect(byId['username:Inf']).toBe(0)
    expect(byId['username:Nan']).toBe(0)
    expect(byId['username:Over']).toBe(1)
    expect(byId['username:Under']).toBe(0)
    expect(byId['username:Ok']).toBe(0.42)
  })

  it('skips a finding with a non-string probeId instead of throwing', async () => {
    const scan = await parseScanReport(withFindings([
      { probeId: 123, category: 'username', matched: true, confidence: 0.5 },
      { probeId: 'username:Real', category: 'username', matched: true, confidence: 0.5 },
    ]), async () => false)
    expect(scan.exposures).toHaveLength(1)
    expect(scan.exposures[0]!.probeId).toBe('username:Real')
  })

  it('drops non-http(s) evidenceUrl schemes and keeps https as-is', async () => {
    const scan = await parseScanReport(withFindings([
      { probeId: 'username:Js', category: 'username', matched: true, confidence: 0.5, evidenceUrl: 'javascript:alert(1)' },
      { probeId: 'username:Data', category: 'username', matched: true, confidence: 0.5, evidenceUrl: 'data:text/html,x' },
      { probeId: 'username:Https', category: 'username', matched: true, confidence: 0.5, evidenceUrl: 'https://example.com/u' },
    ]), async () => false)
    const byId = Object.fromEntries(scan.exposures.map((e) => [e.probeId, e.evidenceUrl]))
    expect(byId['username:Js']).toBeUndefined()
    expect(byId['username:Data']).toBeUndefined()
    expect(byId['username:Https']).toBe('https://example.com/u')
  })

  it('caps kept exposures at MAX_EXPOSURES (500) even with 501 matched findings', async () => {
    const findings = Array.from({ length: 501 }, (_, i) => ({
      probeId: `username:acc${i}`, category: 'username', matched: true, confidence: 0.5,
    }))
    const scan = await parseScanReport(withFindings(findings), async () => false)
    expect(scan.exposures).toHaveLength(500)
  })
})
