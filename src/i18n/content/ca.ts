import type { ContentOverlay } from './types'

export const ca: ContentOverlay = {
  'google-yourself': {
    title: "Cerca el teu propi nom a Google",
    summary:
      "Busca el teu nom (+ ciutat, + telèfon) en una finestra privada i fes captures de pantalla dels primers resultats. Aquesta és la teva línia base — només pots mesurar l'eliminació si saps el que és visible.",
    steps: [
      "Obre una finestra privada o d'incògnit perquè els resultats personalitzats no et confonguin.",
      "Cerca: el teu nom, després \"nom + ciutat\", després el teu número de telèfon, després el teu correu.",
      "Captura les dues primeres pàgines de cada cerca. Anota cada lloc que exposi adreça, telèfon, familiars o fotos.",
      "Aquests llocs es convertiran en la teva llista d'objectius al nivell de Brokers de Dades.",
    ],
    urlLabel: "Cerca a Google",
  },
  hibp: {
    title: "Comprova Have I Been Pwned",
    summary:
      "Introdueix el teu correu per veure en quines filtracions ha aparegut i quines contrasenyes cal canviar. La base de dades de filtracions canònica i gratuïta.",
    urlLabel: "Comprova HIBP",
  },
  'mozilla-monitor': {
    title: "Configura Mozilla Monitor",
    summary: "Alertes gratuïtes i continuades de filtracions per fins a 20 adreces de correu, usant la base de dades HIBP.",
    urlLabel: "Obre Monitor",
  },
  'password-manager': {
    title: "Instal·la un gestor de contrasenyes",
    summary:
      "Adopta Bitwarden o KeePass. Aquesta és la base per tenir contrasenyes úniques i per localitzar tots els comptes que mai has creat.",
    urlLabel: "Obtén Bitwarden",
  },
  'change-breached-passwords': {
    title: "Canvia les contrasenyes reutilitzades i filtrades",
    summary:
      "Per a cada compte marcat per Have I Been Pwned — i a qualsevol lloc on hagis reutilitzat una contrasenya — estableix una nova contrasenya única generada pel teu gestor.",
    steps: [
      "Comença per les \"claus del regne\": correu, banca i gestor de contrasenyes.",
      "Mai reutilitzis una contrasenya en dos llocs. Deixa que el gestor les generi.",
      "Si un compte va aparèixer en una filtració, considera la contrasenya antiga com a pública.",
    ],
  },
  'delete-dormant-accounts': {
    title: "Elimina comptes inactius",
    summary:
      "Cada compte antic és una superfície d'atac i una font per als brokers de dades. Usa un directori d'enllaços de supressió directa com JustDeleteMe, ordenats per dificultat.",
    steps: [
      "El gestor de contrasenyes i les cerques antigues a la safata d'entrada (\"benvingut\", \"verifica el teu compte\") revelen comptes oblidats.",
      "Usa la puntuació de dificultat: verd = un sol clic, vermell = has d'escriure al suport.",
      "Elimina, no desactives — els comptes desactivats continuen guardant les teves dades.",
    ],
    urlLabel: "Obre JustDeleteMe",
  },
  'optout-truepeoplesearch': {
    title: "Opt-out de TruePeopleSearch",
    summary: "Envia la sol·licitud d'eliminació — sense correu ni identificació, gairebé instantani. Una de les victòries visibles més ràpides.",
    urlLabel: "Elimina'm",
  },
  'optout-fastpeoplesearch': {
    title: "Opt-out de FastPeopleSearch",
    summary: "Eliminació ràpida per formulari, sense necessitat d'identificació.",
    urlLabel: "Elimina'm",
  },
  'optout-usphonebook': {
    title: "Opt-out de USPhoneBook",
    summary: "Eliminació ràpida, sense identificació necessària.",
    urlLabel: "Elimina'm",
  },
  'google-results-about-you': {
    title: "\"Resultats sobre tu\" de Google",
    summary:
      "Usa la pròpia eina de Google per sol·licitar l'eliminació de pàgines que exposen el teu telèfon, adreça o correu als resultats de cerca.",
    urlLabel: "Obre l'eina",
  },
  'google-ad-personalization': {
    title: "Desactiva la personalització d'anuncis de Google",
    summary: "Desactiva els anuncis personalitzats vinculats al perfil del teu compte de Google.",
    urlLabel: "Configuració d'anuncis",
  },
  'reset-advertising-id': {
    title: "Restableix l'identificador publicitari del telèfon",
    summary: "Talla l'identificador persistent que la tecnologia publicitària usa per seguir-te entre aplicacions.",
    steps: [
      "iOS: Ajustos → Privacitat i Seguretat → Seguiment → desactiva \"Permetre que les apps demanin seguiment\".",
      "iOS: Ajustos → Privacitat i Seguretat → Publicitat d'Apple → desactiva Anuncis personalitzats.",
      "Android: Ajustos → Privacitat → Anuncis → Elimina l'identificador publicitari (o restableix-lo).",
    ],
  },
  'prune-social-profiles': {
    title: "Neteja els perfils socials públics",
    summary:
      "Posa les publicacions i perfils antics en privat; elimina data de naixement, telèfon, adreça i lloc d'origen de qualsevol cosa pública.",
    steps: [
      "Facebook: Configuració → Privacitat → \"Limita les publicacions anteriors\"; revisa la secció Informació camp per camp.",
      "Instagram/X: passa a privat si pots; elimina ubicació, contacte i data de naixement de la bio.",
      "LinkedIn: amaga els contactes i la informació de contacte als no-connexions.",
    ],
  },
  'bulk-delete-posts': {
    title: "Elimina en bloc les publicacions antigues",
    summary: "Esborra publicacions histèriques amb les eines natives de descàrrega i eliminació de cada plataforma.",
    steps: [
      "X: Configuració → \"Descarrega un arxiu\" primer, després usa un sistema d'eliminació massiva.",
      "Facebook: Registre d'activitat → filtra per any → elimina o arxiva en bloc.",
      "Sempre exporta un arxiu teu abans d'eliminar en massa.",
    ],
  },
  'unsubscribe-marketing': {
    title: "Dóna't de baixa de les llistes de màrqueting",
    summary:
      "Cancel·la la subscripció massiva a butlletins. Redueix el rastre de dades continu i minimitza l'impacte de la pròxima filtració.",
    steps: [
      "Cerca \"unsubscribe\" a la safata d'entrada i treballa de dalt a baix.",
      "Prefereix l'enllaç de baixa del correu en lloc de marcar com a brossa (eliminació més neta).",
      "Per als remitents que ho ignoren, és un candidat per a una carta GDPR/CCPA més endavant.",
    ],
  },
  'unlist-caller-id': {
    title: "Elimina el teu número de les apps d'identificació de trucada",
    summary: "Dóna't de baixa de les bases de dades d'identificació de trucades de masses com Truecaller i Hiya.",
    urlLabel: "Baixa de Truecaller",
  },
  'revoke-third-party-apps': {
    title: "Revisa i revoca l'accés d'apps de tercers",
    summary:
      "Revisa les apps connectades als teus comptes de Google/Apple/Facebook/Microsoft i revoca les que ja no uses.",
    urlLabel: "Connexions de Google",
  },
  'enable-2fa': {
    title: "Activa el 2FA als comptes crítics",
    summary:
      "Activa l'autenticació de dos factors basada en app (no per SMS) per al correu, el banc i el gestor de contrasenyes. Els codis per SMS es poden interceptar per SIM swapping.",
    steps: [
      "Usa una app d'autenticació (Aegis, Ente Auth, o el teu gestor de contrasenyes).",
      "Prioritza: correu → gestor de contrasenyes → banc → xarxes socials.",
      "Desa els codis de còpia de seguretat al gestor de contrasenyes, no en paper a prop de l'escriptori.",
    ],
  },
  'wipe-old-devices': {
    title: "Esborra les dades abans de desfer-te dels dispositius",
    summary: "Restableix de fàbrica i xifra telèfons, portàtils i discos durs abans de vendre'ls o reciclar-los.",
    steps: [
      "Assegura't primer que el xifratge de disc complet estigui activat (fa que l'esborrat sigui efectivament irreversible).",
      "Tanca la sessió de tots els comptes (especialment Find My / Google) abans de restablir.",
      "Després, restableix de fàbrica. Per a discos durs magnètics, un esborrat multipassa; per a SSD, usa l'esborrat segur incorporat.",
    ],
  },
  'optout-smartbackgroundchecks': {
    title: "Opt-out de SmartBackgroundChecks",
    summary: "Eliminació ràpida per formulari, sense identificació — un altre lloc de cerca de persones que apareix en cerques pel nom.",
    urlLabel: "Elimina'm",
  },
  'ad-industry-optout': {
    title: "Opt-out dels anuncis per comportament (DAA/NAI)",
    summary:
      "Usa les eines d'autoregulació del sector publicitari per optar que aquest navegador quedi fora de la publicitat conductual en una sola passada. Basat en galetes — refés-ho després de netejar-les o en un navegador nou.",
    urlLabel: "DAA WebChoices",
  },
  'optout-spokeo': {
    title: "Opt-out de Spokeo",
    summary: "Enganxa la URL del teu perfil i confirma per correu.",
    urlLabel: "Opt-out",
  },
  'optout-whitepages': {
    title: "Opt-out de Whitepages",
    summary: "Envia una sol·licitud de supressió; sovint cal un pas de verificació per telèfon. Apareix molt en cerques pel nom.",
    urlLabel: "Sol·licitud de supressió",
  },
  'optout-peopleconnect': {
    title: "Opt-out de la xarxa PeopleConnect",
    summary:
      "Una sola sol·licitud de supressió cobreix Intelius, BeenVerified, Instant Checkmate, TruthFinder i USSearch. L'acció de broker amb més rendiment.",
    urlLabel: "Suprimeix els 5",
  },
  'optout-radaris': {
    title: "Opt-out de Radaris",
    summary: "Reclama i elimina el teu perfil; cal confirmació per correu.",
    urlLabel: "Controla la privacitat",
  },
  'optout-mylife': {
    title: "Opt-out de MyLife",
    summary: "Envia una sol·licitud de privacitat/CCPA. MyLife manté perfils de \"puntuació de reputació\" persistents i és notòriament difícil d'eliminar.",
    urlLabel: "Sol·licitud CCPA",
  },
  'optout-nuwber': {
    title: "Opt-out de Nuwber",
    summary: "Eliminació per enllaç i confirmació per correu.",
    urlLabel: "Elimina'm",
  },
  "optout-thatsthem": {
    title: "Opt-out de That's Them",
    summary: "Eliminació per formulari senzill.",
    urlLabel: "Opt-out",
  },
  'optout-peoplefinders': {
    title: "Opt-out de PeopleFinders",
    summary: "Formulari més confirmació per correu.",
    urlLabel: "Opt-out",
  },
  'optout-familytreenow': {
    title: "Opt-out de FamilyTreeNow",
    summary: "Elimina gràfics sorprenentment detallats d'adreça i familiars.",
    urlLabel: "Opt-out",
  },
  'optout-acxiom': {
    title: "Opt-out de Acxiom",
    summary: "Un dels agregadors de dades de màrqueting més grans — tallar-lo redueix el subministrament a molts brokers menors.",
    urlLabel: "Opt-out",
  },
  'optout-oracle': {
    title: "Opt-out de Oracle Data Cloud",
    summary: "Envia l'opt-out del núvol de dades. Oracle està tancant el seu negoci publicitari — verifica el procés actual.",
    urlLabel: "Privacitat / opt-out",
  },
  'optout-epsilon': {
    title: "Opt-out de Epsilon",
    summary: "Opt-out de l'agregador de dades de màrqueting.",
    urlLabel: "Opt-out",
  },
  'optout-experian-marketing': {
    title: "Opt-out del màrqueting d'Experian",
    summary: "Opt-out de màrqueting, separat del teu historial de crèdit.",
    urlLabel: "Opt-out",
  },
  'private-browser': {
    title: "Canvia a un navegador privat",
    summary: "Adopta Firefox o Brave amb protecció contra rastreig activada per defecte.",
    urlLabel: "Obtén Firefox",
  },
  'tracker-blocker': {
    title: "Afegeix un bloquejador de contingut i rastreig",
    summary: "Instal·la uBlock Origin per bloquejar anuncis i rastreadors a tota la web.",
    urlLabel: "Obtén uBlock Origin",
  },
  'private-search': {
    title: "Canvia el motor de cerca predeterminat",
    summary: "Passa a un motor de cerca que no rastreja, com DuckDuckGo, Startpage o Brave Search.",
    urlLabel: "Prova DuckDuckGo",
  },
  'email-aliases': {
    title: "Comença a usar àlies de correu",
    summary:
      "Usa un àlies únic per servei perquè una futura filtració no pugui vincular els teus comptes — i pots cancel·lar qualsevol àlies que comenci a rebre brossa.",
    urlLabel: "Obtén SimpleLogin",
  },
  'optout-prescreen': {
    title: "Opt-out de les ofertes de crèdit prescreened dels EUA",
    summary: "Para les ofertes prescreened de crèdit i assegurances — aquestes son vendes massives de les dades de la teva capçalera creditícia.",
    urlLabel: "Opt-out (5 anys / permanent)",
  },
  'freeze-credit': {
    title: "Congela el teu crèdit",
    summary: "Col·loca un bloqueig de seguretat a les tres agències per bloquejar el frau de nous comptes. Gratuït als EUA.",
    urlLabel: "Bloqueig Equifax",
    steps: [
      "Bloqueja les tres: Equifax, Experian i TransUnion (cadascuna és independent).",
      "Un bloqueig impedeix que s'obri nou crèdit al teu nom; el 'descongela' temporalment quan necessites crèdit.",
      "No afecta la puntuació i és gratuït per llei.",
    ],
  },
  'disable-location-history': {
    title: "Desactiva l'historial de ubicació del telèfon",
    summary: "Desactiva Google Location History / iOS Significant Locations i esborra l'historial guardat.",
    urlLabel: "Controls d'activitat",
  },
  'schedule-broker-recheck': {
    title: "Programa una revisió periòdica dels brokers",
    summary:
      "Els brokers et tornen a publicar en 3–6 mesos. Vanish rastreja quan cal refer cada opt-out — això confirma que et compromets amb el cicle.",
  },
  'broker-letter': {
    title: "Carta: elimina'm (sense formulari d'autoservei)",
    summary:
      "Per a brokers i empreses sense opt-out d'autoservei, genera una carta de supressió GDPR/CCPA i envia-la tu mateix.",
  },
  'optout-checkpeople': {
    title: "Opt-out de CheckPeople",
    summary: "Eliminació per formulari d'un altre agregador de cerca de persones.",
    urlLabel: "Opt-out",
  },
  'optout-dmachoice': {
    title: "Opt-out del màrqueting postal directe (DMAchoice)",
    summary:
      "Registra't al servei de preferències de correu de la Data & Marketing Association per reduir el correu postal brossa. Una petita tarifa única cobreix un registre de diversos anys.",
    urlLabel: "DMAchoice",
  },
  youronlinechoices: {
    title: "Opt-out dels anuncis per comportament a la UE",
    summary:
      "Usa l'eina EDAA YourOnlineChoices per optar que aquest navegador quedi fora de la publicitat conductual a les xarxes participants. Basat en galetes — refés-ho després de netejar-les.",
    urlLabel: "Your Online Choices",
  },
  'encrypted-dns-devices': {
    title: "Configura DNS xifrat a tots els dispositius",
    summary:
      "Apunta el telèfon i el portàtil a un resolver xifrat i respectuós de la privacitat perquè el teu ISP no pugui registrar cada lloc web que consultes.",
    steps: [
      "Tria un resolver sense registres: Quad9 (9.9.9.9) o NextDNS.",
      "iOS/macOS: instal·la el perfil de configuració del proveïdor, o configura DNS-over-HTTPS a Ajustos.",
      "Android 9+: Ajustos → Xarxa → DNS privat → introdueix el nom d'amfitrió del proveïdor.",
      "Complement al DNS del router — els dispositius el mantenen quan surts de la xarxa domèstica.",
    ],
    urlLabel: "Quad9",
  },
  'harden-messaging-privacy': {
    title: "Reforça la privacitat de les apps de missatgeria",
    summary: "Activa els controls de privacitat ja incorporats a les apps que uses — abans de migrar res.",
    steps: [
      "Activa els missatges que desapareixen per defecte on estigui disponible (Signal, WhatsApp, Telegram).",
      "Amaga \"última connexió\", confirmacions de lectura i foto de perfil als no-contactes.",
      "Bloqueja l'app amb un PIN/biomètric i desactiva les previsualitzacions de missatges a la pantalla de bloqueig.",
      "Revisa la configuració d'invitació a grups perquè desconeguts no et puguin afegir.",
    ],
  },
  'remove-outdated-google': {
    title: "Elimina pàgines obsoletes de Google",
    summary:
      "Quan una pàgina sobre tu canvia o s'elimina però Google encara mostra contingut antic a la memòria cau, sol·licita a Google que l'actualitzi o la retiri.",
    urlLabel: "Elimina contingut obsolet",
  },
  'optout-es-listarobinson': {
    title: "Registra't a la Lista Robinson",
    summary:
      "La llista oficial d'exclusió publicitària d'Espanya (gestionada per Adigital). Un cop registrat, les empreses membres no poden trucar-te, enviar-te missatges, correu postal ni correu electrònic de màrqueting.",
    urlLabel: "Lista Robinson",
  },
  'optout-it-rpo': {
    title: "Registra't al Registro Pubblico delle Opposizioni",
    summary:
      "El registre públic d'oposicions d'Itàlia. Inscriu el teu número de telèfon (i adreça postal) per bloquejar els operadors que han de consultar-lo abans de fer màrqueting.",
    urlLabel: "Registro Opposizioni",
  },
  'optout-fr-bloctel': {
    title: "Registra't a Bloctel",
    summary:
      "El registre oficial de no trucades de França. Els números inscrits no poden usar-se legalment per a màrqueting telefònic per empreses amb les quals no tens contracte.",
    urlLabel: "Bloctel",
  },
  'optout-de-robinsonliste': {
    title: "Registra't a la Robinsonliste",
    summary:
      "La llista central d'opt-out publicitari d'Alemanya (gestionada per la DDV). Redueix el correu postal de màrqueting adreçat, les trucades i el correu electrònic de les empreses adherides.",
    urlLabel: "Robinsonliste (DDV)",
  },
  'optout-be-donotcallme': {
    title: "Registra't a la llista Do Not Call Me",
    summary:
      "La llista oficial de no trucades de Bèlgica. Un cop inscrit, el teu número no es pot usar per a màrqueting telefònic. El registre es fa per telèfon.",
    urlLabel: "Do Not Call Me",
  },
  'optout-pt-amd': {
    title: "Uneix-te a la Lista de Oposição (AMD)",
    summary:
      "La llista d'oposició dels consumidors de Portugal. Inscriu-te per aturar trucades de màrqueting directe i correu de les empreses vinculades al registre.",
    urlLabel: "Lista de Oposição",
  },
  'optout-se-hitta': {
    title: "Elimina la teva pàgina de contacte de Hitta.se",
    summary:
      "El principi de publicitat de registres suecs fa que la teva adreça sigui fàcil de trobar. Amaga la teva pàgina de contacte a Hitta.se — l'eliminació es fa amb BankID.",
    urlLabel: "Elimina'm",
  },
  'optout-se-ratsit': {
    title: "Elimina la teva entrada de Ratsit",
    summary: "Ratsit republica registres públics suecs — adreça, edat, finances. Elimina la teva entrada gratuïta amb BankID.",
    urlLabel: "Ta bort",
  },
  'optout-se-mrkoll': {
    title: "Amaga les teves dades a MrKoll",
    summary: "MrKoll republica registres públics suecs. Amaga la teva adreça i número de telèfon — cal BankID.",
    urlLabel: "Ändra uppgifter",
  },
  'optout-de-dastelefonbuch': {
    title: "Elimina la teva entrada a DasTelefonbuch / DasÖrtliche",
    summary: "Elimina o restringeix la teva entrada als principals directoris telefònics públics d'Alemanya (DasTelefonbuch, DasÖrtliche).",
    urlLabel: "Gestiona l'entrada",
  },
  'optout-at-ecg': {
    title: "Afegeix-te a la ECG-Liste",
    summary:
      "La llista d'exclusió del màrqueting electrònic d'Àustria (gestionada per RTR). Registrar la teva adreça t'exclou del correu electrònic i SMS de màrqueting no sol·licitat.",
    urlLabel: "ECG-Liste",
  },
  'optout-dk-robinson': {
    title: "Uneix-te a la Robinsonlisten",
    summary:
      "La llista oficial de protecció publicitària de Dinamarca, gestionada a través del registre central de persones (CPR). Bloqueja el correu publicitari adreçat i les trucades de màrqueting.",
    urlLabel: "Robinsonlisten",
  },
  'optout-fi-kieltopalvelu': {
    title: "Registra la prohibició de màrqueting (ASML)",
    summary:
      "L'opt-out Robinson de Finlàndia, gestionat per l'associació de màrqueting ASML. Registra't per aturar el màrqueting directe telefònic i adreçat.",
    urlLabel: "Kieltopalvelut",
  },
  'optout-hr-nezovi': {
    title: "Registra't a NE ZOVI",
    summary:
      "El registre oficial de no trucades de Croàcia (gestionat pel regulador HAKOM). Gratuït — et registres a través del teu operador de telefonia per bloquejar trucades de màrqueting.",
    urlLabel: "NE ZOVI",
  },
  'private-email-provider': {
    title: "Migra a un proveïdor de correu privat",
    summary: "Mou la teva bústia principal a Proton o Tuta i comença a redirigir i migrar els teus comptes.",
    urlLabel: "Proton Mail",
  },
  signal: {
    title: "Migra les comunicacions a Signal",
    summary: "Fes de Signal el teu missatger predeterminat i deixa d'usar SMS/WhatsApp per a qualsevol cosa sensible.",
    urlLabel: "Obtén Signal",
  },
  'hardware-keys': {
    title: "Afegeix claus de seguretat de maquinari",
    summary: "Registra claus FIDO2 (p. ex. YubiKey) al correu, banc, gestor de contrasenyes i comptes al núvol.",
    steps: [
      "Compra dues claus — una principal i una de còpia de seguretat en un lloc segur.",
      "Registra totes dues a cada compte crític abans d'eliminar mètodes 2FA més dèbils.",
      "Les claus de maquinari son resistents al phishing; és el segon factor més sòlid disponible.",
    ],
  },
  'full-broker-sweep': {
    title: "Neteja exhaustiva de brokers",
    summary: "Treballa la llista completa de brokers de principi a fi, registrant cada data d'opt-out perquè els temporitzadors de revisió siguin precisos.",
  },
  'e2ee-storage': {
    title: "Canvia a emmagatzematge al núvol E2EE",
    summary: "Substitueix Drive/Dropbox per emmagatzematge xifrat d'extrem a extrem perquè el proveïdor no pugui llegir els teus fitxers.",
    urlLabel: "Proton Drive",
  },
  'degoogle-services': {
    title: "Desvincula't de Google en serveis bàsics",
    summary: "Substitueix Maps, Docs i Photos per alternatives que respecten la privacitat.",
    steps: [
      "Maps → Organic Maps / OsmAnd. Docs → CryptPad / OnlyOffice. Photos → Ente / Immich.",
      "Migra un servei alhora per no perdre accés a res important.",
      "Exporta les teves dades des de Google Takeout abans d'eliminar res.",
    ],
    urlLabel: "Alternatives (Privacy Guides)",
  },
  'masked-phone': {
    title: "Usa un número de telèfon emmascarar / VoIP",
    summary: "Dóna un número secundari per a registres i mantén el teu número real privat.",
    steps: [
      "Opcions: Google Voice (EUA), MySudo, o una segona SIM/eSIM econòmica.",
      "Usa el número emmascarar per a targetes de fidelitat, registres i qualsevol cosa no essencial.",
      "Reserva el número real per a contactes de confiança i còpies de seguretat de 2FA.",
    ],
  },
  'masked-cards': {
    title: "Usa targetes de pagament virtuals / enmascarades",
    summary: "Els números de targeta d'un sol ús o per comerciant trenquen la vinculació de dades de pagament que compren els brokers.",
    steps: [
      "Opcions: Privacy.com (EUA), targetes d'un sol ús de Revolut, o les targetes virtuals del teu banc.",
      "Crea una targeta única per comerciant; cancel·la qualsevol que es filtri o cobri de més.",
    ],
  },
  'strip-exif': {
    title: "Elimina les metadades de fotos abans de publicar-les",
    summary: "Elimina les dades EXIF/GPS de les imatges que comparteixes públicament perquè les fotos no reveelin on vius o on estaves.",
    steps: [
      "Moltes plataformes eliminen l'EXIF en pujar — però no totes, i no en compartir fitxers originals.",
      "iOS: full de compartir → Opcions → desactiva Ubicació. Android: usa una app d'eliminació de metadades.",
      "Escriptori: ExifTool, o \"Elimina propietats\" a les propietats del fitxer de Windows.",
    ],
  },
  'harden-router-dns': {
    title: "Reforça el router domèstic i el DNS",
    summary: "Canvia la contrasenya d'administrador predeterminada, activa el DNS xifrat i desactiva UPnP/WPS.",
    steps: [
      "Canvia immediatament la contrasenya d'administrador del router des del valor predeterminat.",
      "Configura DNS xifrat (DoH/DoT) — p. ex. Quad9 (9.9.9.9) o NextDNS — per aturar que el teu ISP registri cada consulta.",
      "Desactiva UPnP i WPS; mantén el firmware actualitzat.",
    ],
  },
  'segment-iot': {
    title: "Segmenta els dispositius IoT a la xarxa",
    summary: "Posa els dispositius de la llar intel·ligent en una xarxa de convidats o VLAN per limitar el que poden veure i accedir.",
  },
  'anti-fingerprint': {
    title: "Blinda't contra les empremtes digitals del navegador",
    summary: "Usa configuració anti-empremta digital perquè els rastreadors no puguin identificar el teu navegador sense galetes.",
    steps: [
      "Firefox: activa privacy.resistFingerprinting, o usa Mullvad Browser / Tor Browser per a sessions sensibles.",
      "Evita acumular extensions exòtiques — cadascuna et fa més únic, no menys.",
    ],
    urlLabel: "Prova la teva empremta",
  },
  'retire-old-email': {
    title: "Jubila i elimina el compte de correu antic",
    summary: "Després de migrar, actualitza els serveis restants i elimina la bústia antiga perquè no pugui ser filtrada ni minada.",
    steps: [
      "Redirigeix la bústia antiga a la nova durant un període de gràcia (3–6 mesos).",
      "Cada cop que arribi quelcom a l'adreça antiga, actualitza aquell servei a la nova.",
      "Quan el tràfic s'assequi, exporta i elimina el compte antic.",
    ],
  },
  'gdpr-access-letter': {
    title: "Envia sol·licituds d'accés GDPR (SAR)",
    summary: "Força els grans titulars de dades a revelar exactament el que tenen sobre tu — reconeixement abans de l'esborrat.",
  },
  'optout-lexisnexis': {
    title: "Opt-out de LexisNexis",
    summary: "Agregador FCRA d'alt valor que alimenta les verificacions d'antecedents; pot requerir prova d'identitat.",
    urlLabel: "Opt-out",
  },
  'broker-registry': {
    title: "Opt-out a través dels registres estatals de brokers",
    summary: "Usa els registres estatals de brokers (Califòrnia, Vermont) per trobar i fer opt-out dels brokers que t'han passat per alt.",
    urlLabel: "Registre CA de brokers",
  },
  'maps-contributions': {
    title: "Elimina l'adreça de les contribucions a Maps",
    summary: "Elimina ressenyes, fotos i etiquetes que revelen silenciosament la teva llar o lloc de treball.",
    urlLabel: "Activitat a Maps",
  },
  'cross-app-tracking-off': {
    title: "Desactiva el rastreig entre apps a tot arreu",
    summary: "iOS App Tracking Transparency desactivat, identificador d'anuncis d'Android desactivat, ubicació per app en \"mai/preguntar\".",
  },
  'optout-eu-brokers': {
    title: "Opt-out dels brokers de la UE",
    summary: "Residents a la UE/UK: presenta opt-outs i cartes GDPR Art.17 als brokers que operen a la UE (Acxiom, Criteo, Experian UK).",
    urlLabel: "Acxiom (global)",
  },
  'optout-criteo': {
    title: "Opt-out de Criteo",
    summary: "Opta fora del perfil de retargeting publicitari de Criteo — una de les xarxes d'anuncis conductuals més grans que opera a la UE.",
    urlLabel: "Privacitat / opt-out",
  },
  'optout-192': {
    title: "Opt-out de 192.com",
    summary:
      "Elimina la teva entrada del principal lloc de cerca de persones del Regne Unit. Gran part de les seves dades provenen del registre electoral obert — fes opt-out d'aquest al teu ajuntament també.",
    urlLabel: "Elimina les meves dades",
  },
  'optout-experian-uk': {
    title: "Opt-out del màrqueting d'Experian UK",
    summary: "Usa el portal de dades d'Experian UK per controlar l'ús de màrqueting de les teves dades, separat del teu historial de crèdit.",
    urlLabel: "Portal de dades",
  },
  'google-rtbf-delisting': {
    title: "Sol·licita la desindexació a Google a la UE/UK (dret a l'oblit)",
    summary:
      "Els residents a la UE/UK poden demanar a Google que desindexe URL específiques sobre ells en cerques pel nom. Elimina l'enllaç de la Cerca, no la pàgina subjacent.",
    urlLabel: "Formulari de sol·licitud RTBF",
  },
  'disable-os-telemetry': {
    title: "Redueix la telemetria del SO a Windows i macOS",
    summary: "Redueix les dades de diagnòstic i publicitat que el teu SO d'escriptori envia per defecte.",
    steps: [
      "Windows: Configuració → Privacitat i seguretat → Diagnòstics i comentaris → estableix a \"Bàsic\"; desactiva l'identificador de publicitat i les experiències personalitzades.",
      "macOS: Configuració → Privacitat i Seguretat → Anàlisi i Millores → desactiva Comparteix anàlisi; Publicitat d'Apple → desactiva Anuncis personalitzats.",
      "Revisa els permisos de càmera, micròfon i ubicació per app mentre hi ets.",
    ],
  },
  'private-mailing-address': {
    title: "Estableix una adreça postal privada",
    summary:
      "Usa una adreça CMRA/de reenviament i deixa de donar la teva adreça domiciliària per a lliuraments i registres. Trenca el vincle públic nom-domicili.",
    steps: [
      "Opcions: una agència comercial de recepció de correu (CMRA), una bústia virtual o un apartat de correus.",
      "Actualitza la teva adreça als comptes gradualment, començant pels de més exposició.",
      "Mai no tornis a posar la teva adreça domiciliària real en un formulari de registre.",
    ],
  },
  'optout-electoral-register': {
    title: "Opt-out del registre electoral/padró obert",
    summary:
      "Elimina't del cens electoral venut públicament (registre obert del UK) o de les vendes de dades de votants (EUA, per estat).",
    steps: [
      "UK: contacta el teu ajuntament local per fer opt-out del registre electoral \"obert\" (continues al registre complet per votar).",
      "EUA: les normes del cens de votants varien per estat; alguns permeten l'estatus confidencial/ocult, especialment per a supervivents.",
    ],
  },
  'suppress-public-records': {
    title: "Suprimeix l'adreça domiciliària als registres públics",
    summary:
      "Usa programes de confidencialitat d'adreces o redacció de registres de propietat on siguis elegible (molt útil per a víctimes d'assetjament).",
    steps: [
      "EUA: la majoria d'estats gestionen un Programa de Confidencialitat d'Adreces (ACP) per a víctimes d'assetjament/violència.",
      "Registres de propietat: alguns comtats permeten la redacció per a persones en risc — consulta al registrador del comtat.",
      "Això és específic de la jurisdicció; una organització local de suport a víctimes et pot ajudar a presentar-ho.",
    ],
  },
  'compartmentalize-identities': {
    title: "Compartimentalitza les identitats",
    summary: "Separa correu, telèfon i targeta per context vital (feina / personal / compres / finances) perquè cap filtració sola no mapegi tota la teva vida.",
  },
  'degoogled-phone': {
    title: "Canvia a un telèfon sense Google (GrapheneOS)",
    summary: "Usa com a dispositiu principal un SO endurit sense serveis de Google integrats.",
    urlLabel: "GrapheneOS",
  },
  'always-vpn-tor': {
    title: "VPN sempre activa / Tor per a usos sensibles",
    summary: "Enruta la navegació sensible a través d'una VPN de confiança sense registres (p. ex. Mullvad) o Tor.",
    urlLabel: "Mullvad VPN",
  },
  'burner-devices': {
    title: "Dispositius de recanvi per viatjar",
    summary: "Porta dispositius amb dades mínimes a l'estranger i en contextos d'alt risc.",
  },
  'trust-llc-home': {
    title: "Usa un trust/LLC per a la llar i els actius",
    summary:
      "Trenca el vincle públic nom-adreça als registres de propietat posant els actius en un trust o LLC. Consulta un professional — no és assessorament legal.",
  },
  'quarterly-reremoval': {
    title: "Campanya trimestral de re-eliminació",
    summary: "Refés la neteja completa de brokers cada trimestre i registra les dates. L'eliminació és un hàbit, no una tasca única.",
  },
  'threat-model-review': {
    title: "Revisió trimestral del model d'amenaça",
    summary:
      "Reavalua de qui et protegeixes i ajusta. Usa el marc de l'EFF Surveillance Self-Defense.",
    urlLabel: "Pla EFF SSD",
  },
  'remove-osint-aggregators': {
    title: "Elimina't dels llocs de filtració i OSINT",
    summary: "Sol·licita l'eliminació de llocs d'agregació de filtracions i intel·ligència de fonts obertes on sigui possible.",
  },
  'scrub-org-sites': {
    title: "Elimina't de llocs d'antics empleadors i organitzacions",
    summary: "Sol·licita l'eliminació de bios, pàgines de personal i mencions a la premsa que exposen les teves dades. Usa una carta si t'ignoren.",
  },
  'optout-court-arrest-records': {
    title: "Suprimeix els agregadors de registres judicials i detencions",
    summary:
      "Els llocs que republiquen fotos policials, registres de detencions i arxius judicials representen una exposició d'alt dany fins i tot quan els càrrecs es van retirar. Sol·licita l'eliminació de cadascun; alguns requereixen identificació o disposició judicial.",
    steps: [
      "Llista els llocs que mostren els teus registres (de la cerca basal del nivell 1).",
      "Usa la pàgina d'eliminació de cada lloc; per als de fotos policials, mai no paguis una \"tarifa de retirada\" — finança el negoci. Cita les lleis estatals anti-foto policial on existeixin.",
      "Per als portals judicials oficials, pregunta al secretari sobre el segellat/expunció — l'única solució duradora.",
      "Si un lloc t'ignora, escala amb una carta de supressió GDPR/CCPA.",
    ],
  },
  'optout-gb-open-register': {
    title: "Opt-out del registre electoral obert del Regne Unit",
    summary:
      "El registre \"obert\" es ven a comerciants i llocs de cerca de persones. Fes opt-out al teu ajuntament local — continues al registre complet per votar i per a verificacions de crèdit.",
    urlLabel: "Com fer l'opt-out",
  },
  'optout-ie-edited-register': {
    title: "Passa al registre electoral editat d'Irlanda",
    summary:
      "El registre complet d'Irlanda es pot usar per a fins no electorals; el registre editat no es ven per a màrqueting. Tria el registre editat quan et registris o actualitzis les teves dades.",
    urlLabel: "Comprova el registre",
  },
  'es-asnef': {
    title: "Comprova el teu fitxer de crèdit ASNEF (Equifax Iberia)",
    summary:
      "ASNEF (gestionat per Equifax) és el principal fitxer de morositat/crèdit d'Espanya — els comptes impagats oberts fraudulentament en el teu nom apareixen aquí. Espanya no té un bloqueig preventiu, de manera que llegir el fitxer és com es detecta el frau.",
    steps: [
      "Al lloc d'Equifax, busca el \"dret d'accés\" i envia una sol·licitud amb una còpia del teu DNI.",
      "Han de respondre en un mes, gratuïtament.",
      "Comprova si hi ha algun compte o deute que no reconeixis — aquí és on apareix el senyal de frau.",
      "Repeteix-ho aproximadament un cop a l'any i després de qualsevol notificació de filtració.",
    ],
    urlLabel: "Equifax — consumidors",
  },
  'es-cirbe': {
    title: "Sol·licita el teu informe CIRBE (Banco de España)",
    summary:
      "CIRBE és el registre central de crèdit del Banco de España — llista tots els préstecs i crèdits registrats al teu nom. La manera més fiable de detectar crèdits oberts en el teu nom.",
    steps: [
      "Ves a la Sede Electrónica del Banco de España → CIRBE → sol·licita el teu informe.",
      "Identifica't amb certificat digital o Cl@ve (o sol·licita per correu / en persona amb el teu DNI).",
      "Gratuït i normalment instantani en línia.",
      "Comprova si hi ha algun préstec que no hagis obert.",
    ],
    urlLabel: "Banco de España (seu)",
  },
  'uk-cifas-pr': {
    title: "Afegeix el Registre de Protecció Cifas (UK)",
    summary:
      "L'equivalent al bloqueig de crèdit al Regne Unit: una marca al teu fitxer que indica als prestadors que facin verificacions d'identitat addicionals abans d'obrir crèdit al teu nom. De pagament (~30 GBP per dos anys), val la pena si tens un risc elevat.",
    steps: [
      "Sol·licita el Registre de Protecció al lloc web de Cifas.",
      "Els prestadors veuran la marca i hauran de fer passos addicionals per verificar que ets tu.",
      "Espera que les teves pròpies sol·licituds de crèdit siguin més lentes mentre estigui actiu — és el seu objectiu.",
    ],
    urlLabel: "Cifas",
  },
  pihole: {
    title: "Bloqueja rastreadors a tota la xarxa amb Pi-hole",
    summary:
      "Un Pi-hole absorbeix els dominis de rastreadors i anuncis per a cada dispositiu de la xarxa — telèfons, televisors i tot — a la capa DNS, abans que es connectin. Una caixa, cobertura per a tota la llar.",
    steps: [
      "Instal·la Pi-hole en una Raspberry Pi o qualsevol caixa Linux sempre encesa.",
      "Apunta el DNS del teu router cap a ell perquè tots els dispositius queden coberts automàticament.",
      "Afegeix llistes de bloqueig; revisa el registre de consultes per veure a quins servidors es connectaven els teus dispositius.",
    ],
    urlLabel: "Pi-hole",
  },
  'code-word': {
    title: "Estableix una paraula clau familiar contra les estafes de clonació de veu",
    summary:
      "La IA pot clonar una veu a partir de pocs segons d'àudio i simular una trucada de pànic del tipus \"sóc jo, envia'm diners\". Una paraula clau familiar compartida que només tu coneixes la derrota immediatament — barat i un dels passos de màxim impacte.",
    steps: [
      "Acorda una paraula o frase amb la família propera que un desconegut no pugui endevinar.",
      "Regla: qualsevol sol·licitud urgent de diners/secret per trucada o missatge ha d'incloure-la, o es tracta com a falsa.",
      "Mai no guardis ni enviïs la paraula digitalment on pugui filtrar-se.",
    ],
    internalLabel: "🔑 Estableix la teva paraula clau",
  },
  'dont-pay-removers': {
    title: "No paguis un servei d'eliminació de brokers",
    summary:
      "Els serveis de pagament (DeleteMe, Incogni...) netegen només una petita fracció de brokers, inflen els seus comptadors de \"registres eliminats\" i cobren per sempre — i moltes ressenyes brillants estan patrocinades. Els opt-outs pels quals cobren són els gratuïts d'aquesta app.",
    steps: [
      "Fes tu mateix els opt-outs gratuïts de brokers al nivell de Brokers — els mateixos brokers, sense subscripció.",
      "Les dades de les agències de crèdit i les dades inferides/de màrqueting gairebé no es poden eliminar amb aquests serveis.",
      "Si values la comoditat, endavant — però sàpigues el que estàs comprant realment.",
    ],
  },
  'poison-profile': {
    title: "Enverina, no esborris — dilueix el teu perfil",
    summary:
      "Els brokers i plataformes et tornen a publicar i reconstruir, de manera que l'eliminació és un malson sense fi. Afegir soroll plausible als teus propis comptes de baix risc degrada la confiança de qualsevol en quines dades corresponen al tu real. El Kit de Camuflatge genera el soroll.",
    steps: [
      "Usa únicament comptes que siguin teus; busca que sigui anodí i genèric, no una persona falsa convincent.",
      "Mai et facis passar per ningú, escriguis ressenyes falses ni registris altres persones.",
      "Obre el Kit de Camuflatge per a variants de nom i bios de farciment per enganxar.",
    ],
    internalLabel: "⬡ Obre el Kit de Camuflatge",
  },
  'vary-writing-style': {
    title: "Varia l'estil d'escriptura entre identitats",
    summary:
      "L'estilometria pot vincular els teus comptes per com escrius — frases preferides, puntuació, ús d'emojis — fins i tot sense nom o IP compartits. Si mantens identitats separades, escriu-les de manera diferent.",
    steps: [
      "Tria hàbits deliberadament diferents per identitat: longitud de les frases, puntuació, majúscules, ús d'emojis.",
      "Evita frases marca i acudits interns que recorrin entre comptes.",
      "Per a casos d'alt risc, redacta i reescriu amb una veu diferent abans de publicar.",
    ],
  },
  'behavioral-fingerprint': {
    title: "Coneix la teva empremta de comportament",
    summary:
      "Més enllà de les galetes, els llocs perfilen com te comportes — ritme de tecleig, velocitat de desplaçament, fins i tot el pas a través de l'acceleròmetre del telèfon. No pots esborrar-ho del tot, però els navegadors anti-empremta i els perfils separats ho mitiguen.",
    steps: [
      "Usa un navegador que resisteixi les empremtes digitals (Tor Browser, o Brave amb protecció d'empremta activada).",
      "Mantén perfils/dispositius de navegador separats per a identitats separades perquè el comportament no es pugui creuar.",
      "Desactiva l'accés a sensors de moviment en els llocs que no els necessitin.",
    ],
  },
}
