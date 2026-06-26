import type { ContentOverlay } from './types'

// fr catalog overlay (keyed by action id). Missing ids/fields fall back to English.
export const fr: ContentOverlay = {
  // ───────────────────────── Tier 1 — Mise en ordre ─────────────────────────
  'google-yourself': {
    title: 'Cherchez votre propre nom sur Google',
    summary:
      "Recherchez votre nom (+ ville, + téléphone) dans une fenêtre privée et faites une capture d'écran des premiers résultats. C'est votre point de départ — vous ne pouvez mesurer la suppression que par rapport à ce que vous voyez.",
    steps: [
      "Ouvrez une fenêtre privée/incognito pour que les résultats personnalisés ne vous induisent pas en erreur.",
      "Cherchez : votre nom, puis « nom + ville », puis votre numéro de téléphone, puis votre e-mail.",
      "Faites une capture d'écran des deux premières pages de chaque recherche. Notez chaque site qui expose une adresse, un téléphone, des proches ou des photos.",
      "Ces sites deviennent votre liste de cibles dans le niveau Courtiers en données.",
    ],
    urlLabel: 'Chercher sur Google',
  },
  'hibp': {
    title: 'Vérifiez Have I Been Pwned',
    summary:
      "Entrez votre e-mail pour voir quelles fuites l'ont exposé et quels mots de passe vous devez changer. La base de données de fuites gratuite et de référence.",
    urlLabel: 'Vérifier sur HIBP',
  },
  'mozilla-monitor': {
    title: 'Configurez Mozilla Monitor',
    summary:
      "Alertes gratuites et continues sur les fuites pour jusqu'à 20 adresses e-mail, basées sur les données HIBP.",
    urlLabel: 'Ouvrir Monitor',
  },
  'password-manager': {
    title: 'Installez un gestionnaire de mots de passe',
    summary:
      "Adoptez Bitwarden ou KeePass. C'est le fondement pour avoir des mots de passe uniques et pour retrouver tous les comptes que vous avez créés.",
    urlLabel: 'Obtenir Bitwarden',
  },
  'change-breached-passwords': {
    title: 'Changez les mots de passe réutilisés et compromis',
    summary:
      "Pour chaque compte signalé par Have I Been Pwned — et partout où vous avez réutilisé un mot de passe — définissez un nouveau mot de passe unique généré par votre gestionnaire.",
    steps: [
      "Commencez par les « clés du royaume » : l'e-mail, puis la banque, puis votre gestionnaire de mots de passe.",
      "Ne réutilisez jamais un mot de passe sur deux sites. Laissez le gestionnaire les générer.",
      "Si un compte était dans une fuite, considérez l'ancien mot de passe comme public.",
    ],
  },
  'delete-dormant-accounts': {
    title: 'Supprimez les comptes dormants',
    summary:
      "Chaque vieux compte est une surface d'attaque potentielle et une source pour les courtiers. Utilisez un annuaire de liens de suppression directe, trié par difficulté.",
    steps: [
      "Votre gestionnaire de mots de passe et les anciennes recherches dans votre boîte mail (« bienvenue », « vérifiez votre compte ») révèlent les comptes oubliés.",
      "Utilisez le classement de difficulté : vert = un clic, rouge = vous devez contacter le support.",
      "Supprimez, ne désactivez pas — les comptes désactivés conservent toujours vos données.",
    ],
    urlLabel: 'Ouvrir JustDeleteMe',
  },
  'optout-truepeoplesearch': {
    title: 'Se désinscrire de TruePeopleSearch',
    summary:
      "Soumettez une demande de suppression — sans e-mail ni pièce d'identité, quasi instantané. Un des gains visibles les plus rapides.",
    urlLabel: 'Me supprimer',
  },
  'optout-fastpeoplesearch': {
    title: 'Se désinscrire de FastPeopleSearch',
    summary: "Suppression rapide par formulaire, sans pièce d'identité.",
    urlLabel: 'Me supprimer',
  },
  'optout-usphonebook': {
    title: 'Se désinscrire de USPhoneBook',
    summary: "Suppression rapide, sans pièce d'identité.",
    urlLabel: 'Me supprimer',
  },
  'google-results-about-you': {
    title: 'Google « Résultats vous concernant »',
    summary:
      "Utilisez l'outil de Google pour demander la suppression des pages exposant votre téléphone, adresse personnelle ou e-mail des résultats de recherche.",
    urlLabel: "Ouvrir l'outil",
  },
  'google-ad-personalization': {
    title: 'Désactivez la personnalisation des annonces Google',
    summary: 'Désactivez les publicités personnalisées liées au profil de votre compte Google.',
    urlLabel: 'Paramètres des annonces',
  },
  'reset-advertising-id': {
    title: "Réinitialisez l'identifiant publicitaire de votre téléphone",
    summary: "Coupez l'identifiant persistant que la publicité en ligne utilise pour vous suivre entre les applications.",
    steps: [
      "iOS : Réglages → Confidentialité et sécurité → Suivi → désactivez « Autoriser les apps à demander à suivre ».",
      "iOS : Réglages → Confidentialité et sécurité → Apple Advertising → désactivez Publicités personnalisées.",
      "Android : Réglages → Confidentialité → Publicités → Supprimer l'identifiant publicitaire (ou le réinitialiser).",
    ],
  },
  'prune-social-profiles': {
    title: 'Nettoyez vos profils sociaux publics',
    summary:
      "Passez les anciens posts et profils en privé ; supprimez date de naissance, téléphone, adresse et ville natale de tout ce qui est public.",
    steps: [
      "Facebook : Paramètres → Confidentialité → « Limiter les anciens posts » ; passez en revue la section À propos champ par champ.",
      "Instagram/X : passez en privé si possible ; supprimez localisation, contact et date de naissance de la bio.",
      "LinkedIn : masquez vos relations et vos coordonnées aux non-relations.",
    ],
  },
  'bulk-delete-posts': {
    title: 'Supprimez les anciens posts en masse',
    summary: "Effacez les anciens posts grâce aux outils natifs de téléchargement et suppression des plateformes.",
    steps: [
      "X : Paramètres → « Télécharger une archive » d'abord, puis utilisez une méthode de suppression en masse.",
      "Facebook : Journal d'activité → filtrer par année → suppression ou archivage en masse.",
      "Exportez toujours une archive pour vous avant toute suppression en masse.",
    ],
  },
  'unsubscribe-marketing': {
    title: 'Désabonnez-vous des listes marketing',
    summary:
      "Désabonnez-vous en masse des newsletters. Réduit les données que vous émettez et limite les dégâts de la prochaine fuite.",
    steps: [
      "Cherchez « désabonnement » dans votre boîte mail et traitez-la de haut en bas.",
      "Préférez le lien de désinscription dans l'e-mail plutôt que le signalement comme spam (suppression plus propre).",
      "Pour les expéditeurs qui ignorent votre demande, c'est un candidat pour une lettre GDPR/CCPA plus tard.",
    ],
  },
  'unlist-caller-id': {
    title: "Retirez votre numéro des applications d'identification d'appelant",
    summary:
      "Retirez votre numéro des bases de données d'identification d'appelant collaboratives comme Truecaller et Hiya.",
    urlLabel: 'Désinscription Truecaller',
  },
  'revoke-third-party-apps': {
    title: "Vérifiez et révoquez l'accès des applications tierces",
    summary:
      "Passez en revue les applications connectées à vos comptes Google/Apple/Facebook/Microsoft et révoquez tout ce que vous n'utilisez plus.",
    urlLabel: 'Connexions Google',
  },
  'enable-2fa': {
    title: 'Activez la 2FA sur les comptes critiques',
    summary:
      "Activez l'authentification à deux facteurs par application (pas par SMS) pour l'e-mail, la banque et votre gestionnaire de mots de passe. Les codes SMS peuvent être détournés par échange de SIM.",
    steps: [
      "Utilisez une application d'authentification (Aegis, Ente Auth, ou votre gestionnaire de mots de passe).",
      "Priorité : e-mail → gestionnaire de mots de passe → banque → réseaux sociaux.",
      "Sauvegardez les codes de récupération dans votre gestionnaire, pas sur papier près de votre bureau.",
    ],
  },
  'wipe-old-devices': {
    title: "Effacez les données avant de vous débarrasser d'appareils",
    summary:
      "Réinitialisez et chiffrez téléphones, ordinateurs portables et disques avant de les vendre ou de les recycler.",
    steps: [
      "Assurez-vous d'abord que le chiffrement complet du disque est activé (il rend l'effacement réellement irréversible).",
      "Déconnectez-vous de tous les comptes (surtout Find My / verrouillage du compte Google) avant la réinitialisation.",
      "Ensuite, réinitialisez en mode usine. Pour les disques durs magnétiques, un effacement multi-passes ; les SSD utilisent l'effacement sécurisé intégré.",
    ],
  },
  'optout-smartbackgroundchecks': {
    title: 'Se désinscrire de SmartBackgroundChecks',
    summary:
      "Suppression par formulaire rapide, sans pièce d'identité — un autre site de recherche de personnes qui remonte dans les résultats de nom.",
    urlLabel: 'Me supprimer',
  },
  'ad-industry-optout': {
    title: "Se désinscrire des publicités comportementales (DAA/NAI)",
    summary:
      "Utilisez les outils d'autoréglementation de l'industrie publicitaire pour désinscrire ce navigateur du ciblage publicitaire comportemental en une seule opération. Basé sur les cookies — à refaire après avoir vidé les cookies ou sur un nouveau navigateur.",
    urlLabel: 'DAA WebChoices',
  },

  // ───────────────────────── Tier 2 — Réduire ─────────────────────────
  'optout-spokeo': {
    title: 'Se désinscrire de Spokeo',
    summary: "Collez l'URL de votre profil et confirmez par e-mail.",
    urlLabel: 'Se désinscrire',
  },
  'optout-whitepages': {
    title: 'Se désinscrire de Whitepages',
    summary:
      "Soumettez une demande de suppression ; nécessite souvent une vérification par appel téléphonique. Apparaît haut dans les recherches par nom.",
    urlLabel: 'Demande de suppression',
  },
  'optout-peopleconnect': {
    title: 'Se désinscrire du réseau PeopleConnect',
    summary:
      "Une seule demande de suppression couvre Intelius, BeenVerified, Instant Checkmate, TruthFinder et USSearch. Action la plus rentable parmi les courtiers.",
    urlLabel: 'Supprimer les 5',
  },
  'optout-radaris': {
    title: 'Se désinscrire de Radaris',
    summary: "Réclamez et supprimez votre profil ; nécessite une confirmation par e-mail.",
    urlLabel: 'Contrôler la confidentialité',
  },
  'optout-mylife': {
    title: 'Se désinscrire de MyLife',
    summary:
      "Soumettez une demande de confidentialité/CCPA. MyLife gère des profils persistants avec un « score de réputation » et est notoirement tenace.",
    urlLabel: 'Demande CCPA',
  },
  'optout-nuwber': {
    title: 'Se désinscrire de Nuwber',
    summary: "Suppression par lien et confirmation par e-mail.",
    urlLabel: 'Me supprimer',
  },
  'optout-thatsthem': {
    title: "Se désinscrire de That's Them",
    summary: "Suppression par formulaire simple.",
    urlLabel: 'Se désinscrire',
  },
  'optout-peoplefinders': {
    title: 'Se désinscrire de PeopleFinders',
    summary: "Formulaire et confirmation par e-mail.",
    urlLabel: 'Se désinscrire',
  },
  'optout-familytreenow': {
    title: 'Se désinscrire de FamilyTreeNow',
    summary: "Supprime des graphes d'adresses et de proches étonnamment détaillés.",
    urlLabel: 'Se désinscrire',
  },
  'optout-acxiom': {
    title: 'Se désinscrire de Acxiom',
    summary:
      "Un des plus grands agrégateurs de données marketing — le couper réduit l'approvisionnement de nombreux courtiers plus petits.",
    urlLabel: 'Se désinscrire',
  },
  'optout-oracle': {
    title: 'Se désinscrire de Oracle Data Cloud',
    summary:
      "Soumettez la désinscription du data cloud. Oracle ferme son activité publicitaire — vérifiez le processus actuel.",
    urlLabel: 'Confidentialité / désinscription',
  },
  'optout-epsilon': {
    title: 'Se désinscrire de Epsilon',
    summary: "Désinscription de cet agrégateur de données marketing.",
    urlLabel: 'Se désinscrire',
  },
  'optout-experian-marketing': {
    title: 'Se désinscrire du marketing Experian',
    summary: "Désinscription marketing, distincte de votre dossier de crédit.",
    urlLabel: 'Se désinscrire',
  },
  'private-browser': {
    title: 'Passez à un navigateur respectueux de la vie privée',
    summary: "Adoptez Firefox ou Brave avec la protection contre le pistage activée par défaut.",
    urlLabel: 'Obtenir Firefox',
  },
  'tracker-blocker': {
    title: 'Ajoutez un bloqueur de contenu et de pisteurs',
    summary: "Installez uBlock Origin pour bloquer les publicités et les pisteurs sur le web.",
    urlLabel: 'Obtenir uBlock Origin',
  },
  'private-search': {
    title: 'Changez de moteur de recherche par défaut',
    summary:
      "Passez à un moteur de recherche sans pistage comme DuckDuckGo, Startpage ou Brave Search.",
    urlLabel: 'Essayer DuckDuckGo',
  },
  'email-aliases': {
    title: 'Commencez à utiliser des alias e-mail',
    summary:
      "Utilisez un alias unique par service afin qu'une future fuite ne puisse pas relier vos comptes — et vous pouvez supprimer tout alias qui commence à recevoir du spam.",
    urlLabel: 'Obtenir SimpleLogin',
  },
  'optout-prescreen': {
    title: 'Se désinscrire des offres de crédit présélectionnées aux États-Unis',
    summary:
      "Arrêtez les offres de crédit et d'assurance présélectionnées — ce sont des ventes en masse de vos données de crédit.",
    urlLabel: "Se désinscrire (5 ans / permanent)",
  },
  'freeze-credit': {
    title: 'Gelez votre crédit',
    summary:
      "Placez un blocage de sécurité auprès des trois bureaux de crédit pour bloquer les fraudes à l'ouverture de compte. Gratuit aux États-Unis.",
    steps: [
      "Gelez les trois : Equifax, Experian et TransUnion (chacun séparément).",
      "Un blocage empêche l'ouverture de nouveaux crédits à votre nom ; vous « dégelez » temporairement quand vous avez besoin de crédit.",
      "Cela n'affecte pas votre score et est gratuit par la loi.",
    ],
    urlLabel: 'Blocage Equifax',
  },
  'disable-location-history': {
    title: "Désactivez l'historique de localisation du téléphone",
    summary:
      "Désactivez Google Location History / les lieux importants iOS et effacez l'historique stocké.",
    urlLabel: "Contrôles d'activité",
  },
  'schedule-broker-recheck': {
    title: 'Planifiez une vérification des courtiers',
    summary:
      "Les courtiers vous réinscrivent dans les 3 à 6 mois. Vanish suit quand chaque désinscription est à refaire — ceci confirme que vous vous engagez dans la boucle.",
  },
  'broker-letter': {
    title: 'Lettre : supprimez-moi (sans formulaire en ligne)',
    summary:
      "Pour les courtiers et entreprises sans désinscription en ligne, générez une lettre de suppression GDPR/CCPA et envoyez-la vous-même.",
  },
  'optout-checkpeople': {
    title: 'Se désinscrire de CheckPeople',
    summary: "Suppression par formulaire pour un autre agrégateur de recherche de personnes.",
    urlLabel: 'Se désinscrire',
  },
  'optout-dmachoice': {
    title: 'Se désinscrire du marketing postal direct (DMAchoice)',
    summary:
      "Inscrivez-vous au service de préférence courrier de la Data & Marketing Association pour réduire le courrier indésirable. Un petit frais unique couvre plusieurs années d'inscription.",
    urlLabel: 'DMAchoice',
  },
  'youronlinechoices': {
    title: "Se désinscrire des publicités comportementales dans l'UE",
    summary:
      "Utilisez l'outil EDAA YourOnlineChoices pour désinscrire ce navigateur du ciblage publicitaire comportemental des réseaux participants. Basé sur les cookies — à refaire après avoir vidé les cookies.",
    urlLabel: 'Your Online Choices',
  },
  'encrypted-dns-devices': {
    title: "Configurez le DNS chiffré sur chaque appareil",
    summary:
      "Pointez votre téléphone et ordinateur vers un résolveur chiffré respectueux de la vie privée pour que votre FAI ne puisse pas journaliser chaque site que vous consultez.",
    steps: [
      "Choisissez un résolveur sans journalisation : Quad9 (9.9.9.9) ou NextDNS.",
      "iOS/macOS : installez le profil de configuration du fournisseur, ou configurez DNS-over-HTTPS dans les Réglages.",
      "Android 9+ : Réglages → Réseau → DNS privé → entrez le nom d'hôte du fournisseur.",
      "Ceci complète le DNS au niveau du routeur — les appareils le conservent quand vous n'êtes pas sur votre réseau domestique.",
    ],
    urlLabel: 'Quad9',
  },
  'harden-messaging-privacy': {
    title: 'Renforcez les paramètres de confidentialité de vos messageries',
    summary:
      "Activez les contrôles de confidentialité déjà intégrés aux applications que vous utilisez — avant de migrer quoi que ce soit.",
    steps: [
      "Activez la suppression automatique des messages par défaut là où c'est disponible (Signal, WhatsApp, Telegram).",
      "Masquez « dernière connexion », les accusés de lecture et la photo de profil aux non-contacts.",
      "Verrouillez l'application avec un code PIN ou la biométrie et désactivez les aperçus de messages sur l'écran de verrouillage.",
      "Vérifiez les paramètres d'invitation aux groupes pour que des inconnus ne puissent pas vous y ajouter.",
    ],
  },
  'remove-outdated-google': {
    title: 'Supprimez les pages obsolètes de Google',
    summary:
      "Quand une page vous concernant a été modifiée ou supprimée mais affiche encore du contenu en cache dans Search, demandez à Google de l'actualiser ou de la retirer.",
    urlLabel: 'Supprimer le contenu obsolète',
  },
  'optout-es-listarobinson': {
    title: 'Inscrivez-vous sur la Lista Robinson',
    summary:
      "La liste officielle d'exclusion publicitaire espagnole (gérée par Adigital). Une fois inscrit, les entreprises membres ne peuvent plus vous contacter par téléphone, SMS, courrier ou e-mail à des fins marketing.",
    urlLabel: 'Lista Robinson',
  },
  'optout-it-rpo': {
    title: "S'inscrire au Registro Pubblico delle Opposizioni",
    summary:
      "Le registre public d'opposition italien. Inscrivez votre numéro de téléphone (et adresse postale) pour bloquer les opérateurs qui doivent le consulter avant de vous démarcher.",
    urlLabel: 'Registro Opposizioni',
  },
  'optout-fr-bloctel': {
    title: "S'inscrire sur Bloctel",
    summary:
      "Le registre officiel français d'opposition au démarchage téléphonique. Les numéros inscrits ne peuvent légalement pas être utilisés pour du marketing téléphonique par des entreprises avec lesquelles vous n'avez pas de contrat.",
    urlLabel: 'Bloctel',
  },
  'optout-de-robinsonliste': {
    title: 'Inscrivez-vous sur la Robinsonliste',
    summary:
      "La liste centrale allemande d'opposition à la publicité (gérée par le DDV). Réduit le courrier marketing adressé, les appels et les e-mails des entreprises participantes.",
    urlLabel: 'Robinsonliste (DDV)',
  },
  'optout-be-donotcallme': {
    title: "S'inscrire sur la liste Do Not Call Me",
    summary:
      "La liste officielle belge de blocage des démarchages téléphoniques. Une fois inscrit, votre numéro ne peut pas être utilisé pour du marketing téléphonique. L'inscription se fait par téléphone.",
    urlLabel: 'Do Not Call Me',
  },
  'optout-pt-amd': {
    title: "Rejoindre la Lista de Oposição (AMD)",
    summary:
      "La liste d'opposition aux consommateurs portugais. Inscrivez-vous pour bloquer les appels de démarchage et le courrier marketing des entreprises liées par le registre.",
    urlLabel: "Lista de Oposição",
  },
  'optout-se-hitta': {
    title: 'Supprimez votre fiche contact de Hitta.se',
    summary:
      "Le principe de publicité des documents en Suède rend votre adresse facilement accessible. Masquez votre fiche contact Hitta.se — la suppression se fait avec BankID.",
    urlLabel: 'Me supprimer',
  },
  'optout-se-ratsit': {
    title: 'Supprimez votre fiche de Ratsit',
    summary:
      "Ratsit republie les données publiques suédoises — adresse, âge, finances. Supprimez votre fiche publique gratuite avec BankID.",
    urlLabel: 'Ta bort',
  },
  'optout-se-mrkoll': {
    title: 'Masquez vos informations sur MrKoll',
    summary:
      "MrKoll republie les données publiques suédoises. Masquez votre adresse et numéro de téléphone — BankID requis.",
    urlLabel: 'Ändra uppgifter',
  },
  'optout-de-dastelefonbuch': {
    title: 'Supprimez votre entrée DasTelefonbuch / DasÖrtliche',
    summary:
      "Supprimez ou restreignez votre fiche dans les principaux annuaires téléphoniques publics allemands (DasTelefonbuch, DasÖrtliche).",
    urlLabel: 'Gérer mon entrée',
  },
  'optout-at-ecg': {
    title: "Ajoutez-vous à la ECG-Liste",
    summary:
      "La liste autrichienne d'exclusion du marketing électronique (gérée par RTR). Inscrire votre adresse vous désabonne des e-mails et SMS marketing non sollicités.",
    urlLabel: 'ECG-Liste',
  },
  'optout-dk-robinson': {
    title: 'Rejoignez la Robinsonlisten',
    summary:
      "La liste officielle danoise de protection publicitaire, gérée via le registre central des personnes (CPR). Bloque le courrier publicitaire adressé et les appels marketing.",
    urlLabel: 'Robinsonlisten',
  },
  'optout-fi-kieltopalvelu': {
    title: "Enregistrez l'interdiction de marketing (ASML)",
    summary:
      "La désinscription Robinson finlandaise, gérée par l'association marketing ASML. Inscrivez-vous pour bloquer le démarchage téléphonique et le marketing postal direct.",
    urlLabel: 'Kieltopalvelut',
  },
  'optout-hr-nezovi': {
    title: "S'inscrire sur NE ZOVI",
    summary:
      "Le registre officiel croate de blocage des démarchages téléphoniques (géré par le régulateur HAKOM). Gratuit — vous vous inscrivez via votre opérateur télécom pour bloquer les appels marketing.",
    urlLabel: 'NE ZOVI',
  },

  // ───────────────────────── Tier 3 — Verrouiller ─────────────────────────
  'private-email-provider': {
    title: "Migrez vers un fournisseur d'e-mail privé",
    summary:
      "Transférez votre boîte principale vers Proton ou Tuta et commencez à rediriger et migrer vos comptes.",
    urlLabel: 'Proton Mail',
  },
  'signal': {
    title: 'Passez vos communications sur Signal',
    summary:
      "Faites de Signal votre messagerie principale et réduisez progressivement les SMS/WhatsApp pour tout ce qui est sensible.",
    urlLabel: 'Obtenir Signal',
  },
  'hardware-keys': {
    title: 'Ajoutez des clés de sécurité matérielles',
    summary:
      "Enregistrez des clés FIDO2 (ex. YubiKey) sur l'e-mail, la banque, le gestionnaire de mots de passe et les comptes cloud.",
    steps: [
      "Achetez deux clés — une principale, une de secours rangée en lieu sûr.",
      "Enregistrez les deux sur chaque compte critique avant de supprimer les méthodes 2FA plus faibles.",
      "Les clés matérielles sont insensibles au phishing ; ce sont les deuxièmes facteurs les plus solides disponibles.",
    ],
  },
  'full-broker-sweep': {
    title: 'Balayage complet des courtiers',
    summary:
      "Parcourez la liste complète des courtiers de bout en bout, en notant la date de chaque désinscription pour que les rappels de vérification soient précis.",
  },
  'e2ee-storage': {
    title: 'Passez au stockage cloud chiffré de bout en bout',
    summary:
      "Remplacez Drive/Dropbox par un stockage chiffré de bout en bout pour que le fournisseur ne puisse pas lire vos fichiers.",
    urlLabel: 'Proton Drive',
  },
  'degoogle-services': {
    title: 'Supprimez Google de vos services essentiels',
    summary:
      "Remplacez Maps, Docs et Photos par des alternatives respectueuses de la vie privée.",
    steps: [
      "Maps → Organic Maps / OsmAnd. Docs → CryptPad / OnlyOffice. Photos → Ente / Immich.",
      "Migrez un service à la fois pour ne perdre accès à rien d'important.",
      "Exportez vos données depuis Google Takeout avant de supprimer quoi que ce soit.",
    ],
    urlLabel: 'Alternatives (Privacy Guides)',
  },
  'masked-phone': {
    title: 'Utilisez un numéro de téléphone masqué/VoIP',
    summary:
      "Donnez un numéro secondaire pour les inscriptions et gardez votre vrai numéro privé.",
    steps: [
      "Options : Google Voice (États-Unis), MySudo, ou une deuxième SIM/eSIM bon marché.",
      "Utilisez le numéro masqué pour les cartes de fidélité, les inscriptions et tout ce qui n'est pas essentiel.",
      "Réservez votre vrai numéro aux contacts de confiance et aux alternatives 2FA uniquement.",
    ],
  },
  'masked-cards': {
    title: 'Utilisez des cartes de paiement virtuelles/masquées',
    summary:
      "Les numéros de carte à usage unique ou par marchand rompent le lien entre vos données de paiement que les courtiers achètent.",
    steps: [
      "Options : Privacy.com (États-Unis), cartes jetables Revolut, ou les cartes virtuelles de votre banque.",
      "Créez une carte unique par marchand ; annulez celle qui fuit ou facture en trop.",
    ],
  },
  'strip-exif': {
    title: "Supprimez les métadonnées des photos avant de les publier",
    summary:
      "Retirez les données EXIF/GPS des images que vous partagez publiquement pour que les photos ne révèlent pas où vous habitez ou étiez.",
    steps: [
      "Beaucoup de plateformes suppriment l'EXIF au téléchargement — mais pas toutes, et pas dans les partages de fichiers originaux.",
      "iOS : feuille de partage → Options → désactivez Localisation. Android : utilisez une application de suppression de métadonnées.",
      "Bureau : ExifTool, ou « Supprimer les propriétés » dans les propriétés de fichier Windows.",
    ],
  },
  'harden-router-dns': {
    title: 'Renforcez le routeur domestique et le DNS',
    summary:
      "Changez le mot de passe administrateur par défaut, activez le DNS chiffré et désactivez UPnP/WPS.",
    steps: [
      "Changez immédiatement le mot de passe administrateur du routeur depuis la valeur par défaut.",
      "Configurez le DNS chiffré (DoH/DoT) — ex. Quad9 (9.9.9.9) ou NextDNS — pour empêcher votre FAI de journaliser chaque requête.",
      "Désactivez UPnP et WPS ; maintenez le firmware à jour.",
    ],
  },
  'segment-iot': {
    title: "Segmentez les appareils IoT sur le réseau",
    summary:
      "Placez les appareils domotiques sur un réseau invité ou un VLAN pour limiter ce qu'ils peuvent voir et atteindre.",
  },
  'anti-fingerprint': {
    title: "Bloquez le fingerprinting du navigateur",
    summary:
      "Utilisez des paramètres anti-fingerprinting pour que les pisteurs ne puissent pas identifier votre navigateur sans cookies.",
    steps: [
      "Firefox : activez privacy.resistFingerprinting, ou utilisez Mullvad Browser / Tor Browser pour les sessions sensibles.",
      "Évitez d'empiler des extensions exotiques — chacune vous rend plus unique, pas moins.",
    ],
    urlLabel: 'Testez votre empreinte',
  },
  'retire-old-email': {
    title: "Supprimez l'ancienne adresse e-mail",
    summary:
      "Après avoir migré, mettez à jour les services restants, puis supprimez l'ancienne boîte pour qu'elle ne puisse pas être compromise ou exploitée.",
    steps: [
      "Transférez l'ancienne boîte vers la nouvelle pendant une période de transition (3 à 6 mois).",
      "Chaque fois que quelque chose arrive à l'ancienne adresse, mettez à jour ce service avec la nouvelle.",
      "Quand le trafic se tarit, exportez puis supprimez l'ancien compte.",
    ],
  },
  'gdpr-access-letter': {
    title: "Envoyez des demandes d'accès GDPR (SAR)",
    summary:
      "Obligez les grands détenteurs de données à vous révéler exactement ce qu'ils ont sur vous — reconnaissance avant effacement.",
  },
  'optout-lexisnexis': {
    title: 'Se désinscrire de LexisNexis',
    summary:
      "Agrégateur FCRA à forte valeur alimentant les vérifications d'antécédents ; peut nécessiter une preuve d'identité.",
    urlLabel: 'Se désinscrire',
  },
  'broker-registry': {
    title: "Se désinscrire via les registres de courtiers",
    summary:
      "Utilisez les registres d'État (Californie, Vermont) pour trouver et vous désinscrire des courtiers que vous avez manqués.",
    urlLabel: 'Registre CA des courtiers',
  },
  'maps-contributions': {
    title: 'Supprimez votre adresse des contributions Maps',
    summary:
      "Supprimez les avis, photos et étiquettes qui révèlent discrètement votre domicile ou lieu de travail.",
    urlLabel: "Activité Maps",
  },
  'cross-app-tracking-off': {
    title: 'Désactivez le suivi inter-applications partout',
    summary:
      "iOS App Tracking Transparency désactivé, identifiant publicitaire Android désactivé, localisation par application réglée sur « jamais / demander ».",
  },
  'optout-eu-brokers': {
    title: "Se désinscrire des courtiers dans l'UE",
    summary:
      "Résidents UE/UK : soumettez des désinscriptions ainsi que des lettres GDPR Art.17 aux courtiers opérant dans l'UE (Acxiom, Criteo, Experian UK).",
    urlLabel: 'Acxiom (mondial)',
  },
  'optout-criteo': {
    title: 'Se désinscrire de Criteo',
    summary:
      "Désinscrivez-vous du profil de reciblage publicitaire de Criteo — un des plus grands réseaux publicitaires comportementaux opérant dans l'UE.",
    urlLabel: 'Confidentialité / désinscription',
  },
  'optout-192': {
    title: 'Se désinscrire de 192.com',
    summary:
      "Supprimez votre fiche du principal site de recherche de personnes au Royaume-Uni. Une grande partie de ses données provient du registre électoral ouvert — désinscrivez-vous également auprès de votre conseil municipal.",
    urlLabel: 'Supprimer mes informations',
  },
  'optout-experian-uk': {
    title: 'Se désinscrire du marketing Experian UK',
    summary:
      "Utilisez le portail de données Experian UK pour contrôler l'utilisation marketing de vos données, distincte de votre dossier de crédit.",
    urlLabel: 'Portail de données',
  },
  'google-rtbf-delisting': {
    title: "Demandez le déréférencement UE/UK dans Google (droit à l'oubli)",
    summary:
      "Les résidents UE/UK peuvent demander à Google de déréférencer des URLs spécifiques les concernant dans les résultats de recherche par nom. Supprime le lien de Search, pas la page sous-jacente.",
    urlLabel: 'Formulaire de demande RTBF',
  },
  'disable-os-telemetry': {
    title: 'Réduisez la télémétrie OS sur Windows et macOS',
    summary:
      "Diminuez les données de diagnostic et publicitaires que votre système d'exploitation envoie par défaut.",
    steps: [
      "Windows : Paramètres → Confidentialité et sécurité → Diagnostics et commentaires → réglez sur Obligatoire uniquement ; désactivez l'identifiant publicitaire et les expériences personnalisées.",
      "macOS : Paramètres → Confidentialité et sécurité → Analyses et améliorations → désactivez Partager les analyses ; Apple Advertising → désactivez Publicités personnalisées.",
      "Vérifiez les autorisations par application pour la caméra, le micro et la localisation pendant que vous y êtes.",
    ],
  },

  // ───────────────────────── Tier 4 — Fantôme ─────────────────────────
  'private-mailing-address': {
    title: 'Établissez une adresse postale privée',
    summary:
      "Utilisez une adresse CMRA/de réexpédition et arrêtez de donner votre adresse personnelle pour les livraisons et inscriptions. Coupe le lien public nom↔domicile.",
    steps: [
      "Options : une agence commerciale de réception de courrier (CMRA), une boîte aux lettres virtuelle, ou une boîte postale.",
      "Mettez à jour votre adresse sur les comptes progressivement, en commençant par ceux les plus exposés.",
      "Ne mettez plus jamais votre vraie adresse dans un formulaire d'inscription.",
    ],
  },
  'optout-electoral-register': {
    title: "Se désinscrire du registre électoral/liste électorale ouverte",
    summary:
      "Retirez-vous de la liste électorale vendue publiquement (registre ouvert UK) ou des ventes de données électorales (États-Unis, selon l'État).",
    steps: [
      "UK : contactez votre conseil local pour vous désinscrire du registre électoral « ouvert » (vous restez sur la liste complète pour voter).",
      "États-Unis : les règles des listes électorales varient par État ; certains permettent un statut confidentiel/protégé, notamment pour les victimes.",
    ],
  },
  'suppress-public-records': {
    title: "Supprimez votre adresse personnelle des archives publiques",
    summary:
      "Utilisez les programmes de confidentialité d'adresse ou la suppression des registres fonciers là où vous êtes éligible (particulièrement utile pour les victimes de violence).",
    steps: [
      "États-Unis : la plupart des États ont un programme de confidentialité d'adresse (ACP) pour les victimes de harcèlement/violence.",
      "Registres fonciers : certains comtés permettent la suppression pour les personnes à risque — renseignez-vous auprès du bureau du cadastre.",
      "C'est spécifique à la juridiction ; une association locale d'aide aux victimes peut vous aider à déposer le dossier.",
    ],
  },
  'compartmentalize-identities': {
    title: 'Compartimentez vos identités',
    summary:
      "Séparez e-mail, téléphone et carte par contexte de vie (travail / perso / achats / finances) pour qu'aucune fuite ne cartographie toute votre vie.",
  },
  'degoogled-phone': {
    title: 'Passez à un téléphone dé-Googlisé (GrapheneOS)',
    summary: "Utilisez au quotidien un système d'exploitation renforcé sans services Google intégrés.",
    urlLabel: 'GrapheneOS',
  },
  'always-vpn-tor': {
    title: 'VPN permanent / Tor pour les usages sensibles',
    summary:
      "Faites passer les navigations sensibles par un VPN sans journalisation de confiance (ex. Mullvad) ou par Tor.",
    urlLabel: 'Mullvad VPN',
  },
  'burner-devices': {
    title: 'Appareils dédiés / secondaires pour les voyages',
    summary:
      "Emportez des appareils avec un minimum de données lors de vos déplacements et dans des contextes à risque.",
  },
  'trust-llc-home': {
    title: 'Utilisez une fiducie/SCI pour le domicile et les actifs',
    summary:
      "Coupez le lien public nom↔adresse dans les registres fonciers en détenant les actifs dans une fiducie ou une SCI. Consultez un professionnel — ceci n'est pas un conseil juridique.",
  },
  'quarterly-reremoval': {
    title: 'Campagne de re-suppression trimestrielle',
    summary:
      "Relancez le balayage complet des courtiers chaque trimestre et notez les dates. La suppression est une habitude, pas un acte unique.",
  },
  'threat-model-review': {
    title: 'Réévaluation du modèle de menace chaque trimestre',
    summary:
      "Réévaluez contre qui vous vous protégez et adaptez-vous. Utilisez le cadre EFF Surveillance Self-Defense.",
    urlLabel: 'Plan EFF SSD',
  },
  'remove-osint-aggregators': {
    title: "Supprimez-vous des sites de recherche par fuite/OSINT",
    summary:
      "Demandez votre suppression des sites d'agrégation de fuites et d'OSINT dans la mesure du possible.",
  },
  'scrub-org-sites': {
    title: "Supprimez-vous des sites d'anciens employeurs et organisations",
    summary:
      "Demandez la suppression des biographies, pages de staff et mentions presse qui exposent vos informations. Envoyez une lettre si ignoré.",
  },
  'optout-court-arrest-records': {
    title: 'Supprimez les agrégateurs de casier judiciaire et arrestations',
    summary:
      "Les sites qui republier les photos d'arrestation, journaux d'arrestation et dossiers judiciaires sont une exposition très préjudiciable même quand les charges ont été abandonnées. Demandez la suppression à chacun ; certains exigent une pièce d'identité ou une décision judiciaire.",
    steps: [
      "Listez les sites affichant vos dossiers (à partir de votre recherche initiale du Niveau 1).",
      "Utilisez la page de suppression de chaque site ; pour les sites de photos d'arrestation, ne payez jamais de « frais de suppression » — cela finance le racket. Citez les lois anti-mugshot étatiques le cas échéant.",
      "Pour les portails judiciaires officiels, renseignez-vous auprès du greffe sur la mise sous scellés/expungement — la seule solution durable.",
      "Si un site vous ignore, escaladez avec une lettre de suppression GDPR/CCPA.",
    ],
  },
  'optout-gb-open-register': {
    title: 'Se désinscrire du registre électoral ouvert au Royaume-Uni',
    summary:
      "Le registre « ouvert » est vendu aux commerçants et aux sites de recherche de personnes. Désinscrivez-vous via votre conseil local — vous restez sur le registre complet pour voter et les vérifications de crédit.",
    urlLabel: 'Comment se désinscrire',
  },
  'optout-ie-edited-register': {
    title: "Passez au registre électoral modifié irlandais",
    summary:
      "Le registre complet irlandais peut être utilisé à des fins non électorales ; le registre modifié n'est pas vendu à des fins marketing. Choisissez le registre modifié lors de votre inscription ou mise à jour.",
    urlLabel: 'Vérifier le registre',
  },

  // ─────────────── Recherche appliquée (2026-06-26) ───────────────
  'es-asnef': {
    title: 'Consultez votre dossier de crédit ASNEF (Equifax Iberia)',
    summary:
      "ASNEF (géré par Equifax) est le principal fichier d'incidents/crédit espagnol — les comptes impayés frauduleux ouverts à votre nom y apparaissent. L'Espagne n'a pas de « blocage » préventif, donc consulter le fichier est la façon de détecter la fraude.",
    steps: [
      "Sur le site Equifax, cherchez « derecho de acceso » (droit d'accès) et soumettez une demande avec une copie de votre DNI.",
      "Ils doivent répondre dans un délai d'un mois, gratuitement.",
      "Vérifiez la présence de tout compte ou dette que vous ne reconnaissez pas — c'est le signal de fraude.",
      "Recommencez environ une fois par an et après toute notification de fuite.",
    ],
    urlLabel: 'Equifax — consumidores',
  },
  'es-cirbe': {
    title: 'Demandez votre rapport CIRBE (Banco de España)',
    summary:
      "Le CIRBE est le registre central de crédit de la Banco de España — il liste chaque prêt/crédit enregistré sous votre identifiant. La façon la plus fiable de repérer un crédit souscrit à votre nom.",
    steps: [
      "Allez sur la Sede Electrónica de la Banco de España → CIRBE → demandez votre rapport.",
      "Identifiez-vous avec un certificat numérique ou Cl@ve (ou faites la demande par courrier / en personne avec votre DNI).",
      "Gratuit et généralement instantané en ligne.",
      "Vérifiez la présence de tout prêt que vous n'avez pas contracté.",
    ],
    urlLabel: 'Banco de España (sede)',
  },
  'uk-cifas-pr': {
    title: "Ajoutez une Cifas Protective Registration (Royaume-Uni)",
    summary:
      "L'équivalent britannique le plus proche d'un blocage de crédit : un indicateur sur votre dossier demandant aux prêteurs de faire des vérifications d'identité supplémentaires avant d'ouvrir un crédit à votre nom. Payant (~30 £ pour deux ans), utile si vous êtes à risque élevé.",
    steps: [
      "Faites la demande sur le site Cifas pour la Protective Registration.",
      "Les prêteurs verront alors l'indicateur et devront prendre des mesures supplémentaires pour vérifier que c'est vraiment vous.",
      "Vos propres demandes de crédit prendront plus de temps pendant qu'elle est active — c'est le but.",
    ],
    urlLabel: 'Cifas',
  },
  'pihole': {
    title: "Bloquez les pisteurs à l'échelle du réseau avec Pi-hole",
    summary:
      "Un Pi-hole intercepte les domaines de pistage et de publicité pour chaque appareil de votre réseau — téléphones, TV, etc. — au niveau DNS, avant même qu'ils se connectent. Une seule installation, couverture de toute la maison.",
    steps: [
      "Installez Pi-hole sur un Raspberry Pi ou n'importe quel serveur Linux toujours allumé.",
      "Pointez le DNS de votre routeur vers lui pour que chaque appareil soit couvert automatiquement.",
      "Ajoutez des listes de blocage ; consultez le journal des requêtes pour voir ce à quoi vos appareils tentaient de se connecter.",
    ],
    urlLabel: 'Pi-hole',
  },
  'code-word': {
    title: "Définissez un « mot de code » familial contre les arnaques par clonage vocal",
    summary:
      "L'IA peut cloner une voix en quelques secondes d'audio et simuler un appel paniqué « c'est moi, envoie de l'argent ». Un mot de code familial partagé que vous seuls connaissez le déjoue instantanément — simple et parmi les mesures les plus efficaces que vous puissiez prendre.",
    steps: [
      "Convenez d'un mot ou d'une phrase avec vos proches qu'un inconnu ne pourrait pas deviner.",
      "Règle : toute demande urgente d'argent ou de secret par appel ou message doit l'inclure, sinon c'est une arnaque.",
      "Ne stockez ni n'envoyez jamais le mot de façon numérique là où il pourrait fuiter.",
    ],
    internalLabel: '🔑 Définir votre mot de code',
  },
  'dont-pay-removers': {
    title: "Ne payez pas un service de suppression de courtiers",
    summary:
      "Les services payants (DeleteMe, Incogni…) ne couvrent qu'une petite partie des courtiers, gonflent leur nombre de « suppressions » et facturent indéfiniment — et beaucoup d'avis élogieux sont des partenariats payants. Les désinscriptions qu'ils font payer sont les désinscriptions gratuites de cette application.",
    steps: [
      "Faites les désinscriptions gratuites des courtiers dans le niveau Courtiers vous-même — mêmes courtiers, sans abonnement.",
      "Les données des bureaux de crédit et des données inférées/marketing ne peuvent de toute façon pas être supprimées par ces services.",
      "Si vous appréciez la commodité, soit — mais sachez ce que vous achetez réellement.",
    ],
  },
  'poison-profile': {
    title: "Empoisonnez, ne supprimez pas — diluez votre profil",
    summary:
      "Les courtiers et les plateformes vous réinscrivent et reconstruisent, donc la suppression est un jeu sans fin. Ajouter du bruit plausible sur VOS propres comptes à faible enjeu dégrade la confiance de quiconque dans la véracité des données vous concernant. Le Kit leurre génère ce bruit.",
    steps: [
      "N'utilisez que des comptes qui vous appartiennent ; visez le banal et le générique, pas un faux personnage convaincant.",
      "N'usurpez jamais l'identité de quelqu'un, n'écrivez pas de faux avis et n'inscrivez pas d'autres personnes.",
      "Ouvrez le Kit leurre pour des variantes de nom et des bios de remplissage à coller.",
    ],
    internalLabel: '⬡ Ouvrir le Kit leurre',
  },
  'vary-writing-style': {
    title: "Variez votre style d'écriture selon les identités",
    summary:
      "La stylométrie peut relier vos comptes par la façon dont vous écrivez — expressions favorites, ponctuation, habitudes d'emoji — même sans nom ou IP commun. Si vous maintenez des identités séparées, écrivez-les différemment.",
    steps: [
      "Adoptez délibérément des habitudes différentes par identité : longueur des phrases, ponctuation, majuscules, usage des emoji.",
      "Évitez les expressions signature et les références récurrentes entre les comptes.",
      "Pour les enjeux élevés, rédigez, puis réécrivez dans une voix différente avant de publier.",
    ],
  },
  'behavioral-fingerprint': {
    title: 'Connaissez votre empreinte comportementale',
    summary:
      "Au-delà des cookies, les sites profilent votre comportement — rythme de frappe, vitesse de défilement, voire l'accéléromètre de votre téléphone. Vous ne pouvez pas l'effacer totalement, mais les navigateurs anti-fingerprinting et les profils séparés l'atténuent.",
    steps: [
      "Utilisez un navigateur résistant au fingerprinting (Tor Browser, ou Brave avec la protection contre le fingerprinting activée).",
      "Gardez des profils/appareils de navigation séparés pour des identités distinctes afin que les comportements ne puissent pas être croisés.",
      "Désactivez l'accès aux capteurs de mouvement pour les sites qui n'en ont pas besoin.",
    ],
  },
}
