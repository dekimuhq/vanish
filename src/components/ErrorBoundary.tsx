import { Component, type ErrorInfo, type ReactNode } from 'react'

const STORAGE_KEY = 'vanish.state.v1'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

/** Last-resort recovery screen. A corrupt or hand-edited backup/import is the one
 *  untrusted-input boundary in the app; if a bad shape still slips past
 *  `sanitize()` and throws during render, this keeps the user off a blank white
 *  screen and offers a one-click reset (their data lives in a `.vanish` backup
 *  they own, so a reset is recoverable). Deliberately self-contained — no store,
 *  no i18n — because those providers are exactly what might have crashed. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // Stays on-device: console only, never sent anywhere (zero-network invariant).
    // eslint-disable-next-line no-console
    console.error('Vanish render error:', error, info.componentStack)
  }

  private reset = (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // localStorage may be unavailable (private mode); reload still helps.
    }
    location.reload()
  }

  render(): ReactNode {
    if (!this.state.error) return this.props.children
    return (
      <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-4 px-6 text-center">
        <div className="text-4xl">🐈‍⬛</div>
        <h1 className="text-xl font-bold text-slate-100">Something broke locally</h1>
        <p className="text-sm text-slate-400">
          Vanish hit an unexpected error — most likely a corrupt or incompatible saved state.
          Nothing left your device. You can reset to a clean slate and restore from a{' '}
          <span className="text-ghost">.vanish</span> backup if you have one.
        </p>
        <button
          type="button"
          onClick={this.reset}
          className="rounded-xl bg-ghost px-5 py-2.5 text-sm font-bold text-ink-950 transition hover:opacity-90"
        >
          Reset & reload
        </button>
        <button
          type="button"
          onClick={() => location.reload()}
          className="text-xs text-slate-500 underline-offset-2 hover:underline"
        >
          Just reload (keep my data)
        </button>
      </main>
    )
  }
}
