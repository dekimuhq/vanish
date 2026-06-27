import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'
import { nameVariants } from '../lib/decoy'

function pickInterests(seed: number, pool: string[]): string[] {
  // Deterministic-ish spread driven by a regen counter — no real randomness
  // needed, and it keeps the output stable for a given seed.
  if (pool.length === 0) return []
  const want = Math.min(4, pool.length)
  const step = 7
  const out: string[] = []
  // Walk the pool until we collect `want` DISTINCT items — a plain
  // `[...new Set(out)]` after 4 fixed picks can yield fewer than 4 whenever the
  // index formula collides (it does for several translated pool lengths).
  for (let i = 0; out.length < want && i < pool.length; i++) {
    const item = pool[(seed * step + i * 5) % pool.length]
    if (!out.includes(item)) out.push(item)
  }
  return out
}

export function Decoy() {
  const { state } = useStore()
  const { t, tList } = useI18n()
  const name = state.profile.name.trim()
  const [seed, setSeed] = useState(1)
  const [copied, setCopied] = useState<string | null>(null)

  const pool = tList('decoy.interests')
  const bioAnd = t('decoy.bioAnd')
  const variants = useMemo(() => nameVariants(name), [name])
  const interests = useMemo(() => pickInterests(seed, pool), [seed, pool])
  const bio = useMemo(() => {
    const items = interests.filter(Boolean)
    if (items.length === 0) return ''
    const joined =
      items.length === 1 ? items[0] : `${items.slice(0, -1).join(', ')} ${bioAnd} ${items[items.length - 1]}`
    return t('decoy.bioTemplate', { list: joined })
  }, [interests, bioAnd, t])

  function copy(label: string, text: string) {
    void navigator.clipboard?.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-100">{t('decoy.title')}</h1>
        <p className="text-sm text-slate-400">{t('decoy.subtitle')}</p>
      </header>

      <section className="card space-y-3 border-signal-danger/20 p-5">
        <h2 className="font-semibold text-slate-100">{t('decoy.responsibly')}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-signal-ok">{t('decoy.do')}</p>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {tList('decoy.rulesDo').map((r) => (
                <li key={r} className="flex gap-2"><span className="text-signal-ok">✓</span>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-signal-danger">{t('decoy.never')}</p>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {tList('decoy.rulesDont').map((r) => (
                <li key={r} className="flex gap-2"><span className="text-signal-danger">✗</span>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="card space-y-3 p-5">
        <h2 className="font-semibold text-slate-100">{t('decoy.nameVariants')}</h2>
        {name ? (
          variants.length ? (
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <button key={v} className="pill bg-ink-700/60 text-slate-200 hover:bg-ink-700" onClick={() => copy(v, v)}>
                  {v} {copied === v ? '✓' : '⧉'}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">{t('decoy.noVariants')}</p>
          )
        ) : (
          <p className="text-sm text-slate-500">
            {t('decoy.addNamePre')}<Link className="text-ghost-bright hover:underline" to="/settings">{t('decoy.addNameLink')}</Link>{t('decoy.addNamePost')}
          </p>
        )}
      </section>

      <section className="card space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-100">{t('decoy.fillerBio')}</h2>
          <button className="btn-ghost btn-sm" onClick={() => setSeed((s) => s + 1)}>{t('decoy.regenerate')}</button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {interests.map((i) => (
            <span key={i} className="pill bg-ink-700/60 text-slate-400">{i}</span>
          ))}
        </div>
        <div className="rounded-xl bg-ink-900/60 p-3 text-sm text-slate-300">{bio}</div>
        <button className="btn-ghost btn-sm" onClick={() => copy('bio', bio)}>
          {copied === 'bio' ? t('decoy.copied') : t('decoy.copyBio')}
        </button>
      </section>

      <p className="text-xs text-slate-500">{t('decoy.footer')}</p>
    </div>
  )
}
