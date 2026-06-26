import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Dashboard', icon: '◎', end: true },
  { to: '/plan', label: 'The Ladder', icon: '☰' },
  { to: '/brokers', label: 'Brokers', icon: '🏷️' },
  { to: '/letters', label: 'Letters', icon: '✍️' },
  { to: '/panic', label: 'Panic', icon: '🆘' },
  { to: '/settings', label: 'Settings', icon: '⚙️' },
]

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex min-h-full max-w-5xl flex-col px-4 pb-28 pt-5 sm:px-6 sm:pb-10">
      <header className="mb-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5">
          <Logo />
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-100">Vanish</div>
            <div className="-mt-1 text-[11px] text-slate-500">disappear, one tier at a time</div>
          </div>
        </NavLink>
        <span className="pill border border-ghost/20 bg-ghost/5 text-ghost-bright" title="No network requests leave your device">
          ⬡ 100% offline
        </span>
      </header>

      {/* Desktop / wide nav */}
      <nav className="mb-6 hidden flex-wrap gap-1.5 sm:flex">
        {NAV.map((n) => (
          <NavItem key={n.to} {...n} />
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
              {n.label}
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
      <circle cx="32" cy="32" r="22" fill="none" stroke="#1b212a" strokeWidth="4" />
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="none"
        stroke="#4fd1c5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="103.6 138.2"
        transform="rotate(-90 32 32)"
      />
      <path d="M21 23 L32 43 L43 23" fill="none" stroke="#5eead4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
