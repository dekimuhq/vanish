import { createContext, useContext, useEffect, useMemo, useReducer, type ReactNode } from 'react'
import {
  type AppState,
  type ActionStatus,
  type Profile,
  initialState,
  SCHEMA_VERSION,
} from '../lib/types'

const STORAGE_KEY = 'vanish.state.v1'

type Msg =
  | { type: 'setStatus'; id: string; status: ActionStatus }
  | { type: 'clearStatus'; id: string }
  | { type: 'completeOnboarding'; profile: Profile }
  | { type: 'updateProfile'; patch: Partial<Profile> }
  | { type: 'import'; state: AppState }
  | { type: 'wipe' }

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
    case 'import':
      return sanitize(msg.state)
    case 'wipe':
      return initialState()
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
    profile: { ...base.profile, ...(r.profile ?? {}) },
    progress:
      r.progress && typeof r.progress === 'object'
        ? Object.fromEntries(
            Object.entries(r.progress).filter(
              ([, v]) => v && typeof v === 'object' && 'status' in (v as object),
            ),
          )
        : {},
  }
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? sanitize(JSON.parse(raw)) : initialState()
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
  importState: (state: AppState) => void
  wipe: () => void
  exportJSON: () => string
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

  const value = useMemo<Ctx>(
    () => ({
      state,
      setStatus: (id, status) => dispatch({ type: 'setStatus', id, status }),
      clearStatus: (id) => dispatch({ type: 'clearStatus', id }),
      completeOnboarding: (profile) => dispatch({ type: 'completeOnboarding', profile }),
      updateProfile: (patch) => dispatch({ type: 'updateProfile', patch }),
      importState: (s) => dispatch({ type: 'import', state: s }),
      wipe: () => dispatch({ type: 'wipe' }),
      exportJSON: () => JSON.stringify(state, null, 2),
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

export { STORAGE_KEY, sanitize }
