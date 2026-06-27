import type { Dict } from './en'

export const ca: Dict = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': 'desapareix, un nivell alhora',
  'offline.badge': '⬡ 100% sense connexió',
  'offline.title': 'Cap petició de xarxa surt del teu dispositiu',
  'nav.dashboard': 'Tauler',
  'nav.plan': "L'Escala",
  'nav.brokers': 'Brokers',
  'nav.letters': 'Cartes',
  'nav.panic': 'Pànic',
  'nav.settings': 'Configuració',

  // Common
  'common.back': '← Enrere',
  'common.next': 'Següent →',
  'common.cancel': "Cancel·la",

  // Country group labels (select optgroups)
  'countryGroup.eu': 'Unió Europea',
  'countryGroup.uk': 'Regne Unit',
  'countryGroup.us': 'Estats Units',
  'countryGroup.other': 'Altres països',

  // Tiers
  'tier.tidy.name': 'Endreça',
  'tier.tidy.tagline': 'Poc esforç, molt de respir',
  'tier.tidy.who': 'Tothom. Els 20 minuts que tothom hauria de dedicar-hi.',
  'tier.reduce.name': 'Redueix',
  'tier.reduce.tagline': "Minimitza la teva empremta",
  'tier.reduce.who': "Et preocupa la privacitat i vols distanciar-te de la Gran Tecnologia i dels brokers.",
  'tier.lockdown.name': "Blinda't",
  'tier.lockdown.tagline': "Reforça-ho tot",
  'tier.lockdown.who': "Vols ser genuïnament difícil de rastrejar, perfilar o desemmascarar.",
  'tier.ghost.name': 'Fantasma',
  'tier.ghost.tagline': 'Desapareix',
  'tier.ghost.who': "Activistes, supervivents, persones amenaçades. Separació màxima del teu nom.",

  // Categories
  'category.accounts': 'Comptes',
  'category.data-brokers': 'Brokers de dades',
  'category.devices': 'Dispositius',
  'category.browser': 'Navegador',
  'category.social': 'Xarxes socials',
  'category.search': 'Cercadors',
  'category.messaging': 'Missatgeria',
  'category.email': 'Correu electrònic',
  'category.finance': 'Finances',
  'category.network': 'Xarxa',
  'category.legal': 'Eines legals',

  // Score labels + ring
  'score.wideOpen': 'Totalment exposat',
  'score.exposed': 'Exposat',
  'score.guarded': 'Protegit',
  'score.ghosting': 'Fantasma',
  'score.ariaLabel': 'Puntuació de privacitat {score} de 100',

  // Effort / impact pills
  'pills.effort.low': 'Fàcil',
  'pills.effort.med': 'Moderat',
  'pills.effort.high': 'Intens',
  'pills.effortTitle': "Quant d'esforç requereix",
  'pills.impact.low': 'Impacte baix',
  'pills.impact.med': 'Impacte sòlid',
  'pills.impact.high': 'Impacte alt',

  // Adversaries (onboarding concern → adversary phrase)
  'adversary.stalking': "una persona concreta que t'intenta localitzar",
  'adversary.bigtech': 'el perfilament de la Gran Tecnologia i les xarxes publicitàries',
  'adversary.brokers': 'brokers de dades que venen el teu perfil',
  'adversary.breaches': 'filtracions i suplantació de comptes',
  'adversary.recruiters': 'cerques casuals — parelles, reclutadors',
  'adversary.spam': 'spammers i llistes de correu brossa',

  // Onboarding
  'onboarding.subtitle': "Desapareix d'internet, un nivell alhora.",
  'onboarding.bullet1': "Funciona 100% al teu dispositiu. Sense compte, sense servidors, sense rastreig.",
  'onboarding.bullet2': "Una guia pas a pas d'accions reals d'eliminació, des d'endreçar fins a desaparèixer del tot.",
  'onboarding.bullet3': 'Genera cartes de supressió GDPR/CCPA que tu mateix envies.',
  'onboarding.privacyNote': "Tres preguntes ràpides per personalitzar el teu pla. Les teves respostes no surten mai d'aquest dispositiu.",
  'onboarding.start': 'Comença →',
  'onboarding.step1.title': 'On ets?',
  'onboarding.step1.hint': "Determina quins brokers i drets legals t'apliquen — i identifica l'autoritat de protecció de dades en les cartes.",
  'onboarding.selectCountry': 'Selecciona el teu país…',
  'onboarding.authority': 'La teva autoritat de supervisió:',
  'onboarding.step2.title': 'Què et preocupa més?',
  'onboarding.step2.hint': "Tria les que vulguis. Mostrarem primer les accions corresponents.",
  'onboarding.concern.recruiters': 'Gent que em cerca a Google (parelles, reclutadors)',
  'onboarding.concern.brokers': 'Brokers de dades que venen la meva informació',
  'onboarding.concern.bigtech': 'Perfilament i anuncis de la Gran Tecnologia',
  'onboarding.concern.breaches': 'Filtracions i suplantació de comptes',
  'onboarding.concern.stalking': 'Una persona concreta que em vol localitzar',
  'onboarding.concern.spam': 'Trucades, missatges i correu brossa',
  'onboarding.step3.title': 'Fins on vols arribar?',
  'onboarding.step3.hint': 'Un objectiu, no una gàbia — pots pujar de nivell quan vulguis.',
  'onboarding.adversaryLead': 'Segons les teves preocupacions, el teu adversari principal és {adversary}.',
  'onboarding.rationale':
    "La teva preocupació principal — {adversary} — recomana {tier}. Ajusta l'esforç a qui t'estàs amagant realment; anar més lluny del que necessita el teu model d'amenaça costa comoditat sense cap guany real.",
  'onboarding.useRecommended': 'Usa el recomanat: T{tier} · {name}',
  'onboarding.build': 'Crea el meu pla →',

  // Dashboard
  'dashboard.title': 'La teva puntuació de privacitat',
  'dashboard.actionsDone': '{done} de {total} accions fetes · objectiu',
  'dashboard.encouragement.danger':
    "Estàs totalment exposat ara mateix — però les primeres accions són les de més impacte i es fan en minuts. Comença des de dalt.",
  'dashboard.encouragement.warn':
    "Bon inici. Has tancat les escletxes fàcils; el proper nivell és on comença la distància real dels brokers i la Gran Tecnologia.",
  'dashboard.encouragement.ok':
    "Ara ets genuïnament difícil de rastrejar. Mantén les revisions periòdiques i revisa el teu model d'amenaça cada trimestre.",
  'dashboard.openLadder': "Obre l'escala →",
  'dashboard.printPlan': '🖨 Imprimeix el meu pla',
  'dashboard.rechecksDue.one': '↻ {count} revisió pendent',
  'dashboard.rechecksDue.other': '↻ {count} revisions pendents',
  'dashboard.streak': '🔥 Ratxa de {count} dies',
  'dashboard.doneThisWeek': '{count} fetes aquesta setmana',
  'dashboard.rechecksHeading': '↻ Revisions pendents',
  'dashboard.rechecksBody': "Els brokers de dades et tornen a publicar al cap d'uns mesos. Aquests opt-outs cal refer-los:",
  'dashboard.overdue': 'endarrerit',
  'dashboard.recommendedNext': 'Recomanat a continuació',
  'dashboard.seeAll': 'Veure-ho tot',
  'dashboard.allDone': "🎉 Totes les accions rellevants estan fetes o descartades. Ets un fantasma — mantén les revisions.",

  // Plan / The Ladder
  'plan.title': "L'Escala",
  'plan.subtitle': "Puja al teu ritme. Tria les accions de més impacte de qualsevol nivell — la privacitat és personal.",
  'plan.results.one': '{count} resultat per a "{query}"',
  'plan.results.other': '{count} resultats per a "{query}"',
  'plan.allTiers': 'Tots els nivells',
  'plan.allCategories': 'Totes les categories',
  'plan.hideCompleted': 'Amaga les completades',
  'plan.searchPlaceholder': 'Cerca entre totes les accions… (p. ex. "Spokeo", "2FA", "correu")',
  'plan.filterByCategory': 'Filtra per categoria',
  'plan.searchAria': 'Cerca accions',

  // Brokers
  'brokers.title': 'Llista negra de brokers',
  'brokers.subtitle':
    "Els brokers són qui posen la teva adreça i telèfon als resultats de cerca d'un desconegut. Comença pels que no necessiten cap identificació, després ataca els agregadors que alimenten tots els altres.",
  'brokers.cleared': '{done}/{total} eliminats.',
  'brokers.dueToRedo.one': '↻ {count} per refer.',
  'brokers.dueToRedo.other': '↻ {count} per refer.',
  'brokers.relistBody':
    "Els brokers et tornen a publicar en silenci al cap de 3–6 mesos — per això els serveis cobren mensualment. Vanish simplement et recorda que facis de nou l'opt-out gratuït.",
  'brokers.honestLabel': '⚠️ La veritat sense embuts:',
  'brokers.honestBody':
    "els opt-outs redueixen la teva exposició, però no garanteixen invisibilitat permanent. Els enllaços canvien i les dades reapareixen. Tracta-ho com un hàbit recurrent, no com una solució única — i mai paguis per una \"garantia d'eliminació\".",

  // Letters (chrome only — generated letter body/subject stay English)
  'letters.title': 'Forja de cartes',
  'letters.subtitle':
    "Genera una sol·licitud de supressió o accés amb base legal. Es construeix íntegrament al teu dispositiu a partir de les dades que introdueixis — res s'envia per tu. Tu mateix la copies o l'envies per correu.",
  'letters.authorityLabel': 'La teva autoritat de supervisió ({flag} {name}):',
  'letters.authorityNote': "Esmentada a la carta — escala aquí si t'ignoren.",
  'letters.noAuthority': "Configura el teu país a Configuració per incloure la teva autoritat de supervisió en aquesta carta.",
  'letters.recipientOrg': 'Organització destinatària',
  'letters.orgPlaceholder': 'p. ex. Spokeo, Inc.',
  'letters.recipientEmail': 'Correu del destinatari (opcional)',
  'letters.yourDetails': "Les teves dades — emmagatzemades només en aquest dispositiu, usades per emplenar la carta",
  'letters.fullName': 'Nom complet',
  'letters.namePlaceholder': 'El teu nom complet',
  'letters.email': 'Correu electrònic',
  'letters.postalAddress': 'Adreça postal',
  'letters.addressPlaceholder': 'Per a brokers que només accepten correu postal',
  'letters.subject': 'Assumpte:',
  'letters.copy': '⧉ Copia el text',
  'letters.copied': '✓ Copiat',
  'letters.download': '↓ Baixa .txt',
  'letters.openEmail': '✉️ Obre al correu',
  'letters.disclaimerPre': '⚖️ Plantilla per comoditat, ',
  'letters.disclaimerStrong': 'no és assessorament legal',
  'letters.disclaimerPost': '. Verifica el destinatari correcte i els teus drets locals abans d\'enviar.',

  // Panic
  'panic.title': '🆘 Mode pànic',
  'panic.intro':
    "Si algú t'està intentant localitzar, assetjar o desemmascarar activament, fes-ho en ordre. Són els passos de més impacte per trencar el rastre entre el teu nom i la teva ubicació, els més ràpids primer.",
  'panic.danger': "Si estàs en perill immediat, contacta primer amb els serveis d'emergència locals.",
  'panic.resources':
    "Recursos per a supervivents: als EUA, la National DV Hotline gestiona remissions del Programa de Confidencialitat d'Adreces; molts països tenen equivalents. Una organització local de suport a víctimes et pot ajudar a presentar sol·licituds de supressió de registres públics.",
  'panic.doNow': 'Fes-ho ara',
  'panic.doneCount': '{done}/{total} fetes',

  // Report / Disappearance Plan
  'report.title': 'El teu pla de desaparició',
  'report.subtitle': 'Una llista imprimible del que queda per fer. Desa-la com a PDF o imprimeix-la.',
  'report.print': '🖨 Imprimeix / Desa com a PDF',
  'report.costNote':
    "Vanish augmenta el cost de trobar-te. Contra un adversari finançat i determinat res és absolut — i el que sol descobrir la gent no és la tecnologia, sinó la inconsistència i l'ego (un nom d'usuari reutilitzat, un descuit). Ajusta l'esforç a qui t'estàs amagant realment.",
  'report.docTitle': 'Vanish — Pla de desaparició',
  'report.meta': 'Generat el {date} · objectiu {tier} · regió {region}',
  'report.privacyScore': 'puntuació de privacitat',
  'report.tierHeading': 'Nivell {tier} · {name} — {count} per fer',
  'report.allDone': 'Res a fer — totes les accions rellevants estan fetes o descartades. Mantén les revisions.',
  'report.footer':
    "Fet amb Vanish — una guia de privacitat totalment sense connexió. Els enllaços d'opt-out canvien; verifica'ls abans d'actuar. No és assessorament legal.",

  // Settings
  'settings.title': 'Configuració',
  'settings.language': 'Idioma',
  'settings.languageHint': 'Canvia totes les pantalles. Emmagatzemat només en aquest dispositiu.',
  'settings.yourPlan': 'El teu pla',
  'settings.country': 'País',
  'settings.notSet': 'No configurat',
  'settings.supervisoryAuthority': 'Autoritat de supervisió:',
  'settings.region': 'Regió: {region}',
  'settings.targetTier': 'Nivell objectiu',
  'settings.codeWordTitle': '🔑 Paraula clau familiar',
  'settings.codeWordBody':
    "Una paraula compartida que derrota les estafes de clonació de veu per IA del tipus \"sóc jo, envia'm diners\". Acorda-la amb la família propera i s'emmagatzema només en aquest dispositiu — mai s'envia enlloc.",
  'settings.codeWordPlaceholder': 'p. ex. pingüí blau',
  'settings.printCard': '🖨 Imprimeix una targeta de cartera',
  'settings.codeWordRule':
    "Regla: qualsevol sol·licitud urgent de diners o secret ha d'incloure aquesta paraula, o tracta-la com a falsa. Mai enviïs la paraula per missatge o correu.",
  'settings.cardDocTitle': 'Paraula clau Vanish',
  'settings.cardLabel': 'Paraula clau familiar',
  'settings.cardNote':
    "Qualsevol sol·licitud urgent de diners o secret ha d'incloure aquesta paraula, o tracta-la com a falsa. No enviïs ni escriguis la paraula per missatge o correu.",
  'settings.backupTitle': 'Còpia de seguretat i transferència',
  'settings.backupBody':
    "Sense compte no hi ha sincronització al núvol — per disseny. Exporta un fitxer JSON xifrat per tu per moure el teu pla a un altre dispositiu. El fitxer conté el teu progrés i les dades que has introduït per a les cartes.",
  'settings.export': '↓ Exporta el pla',
  'settings.import': '↑ Importa el pla',
  'settings.importOk': '✓ Pla importat.',
  'settings.importErr': '✗ No s\'ha pogut llegir aquest fitxer.',
  'settings.encBackupTitle': 'Còpia de seguretat xifrada',
  'settings.encBackupBody': 'Esborrar les dades del navegador elimina tot el que hi ha aquí — per disseny. L’única còpia que sobreviu és un fitxer que guardes tu. Aquesta còpia es xifra amb una contrasenya, de manera que el fitxer en si no és una fuita de privacitat. Desa la contrasenya en un lloc segur; no la podem recuperar.',
  'settings.exportEncrypted': '↓ Desa la còpia xifrada (.vanish)',
  'settings.importEncrypted': '↥ Restaura una còpia xifrada',
  'settings.passphrase': 'Contrasenya de la còpia',
  'settings.passphrasePlaceholder': 'Una contrasenya que només sàpigues tu',
  'settings.passphraseRequired': 'Introdueix primer una contrasenya.',
  'settings.backupErr': 'La còpia ha fallat.',
  'settings.backupSaved': '✓ Còpia desada',
  'settings.wipeTitle': 'Esborra-ho tot',
  'settings.wipeBody':
    "Elimina tot el progrés i les dades personals d'aquest dispositiu. Aquesta acció no es pot desfer. (No hi ha res en cap servidor per eliminar — mai no n'hi ha hagut.)",
  'settings.wipeBtn': 'Esborra totes les dades locals',
  'settings.wipeConfirm': 'Segur? Això ho elimina tot.',
  'settings.wipeYes': "Sí, esborra-ho",
  'settings.dataTitle': 'Com gestiona Vanish les teves dades',
  'settings.dataBullet1': "Tot viu a l'emmagatzematge local d'aquest navegador. Res no es puja mai.",
  'settings.dataBullet2':
    "La Política de Seguretat de Contingut de la pàgina bloqueja totes les peticions de xarxa de tercers — verificable a les eines de desenvolupador del teu navegador.",
  'settings.dataBullet3': "Sense analítiques, sense galetes, sense compte, sense telemetria — verifica-ho a les eines de desenvolupador del teu navegador.",
  'settings.dataBullet4':
    "Els enllaços a pàgines d'opt-out s'obren en una pestanya nova — aquestes són les úniques \"peticions de xarxa\", i tu inicies cada una.",

  // Decoy Kit
  'decoy.title': '⬡ Kit de camuflatge',
  'decoy.subtitle':
    "Enverina, no esborris. Els brokers i plataformes et tornen a publicar i reconstruir, de manera que afegir soroll neutral als teus comptes de baix risc és millor que perseguir eliminacions. Aquest kit funciona íntegrament al teu dispositiu.",
  'decoy.responsibly': "Usa'l de manera responsable",
  'decoy.do': 'Fes',
  'decoy.never': 'Mai',
  'decoy.rulesDo': [
    "Usa-ho sempre i únicament en comptes que siguin TEUS.",
    "Aplica-ho en perfils de baix risc i prescindibles, mai en res vinculat a diners o identitat.",
    "Busca que sigui anodí i genèric — soroll, no una persona falsa convincent.",
  ],
  'decoy.rulesDont': [
    "Mai et facis passar per una persona real i identificada.",
    "Mai escriguis ressenyes o valoracions falses.",
    "Mai et registris en nom d'una altra persona ni facis servir les dades d'altri.",
    "Mai ho facis servir per evadir un creditor, un tribunal o les forces de l'ordre.",
  ],
  'decoy.nameVariants': 'Variants del nom',
  'decoy.noVariants': "Sense variants per a un nom d'una sola paraula — afegeix un cognom a Configuració per generar-ne més.",
  'decoy.addNamePre': 'Afegeix el teu nom a ',
  'decoy.addNameLink': 'Configuració',
  'decoy.addNamePost': " per generar grafies alternatives i distribuir-les en perfils prescindibles.",
  'decoy.fillerBio': 'Bio de farciment',
  'decoy.regenerate': '↻ Regenera',
  'decoy.copyBio': '⧉ Copia la bio',
  'decoy.copied': '✓ Copiat',
  'decoy.footer':
    "Genèric per disseny — l'objectiu és soroll estadístic, no una persona falsa convincent. Enganxa-ho en perfils que siguin teus i de baix risc.",
  'decoy.interests': [
    "plantes d'interior", 'ciclisme', 'fer pa de massa mare', "observació d'ocells", 'jocs de taula',
    'senderisme', 'fotografia analògica', 'jazz', 'ceràmica', 'mots encreuats',
    'jardineria', 'córrer', 'cuinar', 'astronomia', "natació en aigües fredes",
    'escacs', 'fer punt', 'viatges en carretera', 'cafè', 'concerts en directe',
  ],
  'decoy.bioTemplate': 'Aquí per {list}. Tracte amable. Opinions pròpies.',
  'decoy.bioAnd': 'i',

  // Action card
  'actionCard.markDone': 'Marca "{title}" com a feta',
  'actionCard.markNotDone': 'Marca "{title}" com a no feta',
  'actionCard.open': 'Obre',
  'actionCard.recheckEvery': '↻ revisa cada {days} dies',
  'actionCard.recheckTitle': 'Els brokers et tornen a publicar; refés-ho periòdicament',
  'actionCard.searchCurrent': '🔎 Cerca la pàgina actual',
  'actionCard.linkDead': 'Enllaç mort?',
  'actionCard.linkDeadTitle': "Les URL d'opt-out canvien sovint",
  'actionCard.generateLetter': '✍️ Genera carta',
  'actionCard.openTool': "Obre l'eina",
  'actionCard.howTo': 'Com fer-ho',
  'actionCard.hideSteps': 'Amaga els passos',
  'actionCard.notRelevant': 'No és rellevant',
  'actionCard.restore': 'Restaura',
  'actionCard.verified': 'Verificat el {date}',
  'actionCard.verifiedTitle': 'Quan es van comprovar per últim cop aquesta acció i el seu enllaç. Informa d’un enllaç mort si ha canviat d’adreça.',

  // Tracked letters
  'letters.status.drafted': 'Esborrany',
  'letters.status.escalated': 'Escalada',
  'letters.status.resolved': 'Resolta',
  'letters.status.responded': 'Resposta',
  'letters.status.sent': 'Esperant resposta',
  'letters.trackedConfirm': '✓ Registrada',
  'letters.tracked.copied': '✓ Copiat',
  'letters.tracked.copyEscalation': '⧉ Copia la reclamació',
  'letters.tracked.daysLeft': '{days} dies fins al termini de resposta',
  'letters.tracked.delete': 'Elimina',
  'letters.tracked.empty': 'Les cartes que registris apareixen aquí amb un compte enrere fins al termini.',
  'letters.tracked.escalate': 'Escala a {authority}',
  'letters.tracked.overdue': 'Endarrerida {days} dies',
  'letters.tracked.resolved': 'Marca com a resolta',
  'letters.tracked.responded': 'Marca com a resposta',
  'letters.tracked.sentOn': 'Enviada el {date}',
  'letters.tracked.title': 'Les meves cartes',
  'letters.trackThis': '+ Registra-la com a enviada',

  // Backup nudge
  'nudge.backup': 'El teu progrés viu només en aquest navegador. Fes-ne una còpia perquè esborrar les teves dades no l’elimini.',
  'nudge.backupCta': 'Fes la còpia ara',
  'nudge.dismiss': 'Més tard',

  // Onboarding — restore from backup
  'onboarding.restore': 'Tornes? Restaura una còpia de seguretat',
  'onboarding.restoreCta': 'Tria el fitxer .vanish',
  'onboarding.restoreErr': 'Contrasenya incorrecta o no és una còpia de Vanish.',
  'onboarding.restorePass': 'Contrasenya de la còpia',
} satisfies Dict
