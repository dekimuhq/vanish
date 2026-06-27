import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CatMark } from '../components/CatMark'
import { TIERS, type Country, type Tier, emptyProfile } from '../lib/types'
import { COUNTRIES, COUNTRY_GROUPS, authorityFor, regionForCountry } from '../data/countries'
import { adversaryFor } from '../lib/adversary'
import { useStore } from '../store/store'
import { sanitize } from '../store/store'
import { decryptBackup, BackupError } from '../lib/backup'
import { useI18n } from '../i18n/i18n'

const CONCERN_IDS = ['recruiters', 'brokers', 'bigtech', 'breaches', 'stalking', 'spam'] as const

export function Onboarding() {
  const { completeOnboarding, importState } = useStore()
  const { t } = useI18n()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [country, setCountry] = useState<Country | ''>('')
  const [concerns, setConcerns] = useState<string[]>([])
  const [targetTier, setTargetTier] = useState<Tier>(2)
  const restoreRef = useRef<HTMLInputElement>(null)
  const [restorePass, setRestorePass] = useState('')
  const [restoreErr, setRestoreErr] = useState(false)

  const toggle = (id: string) =>
    setConcerns((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]))

  const authority = country ? authorityFor(country) : undefined
  const recommendation = adversaryFor(concerns)

  async function onRestore(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file || !restorePass) { setRestoreErr(!file ? false : true); return }
    try {
      const raw = await decryptBackup(file, restorePass)
      importState(sanitize(raw))
      navigate('/', { replace: true })
    } catch (err) {
      setRestoreErr(err instanceof BackupError)
      if (!(err instanceof BackupError)) throw err
    }
  }

  function finish() {
    const c = country || undefined
    completeOnboarding({
      ...emptyProfile(),
      country: c,
      region: regionForCountry(c),
      concerns,
      targetTier,
    })
    navigate('/', { replace: true })
  }

  return (
    <div className="mx-auto flex min-h-full max-w-lg flex-col justify-center px-5 py-10">
      <div className="card animate-fade-up p-6 sm:p-8">
        {step === 0 && (
          <>
            <div className="mb-6 text-center">
              <CatMark size={72} className="mx-auto mb-3" />
              <h1 className="text-2xl font-bold text-slate-100">{t('app.name')}</h1>
              <p className="text-sm text-slate-400">{t('onboarding.subtitle')}</p>
            </div>
            <ul className="mb-6 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-ghost">⬡</span> {t('onboarding.bullet1')}</li>
              <li className="flex gap-2"><span className="text-ghost">☰</span> {t('onboarding.bullet2')}</li>
              <li className="flex gap-2"><span className="text-ghost">✍️</span> {t('onboarding.bullet3')}</li>
            </ul>
            <p className="mb-5 text-xs text-slate-400">
              {t('onboarding.privacyNote')}
            </p>
            <button className="btn-primary w-full" onClick={() => setStep(1)}>
              {t('onboarding.start')}
            </button>
            <div className="mt-5 border-t border-ink-700/60 pt-4">
              <p className="mb-2 text-center text-xs text-slate-400">{t('onboarding.restore')}</p>
              <input
                className="input mb-2"
                type="password"
                value={restorePass}
                onChange={(e) => setRestorePass(e.target.value)}
                placeholder={t('onboarding.restorePass')}
                autoComplete="off"
                aria-invalid={!!restoreErr}
                aria-describedby={restoreErr ? 'restore-err' : undefined}
              />
              <button className="btn-ghost btn-sm w-full" onClick={() => restoreRef.current?.click()}>
                {t('onboarding.restoreCta')}
              </button>
              <input ref={restoreRef} type="file" accept=".vanish" className="hidden" onChange={onRestore} />
              {restoreErr && <p id="restore-err" className="mt-2 text-center text-xs text-signal-danger" role="status" aria-live="polite">{t('onboarding.restoreErr')}</p>}
            </div>
          </>
        )}

        {step === 1 && (
          <Step title={t('onboarding.step1.title')} hint={t('onboarding.step1.hint')}>
            <select
              className="input"
              value={country}
              onChange={(e) => setCountry(e.target.value as Country)}
              aria-label={t('settings.country')}
            >
              <option value="">{t('onboarding.selectCountry')}</option>
              {COUNTRY_GROUPS.map((g) => (
                <optgroup key={g.key} label={t(`countryGroup.${g.key}`)}>
                  {g.codes.map((c) => (
                    <option key={c} value={c}>
                      {COUNTRIES[c].flag} {COUNTRIES[c].name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {authority && (
              <p className="mt-3 text-xs text-slate-400">
                {t('onboarding.authority')} <span className="text-slate-300">{authority.name}</span>
              </p>
            )}
            <Nav onBack={() => setStep(0)} onNext={() => setStep(2)} nextDisabled={!country} />
          </Step>
        )}

        {step === 2 && (
          <Step title={t('onboarding.step2.title')} hint={t('onboarding.step2.hint')}>
            <div className="grid gap-2">
              {CONCERN_IDS.map((id) => (
                <Choice key={id} active={concerns.includes(id)} onClick={() => toggle(id)}>
                  {t(`onboarding.concern.${id}`)}
                </Choice>
              ))}
            </div>
            <Nav onBack={() => setStep(1)} onNext={() => setStep(3)} />
          </Step>
        )}

        {step === 3 && (
          <Step title={t('onboarding.step3.title')} hint={t('onboarding.step3.hint')}>
            {recommendation && (
              <div className="mb-4 rounded-xl border border-ghost/30 bg-ghost/5 p-3 text-sm">
                <p className="text-slate-300">
                  {t('onboarding.adversaryLead', { adversary: t(`adversary.${recommendation.concernId}`) })}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {t('onboarding.rationale', {
                    adversary: t(`adversary.${recommendation.concernId}`),
                    tier: t(`tier.${TIERS[recommendation.recommendedTier].key}.name`),
                  })}
                </p>
                {targetTier !== recommendation.recommendedTier && (
                  <button
                    className="btn-ghost btn-sm mt-2"
                    onClick={() => setTargetTier(recommendation.recommendedTier)}
                  >
                    {t('onboarding.useRecommended', {
                      tier: recommendation.recommendedTier,
                      name: t(`tier.${TIERS[recommendation.recommendedTier].key}.name`),
                    })}
                  </button>
                )}
              </div>
            )}
            <div className="grid gap-2">
              {([1, 2, 3, 4] as Tier[]).map((tier) => (
                <Choice key={tier} active={targetTier === tier} onClick={() => setTargetTier(tier)}>
                  <div className="text-left">
                    <div className="font-semibold">
                      T{tier} · {t(`tier.${TIERS[tier].key}.name`)}{' '}
                      <span className="font-normal text-slate-400">— {t(`tier.${TIERS[tier].key}.tagline`)}</span>
                    </div>
                    <div className="text-xs text-slate-400">{t(`tier.${TIERS[tier].key}.who`)}</div>
                  </div>
                </Choice>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <button className="btn-ghost" onClick={() => setStep(2)}>
                {t('common.back')}
              </button>
              <button className="btn-primary flex-1" onClick={finish}>
                {t('onboarding.build')}
              </button>
            </div>
          </Step>
        )}
      </div>
    </div>
  )
}

function Step({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-xl font-bold text-slate-100">{title}</h2>
      <p className="mb-4 mt-1 text-sm text-slate-400">{hint}</p>
      {children}
    </div>
  )
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-xl border px-4 py-3 text-sm transition ${
        active ? 'border-ghost bg-ghost/10 text-ghost-bright' : 'border-ink-600 text-slate-300 hover:border-ink-500'
      }`}
    >
      {children}
    </button>
  )
}

function Nav({ onBack, onNext, nextDisabled }: { onBack: () => void; onNext: () => void; nextDisabled?: boolean }) {
  const { t } = useI18n()
  return (
    <div className="mt-5 flex gap-2">
      <button className="btn-ghost" onClick={onBack}>
        {t('common.back')}
      </button>
      <button className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-40" onClick={onNext} disabled={nextDisabled}>
        {t('common.next')}
      </button>
    </div>
  )
}
