import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LETTERS, mailtoHref, renderLetter } from '../lib/letters'
import type { LetterTemplate, Region } from '../lib/types'
import { authorityFor, countryInfo } from '../data/countries'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'

const REGION_DEFAULT: Record<Region, LetterTemplate> = {
  eu: 'gdpr-erasure',
  uk: 'gdpr-erasure',
  us: 'ccpa-delete',
  other: 'gdpr-erasure',
}

export function Letters() {
  const { state, updateProfile } = useStore()
  const { t } = useI18n()
  const [params] = useSearchParams()
  const initial = (params.get('t') as LetterTemplate) || REGION_DEFAULT[state.profile.region]
  const [template, setTemplate] = useState<LetterTemplate>(LETTERS[initial] ? initial : 'gdpr-erasure')
  const [org, setOrg] = useState('')
  const [recipient, setRecipient] = useState('')
  const [copied, setCopied] = useState(false)

  const def = LETTERS[template]
  const authority = authorityFor(state.profile.country)
  const country = countryInfo(state.profile.country)
  const isGdpr = template === 'gdpr-erasure' || template === 'gdpr-access'
  const { subject, body } = useMemo(
    () => renderLetter(template, state.profile, org, authority?.name),
    [template, state.profile, org, authority],
  )

  async function copy() {
    try {
      await navigator.clipboard.writeText(body)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  function download() {
    const blob = new Blob([`Subject: ${subject}\n\n${body}`], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `vanish-${template}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-100">{t('letters.title')}</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-400">{t('letters.subtitle')}</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {(Object.keys(LETTERS) as LetterTemplate[]).map((id) => (
          <button
            key={id}
            onClick={() => setTemplate(id)}
            className={`pill border px-3 py-1.5 text-sm transition ${
              template === id ? 'border-ghost/40 bg-ghost/10 text-ghost-bright' : 'border-ink-700 text-slate-400 hover:border-ink-600'
            }`}
          >
            {LETTERS[id].name}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="card p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-ghost-dim">{def.law}</div>
            <p className="mt-1 text-sm text-slate-400">{def.blurb}</p>
            {isGdpr && authority && country && (
              <p className="mt-3 border-t border-ink-700/60 pt-3 text-xs text-slate-400">
                <span className="text-slate-500">{t('letters.authorityLabel', { flag: country.flag, name: country.name })}</span>{' '}
                <a className="text-ghost-bright hover:underline" href={authority.url} target="_blank" rel="noopener noreferrer">
                  {authority.name} ↗
                </a>
                <span className="mt-1 block text-slate-500">{t('letters.authorityNote')}</span>
              </p>
            )}
            {isGdpr && !authority && (
              <p className="mt-3 border-t border-ink-700/60 pt-3 text-xs text-slate-500">
                {t('letters.noAuthority')}
              </p>
            )}
          </div>

          <Field label={t('letters.recipientOrg')} value={org} onChange={setOrg} placeholder={t('letters.orgPlaceholder')} />
          <Field label={t('letters.recipientEmail')} value={recipient} onChange={setRecipient} placeholder="privacy@example.com" type="email" />

          <div className="card space-y-3 p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t('letters.yourDetails')}
            </div>
            <Field label={t('letters.fullName')} value={state.profile.name} onChange={(v) => updateProfile({ name: v })} placeholder={t('letters.namePlaceholder')} />
            <Field label={t('letters.email')} value={state.profile.email} onChange={(v) => updateProfile({ email: v })} placeholder="you@email.com" type="email" />
            <Field label={t('letters.postalAddress')} value={state.profile.address} onChange={(v) => updateProfile({ address: v })} placeholder={t('letters.addressPlaceholder')} />
          </div>
        </div>

        <div className="space-y-3">
          <div className="card overflow-hidden">
            <div className="border-b border-ink-700/60 px-4 py-2 text-xs text-slate-500">
              {t('letters.subject')} <span className="text-slate-300">{subject}</span>
            </div>
            <pre className="max-h-[28rem] overflow-auto whitespace-pre-wrap px-4 py-3 font-mono text-[13px] leading-relaxed text-slate-300">
              {body}
            </pre>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="btn-primary btn-sm" onClick={copy}>
              {copied ? t('letters.copied') : t('letters.copy')}
            </button>
            <button className="btn-ghost btn-sm" onClick={download}>
              {t('letters.download')}
            </button>
            <a className="btn-ghost btn-sm" href={mailtoHref(recipient, subject, body)}>
              {t('letters.openEmail')}
            </a>
          </div>
          <p className="text-xs text-slate-500">
            {t('letters.disclaimerPre')}<strong>{t('letters.disclaimerStrong')}</strong>{t('letters.disclaimerPost')}
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-400">{label}</span>
      <input className="input" type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}
