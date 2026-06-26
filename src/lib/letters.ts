import type { LetterTemplate, Profile } from './types'

export interface LetterDef {
  id: LetterTemplate
  name: string
  law: string
  blurb: string
  subject: string
  /** Builds the letter body from the user's locally-stored profile, the target
   *  org, and (for GDPR letters) the name of their supervisory authority. */
  body: (p: Profile, org: string, authority?: string) => string
}

/** Escalation clause naming the competent authority, when we know it. */
const escalation = (authority?: string) =>
  `Should you fail to respond within the statutory period, or refuse this request without valid legal grounds, I reserve the right to lodge a complaint with ${
    authority || 'my supervisory authority'
  } and to pursue any further legal remedy available to me.`

const sig = (p: Profile) =>
  [p.name || '[Your full name]', p.email || '[Your email]', p.address || '[Your postal address]']
    .filter(Boolean)
    .join('\n')

export const LETTERS: Record<LetterTemplate, LetterDef> = {
  'gdpr-erasure': {
    id: 'gdpr-erasure',
    name: 'GDPR Erasure Request',
    law: 'GDPR Article 17 — Right to erasure ("right to be forgotten")',
    blurb:
      'Demand an EU/UK-regulated organisation delete all personal data they hold about you. They must respond within one month.',
    subject: 'Request for erasure of personal data under Article 17 GDPR',
    body: (p, org, authority) => `To the Data Protection Officer / Privacy Team at ${org || '[Organisation]'},

I am writing to exercise my right to erasure under Article 17 of the General Data Protection Regulation (GDPR).

I request that you erase, without undue delay, all personal data you hold concerning me, including but not limited to: name, contact details, identifiers, behavioural and profiling data, and any data obtained from third parties or data brokers.

I am the data subject. My identifying details are:
${sig(p)}

Please also:
1. Confirm in writing once the erasure is complete.
2. Inform any recipients or third parties to whom my data has been disclosed of this erasure request, in line with Article 19 GDPR.
3. Cease any further processing of my personal data save where you are legally required to retain it — in which case, please specify the exact legal basis and retention period.

Under Article 12(3) GDPR you must respond within one month of receipt. If you do not hold any data about me, please confirm that explicitly.

${escalation(authority)}

Yours faithfully,
${p.name || '[Your full name]'}`,
  },

  'gdpr-access': {
    id: 'gdpr-access',
    name: 'GDPR Access Request (SAR)',
    law: 'GDPR Article 15 — Right of access',
    blurb:
      'See exactly what an organisation holds on you and where it came from — the reconnaissance step before erasure.',
    subject: 'Subject Access Request under Article 15 GDPR',
    body: (p, org, authority) => `To the Data Protection Officer / Privacy Team at ${org || '[Organisation]'},

I am exercising my right of access under Article 15 of the GDPR. Please provide me with:

1. Confirmation as to whether you process personal data concerning me.
2. A copy of all personal data you hold about me.
3. The purposes of the processing.
4. The categories of personal data concerned.
5. The recipients or categories of recipient to whom the data has been or will be disclosed.
6. The source of the data, where it was not collected directly from me.
7. The existence of any automated decision-making or profiling, and meaningful information about the logic involved.

My identifying details are:
${sig(p)}

Please provide this information within one month, free of charge, in a commonly used electronic format, as required by Articles 12 and 15 GDPR.

${escalation(authority)}

Yours faithfully,
${p.name || '[Your full name]'}`,
  },

  'ccpa-delete': {
    id: 'ccpa-delete',
    name: 'CCPA/CPRA Delete & Do-Not-Sell',
    law: 'California CCPA/CPRA — §1798.105 (delete) & §1798.120 (opt-out of sale/share)',
    blurb:
      'For US (California) residents — demand a business delete your data and stop selling or sharing it. Many brokers honour these even outside California.',
    subject: 'Request to Delete and to Opt-Out of Sale/Sharing of Personal Information',
    body: (p, org) => `To the Privacy Team at ${org || '[Organisation]'},

I am a California resident exercising my rights under the California Consumer Privacy Act, as amended by the CPRA.

1. DELETE (Cal. Civ. Code §1798.105): Please delete all personal information you have collected about me and direct any service providers and contractors to do the same.

2. OPT-OUT (Cal. Civ. Code §1798.120 & §1798.121): Please stop selling and sharing my personal information, and stop using any sensitive personal information for purposes beyond those permitted.

3. Please confirm completion in writing and disclose the categories of personal information that were deleted.

My identifying details (used solely to locate and verify my records) are:
${sig(p)}

Please respond within 45 days as required by §1798.130. Do not require me to create an account in order to exercise these rights.

Regards,
${p.name || '[Your full name]'}`,
  },
}

export function renderLetter(template: LetterTemplate, profile: Profile, org: string, authority?: string) {
  const def = LETTERS[template]
  return { subject: def.subject, body: def.body(profile, org, authority) }
}

export function mailtoHref(to: string, subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body })
  // URLSearchParams encodes spaces as '+'; mail clients want %20 in the body.
  const qs = params.toString().replace(/\+/g, '%20')
  return `mailto:${encodeURIComponent(to)}?${qs}`
}
