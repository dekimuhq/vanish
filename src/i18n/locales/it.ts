import type { Dict } from './en'

export const it: Dict = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': 'scomparisci, un livello alla volta',
  'offline.badge': '⬡ 100% offline',
  'offline.title': 'Nessuna richiesta di rete lascia il tuo dispositivo',
  'nav.dashboard': 'Dashboard',
  'nav.plan': 'La Scala',
  'nav.brokers': 'Broker',
  'nav.letters': 'Lettere',
  'nav.panic': 'Panico',
  'nav.settings': 'Impostazioni',

  // Common
  'common.back': '← Indietro',
  'common.next': 'Avanti →',
  'common.cancel': 'Annulla',

  // Country group labels (select optgroups)
  'countryGroup.eu': 'Unione Europea',
  'countryGroup.uk': 'Regno Unito',
  'countryGroup.us': 'Stati Uniti',
  'countryGroup.other': 'Altrove',

  // Tiers
  'tier.tidy.name': 'Metti in Ordine',
  'tier.tidy.tagline': 'Poco sforzo, grande sollievo',
  'tier.tidy.who': 'Per tutti. I 20 minuti che ognuno dovrebbe dedicarsi.',
  'tier.reduce.name': 'Riduci',
  'tier.reduce.tagline': 'Riduci la tua impronta digitale',
  'tier.reduce.who': "Sei curioso della privacy e vuoi prendere davvero le distanze da Big Tech e dai broker.",
  'tier.lockdown.name': 'Blindati',
  'tier.lockdown.tagline': 'Rafforza tutto',
  'tier.lockdown.who': 'Vuoi essere davvero difficile da tracciare, profilare o doxxare.',
  'tier.ghost.name': 'Fantasma',
  'tier.ghost.tagline': 'Scompari',
  'tier.ghost.who': 'Attivisti, sopravvissuti, bersagli diretti. Massima separazione tra il tuo nome e la tua vita.',

  // Categories
  'category.accounts': 'Account',
  'category.data-brokers': 'Data Broker',
  'category.devices': 'Dispositivi',
  'category.browser': 'Browser',
  'category.social': 'Social',
  'category.search': 'Ricerca',
  'category.messaging': 'Messaggistica',
  'category.email': 'Email',
  'category.finance': 'Finanza',
  'category.network': 'Rete',
  'category.legal': 'Strumenti Legali',

  // Score labels + ring
  'score.wideOpen': 'Completamente esposto',
  'score.exposed': 'Vulnerabile',
  'score.guarded': 'Protetto',
  'score.ghosting': 'Fantasma',
  'score.ariaLabel': 'Punteggio privacy {score} su 100',

  // Effort / impact pills
  'pills.effort.low': 'Facile',
  'pills.effort.med': 'Moderato',
  'pills.effort.high': 'Impegnativo',
  'pills.effortTitle': 'Quanto impegno richiede',
  'pills.impact.low': 'Impatto basso',
  'pills.impact.med': 'Impatto buono',
  'pills.impact.high': 'Impatto alto',

  // Adversaries (onboarding concern → adversary phrase)
  'adversary.stalking': 'una persona specifica che cerca di trovarti',
  'adversary.bigtech': 'la profilazione di Big Tech e le reti pubblicitarie',
  'adversary.brokers': 'i data broker che vendono il tuo profilo',
  'adversary.breaches': 'violazioni di dati e furto di account',
  'adversary.recruiters': 'curiosi occasionali — date, recruiter',
  'adversary.spam': 'spammer e liste di posta indesiderata',

  // Onboarding
  'onboarding.subtitle': 'Scompari da internet, un livello alla volta.',
  'onboarding.bullet1': 'Funziona al 100% sul tuo dispositivo. Nessun account, nessun server, nessun tracciamento.',
  'onboarding.bullet2': 'Una guida a gradini di azioni concrete di rimozione, dal riordino alla scomparsa totale.',
  'onboarding.bullet3': 'Genera lettere di cancellazione GDPR/CCPA che invii tu stesso.',
  'onboarding.privacyNote': 'Tre domande rapide personalizzano il tuo piano. Le tue risposte non lasciano mai questo dispositivo.',
  'onboarding.start': 'Inizia →',
  'onboarding.step1.title': 'Dove sei?',
  'onboarding.step1.hint': "Determina quali broker e diritti legali si applicano — e indica la tua autorità di protezione dei dati nelle lettere.",
  'onboarding.selectCountry': 'Seleziona il tuo paese…',
  'onboarding.authority': 'La tua autorità di controllo:',
  'onboarding.step2.title': 'Cosa ti preoccupa di più?',
  'onboarding.step2.hint': 'Scegli quello che vuoi. Metteremo in primo piano le azioni corrispondenti.',
  'onboarding.concern.recruiters': 'Persone che mi cercano su Google (date, recruiter)',
  'onboarding.concern.brokers': 'Data broker che vendono le mie informazioni',
  'onboarding.concern.bigtech': 'Profilazione e pubblicità di Big Tech',
  'onboarding.concern.breaches': 'Violazioni di dati e furto di account',
  'onboarding.concern.stalking': 'Una persona specifica che mi cerca',
  'onboarding.concern.spam': 'Chiamate spam, SMS e posta indesiderata',
  'onboarding.step3.title': 'Fino a dove vuoi spingerti?',
  'onboarding.step3.hint': "Un obiettivo, non una prigione — puoi salire di livello in qualsiasi momento.",
  'onboarding.adversaryLead': 'In base alle tue preoccupazioni, il tuo avversario principale è {adversary}.',
  'onboarding.rationale':
    "La tua preoccupazione principale — {adversary} — richiede {tier}. Calibra il tuo impegno su chi stai davvero cercando di evitare; andare oltre il tuo modello di minaccia costa convenienza senza un reale guadagno.",
  'onboarding.useRecommended': 'Usa il consigliato: T{tier} · {name}',
  'onboarding.build': 'Costruisci il mio piano →',

  // Dashboard
  'dashboard.title': 'Il tuo punteggio privacy',
  'dashboard.actionsDone': '{done} di {total} azioni completate · obiettivo',
  'dashboard.encouragement.danger':
    "Sei completamente esposto — ma le prime azioni hanno il massimo impatto e richiedono pochi minuti. Inizia dall'alto.",
  'dashboard.encouragement.warn':
    "Buon inizio. Hai colmato le lacune più facili; il livello successivo è dove inizia la vera distanza da broker e Big Tech.",
  'dashboard.encouragement.ok':
    "Ora sei davvero difficile da tracciare. Mantieni i controlli periodici e rivedi il tuo modello di minaccia ogni trimestre.",
  'dashboard.openLadder': 'Apri la scala →',
  'dashboard.printPlan': '🖨 Stampa il mio piano',
  'dashboard.rechecksDue.one': '↻ {count} ricontrollo in scadenza',
  'dashboard.rechecksDue.other': '↻ {count} ricontrolli in scadenza',
  'dashboard.streak': '🔥 {count} giorni di fila',
  'dashboard.doneThisWeek': '{count} completate questa settimana',
  'dashboard.rechecksHeading': '↻ Ricontrolli in scadenza',
  'dashboard.rechecksBody': "I data broker ti reinseriscono dopo qualche mese. Questi opt-out vanno rifatti:",
  'dashboard.overdue': 'scaduto',
  'dashboard.recommendedNext': 'Consigliato dopo',
  'dashboard.seeAll': 'Vedi tutto',
  'dashboard.allDone': "🎉 Ogni azione rilevante è completata o saltata. Sei un fantasma — tieni d'occhio i ricontrolli.",

  // Plan / The Ladder
  'plan.title': 'La Scala',
  'plan.subtitle': "Sali al tuo ritmo. Scegli le azioni ad alto impatto da qualsiasi livello — la privacy è personale.",
  'plan.results.one': '{count} risultato per "{query}"',
  'plan.results.other': '{count} risultati per "{query}"',
  'plan.allTiers': 'Tutti i livelli',
  'plan.allCategories': 'Tutte le categorie',
  'plan.hideCompleted': 'Nascondi completate',
  'plan.searchPlaceholder': 'Cerca tra tutte le azioni… (es. "Spokeo", "2FA", "email")',
  'plan.filterByCategory': 'Filtra per categoria',
  'plan.searchAria': 'Cerca azioni',

  // Brokers
  'brokers.title': 'Lista dei Data Broker',
  'brokers.subtitle':
    "I broker sono quelli che mettono il tuo indirizzo di casa e il tuo numero di telefono nei risultati di ricerca di uno sconosciuto. Inizia dai siti senza richiesta di documento, poi passa agli aggregatori che alimentano tutti gli altri.",
  'brokers.cleared': '{done}/{total} rimossi.',
  'brokers.dueToRedo.one': '↻ {count} da rifare.',
  'brokers.dueToRedo.other': '↻ {count} da rifare.',
  'brokers.relistBody':
    "I broker ti reinseriscono silenziosamente dopo 3–6 mesi — è per questo che i servizi fanno pagare un abbonamento mensile. Vanish ti ricorda solo di rifare l'opt-out gratuito.",
  'brokers.honestLabel': '⚠️ La verità senza filtri:',
  'brokers.honestBody':
    "gli opt-out riducono la tua esposizione, ma non garantiscono invisibilità permanente. I link cambiano e i dati ricompaiono. Trattalo come un'abitudine ricorrente, non come una soluzione unica — e non pagare mai una \"garanzia di rimozione\".",

  // Letters (chrome only — generated letter body/subject stay English)
  'letters.title': "Officina delle Lettere",
  'letters.subtitle':
    "Genera una richiesta di cancellazione o accesso ai dati con basi legali. Viene costruita interamente sul tuo dispositivo dai dati qui sotto — nulla viene inviato per te. Copi o invii via email tu stesso.",
  'letters.authorityLabel': 'La tua autorità di controllo ({flag} {name}):',
  'letters.authorityNote': "Indicata nella lettera — rivolgiti qui se vieni ignorato.",
  'letters.noAuthority': "Imposta il tuo paese nelle Impostazioni per indicare la tua autorità di controllo in questa lettera.",
  'letters.recipientOrg': 'Organizzazione destinataria',
  'letters.orgPlaceholder': 'es. Spokeo, Inc.',
  'letters.recipientEmail': 'Email del destinatario (facoltativo)',
  'letters.yourDetails': 'I tuoi dati — salvati solo su questo dispositivo, usati per compilare la lettera',
  'letters.fullName': 'Nome completo',
  'letters.namePlaceholder': 'Il tuo nome completo',
  'letters.email': 'Email',
  'letters.postalAddress': 'Indirizzo postale',
  'letters.addressPlaceholder': 'Per i broker solo per posta',
  'letters.subject': 'Oggetto:',
  'letters.copy': '⧉ Copia testo',
  'letters.copied': '✓ Copiato',
  'letters.download': '↓ Scarica .txt',
  'letters.openEmail': '✉️ Apri in email',
  'letters.disclaimerPre': '⚖️ Modello per comodità, ',
  'letters.disclaimerStrong': 'non consulenza legale',
  'letters.disclaimerPost': '. Verifica il destinatario corretto e i tuoi diritti locali prima di inviare.',

  // Panic
  'panic.title': '🆘 Modalità Panico',
  'panic.intro':
    "Se qualcuno sta cercando attivamente di trovarti, molestarti o doxxarti, fai queste cose nell'ordine indicato. Sono le mosse ad alto impatto per spezzare il filo tra il tuo nome e la tua posizione, a partire dalle più rapide.",
  'panic.danger': 'Se sei in pericolo immediato, contatta prima i servizi di emergenza locali.',
  'panic.resources':
    "Risorse per i sopravvissuti: negli Stati Uniti, la National DV Hotline gestisce un referral al programma Address Confidentiality; molti paesi hanno equivalenti. Un'organizzazione locale di assistenza alle vittime può aiutarti a presentare richieste di soppressione dei dati pubblici.",
  'panic.doNow': 'Fai subito',
  'panic.doneCount': '{done}/{total} completate',

  // Report / Disappearance Plan
  'report.title': 'Il Tuo Piano di Sparizione',
  'report.subtitle': "Una checklist stampabile di ciò che resta. Salvala come PDF o stampala.",
  'report.print': '🖨 Stampa / Salva come PDF',
  'report.costNote':
    "Vanish alza il costo di trovarti. Contro un avversario ben finanziato e determinato nulla è assoluto — e ciò che fa prendere le persone è raramente la tecnologia, ma la coerenza e l'ego (un nickname riusato, uno scivolone). Calibra il tuo impegno su chi stai davvero cercando di evitare.",
  'report.docTitle': 'Vanish — Piano di Sparizione',
  'report.meta': 'Generato il {date} · obiettivo {tier} · regione {region}',
  'report.privacyScore': 'punteggio privacy',
  'report.tierHeading': 'Livello {tier} · {name} — {count} da fare',
  'report.allDone': 'Niente rimasto — ogni azione rilevante è completata o saltata. Mantieni i ricontrolli.',
  'report.footer':
    "Creato con Vanish — un coach per la privacy completamente offline. I link di opt-out cambiano; verifica prima di agire. Non è consulenza legale.",

  // Settings
  'settings.title': 'Impostazioni',
  'settings.language': 'Lingua',
  'settings.languageHint': 'Cambia ogni schermata. Salvato solo su questo dispositivo.',
  'settings.yourPlan': 'Il tuo piano',
  'settings.country': 'Paese',
  'settings.notSet': 'Non impostato',
  'settings.supervisoryAuthority': 'Autorità di controllo:',
  'settings.region': 'Regione: {region}',
  'settings.targetTier': 'Livello obiettivo',
  'settings.codeWordTitle': '🔑 Parola in codice di famiglia',
  'settings.codeWordBody':
    "Una parola condivisa che smaschera le truffe \"sono io, mandami i soldi\" fatte con il clone vocale dell'IA. Concordala con i tuoi familiari stretti e viene salvata solo su questo dispositivo — non viene mai inviata da nessuna parte.",
  'settings.codeWordPlaceholder': 'es. pinguino blu',
  'settings.printCard': '🖨 Stampa un bigliettino da portafoglio',
  'settings.codeWordRule':
    "Regola: qualsiasi richiesta urgente di denaro o segreto deve contenere questa parola, altrimenti trattala come falsa. Non inviare mai la parola stessa via SMS o email.",
  'settings.cardDocTitle': 'Vanish — parola in codice',
  'settings.cardLabel': 'Parola in codice di famiglia',
  'settings.cardNote':
    "Qualsiasi richiesta urgente di denaro o segreto deve contenere questa parola, altrimenti trattala come falsa. Non inviare la parola via SMS o email.",
  'settings.backupTitle': 'Backup e trasferimento',
  'settings.backupBody':
    "Nessun account significa nessuna sincronizzazione cloud — per scelta. Esporta un file JSON cifrato da te per spostare il tuo piano su un altro dispositivo. Il file contiene i tuoi progressi e i dati che hai inserito per le lettere.",
  'settings.export': '↓ Esporta piano',
  'settings.import': '↑ Importa piano',
  'settings.importOk': '✓ Piano importato.',
  'settings.importErr': '✗ Impossibile leggere quel file.',
  'settings.wipeTitle': 'Cancella tutto',
  'settings.wipeBody':
    "Elimina tutti i progressi e i dati personali da questo dispositivo. Non è possibile annullare l'operazione. (Non c'è nulla su un server da cancellare — non c'è mai stato.)",
  'settings.wipeBtn': 'Cancella tutti i dati locali',
  'settings.wipeConfirm': 'Sicuro? Questo elimina tutto.',
  'settings.wipeYes': 'Sì, cancella',
  'settings.dataTitle': 'Come Vanish gestisce i tuoi dati',
  'settings.dataBullet1': "Tutto vive nel localStorage di questo browser. Nulla viene caricato, mai.",
  'settings.dataBullet2':
    "La Content-Security-Policy della pagina blocca tutte le richieste di rete di terze parti — verificabile negli strumenti di sviluppo del tuo browser.",
  'settings.dataBullet3': "Nessuna analisi, nessun cookie, nessun account, nessuna telemetria — verificalo negli strumenti di sviluppo del tuo browser.",
  'settings.dataBullet4':
    "I link alle pagine di opt-out si aprono in una nuova scheda — queste sono le uniche \"chiamate di rete\", e le avvii tu ogni volta.",

  // Decoy Kit
  'decoy.title': '⬡ Kit Esca',
  'decoy.subtitle':
    "Avvelena, non cancellare. I broker e le piattaforme reinseriscono e ricostruiscono, quindi aggiungere rumore generico ai tuoi account a bassa posta batte l'inseguire le cancellazioni. Questo kit gira interamente sul tuo dispositivo.",
  'decoy.responsibly': 'Usalo in modo responsabile',
  'decoy.do': 'Fai',
  'decoy.never': 'Mai',
  'decoy.rulesDo': [
    'Usa solo account che sono TUOI.',
    'Usalo su profili usa e getta a bassa posta, mai su nulla legato a denaro o documenti.',
    'Punta al banale e generico — rumore, non una persona falsa convincente.',
  ],
  'decoy.rulesDont': [
    'Non impersonare mai una persona reale con nome e cognome.',
    'Non scrivere mai recensioni o valutazioni false.',
    "Non iscrivere mai nessun altro, né usare i dati di qualcun altro.",
    "Non usare questo strumento per sfuggire a un creditore, un tribunale o le forze dell'ordine.",
  ],
  'decoy.nameVariants': 'Varianti del nome',
  'decoy.noVariants': 'Nessuna variante per un nome di una sola parola — aggiungi un cognome nelle Impostazioni per generarne di più.',
  'decoy.addNamePre': 'Aggiungi il tuo nome in ',
  'decoy.addNameLink': 'Impostazioni',
  'decoy.addNamePost': ' per generare varianti ortografiche da distribuire su profili usa e getta.',
  'decoy.fillerBio': 'Bio di riempimento',
  'decoy.regenerate': '↻ Rigenera',
  'decoy.copyBio': '⧉ Copia bio',
  'decoy.copied': '✓ Copiato',
  'decoy.footer':
    "Generico per scelta — l'obiettivo è il rumore statistico, non una persona falsa convincente. Incollalo nei profili che sono tuoi e a bassa posta.",
  'decoy.interests': [
    'piante da appartamento', 'ciclismo', 'pane a lievitazione naturale', 'birdwatching', 'giochi da tavolo',
    'trekking', 'fotografia analogica', 'jazz', 'ceramica', 'cruciverba',
    'giardinaggio', 'corsa', 'cucina', 'astronomia', 'nuoto in acque fredde',
    'scacchi', 'maglia', 'viaggi on the road', 'caffè', 'concerti dal vivo',
  ],
  'decoy.bioTemplate': "Qui solo per {list}. Semplice e cordiale. Opinioni mie.",
  'decoy.bioAnd': 'e',

  // Action card
  'actionCard.markDone': 'Segna "{title}" come completata',
  'actionCard.markNotDone': 'Segna "{title}" come non completata',
  'actionCard.open': 'Apri',
  'actionCard.recheckEvery': '↻ ricontrolla ogni {days}gg',
  'actionCard.recheckTitle': 'I broker ti reinseriscono; rifai questa operazione periodicamente',
  'actionCard.searchCurrent': '🔎 Cerca la pagina aggiornata',
  'actionCard.linkDead': 'link non funziona?',
  'actionCard.linkDeadTitle': 'Gli URL di opt-out cambiano spesso',
  'actionCard.generateLetter': '✍️ Genera lettera',
  'actionCard.openTool': 'Apri strumento',
  'actionCard.howTo': 'Come fare',
  'actionCard.hideSteps': 'Nascondi passi',
  'actionCard.notRelevant': 'Non rilevante',
  'actionCard.restore': 'Ripristina',
} satisfies Dict
