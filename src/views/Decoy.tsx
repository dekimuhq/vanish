import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/store'
import { nameVariants, buildDecoyBio, DECOY_INTERESTS, DECOY_RULES } from '../lib/decoy'

function pickInterests(seed: number): string[] {
  // Deterministic-ish spread driven by a regen counter — no real randomness
  // needed, and it keeps the output stable for a given seed.
  const out: string[] = []
  const step = 7
  for (let i = 0; i < 4; i++) out.push(DECOY_INTERESTS[(seed * step + i * 5) % DECOY_INTERESTS.length])
  return [...new Set(out)]
}

export function Decoy() {
  const { state } = useStore()
  const name = state.profile.name.trim()
  const [seed, setSeed] = useState(1)
  const [copied, setCopied] = useState<string | null>(null)

  const variants = useMemo(() => nameVariants(name), [name])
  const interests = useMemo(() => pickInterests(seed), [seed])
  const bio = useMemo(() => buildDecoyBio(interests), [interests])

  function copy(label: string, text: string) {
    void navigator.clipboard?.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-100">⬡ Decoy Kit</h1>
        <p className="text-sm text-slate-400">
          Poison, don’t delete. Brokers and platforms re-list and rebuild, so adding bland noise to your{' '}
          <em>own</em> low-stakes accounts beats chasing deletions. This kit runs entirely on your device.
        </p>
      </header>

      <section className="card space-y-3 border-signal-danger/20 p-5">
        <h2 className="font-semibold text-slate-100">Use it responsibly</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-signal-ok">Do</p>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {DECOY_RULES.do.map((r) => (
                <li key={r} className="flex gap-2"><span className="text-signal-ok">✓</span>{r}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-signal-danger">Never</p>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {DECOY_RULES.dont.map((r) => (
                <li key={r} className="flex gap-2"><span className="text-signal-danger">✗</span>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="card space-y-3 p-5">
        <h2 className="font-semibold text-slate-100">Name variants</h2>
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
            <p className="text-sm text-slate-500">No variants for a single-word name — add a surname in Settings to seed more.</p>
          )
        ) : (
          <p className="text-sm text-slate-500">
            Add your name in <Link className="text-ghost-bright hover:underline" to="/settings">Settings</Link> to generate alternate spellings to spread across throwaway profiles.
          </p>
        )}
      </section>

      <section className="card space-y-3 p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-100">Filler bio</h2>
          <button className="btn-ghost btn-sm" onClick={() => setSeed((s) => s + 1)}>↻ Regenerate</button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {interests.map((i) => (
            <span key={i} className="pill bg-ink-700/60 text-slate-400">{i}</span>
          ))}
        </div>
        <div className="rounded-xl bg-ink-900/60 p-3 text-sm text-slate-300">{bio}</div>
        <button className="btn-ghost btn-sm" onClick={() => copy('bio', bio)}>
          {copied === 'bio' ? '✓ Copied' : '⧉ Copy bio'}
        </button>
      </section>

      <p className="text-xs text-slate-500">
        Generic by design — the goal is statistical noise, not a convincing fake person. Paste into profiles that are
        yours and low-stakes.
      </p>
    </div>
  )
}
