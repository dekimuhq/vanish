// Short, offline "Further Learning" primers — the why behind the actions.
// NOT a copy of EFF: each entry is a couple of paragraphs plus a top-level link
// out to EFF's full guide for depth, and internal links to the related catalog
// actions. Text (title + body paragraphs) lives in the i18n dict under
// `learn.<id>.title` / `learn.<id>.body`, English-sourced with locale fallback.

export interface LearnEntry {
  id: string
  relatedActionIds?: string[]
  /** Official full guide, opened top-level in a new tab. */
  externalUrl?: string
  externalLabel?: string
}

export const LEARN: LearnEntry[] = [
  {
    id: 'threat-model',
    relatedActionIds: ['threat-model-review'],
    externalUrl: 'https://ssd.eff.org/module/your-security-plan',
    externalLabel: 'EFF: Your Security Plan',
  },
  {
    id: 'metadata',
    relatedActionIds: ['strip-exif'],
    externalUrl: 'https://ssd.eff.org/module/why-metadata-matters',
    externalLabel: 'EFF: Why Metadata Matters',
  },
  {
    id: 'encryption',
    relatedActionIds: ['signal', 'e2ee-storage'],
    externalUrl: 'https://ssd.eff.org/module/what-should-i-know-about-encryption',
    externalLabel: 'EFF: What to Know About Encryption',
  },
  {
    id: 'phishing',
    relatedActionIds: ['recognize-phishing', 'hardware-keys'],
    externalUrl: 'https://ssd.eff.org/module/how-avoid-phishing-attacks',
    externalLabel: 'EFF: How to Avoid Phishing',
  },
  {
    id: 'data-brokers',
    relatedActionIds: ['full-broker-sweep', 'schedule-broker-recheck'],
    externalUrl: 'https://ssd.eff.org/module/how-manage-your-digital-footprint',
    externalLabel: 'EFF: Manage Your Digital Footprint',
  },
  {
    id: 'vpn',
    relatedActionIds: ['always-vpn-tor'],
    externalUrl: 'https://ssd.eff.org/module/choosing-vpn-thats-right-you',
    externalLabel: 'EFF: Choosing a VPN',
  },
  {
    id: 'key-verification',
    relatedActionIds: ['verify-signal-safety-numbers'],
    externalUrl: 'https://ssd.eff.org/module/key-verification',
    externalLabel: 'EFF: Key Verification',
  },
]

export const LEARN_BY_ID: Record<string, LearnEntry> = Object.fromEntries(
  LEARN.map((e) => [e.id, e]),
)
