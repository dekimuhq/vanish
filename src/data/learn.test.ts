import { describe, expect, it } from 'vitest'
import { LEARN } from './learn'
import { ACTIONS_BY_ID } from './catalog'
import { en as enDict } from '../i18n/locales/en'

const en = enDict as Record<string, string | string[]>

describe('learn entries', () => {
  it('have unique ids', () => {
    const ids = LEARN.map((e) => e.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
  it('reference only real catalog actions', () => {
    for (const e of LEARN) {
      for (const id of e.relatedActionIds ?? []) expect(ACTIONS_BY_ID[id], `${e.id} → ${id}`).toBeDefined()
    }
  })
  it('external urls are https', () => {
    for (const e of LEARN) {
      if (e.externalUrl) expect(e.externalUrl.startsWith('https://'), e.id).toBe(true)
    }
  })
  it('have title + body i18n keys in en', () => {
    for (const e of LEARN) {
      expect(en[`learn.${e.id}.title`], `${e.id} title`).toBeTruthy()
      expect(Array.isArray(en[`learn.${e.id}.body`]), `${e.id} body is list`).toBe(true)
    }
  })
})
