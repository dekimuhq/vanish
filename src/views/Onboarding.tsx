import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScoreRing } from '../components/ScoreRing'
import { TIERS, type Region, type Tier, emptyProfile } from '../lib/types'
import { useStore } from '../store/store'

const CONCERNS = [
  { id: 'recruiters', label: 'People Googling me (dates, recruiters)' },
  { id: 'brokers', label: 'Data brokers selling my info' },
  { id: 'bigtech', label: 'Big Tech profiling & ads' },
  { id: 'breaches', label: 'Breaches & account takeover' },
  { id: 'stalking', label: 'A specific person finding me' },
  { id: 'spam', label: 'Spam calls, texts & junk mail' },
]

const REGIONS: { id: Region; label: string }[] = [
  { id: 'eu', label: 'EU' },
  { id: 'uk', label: 'UK' },
  { id: 'us', label: 'US' },
  { id: 'other', label: 'Elsewhere' },
]

export function Onboarding() {
  const { completeOnboarding } = useStore()
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [region, setRegion] = useState<Region>('eu')
  const [concerns, setConcerns] = useState<string[]>([])
  const [targetTier, setTargetTier] = useState<Tier>(2)

  const toggle = (id: string) =>
    setConcerns((c) => (c.includes(id) ? c.filter((x) => x !== id) : [...c, id]))

  function finish() {
    completeOnboarding({ ...emptyProfile(), region, concerns, targetTier })
    navigate('/', { replace: true })
  }

  return (
    <div className="mx-auto flex min-h-full max-w-lg flex-col justify-center px-5 py-10">
      <div className="card animate-fade-up p-6 sm:p-8">
        {step === 0 && (
          <>
            <div className="mb-5 flex items-center gap-3">
              <ScoreRing score={0} size={64} label={false} />
              <div>
                <h1 className="text-2xl font-bold text-slate-100">Vanish</h1>
                <p className="text-sm text-slate-400">Disappear from the internet, one tier at a time.</p>
              </div>
            </div>
            <ul className="mb-6 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="text-ghost">⬡</span> Runs 100% on your device. No account, no servers, no tracking.</li>
              <li className="flex gap-2"><span className="text-ghost">☰</span> A guided ladder of real removal actions, from tidy-up to fully ghost.</li>
              <li className="flex gap-2"><span className="text-ghost">✍️</span> Generates GDPR/CCPA deletion letters you send yourself.</li>
            </ul>
            <p className="mb-5 text-xs text-slate-500">
              Three quick questions tailor your plan. Your answers never leave this device.
            </p>
            <button className="btn-primary w-full" onClick={() => setStep(1)}>
              Start →
            </button>
          </>
        )}

        {step === 1 && (
          <Step title="Where are you?" hint="Tailors which brokers and legal rights apply to you.">
            <div className="grid grid-cols-2 gap-2">
              {REGIONS.map((r) => (
                <Choice key={r.id} active={region === r.id} onClick={() => setRegion(r.id)}>
                  {r.label}
                </Choice>
              ))}
            </div>
            <Nav onBack={() => setStep(0)} onNext={() => setStep(2)} />
          </Step>
        )}

        {step === 2 && (
          <Step title="What worries you most?" hint="Pick any. We’ll surface the matching actions first.">
            <div className="grid gap-2">
              {CONCERNS.map((c) => (
                <Choice key={c.id} active={concerns.includes(c.id)} onClick={() => toggle(c.id)}>
                  {c.label}
                </Choice>
              ))}
            </div>
            <Nav onBack={() => setStep(1)} onNext={() => setStep(3)} />
          </Step>
        )}

        {step === 3 && (
          <Step title="How far do you want to go?" hint="A target, not a cage — you can climb higher anytime.">
            <div className="grid gap-2">
              {([1, 2, 3, 4] as Tier[]).map((t) => (
                <Choice key={t} active={targetTier === t} onClick={() => setTargetTier(t)}>
                  <div className="text-left">
                    <div className="font-semibold">
                      T{t} · {TIERS[t].name} <span className="font-normal text-slate-500">— {TIERS[t].tagline}</span>
                    </div>
                    <div className="text-xs text-slate-500">{TIERS[t].who}</div>
                  </div>
                </Choice>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <button className="btn-ghost" onClick={() => setStep(2)}>
                ← Back
              </button>
              <button className="btn-primary flex-1" onClick={finish}>
                Build my plan →
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
      className={`rounded-xl border px-4 py-3 text-sm transition ${
        active ? 'border-ghost bg-ghost/10 text-ghost-bright' : 'border-ink-600 text-slate-300 hover:border-ink-500'
      }`}
    >
      {children}
    </button>
  )
}

function Nav({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <div className="mt-5 flex gap-2">
      <button className="btn-ghost" onClick={onBack}>
        ← Back
      </button>
      <button className="btn-primary flex-1" onClick={onNext}>
        Next →
      </button>
    </div>
  )
}
