// Core domain model for Vanish. Everything here is plain data — the entire app
// is a view over a static action catalog plus locally-stored progress.

import type { Lang } from '../i18n/langs'

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

export type LetterKind = 'erasure' | 'access' | 'ccpa'
export type LetterStatus = 'drafted' | 'sent' | 'responded' | 'resolved' | 'escalated'

/** A tracked GDPR/CCPA letter the user has sent. Drives the deadline countdown
 *  and DPA escalation. Stored locally only, like everything else. */
export interface LetterRecord {
  id: string
  kind: LetterKind
  recipient: string
  /** Optional catalog action / broker this letter fulfils. */
  linkedActionId?: string
  sentAt: string // ISO
  deadlineAt: string // ISO, derived from sentAt + statutory window
  status: LetterStatus
  escalatedAt?: string // ISO, set when an escalation complaint is generated
  notes?: string
}

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
  /** In-app route this action links to (e.g. the Decoy Kit), rendered as an
   *  internal router link distinct from the external `url`. */
  internalTo?: string
  /** Label for the internal-link button. */
  internalLabel?: string
  /** Region relevance — used to tailor the plan. 'all' shows everywhere. */
  regions?: Array<'us' | 'eu' | 'uk' | 'all'>
  /** Fine-grained country scope (EU-27 + UK/US codes). When set, the action
   *  shows only to users in one of these countries and overrides `regions` —
   *  for nation-specific opt-outs (a national register, a local people-search). */
  countries?: Country[]
  /** Surface in the emergency Panic flow, with a priority (lower = sooner). */
  panicPriority?: number
  /** ISO date this single action was last re-verified. Overrides the catalog
   *  baseline (CATALOG_VERIFIED_AT). Surfaced in the UI for provenance. */
  verifiedAt?: string
}

export type ActionStatus = 'todo' | 'done' | 'skipped'

export interface ProgressEntry {
  status: ActionStatus
  updatedAt: string // ISO
}

export type Region = 'us' | 'eu' | 'uk' | 'other'

// ISO 3166-1 alpha-2 for the EU-27, plus coarse buckets for the UK, US, and
// everywhere else. Each maps to a Region (see data/countries.ts) so the existing
// region-based action filtering keeps working — country adds finer geographic
// identity on top (e.g. the competent GDPR supervisory authority).
export type Country =
  | 'at' | 'be' | 'bg' | 'hr' | 'cy' | 'cz' | 'dk' | 'ee' | 'fi' | 'fr'
  | 'de' | 'gr' | 'hu' | 'ie' | 'it' | 'lv' | 'lt' | 'lu' | 'mt' | 'nl'
  | 'pl' | 'pt' | 'ro' | 'sk' | 'si' | 'es' | 'se'
  // EEA non-EU members — GDPR applies via the EEA Agreement (region 'eu' for
  // action relevance; grouped separately in the country picker).
  | 'is' | 'no'
  | 'gb' | 'us' | 'ot'

export interface Profile {
  /** Used only to prefill generated letters. Never leaves the device. */
  name: string
  email: string
  address: string
  region: Region
  /** Specific country (EU-27 + UK/US/other). Drives the supervisory authority
   *  named in letters and, in future, country-specific actions. Optional so
   *  profiles created before the country layer keep working on `region` alone. */
  country?: Country
  /** Self-selected ambition; controls which tiers are emphasised, not hard-gated. */
  targetTier: Tier
  /** Free-text concerns chosen at onboarding (stalking, employer, brokers, bigtech...). */
  concerns: string[]
  /** Optional family "code word" to defeat AI voice-clone scams. Stored locally
   *  only, like everything else. */
  codeWord?: string
}

export interface AppState {
  schemaVersion: number
  onboarded: boolean
  /** Active UI language. Defaults to a navigator-detected match, persisted. */
  lang: Lang
  profile: Profile
  progress: Record<string, ProgressEntry>
  letters: Record<string, LetterRecord>
  lastBackupAt: string | null
}

export const SCHEMA_VERSION = 2

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
  lang: 'en',
  profile: emptyProfile(),
  progress: {},
  letters: {},
  lastBackupAt: null,
})
