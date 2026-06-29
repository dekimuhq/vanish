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
  'onboarding.restore': 'Kom je terug? Herstel een back-up',
  'onboarding.restoreCta': 'Kies .vanish-bestand',
  'onboarding.restoreErr': 'Verkeerde wachtwoordzin of geen Vanish-back-up.',
  'onboarding.restorePass': 'Wachtwoordzin van de back-up',
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

  // Backup nudge
  'nudge.backup': 'Je voortgang staat alleen in deze browser. Maak een back-up zodat het wissen van je gegevens die niet uitveegt.',
  'nudge.backupCta': 'Nu back-uppen',
  'nudge.dismiss': 'Later',

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
  'letters.status.drafted': 'Concept',
  'letters.status.escalated': 'Geëscaleerd',
  'letters.status.resolved': 'Opgelost',
  'letters.status.responded': 'Beantwoord',
  'letters.status.sent': 'Wacht op reactie',
  'letters.trackedConfirm': '✓ Bijgehouden',
  'letters.tracked.copied': '✓ Gekopieerd',
  'letters.tracked.copyEscalation': '⧉ Kopieer klacht',
  'letters.tracked.daysLeft': 'Nog {days} dagen tot de reactietermijn',
  'letters.tracked.delete': 'Verwijderen',
  'letters.tracked.empty': 'Brieven die je bijhoudt verschijnen hier met een aftelling tot de termijn.',
  'letters.tracked.escalate': 'Escaleren naar {authority}',
  'letters.tracked.overdue': '{days} dagen te laat',
  'letters.tracked.resolved': 'Markeer als opgelost',
  'letters.tracked.responded': 'Markeer als beantwoord',
  'letters.tracked.sentOn': 'Verzonden {date}',
  'letters.tracked.title': 'Mijn brieven',
  'letters.trackThis': '+ Houd dit bij als verzonden',

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
  'settings.encBackupTitle': 'Versleutelde back-up',
  'settings.encBackupBody':
    'Het wissen van je browsergegevens veegt alles hier weg — met opzet. De enige kopie die het overleeft is een bestand dat je zelf bewaart. Deze back-up is versleuteld met een wachtwoordzin, dus het bestand zelf is geen privacylek. Bewaar de wachtwoordzin op een veilige plek; wij kunnen die niet herstellen.',
  'settings.exportEncrypted': '↓ Bewaar versleutelde back-up (.vanish)',
  'settings.importEncrypted': '↥ Herstel versleutelde back-up',
  'settings.passphrase': 'Wachtwoordzin van de back-up',
  'settings.passphrasePlaceholder': 'Een wachtwoordzin die alleen jij kent',
  'settings.passphraseRequired': 'Voer eerst een wachtwoordzin in.',
  'settings.backupSaved': '✓ Back-up opgeslagen',
  'settings.backupErr': 'Back-up mislukt.',
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
  'actionCard.verified': 'Gecontroleerd {date}',
  'actionCard.verifiedTitle': 'Wanneer deze actie en de bijbehorende link voor het laatst zijn gecontroleerd. Meld een dode link als die is verplaatst.',

  // EFF SSD: scenario playlists
  'nav.scenarios': 'Scenario\'s',
  'scenarios.title': 'Begin vanuit jouw situatie',
  'scenarios.lead':
    'Samengestelde paden voor een specifieke situatie. Elk is een handgekozen volgorde door acties die je al hebt — begin bovenaan.',
  'scenarios.notFound': 'Dat scenario bestaat niet.',
  'scenario.survivor.title': 'Overlevende van stalking of misbruik',
  'scenario.survivor.intro':
    'Je locatie en contactgegevens scheiden van je naam, en verborgen trackers uitsluiten. Als je direct gevaar loopt, neem dan eerst contact op met lokale hulpdiensten.',
  'scenario.job-seeker.title': 'Opruimen voor een sollicitatie',
  'scenario.job-seeker.intro':
    'Wat een recruiter of leidinggevende vindt als ze je naam opzoeken — en hoe je dat opruimt voor ze kijken.',
  'scenario.activist.title': 'Activist / deelnemer aan een demonstratie',
  'scenario.activist.intro':
    'Je telefoon en communicatie beveiligen voor en tijdens het organiseren of een demonstratie.',
  'scenario.journalist.title': 'Journalist die bronnen beschermt',
  'scenario.journalist.intro':
    'Vertrouwelijke communicatie en werk- en persoonlijke identiteiten gescheiden houden.',
  'scenario.breach.title': 'Na een datalek',
  'scenario.breach.intro':
    'Je zat in een lek (of vermoedt het). Beperk de schade en sluit de deur achter je.',

  // EFF SSD: learn primers
  'nav.learn': 'Leren',
  'learn.title': 'Begrijp het waarom',
  'learn.lead':
    'Korte inleidingen in begrijpelijke taal bij de acties. Voor de volledige gids linkt elk onderwerp naar EFF\'s Surveillance Self-Defense.',
  'learn.related': 'Gerelateerde acties',
  'learn.readMore': 'Volledige gids',
  'learn.notFound': 'Dat onderwerp bestaat niet.',
  'learn.threat-model.title': 'Wat is een dreigingsmodel?',
  'learn.threat-model.body': [
    'Een dreigingsmodel zijn gewoon vijf eerlijke vragen: wat wil je beschermen, van wie wil je het beschermen, hoe waarschijnlijk is het dat je dat nodig hebt, hoe erg zijn de gevolgen als het misgaat, en hoeveel moeite ben je bereid te doen om het te voorkomen?',
    'Er is geen enkel juist niveau van privacy. Je inspanning afstemmen op de mensen waar je je werkelijk zorgen over maakt, is het hele spel — verder gaan dan jouw situatie vraagt, kost je gemak zonder extra veiligheid.',
  ],
  'learn.metadata.title': 'Wat metadata onthult',
  'learn.metadata.body': [
    'Metadata is de data over je data: wanneer een foto is genomen, op welke telefoon, en vaak de exacte GPS-coördinaten. De metadata van een bericht — wie, wanneer, hoe vaak — kan net zo veelzeggend zijn als de inhoud zelf.',
    'Je kunt niet altijd bepalen welke metadata diensten bewaren, maar je kunt stoppen met het vrijwillig weggeven: verwijder locatie- en apparaatgegevens uit foto\'s voor je ze deelt.',
  ],
  'learn.encryption.title': 'Wat end-to-end-versleuteling is',
  'learn.encryption.body': [
    'End-to-end-versleuteling (E2EE) betekent dat alleen jij en de persoon met wie je communiceert de berichten kunnen lezen — niet de app-maker, het netwerk, of iemand die ze onderweg onderschept.',
    'Het is het verschil tussen een briefkaart en een dichtgeplakte envelop. Gebruik E2EE-tools voor alles wat gevoelig is, en onthoud dat het de inhoud beschermt, maar niet altijd de metadata eromheen.',
  ],
  'learn.phishing.title': 'Hoe phishing werkt',
  'learn.phishing.body': [
    'Phishing verleidt je om een wachtwoord of code af te geven, meestal via een urgent bericht en een link naar een nep-inlogpagina. Zo beginnen de meeste accountovernames echt — er is geen hacken voor nodig.',
    'De verdediging bestaat uit gewoontes, niet tools: log nooit in via een link in een bericht, controleer de afzender, en vertrouw op een wachtwoordmanager (die het verkeerde domein niet automatisch invult) en hardwaresleutels (die phishing-bestendig zijn).',
  ],
  'learn.data-brokers.title': 'Wat datamakelaars zijn',
  'learn.data-brokers.body': [
    'Datamakelaars kopen, scrapen en verkopen profielen van jou — naam, adres, familieleden, telefoonnummers — aan adverteerders, recruiters en iedereen die betaalt. Persoonszoekmachines zijn het publieke etalageraam van die sector.',
    'Afmelden helpt, maar is niet permanent: makelaars verwerven je gegevens opnieuw en zetten je opnieuw op de lijst vanuit nieuwe openbare registers, dus verwijdering is een gewoonte op een timer, geen eenmalige oplossing.',
  ],
  'learn.vpn.title': 'Wat een VPN wel en niet doet',
  'learn.vpn.body': [
    'Een VPN verbergt je surfgedrag voor je netwerk en internetprovider, en je IP-adres voor de sites die je bezoekt — handig op onbetrouwbare wifi of om te voorkomen dat één internetprovider alles wat je doet profileert.',
    'Het maakt je niet anoniem: je vertrouwt nu de VPN-aanbieder in plaats daarvan, en het verhindert niet dat sites je volgen zodra je inlogt. Voor sterke anonimiteit is Tor de betere keuze.',
  ],
  'learn.key-verification.title': 'Waarom sleutels verifiëren',
  'learn.key-verification.body': [
    'Versleuteling gaat ervan uit dat je met de echte persoon praat. Een man-in-the-middle-aanval werkt door zich tussen jullie te positioneren en de sleutels te verwisselen — je zou nog steeds een gesloten slotje zien.',
    'Een veiligheidsnummer verifiëren (persoonlijk via QR, of via een apart vertrouwd kanaal) bevestigt dat er geen bedrieger tussenin zit. Doe het eenmalig voor je meest gevoelige contacten.',
  ],
} satisfies Dict
