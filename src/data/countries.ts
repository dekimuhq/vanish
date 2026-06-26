import type { Country, Region } from '../lib/types'

// Country table for Vanish. The EU-27 each carry their national GDPR
// supervisory authority (the body you escalate to when a controller ignores a
// request); the UK carries the ICO under UK-GDPR. Authority URLs are official
// government domains, last-verified ~2026-06 — treat as decaying like the
// opt-out URLs in catalog.ts.

export interface SupervisoryAuthority {
  /** Short name of the data-protection authority. */
  name: string
  /** Official homepage / complaint-lodging URL. */
  url: string
}

export interface CountryInfo {
  code: Country
  name: string
  flag: string
  /** Coarse group that drives action relevance (see lib/select.ts). */
  region: Region
  /** Competent GDPR / UK-GDPR supervisory authority, where one exists. */
  authority?: SupervisoryAuthority
}

/** EU-27, ordered by English name — the order the pickers render. */
export const EU_COUNTRIES: Country[] = [
  'at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr',
  'de', 'gr', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl',
  'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se',
]

export const COUNTRIES: Record<Country, CountryInfo> = {
  at: { code: 'at', name: 'Austria', flag: '🇦🇹', region: 'eu', authority: { name: 'Datenschutzbehörde (DSB)', url: 'https://www.dsb.gv.at' } },
  be: { code: 'be', name: 'Belgium', flag: '🇧🇪', region: 'eu', authority: { name: 'Data Protection Authority (APD/GBA)', url: 'https://www.autoriteprotectiondonnees.be' } },
  bg: { code: 'bg', name: 'Bulgaria', flag: '🇧🇬', region: 'eu', authority: { name: 'Commission for Personal Data Protection (CPDP)', url: 'https://www.cpdp.bg' } },
  hr: { code: 'hr', name: 'Croatia', flag: '🇭🇷', region: 'eu', authority: { name: 'AZOP', url: 'https://azop.hr' } },
  cy: { code: 'cy', name: 'Cyprus', flag: '🇨🇾', region: 'eu', authority: { name: 'Commissioner for Personal Data Protection', url: 'https://www.dataprotection.gov.cy' } },
  cz: { code: 'cz', name: 'Czechia', flag: '🇨🇿', region: 'eu', authority: { name: 'Úřad pro ochranu osobních údajů (ÚOOÚ)', url: 'https://www.uoou.cz' } },
  dk: { code: 'dk', name: 'Denmark', flag: '🇩🇰', region: 'eu', authority: { name: 'Datatilsynet', url: 'https://www.datatilsynet.dk' } },
  ee: { code: 'ee', name: 'Estonia', flag: '🇪🇪', region: 'eu', authority: { name: 'Andmekaitse Inspektsioon (AKI)', url: 'https://www.aki.ee' } },
  fi: { code: 'fi', name: 'Finland', flag: '🇫🇮', region: 'eu', authority: { name: 'Office of the Data Protection Ombudsman', url: 'https://tietosuoja.fi' } },
  fr: { code: 'fr', name: 'France', flag: '🇫🇷', region: 'eu', authority: { name: 'CNIL', url: 'https://www.cnil.fr' } },
  de: { code: 'de', name: 'Germany', flag: '🇩🇪', region: 'eu', authority: { name: 'BfDI (federal) / Länder authorities', url: 'https://www.bfdi.bund.de' } },
  gr: { code: 'gr', name: 'Greece', flag: '🇬🇷', region: 'eu', authority: { name: 'Hellenic Data Protection Authority (HDPA)', url: 'https://www.dpa.gr' } },
  hu: { code: 'hu', name: 'Hungary', flag: '🇭🇺', region: 'eu', authority: { name: 'NAIH', url: 'https://www.naih.hu' } },
  ie: { code: 'ie', name: 'Ireland', flag: '🇮🇪', region: 'eu', authority: { name: 'Data Protection Commission (DPC)', url: 'https://www.dataprotection.ie' } },
  it: { code: 'it', name: 'Italy', flag: '🇮🇹', region: 'eu', authority: { name: 'Garante per la protezione dei dati personali', url: 'https://www.garanteprivacy.it' } },
  lv: { code: 'lv', name: 'Latvia', flag: '🇱🇻', region: 'eu', authority: { name: 'Datu valsts inspekcija (DVI)', url: 'https://www.dvi.gov.lv' } },
  lt: { code: 'lt', name: 'Lithuania', flag: '🇱🇹', region: 'eu', authority: { name: 'Valstybinė duomenų apsaugos inspekcija (VDAI)', url: 'https://vdai.lrv.lt' } },
  lu: { code: 'lu', name: 'Luxembourg', flag: '🇱🇺', region: 'eu', authority: { name: 'CNPD', url: 'https://cnpd.public.lu' } },
  mt: { code: 'mt', name: 'Malta', flag: '🇲🇹', region: 'eu', authority: { name: 'Information and Data Protection Commissioner (IDPC)', url: 'https://idpc.org.mt' } },
  nl: { code: 'nl', name: 'Netherlands', flag: '🇳🇱', region: 'eu', authority: { name: 'Autoriteit Persoonsgegevens (AP)', url: 'https://www.autoriteitpersoonsgegevens.nl' } },
  pl: { code: 'pl', name: 'Poland', flag: '🇵🇱', region: 'eu', authority: { name: 'UODO', url: 'https://uodo.gov.pl' } },
  pt: { code: 'pt', name: 'Portugal', flag: '🇵🇹', region: 'eu', authority: { name: 'CNPD', url: 'https://www.cnpd.pt' } },
  ro: { code: 'ro', name: 'Romania', flag: '🇷🇴', region: 'eu', authority: { name: 'ANSPDCP', url: 'https://www.dataprotection.ro' } },
  sk: { code: 'sk', name: 'Slovakia', flag: '🇸🇰', region: 'eu', authority: { name: 'Úrad na ochranu osobných údajov', url: 'https://dataprotection.gov.sk' } },
  si: { code: 'si', name: 'Slovenia', flag: '🇸🇮', region: 'eu', authority: { name: 'Informacijski pooblaščenec (IP)', url: 'https://www.ip-rs.si' } },
  es: { code: 'es', name: 'Spain', flag: '🇪🇸', region: 'eu', authority: { name: 'AEPD', url: 'https://www.aepd.es' } },
  se: { code: 'se', name: 'Sweden', flag: '🇸🇪', region: 'eu', authority: { name: 'IMY', url: 'https://www.imy.se' } },

  gb: { code: 'gb', name: 'United Kingdom', flag: '🇬🇧', region: 'uk', authority: { name: "Information Commissioner's Office (ICO)", url: 'https://ico.org.uk' } },
  us: { code: 'us', name: 'United States', flag: '🇺🇸', region: 'us' },
  ot: { code: 'ot', name: 'Elsewhere', flag: '🌍', region: 'other' },
}

/** Grouped for the onboarding / settings country pickers. `key` resolves the
 *  localized group label via `t('countryGroup.'+key)`; `label` is the English
 *  fallback. */
export const COUNTRY_GROUPS: { key: 'eu' | 'uk' | 'us' | 'other'; label: string; codes: Country[] }[] = [
  { key: 'eu', label: 'European Union', codes: EU_COUNTRIES },
  { key: 'uk', label: 'United Kingdom', codes: ['gb'] },
  { key: 'us', label: 'United States', codes: ['us'] },
  { key: 'other', label: 'Elsewhere', codes: ['ot'] },
]

/** Coarse region a country belongs to. Defaults to 'eu' when unset so existing
 *  region-defaulting behaviour is preserved for pre-country profiles. */
export function regionForCountry(code: Country | undefined): Region {
  if (!code) return 'eu'
  return COUNTRIES[code]?.region ?? 'other'
}

export function countryInfo(code: Country | undefined): CountryInfo | undefined {
  return code ? COUNTRIES[code] : undefined
}

export function authorityFor(code: Country | undefined): SupervisoryAuthority | undefined {
  return code ? COUNTRIES[code]?.authority : undefined
}
