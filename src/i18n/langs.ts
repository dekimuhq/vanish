// The 10 supported UI languages. EU/GDPR-weighted set; `en` is the base and
// always-available fallback. Catalan (`ca`) is first-class — Vanish ships on
// vanish.cat and the sponsored-TLD charter wants real Catalan content.

export type Lang = 'en' | 'ca' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'nl' | 'pl' | 'sv'

export const LANGS: readonly Lang[] = ['en', 'ca', 'es', 'fr', 'de', 'it', 'pt', 'nl', 'pl', 'sv'] as const

/** Native endonyms — a language picker should name each language in itself. */
export const LANG_LABELS: Record<Lang, string> = {
  en: 'English',
  ca: 'Català',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  sv: 'Svenska',
}

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value)
}

/** Best-effort match of a BCP-47 tag (e.g. `navigator.language` = "ca-ES") to a
 *  supported language. Falls back to `en`. Pure — pass the tag in. */
export function detectLang(tag: string | undefined | null): Lang {
  if (!tag) return 'en'
  const primary = tag.toLowerCase().split('-')[0]
  return isLang(primary) ? primary : 'en'
}
