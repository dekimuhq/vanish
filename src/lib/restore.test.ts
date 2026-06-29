import { describe, expect, it } from 'vitest'
import { diffBackup, summarizeState } from './restore'
import { initialState, type AppState } from './types'

function state(over: Partial<AppState> = {}): AppState {
  return { ...initialState(), ...over }
}

describe('summarizeState', () => {
  it('counts done/skipped progress and letters', () => {
    const s = state({
      progress: {
        a: { status: 'done', updatedAt: '2026-01-01' },
        b: { status: 'done', updatedAt: '2026-01-02' },
        c: { status: 'skipped', updatedAt: '2026-01-03' },
        d: { status: 'todo', updatedAt: '2026-01-04' },
      },
      letters: {
        l1: { id: 'l1', kind: 'erasure', recipient: 'x', sentAt: '2026-01-01', deadlineAt: '2026-01-31', status: 'sent' },
      },
    })
    const sum = summarizeState(s)
    expect(sum.doneCount).toBe(2)
    expect(sum.skippedCount).toBe(1)
    expect(sum.letterCount).toBe(1)
  })

  it('flags whether the profile carries identifying detail', () => {
    expect(summarizeState(state()).hasProfile).toBe(false)
    const named = state({ profile: { ...initialState().profile, name: 'Jo' } })
    expect(summarizeState(named).hasProfile).toBe(true)
  })
})

describe('diffBackup', () => {
  it('reports net deltas between current and incoming', () => {
    const current = state({ progress: { a: { status: 'done', updatedAt: '2026-01-01' } } })
    const incoming = state({
      progress: {
        a: { status: 'done', updatedAt: '2026-01-01' },
        b: { status: 'done', updatedAt: '2026-01-02' },
        c: { status: 'done', updatedAt: '2026-01-03' },
      },
      letters: {
        l1: { id: 'l1', kind: 'erasure', recipient: 'x', sentAt: '2026-01-01', deadlineAt: '2026-01-31', status: 'sent' },
      },
    })
    const d = diffBackup(current, incoming)
    expect(d.doneDelta).toBe(2)
    expect(d.letterDelta).toBe(1)
    expect(d.current.doneCount).toBe(1)
    expect(d.incoming.doneCount).toBe(3)
  })
})
