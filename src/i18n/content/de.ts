import type { ContentOverlay } from './types'

export const de: ContentOverlay = {
  'google-yourself': {
    title: 'Deinen eigenen Namen googeln',
    summary:
      'Suche deinen Namen (+ Stadt, + Telefon) in einem privaten Fenster und mache Screenshots der obersten Ergebnisse. Das ist deine Ausgangslage — Löschungen kannst du nur messen, wenn du siehst, was sichtbar ist.',
    steps: [
      'Öffne ein privates / Inkognito-Fenster, damit personalisierte Ergebnisse dich nicht täuschen.',
      'Suche: deinen Namen, dann „Name + Stadt", dann deine Telefonnummer, dann deine E-Mail-Adresse.',
      'Mache von den ersten zwei Seiten jeder Suche Screenshots. Notiere jede Website, die eine Adresse, Telefonnummer, Verwandte oder Fotos preisgibt.',
      'Diese Seiten werden deine Zielliste in der Datenhändler-Stufe.',
    ],
    urlLabel: 'Google öffnen',
  },

  'hibp': {
    title: 'Have I Been Pwned prüfen',
    summary:
      'Gib deine E-Mail-Adresse ein, um zu sehen, bei welchen Datenlecks sie aufgetaucht ist und welche Passwörter du ändern musst. Die maßgebliche, kostenlose Datenleck-Datenbank.',
    urlLabel: 'HIBP prüfen',
  },

  'mozilla-monitor': {
    title: 'Mozilla Monitor einrichten',
    summary:
      'Kostenlose laufende Datenleck-Benachrichtigungen für bis zu 20 E-Mail-Adressen, basierend auf dem HIBP-Datensatz.',
    urlLabel: 'Monitor öffnen',
  },

  'password-manager': {
    title: 'Einen Passwort-Manager installieren',
    summary:
      'Steige auf Bitwarden oder KeePass um. Das ist die Grundlage für einzigartige Passwörter und dafür, jedes Konto zu finden, das du je erstellt hast.',
    urlLabel: 'Bitwarden holen',
  },

  'change-breached-passwords': {
    title: 'Kompromittierte und wiederverwendete Passwörter ändern',
    summary:
      'Für jedes Konto, das Have I Been Pwned markiert hat — und überall, wo du ein Passwort wiederverwendet hast — setze ein frisches, einzigartiges Passwort aus deinem Manager.',
    steps: [
      "Fange mit den 'Schlüsseln zum Königreich' an: E-Mail, dann Banking, dann dein Passwort-Manager.",
      'Verwende ein Passwort nie auf zwei Websites gleichzeitig. Lass den Manager sie generieren.',
      'Wenn ein Konto bei einem Datenleck dabei war, geh davon aus, dass das alte Passwort öffentlich ist.',
    ],
  },

  'delete-dormant-accounts': {
    title: 'Ruhende Konten löschen',
    summary:
      'Jedes alte Konto ist eine potenzielle Datenleck-Fläche und eine Quelle für Datenhändler. Nutze ein JustDeleteMe-ähnliches Verzeichnis mit direkten Lösch-Links, sortiert nach Schwierigkeitsgrad.',
    steps: [
      'Dein Passwort-Manager und alte Posteingangssuchen (nach „Willkommen", „Konto bestätigen") enthüllen vergessene Konten.',
      'Nutze die Schwierigkeitsbewertung: Grün = ein Klick, Rot = du musst den Support anschreiben.',
      'Löschen, nicht nur deaktivieren — deaktivierte Konten speichern deine Daten weiterhin.',
    ],
    urlLabel: 'JustDeleteMe öffnen',
  },

  'optout-truepeoplesearch': {
    title: 'Bei TruePeopleSearch austragen',
    summary:
      'Löschung beantragen — keine E-Mail oder Ausweis erforderlich, fast sofort. Einer der schnellsten sichtbaren Erfolge.',
    urlLabel: 'Mich entfernen',
  },

  'optout-fastpeoplesearch': {
    title: 'Bei FastPeopleSearch austragen',
    summary: 'Schnelle Formularlöschung, kein Ausweis erforderlich.',
    urlLabel: 'Mich entfernen',
  },

  'optout-usphonebook': {
    title: 'Bei USPhoneBook austragen',
    summary: 'Schnelle Löschung, kein Ausweis erforderlich.',
    urlLabel: 'Mich entfernen',
  },

  'google-results-about-you': {
    title: 'Googles „Ergebnisse über dich"',
    summary:
      'Nutze Googles eigenes Tool, um die Entfernung von Seiten zu beantragen, die deine Telefonnummer, Wohnadresse oder E-Mail in den Suchergebnissen preisgeben.',
    urlLabel: 'Tool öffnen',
  },

  'google-ad-personalization': {
    title: 'Google-Werbepersonalisierung deaktivieren',
    summary: 'Personalisierte Werbung, die an dein Google-Kontoprofil geknüpft ist, abschalten.',
    urlLabel: 'Werbeeinstellungen',
  },

  'reset-advertising-id': {
    title: 'Werbe-ID deines Telefons zurücksetzen',
    summary: 'Den persistenten Bezeichner abschneiden, den die Werbetechnik nutzt, um dir über Apps hinweg zu folgen.',
    steps: [
      'iOS: Einstellungen → Datenschutz & Sicherheit → Tracking → „Apps erlauben, Tracking anzufordern" deaktivieren.',
      'iOS: Einstellungen → Datenschutz & Sicherheit → Apple Advertising → Personalisierte Werbung deaktivieren.',
      'Android: Einstellungen → Datenschutz → Werbung → Werbe-ID löschen (oder zurücksetzen).',
    ],
  },

  'prune-social-profiles': {
    title: 'Öffentliche Social-Media-Profile bereinigen',
    summary:
      'Alte Beiträge und Profile auf privat stellen; Geburtstag, Telefon, Adresse und Heimatort aus allem Öffentlichen entfernen.',
    steps: [
      'Facebook: Einstellungen → Privatsphäre → „Vergangene Beiträge einschränken"; Infos-Bereich Feld für Feld prüfen.',
      'Instagram/X: auf privat umstellen, wenn möglich; Standort, Kontaktdaten und Geburtstag aus der Bio entfernen.',
      'LinkedIn: Verbindungen und Kontaktdaten vor Nicht-Verbindungen verbergen.',
    ],
  },

  'bulk-delete-posts': {
    title: 'Alte Beiträge massenweise löschen',
    summary: 'Historische Beiträge mit plattformeigenen Download-und-Lösch-Tools bereinigen.',
    steps: [
      'X: Einstellungen → erst „Archiv herunterladen", dann einen Massenlösch-Ansatz nutzen.',
      'Facebook: Aktivitätsprotokoll → nach Jahr filtern → massenweise löschen oder archivieren.',
      'Vor dem Massenlöschen immer ein Archiv für dich selbst exportieren.',
    ],
  },

  'unsubscribe-marketing': {
    title: 'Von Marketing-Listen abmelden',
    summary:
      'Newsletter massenhaft abbestellen. Reduziert laufenden Daten-Ausstoß und verkleinert den Sprengradius des nächsten Datenlecks.',
    steps: [
      'Suche in deinem Posteingang nach „abmelden" und arbeite von oben nach unten.',
      'Bevorzuge den Abmelde-Link in der E-Mail gegenüber dem Melden als Spam (sauberere Entfernung).',
      'Für Absender, die das ignorieren, kommt später ein DSGVO/CCPA-Brief in Frage.',
    ],
  },

  'unlist-caller-id': {
    title: 'Nummer aus Anrufer-ID-Apps entfernen',
    summary:
      'Deine Nummer aus crowdgepflegten Anrufer-ID-Datenbanken wie Truecaller und Hiya austragen.',
    urlLabel: 'Truecaller-Austragung',
  },

  'revoke-third-party-apps': {
    title: 'Drittanbieter-App-Zugriffe prüfen und widerrufen',
    summary:
      'Apps prüfen, die mit deinen Google-/Apple-/Facebook-/Microsoft-Konten verbunden sind, und alles widerrufen, was du nicht mehr nutzt.',
    urlLabel: 'Google-Verbindungen',
  },

  'enable-2fa': {
    title: '2FA auf kritischen Konten aktivieren',
    summary:
      'App-basierte (nicht SMS-basierte) Zwei-Faktor-Authentifizierung für E-Mail, Bank und deinen Passwort-Manager aktivieren. SMS-Codes können durch SIM-Swapping abgefangen werden.',
    steps: [
      'Nutze eine Authenticator-App (Aegis, Ente Auth oder deinen Passwort-Manager).',
      'Priorisiere: E-Mail → Passwort-Manager → Bank → Social Media.',
      'Backup-Codes im Passwort-Manager speichern, nicht auf Papier neben dem Schreibtisch.',
    ],
  },

  'wipe-old-devices': {
    title: 'Daten vor der Entsorgung von Geräten löschen',
    summary:
      'Smartphones, Laptops und Laufwerke vor dem Verkauf oder der Entsorgung zurücksetzen und verschlüsseln.',
    steps: [
      'Zuerst sicherstellen, dass die Vollverschlüsselung aktiviert ist (das macht das Löschen effektiv unumkehrbar).',
      'Alle Konten abmelden (besonders Wo ist mein iPhone / Google-Kontosperren) bevor zurückgesetzt wird.',
      'Dann Werksreset. Für rotierende Festplatten ein Mehrfach-Überschreiben; SSDs nutzen das integrierte sichere Löschen.',
    ],
  },

  'optout-smartbackgroundchecks': {
    title: 'Bei SmartBackgroundChecks austragen',
    summary:
      'Schnelle Formularlöschung, kein Ausweis erforderlich — eine weitere Personensuche-Website, die bei Namenssuchen auftaucht.',
    urlLabel: 'Mich entfernen',
  },

  'ad-industry-optout': {
    title: 'Interessenbasierte Werbung abwählen (DAA/NAI)',
    summary:
      'Nutze die brancheneigenen Selbstregulierungstools, um diesen Browser in einem Durchgang von verhaltensbezogener Werbung abzumelden. Cookie-basiert — nach dem Löschen von Cookies oder in einem neuen Browser wiederholen.',
    urlLabel: 'DAA WebChoices',
  },

  'optout-spokeo': {
    title: 'Bei Spokeo austragen',
    summary: 'Profil-URL einfügen und per E-Mail bestätigen.',
    urlLabel: 'Austragen',
  },

  'optout-whitepages': {
    title: 'Bei Whitepages austragen',
    summary:
      'Sperrungsantrag einreichen; oft ist ein Verifizierungsschritt per Telefonanruf erforderlich. Erscheint weit oben in Namenssuchen.',
    urlLabel: 'Sperrungsantrag',
  },

  'optout-peopleconnect': {
    title: 'Beim PeopleConnect-Netzwerk austragen',
    summary:
      'Ein Sperrungsantrag deckt Intelius, BeenVerified, Instant Checkmate, TruthFinder und USSearch ab. Die wirkungsvollste Datenhändler-Maßnahme.',
    urlLabel: 'Alle 5 sperren',
  },

  'optout-radaris': {
    title: 'Bei Radaris austragen',
    summary: 'Profil beanspruchen und entfernen; E-Mail-Bestätigung erforderlich.',
    urlLabel: 'Datenschutz kontrollieren',
  },

  'optout-mylife': {
    title: 'Bei MyLife austragen',
    summary:
      'Datenschutz-/CCPA-Antrag einreichen. MyLife führt hartnäckige „Reputationswertungs"-Profile und ist notorisch schwer loszuwerden.',
    urlLabel: 'CCPA-Antrag',
  },

  'optout-nuwber': {
    title: 'Bei Nuwber austragen',
    summary: 'Entfernung über Link plus E-Mail-Bestätigung.',
    urlLabel: 'Mich entfernen',
  },

  'optout-thatsthem': {
    title: "Bei That's Them austragen",
    summary: 'Unkomplizierte Formularlöschung.',
    urlLabel: 'Austragen',
  },

  'optout-peoplefinders': {
    title: 'Bei PeopleFinders austragen',
    summary: 'Formular plus E-Mail-Abschluss.',
    urlLabel: 'Austragen',
  },

  'optout-familytreenow': {
    title: 'Bei FamilyTreeNow austragen',
    summary: 'Entfernt überraschend tiefe Adress- und Verwandtschaftsgraphen.',
    urlLabel: 'Austragen',
  },

  'optout-acxiom': {
    title: 'Bei Acxiom austragen',
    summary:
      'Einer der größten Marketing-Datenaggregat­oren — ihn abzuschneiden reduziert die Versorgung vieler kleinerer Datenhändler.',
    urlLabel: 'Austragen',
  },

  'optout-oracle': {
    title: 'Bei Oracle Data Cloud austragen',
    summary:
      'Opt-out für die Data Cloud einreichen. Oracle fährt sein Werbegeschäft zurück — aktuellen Prozess vorab prüfen.',
    urlLabel: 'Datenschutz / Opt-out',
  },

  'optout-epsilon': {
    title: 'Bei Epsilon austragen',
    summary: 'Opt-out beim Marketing-Datenaggregator.',
    urlLabel: 'Austragen',
  },

  'optout-experian-marketing': {
    title: 'Experian-Marketing abbestellen',
    summary: 'Marketing-Opt-out, getrennt von deiner Kreditauskunft.',
    urlLabel: 'Austragen',
  },

  'private-browser': {
    title: 'Auf einen datenschutzfreundlichen Browser wechseln',
    summary: 'Firefox oder Brave mit standardmäßig aktiviertem Tracking-Schutz einsetzen.',
    urlLabel: 'Firefox holen',
  },

  'tracker-blocker': {
    title: 'Einen Inhalts-/Tracker-Blocker hinzufügen',
    summary: 'uBlock Origin installieren, um Werbung und Tracker im Web zu blockieren.',
    urlLabel: 'uBlock Origin holen',
  },

  'private-search': {
    title: 'Standard-Suchmaschine wechseln',
    summary:
      'Zu einer nicht nachverfolgenden Suchmaschine wie DuckDuckGo, Startpage oder Brave Search wechseln.',
    urlLabel: 'DuckDuckGo ausprobieren',
  },

  'email-aliases': {
    title: 'E-Mail-Aliasse verwenden',
    summary:
      'Pro Dienst einen einzigartigen Alias nutzen, damit ein künftiges Datenleck deine Konten nicht verknüpfen kann — und du jeden Alias abschalten kannst, der anfängt, Spam zu empfangen.',
    urlLabel: 'SimpleLogin holen',
  },

  'optout-prescreen': {
    title: 'Vorselektierte US-Kreditangebote ablehnen',
    summary:
      'Vorselektierte Kredit- und Versicherungsangebote stoppen — dabei handelt es sich um Massenverkäufe deiner Kreditkopfdaten.',
    urlLabel: 'Austragen (5 Jahre / dauerhaft)',
  },

  'freeze-credit': {
    title: 'Kreditsperre einrichten',
    summary:
      'Eine Sicherheitssperre bei allen drei Auskunfteien einrichten, um Betrug durch neue Konten zu blockieren. In den USA kostenlos.',
    urlLabel: 'Equifax-Sperre',
    steps: [
      'Alle drei sperren: Equifax, Experian und TransUnion (jeweils separat).',
      'Eine Sperre verhindert, dass neue Kredite unter deinem Namen eröffnet werden; du „taust" vorübergehend auf, wenn du Kredit benötigst.',
      'Sie beeinflusst deine Wertung nicht und ist gesetzlich kostenlos.',
    ],
  },

  'disable-location-history': {
    title: 'Standortverlauf des Telefons deaktivieren',
    summary:
      'Google-Standortverlauf / iOS-Signifikante Orte deaktivieren und den gespeicherten Verlauf löschen.',
    urlLabel: 'Aktivitätseinstellungen',
  },

  'schedule-broker-recheck': {
    title: 'Datenhändler-Wiederholungsprüfung einplanen',
    summary:
      'Datenhändler listen dich innerhalb von 3–6 Monaten wieder auf. Vanish verfolgt, wann jedes Opt-out wiederholt werden muss — dies bestätigt, dass du dich zur Schleife verpflichtest.',
  },

  'broker-letter': {
    title: 'Brief: Lösch mich (kein Self-Service-Formular)',
    summary:
      'Für Datenhändler und Unternehmen ohne Self-Service-Opt-out einen DSGVO/CCPA-Löschbrief generieren und selbst verschicken.',
  },

  'optout-checkpeople': {
    title: 'Bei CheckPeople austragen',
    summary: 'Formularlöschung für einen weiteren Personensuche-Aggregator.',
    urlLabel: 'Austragen',
  },

  'optout-dmachoice': {
    title: 'Von Direktmailing-Marketing abmelden (DMAchoice)',
    summary:
      'Beim Mail-Preference-Service der Data & Marketing Association registrieren, um unerwünschte Werbepost zu reduzieren. Eine kleine einmalige Gebühr deckt eine mehrjährige Registrierung ab.',
    urlLabel: 'DMAchoice',
  },

  'youronlinechoices': {
    title: 'EU-interessenbasierte Werbung abwählen',
    summary:
      'Das EDAA-Tool YourOnlineChoices nutzen, um diesen Browser bei teilnehmenden Netzwerken von verhaltensbezogener Werbung abzumelden. Cookie-basiert — nach dem Löschen von Cookies wiederholen.',
    urlLabel: 'Your Online Choices',
  },

  'encrypted-dns-devices': {
    title: 'Verschlüsseltes DNS auf jedem Gerät einrichten',
    summary:
      'Dein Smartphone und Laptop auf einen verschlüsselten, datenschutzfreundlichen Resolver zeigen lassen, damit dein Internetanbieter nicht jede von dir aufgerufene Website protokollieren kann.',
    urlLabel: 'Quad9',
    steps: [
      'Einen protokollierungsfreien Resolver wählen: Quad9 (9.9.9.9) oder NextDNS.',
      'iOS/macOS: Konfigurationsprofil des Anbieters installieren oder DNS-over-HTTPS in Einstellungen setzen.',
      'Android 9+: Einstellungen → Netzwerk → Privates DNS → Hostnamen des Anbieters eingeben.',
      'Ergänzt DNS auf Routerebene — Geräte behalten es, wenn du außer Haus bist.',
    ],
  },

  'harden-messaging-privacy': {
    title: 'Datenschutzeinstellungen von Messenger-Apps absichern',
    summary:
      'Die bereits eingebauten Datenschutzoptionen in den genutzten Apps aktivieren — bevor du irgendetwas migrierst.',
    steps: [
      'Verschwindende Nachrichten standardmäßig aktivieren, wo unterstützt (Signal, WhatsApp, Telegram).',
      '„Zuletzt online", Lesebestätigungen und Profilfoto vor Nicht-Kontakten verbergen.',
      'App hinter PIN/Biometrie sichern und Nachrichten-Vorschau auf dem Sperrbildschirm deaktivieren.',
      'Gruppeneinladungseinstellungen prüfen, damit Fremde dich nicht zu Gruppen hinzufügen können.',
    ],
  },

  'remove-outdated-google': {
    title: 'Veraltete Seiten aus Google entfernen',
    summary:
      'Wenn eine Seite über dich geändert oder gelöscht wurde, aber noch alten zwischengespeicherten Inhalt in der Suche zeigt, Google um Aktualisierung oder Entfernung bitten.',
    urlLabel: 'Veraltete Inhalte entfernen',
  },

  'optout-es-listarobinson': {
    title: 'Bei der Lista Robinson registrieren',
    summary:
      'Spaniens offizielle Werbungsausschlussliste (betrieben von Adigital). Nach der Registrierung dürfen Mitgliedsunternehmen keine telefonische, SMS-, Post- oder E-Mail-Werbung mehr an dich richten.',
    urlLabel: 'Lista Robinson',
  },

  'optout-it-rpo': {
    title: 'Beim Registro Pubblico delle Opposizioni registrieren',
    summary:
      'Italiens öffentliches Widerspruchsregister. Deine Telefonnummer (und Postanschrift) eintragen, um Anbieter zu blockieren, die es vor Marketinganrufen konsultieren müssen.',
    urlLabel: 'Registro Opposizioni',
  },

  'optout-fr-bloctel': {
    title: 'Bei Bloctel registrieren',
    summary:
      "Frankreichs offizielles No-Cold-Call-Register. Gelistete Nummern dürfen von Unternehmen, mit denen du keinen Vertrag hast, rechtlich nicht für Telefonmarketing genutzt werden.",
    urlLabel: 'Bloctel',
  },

  'optout-de-robinsonliste': {
    title: 'Bei der Robinsonliste registrieren',
    summary:
      'Deutschlands zentrale Werbe-Opt-out-Liste (betrieben vom DDV). Reduziert adressierte Werbepost, Anrufe und E-Mails von teilnehmenden Unternehmen.',
    urlLabel: 'Robinsonliste (DDV)',
  },

  'optout-be-donotcallme': {
    title: 'Bei der Do-Not-Call-Me-Liste registrieren',
    summary:
      'Belgiens offizielle Do-not-call-Liste. Nach der Eintragung darf deine Nummer nicht für Telefonmarketing genutzt werden. Die Registrierung erfolgt per Telefon.',
    urlLabel: 'Do Not Call Me',
  },

  'optout-pt-amd': {
    title: 'Der Lista de Oposição (AMD) beitreten',
    summary:
      'Portugals Verbraucher-Widerspruchsliste. Eintragen, um Direktmarketinganrufe und -post von registrierten Unternehmen zu stoppen.',
    urlLabel: 'Lista de Oposição',
  },

  'optout-se-hitta': {
    title: 'Kontaktseite auf Hitta.se entfernen',
    summary:
      'Schwedens Öffentlichkeitsprinzip macht deine Adresse leicht auffindbar. Deine Hitta.se-Kontaktseite ausblenden — die Entfernung erfolgt mit BankID.',
    urlLabel: 'Mich entfernen',
  },

  'optout-se-ratsit': {
    title: 'Eintrag bei Ratsit entfernen',
    summary:
      'Ratsit veröffentlicht schwedische öffentliche Register — Adresse, Alter, Finanzen. Den kostenlosen öffentlichen Eintrag mit BankID entfernen.',
    urlLabel: 'Ta bort',
  },

  'optout-se-mrkoll': {
    title: 'Daten bei MrKoll verbergen',
    summary:
      'MrKoll veröffentlicht schwedische öffentliche Register. Adresse und Telefonnummer verbergen — BankID erforderlich.',
    urlLabel: 'Ändra uppgifter',
  },

  'optout-de-dastelefonbuch': {
    title: 'DasTelefonbuch / DasÖrtliche-Eintrag entfernen',
    summary:
      'Eintrag in Deutschlands wichtigsten öffentlichen Telefonverzeichnissen (DasTelefonbuch, DasÖrtliche) entfernen oder einschränken.',
    urlLabel: 'Eintrag verwalten',
  },

  'optout-at-ecg': {
    title: 'In die ECG-Liste eintragen',
    summary:
      'Österreichs elektronische Marketing-Ausschlussliste (betrieben von der RTR). Die Registrierung deiner Adresse meldet dich von unerwünschten Marketing-E-Mails und -SMS ab.',
    urlLabel: 'ECG-Liste',
  },

  'optout-dk-robinson': {
    title: 'Der Robinsonlisten beitreten',
    summary:
      'Dänemarks offizielle Werbeschutzliste, die über das zentrale Personenregister (CPR) verwaltet wird. Blockiert adressierte Werbung per Post und Marketinganrufe.',
    urlLabel: 'Robinsonlisten',
  },

  'optout-fi-kieltopalvelu': {
    title: 'Marketingverbot registrieren (ASML)',
    summary:
      'Finnlands Robinson-Opt-out, betrieben vom Marketingverband ASML. Registrieren, um telefonisches und adressiertes Direktmarketing zu stoppen.',
    urlLabel: 'Kieltopalvelut',
  },

  'optout-hr-nezovi': {
    title: 'Bei NE ZOVI registrieren',
    summary:
      'Kroatiens offizielles Do-not-call-Register (betrieben von der Regulierungsbehörde HAKOM). Kostenlos — du registrierst dich über deinen Telefonanbieter, um Marketinganrufe zu blockieren.',
    urlLabel: 'NE ZOVI',
  },

  'private-email-provider': {
    title: 'Zu einem datenschutzfreundlichen E-Mail-Anbieter wechseln',
    summary:
      'Dein primäres Postfach zu Proton oder Tuta verlagern und deine Konten nach und nach weiterleiten und migrieren.',
    urlLabel: 'Proton Mail',
  },

  'signal': {
    title: 'Kommunikation zu Signal verlagern',
    summary:
      'Signal zum Standard-Messenger machen und SMS/WhatsApp für sensible Inhalte abwickeln.',
    urlLabel: 'Signal holen',
  },

  'hardware-keys': {
    title: 'Hardware-Sicherheitsschlüssel hinzufügen',
    summary:
      'FIDO2-Schlüssel (z. B. YubiKey) bei E-Mail, Bank, Passwort-Manager und Cloud-Konten registrieren.',
    steps: [
      'Zwei Schlüssel kaufen — einen primären, einen Backup an einem sicheren Ort.',
      'Beide auf jedem kritischen Konto registrieren, bevor schwächere 2FA-Methoden entfernt werden.',
      'Hardware-Schlüssel sind phishing-sicher; sie sind der stärkste verfügbare zweite Faktor.',
    ],
  },

  'full-broker-sweep': {
    title: 'Vollständiger Datenhändler-Durchlauf',
    summary:
      'Die gesamte Datenhändlerliste von Anfang bis Ende abarbeiten und jedes Opt-out-Datum protokollieren, damit die Wiederholungstimer korrekt sind.',
  },

  'e2ee-storage': {
    title: 'Auf Ende-zu-Ende-verschlüsselten Cloud-Speicher wechseln',
    summary:
      'Drive/Dropbox durch Ende-zu-Ende-verschlüsselten Speicher ersetzen, damit der Anbieter deine Dateien nicht lesen kann.',
    urlLabel: 'Proton Drive',
  },

  'degoogle-services': {
    title: 'Google-Kerndienste ersetzen',
    summary: 'Maps, Docs und Photos durch datenschutzfreundliche Alternativen ersetzen.',
    urlLabel: 'Alternativen (Privacy Guides)',
    steps: [
      'Maps → Organic Maps / OsmAnd. Docs → CryptPad / OnlyOffice. Photos → Ente / Immich.',
      'Einen Dienst nach dem anderen migrieren, damit du keinen Zugang verlierst.',
      'Daten vor dem Löschen aus Google Takeout exportieren.',
    ],
  },

  'masked-phone': {
    title: 'Maskierte / VoIP-Telefonnummer verwenden',
    summary:
      'Für Anmeldungen eine Zweitnummer angeben und die echte Nummer privat halten.',
    steps: [
      'Optionen: Google Voice (USA), MySudo oder eine günstige Zweit-SIM/eSIM.',
      'Die maskierte Nummer für Treuekarten, Anmeldungen und alles Unwesentliche nutzen.',
      'Die echte Nummer nur für vertrauenswürdige Kontakte und 2FA-Fallbacks reservieren.',
    ],
  },

  'masked-cards': {
    title: 'Virtuelle / maskierte Zahlungskarten verwenden',
    summary:
      'Einmalige oder händlerspezifische Kartennummern unterbrechen die Zahlungsdatenverknüpfung, die Datenhändler kaufen.',
    steps: [
      'Optionen: Privacy.com (USA), Revolut-Einmalkarten oder die virtuellen Karten deiner Bank.',
      'Pro Händler eine eigene Karte erstellen; Karten kündigen, die durchsickern oder zu viel abbuchen.',
    ],
  },

  'strip-exif': {
    title: 'Foto-Metadaten vor dem Veröffentlichen entfernen',
    summary:
      'EXIF-/GPS-Daten aus öffentlich geteilten Bildern entfernen, damit Fotos nicht deinen Wohn- oder Aufenthaltsort verraten.',
    steps: [
      'Viele Plattformen entfernen EXIF beim Hochladen — aber nicht alle, und nicht bei Original-Datei-Shares.',
      'iOS: Teilen-Menü → Optionen → Standort deaktivieren. Android: eine App zum Entfernen von Metadaten nutzen.',
      'Desktop: ExifTool oder „Eigenschaften entfernen" in den Windows-Dateieigenschaften.',
    ],
  },

  'harden-router-dns': {
    title: 'Heimrouter und DNS absichern',
    summary:
      'Standard-Admin-Passwort ändern, verschlüsseltes DNS aktivieren und UPnP/WPS deaktivieren.',
    steps: [
      'Das Router-Admin-Passwort sofort vom Standardwert ändern.',
      'Verschlüsseltes DNS (DoH/DoT) einrichten — z. B. Quad9 (9.9.9.9) oder NextDNS — damit dein Internetanbieter nicht jede Anfrage protokollieren kann.',
      'UPnP und WPS deaktivieren; Firmware aktuell halten.',
    ],
  },

  'segment-iot': {
    title: 'IoT-Geräte im Netzwerk segmentieren',
    summary:
      'Smart-Home-Geräte in ein Gastnetzwerk oder VLAN auslagern, um zu begrenzen, was sie sehen und erreichen können.',
  },

  'anti-fingerprint': {
    title: 'Browser-Fingerprinting einschränken',
    summary:
      'Anti-Fingerprinting-Einstellungen nutzen, damit Tracker deinen Browser nicht ohne Cookies identifizieren können.',
    urlLabel: 'Fingerabdruck testen',
    steps: [
      'Firefox: privacy.resistFingerprinting setzen oder den Mullvad Browser / Tor Browser für sensible Sitzungen nutzen.',
      'Keine exotischen Erweiterungen stapeln — jede macht dich einzigartiger, nicht weniger.',
    ],
  },

  'retire-old-email': {
    title: 'Altes E-Mail-Konto stilllegen und löschen',
    summary:
      'Nach der Migration verbleibende Dienste aktualisieren, dann den alten Posteingang löschen, damit er nicht durch Datenlecks oder Data Mining gefährdet wird.',
    steps: [
      'Den alten Posteingang für eine Übergangszeit (3–6 Monate) an den neuen weiterleiten.',
      'Jedes Mal, wenn etwas an der alten Adresse ankommt, diesen Dienst auf die neue umstellen.',
      'Wenn der Verkehr versiegt, exportieren und dann das alte Konto löschen.',
    ],
  },

  'gdpr-access-letter': {
    title: 'DSGVO-Auskunftsanträge stellen (SAR)',
    summary:
      'Große Datenhalter zwingen, genau offenzulegen, was sie über dich haben — Aufklärung vor der Löschung.',
  },

  'optout-lexisnexis': {
    title: 'Bei LexisNexis austragen',
    summary:
      'Hochwertige FCRA-Aggregatoren, die Hintergrundprüfungen beliefern; kann Ausweisnachweis erfordern.',
    urlLabel: 'Austragen',
  },

  'broker-registry': {
    title: 'Über Datenhändler-Register austragen',
    summary:
      'Staatliche Datenhändler-Register (Kalifornien, Vermont) nutzen, um Datenhändler zu finden und abzumelden, die du übersehen hast.',
    urlLabel: 'CA-Datenhändler-Register',
  },

  'maps-contributions': {
    title: 'Adresse aus Maps-Beiträgen entfernen',
    summary:
      'Bewertungen, Fotos und Markierungen löschen, die still deinen Wohn- oder Arbeitsort verraten.',
    urlLabel: 'Maps-Aktivitäten',
  },

  'cross-app-tracking-off': {
    title: 'App-übergreifendes Tracking überall deaktivieren',
    summary:
      'iOS App Tracking Transparency deaktivieren, Android-Werbe-ID deaktivieren, Standort pro App auf „Nie/Fragen" setzen.',
  },

  'optout-eu-brokers': {
    title: 'Bei EU-Datenhändlern austragen',
    summary:
      'EU/UK-Ansässige: Opt-outs plus DSGVO-Artikel-17-Briefe an in der EU tätige Datenhändler (Acxiom, Criteo, Experian UK) einreichen.',
    urlLabel: 'Acxiom (global)',
  },

  'optout-criteo': {
    title: 'Bei Criteo austragen',
    summary:
      'Criteos Ad-Retargeting-Profil abwählen — eines der größten verhaltensbasierten Werbenetzwerke in der EU.',
    urlLabel: 'Datenschutz / Opt-out',
  },

  'optout-192': {
    title: 'Bei 192.com austragen',
    summary:
      'Eintrag auf Großbritanniens wichtigster Personensuch-Website entfernen. Viele Daten stammen aus dem offenen Wählerverzeichnis — dort beim Gemeinderat auch austragen.',
    urlLabel: 'Meine Daten entfernen',
  },

  'optout-experian-uk': {
    title: 'Experian-UK-Marketing abbestellen',
    summary:
      'Experian UKs Datenportal nutzen, um die Marketingnutzung deiner Daten zu kontrollieren — getrennt von deiner Kreditauskunft.',
    urlLabel: 'Datenportal',
  },

  'google-rtbf-delisting': {
    title: 'EU/UK-Suchlöschung beantragen (Recht auf Vergessenwerden)',
    summary:
      'EU/UK-Ansässige können Google bitten, bestimmte URLs über sie aus Namens-Suchergebnissen zu entfernen. Entfernt den Link aus der Suche, nicht die zugrunde liegende Seite.',
    urlLabel: 'RTBF-Antragsformular',
  },

  'disable-os-telemetry': {
    title: 'OS-Telemetrie unter Windows und macOS reduzieren',
    summary:
      'Die standardmäßig gesendeten Diagnose- und Werbedaten deines Desktop-Betriebssystems zurückdrehen.',
    steps: [
      'Windows: Einstellungen → Datenschutz & Sicherheit → Diagnose & Feedback → auf „Erforderlich" setzen; Werbe-ID und maßgeschneiderte Erlebnisse deaktivieren.',
      'macOS: Einstellungen → Datenschutz & Sicherheit → Analyse & Verbesserungen → Analysen teilen deaktivieren; Apple Advertising → Personalisierte Werbung deaktivieren.',
      'Währenddessen App-spezifische Kamera-, Mikrofon- und Standortberechtigungen prüfen.',
    ],
  },

  'private-mailing-address': {
    title: 'Private Postanschrift einrichten',
    summary:
      'Eine CMRA/Weiterleitungsadresse nutzen und aufhören, für Lieferungen und Anmeldungen die Heimadresse anzugeben. Unterbricht die öffentliche Name↔Heim-Verknüpfung.',
    steps: [
      'Optionen: eine gewerbliche Postempfangsstelle (CMRA), ein virtuelles Postfach oder ein Postfach.',
      'Schrittweise Adresse bei Konten ändern, beginnend mit denen mit der höchsten Exposition.',
      'Die echte Heimadresse nie mehr in ein Anmeldeformular eintragen.',
    ],
  },

  'optout-electoral-register': {
    title: 'Aus dem öffentlichen Wählerverzeichnis austragen',
    summary:
      'Sich aus dem öffentlich verkauften Wählerverzeichnis entfernen (offenes UK-Register) oder aus Wählerdaten-Verkäufen (USA, je nach Bundesstaat).',
    steps: [
      'UK: lokalen Gemeinderat kontaktieren, um sich aus dem „offenen" Wählerverzeichnis auszutragen (im vollständigen Register für Wahlzwecke bleibst du).',
      'USA: Wählerlistenregeln sind bundesstaatenspezifisch; einige erlauben vertraulichen/zurückgehaltenen Status, besonders für Betroffene.',
    ],
  },

  'suppress-public-records': {
    title: 'Heimadresse in öffentlichen Registern unterdrücken',
    summary:
      'Adressvertraulichkeitsprogramme oder Grundbuchdaten-Schwärzungen nutzen, wo du berechtigt bist (besonders wertvoll für Betroffene von Missbrauch).',
    steps: [
      'USA: Die meisten Bundesstaaten führen ein Address Confidentiality Program (ACP) für Betroffene von Stalking/Missbrauch.',
      'Grundbucheinträge: Einige Bezirke erlauben Schwärzungen für gefährdete Personen — beim Bezirksregister nachfragen.',
      'Das ist je nach Rechtsgebiet unterschiedlich; eine lokale Opferhilfeorganisation kann dir beim Einreichen helfen.',
    ],
  },

  'compartmentalize-identities': {
    title: 'Identitäten aufteilen',
    summary:
      'Für jeden Lebensbereich (Arbeit / Privat / Shopping / Finanzen) separate E-Mail, Telefon und Karte nutzen, damit ein einzelnes Datenleck nicht dein ganzes Leben offenlegt.',
  },

  'degoogled-phone': {
    title: 'Auf ein de-gegoogeltes Smartphone wechseln (GrapheneOS)',
    summary: 'Täglich ein abgehärtetes Betriebssystem ohne eingebaute Google-Dienste nutzen.',
    urlLabel: 'GrapheneOS',
  },

  'always-vpn-tor': {
    title: 'Dauerhaftes VPN / Tor für sensible Nutzung',
    summary:
      'Sensibles Surfen über ein vertrauenswürdiges No-Logs-VPN (z. B. Mullvad) oder Tor leiten.',
    urlLabel: 'Mullvad VPN',
  },

  'burner-devices': {
    title: 'Einweg-/Zweitgeräte auf Reisen',
    summary:
      'Geräte mit minimalen Daten bei Grenzübertritten und in Hochrisiko-Situationen mitführen.',
  },

  'trust-llc-home': {
    title: 'Trust/LLC für Heim und Vermögenswerte nutzen',
    summary:
      'Die öffentliche Name↔Adress-Verknüpfung in Grundbüchern durch das Halten von Vermögenswerten in einem Trust oder einer LLC unterbrechen. Einen Fachmann zu Rate ziehen — keine Rechtsberatung.',
  },

  'quarterly-reremoval': {
    title: 'Quartalsweiser Wiederholungs-Durchlauf',
    summary:
      'Den vollständigen Datenhändler-Durchlauf quartalsweise wiederholen und die Daten protokollieren. Löschung ist eine Gewohnheit, kein einmaliger Vorgang.',
  },

  'threat-model-review': {
    title: 'Quartalsweises Bedrohungsmodell-Review',
    summary:
      'Neu bewerten, gegen wen du dich schützt, und anpassen. Den EFF Surveillance Self-Defense-Rahmen nutzen.',
    urlLabel: 'EFF SSD-Plan',
  },

  'remove-osint-aggregators': {
    title: 'Sich aus Datenleck-/OSINT-Suchseiten entfernen',
    summary:
      'Wo möglich Entfernung von Datenleck-Suche- und OSINT-Aggregations-Websites beantragen.',
  },

  'scrub-org-sites': {
    title: 'Sich von alten Arbeitgeber-/Organisations-Websites entfernen',
    summary:
      'Entfernung von Bios, Mitarbeiterseiten und Pressemeldungen beantragen, die deine Daten preisgeben. Bei Ignorieren einen Brief schicken.',
  },

  'optout-court-arrest-records': {
    title: 'Gerichts- und Verhaftungsregister-Aggregatoren unterdrücken',
    summary:
      'Seiten, die Fahndungsfotos, Verhaftungsprotokolle und Gerichtsunterlagen neu veröffentlichen, sind eine sehr schadhafte Exposition, selbst wenn Vorwürfe fallen gelassen wurden. Entfernung von jeder Seite beantragen; einige verlangen Ausweis oder eine gerichtliche Entscheidung.',
    steps: [
      'Seiten auflisten, die deine Daten anzeigen (aus der Tier-1-Namenssuch-Ausgangslage).',
      'Entfernungsseite jeder Website nutzen; für Fahndungsfoto-Seiten nie eine „Takedown-Gebühr" zahlen — das finanziert das System. Staatliche Anti-Fahndungsfoto-Gesetze anführen, wo sie existieren.',
      'Für offizielle Gerichtsportale beim Gerichtsschreiber nach Versiegelung/Löschung fragen — das ist die einzige dauerhafte Lösung.',
      'Wenn eine Website dich ignoriert, mit einem DSGVO/CCPA-Löschbrief eskalieren.',
    ],
  },

  'optout-gb-open-register': {
    title: 'Aus dem offenen britischen Wählerverzeichnis austragen',
    summary:
      'Das „offene" Register wird an Vermarkter und Personensuch-Websites verkauft. Beim lokalen Gemeinderat austragen — im vollständigen Register für Wahl- und Kreditprüfungen bleibst du.',
    urlLabel: 'Wie man sich austrägt',
  },

  'optout-ie-edited-register': {
    title: 'Ins irische bearbeitete Wählerverzeichnis wechseln',
    summary:
      "Irlands vollständiges Register kann für nichtwahlbezogene Zwecke genutzt werden; das bearbeitete Register wird nicht für Marketing verkauft. Das bearbeitete Register bei der Registrierung oder Aktualisierung deiner Daten wählen.",
    urlLabel: 'Register prüfen',
  },

  'es-asnef': {
    title: 'ASNEF-Kreditakte prüfen (Equifax Iberia)',
    summary:
      'ASNEF (betrieben von Equifax) ist Spaniens wichtigste Schulden-/Kreditakte — betrügerische unbezahlte Konten, die unter deinem Namen eröffnet wurden, landen hier. Spanien hat keine präventive „Sperre", daher ist das Lesen der Akte der Weg, Betrug zu erkennen.',
    urlLabel: 'Equifax — consumidores',
    steps: [
      'Auf der Equifax-Website „derecho de acceso" (Auskunftsrecht) finden und mit einer Kopie deines DNI einen Antrag stellen.',
      'Sie müssen innerhalb eines Monats kostenlos antworten.',
      'Nach Konten oder Schulden suchen, die du nicht erkennst — das ist das Betrugs-Signal.',
      'Etwa einmal jährlich und nach jeder Datenleck-Benachrichtigung wiederholen.',
    ],
  },

  'es-cirbe': {
    title: 'CIRBE-Bericht anfordern (Banco de España)',
    summary:
      'CIRBE ist das Kreditregister der Banco de España — es listet jeden Kredit/Kreditrahmen, der unter deiner ID registriert ist. Der sauberste Weg, auf deinen Namen aufgenommene Kredite zu erkennen.',
    urlLabel: 'Banco de España (sede)',
    steps: [
      'Zur Banco de España Sede Electrónica gehen → CIRBE → Bericht anfordern.',
      'Mit certificado digital oder Cl@ve identifizieren (oder per Post / persönlich mit DNI).',
      'Kostenlos und online meist sofort.',
      'Nach Krediten suchen, die du nicht eröffnet hast.',
    ],
  },

  'uk-cifas-pr': {
    title: 'Cifas Protective Registration hinzufügen (UK)',
    summary:
      'Das Nächste, was es im UK einer Kreditsperre gibt: ein Flag in deiner Akte, das Kreditgeber auffordert, vor der Kontoeröffnung auf deinen Namen zusätzliche Identitätsprüfungen durchzuführen. Kostenpflichtig (~30 £ für zwei Jahre), lohnt sich bei erhöhtem Risiko.',
    urlLabel: 'Cifas',
    steps: [
      'Auf der Cifas-Website Protective Registration beantragen.',
      'Kreditgeber sehen dann das Flag und müssen zusätzliche Schritte unternehmen, um zu prüfen, dass du es wirklich bist.',
      'Eigene Kreditanträge dauern während der Laufzeit länger — das ist beabsichtigt.',
    ],
  },

  'pihole': {
    title: 'Tracker netzwerkweit mit Pi-hole blockieren',
    summary:
      'Ein Pi-hole lässt Tracker- und Werbedomains für jedes Gerät in deinem Netzwerk — Smartphones, Fernseher und alles andere — ins Leere laufen, auf DNS-Ebene, bevor sie sich verbinden. Eine Box, ganze Heimabdeckung.',
    urlLabel: 'Pi-hole',
    steps: [
      'Pi-hole auf einem Raspberry Pi oder einem anderen immer eingeschalteten Linux-Rechner installieren.',
      'Den DNS des Routers darauf zeigen lassen, damit jedes Gerät automatisch abgedeckt ist.',
      'Blocklisten hinzufügen; das Abfrageprotokoll prüfen, um zu sehen, wohin deine Geräte nach Hause telefoniert haben.',
    ],
  },

  'code-word': {
    title: 'Familien-Codewort gegen Stimmklon-Betrug festlegen',
    summary:
      'KI kann eine Stimme aus Sekunden Audio klonen und einen panischen „Ich bin\'s, schick Geld"-Anruf fälschen. Ein gemeinsames Familien-Codewort, das nur ihr kennt, enttarnt es sofort — günstig und eine der wirkungsvollsten Maßnahmen.',
    internalLabel: '🔑 Codewort festlegen',
    steps: [
      'Ein Wort oder einen Satz mit engen Familienmitgliedern vereinbaren, den ein Fremder nicht erraten könnte.',
      'Regel: Jede dringende Geld- oder Geheimanfrage per Anruf oder Nachricht muss es enthalten, sonst gilt sie als Fälschung.',
      'Das Wort nie digital speichern oder senden, wo es durchsickern könnte.',
    ],
  },

  'dont-pay-removers': {
    title: 'Keinen Datenhändler-Entfernungsdienst bezahlen',
    summary:
      'Kostenpflichtige Dienste (DeleteMe, Incogni …) bereinigen nur einen kleinen Teil der Datenhändler, blähen ihre „entfernte Einträge"-Zahlen auf und stellen dauerhaft Rechnungen — und viele glühende Bewertungen sind bezahlte Kooperationen. Die Opt-outs, für die sie Gebühren verlangen, sind dieselben kostenlosen, die du in dieser App findest.',
    steps: [
      'Die kostenlosen Datenhändler-Opt-outs in der Datenhändler-Stufe selbst erledigen — dieselben Datenhändler, kein Abo.',
      'Kreditbüro- und abgeleitete/Marketing-Daten können von diesen Diensten ohnehin meist nicht gelöscht werden.',
      'Wenn dir der Komfort den Preis wert ist, gut — wisse nur, was du wirklich kaufst.',
    ],
  },

  'poison-profile': {
    title: 'Vergiften statt löschen — dein Profil verwässern',
    summary:
      'Datenhändler und Plattformen listen wieder auf und bauen neu auf, also ist Löschen ein Laufband. Das Hinzufügen glaubwürdigen Rauschens zu deinen EIGENEN Konten mit geringem Einsatz verringert die Sicherheit, welche Daten wirklich du bist. Das Täuschungskit generiert das Rauschen.',
    internalLabel: '⬡ Täuschungskit öffnen',
    steps: [
      'Nur Konten nutzen, die dir gehören; auf Langweiliges und Generisches abzielen, keine überzeugende Fantasieperson.',
      'Niemanden imitieren, keine gefälschten Bewertungen schreiben, andere Personen nicht anmelden.',
      'Das Täuschungskit für Namensvarianten und Füll-Bios öffnen, die du einfügen kannst.',
    ],
  },

  'vary-writing-style': {
    title: 'Schreibstil je nach Identität variieren',
    summary:
      'Stilometrie kann deine Konten anhand deiner Schreibweise verknüpfen — Lieblingsphrasen, Zeichensetzung, Emoji-Gewohnheiten — selbst ohne gemeinsamen Namen oder IP-Adresse. Wenn du separate Identitäten führst, schreib sie unterschiedlich.',
    steps: [
      'Pro Identität bewusst unterschiedliche Gewohnheiten wählen: Satzlänge, Zeichensetzung, Großschreibung, Emoji-Nutzung.',
      'Typische Phrasen und Insider-Witze vermeiden, die über Konten hinweg auftauchen.',
      'Bei hohem Risiko verfassen, dann in einer anderen Stimme umschreiben, bevor du postest.',
    ],
  },

  'behavioral-fingerprint': {
    title: 'Den eigenen Verhaltens-Fingerabdruck kennen',
    summary:
      'Über Cookies hinaus erstellen Websites Profile anhand deines Verhaltens — Tipprhythmus, Scroll-Geschwindigkeit, sogar das Beschleunigungsmessergangbild deines Telefons. Du kannst es nicht vollständig löschen, aber Anti-Fingerprinting-Browser und separate Profile schwächen es ab.',
    steps: [
      'Einen Browser mit Fingerprinting-Schutz nutzen (Tor Browser oder Brave mit aktiviertem Fingerprinting-Schutz).',
      'Separate Browser-Profile/Geräte für separate Identitäten verwenden, damit das Verhalten nicht verknüpft werden kann.',
      'Bewegungs-/Sensorzugriff für Websites deaktivieren, die ihn nicht benötigen.',
    ],
  },

  'recognize-phishing': {
    title: 'Phishing erkennen und vermeiden',
    summary:
      'Die meisten Kontoübernahmen beginnen mit einer überzeugenden E-Mail oder SMS, nicht mit einem Hack. Lerne die Warnsignale, damit eine gefälschte Anmeldeseite nie an dein Passwort kommt.',
    steps: [
      'Betrachte jede unaufgeforderte „Konto bestätigen"- oder „Ungewöhnliche Aktivität"-Nachricht als verdächtig — Banken und Plattformen fragen nie per E-Mail nach deinem Passwort.',
      'Melde dich nie über einen Link in einer Nachricht an. Öffne die Website selbst über ein Lesezeichen oder indem du die Adresse eintippst.',
      'Prüfe die echte Absenderadresse und zeige mit der Maus auf Links, um zu sehen, wohin sie wirklich führen, bevor du klickst.',
      'Lass deinen Passwort-Manager die Überprüfung übernehmen: Wenn er nicht automatisch ausfüllt, stimmt die Domain wahrscheinlich nicht.',
      'Nutze wenn möglich einen Hardware-Sicherheitsschlüssel — er ist phishing-sicher, selbst wenn du getäuscht wirst.',
    ],
    urlLabel: 'EFF: Phishing vermeiden',
  },

  'iphone-lockdown-mode': {
    title: 'Lockdown Mode auf iPhone/Mac aktivieren',
    summary:
      'Apples Lockdown Mode entfernt selten genutzte Funktionen, die Spähsoftware ausnutzt. Für Menschen mit erhöhtem Risiko verkleinert er die Angriffsfläche erheblich.',
    steps: [
      'Zuerst auf die neueste iOS/iPadOS/macOS-Version aktualisieren.',
      'Einstellungen → Datenschutz & Sicherheit → Lockdown Mode öffnen (ganz unten in der Liste).',
      'Aktivieren und neu starten. Er gilt für alle Apple-Geräte, die beim selben Konto angemeldet sind.',
      'Manche Links, Anhänge und Web-Funktionen werden eingeschränkt — das ist der Schutz in Aktion.',
    ],
    urlLabel: 'Apple: Lockdown Mode',
  },

  'verify-signal-safety-numbers': {
    title: 'Signal-Sicherheitsnummern verifizieren',
    summary:
      'Ende-zu-Ende-Verschlüsselung schützt dich nur, wenn du wirklich mit der richtigen Person sprichst. Das Verifizieren der Sicherheitsnummer schließt einen Man-in-the-Middle aus.',
    steps: [
      'Ein Signal-Gespräch öffnen → auf den Namen des Kontakts tippen → Sicherheitsnummer anzeigen.',
      'Persönlich: gegenseitig den QR-Code scannen; aus der Ferne: die Nummer über einen separaten vertrauenswürdigen Kanal vergleichen.',
      'Auf „Als verifiziert markieren" tippen, sobald sie übereinstimmen.',
      'Wenn sich die Sicherheitsnummer unerwartet ändert, den Grund bestätigen, bevor du etwas Sensibles sendest.',
    ],
    urlLabel: 'Signal: Sicherheitsnummern',
  },

  'detect-bluetooth-trackers': {
    title: 'Versteckte Bluetooth-Tracker aufspüren',
    summary:
      'AirTags und Tracker à la Tile sind günstige Stalking-Werkzeuge. Smartphones können dich jetzt auf unbekannte Tracker hinweisen, die sich mit dir bewegen — stelle sicher, dass die Erkennung aktiviert ist, und wisse, wie du manuell scannst.',
    steps: [
      'iPhone: Bluetooth und Standort eingeschaltet lassen; iOS warnt dich bei einem unbekannten AirTag/Find My-Tracker, der sich mit dir bewegt. Auf die Meldung tippen, um ihn einen Ton abspielen zu lassen.',
      'Android: Unbekannte-Tracker-Warnungen sind integriert (Einstellungen → Sicherheit & Notfall → Unbekannte Tracker-Warnungen); oder Apples „Tracker Detect" für manuelles Scannen installieren.',
      'Wenn du einen Tracker findest, der dir nicht gehört, kannst du ihn durch Entfernen der Batterie deaktivieren — aber wenn du dich in Gefahr fühlst, bewahre ihn auf und wende dich zuerst an Hilfsangebote oder Behörden.',
    ],
    urlLabel: 'Apple: Unerwünschtes Tracking',
  },
}
