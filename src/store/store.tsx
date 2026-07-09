import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react'
import {
  type AppState,
  type ActionStatus,
  type Profile,
  type Region,
  type Tier,
  type Country,
  type LetterRecord,
  type ScanState,
  initialState,
  SCHEMA_VERSION,
} from '../lib/types'
import { COUNTRIES } from '../data/countries'
import { type Lang, isLang, detectLang } from '../i18n/langs'

const STORAGE_KEY = 'vanish.state.v1'

const LETTER_KINDS = ['erasure', 'access', 'ccpa'] as const
const LETTER_STATUSES = ['drafted', 'sent', 'responded', 'resolved', 'escalated'] as const
const REGIONS = ['us', 'eu', 'uk', 'other'] as const

/** Validate an untrusted profile field-by-field. The entire cross-device story
 *  is import/restore JSON, so a corrupt or hand-edited file must never produce a
 *  `targetTier`/`region`/`country` that later indexes off the end of a lookup
 *  table and white-screens the app. */
function sanitizeProfile(raw: unknown, base: Profile): Profile {
  if (!raw || typeof raw !== 'object') return base
  const p = raw as Partial<Profile>
  const str = (v: unknown, fallback: string): string => (typeof v === 'string' ? v : fallback)
  const country =
    typeof p.country === 'string' && (p.country as Country) in COUNTRIES
      ? (p.country as Country)
      : undefined
  return {
    name: str(p.name, base.name),
    email: str(p.email, base.email),
    address: str(p.address, base.address),
    region: (REGIONS as readonly string[]).includes(p.region as string)
      ? (p.region as Region)
      : base.region,
    country,
    targetTier: ([1, 2, 3, 4] as number[]).includes(p.targetTier as number)
      ? (p.targetTier as Tier)
      : base.targetTier,
    concerns: Array.isArray(p.concerns) ? p.concerns.filter((c): c is string => typeof c === 'string') : [],
    codeWord: typeof p.codeWord === 'string' ? p.codeWord : undefined,
  }
}

/** Validate an untrusted scan field-by-field. Imported from a `.vscan` file
 *  produced by a separate CLI, so it must be treated exactly as adversarially
 *  as any other import/restore payload. */
function sanitizeScan(raw: unknown): AppState['scan'] {
  if (!raw || typeof raw !== 'object') return null
  const s = raw as Record<string, unknown>
  if (!Array.isArray(s.exposures)) return null
  const exposures = (s.exposures as unknown[])
    .filter((e): e is Record<string, unknown> => !!e && typeof e === 'object')
    .filter((e) =>
      typeof e.probeId === 'string' &&
      typeof e.source === 'string' &&
      (e.category === 'username' || e.category === 'breach') &&
      typeof e.confidence === 'number',
    )
    .map((e) => ({
      probeId: e.probeId as string,
      source: e.source as string,
      category: e.category as 'username' | 'breach',
      confidence: e.confidence as number,
      evidenceUrl: typeof e.evidenceUrl === 'string' ? (e.evidenceUrl as string) : undefined,
      catalogActionId: typeof e.catalogActionId === 'string' ? (e.catalogActionId as string) : undefined,
    }))
  return {
    importedAt: typeof s.importedAt === 'string' ? (s.importedAt as string) : new Date(0).toISOString(),
    engine: typeof s.engine === 'string' ? (s.engine as string) : 'unknown',
    profileFingerprint: typeof s.profileFingerprint === 'string' ? (s.profileFingerprint as string) : '',
    verified: Boolean(s.verified),
    exposures,
    resolved: Array.isArray(s.resolved) ? (s.resolved as unknown[]).filter((x): x is string => typeof x === 'string') : [],
  }
}

type Msg =
  | { type: 'setStatus'; id: string; status: ActionStatus }
  | { type: 'clearStatus'; id: string }
  | { type: 'completeOnboarding'; profile: Profile }
  | { type: 'updateProfile'; patch: Partial<Profile> }
  | { type: 'setLang'; lang: Lang }
  | { type: 'import'; state: AppState }
  | { type: 'wipe' }
  | { type: 'logLetter'; record: LetterRecord }
  | { type: 'updateLetter'; id: string; patch: Partial<Omit<LetterRecord, 'id'>> }
  | { type: 'deleteLetter'; id: string }
  | { type: 'markBackedUp'; at: string }
  | { type: 'importScan'; scan: ScanState }

