import { describe, expect, it } from 'vitest'
import {
  deadlineDays, deadlineFor, daysRemaining, isOverdue,
  kindForTemplate, newLetter, escalationLetter, buildDeadlineICS,
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
  it('still reports a full day left within the final sub-day window (ceil)', () => {
    expect(daysRemaining(rec, new Date('2026-06-30T13:00:00.000Z'))).toBe(1)
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
  it('passes linkedActionId through, undefined when omitted', () => {
    expect(newLetter({ kind: 'erasure', recipient: 'X', sentAt: '2026-06-01T00:00:00.000Z', linkedActionId: 'spokeo' }).linkedActionId).toBe('spokeo')
    expect(newLetter({ kind: 'erasure', recipient: 'X', sentAt: '2026-06-01T00:00:00.000Z' }).linkedActionId).toBeUndefined()
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
  it('cites the Art.77 right to complain for GDPR kinds, CCPA for ccpa', () => {
    expect(escalationLetter(rec)).toMatch(/Article 77 GDPR/)
    expect(escalationLetter({ ...rec, kind: 'access' })).toMatch(/Article 77 GDPR/)
    expect(escalationLetter({ ...rec, kind: 'ccpa' })).toMatch(/CCPA\/CPRA/)
  })
  it('falls back to a generic authority phrase when none is known', () => {
    expect(escalationLetter(rec)).toContain('supervisory authority')
  })
})

describe('buildDeadlineICS', () => {
  const sent: LetterRecord = {
    id: 'L1', kind: 'erasure', recipient: 'Spokeo',
    sentAt: '2026-06-01T00:00:00.000Z', deadlineAt: '2026-07-01T00:00:00.000Z', status: 'sent',
  }
  const now = new Date('2026-06-10T09:30:00.000Z')

  it('returns null when nothing is pending', () => {
    expect(buildDeadlineICS([], now)).toBeNull()
    expect(buildDeadlineICS([{ ...sent, status: 'resolved' }], now)).toBeNull()
  })

  it('emits a CRLF VCALENDAR with one all-day VEVENT per pending letter', () => {
    const ics = buildDeadlineICS([sent], now)!
    expect(ics).toContain('\r\n')
    expect(ics).toMatch(/^BEGIN:VCALENDAR/)
    expect(ics.trimEnd()).toMatch(/END:VCALENDAR$/)
    expect(ics).toContain('UID:L1@vanish.cat')
    expect(ics).toContain('DTSTART;VALUE=DATE:20260701')
    expect(ics).toContain('DTEND;VALUE=DATE:20260702') // exclusive end = deadline + 1 day
    expect(ics).toContain('DTSTAMP:20260610T093000Z')
    expect(ics).toContain('SUMMARY:Vanish: response due — Spokeo')
    expect(ics).toContain('TRIGGER:-P1D')
    expect((ics.match(/BEGIN:VEVENT/g) || []).length).toBe(1)
  })

  it('only includes pending letters', () => {
    const ics = buildDeadlineICS([sent, { ...sent, id: 'L2', status: 'escalated' }], now)!
    expect((ics.match(/BEGIN:VEVENT/g) || []).length).toBe(1)
    expect(ics).toContain('UID:L1@vanish.cat')
    expect(ics).not.toContain('UID:L2@vanish.cat')
  })

  it('escapes RFC 5545 special characters in text values', () => {
    const ics = buildDeadlineICS([{ ...sent, recipient: 'Acme, Inc.; data' }], now)!
    expect(ics).toContain('SUMMARY:Vanish: response due — Acme\\, Inc.\\; data')
  })
})
