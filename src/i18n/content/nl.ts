import type { ContentOverlay } from './types'

// nl catalog overlay (keyed by action id). Missing ids/fields fall back to English.
export const nl: ContentOverlay = {
  'google-yourself': {
    title: 'Zoek jezelf op via Google',
    summary:
      'Zoek je naam (+ woonplaats, + telefoonnummer) op in een privévenster en maak een screenshot van de eerste resultaten. Dit is je nulmeting — je kunt verwijdering alleen afmeten aan wat je nu ziet.',
    steps: [
      'Open een privé- of incognitovenster, zodat gepersonaliseerde resultaten je niet misleiden.',
      'Zoek achtereenvolgens: je naam, "naam + woonplaats", je telefoonnummer en je e-mailadres.',
      "Maak screenshots van de eerste twee pagina's per zoekopdracht. Noteer elke site die een adres, telefoonnummer, familieleden of foto's toont.",
      'Die sites vormen je doellijst in de Datamakelaars-laag.',
    ],
    urlLabel: 'Zoek jezelf op Google',
  },
  'hibp': {
    title: 'Controleer Have I Been Pwned',
    summary:
      'Voer je e-mailadres in en zie in welke datalekken het opdook, en welke wachtwoorden je moet wijzigen. De beste gratis lekdatabase die er is.',
    urlLabel: 'Controleer HIBP',
  },
  'mozilla-monitor': {
    title: 'Stel Mozilla Monitor in',
    summary: 'Gratis doorlopende lekmeldingen voor maximaal 20 e-mailadressen, op basis van de HIBP-dataset.',
    urlLabel: 'Open Monitor',
  },
  'password-manager': {
    title: 'Installeer een wachtwoordmanager',
    summary:
      'Gebruik Bitwarden of KeePass. Dit is de basis voor unieke wachtwoorden en om elk account te vinden dat je ooit hebt aangemaakt.',
    urlLabel: 'Haal Bitwarden',
  },
  'change-breached-passwords': {
    title: 'Verander hergebruikte en gelekte wachtwoorden',
    summary:
      'Voor elk account dat Have I Been Pwned markeerde — en overal waar je een wachtwoord hergebruikte — stel je een nieuw uniek wachtwoord in via je manager.',
    steps: [
      'Begin bij de sleutels van het koninkrijk: e-mail, dan bankieren, dan je wachtwoordmanager.',
      'Hergebruik nooit een wachtwoord voor twee sites. Laat de manager ze aanmaken.',
      'Als een account in een lek zat, ga je ervan uit dat het oude wachtwoord publiek is.',
    ],
  },
  'delete-dormant-accounts': {
    title: 'Verwijder slapende accounts',
    summary:
      'Elk oud account is een potentieel lek en een bron voor datamakelaars. Gebruik een JustDeleteMe-achtige directory met directe verwijderlinks, gesorteerd op moeilijkheid.',
    steps: [
      'Je wachtwoordmanager en zoekopdrachten in je oude inbox ("welkom", "bevestig je account") onthullen vergeten accounts.',
      'Gebruik de moeilijkheidsindeling: groen = één klik, rood = je moet de klantenservice mailen.',
      'Verwijderen, niet deactiveren — gedeactiveerde accounts bevatten je gegevens nog steeds.',
    ],
    urlLabel: 'Open JustDeleteMe',
  },
  'optout-truepeoplesearch': {
    title: 'Opt-out bij TruePeopleSearch',
    summary: 'Dien een verwijderverzoek in — geen e-mail of ID nodig, bijna direct verwijderd. Een van de snelste zichtbare winsten.',
    urlLabel: 'Verwijder mij',
  },
  'optout-fastpeoplesearch': {
    title: 'Opt-out bij FastPeopleSearch',
    summary: 'Snelle verwijdering via formulier, geen ID nodig.',
    urlLabel: 'Verwijder mij',
  },
  'optout-usphonebook': {
    title: 'Opt-out bij USPhoneBook',
    summary: 'Snelle verwijdering, geen ID nodig.',
    urlLabel: 'Verwijder mij',
  },
  'google-results-about-you': {
    title: 'Google "Resultaten over jou"',
    summary:
      "Gebruik Google's eigen tool om verwijdering aan te vragen van pagina's die je telefoonnummer, thuisadres of e-mailadres tonen in zoekresultaten.",
    urlLabel: 'Open de tool',
  },
  'google-ad-personalization': {
    title: 'Schakel Google-advertentiepersonalisatie uit',
    summary: "Schakel gepersonaliseerde advertenties op basis van je Google-accountprofiel uit.",
    urlLabel: 'Advertentie-instellingen',
  },
  'reset-advertising-id': {
    title: 'Reset de reclame-ID van je telefoon',
    summary: 'Verbreek de persistente identifier die advertentiebedrijven gebruiken om je over apps heen te volgen.',
    steps: [
      'iOS: Instellingen → Privacy en beveiliging → Tracking → zet "Toestaan dat apps om toestemming vragen" uit.',
      'iOS: Instellingen → Privacy en beveiliging → Apple Advertising → zet Gepersonaliseerde advertenties uit.',
      'Android: Instellingen → Privacy → Advertenties → Reclame-ID verwijderen (of opnieuw instellen).',
    ],
  },
  'prune-social-profiles': {
    title: 'Snoeien in openbare sociale profielen',
    summary:
      'Zet oude berichten en profielen op privé; verwijder geboortedatum, telefoonnummer, adres en woonplaats van alles wat openbaar is.',
    steps: [
      'Facebook: Instellingen → Privacy → "Beperk eerdere berichten"; controleer het profiel veld voor veld.',
      'Instagram/X: schakel over naar privé als dat kan; verwijder locatie, contactgegevens en geboortedatum uit de bio.',
      'LinkedIn: verberg je connecties en contactgegevens voor niet-connecties.',
    ],
  },
  'bulk-delete-posts': {
    title: 'Verwijder oude berichten in bulk',
    summary: "Wis je berichtgeschiedenis met de platform-eigen download-en-verwijder-tools.",
    steps: [
      'X: Instellingen → "Download een archief" eerst, gebruik dan een bulkverwijderaanpak.',
      'Facebook: Activiteitenlogboek → filter op jaar → bulksgewijs verwijderen of archiveren.',
      'Exporteer altijd een archief voor jezelf voordat je alles verwijdert.',
    ],
  },
  'unsubscribe-marketing': {
    title: 'Afmelden voor marketinglijsten',
    summary:
      'Massaal afmelden voor nieuwsbrieven. Vermindert de voortdurende datastroom en beperkt de schade bij een volgend lek.',
    steps: [
      'Zoek in je inbox naar "afmelden" en werk van boven naar beneden.',
      'Gebruik bij voorkeur de afmeldlink in de e-mail zelf in plaats van als spam markeren (nettere verwijdering).',
      'Voor verzenders die je toch blijven mailen, is een AVG/CCPA-brief een optie voor later.',
    ],
  },
  'unlist-caller-id': {
    title: 'Verwijder je nummer uit beller-ID-apps',
    summary: 'Meld je af uit crowd-sourced beller-ID-databases zoals Truecaller en Hiya.',
    urlLabel: 'Truecaller-afmelding',
  },
  'revoke-third-party-apps': {
    title: 'Controleer en trek toegang van derde apps in',
    summary:
      'Bekijk apps die verbonden zijn met je Google-, Apple-, Facebook- of Microsoft-accounts en trek de toegang in van alles wat je niet meer gebruikt.',
    urlLabel: 'Google-verbindingen',
  },
  'enable-2fa': {
    title: 'Zet 2FA aan voor kritieke accounts',
    summary:
      'Schakel app-gebaseerde (niet sms) tweefactorauthenticatie in voor e-mail, bank en je wachtwoordmanager. Sms-codes zijn kwetsbaar voor SIM-swapping.',
    steps: [
      'Gebruik een authenticator-app (Aegis, Ente Auth of je wachtwoordmanager).',
      'Prioriteit: e-mail → wachtwoordmanager → bank → social.',
      'Sla reservecodes op in je wachtwoordmanager, niet op papier naast je bureau.',
    ],
  },
  'wipe-old-devices': {
    title: 'Wis gegevens voor je apparaten wegdoet',
    summary: 'Reset phones, laptops en schijven op fabrieksinstellingen en versleutel ze voor je ze verkoopt of recyclet.',
    steps: [
      'Zorg eerst dat volledige schijfversleuteling aan staat (dat maakt het wissen effectief onomkeerbaar).',
      'Meld je af bij alle accounts (met name Find My / Google-accountvergrendeling) voor de reset.',
      "Doe dan een fabrieksreset. Voor harde schijven een meervoudige overschrijving; bij SSD's de ingebouwde beveiligde wis-functie gebruiken.",
    ],
  },
  'optout-smartbackgroundchecks': {
    title: 'Opt-out bij SmartBackgroundChecks',
    summary: 'Snelle formulierverwijdering, geen ID nodig — nog een persoonszoekmachine die bij naamzoekopdrachten opduikt.',
    urlLabel: 'Verwijder mij',
  },
  'ad-industry-optout': {
    title: 'Opt-out voor op interesses gebaseerde advertenties (DAA/NAI)',
    summary:
      'Gebruik de zelfreguleringsinstrumenten van de advertentiebranche om deze browser in één keer af te melden voor gedragsgerichte advertenties. Gebaseerd op cookies — doe het opnieuw na het wissen van cookies of op een nieuwe browser.',
    urlLabel: 'DAA WebChoices',
  },
  'optout-spokeo': {
    title: 'Opt-out bij Spokeo',
    summary: 'Plak de URL van je profiel en bevestig via e-mail.',
    urlLabel: 'Opt-out',
  },
  'optout-whitepages': {
    title: 'Opt-out bij Whitepages',
    summary: 'Dien een verzoek tot onderdrukking in; er is vaak een telefonische verificatiestap vereist. Staat hoog in naamzoekopdrachten.',
    urlLabel: 'Onderdrukkingsverzoek',
  },
  'optout-peopleconnect': {
    title: 'Opt-out bij het PeopleConnect-netwerk',
    summary:
      'Eén onderdrukkingsverzoek dekt Intelius, BeenVerified, Instant Checkmate, TruthFinder en USSearch. De actie met de hoogste hefboomwerking bij datamakelaars.',
    urlLabel: 'Onderdruk alle 5',
  },
  'optout-radaris': {
    title: 'Opt-out bij Radaris',
    summary: 'Claim en verwijder je profiel; vereist een e-mailbevestiging.',
    urlLabel: 'Privacy beheren',
  },
  'optout-mylife': {
    title: 'Opt-out bij MyLife',
    summary: 'Dien een privacy/CCPA-verzoek in. MyLife houdt hardnekkige "reputatiescore"-profielen bij en is berucht moeilijk te verwijderen.',
    urlLabel: 'CCPA-verzoek',
  },
  'optout-nuwber': {
    title: 'Opt-out bij Nuwber',
    summary: 'Verwijdering via link plus e-mailbevestiging.',
    urlLabel: 'Verwijder mij',
  },
  'optout-thatsthem': {
    title: "Opt-out bij That's Them",
    summary: 'Eenvoudige formulierverwijdering.',
    urlLabel: 'Opt-out',
  },
  'optout-peoplefinders': {
    title: 'Opt-out bij PeopleFinders',
    summary: 'Formulier plus e-mailbevestiging.',
    urlLabel: 'Opt-out',
  },
  'optout-familytreenow': {
    title: 'Opt-out bij FamilyTreeNow',
    summary: 'Verwijdert verrassend gedetailleerde adres- en familiegrafieken.',
    urlLabel: 'Opt-out',
  },
  'optout-acxiom': {
    title: 'Opt-out bij Acxiom',
    summary: 'Een van de grootste marketingdata-aggregatoren — afmelden beperkt de aanvoer naar veel kleinere makelaars.',
    urlLabel: 'Opt-out',
  },
  'optout-oracle': {
    title: 'Opt-out bij Oracle Data Cloud',
    summary: 'Dien de opt-out voor de datacloud in. Oracle bouwt zijn advertentiebedrijf af — controleer het huidige proces.',
    urlLabel: 'Privacy / opt-out',
  },
  'optout-epsilon': {
    title: 'Opt-out bij Epsilon',
    summary: 'Opt-out bij een marketingdata-aggregator.',
    urlLabel: 'Opt-out',
  },
  'optout-experian-marketing': {
    title: 'Opt-out voor Experian-marketing',
    summary: 'Marketingopt-out, los van je kredietdossier.',
    urlLabel: 'Opt-out',
  },
  'private-browser': {
    title: 'Stap over op een privébrowser',
    summary: 'Gebruik Firefox of Brave met standaard ingeschakelde trackingbeveiliging.',
    urlLabel: 'Haal Firefox',
  },
  'tracker-blocker': {
    title: 'Voeg een inhoud- en trackingblokkeerder toe',
    summary: 'Installeer uBlock Origin om advertenties en trackers op het hele web te blokkeren.',
    urlLabel: 'Haal uBlock Origin',
  },
  'private-search': {
    title: 'Verander je standaard zoekmachine',
    summary: 'Schakel over naar een niet-registrerende zoekmachine zoals DuckDuckGo, Startpage of Brave Search.',
    urlLabel: 'Probeer DuckDuckGo',
  },
  'email-aliases': {
    title: 'Gebruik e-mailaliassen',
    summary:
      'Gebruik per dienst een uniek alias zodat een toekomstig lek je accounts niet aan elkaar kan koppelen — en je elk alias dat spam begint te krijgen gewoon kunt verwijderen.',
    urlLabel: 'Haal SimpleLogin',
  },
  'optout-prescreen': {
    title: 'Opt-out voor prescreened creditaanbiedingen (VS)',
    summary: 'Stop prescreened krediet- en verzekeringsaanbiedingen — dit zijn bulkverkopen van je kredietgegevens.',
    urlLabel: 'Opt-out (5 jaar / permanent)',
  },
  'freeze-credit': {
    title: 'Bevries je krediet',
    summary: 'Zet een beveiligingsblokkade bij alle drie de bureaus om fraude bij het openen van nieuwe accounts te voorkomen. Gratis in de VS.',
    steps: [
      'Bevriezing bij alle drie: Equifax, Experian en TransUnion (elk afzonderlijk).',
      'Een bevriezing blokkeert nieuwe kredieten die op jouw naam worden geopend; je "ontdooit" tijdelijk als je krediet nodig hebt.',
      'Het heeft geen invloed op je score en is wettelijk gratis.',
    ],
    urlLabel: 'Equifax-bevriezing',
  },
  'disable-location-history': {
    title: 'Schakel telefoonlocatiegeschiedenis uit',
    summary: 'Schakel Google Locatiegeschiedenis / iOS Significante locaties uit en wis de opgeslagen geschiedenis.',
    urlLabel: 'Activiteitscontroles',
  },
  'schedule-broker-recheck': {
    title: 'Plan een hercontrole van makelaars in',
    summary:
      'Makelaars zetten je binnen 3 tot 6 maanden opnieuw op hun lijst. Vanish houdt bij wanneer elke opt-out opnieuw gedaan moet worden — dit bevestigt dat je je aan die cyclus committeert.',
  },
  'broker-letter': {
    title: 'Brief: verwijder mij (geen formulier beschikbaar)',
    summary:
      'Voor makelaars en bedrijven zonder zelfbedienings-opt-out kun je een AVG/CCPA-verwijderbrief genereren en zelf versturen.',
  },
  'optout-checkpeople': {
    title: 'Opt-out bij CheckPeople',
    summary: 'Formulierverwijdering voor een andere persoonszoekaggregator.',
    urlLabel: 'Opt-out',
  },
  'optout-dmachoice': {
    title: 'Opt-out voor direct-mailmarketing (DMAchoice)',
    summary:
      "Registreer je bij de mailvoorkeursdienst van de Data & Marketing Association om ongewenste post te stoppen. Er is een kleine eenmalige vergoeding voor een registratie van meerdere jaren.",
    urlLabel: 'DMAchoice',
  },
  'youronlinechoices': {
    title: 'Opt-out voor EU-interesse-gebaseerde advertenties',
    summary:
      'Gebruik het EDAA Your Online Choices-tool om deze browser af te melden voor gedragsgerichte advertenties bij deelnemende netwerken. Gebaseerd op cookies — doe het opnieuw na het wissen van cookies.',
    urlLabel: 'Your Online Choices',
  },
  'encrypted-dns-devices': {
    title: 'Stel versleutelde DNS in op elk apparaat',
    summary:
      'Wijs je telefoon en laptop toe aan een versleutelde, privacyvriendelijke resolver zodat je internetprovider niet elke site kan loggen die je opzoekt.',
    steps: [
      'Kies een resolver zonder logging: Quad9 (9.9.9.9) of NextDNS.',
      'iOS/macOS: installeer het configuratieprofiel van de aanbieder, of stel DNS-over-HTTPS in via Instellingen.',
      'Android 9+: Instellingen → Netwerk → Privé-DNS → vul de hostnaam van de aanbieder in.',
      'Dit is een aanvulling op DNS op routerniveau — apparaten houden het ook buiten je thuisnetwerk.',
    ],
    urlLabel: 'Quad9',
  },
  'harden-messaging-privacy': {
    title: 'Versterk de privacy-instellingen van je berichtenapps',
    summary: "Zet de ingebouwde privacycontroles aan in de apps die je al gebruikt — vóórdat je naar iets anders overstapt.",
    steps: [
      'Schakel standaard verdwijnende berichten in waar mogelijk (Signal, WhatsApp, Telegram).',
      "Verberg 'Laatst gezien', leesbevestigingen en profielfoto voor niet-contactpersonen.",
      'Vergrendel de app achter een pincode of biometrie en schakel berichtvoorvertoningen op het vergrendelscherm uit.',
      'Controleer de instellingen voor groepsuitnodigingen zodat vreemden je niet zomaar kunnen toevoegen.',
    ],
  },
  'remove-outdated-google': {
    title: "Verwijder verouderde pagina's uit Google",
    summary:
      "Als een pagina over jou is gewijzigd of verwijderd maar Google nog oude gecachte inhoud toont, vraag Google dan om die te vernieuwen of te verwijderen.",
    urlLabel: 'Verouderde inhoud verwijderen',
  },
  'optout-es-listarobinson': {
    title: 'Registreer bij de Lista Robinson',
    summary:
      "De officiële Spaanse reclame-uitsluitingslijst (beheerd door Adigital). Eenmaal geregistreerd mogen aangesloten bedrijven je niet meer bellen, sms'en, mailen of post sturen voor marketingdoeleinden.",
    urlLabel: 'Lista Robinson',
  },
  'optout-it-rpo': {
    title: 'Registreer bij het Registro Pubblico delle Opposizioni',
    summary:
      "Het Italiaanse openbare bezwaarregister. Schrijf je telefoonnummer (en postadres) in om operators te blokkeren die verplicht zijn het register te raadplegen voor ze je marketing sturen.",
    urlLabel: 'Registro Opposizioni',
  },
  'optout-fr-bloctel': {
    title: 'Registreer bij Bloctel',
    summary:
      "Het officiële Franse bel-me-niet-register. Geregistreerde nummers mogen wettelijk niet worden gebruikt voor telefonische marketing door bedrijven waarmee je geen contract hebt.",
    urlLabel: 'Bloctel',
  },
  'optout-de-robinsonliste': {
    title: 'Registreer bij de Robinsonliste',
    summary:
      "De centrale Duitse opt-outlijst voor reclame (beheerd door de DDV). Vermindert geadresseerde marketingpost, telefoontjes en e-mail van deelnemende bedrijven.",
    urlLabel: 'Robinsonliste (DDV)',
  },
  'optout-be-donotcallme': {
    title: 'Registreer bij de Bel-me-niet-lijst',
    summary:
      "De officiële Belgische bel-me-niet-lijst. Eenmaal geregistreerd mag jouw nummer niet worden gebruikt voor telefonische marketing. Registratie gaat telefonisch.",
    urlLabel: 'Do Not Call Me',
  },
  'optout-pt-amd': {
    title: 'Schrijf je in op de Lista de Oposição (AMD)',
    summary:
      "De Portugese consumentenbezwaarlijst. Meld je aan om direct-marketingoproepen en post te stoppen van bedrijven die aan het register gebonden zijn.",
    urlLabel: 'Lista de Oposição',
  },
  'optout-se-hitta': {
    title: 'Verwijder je contactpagina van Hitta.se',
    summary:
      "Het Zweedse principe van openbaarheid van bestuur maakt je adres makkelijk vindbaar. Verberg je Hitta.se-contactpagina — verwijdering gaat met BankID.",
    urlLabel: 'Verwijder mij',
  },
  'optout-se-ratsit': {
    title: 'Verwijder je vermelding uit Ratsit',
    summary: "Ratsit herplaatst Zweedse openbare gegevens — adres, leeftijd, financiën. Verwijder je gratis openbare vermelding met BankID.",
    urlLabel: 'Ta bort',
  },
  'optout-se-mrkoll': {
    title: 'Verberg je gegevens op MrKoll',
    summary: "MrKoll herplaatst Zweedse openbare gegevens. Verberg je adres en telefoonnummer — BankID vereist.",
    urlLabel: 'Ändra uppgifter',
  },
  'optout-de-dastelefonbuch': {
    title: 'Verwijder je vermelding uit DasTelefonbuch / DasÖrtliche',
    summary: "Verwijder of beperk je vermelding in de belangrijkste Duitse openbare telefoonboeken (DasTelefonbuch, DasÖrtliche).",
    urlLabel: 'Vermelding beheren',
  },
  'optout-at-ecg': {
    title: 'Schrijf je in op de ECG-Liste',
    summary:
      "De Oostenrijkse uitsluitingslijst voor elektronische marketing (beheerd door RTR). Registreer je adres om je af te melden voor ongewenste marketing-e-mail en sms.",
    urlLabel: 'ECG-Liste',
  },
  'optout-dk-robinson': {
    title: 'Schrijf je in op de Robinsonlisten',
    summary:
      "De officiële Deense reclamebeschermingslijst, beheerd via het centrale personenregister (CPR). Blokkeert geadresseerde reclamebrieven en marketingoproepen.",
    urlLabel: 'Robinsonlisten',
  },
  'optout-fi-kieltopalvelu': {
    title: 'Registreer het marketingverbod (ASML)',
    summary:
      "De Finse Robinson-opt-out, beheerd door de marketingvereniging ASML. Registreer je om telefonische en geadresseerde direct-marketingpost te stoppen.",
    urlLabel: 'Kieltopalvelut',
  },
  'optout-hr-nezovi': {
    title: 'Registreer bij NE ZOVI',
    summary:
      "Het officiële Kroatische bel-me-niet-register (beheerd door de toezichthouder HAKOM). Gratis — je registreert je via je telecomprovider om marketingoproepen te blokkeren.",
    urlLabel: 'NE ZOVI',
  },
  'private-email-provider': {
    title: 'Migreer naar een privé-e-mailprovider',
    summary: "Verplaats je primaire postbus naar Proton of Tuta en begin met doorsturen en het migreren van je accounts.",
    urlLabel: 'Proton Mail',
  },
  'signal': {
    title: 'Stap over op Signal voor je communicatie',
    summary: "Maak Signal je standaard messenger en bouw sms/WhatsApp af voor alles wat gevoelig is.",
    urlLabel: 'Haal Signal',
  },
  'hardware-keys': {
    title: 'Voeg hardware-beveiligingssleutels toe',
    summary: "Registreer FIDO2-sleutels (bijv. YubiKey) op je e-mail, bank, wachtwoordmanager en cloudaccounts.",
    steps: [
      'Koop twee sleutels — één primaire en één reservesleutel die je op een veilige plek bewaart.',
      'Registreer beide op elk kritiek account vóór je zwakkere 2FA-methoden verwijdert.',
      'Hardware-sleutels zijn phishing-bestendig; het is de sterkste tweede factor die er is.',
    ],
  },
  'full-broker-sweep': {
    title: 'Volledige makelaarsopruiming',
    summary: "Werk de volledige makelaarlijst van begin tot eind door en noteer elke opt-outdatum zodat de hercontrole-timers kloppen.",
  },
  'e2ee-storage': {
    title: 'Stap over op end-to-end-versleutelde cloudopslag',
    summary: "Vervang Drive/Dropbox door end-to-end-versleutelde opslag zodat de provider je bestanden niet kan lezen.",
    urlLabel: 'Proton Drive',
  },
  'degoogle-services': {
    title: "De-Google je kernservices",
    summary: "Vervang Maps, Docs en Photos door privacyvriendelijke alternatieven.",
    steps: [
      'Maps → Organic Maps / OsmAnd. Docs → CryptPad / OnlyOffice. Photos → Ente / Immich.',
      'Migreer één service tegelijk zodat je nergens toegang tot verliest.',
      "Exporteer je gegevens via Google Takeout vóór je iets verwijdert.",
    ],
    urlLabel: 'Alternatieven (Privacy Guides)',
  },
  'masked-phone': {
    title: 'Gebruik een gemaskeerd of VoIP-telefoonnummer',
    summary: "Geef een tweede nummer op bij aanmeldingen en houd je echte nummer privé.",
    steps: [
      'Opties: Google Voice (VS), MySudo, of een goedkope tweede SIM/eSIM.',
      'Gebruik het gemaskeerde nummer voor loyaliteitskaarten, aanmeldingen en alles wat niet essentieel is.',
      'Reserveer je echte nummer alleen voor vertrouwde contacten en 2FA-back-ups.',
    ],
  },
  'masked-cards': {
    title: 'Gebruik virtuele of gemaskeerde betaalkaarten',
    summary: "Eenmalig of per handelaar aangemaakt kaartnummers verbreken de betalingsdatakoppeling die makelaars kopen.",
    steps: [
      'Opties: Privacy.com (VS), Revolut wegwerpkaarten of de virtuele kaarten van je bank.',
      'Maak een unieke kaart aan per handelaar; annuleer elke kaart die lekt of te veel afschrijft.',
    ],
  },
  'strip-exif': {
    title: "Verwijder fotometadata voor je deelt",
    summary: "Verwijder EXIF/GPS-data uit afbeeldingen die je publiek deelt, zodat foto's niet verraden waar je woont of was.",
    steps: [
      "Veel platforms verwijderen EXIF bij het uploaden — maar niet allemaal, en niet bij het delen van originele bestanden.",
      "iOS: deelblad → Opties → zet Locatie uit. Android: gebruik een app voor het verwijderen van metadata.",
      'Desktop: ExifTool, of "Eigenschappen verwijderen" in de Windows-bestandseigenschappen.',
    ],
  },
  'harden-router-dns': {
    title: 'Versterk je thuisrouter en DNS',
    summary: "Verander het standaard beheerderswachtwoord, schakel versleutelde DNS in en schakel UPnP/WPS uit.",
    steps: [
      'Verander het beheerderswachtwoord van de router direct vanaf de standaardwaarde.',
      'Stel versleutelde DNS (DoH/DoT) in — bijv. Quad9 (9.9.9.9) of NextDNS — om te voorkomen dat je provider elke zoekopdracht logt.',
      'Schakel UPnP en WPS uit; houd de firmware bijgewerkt.',
    ],
  },
  'segment-iot': {
    title: 'Isoleer IoT-apparaten op het netwerk',
    summary: "Zet slimme apparaten op een gastnetwerk of VLAN om te beperken wat ze kunnen zien en bereiken.",
  },
  'anti-fingerprint': {
    title: 'Blokkeer browser-fingerprinting',
    summary: "Gebruik anti-fingerprintinginstellingen zodat trackers je browser niet kunnen herkennen zonder cookies.",
    steps: [
      'Firefox: stel privacy.resistFingerprinting in, of gebruik de Mullvad Browser / Tor Browser voor gevoelige sessies.',
      'Stapel geen exotische extensies — elke extra maakt je juist unieker, niet minder.',
    ],
    urlLabel: 'Test je fingerprint',
  },
  'retire-old-email': {
    title: 'Zet je oude e-mailaccount buiten gebruik en verwijder het',
    summary: "Nadat je gemigreerd bent, update je resterende diensten en verwijder dan de oude inbox zodat die niet kan worden gehackt of uitgebuit.",
    steps: [
      'Stuur de oude inbox gedurende een overgangsperiode van 3 tot 6 maanden door naar de nieuwe.',
      'Elke keer dat er iets binnenkomt op het oude adres, update je die dienst naar het nieuwe.',
      'Als het verkeer opdroogt, exporteer je en verwijder je het oude account.',
    ],
  },
  'gdpr-access-letter': {
    title: 'Stuur AVG-toegangsverzoeken (SAR)',
    summary: "Dwing grote dataverzamelaars om precies bekend te maken wat ze over jou hebben — verkenning vóór het verwijderen.",
  },
  'optout-lexisnexis': {
    title: 'Opt-out bij LexisNexis',
    summary: "Waardevolle FCRA-aggregator die achtergrondcontroles voedt; kan ID-bewijs vereisen.",
    urlLabel: 'Opt-out',
  },
  'broker-registry': {
    title: 'Opt-out via registers van datamakelaars',
    summary: "Gebruik staatsregisters van makelaars (Californië, Vermont) om makelaars te vinden en je af te melden die je gemist hebt.",
    urlLabel: 'CA-makelaarsregister',
  },
  'maps-contributions': {
    title: "Verwijder je adres uit Maps-bijdragen",
    summary: "Verwijder beoordelingen, foto's en labels die stilzwijgend je woon- of werkplek verraden.",
    urlLabel: 'Maps-activiteit',
  },
  'cross-app-tracking-off': {
    title: 'Schakel cross-app tracking overal uit',
    summary: "iOS App Tracking Transparency uit, Android reclame-ID uitgeschakeld, locatie per app ingesteld op 'nooit/vragen'.",
  },
  'optout-eu-brokers': {
    title: 'Opt-out bij EU-datamakelaars',
    summary: "EU/VK-inwoners: dien opt-outs en AVG-artikel 17-brieven in bij in de EU actieve makelaars (Acxiom, Criteo, Experian UK).",
    urlLabel: 'Acxiom (wereldwijd)',
  },
  'optout-criteo': {
    title: 'Opt-out bij Criteo',
    summary: "Meld je af van Criteo's advertentieretargetingprofiel — een van de grootste gedragsgerichte advertentienetwerken actief in de EU.",
    urlLabel: 'Privacy / opt-out',
  },
  'optout-192': {
    title: 'Opt-out bij 192.com',
    summary:
      "Verwijder je vermelding van de belangrijkste Britse persoonszoekmachine. Een groot deel van de gegevens komt uit het open kiesregister — meld je daar ook af bij je gemeente.",
    urlLabel: 'Verwijder mijn gegevens',
  },
  'optout-experian-uk': {
    title: 'Opt-out bij Experian UK-marketing',
    summary: "Gebruik het dataportal van Experian UK om het marketinggebruik van je gegevens te beheren, los van je kredietdossier.",
    urlLabel: 'Dataportal',
  },
  'google-rtbf-delisting': {
    title: 'Verzoek om EU/VK-zoekverwijdering (recht om vergeten te worden)',
    summary:
      "EU/VK-inwoners kunnen Google vragen om specifieke URL's over hen te verwijderen uit zoekresultaten op naam. Verwijdert de link uit Zoeken, niet de onderliggende pagina.",
    urlLabel: 'RTBF-aanvraagformulier',
  },
  'disable-os-telemetry': {
    title: 'Beperk OS-telemetrie op Windows en macOS',
    summary: "Verlaag de hoeveelheid diagnostische en reclamegegevens die je desktopbesturingssysteem standaard terugstuurt.",
    steps: [
      "Windows: Instellingen → Privacy en beveiliging → Diagnostische gegevens en feedback → stel in op Vereiste gegevens; schakel de reclame-ID en op maat gemaakte ervaringen uit.",
      'macOS: Instellingen → Privacy en beveiliging → Analyse en verbetering → zet Analyseer gegevens delen uit; Apple Advertising → zet Gepersonaliseerde advertenties uit.',
      'Controleer dan ook de per-app machtigingen voor camera, microfoon en locatie.',
    ],
  },
  'private-mailing-address': {
    title: 'Stel een privé-postadres in',
    summary:
      "Gebruik een CMRA/doorstuuradres en stop met het opgeven van je thuisadres voor leveringen en aanmeldingen. Verbreekt de publieke koppeling naam↔thuisadres.",
    steps: [
      'Opties: een commercieel postdooragentschap (CMRA), een virtuele brievenbus of een postbus.',
      'Update je adres op accounts geleidelijk, te beginnen met de meest blootgestelde.',
      'Vul nooit meer je echte thuisadres in op een aanmeldformulier.',
    ],
  },
  'optout-electoral-register': {
    title: 'Meld je af van het openbare kiesregister',
    summary:
      "Verwijder jezelf van het publiek verkochte kiesregister (VK open register) of verkiezingsdata-verkopen (VS, per staat).",
    steps: [
      'VK: neem contact op met je plaatselijke gemeente om je af te melden voor het "open" kiesregister (je blijft op het volledige register voor stemmen).',
      'VS: regels voor kiezersregisters zijn per staat; sommige staan vertrouwelijke/ingehouden status toe, met name voor overlevenden.',
    ],
  },
  'suppress-public-records': {
    title: 'Onderdruk je thuisadres in openbare registers',
    summary:
      "Gebruik adresvertrouwelijkheidsprogramma's of eigendomsregistratie-redactie waar je daarvoor in aanmerking komt (sterk voor overlevenden van misbruik).",
    steps: [
      'VS: de meeste staten hebben een Address Confidentiality Program (ACP) voor overlevenden van stalking/misbruik.',
      "Eigendomsregisters: sommige gemeenten staan redactie toe voor risicogroepen — vraag de gemeentelijke recorder.",
      'Dit is jurisdictiespecifiek; een lokale slachtofferhulporganisatie kan je helpen met de aanvraag.',
    ],
  },
  'compartmentalize-identities': {
    title: 'Compartimenteer je identiteiten',
    summary: "Gebruik aparte e-mail, telefoon en kaart per levenscontext (werk / persoonlijk / winkelen / financiën) zodat één lek niet je hele leven in kaart brengt.",
  },
  'degoogled-phone': {
    title: 'Stap over op een de-Googled telefoon (GrapheneOS)',
    summary: "Gebruik dagelijks een gehard besturingssysteem zonder ingebouwde Google-diensten.",
    urlLabel: 'GrapheneOS',
  },
  'always-vpn-tor': {
    title: 'Altijd-aan VPN / Tor voor gevoelig gebruik',
    summary: "Routeer gevoelig browsen via een betrouwbare VPN zonder logs (bijv. Mullvad) of via Tor.",
    urlLabel: 'Mullvad VPN',
  },
  'burner-devices': {
    title: 'Wegwerpapparaten voor reizen',
    summary: "Gebruik apparaten met minimale gegevens bij grensovergangen en in risicovolle situaties.",
  },
  'trust-llc-home': {
    title: 'Gebruik een trust of BV voor huis en bezittingen',
    summary:
      "Verbreek de publieke koppeling naam↔adres in eigendomsregisters door bezittingen in een trust of BV onder te brengen. Raadpleeg een professional — dit is geen juridisch advies.",
  },
  'quarterly-reremoval': {
    title: 'Kwartaallijkse herverwijderingscampagne',
    summary: "Voer elk kwartaal de volledige makelaarsopruiming opnieuw uit en noteer de datums. Verwijdering is een gewoonte, geen eenmalige actie.",
  },
  'threat-model-review': {
    title: 'Dreigingsmodel elk kwartaal herzien',
    summary:
      "Heroverweeg wie je beschermt en pas je aanpak aan. Gebruik het EFF Surveillance Self-Defense-raamwerk.",
    urlLabel: 'EFF SSD-plan',
  },
  'remove-osint-aggregators': {
    title: 'Verwijder jezelf van lek- en OSINT-zoekmachines',
    summary: "Verzoek om verwijdering bij lekzoekmachines en OSINT-aggregatiesites waar mogelijk.",
  },
  'scrub-org-sites': {
    title: "Wis jezelf van oude werkgevers- en organisatiesites",
    summary: "Verzoek om verwijdering van bio's, medewerkers-pagina's en persberichten die je gegevens blootstellen. Gebruik een brief als ze niet reageren.",
  },
  'optout-court-arrest-records': {
    title: 'Onderdruk aggregatoren van rechtbank- en arrestatieregisters',
    summary:
      "Sites die mugshots, arrestatielogboeken en rechtbankgegevens herplaatsen vormen een ernstige blootstelling, ook als aanklachten zijn ingetrokken. Vraag elke site om verwijdering; sommige vereisen ID of een rechtbankbeslissing.",
    steps: [
      'Maak een lijst van sites die je gegevens tonen (uit je Laag-1-naamzoekbaseline).',
      "Gebruik de verwijderpagina van elke site; voor mugshot-sites betaal je nooit een 'takedown fee' — dat financiert het probleem. Verwijs naar staatswetten tegen mugshots waar die bestaan.",
      'Voor officiële rechtbankportalen, vraag de griffier naar verzegeling/expungement — de enige duurzame oplossing.',
      'Als een site je negeert, escaleer met een AVG/CCPA-verwijderbrief.',
    ],
  },
  'optout-gb-open-register': {
    title: 'Meld je af van het VK open kiesregister',
    summary:
      "Het 'open' register wordt verkocht aan marketeers en persoonszoekmachines. Meld je af via je plaatselijke gemeente — je blijft op het volledige register voor stemmen en kredietcontroles.",
    urlLabel: 'Hoe af te melden',
  },
  'optout-ie-edited-register': {
    title: 'Stap over op het Ierse bewerkte kiesregister',
    summary:
      "Het volledige Ierse register mag voor niet-electorale doeleinden worden gebruikt; het bewerkte register wordt niet verkocht voor marketing. Kies het bewerkte register bij registratie of wanneer je je gegevens bijwerkt.",
    urlLabel: 'Controleer het register',
  },
  'es-asnef': {
    title: 'Controleer je ASNEF-kredietdossier (Equifax Iberia)',
    summary:
      "ASNEF (beheerd door Equifax) is het belangrijkste Spaanse achterstalligheids- en kredietregister — frauduleuze onbetaalde accounts die op jouw naam zijn geopend, staan hier. Spanje heeft geen preventieve bevriezing, dus het dossier lezen is hoe je fraude ontdekt.",
    steps: [
      "Op de site van Equifax, zoek 'derecho de acceso' (toegangsrecht) en dien een verzoek in met een kopie van je DNI.",
      'Ze moeten binnen een maand gratis antwoorden.',
      "Controleer op accounts of schulden die je niet herkent — dat is het fraudesignaal.",
      'Herhaal dit ongeveer eens per jaar en na elke lekmelding.',
    ],
    urlLabel: 'Equifax — consumidores',
  },
  'es-cirbe': {
    title: 'Vraag je CIRBE-rapport aan (Banco de España)',
    summary:
      "CIRBE is het centrale kredietregister van de Banco de España — het bevat alle leningen en kredieten die op jouw ID zijn geregistreerd. De betrouwbaarste manier om op jouw naam afgesloten krediet te ontdekken.",
    steps: [
      'Ga naar de Banco de España Sede Electrónica → CIRBE → vraag je rapport aan.',
      "Identificeer je met een certificado digital of Cl@ve (of vraag per post of persoonlijk aan met je DNI).",
      'Gratis en online doorgaans direct beschikbaar.',
      'Controleer op leningen die jij niet hebt afgesloten.',
    ],
    urlLabel: 'Banco de España (sede)',
  },
  'uk-cifas-pr': {
    title: 'Voeg Cifas Protective Registration toe (VK)',
    summary:
      "Het Britse equivalent van een kredietbevriezing: een markering op je dossier die kredietverstrekkers vertelt extra ID-controles uit te voeren voor ze krediet op jouw naam openen. Betaald (~£30 voor twee jaar), de moeite waard als je een verhoogd risico hebt.",
    steps: [
      'Vraag Protective Registration aan via de Cifas-website.',
      'Kredietverstrekkers zien dan de markering en moeten extra stappen nemen om te verifiëren dat het echt jij bent.',
      'Verwacht dat je eigen kredietaanvragen trager worden zolang het actief is — dat is de bedoeling.',
    ],
    urlLabel: 'Cifas',
  },
  'pihole': {
    title: 'Blokkeer trackers netwerk-breed met Pi-hole',
    summary:
      "Een Pi-hole blokkeert tracker- en advertentiedomeinen voor elk apparaat op je netwerk — telefoons, tv's, alles — op DNS-niveau, voor ze ooit verbinding maken. Één apparaat, dekking voor het hele huis.",
    steps: [
      'Installeer Pi-hole op een Raspberry Pi of elke altijd-aan Linux-box.',
      'Wijs de DNS van je router daarop om, zodat elk apparaat automatisch gedekt is.',
      'Voeg blokkeringslijsten toe; bekijk het querylog om te zien wat je apparaten naar huis stuurden.',
    ],
    urlLabel: 'Pi-hole',
  },
  'code-word': {
    title: 'Stel een familie-codewoord in tegen stemkloonfraude',
    summary:
      "AI kan een stem klonen uit seconden audio en een panekerige 'ik ben het, stuur geld'-oproep nabootsen. Een gedeeld familiecodewoord dat alleen jullie kennen, verslaat dat direct — goedkoop en een van de meest waardevolle dingen die je kunt doen.",
    steps: [
      'Spreek een woord of zin af met naaste familie dat een vreemde niet kan raden.',
      'Regel: elk dringend verzoek om geld of een geheim via telefoon of bericht moet het bevatten, anders is het nep.',
      'Sla het woord nooit digitaal op op een plek waar het kan uitlekken.',
    ],
    internalLabel: '🔑 Stel je codewoord in',
  },
  'dont-pay-removers': {
    title: 'Betaal geen verwijderservice voor datamakelaars',
    summary:
      "Betaalde diensten (DeleteMe, Incogni…) verwijderen slechts een kleine greep makelaars, blazen hun 'verwijderde vermeldingen'-aantallen op en factureren voor altijd — en veel lovende reviews zijn betaalde sponsoring. De opt-outs waarvoor ze rekenen zijn dezelfde gratis opt-outs in deze app.",
    steps: [
      'Doe de gratis makelaars-opt-outs in de Makelaarslaag zelf — dezelfde makelaars, geen abonnement.',
      'Kredietbureau- en afgeleide/marketinggegevens kunnen door deze diensten toch grotendeels niet worden verwijderd.',
      'Als je het gemak op prijs stelt, prima — weet dan wel wat je echt koopt.',
    ],
  },
  'poison-profile': {
    title: "Vergiftig in plaats van verwijder — verdun je profiel",
    summary:
      "Makelaars en platforms zetten je opnieuw op de lijst en bouwen opnieuw, dus verwijdering is een tredmolen. Plausibele ruis toevoegen aan je EIGEN laag-risico-accounts ondermijnt het vertrouwen van iedereen in welke gegevens de echte jou zijn. De Lokaaskit genereert die ruis.",
    steps: [
      'Gebruik alleen accounts die van jou zijn; streef naar saai en generiek, niet een overtuigend neppersoon.',
      "Doe je nooit voor als iemand anders, schrijf geen neprecensies en schrijf anderen niet in.",
      "Open de Lokaaskit voor naamvarianten en opvulbio's die je kunt plakken.",
    ],
    internalLabel: '⬡ Open Lokaaskit',
  },
  'vary-writing-style': {
    title: 'Varieer je schrijfstijl per identiteit',
    summary:
      "Stilometrie kan je accounts koppelen aan hoe je schrijft — favoriete zinnen, interpunctie, emoji-gewoontes — zelfs zonder gedeelde naam of IP. Als je aparte identiteiten aanhoudt, schrijf ze dan anders.",
    steps: [
      'Kies per identiteit bewust andere gewoontes: zinslengte, interpunctie, gebruik van hoofdletters, emoji.',
      'Vermijd handtekeningzinnen en inside jokes die terugkeren over accounts.',
      'Schrijf voor hoge inzet eerst een concept, herschrijf het dan in een andere stem voor je plaatst.',
    ],
  },
  'behavioral-fingerprint': {
    title: 'Ken je gedragsfingerafdruk',
    summary:
      "Buiten cookies om profileren sites hoe je je gedraagt — typritme, scrollsnelheid, zelfs de versnellingsmeter van je telefoon. Je kunt het niet volledig wissen, maar anti-fingerprinting browsers en aparte profielen beperken het.",
    steps: [
      'Gebruik een browser die fingerprinting weerstaat (Tor Browser, of Brave met fingerprint-bescherming aan).',
      'Houd aparte browserprofielen of -apparaten aan voor aparte identiteiten zodat gedrag niet kan worden gekoppeld.',
      'Schakel bewegings- en sensortoegang uit voor sites die dat niet nodig hebben.',
    ],
  },
  'recognize-phishing': {
    title: 'Phishing herkennen en vermijden',
    summary:
      'De meeste accountovernames beginnen met een overtuigende e-mail of sms, niet met een hack. Leer de signalen kennen zodat een nep-inlogpagina nooit je wachtwoord te pakken krijgt.',
    steps: [
      'Behandel elk ongevraagd bericht over "verificatie van je account" of "verdachte activiteit" als verdacht — banken en platforms vragen nooit je wachtwoord via e-mail.',
      'Log nooit in via een link in een bericht. Open de site zelf via een bladwijzer of door het adres te typen.',
      'Controleer het echte afzenderadres en beweeg de muis over links om te zien waar ze werkelijk naartoe gaan voor je klikt.',
      'Laat je wachtwoordmanager de controle doen: als die niet automatisch invult, klopt het domein waarschijnlijk niet.',
      'Gebruik waar mogelijk een hardware-beveiligingssleutel — die is phishing-bestendig, zelfs als je wordt misleid.',
    ],
    urlLabel: 'EFF: phishing vermijden',
  },
  'iphone-lockdown-mode': {
    title: 'Lockdown Mode inschakelen op iPhone/Mac',
    summary:
      'Apple\'s Lockdown Mode verwijdert de zelden gebruikte functies waar commerciële spyware misbruik van maakt. Voor mensen met een verhoogd risico verkleint het de aanvalsruimte aanzienlijk.',
    steps: [
      'Update eerst naar de nieuwste iOS/iPadOS/macOS.',
      'Ga naar Instellingen → Privacy en beveiliging → Lockdown Mode (onderaan de lijst).',
      'Zet het aan en herstart. Het geldt voor al je Apple-apparaten die zijn aangemeld bij hetzelfde account.',
      'Verwacht dat sommige links, bijlagen en webfuncties worden beperkt — dat is de beveiliging die werkt.',
    ],
    urlLabel: 'Apple: Lockdown Mode',
  },
  'verify-signal-safety-numbers': {
    title: 'Signal-veiligheidsnummers verifiëren',
    summary:
      'End-to-end-versleuteling beschermt je alleen als je met de echte persoon praat. Het veiligheidsnummer verifiëren sluit een man-in-the-middle uit.',
    steps: [
      'Open een Signal-gesprek → tik op de naam van het contact → Veiligheidsnummer bekijken.',
      'In persoon: scan elkaars QR-code; op afstand: vergelijk het nummer via een apart vertrouwd kanaal.',
      'Tik op "Markeer als geverifieerd" zodra ze overeenkomen.',
      'Als het veiligheidsnummer ooit onverwacht verandert, controleer dan waarom voor je iets gevoeligs verstuurt.',
    ],
    urlLabel: 'Signal: veiligheidsnummers',
  },
  'detect-bluetooth-trackers': {
    title: 'Verborgen Bluetooth-trackers opsporen',
    summary:
      'AirTags en Tile-achtige trackers zijn goedkope stalkinghulpmiddelen. Telefoons kunnen je nu waarschuwen voor een onbekende tracker die met je meereist — zorg dat detectie aan staat en weet hoe je handmatig kunt scannen.',
    steps: [
      'iPhone: houd Bluetooth en Locatie aan; iOS waarschuwt je voor een onbekende AirTag/Find My-tracker die met je meereist. Tik op de melding om hem een geluid te laten maken.',
      'Android: waarschuwingen voor onbekende trackers zijn ingebouwd (Instellingen → Veiligheid en noodgevallen → Waarschuwingen onbekende tracker), of installeer Apple\'s "Tracker Detect" om handmatig te scannen.',
      'Als je een tracker vindt die niet van jou is, kun je hem uitschakelen door de batterij te verwijderen — maar als je je in gevaar voelt, bewaar hem dan en neem eerst contact op met lokale hulpdiensten of de politie.',
    ],
    urlLabel: 'Apple: ongewenste tracking',
  },
}
