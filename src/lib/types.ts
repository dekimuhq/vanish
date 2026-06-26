// Core domain model for Vanish. Everything here is plain data — the entire app
// is a view over a static action catalog plus locally-stored progress.

export type Tier = 1 | 2 | 3 | 4

export const TIERS: Record<Tier, { id: Tier; key: string; name: string; tagline: string; who: string }> = {
  1: { id: 1, key: 'tidy', name: 'Tidy Up', tagline: 'Low effort, high relief', who: 'Anyone. The 20 minutes everyone should spend.' },
  2: { id: 2, key: 'reduce', name: 'Reduce', tagline: 'Shrink your footprint', who: "You're privacy-curious and want real distance from Big Tech & brokers." },
  3: { id: 3, key: 'lockdown', name: 'Lock Down', tagline: 'Harden everything', who: 'You want to be genuinely hard to track, profile, or dox.' },
  4: { id: 4, key: 'ghost', name: 'Ghost', tagline: 'Disappear', who: 'Activists, survivors, the targeted. Maximum separation from your name.' },
}

export type Category =
  | 'accounts'
  | 'data-brokers'
  | 'devices'
  | 'browser'
  | 'social'
  | 'search'
  | 'messaging'
  | 'email'
  | 'finance'
  | 'network'
  | 'legal'

export const CATEGORIES: Record<Category, { name: string; icon: string }> = {
  accounts: { name: 'Accounts', icon: '🔑' },
  'data-brokers': { name: 'Data Brokers', icon: '🏷️' },
  devices: { name: 'Devices', icon: '💻' },
  browser: { name: 'Browser', icon: '🧭' },
  social: { name: 'Social', icon: '💬' },
  search: { name: 'Search', icon: '🔍' },
  messaging: { name: 'Messaging', icon: '✉️' },
  email: { name: 'Email', icon: '📧' },
  finance: { name: 'Finance', icon: '💳' },
  network: { name: 'Network', icon: '📡' },
  legal: { name: 'Legal Levers', icon: '⚖️' },
}

export type Level = 'low' | 'med' | 'high'

export type LetterTemplate = 'gdpr-erasure' | 'gdpr-access' | 'ccpa-delete'

export interface Action {
  id: string
  title: string
  tier: Tier
  category: Category
  /** One- or two-sentence what + why. */
  summary: string
  /** Optional ordered how-to steps. */
  steps?: string[]
  /** Official opt-out / deletion / settings URL, opened as a user-initiated top-level navigation. */
  url?: string
  /** Friendly label for the link button. */
  urlLabel?: string
  effort: Level
  impact: Level
  /** Brokers re-list you; suggest a re-check after N days once completed. */
  recurDays?: number
  /** If set, this action can be fulfilled with a generated letter. */
  letter?: LetterTemplate
  /** Region relevance — used to tailor the plan. 'all' shows everywhere. */
  regions?: Array<'us' | 'eu' | 'uk' | 'all'>
  /** Surface in the emergency Panic flow, with a priority (lower = sooner). */
  panicPriority?: number
}

export type ActionStatus = 'todo' | 'done' | 'skipped'

export interface ProgressEntry {
  status: ActionStatus
  updatedAt: string // ISO
}

export type Region = 'us' | 'eu' | 'uk' | 'other'

export interface Profile {
  /** Used only to prefill generated letters. Never leaves the device. */
  name: string
  email: string
  address: string
  region: Region
  /** Self-selected ambition; controls which tiers are emphasised, not hard-gated. */
  targetTier: Tier
  /** Free-text concerns chosen at onboarding (stalking, employer, brokers, bigtech...). */
  concerns: string[]
}

export interface AppState {
  schemaVersion: number
  onboarded: boolean
  profile: Profile
  progress: Record<string, ProgressEntry>
}

export const SCHEMA_VERSION = 1

export const emptyProfile = (): Profile => ({
  name: '',
  email: '',
  address: '',
  region: 'eu',
  targetTier: 2,
  concerns: [],
})

export const initialState = (): AppState => ({
  schemaVersion: SCHEMA_VERSION,
  onboarded: false,
  profile: emptyProfile(),
  progress: {},
})
