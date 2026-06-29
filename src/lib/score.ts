import type { Action, AppState, LetterRecord, Level, Tier } from './types'

const DAY_MS = 86_400_000
/** Lead time for surfacing something as "due soon" before its date. */
const SOON_DAYS = 14

const IMPACT_WEIGHT: Record<Level, number> = { low: 1, med: 2, high: 4 }

export interface ScoreBreakdown {
  /** 0–100 overall privacy score, weighted by action impact. */
  score: number
  doneWeight: number
  totalWeight: number
  doneCount: number
  totalCount: number
  /** Per-tier completion ratios (0–1). */
  byTier: Record<Tier, { done: number; total: number; ratio: number }>
}

export function computeScore(actions: Action[], state: AppState): ScoreBreakdown {
  const byTier = { 1: z(), 2: z(), 3: z(), 4: z() } as ScoreBreakdown['byTier']
  let doneWeight = 0
  let totalWeight = 0
  let doneCount = 0

  for (const a of actions) {
    const w = IMPACT_WEIGHT[a.impact]
    totalWeight += w
    byTier[a.tier].total += 1
    const entry = state.progress[a.id]
    // 'skipped' counts as neither progress nor outstanding weight — the user
    // consciously opted out, so it shouldn't drag the score down forever.
    if (entry?.status === 'skipped') {
      totalWeight -= w
      byTier[a.tier].total -= 1
      continue
    }
    if (entry?.status === 'done') {
      doneWeight += w
      doneCount += 1
      byTier[a.tier].done += 1
    }
  }

  for (const t of [1, 2, 3, 4] as Tier[]) {
    byTier[t].ratio = byTier[t].total > 0 ? byTier[t].done / byTier[t].total : 0
  }

  return {
    score: totalWeight > 0 ? Math.round((doneWeight / totalWeight) * 100) : 0,
    doneWeight,
    totalWeight,
    doneCount,
    totalCount: actions.filter((a) => state.progress[a.id]?.status !== 'skipped').length,
    byTier,
  }
}

function z() {
  return { done: 0, total: 0, ratio: 0 }
}

export interface RecheckItem {
  action: Action
  dueAt: Date
  overdue: boolean
}

/** Actions completed long enough ago that brokers may have re-listed you. */
export function dueRechecks(actions: Action[], state: AppState, now = new Date()): RecheckItem[] {
  const items: RecheckItem[] = []
  for (const a of actions) {
    if (!a.recurDays) continue
    const e = state.progress[a.id]
    if (e?.status !== 'done') continue
    const due = new Date(new Date(e.updatedAt).getTime() + a.recurDays * DAY_MS)
    if (due.getTime() <= now.getTime() + SOON_DAYS * DAY_MS) {
      items.push({ action: a, dueAt: due, overdue: due.getTime() <= now.getTime() })
    }
  }
  return items.sort((x, y) => x.dueAt.getTime() - y.dueAt.getTime())
}

export interface DueLetterItem {
  letter: LetterRecord
  dueAt: Date
  overdue: boolean
}

/** Sent letters whose statutory response deadline has passed or is within the
 *  soon window — the user should chase or escalate these. */
export function dueLetters(state: AppState, now = new Date()): DueLetterItem[] {
  const items: DueLetterItem[] = []
  for (const l of Object.values(state.letters)) {
    if (l.status !== 'sent') continue
    const due = new Date(l.deadlineAt)
    if (due.getTime() <= now.getTime() + SOON_DAYS * DAY_MS) {
      items.push({ letter: l, dueAt: due, overdue: due.getTime() <= now.getTime() })
    }
  }
  return items.sort((x, y) => x.dueAt.getTime() - y.dueAt.getTime())
}

/** A single time-sensitive item — a broker re-check or a letter deadline —
 *  merged into one urgency-sorted queue for the Dashboard "Due now" panel. */
export type DueItem =
  | { kind: 'recheck'; action: Action; dueAt: Date; overdue: boolean }
  | { kind: 'letter'; letter: LetterRecord; dueAt: Date; overdue: boolean }

/** Everything due now (or soon), broker re-checks and letter deadlines together,
 *  overdue first then by date. The one place the user sees what needs doing. */
export function dueQueue(actions: Action[], state: AppState, now = new Date()): DueItem[] {
  const items: DueItem[] = [
    ...dueRechecks(actions, state, now).map((r): DueItem => ({ kind: 'recheck', ...r })),
    ...dueLetters(state, now).map((l): DueItem => ({ kind: 'letter', ...l })),
  ]
  return items.sort(
    (x, y) => Number(y.overdue) - Number(x.overdue) || x.dueAt.getTime() - y.dueAt.getTime(),
  )
}

export interface Momentum {
  streakDays: number
  completedThisWeek: number
  lastActive: Date | null
}

const dayKey = (d: Date) => d.toISOString().slice(0, 10)

/** Streak = consecutive days (ending today or yesterday) with ≥1 completion.
 *  Privacy is a habit, not a one-off — this nudges people to keep coming back. */
export function momentum(state: AppState, now = new Date()): Momentum {
  const days = new Set<string>()
  let last: number | null = null
  let weekly = 0
  const weekAgo = now.getTime() - 7 * 86_400_000
  for (const e of Object.values(state.progress)) {
    if (e.status !== 'done') continue
    const t = new Date(e.updatedAt)
    days.add(dayKey(t))
    last = Math.max(last ?? 0, t.getTime())
    if (t.getTime() >= weekAgo) weekly++
  }
  let streak = 0
  const cursor = new Date(now)
  // Allow the streak to "start" today or yesterday so it doesn't reset before midnight.
  if (!days.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1)
  while (days.has(dayKey(cursor))) {
    streak++
    cursor.setDate(cursor.getDate() - 1)
  }
  return { streakDays: streak, completedThisWeek: weekly, lastActive: last ? new Date(last) : null }
}

export type ScoreKey = 'wideOpen' | 'exposed' | 'guarded' | 'ghosting'

/** Returns an i18n key (resolved via `t('score.'+key)`) plus the colour tone.
 *  Kept prose-free so the band thresholds stay the single source of truth and
 *  the label text lives in the locale dictionaries. */
export function scoreLabel(score: number): { key: ScoreKey; tone: 'danger' | 'warn' | 'ok' } {
  if (score < 25) return { key: 'wideOpen', tone: 'danger' }
  if (score < 55) return { key: 'exposed', tone: 'warn' }
  if (score < 80) return { key: 'guarded', tone: 'warn' }
  return { key: 'ghosting', tone: 'ok' }
}
