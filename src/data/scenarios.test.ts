import { describe, expect, it } from 'vitest'
import { SCENARIOS } from './scenarios'
import { ACTIONS_BY_ID } from './catalog'
import { en } from '../i18n/locales/en'

describe('scenarios', () => {
  it('have unique ids', () => {
    const ids = SCENARIOS.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
  it('reference only real catalog actions', () => {
    for (const s of SCENARIOS) {
      for (const id of s.actionIds) expect(ACTIONS_BY_ID[id], `${s.id} → ${id}`).toBeDefined()
    }
  })
  it('have non-empty action lists', () => {
    for (const s of SCENARIOS) expect(s.actionIds.length, s.id).toBeGreaterThan(0)
  })
  it('have title + intro i18n keys in en', () => {
    for (const s of SCENARIOS) {
      expect(en[`scenario.${s.id}.title`], `${s.id} title`).toBeTruthy()
      expect(en[`scenario.${s.id}.intro`], `${s.id} intro`).toBeTruthy()
    }
  })
})
