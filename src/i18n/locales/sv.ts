import type { Dict } from './en'

// sv UI dictionary. Keys mirror en.ts; any missing key falls back to English.
export const sv: Dict = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': 'försvinn, ett steg i taget',
  'offline.badge': '⬡ 100% offline',
  'offline.title': 'Inga nätverksanrop lämnar din enhet',
  'nav.dashboard': 'Översikt',
  'nav.plan': 'Stegen',
  'nav.brokers': 'Datamäklare',
  'nav.letters': 'Brev',
  'nav.panic': 'Panik',
  'nav.settings': 'Inställningar',

  // Common
  'common.back': '← Tillbaka',
  'common.next': 'Nästa →',
  'common.cancel': 'Avbryt',

  // Country group labels (select optgroups)
  'countryGroup.eu': 'Europeiska unionen',
  'countryGroup.uk': 'Storbritannien',
  'countryGroup.us': 'USA',
  'countryGroup.other': 'Övriga länder',

  // Tiers
  'tier.tidy.name': 'Städa upp',
  'tier.tidy.tagline': 'Låg ansträngning, stor lättnad',
  'tier.tidy.who': 'Alla. De 20 minuter som alla borde lägga.',
  'tier.reduce.name': 'Minska',
  'tier.reduce.tagline': 'Krympa ditt digitala fotavtryck',
  'tier.reduce.who': "Du är intresserad av integritet och vill verkligen hålla distans till Big Tech och datamäklare.",
  'tier.lockdown.name': 'Lås ner',
  'tier.lockdown.tagline': 'Härda allt',
  'tier.lockdown.who': 'Du vill vara genuint svår att spåra, profilera eller doxas.',
  'tier.ghost.name': 'Spöke',
  'tier.ghost.tagline': 'Försvinn',
  'tier.ghost.who': 'Aktivister, överlevare, utsatta. Maximal separation från ditt namn.',

  // Categories
  'category.accounts': 'Konton',
  'category.data-brokers': 'Datamäklare',
  'category.devices': 'Enheter',
  'category.browser': 'Webbläsare',
  'category.social': 'Sociala medier',
  'category.search': 'Sökning',
  'category.messaging': 'Meddelanden',
  'category.email': 'E-post',
  'category.finance': 'Ekonomi',
  'category.network': 'Nätverk',
  'category.legal': 'Juridiska verktyg',

  // Score labels + ring
  'score.wideOpen': 'Helt exponerad',
  'score.exposed': 'Exponerad',
  'score.guarded': 'Skyddad',
  'score.ghosting': 'Spökar',
  'score.ariaLabel': 'Integritetspoäng {score} av 100',

  // Effort / impact pills
  'pills.effort.low': 'Enkelt',
  'pills.effort.med': 'Måttligt',
  'pills.effort.high': 'Krävande',
  'pills.effortTitle': 'Hur mycket ansträngning det krävs',
  'pills.impact.low': 'Låg effekt',
  'pills.impact.med': 'Solid effekt',
  'pills.impact.high': 'Hög effekt',

  // Adversaries (onboarding concern → adversary phrase)
  'adversary.stalking': 'en specifik person som försöker hitta dig',
  'adversary.bigtech': 'Big Tech-profilering och annonsnätverk',
  'adversary.brokers': 'datamäklare som säljer din profil',
  'adversary.breaches': 'dataintrång och kontokapningar',
  'adversary.recruiters': 'slumpmässiga sökare — dejter, rekryterare',
  'adversary.spam': 'spammare och skräppostlistor',

  // Onboarding
  'onboarding.subtitle': 'Försvinn från internet, ett steg i taget.',
  'onboarding.bullet1': 'Körs 100% på din enhet. Inget konto, inga servrar, ingen spårning.',
  'onboarding.bullet2': 'En guidad trappa med verkliga borttagningsåtgärder, från städning till att bli ett spöke.',
  'onboarding.bullet3': 'Genererar GDPR/CCPA-borttagningsbrev som du skickar själv.',
  'onboarding.privacyNote': 'Tre snabba frågor anpassar din plan. Dina svar lämnar aldrig den här enheten.',
  'onboarding.start': 'Starta →',
  'onboarding.step1.title': 'Var bor du?',
  'onboarding.step1.hint': 'Avgör vilka datamäklare och juridiska rättigheter som gäller — och namnger din dataskyddsmyndighet i brev.',
  'onboarding.selectCountry': 'Välj ditt land…',
  'onboarding.authority': 'Din tillsynsmyndighet:',
  'onboarding.step2.title': 'Vad oroar dig mest?',
  'onboarding.step2.hint': 'Välj fritt. Vi lyfter fram matchande åtgärder först.',
  'onboarding.concern.recruiters': 'Folk som googlar mig (dejter, rekryterare)',
  'onboarding.concern.brokers': 'Datamäklare som säljer min information',
  'onboarding.concern.bigtech': 'Big Tech-profilering och annonser',
  'onboarding.concern.breaches': 'Dataintrång och kontokapningar',
  'onboarding.concern.stalking': 'En specifik person som försöker hitta mig',
  'onboarding.concern.spam': 'Skräpsamtal, SMS och skräppost',
  'onboarding.step3.title': 'Hur långt vill du gå?',
  'onboarding.step3.hint': 'Ett mål, inte ett fängelse — du kan alltid klättra högre.',
  'onboarding.adversaryLead': 'Baserat på dina orosmoment är din huvudsakliga motpart {adversary}.',
  'onboarding.rationale':
    "Din starkaste oro — {adversary} — talar för {tier}. Anpassa insatsen efter vem du faktiskt gömmer dig för; att gå längre än din hotmodell kostar bekvämlighet utan verklig vinst.",
  'onboarding.useRecommended': 'Använd rekommenderat: T{tier} · {name}',
  'onboarding.build': 'Bygg min plan →',

  // Dashboard
  'dashboard.title': 'Din integritetspoäng',
  'dashboard.actionsDone': '{done} av {total} åtgärder klara · mål',
  'dashboard.encouragement.danger':
    "Du är helt exponerad just nu — men de första åtgärderna har störst effekt och tar bara minuter. Börja uppifrån.",
  'dashboard.encouragement.warn':
    'Bra start. Du har stängt de enkla luckorna; nästa nivå är där du verkligen skapar distans från datamäklare och Big Tech.',
  'dashboard.encouragement.ok':
    'Du är genuint svår att spåra nu. Håll koll på omgranskningarna och se över din hotmodell varje kvartal.',
  'dashboard.openLadder': 'Öppna stegen →',
  'dashboard.printPlan': '🖨 Skriv ut min plan',
  'dashboard.rechecksDue.one': '↻ {count} omgranskning förfallen',
  'dashboard.rechecksDue.other': '↻ {count} omgranskningar förfallna',
  'dashboard.streak': '🔥 {count}-dagarssvit',
  'dashboard.doneThisWeek': '{count} klara den här veckan',
  'dashboard.rechecksHeading': '↻ Förfallna omgranskningar',
  'dashboard.rechecksBody': 'Datamäklare återlistas efter några månader. De här avanmälningarna ska göras om:',
  'dashboard.overdue': 'förfallen',
  'dashboard.recommendedNext': 'Rekommenderas härnäst',
  'dashboard.seeAll': 'Visa alla',
  'dashboard.allDone': '🎉 Alla relevanta åtgärder är klara eller överhoppade. Du spökar — håll omgranskningarna igång.',

  // Plan / The Ladder
  'plan.title': 'Stegen',
  'plan.subtitle': 'Klättra i din egen takt. Plocka ut åtgärder med hög effekt från vilken nivå som helst — integritet är personligt.',
  'plan.results.one': '{count} resultat för "{query}"',
  'plan.results.other': '{count} resultat för "{query}"',
  'plan.allTiers': 'Alla nivåer',
  'plan.allCategories': 'Alla kategorier',
  'plan.hideCompleted': 'Dölj slutförda',
  'plan.searchPlaceholder': 'Sök bland alla åtgärder… (t.ex. "Spokeo", "2FA", "e-post")',
  'plan.filterByCategory': 'Filtrera per kategori',
  'plan.searchAria': 'Sök åtgärder',

  // Brokers
  'brokers.title': 'Datamäklarlistan',
  'brokers.subtitle':
    'Det är datamäklarna som lägger ut din hemadress och ditt telefonnummer i en okänd persons sökresultat. Börja med de snabba vinsterna utan ID-krav, sedan aggregatorerna som matar alla andra.',
  'brokers.cleared': '{done}/{total} borttagna.',
  'brokers.dueToRedo.one': '↻ {count} ska göras om.',
  'brokers.dueToRedo.other': '↻ {count} ska göras om.',
  'brokers.relistBody':
    'Datamäklare återlistar dig tyst efter 3–6 månader — det är därför tjänster tar betalt månadsvis. Vanish påminner dig bara att göra om den kostnadsfria avanmälningen.',
  'brokers.honestLabel': '⚠️ Det ärliga svaret:',
  'brokers.honestBody':
    'avanmälningar minskar din exponering, men garanterar inte permanent osynlighet. Länkar förändras och data dyker upp igen. Se det som en återkommande rutin, inte en engångslösning — och betala aldrig för en "borttagningsgaranti."',

  // Letters (chrome only — generated letter body/subject stay English)
  'letters.title': 'Brevverkstad',
  'letters.subtitle':
    'Generera en juridiskt formulerad begäran om radering eller tillgång. Det skapas helt på din enhet utifrån uppgifterna nedan — inget skickas för dig. Du kopierar eller mejlar det själv.',
  'letters.authorityLabel': 'Din tillsynsmyndighet ({flag} {name}):',
  'letters.authorityNote': 'Nämns i brevet — eskalera hit om du ignoreras.',
  'letters.noAuthority': 'Ange ditt land i Inställningar för att namnge din tillsynsmyndighet i brevet.',
  'letters.recipientOrg': 'Mottagarorganisation',
  'letters.orgPlaceholder': 't.ex. Spokeo, Inc.',
  'letters.recipientEmail': 'Mottagarens e-post (valfritt)',
  'letters.yourDetails': 'Dina uppgifter — sparas bara på den här enheten, används för att fylla i brevet',
  'letters.fullName': 'Fullständigt namn',
  'letters.namePlaceholder': 'Ditt fullständiga namn',
  'letters.email': 'E-post',
  'letters.postalAddress': 'Postadress',
  'letters.addressPlaceholder': 'För datamäklare som bara tar emot brev',
  'letters.subject': 'Ämne:',
  'letters.copy': '⧉ Kopiera text',
  'letters.copied': '✓ Kopierat',
  'letters.download': '↓ Ladda ner .txt',
  'letters.openEmail': '✉️ Öppna i e-post',
  'letters.disclaimerPre': '⚖️ Mall för praktisk användning, ',
  'letters.disclaimerStrong': 'inte juridisk rådgivning',
  'letters.disclaimerPost': '. Kontrollera rätt mottagare och dina lokala rättigheter innan du skickar.',

  // Panic
  'panic.title': '🆘 Panikläge',
  'panic.intro':
    'Om någon aktivt försöker hitta, trakassera eller doxar dig, gör det här i ordning. Det är de åtgärder med störst effekt för att bryta spåret mellan ditt namn och din plats — snabbast först.',
  'panic.danger': 'Om du är i omedelbar fara, kontakta räddningstjänsten i ditt land först.',
  'panic.resources':
    'Stödresurser för utsatta: i USA har National DV Hotline en adresskonfidentialitetsreferral; många länder har motsvarigheter. En lokal brottsofferorganisation kan hjälpa dig att söka skydd i offentliga register.',
  'panic.doNow': 'Gör det här nu',
  'panic.doneCount': '{done}/{total} klara',

  // Report / Disappearance Plan
  'report.title': 'Din försvinnandplan',
  'report.subtitle': 'En utskrivbar checklista över vad som återstår. Spara som PDF eller skriv ut.',
  'report.print': '🖨 Skriv ut / Spara som PDF',
  'report.costNote':
    'Vanish höjer kostnaden för att hitta dig. Mot en välfinansierad och målmedveten motpart är inget absolut — och det som brukar avslöja folk är sällan tekniken, utan konsekvensen och egot (ett återanvänt användarnamn, ett enda misstag). Anpassa insatsen efter vem du faktiskt gömmer dig för.',
  'report.docTitle': 'Vanish — Försvinnandplan',
  'report.meta': 'Genererad {date} · mål {tier} · region {region}',
  'report.privacyScore': 'integritetspoäng',
  'report.tierHeading': 'Nivå {tier} · {name} — {count} att göra',
  'report.allDone': 'Inget kvar — alla relevanta åtgärder är klara eller överhoppade. Håll omgranskningarna igång.',
  'report.footer':
    'Gjort med Vanish — en helt offline integritetscoach. Avanmälningslänkar förändras; kontrollera innan du agerar. Inte juridisk rådgivning.',

  // Settings
  'settings.title': 'Inställningar',
  'settings.language': 'Språk',
  'settings.languageHint': 'Ändrar alla skärmar. Sparas bara på den här enheten.',
  'settings.yourPlan': 'Din plan',
  'settings.country': 'Land',
  'settings.notSet': 'Inte angivet',
  'settings.supervisoryAuthority': 'Tillsynsmyndighet:',
  'settings.region': 'Region: {region}',
  'settings.targetTier': 'Målnivå',
  'settings.codeWordTitle': '🔑 Familjelösenord',
  'settings.codeWordBody':
    'Ett gemensamt ord som avslöjar AI-röstklonsbluffar av typen "det är jag, skicka pengar". Kom överens med nära familj och spara det bara på den här enheten — skickas aldrig någonstans.',
  'settings.codeWordPlaceholder': 't.ex. blå pingvin',
  'settings.printCard': '🖨 Skriv ut ett plånbokskort',
  'settings.codeWordRule':
    'Regel: alla brådskande penning- eller hemlighetsbegäranden måste innehålla detta ord, annars behandlas det som falskt. Skicka aldrig ordet självt via SMS eller e-post.',
  'settings.cardDocTitle': 'Vanish-lösenord',
  'settings.cardLabel': 'Familjelösenord',
  'settings.cardNote':
    'Alla brådskande penning- eller hemlighetsbegäranden måste innehålla detta ord, annars behandlas det som falskt. Skicka inte ordet via SMS eller e-post.',
  'settings.backupTitle': 'Säkerhetskopiering och överföring',
  'settings.backupBody':
    'Inget konto betyder ingen molnsynkronisering — av design. Exportera en JSON-fil som du krypterar själv för att flytta din plan till en annan enhet. Filen innehåller ditt framsteg och uppgifterna du angett för brev.',
  'settings.export': '↓ Exportera plan',
  'settings.import': '↑ Importera plan',
  'settings.importOk': '✓ Plan importerad.',
  'settings.importErr': '✗ Det gick inte att läsa den filen.',
  'settings.wipeTitle': 'Radera allt',
  'settings.wipeBody':
    'Raderar alla framsteg och personuppgifter från den här enheten. Det går inte att ångra. (Det finns inget på en server att radera — det har aldrig funnits.)',
  'settings.wipeBtn': 'Radera all lokal data',
  'settings.wipeConfirm': 'Säker? Det här raderar allt.',
  'settings.wipeYes': 'Ja, radera',
  'settings.dataTitle': 'Hur Vanish hanterar dina uppgifter',
  'settings.dataBullet1': 'Allt lagras i den här webbläsarens lokala lagring. Inget laddas upp, någonsin.',
  'settings.dataBullet2':
    "Sidans Content-Security-Policy blockerar alla tredjepartsnätverksanrop — verifierbart i webbläsarens utvecklarverktyg.",
  'settings.dataBullet3': 'Ingen analys, inga cookies, inget konto, ingen telemetri — verifiera i webbläsarens utvecklarverktyg.',
  'settings.dataBullet4':
    'Länkar till avanmälningssidor öppnas i en ny flik — det är de enda "nätverksanropen", och du initierar varje ett.',

  // Decoy Kit
  'decoy.title': '⬡ Lockkod-kit',
  'decoy.subtitle':
    'Förgifta, radera inte. Datamäklare och plattformar återlistar och återbygger, så att lägga till harmlöst brus på dina egna lågriskkonton slår jakten på raderingar. Det här kittet körs helt på din enhet.',
  'decoy.responsibly': 'Använd det ansvarsfullt',
  'decoy.do': 'Gör',
  'decoy.never': 'Aldrig',
  'decoy.rulesDo': [
    'Använd det bara på konton som är DINA.',
    'Använd det på lågriskkonton för engångsbruk, aldrig på något kopplat till pengar eller ID.',
    'Sikta på trist och generiskt — brus, inte en övertygande falsk person.',
  ],
  'decoy.rulesDont': [
    'Utge dig aldrig för att vara en verklig, namngiven person.',
    'Skriv aldrig falska recensioner eller betyg.',
    'Registrera aldrig någon annan, eller använd någon annans uppgifter.',
    'Använd det aldrig för att undvika en borgenär, en domstol eller myndigheter.',
  ],
  'decoy.nameVariants': 'Namnvarianter',
  'decoy.noVariants': 'Inga varianter för ett enordsnamn — lägg till ett efternamn i Inställningar för att generera fler.',
  'decoy.addNamePre': 'Lägg till ditt namn i ',
  'decoy.addNameLink': 'Inställningar',
  'decoy.addNamePost': ' för att generera alternativa stavningar att sprida på engångsprofiler.',
  'decoy.fillerBio': 'Fyllnadsbio',
  'decoy.regenerate': '↻ Generera om',
  'decoy.copyBio': '⧉ Kopiera bio',
  'decoy.copied': '✓ Kopierat',
  'decoy.footer':
    'Generisk av design — målet är statistiskt brus, inte en övertygande falsk person. Klistra in i profiler som är dina och lågrisker.',
  'decoy.interests': [
    'krukväxter', 'cykling', 'surdegsbak', 'fågelskådning', 'sällskapsspel',
    'vandring', 'filmfotografi', 'jazz', 'keramik', 'korsord',
    'trädgårdsarbete', 'löpning', 'matlagning', 'astronomi', 'vinterbadning',
    'schack', 'stickning', 'roadtrips', 'kaffe', 'livespelningar',
  ],
  'decoy.bioTemplate': 'Finns här för {list}. Håller det trevligt. Mina egna åsikter.',
  'decoy.bioAnd': 'och',

  // Action card
  'actionCard.markDone': 'Markera "{title}" som klar',
  'actionCard.markNotDone': 'Markera "{title}" som inte klar',
  'actionCard.open': 'Öppna',
  'actionCard.recheckEvery': '↻ kontrollera om var {days}:e dag',
  'actionCard.recheckTitle': 'Datamäklare återlistar dig; gör om detta regelbundet',
  'actionCard.searchCurrent': '🔎 Sök efter aktuell sida',
  'actionCard.linkDead': 'länk trasig?',
  'actionCard.linkDeadTitle': 'Avanmälningslänkar förändras ofta',
  'actionCard.generateLetter': '✍️ Generera brev',
  'actionCard.openTool': 'Öppna verktyg',
  'actionCard.howTo': 'Hur gör man',
  'actionCard.hideSteps': 'Dölj steg',
  'actionCard.notRelevant': 'Inte relevant',
  'actionCard.restore': 'Återställ',
} satisfies Dict
