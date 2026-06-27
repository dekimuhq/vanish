import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import { BackupNudge } from './BackupNudge'
import { CatMark } from './CatMark'

const NAV = [
  { to: '/', labelKey: 'nav.dashboard', icon: '◎', end: true },
  { to: '/plan', labelKey: 'nav.plan', icon: '☰' },
  { to: '/brokers', labelKey: 'nav.brokers', icon: '🏷️' },
  { to: '/letters', labelKey: 'nav.letters', icon: '✍️' },
  { to: '/panic', labelKey: 'nav.panic', icon: '🆘' },
  { to: '/settings', labelKey: 'nav.settings', icon: '⚙️' },
]

export function Layout({ children }: { children: ReactNode }) {
  const { t } = useI18n()
  return (
    <div className="mx-auto flex min-h-full max-w-5xl flex-col px-4 pb-28 pt-5 sm:px-6 sm:pb-10">
      <a href="#main" className="skip-link btn-primary btn-sm">{t('a11y.skipToContent')}</a>
      <header className="mb-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5">
          <Logo />
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-100">{t('app.name')}</div>
            <div className="-mt-1 text-[11px] text-slate-400">{t('app.tagline')}</div>
          </div>
        </NavLink>
        <span className="pill border border-ghost/20 bg-ghost/5 text-ghost-bright" title={t('offline.title')}>
          {t('offline.badge')}
        </span>
      </header>

      {/* Desktop / wide nav */}
      <nav aria-label={t('a11y.primaryNav')} className="mb-6 hidden flex-wrap gap-1.5 sm:flex">
        {NAV.map((n) => (
          <NavItem key={n.to} to={n.to} label={t(n.labelKey)} icon={n.icon} end={n.end} />
        ))}
      </nav>

      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none"><BackupNudge />{children}</main>

      {/* Mobile bottom tab bar */}
      <nav aria-label={t('a11y.primaryNav')} className="fixed inset-x-0 bottom-0 z-20 border-t border-ink-700/70 bg-ink-900/95 backdrop-blur sm:hidden">
        <div className="mx-auto grid max-w-5xl grid-cols-6">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2 text-[10px] ${
                  isActive ? 'text-ghost-bright' : 'text-slate-400'
                }`
              }
            >
              <span className="text-base" aria-hidden="true">{n.icon}</span>
              {t(n.labelKey)}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}

function NavItem({ to, label, icon, end }: { to: string; label: string; icon: string; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `pill border px-3 py-1.5 text-sm transition ${
          isActive
            ? 'border-ghost/40 bg-ghost/10 text-ghost-bright'
            : 'border-ink-700 text-slate-400 hover:border-ink-600 hover:text-slate-200'
        }`
      }
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </NavLink>
  )
}

function Logo() {
  return <CatMark size={34} />
}
