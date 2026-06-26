import { describe, expect, it } from 'vitest'
import { LETTERS, mailtoHref, renderLetter } from './letters'
import { emptyProfile } from './types'

describe('renderLetter', () => {
  const profile = { ...emptyProfile(), name: 'Jane Doe', email: 'jane@example.com', address: '1 Privacy St' }

  it('fills the recipient org and the user details into the body', () => {
    const { body, subject } = renderLetter('gdpr-erasure', profile, 'Spokeo')
    expect(subject).toMatch(/Article 17/)
    expect(body).toContain('Spokeo')
    expect(body).toContain('Jane Doe')
    expect(body).toContain('jane@example.com')
  })

  it('falls back to placeholders when profile is empty', () => {
    const { body } = renderLetter('gdpr-access', emptyProfile(), '')
    expect(body).toContain('[Your full name]')
    expect(body).toContain('[Organisation]')
  })

  it('CCPA template cites the right statute', () => {
    const { body } = renderLetter('ccpa-delete', profile, 'BrokerCo')
    expect(body).toMatch(/1798\.105/)
    expect(body).toMatch(/1798\.120/)
  })

  it('every template renders without throwing', () => {
    for (const id of Object.keys(LETTERS) as (keyof typeof LETTERS)[]) {
      expect(() => renderLetter(id, profile, 'Org')).not.toThrow()
    }
  })
})

describe('mailtoHref', () => {
  it('encodes subject and body and uses %20 for spaces', () => {
    const href = mailtoHref('a@b.com', 'Hi there', 'line one\nline two')
    expect(href.startsWith('mailto:a%40b.com?')).toBe(true)
    expect(href).toContain('subject=Hi%20there')
    expect(href).toContain('line%20one')
    expect(href).not.toContain('+')
  })
})
