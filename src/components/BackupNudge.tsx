import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/store'
import { useI18n } from '../i18n/i18n'

const DAY_MS = 86_400_000
const STALE_DAYS = 14
const MIN_ITEMS = 3

/** Non-blocking, dismissible reminder to make a backup. Shows once there is
 *  meaningful state and no recent backup. No dark patterns — "Later" hides it. */
export function BackupNudge() {
  const { state } = useStore()
  const { t } = useI18n()
  const [dismissed, setDismissed] = useState(false)

  const items = Object.keys(state.progress).length + Object.keys(state.letters).length
  const stale =
    state.lastBackupAt == null || Date.now() - new Date(state.lastBackupAt).getTime() > STALE_DAYS * DAY_MS

  if (dismissed || !state.onboarded || items < MIN_ITEMS || !stale) return null

  return (
    <div className="mb-5 flex flex-wrap items-center gap-3 rounded-xl border border-ghost/20 bg-ghost/[0.06] px-4 py-3 text-sm" role="status" aria-live="polite">
      <span className="flex-1 text-slate-300">{t('nudge.backup')}</span>
      <Link to="/settings" className="btn-primary btn-sm" onClick={() => setDismissed(true)}>
        {t('nudge.backupCta')}
      </Link>
      <button className="btn-sm text-slate-400 hover:text-slate-300" onClick={() => setDismissed(true)}>
        {t('nudge.dismiss')}
      </button>
    </div>
  )
}