function reducer(state: AppState, msg: Msg): AppState {
  switch (msg.type) {
    case 'setStatus':
      return {
        ...state,
        progress: { ...state.progress, [msg.id]: { status: msg.status, updatedAt: new Date().toISOString() } },
      }
    case 'clearStatus': {
      const next = { ...state.progress }
      delete next[msg.id]
      return { ...state, progress: next }
    }
    case 'completeOnboarding':
      return { ...state, onboarded: true, profile: msg.profile }
    case 'updateProfile':
      return { ...state, profile: { ...state.profile, ...msg.patch } }
    case 'setLang':
      return { ...state, lang: msg.lang }
    case 'import':
      return sanitize(msg.state)
    case 'wipe':
      return initialState()
    case 'logLetter':
      return { ...state, letters: { ...state.letters, [msg.record.id]: msg.record } }
    case 'updateLetter': {
      const cur = state.letters[msg.id]
      if (!cur) return state
      return { ...state, letters: { ...state.letters, [msg.id]: { ...cur, ...msg.patch } } }
    }
    case 'deleteLetter': {
      const next = { ...state.letters }
      delete next[msg.id]
      return { ...state, letters: next }
    }
    case 'markBackedUp':
      return { ...state, lastBackupAt: msg.at }
    case 'importScan': {
      const priorSources = new Set((state.scan?.exposures ?? []).map((e) => e.source))
      const nowSources = new Set(msg.scan.exposures.map((e) => e.source))
      const resolved = [...priorSources].filter((s) => !nowSources.has(s))
      return { ...state, scan: { ...msg.scan, resolved } }
    }
    default:
      return state
  }
}

/** Defensive load: never trust persisted/imported shape blindly. */
function sanitize(raw: unknown): AppState {
  const base = initialState()
  if (!raw || typeof raw !== 'object') return base
  const r = raw as Partial<AppState>
  return {
    schemaVersion: SCHEMA_VERSION,
    onboarded: Boolean(r.onboarded),
    lang: isLang(r.lang) ? r.lang : base.lang,
    profile: sanitizeProfile(r.profile, base.profile),
    progress:
      r.progress && typeof r.progress === 'object'
        ? Object.fromEntries(
            Object.entries(r.progress).filter(
              ([, v]) => v && typeof v === 'object' && 'status' in (v as object),
            ),
          )
        : {},
    letters:
      r.letters && typeof r.letters === 'object'
        ? Object.fromEntries(
            Object.entries(r.letters).filter(([, v]) => {
              if (!v || typeof v !== 'object') return false
              const l = v as LetterRecord
              return (
                typeof l.id === 'string' &&
                typeof l.kind === 'string' &&
                typeof l.recipient === 'string' &&
                typeof l.sentAt === 'string' &&
                typeof l.deadlineAt === 'string' &&
                typeof l.status === 'string' &&
                (LETTER_KINDS as readonly string[]).includes(l.kind) &&
                (LETTER_STATUSES as readonly string[]).includes(l.status)
              )
            }),
          )
        : {},
    lastBackupAt: typeof r.lastBackupAt === 'string' ? r.lastBackupAt : null,
    scan: sanitizeScan((r as { scan?: unknown }).scan),
  }
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return sanitize(JSON.parse(raw))
    // Fresh install: best-effort match the browser language to a supported one.
    const fresh = initialState()
    fresh.lang = detectLang(typeof navigator !== 'undefined' ? navigator.language : null)
    return fresh
  } catch {
    return initialState()
  }
}

interface Ctx {
  state: AppState
  setStatus: (id: string, status: ActionStatus) => void
  clearStatus: (id: string) => void
  completeOnboarding: (profile: Profile) => void
  updateProfile: (patch: Partial<Profile>) => void
  setLang: (lang: Lang) => void
  importState: (state: AppState) => void
  wipe: () => void
  exportJSON: () => string
  logLetter: (record: LetterRecord) => void
  updateLetter: (id: string, patch: Partial<Omit<LetterRecord, 'id'>>) => void
  deleteLetter: (id: string) => void
  markBackedUp: (at: string) => void
  importScan: (scan: ScanState) => void
}

const StoreContext = createContext<Ctx | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* storage full or blocked — app still works in-memory for the session */
    }
  }, [state])

  // Best-effort: ask the browser not to auto-evict our storage under pressure.
  // Does NOT survive a manual "clear site data" — backups cover that.
  useEffect(() => {
    void navigator.storage?.persist?.().catch(() => {})
  }, [])

  const value = useMemo<Ctx>(
    () => ({
      state,
      setStatus: (id, status) => dispatch({ type: 'setStatus', id, status }),
      clearStatus: (id) => dispatch({ type: 'clearStatus', id }),
      completeOnboarding: (profile) => dispatch({ type: 'completeOnboarding', profile }),
      updateProfile: (patch) => dispatch({ type: 'updateProfile', patch }),
      setLang: (lang) => dispatch({ type: 'setLang', lang }),
      importState: (s) => dispatch({ type: 'import', state: s }),
      wipe: () => dispatch({ type: 'wipe' }),
      exportJSON: () => JSON.stringify(state, null, 2),
      logLetter: (record) => dispatch({ type: 'logLetter', record }),
      updateLetter: (id, patch) => dispatch({ type: 'updateLetter', id, patch }),
      deleteLetter: (id) => dispatch({ type: 'deleteLetter', id }),
      markBackedUp: (at) => dispatch({ type: 'markBackedUp', at }),
      importScan: (scan) => dispatch({ type: 'importScan', scan }),
    }),
    [state],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore(): Ctx {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}

export { STORAGE_KEY, sanitize, reducer }
