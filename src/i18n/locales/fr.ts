import type { Dict } from './en'

// fr UI dictionary. Keys mirror en.ts; any missing key falls back to English.
export const fr: Dict = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': "disparaître, un niveau à la fois",
  'offline.badge': '⬡ 100% hors ligne',
  'offline.title': "Aucune requête réseau ne quitte votre appareil",
  'nav.dashboard': 'Tableau de bord',
  'nav.plan': "L'Échelle",
  'nav.brokers': 'Courtiers',
  'nav.letters': 'Lettres',
  'nav.panic': 'Panique',
  'nav.settings': 'Paramètres',

  // Common
  'common.back': '← Retour',
  'common.next': 'Suivant →',
  'common.cancel': 'Annuler',

  // Country group labels (select optgroups)
  'countryGroup.eu': "Union européenne",
  'countryGroup.uk': 'Royaume-Uni',
  'countryGroup.us': 'États-Unis',
  'countryGroup.other': 'Ailleurs',

  // Tiers
  'tier.tidy.name': 'Mise en ordre',
  'tier.tidy.tagline': 'Peu de temps, grand soulagement',
  'tier.tidy.who': 'Tout le monde. Les 20 minutes que chacun devrait prendre.',
  'tier.reduce.name': 'Réduire',
  'tier.reduce.tagline': 'Réduisez votre empreinte',
  'tier.reduce.who': "Vous êtes sensible à la vie privée et voulez prendre de la distance avec les géants du web et les courtiers.",
  'tier.lockdown.name': 'Verrouiller',
  'tier.lockdown.tagline': 'Tout renforcer',
  'tier.lockdown.who': "Vous voulez qu'il soit vraiment difficile de vous pister, vous profiler ou vous doxer.",
  'tier.ghost.name': 'Fantôme',
  'tier.ghost.tagline': 'Disparaître',
  'tier.ghost.who': 'Activistes, victimes, personnes ciblées. Séparation maximale entre votre nom et votre vie.',

  // Categories
  'category.accounts': 'Comptes',
  'category.data-brokers': 'Courtiers en données',
  'category.devices': 'Appareils',
  'category.browser': 'Navigateur',
  'category.social': 'Réseaux sociaux',
  'category.search': 'Recherche',
  'category.messaging': 'Messagerie',
  'category.email': 'E-mail',
  'category.finance': 'Finances',
  'category.network': 'Réseau',
  'category.legal': 'Leviers juridiques',

  // Score labels + ring
  'score.wideOpen': 'Grand ouvert',
  'score.exposed': 'Exposé',
  'score.guarded': 'Protégé',
  'score.ghosting': 'Fantôme',
  'score.ariaLabel': 'Score de confidentialité : {score} sur 100',

  // Effort / impact pills
  'pills.effort.low': 'Facile',
  'pills.effort.med': 'Modéré',
  'pills.effort.high': 'Exigeant',
  'pills.effortTitle': "Ce que ça demande comme effort",
  'pills.impact.low': 'Impact faible',
  'pills.impact.med': 'Impact solide',
  'pills.impact.high': 'Impact fort',

  // Adversaries (onboarding concern → adversary phrase)
  'adversary.stalking': "une personne précise qui cherche à vous retrouver",
  'adversary.bigtech': 'le profilage des géants du web et les réseaux publicitaires',
  'adversary.brokers': 'les courtiers en données qui revendent votre profil',
  'adversary.breaches': 'les fuites de données et la prise de contrôle de comptes',
  'adversary.recruiters': "les recherches informelles — rendez-vous, recruteurs",
  'adversary.spam': 'les spammeurs et les listes de courrier indésirable',

  // Onboarding
  'onboarding.subtitle': "Disparaissez d'internet, un niveau à la fois.",
  'onboarding.bullet1': 'Fonctionne 100% sur votre appareil. Sans compte, sans serveur, sans pistage.',
  'onboarding.bullet2': "Un guide pas à pas vers la suppression de votre présence en ligne, de l'essentiel à l'invisible.",
  'onboarding.bullet3': 'Génère des lettres de suppression GDPR/CCPA que vous envoyez vous-même.',
  'onboarding.privacyNote': 'Trois questions rapides pour personnaliser votre plan. Vos réponses ne quittent jamais cet appareil.',
  'onboarding.start': 'Commencer →',
  'onboarding.step1.title': 'Où êtes-vous ?',
  'onboarding.step1.hint': "Détermine quels courtiers et quels droits s'appliquent — et nomme votre autorité de protection des données dans les lettres.",
  'onboarding.selectCountry': 'Sélectionnez votre pays…',
  'onboarding.authority': 'Votre autorité de contrôle :',
  'onboarding.step2.title': "Qu'est-ce qui vous préoccupe le plus ?",
  'onboarding.step2.hint': "Choisissez autant que vous voulez. Nous ferons remonter les actions correspondantes en premier.",
  'onboarding.concern.recruiters': 'Des personnes qui me cherchent sur Google (rendez-vous, recruteurs)',
  'onboarding.concern.brokers': 'Des courtiers qui revendent mes données',
  'onboarding.concern.bigtech': 'Le profilage des géants du web et les publicités',
  'onboarding.concern.breaches': 'Les fuites de données et la prise de contrôle de comptes',
  'onboarding.concern.stalking': 'Une personne précise qui cherche à me retrouver',
  'onboarding.concern.spam': 'Appels indésirables, SMS et courrier non sollicité',
  'onboarding.step3.title': "Jusqu'où voulez-vous aller ?",
  'onboarding.step3.hint': "Un objectif, pas une contrainte — vous pouvez monter plus haut à tout moment.",
  'onboarding.adversaryLead': "D'après vos préoccupations, votre adversaire principal est {adversary}.",
  'onboarding.rationale':
    "Votre préoccupation principale — {adversary} — appelle le niveau {tier}. Adaptez votre effort à celui contre qui vous vous protégez vraiment ; aller plus loin que votre modèle de menace coûte en confort sans gain réel.",
  'onboarding.useRecommended': 'Utiliser la recommandation : T{tier} · {name}',
  'onboarding.build': 'Construire mon plan →',
  'onboarding.restore': 'De retour ? Restaurez une sauvegarde',
  'onboarding.restoreCta': 'Choisir un fichier .vanish',
  'onboarding.restoreErr': 'Phrase secrète incorrecte, ou ce n’est pas une sauvegarde Vanish.',
  'onboarding.restorePass': 'Phrase secrète de la sauvegarde',

  // Dashboard
  'dashboard.title': 'Votre score de confidentialité',
  'dashboard.actionsDone': '{done} sur {total} actions effectuées · objectif',
  'dashboard.encouragement.danger':
    "Vous êtes totalement exposé pour l'instant — mais les premières actions sont les plus impactantes et prennent quelques minutes. Commencez par le haut.",
  'dashboard.encouragement.warn':
    "Bon début. Vous avez comblé les lacunes faciles ; le niveau suivant est là où vous prenez vraiment de la distance avec les courtiers et les géants du web.",
  'dashboard.encouragement.ok':
    "Vous êtes vraiment difficile à pister maintenant. Faites les vérifications régulières et réévaluez votre modèle de menace chaque trimestre.",
  'dashboard.openLadder': "Ouvrir l'échelle →",
  'dashboard.printPlan': '🖨 Imprimer mon plan',
  'dashboard.rechecksDue.one': '↻ {count} vérification à refaire',
  'dashboard.rechecksDue.other': '↻ {count} vérifications à refaire',
  'dashboard.streak': '🔥 Série de {count} jour',
  'dashboard.doneThisWeek': '{count} effectuées cette semaine',
  'dashboard.rechecksHeading': '↻ Vérifications à refaire',
  'dashboard.rechecksBody': "Les courtiers vous réinscrivent au bout de quelques mois. Ces désinscriptions sont à refaire :",
  'dashboard.overdue': 'en retard',
  'dashboard.recommendedNext': 'Recommandé ensuite',
  'dashboard.seeAll': 'Tout voir',
  'dashboard.allDone': "🎉 Toutes les actions pertinentes sont faites ou ignorées. Vous êtes fantôme — continuez les vérifications.",

  // Plan / The Ladder
  'plan.title': "L'Échelle",
  'plan.subtitle': "Avancez à votre rythme. Choisissez les actions à fort impact dans chaque niveau — la vie privée est une affaire personnelle.",
  'plan.results.one': '{count} résultat pour « {query} »',
  'plan.results.other': '{count} résultats pour « {query} »',
  'plan.allTiers': 'Tous les niveaux',
  'plan.allCategories': 'Toutes les catégories',
  'plan.hideCompleted': 'Masquer les actions effectuées',
  'plan.searchPlaceholder': 'Rechercher des actions… (ex. « Spokeo », « 2FA », « email »)',
  'plan.filterByCategory': 'Filtrer par catégorie',
  'plan.searchAria': 'Rechercher des actions',

  // Brokers
  'brokers.title': 'Liste noire des courtiers',
  'brokers.subtitle':
    "Les courtiers sont ceux qui affichent votre adresse et votre téléphone dans les résultats d'un inconnu. Commencez par les suppressions rapides sans pièce d'identité, puis les agrégateurs qui alimentent tous les autres.",
  'brokers.cleared': '{done}/{total} supprimés.',
  'brokers.dueToRedo.one': '↻ {count} à refaire.',
  'brokers.dueToRedo.other': '↻ {count} à refaire.',
  'brokers.relistBody':
    "Les courtiers vous réinscrivent silencieusement au bout de 3 à 6 mois — c'est pourquoi des services facturent mensuellement. Vanish vous rappelle simplement de refaire la désinscription gratuite.",
  'brokers.honestLabel': '⚠️ La vérité honnête :',
  'brokers.honestBody':
    "les désinscriptions réduisent votre exposition, elles ne garantissent pas une invisibilité permanente. Les liens changent et les données réapparaissent. Considérez cela comme une habitude régulière, pas un acte unique — et ne payez jamais une « garantie de suppression ».",

  // Letters (chrome only — generated letter body/subject stay English)
  'letters.title': 'Forge à lettres',
  'letters.subtitle':
    "Générez une demande de suppression ou d'accès encadrée par la loi. Elle est construite entièrement sur votre appareil à partir des informations ci-dessous — rien n'est envoyé pour vous. Vous la copiez ou l'envoyez vous-même.",
  'letters.authorityLabel': 'Votre autorité de contrôle ({flag} {name}) :',
  'letters.authorityNote': "Mentionnée dans la lettre — adressez-vous à elle si vous êtes ignoré.",
  'letters.noAuthority': "Définissez votre pays dans les Paramètres pour nommer votre autorité de contrôle dans cette lettre.",
  'letters.recipientOrg': 'Organisation destinataire',
  'letters.orgPlaceholder': 'ex. Spokeo, Inc.',
  'letters.recipientEmail': 'E-mail du destinataire (facultatif)',
  'letters.yourDetails': 'Vos coordonnées — stockées uniquement sur cet appareil, utilisées pour remplir la lettre',
  'letters.fullName': 'Nom complet',
  'letters.namePlaceholder': 'Votre nom complet',
  'letters.email': 'E-mail',
  'letters.postalAddress': 'Adresse postale',
  'letters.addressPlaceholder': 'Pour les courtiers par courrier uniquement',
  'letters.subject': 'Objet :',
  'letters.copy': '⧉ Copier le texte',
  'letters.copied': '✓ Copié',
  'letters.download': '↓ Télécharger .txt',
  'letters.openEmail': "✉️ Ouvrir dans l'e-mail",
  'letters.disclaimerPre': '⚖️ Modèle fourni à titre indicatif, ',
  'letters.disclaimerStrong': 'pas un conseil juridique',
  'letters.disclaimerPost': ". Vérifiez le bon destinataire et vos droits locaux avant d'envoyer.",
  'letters.status.drafted': 'Brouillon',
  'letters.status.escalated': 'Transmise à l’autorité',
  'letters.status.resolved': 'Résolue',
  'letters.status.responded': 'Réponse reçue',
  'letters.status.sent': 'En attente de réponse',
  'letters.trackedConfirm': '✓ Suivie',
  'letters.tracked.copied': '✓ Copié',
  'letters.tracked.copyEscalation': '⧉ Copier la réclamation',
  'letters.tracked.daysLeft': '{days} jours avant la date limite de réponse',
  'letters.tracked.delete': 'Retirer',
  'letters.tracked.empty': 'Les lettres que vous suivez apparaissent ici avec un compte à rebours jusqu’à la date limite.',
  'letters.tracked.escalate': 'Saisir {authority}',
  'letters.tracked.overdue': 'En retard de {days} jours',
  'letters.tracked.resolved': 'Marquer comme résolue',
  'letters.tracked.responded': 'Marquer comme répondue',
  'letters.tracked.sentOn': 'Envoyée le {date}',
  'letters.tracked.title': 'Mes lettres',
  'letters.trackThis': '+ Suivre comme envoyée',

  // Panic
  'panic.title': '🆘 Mode panique',
  'panic.intro':
    "Si quelqu'un cherche activement à vous retrouver, vous harceler ou vous doxer, faites-le dans l'ordre. Ce sont les étapes les plus efficaces pour couper le lien entre votre nom et votre localisation, les plus rapides en premier.",
  'panic.danger': "Si vous êtes en danger immédiat, contactez d'abord les secours locaux.",
  'panic.resources':
    "Ressources pour les victimes : aux États-Unis, la National DV Hotline gère les renvois vers des programmes de confidentialité d'adresse ; de nombreux pays ont des équivalents. Une association locale d'aide aux victimes peut vous aider à déposer des demandes de suppression de données publiques.",
  'panic.doNow': 'Faites-le maintenant',
  'panic.doneCount': '{done}/{total} effectuées',

  // Report / Disappearance Plan
  'report.title': 'Votre plan de disparition',
  'report.subtitle': "Une liste imprimable de ce qu'il reste à faire. Enregistrez-la en PDF ou imprimez-la.",
  'report.print': '🖨 Imprimer / Enregistrer en PDF',
  'report.costNote':
    "Vanish augmente le coût de vous retrouver. Face à un adversaire bien financé et déterminé, rien n'est absolu — et ce qui fait tomber les gens, c'est rarement la technologie, c'est la cohérence et l'ego (un pseudonyme réutilisé, un faux pas). Adaptez votre effort à celui contre qui vous vous protégez vraiment.",
  'report.docTitle': 'Vanish — Plan de disparition',
  'report.meta': 'Généré le {date} · objectif {tier} · région {region}',
  'report.privacyScore': 'score de confidentialité',
  'report.tierHeading': 'Niveau {tier} · {name} — {count} à faire',
  'report.allDone': "Il ne reste rien — toutes les actions pertinentes sont faites ou ignorées. Continuez les vérifications.",
  'report.footer':
    "Fait avec Vanish — un coach de confidentialité 100% hors ligne. Les liens de désinscription changent ; vérifiez avant d'agir. Pas un conseil juridique.",

  // Backup nudge
  'nudge.backup': "Votre progression n'existe que dans ce navigateur. Sauvegardez-la pour qu’effacer vos données ne l’efface pas.",
  'nudge.backupCta': 'Sauvegarder maintenant',
  'nudge.dismiss': 'Plus tard',

  // Settings
  'settings.title': 'Paramètres',
  'settings.language': 'Langue',
  'settings.languageHint': 'Modifie tous les écrans. Stocké uniquement sur cet appareil.',
  'settings.yourPlan': 'Votre plan',
  'settings.country': 'Pays',
  'settings.notSet': 'Non défini',
  'settings.supervisoryAuthority': 'Autorité de contrôle :',
  'settings.region': 'Région : {region}',
  'settings.targetTier': 'Niveau cible',
  'settings.codeWordTitle': '🔑 Mot de code familial',
  'settings.codeWordBody':
    "Un mot partagé qui déjoue les arnaques par clonage vocal (« c'est moi, envoie de l'argent »). Convenez-en avec vos proches et stockez-le uniquement sur cet appareil — il n'est jamais envoyé nulle part.",
  'settings.codeWordPlaceholder': 'ex. pingouin bleu',
  'settings.printCard': '🖨 Imprimer une carte de portefeuille',
  'settings.codeWordRule':
    "Règle : toute demande urgente d'argent ou de secret doit inclure ce mot, sinon traitez-la comme une arnaque. Ne l'envoyez jamais par SMS ou e-mail.",
  'settings.cardDocTitle': 'Vanish — mot de code',
  'settings.cardLabel': 'Mot de code familial',
  'settings.cardNote':
    "Toute demande urgente d'argent ou de secret doit inclure ce mot, sinon traitez-la comme une arnaque. Ne l'envoyez pas par SMS ou e-mail.",
  'settings.backupTitle': 'Sauvegarde et transfert',
  'settings.backupBody':
    "Pas de compte, pas de synchronisation dans le cloud — c'est voulu. Exportez un fichier JSON chiffré par vos soins pour transférer votre plan sur un autre appareil. Le fichier contient votre progression et les informations saisies pour les lettres.",
  'settings.export': '↓ Exporter le plan',
  'settings.import': '↑ Importer le plan',
  'settings.encBackupTitle': 'Sauvegarde chiffrée',
  'settings.encBackupBody':
    "Effacer les données de votre navigateur supprime tout ce qui se trouve ici — c'est voulu. La seule copie qui subsiste est un fichier que vous conservez. Cette sauvegarde est chiffrée par une phrase secrète, le fichier lui-même n’est donc pas une fuite de confidentialité. Conservez la phrase secrète en lieu sûr ; nous ne pouvons pas la récupérer.",
  'settings.exportEncrypted': '↓ Enregistrer une sauvegarde chiffrée (.vanish)',
  'settings.importEncrypted': '↥ Restaurer une sauvegarde chiffrée',
  'settings.passphrase': 'Phrase secrète de la sauvegarde',
  'settings.passphrasePlaceholder': 'Une phrase secrète connue de vous seul',
  'settings.passphraseRequired': 'Saisissez d’abord une phrase secrète.',
  'settings.backupErr': 'Échec de la sauvegarde.',
  'settings.backupSaved': '✓ Sauvegarde enregistrée',
  'settings.importOk': '✓ Plan importé.',
  'settings.importErr': '✗ Impossible de lire ce fichier.',
  'settings.wipeTitle': 'Tout effacer',
  'settings.wipeBody':
    "Supprimez toute progression et toutes les informations personnelles de cet appareil. Cette action est irréversible. (Il n'y a rien sur un serveur à supprimer — il n'y en a jamais eu.)",
  'settings.wipeBtn': 'Effacer toutes les données locales',
  'settings.wipeConfirm': 'Vous êtes sûr ? Cela supprime tout.',
  'settings.wipeYes': 'Oui, tout effacer',
  'settings.dataTitle': 'Comment Vanish gère vos données',
  'settings.dataBullet1': "Tout est stocké dans le stockage local de ce navigateur. Rien n'est jamais téléchargé.",
  'settings.dataBullet2':
    "La politique de sécurité du contenu (CSP) de la page bloque toutes les requêtes réseau tierces — vérifiable dans les outils de développement de votre navigateur.",
  'settings.dataBullet3': "Aucune analytique, aucun cookie, aucun compte, aucune télémétrie — vérifiez-le dans les outils de développement de votre navigateur.",
  'settings.dataBullet4':
    "Les liens vers les pages de désinscription s'ouvrent dans un nouvel onglet — ce sont les seuls appels « réseau », et vous les initiez tous.",

  // Decoy Kit
  'decoy.title': '⬡ Kit leurre',
  'decoy.subtitle':
    "Empoisonnez, ne supprimez pas. Les courtiers et les plateformes vous réinscrivent et reconstruisent votre profil, alors ajouter du bruit anodin sur vos propres comptes à faible enjeu est plus efficace que de courir après les suppressions. Ce kit fonctionne entièrement sur votre appareil.",
  'decoy.responsibly': 'Utilisez-le de façon responsable',
  'decoy.do': 'Autorisé',
  'decoy.never': 'Jamais',
  'decoy.rulesDo': [
    "Ne touchez que des comptes qui vous appartiennent.",
    "Utilisez-le sur des profils jetables à faible enjeu, jamais sur quoi que ce soit lié à l'argent ou à une identité officielle.",
    "Visez le banal et le générique — du bruit, pas un faux personnage convaincant.",
  ],
  'decoy.rulesDont': [
    "N'usurpez jamais l'identité d'une personne réelle et nommée.",
    "N'écrivez jamais de faux avis ou notes.",
    "N'inscrivez jamais quelqu'un d'autre, ni n'utilisez les informations d'autrui.",
    "N'utilisez jamais ceci pour échapper à un créancier, un tribunal ou les forces de l'ordre.",
  ],
  'decoy.nameVariants': 'Variantes de nom',
  'decoy.noVariants': "Pas de variantes pour un nom d'une seule partie — ajoutez un nom de famille dans les Paramètres pour en générer davantage.",
  'decoy.addNamePre': 'Ajoutez votre nom dans ',
  'decoy.addNameLink': 'Paramètres',
  'decoy.addNamePost': ' pour générer des variantes orthographiques à répartir sur des profils jetables.',
  'decoy.fillerBio': 'Bio de remplissage',
  'decoy.regenerate': '↻ Régénérer',
  'decoy.copyBio': '⧉ Copier la bio',
  'decoy.copied': '✓ Copié',
  'decoy.footer':
    "Générique par conception — l'objectif est le bruit statistique, pas un faux personnage convaincant. Collez dans des profils qui vous appartiennent et à faible enjeu.",
  'decoy.interests': [
    "les plantes d'intérieur",
    'le vélo',
    'la boulangerie maison',
    "l'ornithologie",
    'les jeux de société',
    'la randonnée',
    'la photo argentique',
    'le jazz',
    'la poterie',
    'les mots croisés',
    'le jardinage',
    'la course à pied',
    'la cuisine',
    "l'astronomie",
    "la baignade en eau froide",
    'les échecs',
    'le tricot',
    'les road trips',
    'le café',
    'les concerts',
  ],
  'decoy.bioTemplate': "Ici pour {list}. Bonne ambiance. Opinions personnelles.",
  'decoy.bioAnd': 'et',

  // Action card
  'actionCard.markDone': 'Marquer « {title} » comme fait',
  'actionCard.markNotDone': 'Marquer « {title} » comme non fait',
  'actionCard.open': 'Ouvrir',
  'actionCard.recheckEvery': '↻ à refaire tous les {days} j',
  'actionCard.recheckTitle': 'Les courtiers vous réinscrivent ; refaites-le régulièrement',
  'actionCard.searchCurrent': '🔎 Chercher la page actuelle',
  'actionCard.linkDead': 'lien mort ?',
  'actionCard.linkDeadTitle': "Les URLs de désinscription changent souvent",
  'actionCard.generateLetter': '✍️ Générer une lettre',
  'actionCard.openTool': "Ouvrir l'outil",
  'actionCard.howTo': 'Comment faire',
  'actionCard.hideSteps': 'Masquer les étapes',
  'actionCard.notRelevant': 'Non pertinent',
  'actionCard.restore': 'Restaurer',
  'actionCard.verified': 'Vérifié le {date}',
  'actionCard.verifiedTitle': "Date du dernier contrôle de cette action et de son lien. Signalez un lien mort s'il a changé d'adresse.",

  // EFF SSD: scenario playlists
  'nav.scenarios': 'Scénarios',
  'scenarios.title': 'Commencez par votre situation',
  'scenarios.lead':
    "Des parcours adaptés à une situation précise. Chaque scénario est un ordre de visite soigneusement choisi parmi les actions que vous avez déjà — commencez par le haut.",
  'scenarios.notFound': "Ce scénario n'existe pas.",
  'scenario.survivor.title': 'Victime de harcèlement ou de violence',
  'scenario.survivor.intro':
    "Séparer votre localisation et vos coordonnées de votre nom, et vérifier l'absence de traceurs cachés. Si vous êtes en danger immédiat, contactez d'abord les services d'aide locaux.",
  'scenario.job-seeker.title': "Préparer une recherche d'emploi",
  'scenario.job-seeker.intro':
    "Ce qu'un recruteur ou un responsable RH trouve en cherchant votre nom — et comment s'en occuper avant qu'il ne regarde.",
  'scenario.activist.title': 'Militant · participation à une manifestation',
  'scenario.activist.intro':
    "Renforcer votre téléphone et vos communications avant et pendant une action militante ou une manifestation.",
  'scenario.journalist.title': 'Journaliste protégeant ses sources',
  'scenario.journalist.intro':
    'Communications confidentielles et séparation des identités professionnelle et personnelle.',
  'scenario.breach.title': 'Après une fuite de données',
  'scenario.breach.intro':
    "Vous étiez dans une fuite (ou vous le soupçonnez). Limitez les dégâts et fermez la porte derrière vous.",

  // EFF SSD: learn primers
  'nav.learn': 'Comprendre',
  'learn.title': 'Comprendre le pourquoi',
  'learn.lead':
    "De courtes fiches pédagogiques sur les actions. Pour le guide complet, chacune renvoie vers Surveillance Self-Defense de l'EFF.",
  'learn.related': 'Actions associées',
  'learn.readMore': 'Guide complet',
  'learn.notFound': "Ce sujet n'existe pas.",
  'learn.threat-model.title': "Qu'est-ce qu'un modèle de menace ?",
  'learn.threat-model.body': [
    "Un modèle de menace, c'est cinq questions honnêtes : que souhaitez-vous protéger, de qui voulez-vous le protéger, quelle est la probabilité d'en avoir besoin, quelles seraient les conséquences en cas d'échec, et quel effort êtes-vous prêt à consentir pour l'éviter ?",
    "Il n'existe pas un niveau de vie privée universellement juste. Adapter son effort aux personnes dont on se méfie vraiment, c'est tout le jeu — aller plus loin que sa situation ne l'exige échange du confort réel contre une sécurité illusoire.",
  ],
  'learn.metadata.title': 'Ce que révèlent les métadonnées',
  'learn.metadata.body': [
    "Les métadonnées, ce sont les données sur vos données : quand une photo a été prise, sur quel téléphone, et souvent les coordonnées GPS exactes. Les métadonnées d'un message — qui, quand, à quelle fréquence — peuvent être aussi révélatrices que son contenu.",
    "Vous ne pouvez pas toujours contrôler les métadonnées conservées par les services, mais vous pouvez cesser de les distribuer : supprimez la localisation et les informations sur l'appareil des photos avant de les publier.",
  ],
  'learn.encryption.title': 'Qu\'est-ce que le chiffrement de bout en bout',
  'learn.encryption.body': [
    "Le chiffrement de bout en bout (E2EE) signifie que seuls vous et la personne à qui vous parlez pouvez lire les messages — pas l'éditeur de l'application, pas le réseau, ni quiconque les intercepterait en transit.",
    "C'est la différence entre une carte postale et une lettre sous enveloppe. Utilisez des outils E2EE pour tout ce qui est sensible, et gardez à l'esprit que cela protège le contenu, pas toujours les métadonnées qui l'entourent.",
  ],
  'learn.phishing.title': 'Comment fonctionne le phishing',
  'learn.phishing.body': [
    "Le phishing vous amène à livrer un mot de passe ou un code, généralement par un message urgent accompagné d'un lien vers une fausse page de connexion. C'est ainsi que démarrent la plupart des prises de contrôle de comptes — aucun piratage nécessaire.",
    "Les défenses sont des habitudes, pas des outils : ne vous connectez jamais via un lien reçu dans un message, vérifiez l'expéditeur, et fiez-vous à un gestionnaire de mots de passe (qui ne remplira pas automatiquement le mauvais domaine) et à des clés matérielles (insensibles au phishing).",
  ],
  'learn.data-brokers.title': 'Ce que sont les courtiers en données',
  'learn.data-brokers.body': [
    "Les courtiers en données achètent, collectent et revendent des profils vous concernant — nom, adresse, proches, numéros de téléphone — aux annonceurs, aux recruteurs et à quiconque paie. Les sites de recherche de personnes sont la vitrine publique de ce secteur.",
    "La désinscription fonctionne, mais elle n'est pas permanente : les courtiers vous récupèrent et vous réinscrivent à partir de nouveaux documents publics, donc la suppression est une habitude à renouveler, pas un acte définitif.",
  ],
  'learn.vpn.title': "Ce qu'un VPN fait — et ne fait pas",
  'learn.vpn.body': [
    "Un VPN masque votre navigation à votre réseau et à votre fournisseur d'accès, et cache votre adresse IP aux sites que vous visitez — utile sur un Wi-Fi non fiable ou pour éviter qu'un seul FAI ne profile tout ce que vous faites.",
    "Il ne vous rend pas anonyme : vous faites simplement confiance au fournisseur VPN à la place, et il ne stoppe pas le pistage des sites une fois que vous êtes connecté. Pour un anonymat sérieux, Tor est le meilleur outil.",
  ],
  'learn.key-verification.title': 'Pourquoi vérifier les clés',
  'learn.key-verification.body': [
    "Le chiffrement part du principe que vous parlez à la bonne personne. Une attaque par intermédiaire fonctionne en s'intercalant entre vous et en substituant ses propres clés — vous verriez quand même un cadenas verrouillé.",
    "Vérifier un numéro de sécurité (en personne via QR, ou sur un canal de confiance séparé) confirme qu'il n'y a pas d'imposteur au milieu. Faites-le une fois pour vos contacts les plus sensibles.",
  ],
} satisfies Dict
