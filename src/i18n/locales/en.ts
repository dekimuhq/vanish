// Master UI dictionary. Flat dotted keys. This file is THE CONTRACT every other
// locale mirrors — keys present here, missing elsewhere, fall back to English.
// Values are string or string[] (lists like decoy rules/interests). `{name}`
// tokens are interpolated by t()/tList(). Catalog action text lives separately
// in i18n/content/<lang>.ts — NOT here.

export type Dict = Record<string, string | string[]>

export const en = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': 'disappear, one tier at a time',
  'offline.badge': '⬡ 100% offline',
  'offline.title': 'No network requests leave your device',
  'nav.dashboard': 'Dashboard',
  'nav.plan': 'The Ladder',
  'nav.brokers': 'Brokers',
  'nav.letters': 'Letters',
  'nav.panic': 'Panic',
  'nav.settings': 'Settings',
  'a11y.skipToContent': 'Skip to content',
  'a11y.primaryNav': 'Primary',

  // Common
  'common.back': '← Back',
  'common.next': 'Next →',
  'common.cancel': 'Cancel',

  // Country group labels (select optgroups)
  'countryGroup.eu': 'European Union',
  'countryGroup.uk': 'United Kingdom',
  'countryGroup.us': 'United States',
  'countryGroup.other': 'Elsewhere',

  // Tiers
  'tier.tidy.name': 'Tidy Up',
  'tier.tidy.tagline': 'Low effort, high relief',
  'tier.tidy.who': 'Anyone. The 20 minutes everyone should spend.',
  'tier.reduce.name': 'Reduce',
  'tier.reduce.tagline': 'Shrink your footprint',
  'tier.reduce.who': "You're privacy-curious and want real distance from Big Tech & brokers.",
  'tier.lockdown.name': 'Lock Down',
  'tier.lockdown.tagline': 'Harden everything',
  'tier.lockdown.who': 'You want to be genuinely hard to track, profile, or dox.',
  'tier.ghost.name': 'Ghost',
  'tier.ghost.tagline': 'Disappear',
  'tier.ghost.who': 'Activists, survivors, the targeted. Maximum separation from your name.',

  // Categories
  'category.accounts': 'Accounts',
  'category.data-brokers': 'Data Brokers',
  'category.devices': 'Devices',
  'category.browser': 'Browser',
  'category.social': 'Social',
  'category.search': 'Search',
  'category.messaging': 'Messaging',
  'category.email': 'Email',
  'category.finance': 'Finance',
  'category.network': 'Network',
  'category.legal': 'Legal Levers',

  // Score labels + ring
  'score.wideOpen': 'Wide open',
  'score.exposed': 'Exposed',
  'score.guarded': 'Guarded',
  'score.ghosting': 'Ghosting',
  'score.ariaLabel': 'Privacy score {score} of 100',

  // Effort / impact pills
  'pills.effort.low': 'Easy',
  'pills.effort.med': 'Moderate',
  'pills.effort.high': 'Involved',
  'pills.effortTitle': 'How much effort this takes',
  'pills.impact.low': 'Low impact',
  'pills.impact.med': 'Solid impact',
  'pills.impact.high': 'High impact',

  // Adversaries (onboarding concern → adversary phrase)
  'adversary.stalking': 'a specific person trying to find you',
  'adversary.bigtech': 'Big Tech profiling & ad networks',
  'adversary.brokers': 'data brokers selling your profile',
  'adversary.breaches': 'breaches & account takeover',
  'adversary.recruiters': 'casual searchers — dates, recruiters',
  'adversary.spam': 'spammers & junk-mail lists',

  // Onboarding
  'onboarding.subtitle': 'Disappear from the internet, one tier at a time.',
  'onboarding.bullet1': 'Runs 100% on your device. No account, no servers, no tracking.',
  'onboarding.bullet2': 'A guided ladder of real removal actions, from tidy-up to fully ghost.',
  'onboarding.bullet3': 'Generates GDPR/CCPA deletion letters you send yourself.',
  'onboarding.privacyNote': 'Three quick questions tailor your plan. Your answers never leave this device.',
  'onboarding.start': 'Start →',
  'onboarding.restore': 'Coming back? Restore a backup',
  'onboarding.restorePass': 'Backup passphrase',
  'onboarding.restoreCta': 'Choose .vanish file',
  'onboarding.restoreErr': 'Wrong passphrase or not a Vanish backup.',
  'onboarding.step1.title': 'Where are you?',
  'onboarding.step1.hint': 'Tailors which brokers and legal rights apply — and names your data-protection authority in letters.',
  'onboarding.selectCountry': 'Select your country…',
  'onboarding.authority': 'Your supervisory authority:',
  'onboarding.step2.title': 'What worries you most?',
  'onboarding.step2.hint': 'Pick any. We’ll surface the matching actions first.',
  'onboarding.concern.recruiters': 'People Googling me (dates, recruiters)',
  'onboarding.concern.brokers': 'Data brokers selling my info',
  'onboarding.concern.bigtech': 'Big Tech profiling & ads',
  'onboarding.concern.breaches': 'Breaches & account takeover',
  'onboarding.concern.stalking': 'A specific person finding me',
  'onboarding.concern.spam': 'Spam calls, texts & junk mail',
  'onboarding.step3.title': 'How far do you want to go?',
  'onboarding.step3.hint': 'A target, not a cage — you can climb higher anytime.',
  'onboarding.adversaryLead': 'Based on your concerns, your main adversary is {adversary}.',
  'onboarding.rationale':
    "Your strongest concern — {adversary} — calls for {tier}. Match your effort to who you're actually hiding from; going further than your threat model costs convenience for no real gain.",
  'onboarding.useRecommended': 'Use recommended: T{tier} · {name}',
  'onboarding.build': 'Build my plan →',

  // Dashboard
  'dashboard.title': 'Your privacy score',
  'dashboard.actionsDone': '{done} of {total} actions done · target',
  'dashboard.encouragement.danger':
    'You’re wide open right now — but the first few actions are the highest-impact and take minutes. Start at the top.',
  'dashboard.encouragement.warn':
    'Good start. You’ve closed the easy gaps; the next tier is where real distance from brokers and Big Tech begins.',
  'dashboard.encouragement.ok':
    'You’re genuinely hard to track now. Maintain the re-checks and review your threat model each quarter.',
  'dashboard.openLadder': 'Open the ladder →',
  'dashboard.printPlan': '🖨 Print my plan',
  'dashboard.rechecksDue.one': '↻ {count} re-check due',
  'dashboard.rechecksDue.other': '↻ {count} re-checks due',
  'dashboard.streak': '🔥 {count}-day streak',
  'dashboard.doneThisWeek': '{count} done this week',
  'dashboard.rechecksHeading': '↻ Re-checks due',
  'dashboard.rechecksBody': 'Data brokers re-list you after a few months. These opt-outs are due to be redone:',
  'dashboard.overdue': 'overdue',
  'dashboard.recommendedNext': 'Recommended next',
  'dashboard.seeAll': 'See all',
  'dashboard.allDone': '🎉 Every relevant action is done or skipped. You’re ghosting — keep the re-checks up.',

  // Plan / The Ladder
  'plan.title': 'The Ladder',
  'plan.subtitle': 'Climb at your own pace. Cherry-pick high-impact actions from any tier — privacy is personal.',
  'plan.results.one': '{count} result for “{query}”',
  'plan.results.other': '{count} results for “{query}”',
  'plan.allTiers': 'All tiers',
  'plan.allCategories': 'All categories',
  'plan.hideCompleted': 'Hide completed',
  'plan.searchPlaceholder': 'Search all actions… (e.g. “Spokeo”, “2FA”, “email”)',
  'plan.filterByCategory': 'Filter by category',
  'plan.searchAria': 'Search actions',

  // Brokers
  'brokers.title': 'Data-Broker Hit List',
  'brokers.subtitle':
    'Brokers are who put your home address and phone in a stranger’s search results. Work the no-ID quick wins first, then the aggregators that feed everyone else.',
  'brokers.cleared': '{done}/{total} cleared.',
  'brokers.dueToRedo.one': '↻ {count} due to redo.',
  'brokers.dueToRedo.other': '↻ {count} due to redo.',
  'brokers.relistBody':
    'Brokers silently re-list you after 3–6 months — that’s why services charge monthly. Vanish just reminds you to redo the free opt-out.',
  'brokers.honestLabel': '⚠️ The honest truth:',
  'brokers.honestBody':
    'opt-outs reduce your exposure, they don’t guarantee permanent invisibility. Links change and data reappears. Treat this as a recurring habit, not a one-time fix — and never pay a “removal guarantee.”',

  // Letters (chrome only — generated letter body/subject stay English)
  'letters.title': 'Letter Forge',
  'letters.subtitle':
    'Generate a legally-framed deletion or access request. It’s built entirely on your device from the details below — nothing is sent for you. You copy or email it yourself.',
  'letters.authorityLabel': 'Your supervisory authority ({flag} {name}):',
  'letters.authorityNote': 'Named in the letter — escalate here if you’re ignored.',
  'letters.noAuthority': 'Set your country in Settings to name your supervisory authority in this letter.',
  'letters.recipientOrg': 'Recipient organisation',
  'letters.orgPlaceholder': 'e.g. Spokeo, Inc.',
  'letters.recipientEmail': 'Recipient email (optional)',
  'letters.yourDetails': 'Your details — stored only on this device, used to fill the letter',
  'letters.fullName': 'Full name',
  'letters.namePlaceholder': 'Your full name',
  'letters.email': 'Email',
  'letters.postalAddress': 'Postal address',
  'letters.addressPlaceholder': 'For postal-only brokers',
  'letters.subject': 'Subject:',
  'letters.copy': '⧉ Copy text',
  'letters.copied': '✓ Copied',
  'letters.download': '↓ Download .txt',
  'letters.openEmail': '✉️ Open in email',
  'letters.disclaimerPre': '⚖️ Template for convenience, ',
  'letters.disclaimerStrong': 'not legal advice',
  'letters.disclaimerPost': '. Verify the right recipient and your local rights before sending.',
  'letters.trackThis': '+ Track this as sent',
  'letters.trackedConfirm': '✓ Tracked',
  'letters.tracked.title': 'My letters',
  'letters.tracked.empty': 'Letters you track appear here with a deadline countdown.',
  'letters.tracked.sentOn': 'Sent {date}',
  'letters.tracked.daysLeft': '{days} days until the response deadline',
  'letters.tracked.overdue': 'Overdue by {days} days',
  'letters.tracked.responded': 'Mark responded',
  'letters.tracked.resolved': 'Mark resolved',
  'letters.tracked.markEscalated': 'Mark as escalated',
  'letters.tracked.delete': 'Remove',
  'letters.tracked.addToCalendar': '📅 Add deadlines to calendar',
  'letters.tracked.overdueComplaint': 'Overdue — a complaint to your supervisory authority is drafted below, ready to send.',
  'letters.tracked.copyEscalation': '⧉ Copy complaint',
  'letters.tracked.downloadComplaint': '↓ Download complaint',
  'letters.tracked.lodgeAt': 'Lodge at {authority} ↗',
  'letters.tracked.copied': '✓ Copied',
  'letters.status.sent': 'Awaiting response',
  'letters.status.responded': 'Responded',
  'letters.status.resolved': 'Resolved',
  'letters.status.escalated': 'Escalated',
  'letters.status.drafted': 'Draft',

  // Panic
  'panic.title': '🆘 Panic Mode',
  'panic.intro':
    'If someone is actively trying to find, harass, or dox you, do these in order. They’re the highest-leverage steps to break the trail between your name and your location, fastest first.',
  'panic.danger': 'If you are in immediate danger, contact your local emergency services first.',
  'panic.resources':
    'Survivor resources: in the US, the National DV Hotline runs an Address Confidentiality referral; many countries have equivalents. A local victim-services org can help you file public-record suppressions.',
  'panic.doNow': 'Do these now',
  'panic.doneCount': '{done}/{total} done',

  // Report / Disappearance Plan
  'report.title': 'Your Disappearance Plan',
  'report.subtitle': 'A printable checklist of what’s left. Save it as PDF or print it.',
  'report.print': '🖨 Print / Save as PDF',
  'report.costNote':
    'Vanish raises the cost of finding you. Against a funded, determined adversary nothing is absolute — and the thing that gets people caught is rarely the tech, it’s consistency and ego (a reused handle, one slip). Match your effort to who you’re actually hiding from.',
  'report.docTitle': 'Vanish — Disappearance Plan',
  'report.meta': 'Generated {date} · target {tier} · region {region}',
  'report.privacyScore': 'privacy score',
  'report.tierHeading': 'Tier {tier} · {name} — {count} to do',
  'report.allDone': 'Nothing left — every relevant action is done or skipped. Keep up the re-checks.',
  'report.footer':
    'Made with Vanish — a fully-offline privacy coach. Opt-out links change; verify before acting. Not legal advice.',

  // Settings
  'settings.title': 'Settings',
  'settings.language': 'Language',
  'settings.languageHint': 'Changes every screen. Stored on this device only.',
  'settings.yourPlan': 'Your plan',
  'settings.country': 'Country',
  'settings.notSet': 'Not set',
  'settings.supervisoryAuthority': 'Supervisory authority:',
  'settings.region': 'Region: {region}',
  'settings.targetTier': 'Target tier',
  'settings.codeWordTitle': '🔑 Family code word',
  'settings.codeWordBody':
    'A shared word that defeats AI voice-clone “it’s me, send money” scams. Agree it with close family and stored only on this device — never sent anywhere.',
  'settings.codeWordPlaceholder': 'e.g. blue penguin',
  'settings.printCard': '🖨 Print a wallet card',
  'settings.codeWordRule':
    'Rule: any urgent money or secret request must include this word, or treat it as fake. Never send the word itself by text or email.',
  'settings.cardDocTitle': 'Vanish code word',
  'settings.cardLabel': 'Family code word',
  'settings.cardNote':
    'Any urgent money or secret request must include this word, or treat it as fake. Don’t text or email the word itself.',
  'settings.backupTitle': 'Backup & transfer',
  'settings.backupBody':
    'No account means no cloud sync — by design. Export an encrypted-at-rest-by-you JSON file to move your plan to another device. The file contains your progress and the details you entered for letters.',
  'settings.export': '↓ Export plan',
  'settings.import': '↑ Import plan',
  'settings.importOk': '✓ Plan imported.',
  'settings.importErr': '✗ Could not read that file.',
  'settings.encBackupTitle': 'Encrypted backup',
  'settings.encBackupBody':
    'Clearing your browser data erases everything here — by design. The only copy that survives is a file you keep. This backup is encrypted with a passphrase, so the file itself is not a privacy leak. Store the passphrase somewhere safe; we cannot recover it.',
  'settings.passphrase': 'Backup passphrase',
  'settings.passphrasePlaceholder': 'A passphrase only you know',
  'settings.exportEncrypted': '↓ Save encrypted backup (.vanish)',
  'settings.importEncrypted': '↥ Restore encrypted backup',
  'settings.passphraseRequired': 'Enter a passphrase first.',
  'settings.backupSaved': '✓ Backup saved',
  'settings.backupErr': 'Backup failed.',
  'settings.wipeTitle': 'Wipe everything',
  'settings.wipeBody':
    'Erase all progress and personal details from this device. This cannot be undone. (There’s nothing on a server to delete — there never was.)',
  'settings.wipeBtn': 'Wipe all local data',
  'settings.wipeConfirm': 'Sure? This deletes everything.',
  'settings.wipeYes': 'Yes, wipe it',
  'settings.dataTitle': 'How Vanish handles your data',
  'settings.dataBullet1': 'Everything lives in this browser’s local storage. Nothing is uploaded, ever.',
  'settings.dataBullet2':
    'The page’s Content-Security-Policy blocks all third-party network requests — verifiable in your browser’s dev tools.',
  'settings.dataBullet3': 'No analytics, no cookies, no account, no telemetry — verify it in your browser’s dev tools.',
  'settings.dataBullet4':
    'Links to opt-out pages open in a new tab — those are the only “network” calls, and you initiate every one.',

  // Decoy Kit
  'decoy.title': '⬡ Decoy Kit',
  'decoy.subtitle':
    'Poison, don’t delete. Brokers and platforms re-list and rebuild, so adding bland noise to your own low-stakes accounts beats chasing deletions. This kit runs entirely on your device.',
  'decoy.responsibly': 'Use it responsibly',
  'decoy.do': 'Do',
  'decoy.never': 'Never',
  'decoy.rulesDo': [
    'Only ever touch accounts that are YOURS.',
    'Use it on low-stakes throwaway profiles, never anything tied to money or ID.',
    'Aim for bland and generic — noise, not a convincing fake person.',
  ],
  'decoy.rulesDont': [
    'Never impersonate a real, named person.',
    'Never write fake reviews or ratings.',
    'Never sign up anyone else, or use anyone else’s details.',
    'Never use this to evade a creditor, a court, or law enforcement.',
  ],
  'decoy.nameVariants': 'Name variants',
  'decoy.noVariants': 'No variants for a single-word name — add a surname in Settings to seed more.',
  'decoy.addNamePre': 'Add your name in ',
  'decoy.addNameLink': 'Settings',
  'decoy.addNamePost': ' to generate alternate spellings to spread across throwaway profiles.',
  'decoy.fillerBio': 'Filler bio',
  'decoy.regenerate': '↻ Regenerate',
  'decoy.copyBio': '⧉ Copy bio',
  'decoy.copied': '✓ Copied',
  'decoy.footer':
    'Generic by design — the goal is statistical noise, not a convincing fake person. Paste into profiles that are yours and low-stakes.',
  'decoy.interests': [
    'houseplants', 'cycling', 'baking sourdough', 'birdwatching', 'board games',
    'hiking', 'film photography', 'jazz', 'pottery', 'crosswords',
    'gardening', 'running', 'cooking', 'astronomy', 'cold-water swimming',
    'chess', 'knitting', 'road trips', 'coffee', 'live music',
  ],
  'decoy.bioTemplate': 'Just here for {list}. Keep it friendly. Opinions my own.',
  'decoy.bioAnd': 'and',

  // Action card
  'actionCard.markDone': 'Mark "{title}" done',
  'actionCard.markNotDone': 'Mark "{title}" not done',
  'actionCard.open': 'Open',
  'actionCard.recheckEvery': '↻ re-check every {days}d',
  'actionCard.recheckTitle': 'Brokers re-list you; redo this periodically',
  'actionCard.verified': 'Verified {date}',
  'actionCard.verifiedTitle': 'When this action and its link were last checked. Report a dead link if it has moved.',
  'actionCard.searchCurrent': '🔎 Search for current page',
  'actionCard.linkDead': 'link dead?',
  'actionCard.linkDeadTitle': 'Opt-out URLs change often',
  'actionCard.generateLetter': '✍️ Generate letter',
  'actionCard.openTool': 'Open tool',
  'actionCard.howTo': 'How-to',
  'actionCard.hideSteps': 'Hide steps',
  'actionCard.notRelevant': 'Not relevant',
  'actionCard.restore': 'Restore',
  'nudge.backup': 'Your progress lives only in this browser. Back it up so clearing your data does not erase it.',
  'nudge.backupCta': 'Back up now',
  'nudge.dismiss': 'Later',
} satisfies Dict

export type MessageKey = keyof typeof en
