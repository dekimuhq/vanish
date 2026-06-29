import type { ContentOverlay } from './types'

// sv catalog overlay (keyed by action id). Missing ids/fields fall back to English.
export const sv: ContentOverlay = {
  'google-yourself': {
    title: 'Googla ditt eget namn',
    summary:
      'Sök på ditt namn (+ ort, + telefon) i ett privat fönster och ta skärmbild av de översta resultaten. Det här är din baslinje — du kan bara mäta borttagning mot vad du kan se.',
    steps: [
      'Öppna ett privat/inkognitofönster så att personanpassade resultat inte vilseleder dig.',
      'Sök: ditt namn, sedan "namn + ort", sedan ditt telefonnummer, sedan din e-post.',
      'Ta skärmbild av de två första sidorna för varje sökning. Notera alla sidor som exponerar en adress, telefon, anhöriga eller foton.',
      'De här sidorna blir din mållista i Datamäklare-nivån.',
    ],
    urlLabel: 'Sök på Google',
  },
  'hibp': {
    title: 'Kontrollera Have I Been Pwned',
    summary:
      'Ange din e-post för att se vilka intrång som exponerat den, och vilka lösenord du behöver ändra. Den kanoniska, kostnadsfria intrångsdatabasen.',
    urlLabel: 'Kontrollera HIBP',
  },
  'mozilla-monitor': {
    title: 'Konfigurera Mozilla Monitor',
    summary: 'Kostnadsfria löpande intrångsvarningar för upp till 20 e-postadresser, med HIBP-databasen.',
    urlLabel: 'Öppna Monitor',
  },
  'password-manager': {
    title: 'Installera en lösenordshanterare',
    summary:
      'Börja använda Bitwarden eller KeePass. Det är grunden för unika lösenord och för att hitta varje konto du någonsin skapat.',
    urlLabel: 'Hämta Bitwarden',
  },
  'change-breached-passwords': {
    title: 'Ändra återanvända och komprometterade lösenord',
    summary:
      'För varje konto som flaggats av Have I Been Pwned — och överallt där du återanvänt ett lösenord — sätt ett nytt unikt lösenord från din hanterare.',
    steps: [
      'Börja med "nycklarna till kungadömet": e-post, sedan bank, sedan lösenordshanteraren.',
      'Återanvänd aldrig ett lösenord på två ställen. Låt hanteraren generera dem.',
      'Om ett konto har förekommit i ett intrång, anta att det gamla lösenordet är offentligt.',
    ],
  },
  'delete-dormant-accounts': {
    title: 'Radera inaktiva konton',
    summary:
      'Varje gammalt konto är en intrångsyta och en källa för datamäklare. Använd en JustDeleteMe-liknande katalog med direkta raderingslänkar, sorterade efter svårighetsgrad.',
    steps: [
      'Din lösenordshanterare och gamla inkorgsökningar ("välkommen", "verifiera ditt konto") avslöjar glömda konton.',
      'Använd svårighetsbetygningen: grönt = ett klick, rött = du måste mejla support.',
      'Radera, inaktivera inte — inaktiverade konton behåller fortfarande dina uppgifter.',
    ],
    urlLabel: 'Öppna JustDeleteMe',
  },
  'optout-truepeoplesearch': {
    title: 'Avanmäl dig från TruePeopleSearch',
    summary: 'Skicka in en borttagningsbegäran — ingen e-post eller ID krävs, nästan omedelbart. En av de snabbaste synliga vinsterna.',
    urlLabel: 'Ta bort mig',
  },
  'optout-fastpeoplesearch': {
    title: 'Avanmäl dig från FastPeopleSearch',
    summary: 'Snabb formulärborttagning, inget ID krävs.',
    urlLabel: 'Ta bort mig',
  },
  'optout-usphonebook': {
    title: 'Avanmäl dig från USPhoneBook',
    summary: 'Snabb borttagning, inget ID krävs.',
    urlLabel: 'Ta bort mig',
  },
  'google-results-about-you': {
    title: 'Googles "Resultat om dig"',
    summary:
      'Använd Googles eget verktyg för att begära borttagning av sidor som exponerar ditt telefonnummer, hemadress eller e-post från sökresultaten.',
    urlLabel: 'Öppna verktyget',
  },
  'google-ad-personalization': {
    title: 'Stäng av Googles annonsanpassning',
    summary: 'Inaktivera personanpassade annonser kopplade till din Google-kontoprofil.',
    urlLabel: 'Annonsinställningar',
  },
  'reset-advertising-id': {
    title: 'Återställ telefonens reklam-ID',
    summary: 'Avbryt den beständiga identifierare som annonsteknik använder för att följa dig mellan appar.',
    steps: [
      'iOS: Inställningar → Integritet och säkerhet → Spårning → stäng av "Tillåt appar att begära spårning".',
      'iOS: Inställningar → Integritet och säkerhet → Apple Advertising → stäng av Personanpassade annonser.',
      'Android: Inställningar → Integritet → Annonser → Ta bort reklam-ID (eller återställ det).',
    ],
  },
  'prune-social-profiles': {
    title: 'Rensa offentliga sociala profiler',
    summary:
      'Sätt gamla inlägg och profiler till privata; ta bort födelsedag, telefon, adress och hemort från allt som är offentligt.',
    steps: [
      'Facebook: Inställningar → Integritet → "Begränsa tidigare inlägg"; granska Om-sektionen fält för fält.',
      'Instagram/X: byt till privat om möjligt; ta bort plats, kontakt och födelsedag från bio.',
      'LinkedIn: dölj kontakter och kontaktuppgifter från icke-kontakter.',
    ],
  },
  'bulk-delete-posts': {
    title: 'Massborttagning av gamla inlägg',
    summary: 'Rensa gamla inlägg med plattformens egna nedladdnings- och raderingsverktyg.',
    steps: [
      'X: Inställningar → "Ladda ner ett arkiv" först, använd sedan ett massborttagningsverktyg.',
      'Facebook: Aktivitetslogg → filtrera efter år → massborttagning eller arkivering.',
      'Exportera alltid ett arkiv till dig själv innan du masstradera.',
    ],
  },
  'unsubscribe-marketing': {
    title: 'Avsluta prenumeration på marknadsföringslistor',
    summary:
      'Massavsluta nyhetsbrev. Minskar löpande dataexponering och begränsar skadeverkningarna vid nästa intrång.',
    steps: [
      'Sök i din inkorg efter "avsluta prenumeration" och jobba uppifrån och ned.',
      'Föredra avanmälningslänken i mejlet framför att markera som skräp (renare borttagning).',
      'För avsändare som ignorerar det är det ett kandidatfall för ett GDPR/CCPA-brev senare.',
    ],
  },
  'unlist-caller-id': {
    title: 'Ta bort ditt nummer från nummerpresentationsappar',
    summary: 'Avlista ditt nummer från folkbaserade nummerpresentationsdatabaser som Truecaller och Hiya.',
    urlLabel: 'Truecaller-avlistning',
  },
  'revoke-third-party-apps': {
    title: 'Granska och återkalla tredjepartsappars åtkomst',
    summary:
      'Granska appar anslutna till dina Google-/Apple-/Facebook-/Microsoft-konton och återkalla allt du inte längre använder.',
    urlLabel: 'Google-anslutningar',
  },
  'enable-2fa': {
    title: 'Aktivera tvåfaktorsautentisering på kritiska konton',
    summary:
      'Slå på appbaserad (inte SMS) tvåfaktorsautentisering för e-post, bank och din lösenordshanterare. SMS-koder kan SIM-swappas.',
    steps: [
      'Använd en autentiseringsapp (Aegis, Ente Auth eller din lösenordshanterare).',
      'Prioritera: e-post → lösenordshanterare → bank → sociala medier.',
      'Spara reservkoder i din lösenordshanterare, inte på papper vid skrivbordet.',
    ],
  },
  'wipe-old-devices': {
    title: 'Rensa data innan du gör dig av med enheter',
    summary: 'Fabriksåterställ och kryptera telefoner, bärbara datorer och diskar innan du säljer eller återvinner dem.',
    steps: [
      'Se till att fullständig diskkryptering är aktiverad först (det gör rensningen effektivt oåterkalleltig).',
      'Logga ut från alla konton (särskilt Hitta min / Google-kontolåset) innan du återställer.',
      'Fabriksåterställ sedan. För roterande hårddiskar, en flerpassrensning; SSD-skivor använder den inbyggda säkra raderingen.',
    ],
  },
  'optout-smartbackgroundchecks': {
    title: 'Avanmäl dig från SmartBackgroundChecks',
    summary: 'Snabb formulärborttagning, inget ID krävs — ytterligare en personssöksida som dyker upp i namnsökningar.',
    urlLabel: 'Ta bort mig',
  },
  'ad-industry-optout': {
    title: 'Avanmäl dig från intressebaserade annonser (DAA/NAI)',
    summary:
      'Använd annonsbranschens självreglerade verktyg för att avanmäla den här webbläsaren från beteendebaserad annonsinriktning i ett svep. Cookie-baserat — gör om det efter att ha rensat cookies eller i en ny webbläsare.',
    urlLabel: 'DAA WebChoices',
  },
  'optout-spokeo': {
    title: 'Avanmäl dig från Spokeo',
    summary: 'Klistra in din profil-URL och bekräfta via e-post.',
    urlLabel: 'Avanmäl',
  },
  'optout-whitepages': {
    title: 'Avanmäl dig från Whitepages',
    summary: 'Skicka en begäran om undertryckning; kräver ofta ett verifieringssteg via telefon. Rankar högt i namnsökningar.',
    urlLabel: 'Begäran om undertryckning',
  },
  'optout-peopleconnect': {
    title: 'Avanmäl dig från PeopleConnect-nätverket',
    summary:
      'En begäran om undertryckning täcker Intelius, BeenVerified, Instant Checkmate, TruthFinder och USSearch. Den enskilt mest effektiva datamäklaråtgärden.',
    urlLabel: 'Undertryck alla 5',
  },
  'optout-radaris': {
    title: 'Avanmäl dig från Radaris',
    summary: 'Begär och ta bort din profil; kräver en e-postbekräftelse.',
    urlLabel: 'Kontrollera integritet',
  },
  'optout-mylife': {
    title: 'Avanmäl dig från MyLife',
    summary: 'Skicka in en integritets-/CCPA-begäran. MyLife driver ihållande "ryktespoäng"-profiler och är notoriskt svårt att ta bort.',
    urlLabel: 'CCPA-begäran',
  },
  'optout-nuwber': {
    title: 'Avanmäl dig från Nuwber',
    summary: 'Ta bort via länk plus e-postbekräftelse.',
    urlLabel: 'Ta bort mig',
  },
  'optout-thatsthem': {
    title: "Avanmäl dig från That's Them",
    summary: 'Enkel formulärborttagning.',
    urlLabel: 'Avanmäl',
  },
  'optout-peoplefinders': {
    title: 'Avanmäl dig från PeopleFinders',
    summary: 'Formulär plus e-postbekräftelse.',
    urlLabel: 'Avanmäl',
  },
  'optout-familytreenow': {
    title: 'Avanmäl dig från FamilyTreeNow',
    summary: 'Tar bort förvånansvärt djupa adress- och anhöriggrafer.',
    urlLabel: 'Avanmäl',
  },
  'optout-acxiom': {
    title: 'Avanmäl dig från Acxiom',
    summary: 'En av de största marknadsföringsdataaggregatorerna — att stänga av den minskar tillförseln till många mindre datamäklare.',
    urlLabel: 'Avanmäl',
  },
  'optout-oracle': {
    title: 'Avanmäl dig från Oracle Data Cloud',
    summary: 'Skicka in avanmälningen för datamolnet. Oracle avvecklar sin annonsverksamhet — verifiera den aktuella processen.',
    urlLabel: 'Integritet / avanmälan',
  },
  'optout-epsilon': {
    title: 'Avanmäl dig från Epsilon',
    summary: 'Avanmälan från marknadsföringsdataaggregator.',
    urlLabel: 'Avanmäl',
  },
  'optout-experian-marketing': {
    title: 'Avanmäl dig från Experians marknadsföring',
    summary: 'Marknadsföringsavanmälan, separat från din kreditfil.',
    urlLabel: 'Avanmäl',
  },
  'private-browser': {
    title: 'Byt till en integritetsvänlig webbläsare',
    summary: 'Börja använda Firefox eller Brave med spårningsskydd aktiverat som standard.',
    urlLabel: 'Hämta Firefox',
  },
  'tracker-blocker': {
    title: 'Lägg till ett innehålls-/spårningsblockerare',
    summary: 'Installera uBlock Origin för att blockera annonser och spårare på webben.',
    urlLabel: 'Hämta uBlock Origin',
  },
  'private-search': {
    title: 'Byt standardsökmotor',
    summary: 'Flytta till en icke-spårande sökmotor som DuckDuckGo, Startpage eller Brave Search.',
    urlLabel: 'Prova DuckDuckGo',
  },
  'email-aliases': {
    title: 'Börja använda e-postalias',
    summary:
      'Använd ett unikt alias per tjänst så att ett framtida intrång inte kan koppla ihop dina konton — och du kan döda vilket alias som helst som börjar få skräppost.',
    urlLabel: 'Hämta SimpleLogin',
  },
  'optout-prescreen': {
    title: 'Avanmäl dig från förgranskning av kreditkortserbjudanden (USA)',
    summary: 'Stoppa förgranskning av kredit- och försäkringserbjudanden — det här är massförsäljning av dina kredituppgifter.',
    urlLabel: 'Avanmäl (5 år / permanent)',
  },
  'freeze-credit': {
    title: 'Frys ditt kreditregister',
    summary: 'Lägg en säkerhetsfrysning hos alla tre kreditbyråerna för att blockera kontobedrägeri. Kostnadsfritt i USA.',
    urlLabel: 'Equifax-frysning',
    steps: [
      'Frys alla tre: Equifax, Experian och TransUnion (var och en är separat).',
      'En frysning blockerar att ny kredit öppnas i ditt namn; du "tinar" tillfälligt när du behöver kredit.',
      'Det påverkar inte ditt kreditbetyg och är kostnadsfritt enligt lag.',
    ],
  },
  'disable-location-history': {
    title: 'Inaktivera telefonens platshistorik',
    summary: 'Stäng av Google Platshistorik / iOS Viktiga platser och rensa den lagrade historiken.',
    urlLabel: 'Aktivitetskontroller',
  },
  'schedule-broker-recheck': {
    title: 'Schemalägg en datamäklarkontroll',
    summary:
      'Datamäklare återlistar dig inom 3–6 månader. Vanish spårar när varje avanmälan ska göras om — det här bekräftar att du förbinder dig till rutinen.',
  },
  'broker-letter': {
    title: 'Brev: radera mig (inget självbetjäningsformulär)',
    summary:
      'För datamäklare och företag utan ett självbetjäningsformulär, generera ett GDPR/CCPA-raderingsbrev och skicka det själv.',
  },
  'optout-checkpeople': {
    title: 'Avanmäl dig från CheckPeople',
    summary: 'Formulärborttagning för ytterligare en personssöksaggregator.',
    urlLabel: 'Avanmäl',
  },
  'optout-dmachoice': {
    title: 'Avanmäl dig från direktreklam per post (DMAchoice)',
    summary:
      'Registrera dig hos Data & Marketing Associations e-posttjänst för att minska skräppost. En liten engångsavgift täcker en flerårig registrering.',
    urlLabel: 'DMAchoice',
  },
  'youronlinechoices': {
    title: 'Avanmäl dig från EU-intressebaserade annonser',
    summary:
      'Använd EDAA YourOnlineChoices-verktyget för att avanmäla den här webbläsaren från beteendebaserad annonsinriktning i deltagande nätverk. Cookie-baserat — gör om efter att ha rensat cookies.',
    urlLabel: 'Your Online Choices',
  },
  'encrypted-dns-devices': {
    title: 'Ställ in krypterad DNS på varje enhet',
    summary:
      'Peka din telefon och bärbara dator mot en krypterad, integritetsvänlig resolver så att din internetleverantör inte kan logga varje webbplats du slår upp.',
    steps: [
      'Välj en loggfri resolver: Quad9 (9.9.9.9) eller NextDNS.',
      'iOS/macOS: installera leverantörens konfigurationsprofil, eller ange DNS-over-HTTPS i Inställningar.',
      'Android 9+: Inställningar → Nätverk → Privat DNS → ange leverantörens värdnamn.',
      'Det kompletterar DNS på routernivå — enheter behåller det när du är utanför hemnätverket.',
    ],
    urlLabel: 'Quad9',
  },
  'harden-messaging-privacy': {
    title: 'Härda sekretessinställningarna för meddelandeappar',
    summary: 'Slå på de sekretessverktyg som redan finns inbyggda i de appar du använder — innan du migrerar något.',
    steps: [
      'Aktivera försvinnande meddelanden som standard där det stöds (Signal, WhatsApp, Telegram).',
      'Dölj "senast sedd", läskvitton och profilbild från icke-kontakter.',
      'Lås appen bakom PIN/biometri och stäng av meddelandeförhandsvisningar på låsskärmen.',
      'Granska gruppinbjudningsinställningar så att okända inte kan lägga till dig i grupper.',
    ],
  },
  'remove-outdated-google': {
    title: 'Ta bort föråldrade sidor från Google',
    summary:
      'När en sida om dig ändras eller raderas men fortfarande visar gammalt cachat innehåll i sökningen, be Google uppdatera eller ta bort det.',
    urlLabel: 'Ta bort föråldrat innehåll',
  },
  'optout-es-listarobinson': {
    title: 'Registrera dig i Lista Robinson',
    summary:
      'Spaniens officiella reklamexkluderingslista (driven av Adigital). När du är registrerad kan medlemsföretag inte ringa, skicka SMS, post eller e-post med marknadsföring till dig.',
    urlLabel: 'Lista Robinson',
  },
  'optout-it-rpo': {
    title: 'Registrera dig i Registro Pubblico delle Opposizioni',
    summary:
      'Italiens offentliga invändningsregister. Registrera ditt telefonnummer (och postadress) för att blockera operatörer som måste konsultera det innan de marknadsför till dig.',
    urlLabel: 'Registro Opposizioni',
  },
  'optout-fr-bloctel': {
    title: 'Registrera dig i Bloctel',
    summary:
      'Frankrikes officiella register för att stoppa kalla samtal. Listade nummer kan inte lagligt användas för telefonmarknadsföring av företag du inte har avtal med.',
    urlLabel: 'Bloctel',
  },
  'optout-de-robinsonliste': {
    title: 'Registrera dig i Robinsonliste',
    summary:
      'Tysklands centrala reklam-avanmälningslista (driven av DDV). Minskar adresserad marknadsföringspost, samtal och e-post från deltagande företag.',
    urlLabel: 'Robinsonliste (DDV)',
  },
  'optout-be-donotcallme': {
    title: 'Registrera dig i Do Not Call Me-listan',
    summary:
      'Belgiens officiella spärrlista. När du är listad kan ditt nummer inte användas för telefonmarknadsföring. Registrering sker via telefon.',
    urlLabel: 'Do Not Call Me',
  },
  'optout-pt-amd': {
    title: 'Gå med i Lista de Oposição (AMD)',
    summary:
      'Portugals konsumentinvändningslista. Registrera dig för att stoppa direktmarknadsföringssamtal och post från företag som är bundna av registret.',
    urlLabel: 'Lista de Oposição',
  },
  'optout-se-hitta': {
    title: 'Ta bort din kontaktsida från Hitta.se',
    summary:
      'Sveriges offentlighetsprincip gör din adress lätt att hitta. Dölj din Hitta.se-kontaktsida — borttagning görs med BankID.',
    urlLabel: 'Ta bort mig',
  },
  'optout-se-ratsit': {
    title: 'Ta bort din uppgift från Ratsit',
    summary: 'Ratsit återpublicerar svenska offentliga register — adress, ålder, ekonomi. Ta bort din kostnadsfria offentliga notering med BankID.',
    urlLabel: 'Ta bort',
  },
  'optout-se-mrkoll': {
    title: 'Dölj dina uppgifter på MrKoll',
    summary: 'MrKoll återpublicerar svenska offentliga register. Dölj din adress och ditt telefonnummer — BankID krävs.',
    urlLabel: 'Ändra uppgifter',
  },
  'optout-de-dastelefonbuch': {
    title: 'Ta bort din DasTelefonbuch / DasÖrtliche-post',
    summary: 'Ta bort eller begränsa din notering i Tysklands viktigaste offentliga telefonkataloger (DasTelefonbuch, DasÖrtliche).',
    urlLabel: 'Hantera notering',
  },
  'optout-at-ecg': {
    title: 'Lägg till dig i ECG-Liste',
    summary:
      'Österrikes exkluderingslista för elektronisk marknadsföring (driven av RTR). Att registrera din adress avanmäler dig från oönskad marknadsföring via e-post och SMS.',
    urlLabel: 'ECG-Liste',
  },
  'optout-dk-robinson': {
    title: 'Gå med i Robinsonlisten',
    summary:
      'Danmarks officiella reklamskyddslista, driven via det centrala personregistret (CPR). Blockerar adresserad reklampost och marknadsföringssamtal.',
    urlLabel: 'Robinsonlisten',
  },
  'optout-fi-kieltopalvelu': {
    title: 'Registrera marknadsföringsförbudet (ASML)',
    summary:
      'Finlands Robinson-avanmälan, driven av marknadsföringsorganisationen ASML. Registrera dig för att stoppa telefon- och adresserad direktmarknadsföring.',
    urlLabel: 'Kieltopalvelut',
  },
  'optout-hr-nezovi': {
    title: 'Registrera dig i NE ZOVI',
    summary:
      'Kroatiens officiella spärrlista (driven av regulatorn HAKOM). Kostnadsfritt — du registrerar dig via din teleoperatör för att blockera marknadsföringssamtal.',
    urlLabel: 'NE ZOVI',
  },
  'private-email-provider': {
    title: 'Migrera till en privat e-postleverantör',
    summary: 'Flytta din primära brevlåda till Proton eller Tuta och börja vidarebefordra och migrera dina konton.',
    urlLabel: 'Proton Mail',
  },
  'signal': {
    title: 'Flytta kommunikationen till Signal',
    summary: 'Gör Signal till din standardmessenger och fasa ut SMS/WhatsApp för allt känsligt.',
    urlLabel: 'Hämta Signal',
  },
  'hardware-keys': {
    title: 'Lägg till hårdvarusäkerhetsnycklar',
    summary: 'Registrera FIDO2-nycklar (t.ex. YubiKey) på e-post, bank, lösenordshanterare och molnkonton.',
    steps: [
      'Köp två nycklar — en primär och en reserv förvarad på ett säkert ställe.',
      'Registrera båda på varje kritiskt konto innan du tar bort svagare 2FA-metoder.',
      'Hårdvarunycklar är phishing-säkra; de är den starkaste andrafaktorn som finns.',
    ],
  },
  'full-broker-sweep': {
    title: 'Fullständig datamäklarsökning',
    summary: 'Gå igenom hela datamäklarlistan från topp till botten och logga varje avanmälningsdatum så att omgranskningstimerna är korrekta.',
  },
  'e2ee-storage': {
    title: 'Byt till E2EE-molnlagring',
    summary: 'Ersätt Drive/Dropbox med end-to-end-krypterad lagring så att leverantören inte kan läsa dina filer.',
    urlLabel: 'Proton Drive',
  },
  'degoogle-services': {
    title: 'Av-googla kärntjänster',
    summary: 'Ersätt Maps, Docs och Photos med integritetsvänliga alternativ.',
    steps: [
      'Maps → Organic Maps / OsmAnd. Docs → CryptPad / OnlyOffice. Photos → Ente / Immich.',
      'Migrera en tjänst i taget så att du inte tappar tillgången till något viktigt.',
      'Exportera dina data från Google Takeout innan du raderar något.',
    ],
    urlLabel: 'Alternativ (Privacy Guides)',
  },
  'masked-phone': {
    title: 'Använd ett maskerat/VoIP-telefonnummer',
    summary: 'Ge ut ett sekundärt nummer för registreringar och håll ditt riktiga nummer privat.',
    steps: [
      'Alternativ: Google Voice (USA), MySudo eller ett billigt andra SIM/eSIM.',
      'Använd det maskerade numret för lojalitetskort, registreringar och allt icke-väsentligt.',
      'Reservera ditt riktiga nummer för betrodda kontakter och 2FA-reserv.',
    ],
  },
  'masked-cards': {
    title: 'Använd virtuella/maskerade betalkort',
    summary: 'Engångs- eller handlarsspecifika kortnummer bryter den betalningsdatalänk som datamäklare köper.',
    steps: [
      'Alternativ: Privacy.com (USA), Revoluts engångskort eller ditt banks virtuella kort.',
      'Skapa ett unikt kort per handlare; avbryt alla som läcker eller överdebiterar.',
    ],
  },
  'strip-exif': {
    title: 'Ta bort fotometadata innan du publicerar',
    summary: 'Ta bort EXIF/GPS-data från bilder du delar offentligt så att foton inte avslöjar var du bor eller befann dig.',
    steps: [
      'Många plattformar tar bort EXIF vid uppladdning — men inte alla, och inte i originalfilsdelningar.',
      'iOS: delningsblad → Alternativ → stäng av Plats. Android: använd en metadataborttagningsapp.',
      'Dator: ExifTool, eller "Ta bort egenskaper" i Windows filegenskaper.',
    ],
  },
  'harden-router-dns': {
    title: 'Härda hemroutern och DNS',
    summary: 'Ändra standardadmin-lösenordet, aktivera krypterad DNS och inaktivera UPnP/WPS.',
    steps: [
      'Ändra routerns adminlösenord från standardvärdet omedelbart.',
      'Ange krypterad DNS (DoH/DoT) — t.ex. Quad9 (9.9.9.9) eller NextDNS — för att stoppa din internetleverantör från att logga varje uppslag.',
      'Inaktivera UPnP och WPS; håll firmware uppdaterad.',
    ],
  },
  'segment-iot': {
    title: 'Segmentera IoT-enheter i nätverket',
    summary: 'Placera smarta hemenheter på ett gästnätverk eller VLAN för att begränsa vad de kan se och nå.',
  },
  'anti-fingerprint': {
    title: 'Skydda mot webbläsarfingeravtryck',
    summary: 'Använd anti-fingeravtrycksinställningar så att spårare inte kan identifiera din webbläsare utan cookies.',
    steps: [
      'Firefox: sätt privacy.resistFingerprinting, eller använd Mullvad Browser / Tor Browser för känsliga sessioner.',
      'Undvik att stapla exotiska tillägg — varje ett gör dig mer unik, inte mindre.',
    ],
    urlLabel: 'Testa ditt fingeravtryck',
  },
  'retire-old-email': {
    title: 'Pensionera och radera det gamla e-postkontot',
    summary: 'Efter migrering, uppdatera kvarvarande tjänster och radera sedan den gamla inkorgen så att den inte kan angripas eller utvinnas.',
    steps: [
      'Vidarebefordra den gamla inkorgen till den nya under en övergångsperiod (3–6 månader).',
      'Varje gång något anländer på den gamla adressen, uppdatera den tjänsten till den nya.',
      'När trafiken ebbar ut, exportera och radera sedan det gamla kontot.',
    ],
  },
  'gdpr-access-letter': {
    title: 'Skicka GDPR-tillgångsbegäranden (SAR)',
    summary: 'Tvinga stora datahållare att avslöja exakt vad de har om dig — underrättelse inför radering.',
  },
  'optout-lexisnexis': {
    title: 'Avanmäl dig från LexisNexis',
    summary: 'Högt värderad FCRA-aggregator som matar bakgrundskontroller; kan kräva ID-bevis.',
    urlLabel: 'Avanmäl',
  },
  'broker-registry': {
    title: 'Avanmäl via datamäklarregister',
    summary: 'Använd statliga datamäklarregister (Kalifornien, Vermont) för att hitta och avanmäla dig från datamäklare du missat.',
    urlLabel: 'CA datamäklarregister',
  },
  'maps-contributions': {
    title: 'Ta bort adress från Maps-bidrag',
    summary: 'Radera recensioner, foton och etiketter som tyst avslöjar ditt hem eller din arbetsplats.',
    urlLabel: 'Maps-aktivitet',
  },
  'cross-app-tracking-off': {
    title: 'Stäng av spårning mellan appar överallt',
    summary: 'iOS App Tracking Transparency av, Android reklam-ID inaktiverat, plats per app inställd på "aldrig/fråga".',
  },
  'optout-eu-brokers': {
    title: 'Avanmäl dig från EU-datamäklare',
    summary: 'EU/UK-boende: lämna in avanmälningar plus GDPR Artikel 17-brev till EU-verksamma datamäklare (Acxiom, Criteo, Experian UK).',
    urlLabel: 'Acxiom (globalt)',
  },
  'optout-criteo': {
    title: 'Avanmäl dig från Criteo',
    summary: 'Avanmäl dig från Criteos annonsinriktningsprofil — ett av de största beteendebaserade annonsnätverken i EU.',
    urlLabel: 'Integritet / avanmälan',
  },
  'optout-192': {
    title: 'Avanmäl dig från 192.com',
    summary:
      'Ta bort din notering från Storbritanniens viktigaste personssöksida. Mycket av dess data kommer från det öppna valmantalslängden — avanmäl dig från det hos din lokala råd också.',
    urlLabel: 'Ta bort mina uppgifter',
  },
  'optout-experian-uk': {
    title: 'Avanmäl dig från Experian UK-marknadsföring',
    summary: 'Använd Experian UKs dataportal för att kontrollera marknadsföringsanvändningen av dina uppgifter, separat från din kreditfil.',
    urlLabel: 'Dataportal',
  },
  'google-rtbf-delisting': {
    title: 'Begär EU/UK-sökavsnotering (rätten att glömmas)',
    summary:
      'EU/UK-boende kan be Google avlista specifika webbadresser om dem från namnsökresultat. Tar bort länken från sökning, inte den underliggande sidan.',
    urlLabel: 'RTBF-begäranformulär',
  },
  'disable-os-telemetry': {
    title: 'Stäng av OS-telemetri på Windows och macOS',
    summary: 'Sänk den diagnostik- och reklamdata som ditt stationära OS skickar tillbaka som standard.',
    steps: [
      'Windows: Inställningar → Integritet och säkerhet → Diagnostik och feedback → ställ in på Krävs; stäng av reklam-ID och anpassade upplevelser.',
      'macOS: Inställningar → Integritet och säkerhet → Analys och förbättringar → stäng av Dela analys; Apple Advertising → stäng av Personanpassade annonser.',
      'Granska kamera-, mikrofon- och platsbehörigheter per app medan du ändå är inne.',
    ],
  },
  'private-mailing-address': {
    title: 'Skaffa en privat postadress',
    summary:
      'Använd en CMRA/vidarebefordringsadress och sluta ange din hemadress för leveranser och registreringar. Bryter den offentliga kopplingen mellan namn och hemadress.',
    steps: [
      'Alternativ: ett kommersiellt postmottagarombud (CMRA), en virtuell brevlåda eller ett postbox.',
      'Uppdatera din adress på konton gradvis, börja med de med högst exponering.',
      'Ange aldrig din riktiga hemadress i ett registreringsformulär igen.',
    ],
  },
  'optout-electoral-register': {
    title: 'Avanmäl dig från det öppna valmantalslängden/väljarregistret',
    summary:
      'Ta bort dig själv från den offentligt sålda valmantalslängden (UK öppet register) eller väljardata (USA, per stat).',
    steps: [
      'UK: kontakta din lokala råd för att avanmäla dig från det "öppna" valmantalslängden (du finns kvar på det fullständiga registret för röstning).',
      'USA: väljarregler är per stat; vissa tillåter konfidentiell/undanhållen status, särskilt för överlevare.',
    ],
  },
  'suppress-public-records': {
    title: 'Undertryck hemadress i offentliga register',
    summary:
      'Använd adresskonfidentialitetsprogram eller fastighetsregisterredigering där du är berättigad (starkt för misshandelsoffer).',
    steps: [
      'USA: de flesta stater driver ett Address Confidentiality Program (ACP) för offer för stalkning/misshandel.',
      'Fastighetsregister: vissa kommuner tillåter redigering för utsatta individer — fråga kommunens registeransvariga.',
      'Det här är jurisdiktionsspecifikt; en lokal brottsofferorganisation kan hjälpa dig att lämna in.',
    ],
  },
  'compartmentalize-identities': {
    title: 'Separera identiteter',
    summary: 'Håll e-post, telefon och kort separata per livskontext (jobb / privat / shopping / ekonomi) så att inget enskilt läckage kartlägger hela ditt liv.',
  },
  'degoogled-phone': {
    title: 'Byt till en av-Googlad telefon (GrapheneOS)',
    summary: 'Använd ett härdat OS utan inbyggda Google-tjänster som din primära telefon.',
    urlLabel: 'GrapheneOS',
  },
  'always-vpn-tor': {
    title: 'Alltid-på VPN / Tor för känslig användning',
    summary: 'Dirigera känslig surfning via ett pålitligt loggfritt VPN (t.ex. Mullvad) eller Tor.',
    urlLabel: 'Mullvad VPN',
  },
  'burner-devices': {
    title: 'Engångsenheter/sekundära enheter för resor',
    summary: 'Bär minimaldataenheter över gränser och in i högrisksammanhang.',
  },
  'trust-llc-home': {
    title: 'Använd en trust/LLC för hem och tillgångar',
    summary:
      'Bryt den offentliga kopplingen namn↔adress i fastighetsregister genom att hålla tillgångar i en trust eller LLC. Rådfråga en expert — det här är inte juridisk rådgivning.',
  },
  'quarterly-reremoval': {
    title: 'Kvartalsvisa borttagningskampanjer',
    summary: 'Kör om hela datamäklarsökningen varje kvartal och logga datumen. Borttagning är en vana, inte en engångsgrej.',
  },
  'threat-model-review': {
    title: 'Hotmodellsgranskning varje kvartal',
    summary:
      'Omvärdera vem du skyddar dig mot och justera. Använd EFF Surveillance Self-Defense-ramverket.',
    urlLabel: 'EFF SSD-plan',
  },
  'remove-osint-aggregators': {
    title: 'Ta bort dig från intrångs-/OSINT-söksajter',
    summary: 'Begär borttagning från läckagesök- och OSINT-aggregationssajter där det är möjligt.',
  },
  'scrub-org-sites': {
    title: 'Ta bort dig från gamla arbetsgivares/organisationers sidor',
    summary: 'Begär borttagning av biografier, personalsidor och pressnotiser som exponerar dina uppgifter. Använd ett brev om du ignoreras.',
  },
  'optout-court-arrest-records': {
    title: 'Undertryck domstols- och arrestpostaggregatorerna',
    summary:
      'Sajter som återpublicerar muggshotar, arrestloggar och domstolshandlingar är en hög-skadlig exponering även när anklagelserna lades ned. Begär borttagning från varje; vissa kräver ID eller ett domstolsutslag.',
    steps: [
      'Lista sajterna som visar dina uppgifter (från din Nivå-1-namnsöksbaslinje).',
      'Använd varje sajts borttagningssida; för muggshotssajter, betala aldrig en "nedtagningsavgift" — det finansierar racket. Citera delstatliga anti-muggshotlagar där de finns.',
      'För officiella domstolsportaler, fråga tjänstemannen om försegling/utplåning — den enda hållbara lösningen.',
      'Där en sajt ignorerar dig, eskalera med ett GDPR/CCPA-raderingsbrev.',
    ],
  },
  'optout-gb-open-register': {
    title: 'Avanmäl dig från det brittiska öppna valmantalslängden',
    summary:
      'Det "öppna" registret säljs till marknadsförare och personssöksajter. Avanmäl dig via din lokala råd — du finns kvar på det fullständiga registret för röstning och kreditkontroller.',
    urlLabel: 'Hur man avanmäler sig',
  },
  'optout-ie-edited-register': {
    title: 'Byt till det irländska redigerade valmantalslängden',
    summary:
      'Irlands fullständiga register kan användas för icke-valändamål; det redigerade registret säljs inte för marknadsföring. Välj det redigerade registret när du registrerar dig eller uppdaterar dina uppgifter.',
    urlLabel: 'Kontrollera registret',
  },
  'es-asnef': {
    title: 'Kontrollera din ASNEF-kreditfil (Equifax Iberia)',
    summary:
      'ASNEF (driven av Equifax) är Spaniens viktigaste skuld-/kreditfil — bedrägliga obetalda konton öppnade i ditt namn hamnar här. Spanien har ingen förebyggande "frysning", så att läsa filen är hur du fångar det.',
    steps: [
      'På Equifax webbplats, hitta "derecho de acceso" (rätt till tillgång) och skicka in en begäran med en kopia av ditt DNI.',
      'De måste svara inom en månad, kostnadsfritt.',
      'Kontrollera om det finns konton eller skulder du inte känner igen — det är bedrägeri-signalen.',
      'Upprepa ungefär en gång om året och efter eventuella intrångsnottifikationer.',
    ],
    urlLabel: 'Equifax — consumidores',
  },
  'es-cirbe': {
    title: 'Begär din CIRBE-rapport (Banco de España)',
    summary:
      'CIRBE är Banco de Españas centrala kreditregister — det listar varje lån/kredit registrerat under ditt ID. Det tydligaste sättet att upptäcka kredit som tagits i ditt namn.',
    steps: [
      'Gå till Banco de Españas Sede Electrónica → CIRBE → begär din rapport.',
      'Identifiera dig med certificado digital eller Cl@ve (eller begär via post / personligen med ditt DNI).',
      'Kostnadsfritt och vanligtvis omedelbart online.',
      'Granska om det finns lån du inte öppnat.',
    ],
    urlLabel: 'Banco de España (sede)',
  },
  'uk-cifas-pr': {
    title: 'Lägg till Cifas Protective Registration (UK)',
    summary:
      'Det närmaste britterna kommer ett kreditregisterfrysning: en flagga på din fil som ber långivare göra extra ID-kontroller innan de öppnar kredit i ditt namn. Betalt (~30 £ för två år), värt det om du har förhöjd risk.',
    steps: [
      'Ansök på Cifas webbplats om Protective Registration.',
      'Långivare ser då flaggan och måste ta extra steg för att verifiera att det verkligen är du.',
      'Räkna med att dina egna kreditansökningar tar längre tid medan den är aktiv — det är meningen.',
    ],
    urlLabel: 'Cifas',
  },
  'pihole': {
    title: 'Blockera spårare i hela nätverket med Pi-hole',
    summary:
      'En Pi-hole suger upp spårare och reklamdomäner för varje enhet i ditt nätverk — telefoner, TV-apparater, allt — på DNS-nivå, innan de ansluter. En enhet, hela hemmet täckt.',
    steps: [
      'Installera Pi-hole på en Raspberry Pi eller valfri alltid-på Linux-box.',
      'Peka routerns DNS mot den så att varje enhet täcks automatiskt.',
      'Lägg till blocklists; granska frågeloggen för att se vad dina enheter ringde hem till.',
    ],
    urlLabel: 'Pi-hole',
  },
  'code-word': {
    title: 'Sätt ett familje-"lösenord" mot röstklonsbedrägerier',
    summary:
      'AI kan klona en röst från sekunder av ljud och fejka ett panikartat "det är jag, skicka pengar"-samtal. Ett gemensamt familjeord som bara ni känner till avslöjar det omedelbart — billigt och en av de mest effektiva sakerna du kan göra.',
    steps: [
      'Kom överens om ett ord eller en fras med nära familj som en okänd inte kunde gissa.',
      'Regel: alla brådskande penning-/hemlighetsbegäranden via samtal eller meddelande måste innehålla det, annars behandlas det som falskt.',
      'Lagra eller skicka aldrig ordet digitalt där det kan läcka.',
    ],
    internalLabel: '🔑 Sätt ditt lösenord',
  },
  'dont-pay-removers': {
    title: "Betala inte en datamäklar-borttagningstjänst",
    summary:
      'Betalda tjänster (DeleteMe, Incogni…) rensar bara en liten del av datamäklarna, blåser upp sina "borttagna noteringar"-siffror och fakturerar för alltid — och många lysande recensioner är betalda sponsorskap. De avanmälningar de tar betalt för är de kostnadsfria här i appen.',
    steps: [
      'Gör de kostnadsfria datamäklaravelseerna i Datamäklare-nivån själv — samma datamäklare, inget abonnemang.',
      'Kreditbyrådata och inferred/marknadsföringsdata kan ändå inte raderas av dessa tjänster.',
      'Om du värdesätter bekvämligheten är det fine — du vet bara nu vad du faktiskt köper.',
    ],
  },
  'poison-profile': {
    title: "Förgifta, radera inte — späd ut din profil",
    summary:
      'Datamäklare och plattformar återlistar och återbygger, så radering är ett löpband. Att lägga till plausibelt brus på dina EGNA lågriskkonton minskar förtroendet för vilket data som är det riktiga du. Lockkod-kittet genererar bruset.',
    steps: [
      'Använd bara konton som är dina; sikta på trist och generiskt, inte en övertygande falsk person.',
      'Utge dig aldrig för att vara någon, skriv falska recensioner eller registrera andra.',
      'Öppna Lockkod-kittet för namnvarianter och fyllnadsbior du kan klistra in.',
    ],
    internalLabel: '⬡ Öppna Lockkod-kit',
  },
  'vary-writing-style': {
    title: 'Variera ditt skrivstil mellan identiteter',
    summary:
      'Stilometri kan koppla ihop dina konton via hur du skriver — favoritfraser, skiljetecken, emojis — även utan gemensamt namn eller IP. Om du håller separata identiteter, skriv dem olika.',
    steps: [
      'Välj medvetet olika vanor per identitet: meningslängd, skiljetecken, versaler, emojianvändning.',
      'Undvik signatursfraser och interna skämt som återkommer mellan konton.',
      'För höga insatser, skriv utkast, skriv sedan om i en annan röst innan du publicerar.',
    ],
  },
  'behavioral-fingerprint': {
    title: 'Känn till ditt beteendefingeravtryck',
    summary:
      'Utöver cookies profilerar sajter hur du beter dig — skrivningsrytm, scrollhastighet, till och med telefonens accelerometergång. Du kan inte helt radera det, men anti-fingeravtryckswebbläsare och separata profiler minskar det.',
    steps: [
      'Använd en webbläsare som motstår fingeravtryck (Tor Browser, eller Brave med fingeravtrycksskydd aktiverat).',
      'Håll separata webbläsarprofiler/enheter för separata identiteter så att beteende inte kan korsas.',
      'Inaktivera rörelse-/sensoråtkomst för sajter som inte behöver det.',
    ],
  },
  'recognize-phishing': {
    title: 'Känna igen och undvika nätfiske',
    summary:
      'De flesta kontokapningar börjar med ett övertygande mejl eller SMS, inte ett hackförsök. Lär dig kännetecknen så att en falsk inloggningssida aldrig får ditt lösenord.',
    steps: [
      'Behandla varje ombett "verifiera ditt konto" / "ovanlig aktivitet"-meddelande som misstänkt — banker och plattformar ber aldrig om ditt lösenord via mejl.',
      'Logga aldrig in via en länk i ett meddelande. Öppna sajten själv via ett bokmärke eller genom att skriva adressen.',
      'Kontrollera den verkliga avsändaradressen och hovra över länkar för att se vart de faktiskt leder innan du klickar.',
      'Låt din lösenordshanterare vara kontrollen: om den inte fyller i automatiskt är domänen troligen fel.',
      'Använd om möjligt en hårdvarusäkerhetsnyckel — den är nätfiske-säker även om du lurats.',
    ],
    urlLabel: 'EFF: undvik nätfiske',
  },
  'iphone-lockdown-mode': {
    title: 'Slå på Lockdown Mode på iPhone/Mac',
    summary:
      'Apples Lockdown Mode tar bort sällan använda funktioner som kommersiellt spionprogram utnyttjar. För personer med förhöjd risk krymper det attackytan avsevärt.',
    steps: [
      'Uppdatera till senaste iOS/iPadOS/macOS först.',
      'Öppna Inställningar → Integritet och säkerhet → Lockdown Mode (längst ner i listan).',
      'Slå på det och starta om. Det tillämpas på alla dina Apple-enheter inloggade på samma konto.',
      'Räkna med att vissa länkar, bilagor och webbfunktioner begränsas — det är skyddet i arbete.',
    ],
    urlLabel: 'Apple: Lockdown Mode',
  },
  'verify-signal-safety-numbers': {
    title: 'Verifiera Signals säkerhetsnummer',
    summary:
      'End-to-end-kryptering skyddar dig bara om du pratar med rätt person. Att verifiera säkerhetsnumret utesluter en man-i-mitten-attack.',
    steps: [
      'Öppna ett Signal-samtal → tryck på kontaktens namn → Visa säkerhetsnummer.',
      'Personligen: scanna varandras QR-kod; på distans: jämför numret via en separat betrodd kanal.',
      'Tryck "Markera som verifierat" när de stämmer.',
      'Om säkerhetsnumret någonsin ändras oväntat, ta reda på varför innan du skickar något känsligt.',
    ],
    urlLabel: 'Signal: säkerhetsnummer',
  },
  'detect-bluetooth-trackers': {
    title: 'Upptäck dolda Bluetooth-spårare',
    summary:
      'AirTags och Tile-liknande spårare är billiga stalkingverktyg. Telefoner kan nu varna dig för en okänd spårare som följer med dig — se till att identifiering är på och lär dig hur du söker.',
    steps: [
      'iPhone: håll Bluetooth och Plats på; iOS varnar dig om en okänd AirTag/Find My-spårare rör sig med dig. Tryck på varningen för att få den att spela ett ljud.',
      'Android: varningar för okända spårare är inbyggda (Inställningar → Säkerhet och nödsituationer → Varningar för okända spårare), eller installera Apples "Tracker Detect" för manuell sökning.',
      'Om du hittar en spårare du inte äger kan du inaktivera den genom att ta bort batteriet — men om du känner dig i fara, bevara den och kontakta lokalt stöd/myndigheter först.',
    ],
    urlLabel: 'Apple: oönskad spårning',
  },
}
