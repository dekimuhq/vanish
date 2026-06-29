// Situational lenses over the existing catalog — "I'm in THIS situation, where
// do I start?". No new action content: each scenario is an ordered list of
// catalog action ids. Text (title/intro) lives in the i18n dict under
// `scenario.<id>.*`, English-sourced with locale fallback. Inspired by EFF SSD's
// security-scenario playlists, mapped onto vanish's own concerns + catalog.

export interface Scenario {
  id: string
  /** Ordered catalog action ids; rendered via ActionCard, region-filtered. */
  actionIds: string[]
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'survivor',
    actionIds: [
      'detect-bluetooth-trackers',
      'suppress-public-records',
      'private-mailing-address',
      'optout-truepeoplesearch',
      'optout-fastpeoplesearch',
      'remove-osint-aggregators',
      'optout-electoral-register',
      'signal',
      'masked-phone',
      'code-word',
    ],
  },
  {
    id: 'job-seeker',
    actionIds: [
      'google-yourself',
      'google-results-about-you',
      'prune-social-profiles',
      'bulk-delete-posts',
      'remove-outdated-google',
      'optout-spokeo',
      'optout-whitepages',
    ],
  },
  {
    id: 'activist',
    actionIds: [
      'strip-exif',
      'signal',
      'verify-signal-safety-numbers',
      'iphone-lockdown-mode',
      'anti-fingerprint',
      'encrypted-dns-devices',
      'always-vpn-tor',
      'detect-bluetooth-trackers',
    ],
  },
  {
    id: 'journalist',
    actionIds: [
      'signal',
      'verify-signal-safety-numbers',
      'e2ee-storage',
      'anti-fingerprint',
      'compartmentalize-identities',
      'strip-exif',
      'always-vpn-tor',
    ],
  },
  {
    id: 'breach',
    actionIds: [
      'hibp',
      'mozilla-monitor',
      'change-breached-passwords',
      'password-manager',
      'enable-2fa',
      'recognize-phishing',
      'freeze-credit',
      'hardware-keys',
    ],
  },
]

export const SCENARIOS_BY_ID: Record<string, Scenario> = Object.fromEntries(
  SCENARIOS.map((s) => [s.id, s]),
)
