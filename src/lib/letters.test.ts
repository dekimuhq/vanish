import { describe, expect, it } from 'vitest'
import { LETTERS, letterMeta, mailtoHref, renderLetter } from './letters'
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

describe('renderLetter — localization', () => {
  const profile = { ...emptyProfile(), name: 'Jane Doe', email: 'jane@example.com' }
  const LANGS = ['fr', 'de', 'es', 'it', 'pt', 'nl', 'ca', 'pl', 'sv'] as const

  it('uses the localized body when a language overlay exists', () => {
    const { subject, body } = renderLetter('gdpr-erasure', profile, 'Spokeo', 'CNIL', 'fr')
    expect(subject).toMatch(/article 17/i)
    expect(body).toContain('Spokeo') // org still interpolated
    expect(body).toContain('Jane Doe') // signature still interpolated
    expect(body).toContain('CNIL') // authority named in the localized escalation
    expect(body).not.toContain('Yours faithfully') // not the English body
  })

  it('falls back to English when no overlay / no lang', () => {
    const en1 = renderLetter('gdpr-erasure', profile, 'Org')
    const en2 = renderLetter('gdpr-erasure', profile, 'Org', undefined, 'en')
    expect(en1.body).toContain('Yours faithfully')
    expect(en2.body).toBe(en1.body)
  })

  it('every overlay renders all three templates with the same Article/§ anchors', () => {
    for (const lang of LANGS) {
      expect(renderLetter('gdpr-erasure', profile, 'Org', 'DPA', lang).subject).toMatch(/17/)
      expect(renderLetter('gdpr-access', profile, 'Org', 'DPA', lang).subject).toMatch(/15/)
      const ccpa = renderLetter('ccpa-delete', profile, 'Org', undefined, lang).body
      expect(ccpa, `${lang} ccpa`).toMatch(/1798\.105/)
      expect(ccpa, `${lang} ccpa`).toMatch(/1798\.120/)
    }
  })

  it('localized empty profile keeps a placeholder signature (never blank)', () => {
    const { body } = renderLetter('gdpr-access', emptyProfile(), '', undefined, 'de')
    expect(body).toContain('[Ihr vollständiger Name]')
  })
})

describe('letterMeta', () => {
  it('localizes name/law/blurb when an overlay exists, keeping Article numbers', () => {
    const m = letterMeta('gdpr-erasure', 'de')
    expect(m.name).toBe('DSGVO-Löschantrag')
    expect(m.law).toMatch(/Artikel 17/)
    expect(m.blurb).not.toBe(LETTERS['gdpr-erasure'].blurb) // not the English blurb
  })

  it('falls back to the English metadata without a lang/overlay', () => {
    expect(letterMeta('gdpr-access').name).toBe(LETTERS['gdpr-access'].name)
    expect(letterMeta('ccpa-delete', 'en').law).toBe(LETTERS['ccpa-delete'].law)
  })
})

describe('mailtoHref', () => {
  it('keeps the address literal (RFC 6068) and uses %20 for spaces', () => {
    const href = mailtoHref('a+tag@b.com', 'Hi there', 'line one\nline two')
    // Address is NOT percent-encoded — '@' and '+' stay literal so clients accept it.
    expect(href.startsWith('mailto:a+tag@b.com?')).toBe(true)
    expect(href).toContain('subject=Hi%20there')
    expect(href).toContain('line%20one')
    // No '+' in the query string (spaces became %20); the only '+' is in the address.
    expect(href.split('?')[1]).not.toContain('+')
  })
})
