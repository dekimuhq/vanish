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
  'onboarding.useRecommended': 'Utiliser la recommandation : N{tier} · {name}',
  'onboarding.build': 'Construire mon plan →',

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
} satisfies Dict
