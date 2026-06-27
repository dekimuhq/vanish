import { describe, expect, it } from 'vitest'
import {
  deadlineDays, deadlineFor, daysRemaining, isOverdue,
  kindForTemplate, newLetter, escalationLetter,
} from './tracker'
import type { LetterRecord } from './types'

describe('deadlines', () => {
  it('GDPR = 30 days, CCPA = 45 days', () => {
    expect(deadlineDays('erasure')).toBe(30)
    expect(deadlineDays('access')).toBe(30)
    expect(deadlineDays('ccpa')).toBe(45)
  })

  it('deadlineFor adds the window to sentAt', () => {
    const due = deadlineFor('erasure', '2026-06-01T00:00:00.000Z')
    expect(due.slice(0, 10)).toBe('2026-07-01')
  })
})

describe('countdown', () => {
  const rec: LetterRecord = {
    id: 'L1', kind: 'erasure', recipient: 'X',
    sentAt: '2026-06-01T00:00:00.000Z', deadlineAt: '2026-07-01T00:00:00.000Z', status: 'sent',
  }
  it('daysRemaining is positive before the deadline, negative after', () => {
    expect(daysRemaining(rec, new Date('2026-06-21T00:00:00.000Z'))).toBe(10)
    expect(daysRemaining(rec, new Date('2026-07-06T00:00:00.000Z'))).toBe(-5)
  })
  it('isOverdue only when sent and past the deadline', () => {
    expect(isOverdue(rec, new Date('2026-06-21T00:00:00.000Z'))).toBe(false)
    expect(isOverdue(rec, new Date('2026-07-06T00:00:00.000Z'))).toBe(true)
    expect(isOverdue({ ...rec, status: 'resolved' }, new Date('2026-07-06T00:00:00.000Z'))).toBe(false)
  })
})

describe('template mapping + construction', () => {
  it('maps templates to kinds', () => {
    expect(kindForTemplate('gdpr-erasure')).toBe('erasure')
    expect(kindForTemplate('gdpr-access')).toBe('access')
    expect(kindForTemplate('ccpa-delete')).toBe('ccpa')
  })
  it('newLetter derives id, deadline, and sent status', () => {
    const l = newLetter({ kind: 'ccpa', recipient: 'BrokerCo', sentAt: '2026-06-01T00:00:00.000Z' })
    expect(l.id).toBeTruthy()
    expect(l.status).toBe('sent')
    expect(l.deadlineAt.slice(0, 10)).toBe('2026-07-16')
  })
})

describe('escalationLetter', () => {
  const rec: LetterRecord = {
    id: 'L1', kind: 'erasure', recipient: 'Spokeo',
    sentAt: '2026-06-01T00:00:00.000Z', deadlineAt: '2026-07-01T00:00:00.000Z', status: 'sent',
  }
  it('names the authority, recipient, and the original send date', () => {
    const body = escalationLetter(rec, 'AEPD')
    expect(body).toContain('AEPD')
    expect(body).toContain('Spokeo')
    expect(body).toContain('2026-06-01')
    expect(body).toMatch(/Article 17/)
  })
  it('falls back to a generic authority phrase when none is known', () => {
    expect(escalationLetter(rec)).toContain('supervisory authority')
  })
})
