import { describe, expect, it } from 'vitest'
import { computeScore, dueLetters, dueQueue, dueRechecks, momentum, scoreLabel } from './score'
import type { Action, AppState, LetterRecord } from './types'
import { initialState } from './types'

const a = (id: string, over: Partial<Action> = {}): Action => ({
  id,
  title: id,
  tier: 1,
  category: 'accounts',
  summary: '',
  effort: 'low',
  impact: 'high',
  ...over,
})

function withProgress(p: AppState['progress']): AppState {
  return { ...initialState(), progress: p }
}

describe('computeScore', () => {
  it('is 0 with no progress', () => {
    const actions = [a('x'), a('y')]
    expect(computeScore(actions, initialState()).score).toBe(0)
  })

  it('weights by impact (high=4, low=1)', () => {
    const actions = [a('hi', { impact: 'high' }), a('lo', { impact: 'low' })]
    const state = withProgress({ hi: { status: 'done', updatedAt: '2026-01-01' } })
    // 4 of (4+1) = 80
    expect(computeScore(actions, state).score).toBe(80)
  })

  it('skipped actions drop out of the denominator', () => {
    const actions = [a('hi', { impact: 'high' }), a('lo', { impact: 'low' })]
    const state = withProgress({
      hi: { status: 'done', updatedAt: '2026-01-01' },
      lo: { status: 'skipped', updatedAt: '2026-01-01' },
    })
    expect(computeScore(actions, state).score).toBe(100)
  })

  it('reports per-tier ratios', () => {
    const actions = [a('a1', { tier: 1 }), a('a2', { tier: 1 }), a('b1', { tier: 2 })]
    const state = withProgress({ a1: { status: 'done', updatedAt: '2026-01-01' } })
    const bd = computeScore(actions, state)
    expect(bd.byTier[1].ratio).toBe(0.5)
    expect(bd.byTier[2].ratio).toBe(0)
  })
})

describe('dueRechecks', () => {
  it('surfaces a recurring action once its window approaches', () => {
    const actions = [a('broker', { recurDays: 120 })]
    const longAgo = new Date(Date.now() - 130 * 86_400_000).toISOString()
    const state = withProgress({ broker: { status: 'done', updatedAt: longAgo } })
    const items = dueRechecks(actions, state)
    expect(items).toHaveLength(1)
    expect(items[0].overdue).toBe(true)
  })

  it('ignores recently-done recurring actions', () => {
    const actions = [a('broker', { recurDays: 120 })]
    const state = withProgress({ broker: { status: 'done', updatedAt: new Date().toISOString() } })
    expect(dueRechecks(actions, state)).toHaveLength(0)
  })

  it('ignores actions without recurDays', () => {
    const actions = [a('plain')]
    const state = withProgress({ plain: { status: 'done', updatedAt: '2020-01-01' } })
    expect(dueRechecks(actions, state)).toHaveLength(0)
  })
})

const letter = (id: string, over: Partial<LetterRecord> = {}): LetterRecord => ({
  id,
  kind: 'erasure',
  recipient: id,
  sentAt: '2026-01-01',
  deadlineAt: '2026-01-31',
  status: 'sent',
  ...over,
})

function withLetters(ls: LetterRecord[]): AppState {
  return { ...initialState(), letters: Object.fromEntries(ls.map((l) => [l.id, l])) }
}

describe('dueLetters', () => {
  it('surfaces an overdue sent letter', () => {
    const past = new Date(Date.now() - 5 * 86_400_000).toISOString()
    const items = dueLetters(withLetters([letter('a', { deadlineAt: past })]))
    expect(items).toHaveLength(1)
    expect(items[0].overdue).toBe(true)
  })

  it('ignores letters whose deadline is far off, and non-sent letters', () => {
    const soon = new Date(Date.now() + 5 * 86_400_000).toISOString()
    const far = new Date(Date.now() + 60 * 86_400_000).toISOString()
    const items = dueLetters(
      withLetters([
        letter('soon', { deadlineAt: soon }), // within window → included
        letter('far', { deadlineAt: far }), // outside window → excluded
        letter('resolved', { deadlineAt: '2020-01-01', status: 'resolved' }), // not sent → excluded
      ]),
    )
    expect(items.map((i) => i.letter.id)).toEqual(['soon'])
  })
})

describe('dueQueue', () => {
  it('merges rechecks and letters, overdue first', () => {
    const longAgo = new Date(Date.now() - 130 * 86_400_000).toISOString()
    const soon = new Date(Date.now() + 5 * 86_400_000).toISOString()
    const past = new Date(Date.now() - 2 * 86_400_000).toISOString()
    const state: AppState = {
      ...initialState(),
      progress: { broker: { status: 'done', updatedAt: longAgo } }, // overdue recheck
      letters: {
        soon: letter('soon', { deadlineAt: soon }), // due soon, not overdue
        late: letter('late', { deadlineAt: past }), // overdue
      },
    }
    const q = dueQueue([a('broker', { recurDays: 120 })], state)
    expect(q).toHaveLength(3)
    // overdue items sort ahead of the merely-soon one
    expect(q[q.length - 1].overdue).toBe(false)
    expect(q.filter((i) => i.overdue)).toHaveLength(2)
    expect(q.some((i) => i.kind === 'recheck')).toBe(true)
    expect(q.some((i) => i.kind === 'letter')).toBe(true)
  })
})

describe('momentum', () => {
  const now = new Date('2026-06-26T12:00:00Z')
  const at = (iso: string) => ({ status: 'done' as const, updatedAt: iso })

  it('counts a streak across consecutive days ending today', () => {
    const state = withProgress({
      a: at('2026-06-26T09:00:00Z'),
      b: at('2026-06-25T09:00:00Z'),
      c: at('2026-06-24T09:00:00Z'),
    })
    expect(momentum(state, now).streakDays).toBe(3)
  })

  it('breaks the streak on a gap', () => {
    const state = withProgress({
      a: at('2026-06-26T09:00:00Z'),
      b: at('2026-06-23T09:00:00Z'),
    })
    expect(momentum(state, now).streakDays).toBe(1)
  })

  it('still counts a streak that ended yesterday (grace before midnight)', () => {
    const state = withProgress({ a: at('2026-06-25T09:00:00Z') })
    expect(momentum(state, now).streakDays).toBe(1)
  })

  it('counts completions in the last 7 days', () => {
    const state = withProgress({
      a: at('2026-06-26T09:00:00Z'),
      old: at('2026-06-01T09:00:00Z'),
    })
    expect(momentum(state, now).completedThisWeek).toBe(1)
  })
})

describe('scoreLabel', () => {
  it('bands the score', () => {
    expect(scoreLabel(10).tone).toBe('danger')
    expect(scoreLabel(40).tone).toBe('warn')
    expect(scoreLabel(90).tone).toBe('ok')
  })
})
