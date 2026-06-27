import { useRef, useState } from 'react'
import { TierBadge } from '../components/Pills'
import { sanitize } from '../store/store'
import { encryptBackup, decryptBackup, BackupError } from '../lib/backup'
import { saveBlob } from '../lib/save-file'
import { TIERS, type Country, type Tier } from '../lib/types'
import { COUNTRIES, COUNTRY_GROUPS, authorityFor, regionForCountry } from '../data/countries'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'
import { LANGS, LANG_LABELS, type Lang } from '../i18n/langs'

export function Settings() {
  const { state, updateProfile, setLang, exportJSON, importState, wipe, markBackedUp } = useStore()
  const { t } = useI18n()
  const fileRef = useRef<HTMLInputElement>(null)
  const encFileRef = useRef<HTMLInputElement>(null)
  const [confirmWipe, setConfirmWipe] = useState(false)
  const [importMsg, setImportMsg] = useState<string | null>(null)
  const [pass, setPass] = useState('')
  const [busy, setBusy] = useState(false)

  function download() {
    const blob = new Blob([exportJSON()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `vanish-backup-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    markBackedUp(new Date().toISOString())
    URL.revokeObjectURL(url)
  }

  async function exportEncrypted() {
    if (!pass) { setImportMsg(t('settings.passphraseRequired')); setTimeout(() => setImportMsg(null), 3000); return }
    setBusy(true)
    try {
      const blob = await encryptBackup(state, pass)
      const ok = await saveBlob(blob, `vanish-backup-${new Date().toISOString().slice(0, 10)}.vanish`)
      if (!ok) return // user cancelled the save dialog — don't stamp or message
      markBackedUp(new Date().toISOString())
      setImportMsg(t('settings.backupSaved'))
    } catch (e) {
      setImportMsg(e instanceof BackupError ? e.message : t('settings.backupErr'))
    } finally {
      setBusy(false)
      setTimeout(() => setImportMsg(null), 3000)
    }
  }

  async function onImportEncrypted(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    if (!pass) { setImportMsg(t('settings.passphraseRequired')); setTimeout(() => setImportMsg(null), 3000); return }
    setBusy(true)
    try {
      const raw = await decryptBackup(file, pass)
      importState(sanitize(raw))
      setImportMsg(t('settings.importOk'))
    } catch (e) {
      setImportMsg(e instanceof BackupError ? e.message : t('settings.importErr'))
    } finally {
      setBusy(false)
      setTimeout(() => setImportMsg(null), 3000)
    }
  }

  function onImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = sanitize(JSON.parse(String(reader.result)))
        importState(parsed)
        setImportMsg(t('settings.importOk'))
      } catch {
        setImportMsg(t('settings.importErr'))
      }
      setTimeout(() => setImportMsg(null), 3000)
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  function printCodeWordCard(word: string) {
    // Offline-only: a blank window built with DOM APIs (textContent escapes the
    // user value — no innerHTML/document.write), then printed. No network.
    const w = window.open('', '_blank', 'width=420,height=280')
    if (!w) return
    const doc = w.document
    doc.title = t('settings.cardDocTitle')
    const style = doc.createElement('style')
    style.textContent =
      'body{font-family:system-ui,sans-serif;margin:0;display:grid;place-items:center;height:100vh}' +
      '.card{border:2px dashed #6E7B8B;border-radius:12px;padding:24px 32px;text-align:center}' +
      '.k{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#6E7B8B}' +
      '.w{font-size:28px;font-weight:800;margin:8px 0}' +
      '.n{font-size:11px;color:#555;max-width:280px}'
    doc.head.appendChild(style)
    const card = doc.createElement('div')
    card.className = 'card'
    const k = doc.createElement('div')
    k.className = 'k'
    k.textContent = t('settings.cardLabel')
    const wd = doc.createElement('div')
    wd.className = 'w'
    wd.textContent = word
    const n = doc.createElement('div')
    n.className = 'n'
    n.textContent = t('settings.cardNote')
    card.append(k, wd, n)
    doc.body.appendChild(card)
    w.focus()
    w.print()
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-100">{t('settings.title')}</h1>
      </header>

      <section className="card space-y-3 p-5">
        <h2 className="font-semibold text-slate-100">{t('settings.language')}</h2>
        <label className="block">
          <select
            className="input"
            value={state.lang}
            onChange={(e) => setLang(e.target.value as Lang)}
            aria-label={t('settings.language')}
          >
            {LANGS.map((l) => (
              <option key={l} value={l}>
                {LANG_LABELS[l]}
              </option>
            ))}
          </select>
          <span className="mt-2 block text-xs text-slate-500">{t('settings.languageHint')}</span>
        </label>
      </section>

      <section className="card space-y-4 p-5">
        <h2 className="font-semibold text-slate-100">{t('settings.yourPlan')}</h2>
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-slate-400">{t('settings.country')}</span>
          <select
            className="input"
            value={state.profile.country ?? ''}
            onChange={(e) => {
              const c = (e.target.value || undefined) as Country | undefined
              updateProfile({ country: c, region: regionForCountry(c) })
            }}
          >
            <option value="">{t('settings.notSet')}</option>
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
          {(() => {
            const auth = authorityFor(state.profile.country)
            return auth ? (
              <p className="mt-2 text-xs text-slate-500">
                {t('settings.supervisoryAuthority')}{' '}
                <a className="text-ghost-bright hover:underline" href={auth.url} target="_blank" rel="noopener noreferrer">
                  {auth.name} ↗
                </a>
              </p>
            ) : (
              <p className="mt-2 text-xs text-slate-500">{t('settings.region', { region: state.profile.region.toUpperCase() })}</p>
            )
          })()}
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-medium text-slate-400">{t('settings.targetTier')}</span>
          <div className="grid gap-2 sm:grid-cols-2">
            {([1, 2, 3, 4] as Tier[]).map((tier) => (
              <button
                key={tier}
                onClick={() => updateProfile({ targetTier: tier })}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm ${
                  state.profile.targetTier === tier ? 'border-ghost/40 bg-ghost/10' : 'border-ink-700 hover:border-ink-600'
                }`}
              >
                <TierBadge tier={tier} withName={false} />
                <span className="text-slate-300">{t(`tier.${TIERS[tier].key}.name`)}</span>
              </button>
            ))}
          </div>
        </label>
      </section>

      <section className="card space-y-3 p-5" id="code-word">
        <h2 className="font-semibold text-slate-100">{t('settings.codeWordTitle')}</h2>
        <p className="text-sm text-slate-400">{t('settings.codeWordBody')}</p>
        <input
          className="input"
          value={state.profile.codeWord ?? ''}
          onChange={(e) => updateProfile({ codeWord: e.target.value || undefined })}
          placeholder={t('settings.codeWordPlaceholder')}
          aria-label={t('settings.cardLabel')}
          autoComplete="off"
        />
        {state.profile.codeWord && (
          <button className="btn-ghost btn-sm" onClick={() => printCodeWordCard(state.profile.codeWord!)}>
            {t('settings.printCard')}
          </button>
        )}
        <p className="text-xs text-slate-500">{t('settings.codeWordRule')}</p>
      </section>

      <section className="card space-y-3 p-5">
        <h2 className="font-semibold text-slate-100">{t('settings.backupTitle')}</h2>
        <p className="text-sm text-slate-400">{t('settings.backupBody')}</p>
        <div className="flex flex-wrap gap-2">
          <button className="btn-ghost btn-sm" onClick={download}>{t('settings.export')}</button>
          <button className="btn-ghost btn-sm" onClick={() => fileRef.current?.click()}>{t('settings.import')}</button>
          <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={onImport} />
          {importMsg && <span role="status" aria-live="polite" className="self-center text-sm text-ghost-bright">{importMsg}</span>}
        </div>
      </section>

      <section className="card space-y-3 p-5">
        <h2 className="font-semibold text-slate-100">{t('settings.encBackupTitle')}</h2>
        <p className="text-sm text-slate-400">{t('settings.encBackupBody')}</p>
        <input
          className="input"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder={t('settings.passphrasePlaceholder')}
          aria-label={t('settings.passphrase')}
          autoComplete="off"
        />
        <div className="flex flex-wrap gap-2">
          <button className="btn-primary btn-sm" onClick={exportEncrypted} disabled={busy}>
            {t('settings.exportEncrypted')}
          </button>
          <button className="btn-ghost btn-sm" onClick={() => encFileRef.current?.click()} disabled={busy}>
            {t('settings.importEncrypted')}
          </button>
          <input ref={encFileRef} type="file" accept=".vanish" className="hidden" onChange={onImportEncrypted} />
        </div>
      </section>

      <section className="card space-y-3 border-signal-danger/20 p-5">
        <h2 className="font-semibold text-slate-100">{t('settings.wipeTitle')}</h2>
        <p className="text-sm text-slate-400">{t('settings.wipeBody')}</p>
        {!confirmWipe ? (
          <button className="btn-sm rounded-xl border border-signal-danger/40 px-3 py-1.5 text-sm text-signal-danger hover:bg-signal-danger/10" onClick={() => setConfirmWipe(true)}>
            {t('settings.wipeBtn')}
          </button>
        ) : (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-signal-danger">{t('settings.wipeConfirm')}</span>
            <button className="btn-sm rounded-xl bg-signal-danger px-3 py-1.5 text-sm font-semibold text-ink-950" onClick={wipe}>
              {t('settings.wipeYes')}
            </button>
            <button className="btn-ghost btn-sm" onClick={() => setConfirmWipe(false)}>{t('common.cancel')}</button>
          </div>
        )}
      </section>

      <section className="card space-y-2 p-5 text-sm text-slate-400">
        <h2 className="font-semibold text-slate-100">{t('settings.dataTitle')}</h2>
        <ul className="space-y-1.5">
          <li className="flex gap-2"><span className="text-ghost">⬡</span> {t('settings.dataBullet1')}</li>
          <li className="flex gap-2"><span className="text-ghost">⬡</span> {t('settings.dataBullet2')}</li>
          <li className="flex gap-2"><span className="text-ghost">⬡</span> {t('settings.dataBullet3')}</li>
          <li className="flex gap-2"><span className="text-ghost">⬡</span> {t('settings.dataBullet4')}</li>
        </ul>
      </section>
    </div>
  )
}
