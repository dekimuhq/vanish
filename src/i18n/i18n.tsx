import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Action } from '../lib/types'
import { useStore } from '../store/store'
import type { Lang } from './langs'
import { en, type Dict } from './locales/en'
import type { ContentOverlay } from './content/types'

// English is static-imported above (instant first paint + always-available
// fallback). Every other locale + its catalog overlay is lazy-imported on
// demand — Vite emits each as a separate JS chunk, which the Workbox precache
// (`**/*.js`) picks up, so language switching stays fully offline.
type NonEn = Exclude<Lang, 'en'>

const LOCALE_LOADERS: Record<NonEn, () => Promise<Record<string, Dict>>> = {
  ca: () => import('./locales/ca'),
  es: () => import('./locales/es'),
  fr: () => import('./locales/fr'),
  de: () => import('./locales/de'),
  it: () => import('./locales/it'),
  pt: () => import('./locales/pt'),
  nl: () => import('./locales/nl'),
  pl: () => import('./locales/pl'),
  sv: () => import('./locales/sv'),
}

const CONTENT_LOADERS: Record<NonEn, () => Promise<Record<string, ContentOverlay>>> = {
  ca: () => import('./content/ca'),
  es: () => import('./content/es'),
  fr: () => import('./content/fr'),
  de: () => import('./content/de'),
  it: () => import('./content/it'),
  pt: () => import('./content/pt'),
  nl: () => import('./content/nl'),
  pl: () => import('./content/pl'),
  sv: () => import('./content/sv'),
}

export type Vars = Record<string, string | number>

function interpolate(tpl: string, vars?: Vars): string {
  if (!vars) return tpl
  return tpl.replace(/\{(\w+)\}/g, (_, k: string) => (k in vars ? String(vars[k]) : `{${k}}`))
}

export interface I18n {
  lang: Lang
  /** Resolve a string message, interpolating `{var}` tokens. Unknown key → key. */
  t: (key: string, vars?: Vars) => string
  /** Resolve a list message (e.g. decoy rules/interests). Unknown key → []. */
  tList: (key: string) => string[]
  /** Pick singular/plural by count (`<key>.one` / `<key>.other`). */
  tPlural: (keyBase: string, count: number, vars?: Vars) => string
  /** Apply the active catalog overlay to an action, field-by-field. */
  localizeAction: (action: Action) => Action
}

const I18nContext = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const { state } = useStore()
  const lang = state.lang
  const [localeDict, setLocaleDict] = useState<Dict>({})
  const [content, setContent] = useState<ContentOverlay>({})

  useEffect(() => {
    document.documentElement.lang = lang
    if (lang === 'en') {
      setLocaleDict({})
      setContent({})
      return
    }
    let alive = true
    Promise.all([LOCALE_LOADERS[lang](), CONTENT_LOADERS[lang]()])
      .then(([localeMod, contentMod]) => {
        if (!alive) return
        setLocaleDict((localeMod[lang] ?? {}) as Dict)
        setContent((contentMod[lang] ?? {}) as ContentOverlay)
      })
      .catch(() => {
        // Chunk failed to load — stay on English rather than break the app.
      })
    return () => {
      alive = false
    }
  }, [lang])

  const value = useMemo<I18n>(() => {
    const dict: Dict = { ...en, ...localeDict }

    const t = (key: string, vars?: Vars): string => {
      const v = dict[key]
      if (typeof v === 'string') return interpolate(v, vars)
      return key
    }

    const tList = (key: string): string[] => {
      const v = dict[key]
      return Array.isArray(v) ? v : []
    }

    const tPlural = (keyBase: string, count: number, vars?: Vars): string =>
      t(`${keyBase}.${count === 1 ? 'one' : 'other'}`, { count, ...vars })

    const localizeAction = (action: Action): Action => {
      const o = content[action.id]
      if (!o) return action
      return {
        ...action,
        title: o.title ?? action.title,
        summary: o.summary ?? action.summary,
        steps: o.steps ?? action.steps,
        urlLabel: o.urlLabel ?? action.urlLabel,
        internalLabel: o.internalLabel ?? action.internalLabel,
      }
    }

    return { lang, t, tList, tPlural, localizeAction }
  }, [lang, localeDict, content])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
