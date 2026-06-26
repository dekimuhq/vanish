import type { Dict } from './en'

export const nl: Dict = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': 'verdwijn, één laag tegelijk',
  'offline.badge': '⬡ 100% offline',
  'offline.title': 'Er gaan geen netwerkverzoeken je apparaat uit',
  'nav.dashboard': 'Dashboard',
  'nav.plan': 'De Ladder',
  'nav.brokers': 'Brokers',
  'nav.letters': 'Brieven',
  'nav.panic': 'Paniek',
  'nav.settings': 'Instellingen',

  // Common
  'common.back': '← Terug',
  'common.next': 'Volgende →',
  'common.cancel': 'Annuleren',

  // Country group labels
  'countryGroup.eu': 'Europese Unie',
  'countryGroup.uk': 'Verenigd Koninkrijk',
  'countryGroup.us': 'Verenigde Staten',
  'countryGroup.other': 'Elders',

  // Tiers
  'tier.tidy.name': 'Opruimen',
  'tier.tidy.tagline': 'Weinig moeite, veel verlichting',
  'tier.tidy.who': 'Iedereen. De 20 minuten die iedereen zou moeten besteden.',
  'tier.reduce.name': 'Terugdringen',
  'tier.reduce.tagline': 'Verklein je digitale voetafdruk',
  'tier.reduce.who': "Je bent privacybewust en wil echte afstand van Big Tech en datamakelaars.",
  'tier.lockdown.name': 'Vergrendelen',
  'tier.lockdown.tagline': 'Alles verder beveiligen',
  'tier.lockdown.who': 'Je wil echt moeilijk te volgen, te profileren of te doxen zijn.',
  'tier.ghost.name': 'Ghost',
  'tier.ghost.tagline': 'Verdwijnen',
  'tier.ghost.who': 'Activisten, overlevenden, mensen die worden lastiggevallen. Maximale scheiding van je naam.',

  // Categories
  'category.accounts': 'Accounts',
  'category.data-brokers': 'Datamakelaars',
  'category.devices': 'Apparaten',
  'category.browser': 'Browser',
  'category.social': 'Sociaal',
  'category.search': 'Zoekmachines',
  'category.messaging': 'Berichten',
  'category.email': 'E-mail',
  'category.finance': 'Financiën',
  'category.network': 'Netwerk',
  'category.legal': 'Juridische hefbomen',

  // Score labels + ring
  'score.wideOpen': 'Wijd open',
  'score.exposed': 'Blootgesteld',
  'score.guarded': 'Beschermd',
  'score.ghosting': 'Ghosting',
  'score.ariaLabel': 'Privacyscore {score} van 100',

  // Effort / impact pills
  'pills.effort.low': 'Makkelijk',
  'pills.effort.med': 'Matig',
  'pills.effort.high': 'Intensief',
  'pills.effortTitle': 'Hoeveel moeite dit kost',
  'pills.impact.low': 'Weinig impact',
  'pills.impact.med': 'Solide impact',
  'pills.impact.high': 'Grote impact',

  // Adversaries
  'adversary.stalking': 'een specifiek persoon die je probeert te vinden',
  'adversary.bigtech': 'profilering door Big Tech en advertentienetwerken',
  'adversary.brokers': 'datamakelaars die jouw profiel verkopen',
  'adversary.breaches': 'datalekken en accountovername',
  'adversary.recruiters': 'willekeurige zoekers — dates, recruiters',
  'adversary.spam': 'spammers en junkmail-lijsten',

  // Onboarding
  'onboarding.subtitle': 'Verdwijn van het internet, één laag tegelijk.',
  'onboarding.bullet1': 'Draait 100% op je apparaat. Geen account, geen servers, geen tracking.',
  'onboarding.bullet2': 'Een begeleide ladder van echte verwijderacties, van opruimen tot volledig ghost.',
  'onboarding.bullet3': 'Genereert AVG/CCPA-verwijderbrieven die je zelf verstuurt.',
  'onboarding.privacyNote': 'Drie korte vragen stellen je plan op maat. Je antwoorden verlaten dit apparaat nooit.',
  'onboarding.start': 'Start →',
  'onboarding.step1.title': 'Waar ben je?',
  'onboarding.step1.hint': 'Bepaalt welke makelaars en wettelijke rechten van toepassing zijn — en noemt je gegevensbeschermingsautoriteit in brieven.',
  'onboarding.selectCountry': 'Selecteer je land…',
  'onboarding.authority': 'Jouw toezichthoudende autoriteit:',
  'onboarding.step2.title': 'Waar maak je je het meest zorgen om?',
  'onboarding.step2.hint': 'Kies er meerdere. We tonen de bijbehorende acties als eerste.',
  'onboarding.concern.recruiters': 'Mensen die me googelen (dates, recruiters)',
  'onboarding.concern.brokers': 'Datamakelaars die mijn gegevens verkopen',
  'onboarding.concern.bigtech': 'Profilering en advertenties door Big Tech',
  'onboarding.concern.breaches': 'Datalekken en accountovername',
  'onboarding.concern.stalking': 'Een specifiek persoon die me probeert te vinden',
  'onboarding.concern.spam': 'Spam-oproepen, -sms\'en en junkmail',
  'onboarding.step3.title': 'Hoe ver wil je gaan?',
  'onboarding.step3.hint': 'Een doel, geen kooi — je kunt altijd hoger klimmen.',
  'onboarding.adversaryLead': 'Op basis van je zorgen is je voornaamste tegenstander {adversary}.',
  'onboarding.rationale':
    "Je grootste zorg — {adversary} — vraagt om {tier}. Stem je inspanning af op wie je je eigenlijk voor verbergt; verder gaan dan je dreigingsmodel kost gemak zonder echte winst.",
  'onboarding.useRecommended': 'Gebruik aanbevolen: T{tier} · {name}',
  'onboarding.build': 'Maak mijn plan →',

  // Dashboard
  'dashboard.title': 'Je privacyscore',
  'dashboard.actionsDone': '{done} van {total} acties gedaan · doel',
  'dashboard.encouragement.danger':
    "Je staat nu volledig open — maar de eerste acties hebben de meeste impact en kosten minuten. Begin bovenaan.",
  'dashboard.encouragement.warn':
    'Goede start. Je hebt de makkelijke gaten gedicht; de volgende laag is waar je echt afstand neemt van makelaars en Big Tech.',
  'dashboard.encouragement.ok':
    'Je bent nu echt moeilijk te volgen. Houd de hercontroles bij en herzie je dreigingsmodel elk kwartaal.',
  'dashboard.openLadder': 'Open de ladder →',
  'dashboard.printPlan': '🖨 Druk mijn plan af',
  'dashboard.rechecksDue.one': '↻ {count} hercontrole te doen',
  'dashboard.rechecksDue.other': '↻ {count} hercontroles te doen',
  'dashboard.streak': '🔥 {count}-dagenreeks',
  'dashboard.doneThisWeek': '{count} gedaan deze week',
  'dashboard.rechecksHeading': '↻ Hercontroles te doen',
  'dashboard.rechecksBody': 'Datamakelaars zetten je na een paar maanden opnieuw in hun lijst. Deze opt-outs moeten opnieuw worden gedaan:',
  'dashboard.overdue': 'te laat',
  'dashboard.recommendedNext': 'Aanbevolen volgende stap',
  'dashboard.seeAll': 'Alles zien',
  'dashboard.allDone': '🎉 Elke relevante actie is gedaan of overgeslagen. Je bent aan het ghosten — houd de hercontroles bij.',

  // Plan / The Ladder
  'plan.title': 'De Ladder',
  'plan.subtitle': 'Klim in je eigen tempo. Kies acties met grote impact uit elke laag — privacy is persoonlijk.',
  'plan.results.one': '{count} resultaat voor "{query}"',
  'plan.results.other': '{count} resultaten voor "{query}"',
  'plan.allTiers': 'Alle lagen',
  'plan.allCategories': 'Alle categorieën',
  'plan.hideCompleted': 'Verberg voltooide',
  'plan.searchPlaceholder': 'Zoek alle acties… (bijv. "Spokeo", "2FA", "e-mail")',
  'plan.filterByCategory': 'Filteren op categorie',
  'plan.searchAria': 'Zoek acties',

  // Brokers
  'brokers.title': 'Datamakelaars aanpakken',
  'brokers.subtitle':
    'Makelaars zijn degenen die je thuisadres en telefoonnummer in zoekresultaten van vreemden zetten. Begin met de snelle winsten zonder ID, daarna de aggregatoren die iedereen anders voeden.',
  'brokers.cleared': '{done}/{total} verwijderd.',
  'brokers.dueToRedo.one': '↻ {count} opnieuw te doen.',
  'brokers.dueToRedo.other': '↻ {count} opnieuw te doen.',
  'brokers.relistBody':
    'Makelaars zetten je stilletjes opnieuw in hun lijst na 3–6 maanden — daarom brengen diensten maandelijks kosten in rekening. Vanish herinnert je er gewoon aan om de gratis opt-out opnieuw te doen.',
  'brokers.honestLabel': '⚠️ De eerlijke waarheid:',
  'brokers.honestBody':
    'opt-outs verminderen je blootstelling, maar garanderen geen blijvende onzichtbaarheid. Links veranderen en gegevens komen terug. Beschouw dit als een terugkerende gewoonte, niet een eenmalige oplossing — en betaal nooit voor een "verwijdergarantie".',

  // Letters
  'letters.title': 'Briefgenerator',
  'letters.subtitle':
    'Genereer een juridisch onderbouwd verwijder- of inzageverzoek. Het wordt volledig op je apparaat aangemaakt op basis van de gegevens hieronder — er wordt niets voor je verstuurd. Je kopieert of mailt het zelf.',
  'letters.authorityLabel': 'Jouw toezichthoudende autoriteit ({flag} {name}):',
  'letters.authorityNote': 'Vermeld in de brief — schakel hier in als je geen reactie krijgt.',
  'letters.noAuthority': 'Stel je land in bij Instellingen om je toezichthoudende autoriteit in deze brief te vermelden.',
  'letters.recipientOrg': 'Ontvanger (organisatie)',
  'letters.orgPlaceholder': 'bijv. Spokeo, Inc.',
  'letters.recipientEmail': 'E-mail ontvanger (optioneel)',
  'letters.yourDetails': 'Jouw gegevens — alleen op dit apparaat opgeslagen, gebruikt om de brief in te vullen',
  'letters.fullName': 'Volledige naam',
  'letters.namePlaceholder': 'Je volledige naam',
  'letters.email': 'E-mail',
  'letters.postalAddress': 'Postadres',
  'letters.addressPlaceholder': 'Voor makelaars die alleen post accepteren',
  'letters.subject': 'Onderwerp:',
  'letters.copy': '⧉ Kopieer tekst',
  'letters.copied': '✓ Gekopieerd',
  'letters.download': '↓ Download .txt',
  'letters.openEmail': '✉️ Openen in e-mail',
  'letters.disclaimerPre': '⚖️ Sjabloon voor gemak, ',
  'letters.disclaimerStrong': 'geen juridisch advies',
  'letters.disclaimerPost': '. Controleer de juiste ontvanger en je lokale rechten voordat je verstuurt.',

  // Panic
  'panic.title': '🆘 Paniekstand',
  'panic.intro':
    'Als iemand je actief probeert te vinden, lastig te vallen of te doxen, doe dit dan in volgorde. Dit zijn de stappen met de meeste impact om het spoor tussen je naam en je locatie te breken, snelste eerst.',
  'panic.danger': 'Als je in direct gevaar bent, bel dan eerst de hulpdiensten.',
  'panic.resources':
    'Hulpbronnen voor slachtoffers: in de VS heeft de National DV Hotline een doorverwijzing voor adresvertrouwelijkheid; veel landen hebben vergelijkbare diensten. Een lokale slachtofferhulporganisatie kan je helpen bij het onderdrukken van openbare registraties.',
  'panic.doNow': 'Doe dit nu',
  'panic.doneCount': '{done}/{total} gedaan',

  // Report / Disappearance Plan
  'report.title': 'Jouw verdwijningsplan',
  'report.subtitle': 'Een afdrukbare checklist van wat er nog te doen is. Sla het op als PDF of druk het af.',
  'report.print': '🖨 Afdrukken / Opslaan als PDF',
  'report.costNote':
    'Vanish verhoogt de kosten om je te vinden. Tegen een gefinancierde, vastberaden tegenstander is niets absoluut — en wat mensen pakt is zelden de techniek, maar consistentie en ego (een hergebruikte gebruikersnaam, één slip). Stem je inspanning af op wie je je eigenlijk voor verbergt.',
  'report.docTitle': 'Vanish — Verdwijningsplan',
  'report.meta': 'Aangemaakt {date} · doel {tier} · regio {region}',
  'report.privacyScore': 'privacyscore',
  'report.tierHeading': 'Laag {tier} · {name} — {count} te doen',
  'report.allDone': 'Niets meer te doen — elke relevante actie is gedaan of overgeslagen. Houd de hercontroles bij.',
  'report.footer':
    'Gemaakt met Vanish — een volledig offline privacycoach. Opt-out links veranderen; controleer voor gebruik. Geen juridisch advies.',

  // Settings
  'settings.title': 'Instellingen',
  'settings.language': 'Taal',
  'settings.languageHint': 'Wijzigt elk scherm. Alleen op dit apparaat opgeslagen.',
  'settings.yourPlan': 'Jouw plan',
  'settings.country': 'Land',
  'settings.notSet': 'Niet ingesteld',
  'settings.supervisoryAuthority': 'Toezichthoudende autoriteit:',
  'settings.region': 'Regio: {region}',
  'settings.targetTier': 'Doellaag',
  'settings.codeWordTitle': '🔑 Familie-codewoord',
  'settings.codeWordBody':
    'Een gedeeld woord dat AI-stemkloonoplichting ("ik ben het, stuur geld") verslaat. Spreek het af met naaste familie en sla het alleen op dit apparaat op — wordt nooit ergens naartoe gestuurd.',
  'settings.codeWordPlaceholder': 'bijv. blauwe pinguïn',
  'settings.printCard': '🖨 Druk een portemonneekaartje af',
  'settings.codeWordRule':
    'Regel: elk dringend verzoek om geld of een geheim moet dit woord bevatten, anders is het nep. Stuur het woord zelf nooit via sms of e-mail.',
  'settings.cardDocTitle': 'Vanish codewoord',
  'settings.cardLabel': 'Familie-codewoord',
  'settings.cardNote':
    'Elk dringend verzoek om geld of een geheim moet dit woord bevatten, anders is het nep. Stuur het woord zelf niet via sms of e-mail.',
  'settings.backupTitle': 'Back-up en overdracht',
  'settings.backupBody':
    'Geen account betekent geen cloudsynchronisatie — met opzet. Exporteer een door jezelf versleuteld JSON-bestand om je plan naar een ander apparaat over te zetten. Het bestand bevat je voortgang en de gegevens die je voor brieven hebt ingevoerd.',
  'settings.export': '↓ Exporteer plan',
  'settings.import': '↑ Importeer plan',
  'settings.importOk': '✓ Plan geïmporteerd.',
  'settings.importErr': '✗ Dat bestand kon niet worden gelezen.',
  'settings.wipeTitle': 'Alles wissen',
  'settings.wipeBody':
    'Wis alle voortgang en persoonlijke gegevens van dit apparaat. Dit kan niet ongedaan worden gemaakt. (Er staat niets op een server te wissen — dat was er nooit.)',
  'settings.wipeBtn': 'Wis alle lokale gegevens',
  'settings.wipeConfirm': 'Zeker weten? Dit verwijdert alles.',
  'settings.wipeYes': 'Ja, wissen',
  'settings.dataTitle': 'Hoe Vanish omgaat met je gegevens',
  'settings.dataBullet1': 'Alles staat in de lokale opslag van deze browser. Er wordt nooit iets geüpload.',
  'settings.dataBullet2':
    "De Content-Security-Policy van de pagina blokkeert alle externe netwerkverzoeken — te verifiëren in de ontwikkelaarstools van je browser.",
  'settings.dataBullet3': 'Geen analytics, geen cookies, geen account, geen telemetrie — controleer het in de ontwikkelaarstools van je browser.',
  'settings.dataBullet4':
    'Links naar opt-out-pagina\'s openen in een nieuw tabblad — dat zijn de enige "netwerk"-aanroepen, en jij initieert ze allemaal.',

  // Decoy Kit
  'decoy.title': '⬡ Lokaaskit',
  'decoy.subtitle':
    'Vergiftig in plaats van verwijder. Makelaars en platforms zetten je opnieuw in hun lijst en bouwen je profiel opnieuw op — dus ruis toevoegen aan je eigen lage-risico-accounts is effectiever dan achter verwijderingen aan jagen. Deze kit draait volledig op je apparaat.',
  'decoy.responsibly': 'Gebruik het verantwoordelijk',
  'decoy.do': 'Doe',
  'decoy.never': 'Nooit',
  'decoy.rulesDo': [
    'Raak alleen accounts aan die VAN JOU zijn.',
    'Gebruik het op wegwerpprofielen met laag risico, nooit iets wat gekoppeld is aan geld of identiteit.',
    'Streef naar saai en generiek — ruis, geen overtuigend neppersoon.',
  ],
  'decoy.rulesDont': [
    'Doe je nooit voor als een echte, met naam genoemde persoon.',
    'Schrijf nooit nep-recensies of beoordelingen.',
    'Registreer nooit iemand anders, of gebruik de gegevens van iemand anders.',
    'Gebruik dit nooit om een schuldeiser, rechtbank of wetshandhaving te ontwijken.',
  ],
  'decoy.nameVariants': 'Naamvarianten',
  'decoy.noVariants': 'Geen varianten voor een naam zonder achternaam — voeg een achternaam toe bij Instellingen voor meer opties.',
  'decoy.addNamePre': 'Voeg je naam toe bij ',
  'decoy.addNameLink': 'Instellingen',
  'decoy.addNamePost': ' om alternatieve spellingen te genereren die je over wegwerpprofielen kunt verspreiden.',
  'decoy.fillerBio': 'Opvulbiografie',
  'decoy.regenerate': '↻ Opnieuw genereren',
  'decoy.copyBio': '⧉ Kopieer bio',
  'decoy.copied': '✓ Gekopieerd',
  'decoy.footer':
    'Generiek van opzet — het doel is statistische ruis, geen overtuigend neppersoon. Plak het in profielen die van jou zijn en weinig risico dragen.',
  'decoy.interests': [
    'kamerplanten', 'fietsen', 'zuurdesembrood bakken', 'vogelkijken', 'bordspellen',
    'wandelen', 'analoge fotografie', 'jazz', 'pottenbakken', 'cryptogrammen',
    'tuinieren', 'hardlopen', 'koken', 'sterrenkunde', 'koudwaterzwemmen',
    'schaken', 'breien', 'roadtrips', 'koffie', 'live muziek',
  ],
  'decoy.bioTemplate': 'Gewoon hier voor {list}. Vriendelijk blijven. Meningen zijn van mij.',
  'decoy.bioAnd': 'en',

  // Action card
  'actionCard.markDone': 'Markeer "{title}" als gedaan',
  'actionCard.markNotDone': 'Markeer "{title}" als niet gedaan',
  'actionCard.open': 'Openen',
  'actionCard.recheckEvery': '↻ hercontrole elke {days}d',
  'actionCard.recheckTitle': 'Makelaars zetten je opnieuw in hun lijst; doe dit periodiek opnieuw',
  'actionCard.searchCurrent': '🔎 Zoek naar huidige pagina',
  'actionCard.linkDead': 'link dood?',
  'actionCard.linkDeadTitle': 'Opt-out-URL\'s veranderen vaak',
  'actionCard.generateLetter': '✍️ Genereer brief',
  'actionCard.openTool': 'Open tool',
  'actionCard.howTo': 'Hoe werkt het',
  'actionCard.hideSteps': 'Verberg stappen',
  'actionCard.notRelevant': 'Niet relevant',
  'actionCard.restore': 'Herstellen',
} satisfies Dict
