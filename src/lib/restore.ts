import type { AppState, Country } from './types'
import type { Lang } from '../i18n/langs'

// Restore preview. Before a `.vanish` (or JSON) backup overwrites the device,
// we show the user what it contains versus what they have now — a decrypt +
// sanitize step produces a trusted candidate state, this turns it into a
// human-readable summary so "restore" is never a blind, destructive guess.

export interface BackupSummary {
  onboarded: boolean
  lang: Lang
  /** Has the profile any identifying detail worth preserving? */
  hasProfile: boolean
  profileName: string
  profileCountry?: Country
  doneCount: number
  skippedCount: number
  letterCount: number
  lastBackupAt: string | null
}

export function summarizeState(state: AppState): BackupSummary {
  const progress = Object.values(state.progress)
  const profile = state.profile
  return {
    onboarded: state.onboarded,
    lang: state.lang,
    hasProfile: Boolean(profile.name || profile.email || profile.address),
    profileName: profile.name,
    profileCountry: profile.country,
    doneCount: progress.filter((p) => p.status === 'done').length,
    skippedCount: progress.filter((p) => p.status === 'skipped').length,
    letterCount: Object.keys(state.letters).length,
    lastBackupAt: state.lastBackupAt,
  }
}

export interface BackupDiff {
  current: BackupSummary
  incoming: BackupSummary
  /** Net change in completed actions if the user applies the backup. */
  doneDelta: number
  /** Net change in tracked letters. */
  letterDelta: number
}

export function diffBackup(current: AppState, incoming: AppState): BackupDiff {
  const c = summarizeState(current)
  const i = summarizeState(incoming)
  return {
    current: c,
    incoming: i,
    doneDelta: i.doneCount - c.doneCount,
    letterDelta: i.letterCount - c.letterCount,
  }
}
