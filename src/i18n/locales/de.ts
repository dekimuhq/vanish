import type { Dict } from './en'

export const de: Dict = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': 'verschwinden, eine Stufe nach der anderen',
  'offline.badge': '⬡ 100 % offline',
  'offline.title': 'Keine Netzwerkanfragen verlassen dein Gerät',
  'nav.dashboard': 'Dashboard',
  'nav.plan': 'Die Leiter',
  'nav.brokers': 'Datenhändler',
  'nav.letters': 'Briefe',
  'nav.panic': 'Panik',
  'nav.settings': 'Einstellungen',

  // Common
  'common.back': '← Zurück',
  'common.next': 'Weiter →',
  'common.cancel': 'Abbrechen',

  // Country group labels
  'countryGroup.eu': 'Europäische Union',
  'countryGroup.eea': 'Europäischer Wirtschaftsraum',
  'countryGroup.uk': 'Vereinigtes Königreich',
  'countryGroup.us': 'Vereinigte Staaten',
  'countryGroup.other': 'Anderswo',

  // Tiers
  'tier.tidy.name': 'Aufräumen',
  'tier.tidy.tagline': 'Wenig Aufwand, große Erleichterung',
  'tier.tidy.who': 'Für alle. Die 20 Minuten, die jeder investieren sollte.',
  'tier.reduce.name': 'Reduzieren',
  'tier.reduce.tagline': 'Deinen Fußabdruck verkleinern',
  'tier.reduce.who': "Du interessierst dich für Datenschutz und willst echten Abstand von Big Tech und Datenhändlern.",
  'tier.lockdown.name': 'Abriegeln',
  'tier.lockdown.tagline': 'Alles absichern',
  'tier.lockdown.who': 'Du willst wirklich schwer zu verfolgen, zu profilieren oder zu doxen sein.',
  'tier.ghost.name': 'Ghost',
  'tier.ghost.tagline': 'Verschwinden',
  'tier.ghost.who': 'Aktivisten, Betroffene, Verfolgte. Maximale Trennung von deinem Namen.',

  // Categories
  'category.accounts': 'Konten',
  'category.data-brokers': 'Datenhändler',
  'category.devices': 'Geräte',
  'category.browser': 'Browser',
  'category.social': 'Social Media',
  'category.search': 'Suche',
  'category.messaging': 'Messenger',
  'category.email': 'E-Mail',
  'category.finance': 'Finanzen',
  'category.network': 'Netzwerk',
  'category.legal': 'Rechtliche Hebel',

  // Score labels + ring
  'score.wideOpen': 'Vollständig offen',
  'score.exposed': 'Exponiert',
  'score.guarded': 'Geschützt',
  'score.ghosting': 'Ghosting',
  'score.ariaLabel': 'Datenschutzwertung {score} von 100',

  // Effort / impact pills
  'pills.effort.low': 'Einfach',
  'pills.effort.med': 'Moderat',
  'pills.effort.high': 'Aufwändig',
  'pills.effortTitle': 'Wie viel Aufwand das erfordert',
  'pills.impact.low': 'Geringe Wirkung',
  'pills.impact.med': 'Solide Wirkung',
  'pills.impact.high': 'Hohe Wirkung',

  // Adversaries
  'adversary.stalking': 'eine bestimmte Person, die dich sucht',
  'adversary.bigtech': 'Big-Tech-Profiling und Werbenetzwerke',
  'adversary.brokers': 'Datenhändler, die dein Profil verkaufen',
  'adversary.breaches': 'Datenlecks und Kontoübernahmen',
  'adversary.recruiters': 'beiläufige Sucher — Dates, Recruiter',
  'adversary.spam': 'Spammer und Werbepostlisten',

  // Onboarding
  'onboarding.subtitle': 'Aus dem Internet verschwinden, eine Stufe nach der anderen.',
  'onboarding.bullet1': 'Läuft zu 100 % auf deinem Gerät. Kein Konto, keine Server, kein Tracking.',
  'onboarding.bullet2': 'Eine geführte Leiter echter Löschmassnahmen, von Aufräumen bis vollständigem Verschwinden.',
  'onboarding.bullet3': 'Generiert DSGVO/CCPA-Löschbriefe, die du selbst verschickst.',
  'onboarding.privacyNote': 'Drei kurze Fragen schneidern deinen Plan zu. Deine Antworten verlassen dieses Gerät nie.',
  'onboarding.start': 'Starten →',
  'onboarding.step1.title': 'Wo bist du?',
  'onboarding.step1.hint': 'Bestimmt, welche Datenhändler und Rechte gelten — und nennt deine Datenschutzbehörde in Briefen.',
  'onboarding.selectCountry': 'Wähle dein Land …',
  'onboarding.authority': 'Deine Aufsichtsbehörde:',
  'onboarding.step2.title': 'Was bereitet dir die meisten Sorgen?',
  'onboarding.step2.hint': 'Wähle beliebig viele. Wir zeigen die passenden Maßnahmen zuerst.',
  'onboarding.concern.recruiters': 'Leute, die mich googeln (Dates, Recruiter)',
  'onboarding.concern.brokers': 'Datenhändler, die meine Daten verkaufen',
  'onboarding.concern.bigtech': 'Big-Tech-Profiling und Werbung',
  'onboarding.concern.breaches': 'Datenlecks und Kontoübernahmen',
  'onboarding.concern.stalking': 'Eine bestimmte Person, die mich findet',
  'onboarding.concern.spam': 'Spam-Anrufe, -Nachrichten und Werbepost',
  'onboarding.step3.title': 'Wie weit willst du gehen?',
  'onboarding.step3.hint': 'Ein Ziel, kein Käfig — du kannst jederzeit höher klettern.',
  'onboarding.adversaryLead': 'Basierend auf deinen Sorgen ist dein Hauptgegner {adversary}.',
  'onboarding.rationale':
    "Deine stärkste Sorge — {adversary} — spricht für {tier}. Passe deinen Aufwand daran an, vor wem du dich tatsächlich versteckst; mehr zu tun als dein Bedrohungsmodell verlangt, kostet Komfort ohne echten Gewinn.",
  'onboarding.useRecommended': 'Empfehlung übernehmen: T{tier} · {name}',
  'onboarding.build': 'Meinen Plan erstellen →',
  'onboarding.restore': 'Du kommst zurück? Eine Sicherung wiederherstellen',
  'onboarding.restoreCta': '.vanish-Datei wählen',
  'onboarding.restoreErr': 'Falsche Passphrase oder keine Vanish-Sicherung.',
  'onboarding.restorePass': 'Sicherungs-Passphrase',

  // Dashboard
  'dashboard.title': 'Deine Datenschutzwertung',
  'dashboard.actionsDone': '{done} von {total} Maßnahmen erledigt · Ziel',
  'dashboard.encouragement.danger':
    'Du bist gerade vollständig offen — aber die ersten Maßnahmen haben die höchste Wirkung und dauern Minuten. Fang oben an.',
  'dashboard.encouragement.warn':
    'Guter Start. Du hast die einfachen Lücken geschlossen; die nächste Stufe ist, wo echter Abstand zu Datenhändlern und Big Tech beginnt.',
  'dashboard.encouragement.ok':
    'Du bist jetzt wirklich schwer zu verfolgen. Halte die Wiederholungsprüfungen aufrecht und überprüfe dein Bedrohungsmodell quartalsweise.',
  'dashboard.openLadder': 'Leiter öffnen →',
  'dashboard.printPlan': '🖨 Meinen Plan drucken',
  'dashboard.rechecksDue.one': '↻ {count} Wiederholungsprüfung fällig',
  'dashboard.rechecksDue.other': '↻ {count} Wiederholungsprüfungen fällig',
  'dashboard.streak': '🔥 {count}-Tage-Serie',
  'dashboard.doneThisWeek': '{count} diese Woche erledigt',
  'dashboard.rechecksHeading': '↻ Fällige Wiederholungsprüfungen',
  'dashboard.rechecksBody': 'Datenhändler listen dich nach einigen Monaten erneut. Diese Opt-outs müssen wiederholt werden:',
  'dashboard.overdue': 'überfällig',
  'dashboard.dueNowHeading': '⏰ Jetzt fällig',
  'dashboard.dueNowBody': 'Fristgebundene Aufgaben: Broker-Opt-outs erneuern und Antwortfristen nachfassen:',
  'dashboard.dueLetterFallback': 'Brief-Anfrage',
  'dashboard.recommendedNext': 'Als Nächstes empfohlen',
  'dashboard.seeAll': 'Alle ansehen',
  'dashboard.allDone': '🎉 Jede relevante Maßnahme ist erledigt oder übersprungen. Du ghostest — halte die Wiederholungsprüfungen aufrecht.',

  // Plan / The Ladder
  'plan.title': 'Die Leiter',
  'plan.subtitle': 'Klettere in deinem eigenen Tempo. Greife gezielt wirkungsstarke Maßnahmen aus jeder Stufe heraus — Datenschutz ist persönlich.',
  'plan.results.one': '{count} Ergebnis für „{query}"',
  'plan.results.other': '{count} Ergebnisse für „{query}"',
  'plan.allTiers': 'Alle Stufen',
  'plan.allCategories': 'Alle Kategorien',
  'plan.hideCompleted': 'Erledigte ausblenden',
  'plan.searchPlaceholder': 'Alle Maßnahmen durchsuchen … (z. B. „Spokeo", „2FA", „E-Mail")',
  'plan.filterByCategory': 'Nach Kategorie filtern',
  'plan.searchAria': 'Maßnahmen suchen',

  // Brokers
  'brokers.title': 'Datenhändler-Abschussliste',
  'brokers.subtitle':
    "Datenhändler sind dafür verantwortlich, dass deine Wohnadresse und Telefonnummer in den Suchergebnissen Fremder auftauchen. Fange mit den schnellen Erfolgen ohne Ausweispflicht an, dann mit den Aggregatoren, die alle anderen beliefern.",
  'brokers.cleared': '{done}/{total} bereinigt.',
  'brokers.dueToRedo.one': '↻ {count} zur Wiederholung fällig.',
  'brokers.dueToRedo.other': '↻ {count} zur Wiederholung fällig.',
  'brokers.relistBody':
    "Datenhändler listen dich nach 3–6 Monaten stillschweigend neu ein — deshalb verlangen Dienste monatliche Gebühren. Vanish erinnert dich einfach daran, den kostenlosen Opt-out zu wiederholen.",
  'brokers.honestLabel': '⚠️ Die ehrliche Wahrheit:',
  'brokers.honestBody':
    'Opt-outs reduzieren deine Exposition, garantieren aber keine dauerhafte Unsichtbarkeit. Links ändern sich und Daten tauchen wieder auf. Betrachte das als wiederkehrende Gewohnheit, nicht als einmalige Lösung — und zahle nie für eine „Löschgarantie".',

  // Letters
  'letters.title': 'Briefschmiede',
  'letters.subtitle':
    "Generiere einen rechtlich formulierten Lösch- oder Auskunftsantrag. Er wird vollständig auf deinem Gerät aus den unten eingegebenen Daten erstellt — nichts wird für dich gesendet. Du kopierst oder mailest ihn selbst.",
  'letters.authorityLabel': 'Deine Aufsichtsbehörde ({flag} {name}):',
  'letters.authorityNote': 'Im Brief genannt — wende dich hier hin, wenn du ignoriert wirst.',
  'letters.noAuthority': 'Lege dein Land in den Einstellungen fest, um deine Aufsichtsbehörde in diesem Brief zu nennen.',
  'letters.recipientOrg': 'Empfangende Organisation',
  'letters.orgPlaceholder': 'z. B. Spokeo, Inc.',
  'letters.recipientEmail': 'E-Mail der Empfängerin / des Empfängers (optional)',
  'letters.yourDetails': 'Deine Angaben — nur auf diesem Gerät gespeichert, zum Ausfüllen des Briefs verwendet',
  'letters.fullName': 'Vollständiger Name',
  'letters.namePlaceholder': 'Dein vollständiger Name',
  'letters.email': 'E-Mail',
  'letters.postalAddress': 'Postanschrift',
  'letters.addressPlaceholder': 'Für Datenhändler, die nur Post akzeptieren',
  'letters.subject': 'Betreff:',
  'letters.copy': '⧉ Text kopieren',
  'letters.copied': '✓ Kopiert',
  'letters.download': '↓ Als .txt herunterladen',
  'letters.openEmail': '✉️ In E-Mail öffnen',
  'letters.disclaimerPre': '⚖️ Vorlage zur Vereinfachung, ',
  'letters.disclaimerStrong': 'keine Rechtsberatung',
  'letters.disclaimerPost': '. Überprüfe vor dem Senden den richtigen Empfänger und deine örtlichen Rechte.',
  'letters.status.drafted': 'Entwurf',
  'letters.status.escalated': 'Eskaliert',
  'letters.status.resolved': 'Erledigt',
  'letters.status.responded': 'Beantwortet',
  'letters.status.sent': 'Wartet auf Antwort',
  'letters.trackThis': '+ Als gesendet verfolgen',
  'letters.trackedConfirm': '✓ Verfolgt',
  'letters.tracked.copied': '✓ Kopiert',
  'letters.tracked.copyEscalation': '⧉ Beschwerde kopieren',
  'letters.tracked.daysLeft': 'Noch {days} Tage bis zur Antwortfrist',
  'letters.tracked.delete': 'Entfernen',
  'letters.tracked.empty': 'Briefe, die du verfolgst, erscheinen hier mit einem Frist-Countdown.',
  'letters.tracked.escalate': 'An {authority} eskalieren',
  'letters.tracked.overdue': 'Überfällig um {days} Tage',
  'letters.tracked.resolved': 'Als erledigt markieren',
  'letters.tracked.responded': 'Als beantwortet markieren',
  'letters.tracked.sentOn': 'Gesendet am {date}',
  'letters.tracked.title': 'Meine Briefe',

  // Backup nudge
  'nudge.backup': 'Dein Fortschritt liegt nur in diesem Browser. Sichere ihn, damit das Löschen deiner Daten ihn nicht auslöscht.',
  'nudge.backupCta': 'Jetzt sichern',
  'nudge.dismiss': 'Später',

  // Panic
  'panic.title': '🆘 Panikmodus',
  'panic.intro':
    "Wenn jemand aktiv versucht, dich zu finden, zu belästigen oder zu doxen, führe diese Schritte der Reihe nach aus. Sie sind die wirkungsvollsten Maßnahmen, um die Spur zwischen deinem Namen und deinem Aufenthaltsort zu unterbrechen — die schnellsten zuerst.",
  'panic.danger': 'Wenn du in unmittelbarer Gefahr bist, ruf zuerst die Notfallnummer an.',
  'panic.resources':
    "Hilfsangebote für Betroffene: In den USA bietet die National DV Hotline eine Address Confidentiality-Vermittlung an; viele Länder haben entsprechende Angebote. Eine lokale Opferhilfeorganisation kann dir beim Einreichen von Sperren öffentlicher Aufzeichnungen helfen.",
  'panic.doNow': 'Jetzt erledigen',
  'panic.doneCount': '{done}/{total} erledigt',

  // Report / Disappearance Plan
  'report.title': 'Dein Verschwinde-Plan',
  'report.subtitle': 'Eine druckbare Checkliste dessen, was noch aussteht. Als PDF speichern oder drucken.',
  'report.print': '🖨 Drucken / Als PDF speichern',
  'report.costNote':
    "Vanish erhöht den Aufwand, dich zu finden. Gegen einen finanziell gut ausgestatteten, entschlossenen Gegner gibt es keine absoluten Garantien — und was Leute meistens auffliegen lässt, ist selten die Technik, sondern Konsequenz und Ego (ein wiederverwendeter Nutzername, ein Ausrutscher). Passe deinen Aufwand daran an, vor wem du dich tatsächlich versteckst.",
  'report.docTitle': 'Vanish — Verschwinde-Plan',
  'report.meta': 'Erstellt am {date} · Ziel {tier} · Region {region}',
  'report.privacyScore': 'Datenschutzwertung',
  'report.tierHeading': 'Stufe {tier} · {name} — {count} ausstehend',
  'report.allDone': 'Nichts mehr offen — jede relevante Maßnahme ist erledigt oder übersprungen. Halte die Wiederholungsprüfungen aufrecht.',
  'report.footer':
    'Erstellt mit Vanish — einem vollständig offlinefähigen Datenschutzcoach. Opt-out-Links ändern sich; prüfe vor dem Handeln. Keine Rechtsberatung.',

  // Settings
  'settings.title': 'Einstellungen',
  'settings.language': 'Sprache',
  'settings.languageHint': 'Ändert jeden Bildschirm. Wird nur auf diesem Gerät gespeichert.',
  'settings.yourPlan': 'Dein Plan',
  'settings.country': 'Land',
  'settings.notSet': 'Nicht festgelegt',
  'settings.supervisoryAuthority': 'Aufsichtsbehörde:',
  'settings.region': 'Region: {region}',
  'settings.targetTier': 'Zielstufe',
  'settings.codeWordTitle': '🔑 Familien-Codewort',
  'settings.codeWordBody':
    'Ein gemeinsames Wort, das KI-Stimmklon-Betrug à la „Ich bin\'s, schick Geld" enttarnt. Vereinbare es mit engen Familienmitgliedern und speichere es nur auf diesem Gerät — es wird nirgendwo gesendet.',
  'settings.codeWordPlaceholder': 'z. B. blauer Pinguin',
  'settings.printCard': '🖨 Eine Brieftaschenkarte drucken',
  'settings.codeWordRule':
    'Regel: Jede dringende Geld- oder Geheimanfrage muss dieses Wort enthalten, sonst gilt sie als Fälschung. Sende das Wort selbst nie per SMS oder E-Mail.',
  'settings.cardDocTitle': 'Vanish-Codewort',
  'settings.cardLabel': 'Familien-Codewort',
  'settings.cardNote':
    "Sende das Wort selbst nie per SMS oder E-Mail. Jede dringende Geld- oder Geheimanfrage muss dieses Wort enthalten, sonst gilt sie als Fälschung.",
  'settings.backupTitle': 'Sicherung und Übertragung',
  'settings.backupBody':
    "Kein Konto bedeutet keine Cloud-Synchronisierung — absichtlich. Exportiere eine von dir selbst verschlüsselte JSON-Datei, um deinen Plan auf ein anderes Gerät zu übertragen. Die Datei enthält deinen Fortschritt und die Angaben, die du für Briefe eingegeben hast.",
  'settings.export': '↓ Plan exportieren',
  'settings.import': '↑ Plan importieren',
  'settings.importOk': '✓ Plan importiert.',
  'settings.restorePreviewTitle': 'Sieh dir dieses Backup vor dem Wiederherstellen an',
  'settings.restorePreviewWarn': 'Beim Wiederherstellen wird alles ersetzt, was sich derzeit auf diesem Gerät befindet.',
  'settings.restoreNow': 'Jetzt',
  'settings.restoreBackup': 'Backup',
  'settings.restoreActions': 'Erledigte Aktionen',
  'settings.restoreLetters': 'Verfolgte Briefe',
  'settings.restoreLang': 'Sprache',
  'settings.restoreProfile': 'Profil',
  'settings.restoreApply': 'Meine Daten ersetzen',
  'settings.restoreNoProfile': 'Nicht festgelegt',
  'settings.importErr': '✗ Diese Datei konnte nicht gelesen werden.',
  'settings.encBackupTitle': 'Verschlüsselte Sicherung',
  'settings.encBackupBody':
    "Das Löschen deiner Browserdaten entfernt hier alles — so ist es gewollt. Die einzige Kopie, die überlebt, ist eine Datei, die du selbst aufbewahrst. Diese Sicherung ist mit einer Passphrase verschlüsselt, sodass die Datei selbst kein Datenschutzleck ist. Bewahre die Passphrase an einem sicheren Ort auf; wir können sie nicht wiederherstellen.",
  'settings.exportEncrypted': '↓ Verschlüsselte Sicherung speichern (.vanish)',
  'settings.importEncrypted': '↥ Verschlüsselte Sicherung wiederherstellen',
  'settings.passphrase': 'Sicherungs-Passphrase',
  'settings.passphrasePlaceholder': 'Eine Passphrase, die nur du kennst',
  'settings.passphraseRequired': 'Gib zuerst eine Passphrase ein.',
  'settings.backupErr': 'Sicherung fehlgeschlagen.',
  'settings.backupSaved': '✓ Sicherung gespeichert',
  'settings.wipeTitle': 'Alles löschen',
  'settings.wipeBody':
    "Lösche alle Fortschritte und persönlichen Daten von diesem Gerät. Das kann nicht rückgängig gemacht werden. (Auf einem Server gibt es nichts zu löschen — das war noch nie so.)",
  'settings.wipeBtn': 'Alle lokalen Daten löschen',
  'settings.wipeConfirm': 'Sicher? Damit wird alles gelöscht.',
  'settings.wipeYes': 'Ja, löschen',
  'settings.dataTitle': 'So geht Vanish mit deinen Daten um',
  'settings.dataBullet1': "Alles liegt im lokalen Speicher dieses Browsers. Nichts wird je hochgeladen.",
  'settings.dataBullet2':
    "Die Content-Security-Policy der Seite blockiert alle Netzwerkanfragen an Dritte — in den Entwicklertools deines Browsers nachprüfbar.",
  'settings.dataBullet3': "Keine Analysen, keine Cookies, kein Konto, keine Telemetrie — in den Entwicklertools deines Browsers nachprüfbar.",
  'settings.dataBullet4':
    'Links zu Opt-out-Seiten öffnen sich in einem neuen Tab — das sind die einzigen „Netzwerk"-Aufrufe, und du löst jeden einzelnen selbst aus.',

  // Decoy Kit
  'decoy.title': '⬡ Täuschungskit',
  'decoy.subtitle':
    "Vergiften statt löschen. Datenhändler und Plattformen listen wieder auf und bauen neu auf — daher ist das Hinzufügen von harmlosem Rauschen zu deinen eigenen Konten mit geringem Einsatz besser als das Hinterherjagen von Löschungen. Dieses Kit läuft vollständig auf deinem Gerät.",
  'decoy.responsibly': 'Verantwortungsvoll nutzen',
  'decoy.do': 'Tu das',
  'decoy.never': 'Niemals',
  'decoy.rulesDo': [
    'Berühre nur Konten, die DEINE sind.',
    'Nutze es für Wegwerfprofile mit geringem Einsatz, nie für Konten, die mit Geld oder Ausweis verbunden sind.',
    'Ziele auf Langweiliges und Generisches — Rauschen, keine überzeugende Fantasieperson.',
  ],
  'decoy.rulesDont': [
    'Gib dich nie als echte, namentlich bekannte Person aus.',
    'Schreibe nie gefälschte Bewertungen oder Rezensionen.',
    'Melde nie jemand anderen an und verwende nie die Daten anderer Personen.',
    'Nutze das nie, um einem Gläubiger, einem Gericht oder der Strafverfolgung zu entkommen.',
  ],
  'decoy.nameVariants': 'Namensvarianten',
  'decoy.noVariants': "Keine Varianten für einen einteiligen Namen — füge in den Einstellungen einen Nachnamen hinzu, um mehr zu erzeugen.",
  'decoy.addNamePre': 'Füge deinen Namen in den ',
  'decoy.addNameLink': 'Einstellungen',
  'decoy.addNamePost': ' hinzu, um alternative Schreibweisen zu erzeugen und auf Wegwerfprofilen zu verteilen.',
  'decoy.fillerBio': 'Füll-Bio',
  'decoy.regenerate': '↻ Neu generieren',
  'decoy.copyBio': '⧉ Bio kopieren',
  'decoy.copied': '✓ Kopiert',
  'decoy.footer':
    "Absichtlich generisch — das Ziel ist statistisches Rauschen, keine überzeugende Fantasieperson. In Profile einfügen, die dir gehören und geringes Risiko haben.",
  'decoy.interests': [
    'Zimmerpflanzen', 'Radfahren', 'Sauerteigbacken', 'Vogelbeobachtung', 'Brettspiele',
    'Wandern', 'Analogfotografie', 'Jazz', 'Töpfern', 'Kreuzworträtsel',
    'Gärtnern', 'Laufen', 'Kochen', 'Astronomie', 'Kaltwasserschwimmen',
    'Schach', 'Stricken', 'Roadtrips', 'Kaffee', 'Live-Musik',
  ],
  'decoy.bioTemplate': 'Bin hier wegen {list}. Bleib freundlich. Meine eigene Meinung.',
  'decoy.bioAnd': 'und',

  // Action card
  'actionCard.markDone': '„{title}" als erledigt markieren',
  'actionCard.markNotDone': '„{title}" als nicht erledigt markieren',
  'actionCard.open': 'Öffnen',
  'actionCard.recheckEvery': '↻ alle {days} Tage prüfen',
  'actionCard.recheckTitle': 'Datenhändler listen dich neu auf; wiederhole das regelmäßig',
  'actionCard.searchCurrent': '🔎 Nach aktueller Seite suchen',
  'actionCard.linkDead': 'Link tot?',
  'actionCard.linkDeadTitle': 'Opt-out-URLs ändern sich häufig',
  'actionCard.generateLetter': '✍️ Brief generieren',
  'actionCard.openTool': 'Tool öffnen',
  'actionCard.howTo': 'Anleitung',
  'actionCard.hideSteps': 'Schritte ausblenden',
  'actionCard.notRelevant': 'Nicht relevant',
  'actionCard.restore': 'Wiederherstellen',
  'actionCard.verified': 'Geprüft {date}',
  'actionCard.verifiedTitle': 'Wann diese Maßnahme und ihr Link zuletzt geprüft wurden. Melde einen toten Link, falls er umgezogen ist.',

  // EFF SSD: scenario playlists
  'nav.scenarios': 'Szenarien',
  'scenarios.title': 'Von deiner Situation aus starten',
  'scenarios.lead':
    'Kuratierte Pfade für bestimmte Situationen. Jeder ist eine handverlesene Reihenfolge durch Maßnahmen, die du bereits hast — oben beginnen.',
  'scenarios.notFound': 'Dieses Szenario existiert nicht.',
  'scenario.survivor.title': 'Betroffene von Stalking oder Missbrauch',
  'scenario.survivor.intro':
    'Deinen Standort und deine Kontaktdaten von deinem Namen trennen und versteckte Tracker aufspüren. Wenn du in unmittelbarer Gefahr bist, wende dich zuerst an lokale Hilfsangebote.',
  'scenario.job-seeker.title': 'Aufräumen vor der Jobsuche',
  'scenario.job-seeker.intro':
    'Was ein Recruiter oder Einstellungsverantwortlicher findet, wenn er nach deinem Namen sucht — und wie du es aufräumst, bevor er schaut.',
  'scenario.activist.title': 'Aktivist:in / Teilnahme an einer Demo',
  'scenario.activist.intro':
    'Dein Telefon und deine Kommunikation vor und während einer Organisation oder Demonstration absichern.',
  'scenario.journalist.title': 'Journalist:in, der/die Quellen schützt',
  'scenario.journalist.intro':
    'Vertrauliche Kommunikation und das Trennen von beruflicher und privater Identität.',
  'scenario.breach.title': 'Nach einem Datenleck',
  'scenario.breach.intro':
    'Du warst in einem Datenleck (oder vermutest es). Den Schaden eindämmen und die Tür dahinter schließen.',

  // EFF SSD: learn primers
  'nav.learn': 'Lernen',
  'learn.title': 'Das Warum verstehen',
  'learn.lead':
    'Kurze, verständliche Hintergrundinformationen zu den Maßnahmen. Den vollständigen Leitfaden findest du jeweils bei EFF’s Surveillance Self-Defense.',
  'learn.related': 'Verwandte Maßnahmen',
  'learn.readMore': 'Vollständiger Leitfaden',
  'learn.notFound': 'Dieses Thema existiert nicht.',
  'learn.threat-model.title': 'Was ist ein Bedrohungsmodell?',
  'learn.threat-model.body': [
    'Ein Bedrohungsmodell sind nur fünf ehrliche Fragen: Was möchtest du schützen, vor wem möchtest du es schützen, wie wahrscheinlich ist es, dass du das tun musst, wie schlimm wären die Folgen, wenn du scheitern würdest, und wie viel Mühe bist du bereit, zur Vorbeugung auf dich zu nehmen?',
    'Es gibt kein einheitlich richtiges Datenschutzniveau. Den eigenen Aufwand an die Personen anzupassen, vor denen man sich wirklich sorgt, ist das eigentliche Spiel — weiter zu gehen als die Situation erfordert, kostet echten Komfort ohne echten Sicherheitsgewinn.',
  ],
  'learn.metadata.title': 'Was Metadaten verraten',
  'learn.metadata.body': [
    'Metadaten sind Daten über deine Daten: wann ein Foto aufgenommen wurde, mit welchem Gerät und oft die genauen GPS-Koordinaten. Die Metadaten einer Nachricht — wer, wann, wie oft — können genauso aufschlussreich sein wie der Inhalt.',
    'Du kannst nicht immer kontrollieren, welche Metadaten Dienste aufbewahren, aber du kannst aufhören, sie freizügig weiterzugeben: Standort- und Geräteinformationen aus Fotos entfernen, bevor du sie veröffentlichst.',
  ],
  'learn.encryption.title': 'Was Ende-zu-Ende-Verschlüsselung ist',
  'learn.encryption.body': [
    'Ende-zu-Ende-Verschlüsselung (E2EE) bedeutet, dass nur du und dein Gesprächspartner die Nachrichten lesen können — nicht der App-Anbieter, das Netzwerk oder jemand, der sie unterwegs abfängt.',
    'Es ist der Unterschied zwischen einer Postkarte und einem versiegelten Brief. Nutze E2EE-Tools für alles Sensible, und denke daran: Es schützt den Inhalt, aber nicht immer die Metadaten drumherum.',
  ],
  'learn.phishing.title': 'Wie Phishing funktioniert',
  'learn.phishing.body': [
    'Phishing verleitet dich dazu, ein Passwort oder einen Code herauszugeben — meistens mit einer dringlichen Nachricht und einem Link zu einer gefälschten Anmeldeseite. So beginnen die meisten Kontoübernahmen tatsächlich — ganz ohne Hacking.',
    'Die Schutzmaßnahmen sind Gewohnheiten, keine Tools: Melde dich nie über einen Link in einer Nachricht an, prüfe den Absender, und verlasse dich auf einen Passwort-Manager (der in der falschen Domain nicht automatisch ausfüllt) und Hardware-Schlüssel (die phishing-sicher sind).',
  ],
  'learn.data-brokers.title': 'Was Datenhändler sind',
  'learn.data-brokers.body': [
    'Datenhändler kaufen, scrapen und verkaufen Profile über dich — Name, Adresse, Verwandte, Telefonnummern — an Werbetreibende, Recruiter und jeden, der zahlt. Personensuch-Websites sind das öffentliche Schaufenster dieser Branche.',
    'Opt-outs funktionieren, sind aber nicht dauerhaft: Händler erwerben und listen dich aus frischen öffentlichen Quellen erneut, daher ist das Entfernen eine Gewohnheit mit Timer, keine einmalige Lösung.',
  ],
  'learn.vpn.title': 'Was ein VPN leistet und was nicht',
  'learn.vpn.body': [
    'Ein VPN verbirgt dein Surfverhalten vor deinem Netzwerk und Internetanbieter sowie deine IP-Adresse vor den besuchten Websites — nützlich in unbekannten WLAN-Netzen oder um zu verhindern, dass ein einziger Anbieter alles aufzeichnet.',
    'Anonym macht es dich nicht: Du vertraust jetzt stattdessen dem VPN-Anbieter, und es hindert Websites nicht daran, dich zu tracken, sobald du dich anmeldest. Für starke Anonymität ist Tor das bessere Werkzeug.',
  ],
  'learn.key-verification.title': 'Warum Schlüssel verifizieren',
  'learn.key-verification.body': [
    'Verschlüsselung setzt voraus, dass du mit der richtigen Person sprichst. Ein Man-in-the-Middle-Angriff funktioniert, indem er sich zwischen dich und dein Gegenüber setzt und eigene Schlüssel einschmuggelt — du würdest trotzdem ein Schlosssymbol sehen.',
    'Das Verifizieren einer Sicherheitsnummer (persönlich per QR oder über einen separaten vertrauenswürdigen Kanal) bestätigt, dass kein Eindringling dazwischen ist. Mach es einmal für deine sensibelsten Kontakte.',
  ],

  // a11y
  'a11y.skipToContent': 'Zum Inhalt springen',
  'a11y.primaryNav': 'Hauptnavigation',
} satisfies Dict
