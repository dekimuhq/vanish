import { describe, expect, it } from 'vitest'
import { computeScore, dueRechecks, momentum, scoreLabel } from './score'
import type { Action, AppState } from './types'
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
