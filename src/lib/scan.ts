import type { ScanFinding, ScanState } from './types'
import { canonicalize } from './canonical'

export class ScanError extends Error {}

/** async (data, sigB64, pubB64) => boolean. Injected for tests; default uses WebCrypto. */
export type Verifier = (data: Uint8Array<ArrayBuffer>, sigB64: string, pubB64: string) => Promise<boolean>

interface RawFinding {
  probeId: string
  category: 'username' | 'breach'
  matched: boolean
  confidence: number
  evidenceUrl?: string
  catalogActionId?: string
}

/** probeId/source → Vanish catalog Action.id. Grows over time; misses fall back
 *  to a category default (or stay unmapped → shown in the Scan Results list). */
const SOURCE_TO_CATALOG: Record<string, string> = {
  'hibp-account': 'change-breached-passwords',
  'username:GitHub': 'delete-dormant-accounts',
}
const CATEGORY_DEFAULT: Record<'username' | 'breach', string | undefined> = {
  username: 'prune-social-profiles',
  breach: 'hibp',
}

// An unbounded import can blow past the localStorage quota and silently kill
// persistence for the WHOLE app on the next save — cap the exposures we keep.
export const MAX_EXPOSURES = 500

export function mapToCatalog(f: { probeId: string; category: 'username' | 'breach'; catalogActionId?: string }): string | undefined {
  const hint = typeof f.catalogActionId === 'string' ? f.catalogActionId : undefined
  // hasOwnProperty guard: a hostile probeId like "__proto__"/"constructor" must
  // not resolve to an inherited Object.prototype member.
  const mapped = Object.prototype.hasOwnProperty.call(SOURCE_TO_CATALOG, f.probeId)
    ? SOURCE_TO_CATALOG[f.probeId]
    : undefined
  return hint ?? mapped ?? CATEGORY_DEFAULT[f.category]
}

function sourceLabel(probeId: string, category: 'username' | 'breach'): string {
  // Keep today's sole breach probe labelled 'Breach'; future distinct breach
  // probes keep their own probeId so a resolved-diff can tell them apart.
  if (category === 'breach') return probeId === 'hibp-account' ? 'Breach' : probeId
  return probeId.startsWith('username:') ? probeId.slice('username:'.length) : probeId
}

function isReport(x: unknown): x is {
  version: number; generatedAt: string; engine: string; profileFingerprint: string
  findings: RawFinding[]; signature: { alg: string; pub: string; sig: string }
} {
  if (!x || typeof x !== 'object') return false
  const r = x as Record<string, unknown>
  return r.version === 1 && typeof r.engine === 'string' && Array.isArray(r.findings) &&
    !!r.signature && typeof r.signature === 'object'
}

export async function parseScanReport(json: unknown, verifier: Verifier = webcryptoVerify): Promise<ScanState> {
  if (!isReport(json)) throw new ScanError('Not a vanish-recon scan report.')
  const { signature } = json
  const signed = canonicalize({
    version: json.version, generatedAt: json.generatedAt, engine: json.engine,
    profileFingerprint: json.profileFingerprint, findings: json.findings,
  })
  let verified = false
  try {
    // TextEncoder always returns an ArrayBuffer-backed view; the narrower cast
    // keeps it assignable to BufferSource under TS 5.7+ (Uint8Array<ArrayBufferLike>).
    const data = new TextEncoder().encode(signed) as Uint8Array<ArrayBuffer>
    verified = await verifier(data, signature.sig, signature.pub)
  } catch {
    verified = false // Ed25519 unsupported or malformed sig → best-effort
  }
  const exposures: ScanFinding[] = json.findings
    .filter((f): f is RawFinding => {
      if (!f || typeof f !== 'object') return false
      const r = f as RawFinding
      // A non-string probeId used to reach sourceLabel and throw a raw
      // TypeError; an unknown category would flow downstream. Reject both here.
      return r.matched === true && typeof r.probeId === 'string' &&
        (r.category === 'username' || r.category === 'breach')
    })
    .map((f) => {
      const c = f.confidence
      return {
        probeId: f.probeId,
        source: sourceLabel(f.probeId, f.category),
        category: f.category,
        confidence: Number.isFinite(c) ? Math.min(1, Math.max(0, c)) : 0,
        evidenceUrl:
          typeof f.evidenceUrl === 'string' &&
          (f.evidenceUrl.startsWith('https://') || f.evidenceUrl.startsWith('http://'))
            ? f.evidenceUrl
            : undefined,
        catalogActionId: mapToCatalog(f),
      }
    })
    .slice(0, MAX_EXPOSURES)
  return {
    importedAt: new Date().toISOString(),
    engine: typeof json.engine === 'string' ? json.engine : '',
    profileFingerprint: typeof json.profileFingerprint === 'string' ? json.profileFingerprint : '',
    verified,
    exposures,
    resolved: [],
  }
}

async function webcryptoVerify(data: Uint8Array<ArrayBuffer>, sigB64: string, pubB64: string): Promise<boolean> {
  const subtle = globalThis.crypto?.subtle
  if (!subtle) return false
  // atob/charCodeAt path always yields ArrayBuffer-backed views; narrow the cast
  // to keep it assignable to BufferSource under TS 5.7+ (same pattern as backup.ts).
  const der = Uint8Array.from(atob(pubB64), (c) => c.charCodeAt(0)) as Uint8Array<ArrayBuffer>
  const sig = Uint8Array.from(atob(sigB64), (c) => c.charCodeAt(0)) as Uint8Array<ArrayBuffer>
  const key = await subtle.importKey('spki', der, { name: 'Ed25519' }, false, ['verify'])
  return subtle.verify({ name: 'Ed25519' }, key, sig, data)
}
