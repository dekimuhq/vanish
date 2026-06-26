import { useRef, useState } from 'react'
import { TierBadge } from '../components/Pills'
import { sanitize } from '../store/store'
import { TIERS, type Country, type Tier } from '../lib/types'
import { COUNTRIES, COUNTRY_GROUPS, authorityFor, regionForCountry } from '../data/countries'
import { useStore } from '../store/store'

export function Settings() {
  const { state, updateProfile, exportJSON, importState, wipe } = useStore()
  const fileRef = useRef<HTMLInputElement>(null)
  const [confirmWipe, setConfirmWipe] = useState(false)
  const [importMsg, setImportMsg] = useState<string | null>(null)

  function download() {
    const blob = new Blob([exportJSON()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `vanish-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  function onImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = sanitize(JSON.parse(String(reader.result)))
        importState(parsed)
        setImportMsg('✓ Plan imported.')
      } catch {
        setImportMsg('✗ Could not read that file.')
      }
      setTimeout(() => setImportMsg(null), 3000)
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-100">Settings</h1>
      </header>

      <section className="card space-y-4 p-5">
        <h2 className="font-semibold text-slate-100">Your plan</h2>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-slate-400">Country</span>
          <select
            className="input"
            value={state.profile.country ?? ''}
            onChange={(e) => {
              const c = (e.target.value || undefined) as Country | undefined
              updateProfile({ country: c, region: regionForCountry(c) })
            }}
          >
            <option value="">Not set</option>
            {COUNTRY_GROUPS.map((g) => (
              <optgroup key={g.label} label={g.label}>
                {g.codes.map((c) => (
                  <option key={c} value={c}>
                    {COUNTRIES[c].flag} {COUNTRIES[c].name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          {(() => {
            const auth = authorityFor(state.profile.country)
            return auth ? (
              <p className="mt-2 text-xs text-slate-500">
                Supervisory authority:{' '}
                <a className="text-ghost-bright hover:underline" href={auth.url} target="_blank" rel="noopener noreferrer">
                  {auth.name} ↗
                </a>
              </p>
            ) : (
              <p className="mt-2 text-xs text-slate-500">Region: {state.profile.region.toUpperCase()}</p>
            )
          })()}
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-medium text-slate-400">Target tier</span>
          <div className="grid gap-2 sm:grid-cols-2">
            {([1, 2, 3, 4] as Tier[]).map((t) => (
              <button
                key={t}
                onClick={() => updateProfile({ targetTier: t })}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm ${
                  state.profile.targetTier === t ? 'border-ghost/40 bg-ghost/10' : 'border-ink-700 hover:border-ink-600'
                }`}
              >
                <TierBadge tier={t} withName={false} />
                <span className="text-slate-300">{TIERS[t].name}</span>
              </button>
            ))}
          </div>
        </label>
      </section>

      <section className="card space-y-3 p-5">
        <h2 className="font-semibold text-slate-100">Backup & transfer</h2>
        <p className="text-sm text-slate-400">
          No account means no cloud sync — by design. Export an encrypted-at-rest-by-you JSON file to move your plan to
          another device. The file contains your progress and the details you entered for letters.
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="btn-ghost btn-sm" onClick={download}>↓ Export plan</button>
          <button className="btn-ghost btn-sm" onClick={() => fileRef.current?.click()}>↑ Import plan</button>
          <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={onImport} />
          {importMsg && <span className="self-center text-sm text-ghost-bright">{importMsg}</span>}
        </div>
      </section>

      <section className="card space-y-3 border-signal-danger/20 p-5">
        <h2 className="font-semibold text-slate-100">Wipe everything</h2>
        <p className="text-sm text-slate-400">
          Erase all progress and personal details from this device. This cannot be undone. (There’s nothing on a
          server to delete — there never was.)
        </p>
        {!confirmWipe ? (
          <button className="btn-sm rounded-xl border border-signal-danger/40 px-3 py-1.5 text-sm text-signal-danger hover:bg-signal-danger/10" onClick={() => setConfirmWipe(true)}>
            Wipe all local data
          </button>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-signal-danger">Sure? This deletes everything.</span>
            <button className="btn-sm rounded-xl bg-signal-danger px-3 py-1.5 text-sm font-semibold text-ink-950" onClick={wipe}>
              Yes, wipe it
            </button>
            <button className="btn-ghost btn-sm" onClick={() => setConfirmWipe(false)}>Cancel</button>
          </div>
        )}
      </section>

      <section className="card space-y-2 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-100">How Vanish handles your data</h2>
        <ul className="space-y-1.5">
          <li className="flex gap-2"><span className="text-ghost">⬡</span> Everything lives in this browser’s local storage. Nothing is uploaded, ever.</li>
          <li className="flex gap-2"><span className="text-ghost">⬡</span> The page’s Content-Security-Policy blocks all third-party network requests — verifiable in your browser’s dev tools.</li>
          <li className="flex gap-2"><span className="text-ghost">⬡</span> No analytics, no cookies, no account, no telemetry. Open-source, MIT-licensed.</li>
          <li className="flex gap-2"><span className="text-ghost">⬡</span> Links to opt-out pages open in a new tab — those are the only “network” calls, and you initiate every one.</li>
        </ul>
      </section>
    </div>
  )
}
