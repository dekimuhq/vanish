import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'

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
      <header className="mb-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5">
          <Logo />
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-100">{t('app.name')}</div>
            <div className="-mt-1 text-[11px] text-slate-500">{t('app.tagline')}</div>
          </div>
        </NavLink>
        <span className="pill border border-ghost/20 bg-ghost/5 text-ghost-bright" title={t('offline.title')}>
          {t('offline.badge')}
        </span>
      </header>

      {/* Desktop / wide nav */}
      <nav className="mb-6 hidden flex-wrap gap-1.5 sm:flex">
        {NAV.map((n) => (
          <NavItem key={n.to} to={n.to} label={t(n.labelKey)} icon={n.icon} end={n.end} />
        ))}
      </nav>

      <main className="flex-1">{children}</main>

      {/* Mobile bottom tab bar */}
      <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-ink-700/70 bg-ink-900/95 backdrop-blur sm:hidden">
        <div className="mx-auto grid max-w-5xl grid-cols-6">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2 text-[10px] ${
                  isActive ? 'text-ghost-bright' : 'text-slate-500'
                }`
              }
            >
              <span className="text-base">{n.icon}</span>
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
      <span>{icon}</span>
      {label}
    </NavLink>
  )
}

function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden>
      <rect width="64" height="64" rx="14" fill="#0f1216" />
      <g stroke="#4fd1c5" strokeWidth="1.1" strokeLinecap="round" opacity="0.67">
        <line x1="21" y1="40" x2="8" y2="37" />
        <line x1="21" y1="43" x2="7" y2="45" />
        <line x1="43" y1="40" x2="56" y2="37" />
        <line x1="43" y1="43" x2="57" y2="45" />
      </g>
      <g fill="#06080b" stroke="#4fd1c5" strokeWidth="2.3" strokeLinejoin="round">
        <polygon points="16,10 29.5,24 19,28" />
        <polygon points="48,10 34.5,24 45,28" />
        <ellipse cx="32" cy="39" rx="18" ry="15.5" />
      </g>
      <ellipse cx="25.5" cy="38" rx="3" ry="4.3" fill="#5eead4" />
      <ellipse cx="38.5" cy="38" rx="3" ry="4.3" fill="#5eead4" />
      <line x1="25.5" y1="34.4" x2="25.5" y2="41.6" stroke="#06080b" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38.5" y1="34.4" x2="38.5" y2="41.6" stroke="#06080b" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="32,44.5 30.4,42.6 33.6,42.6" fill="#5eead4" />
    </svg>
  )
}
