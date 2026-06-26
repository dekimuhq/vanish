import type { ContentOverlay } from './types'

export const it: ContentOverlay = {
  'google-yourself': {
    title: "Cerca il tuo nome su Google",
    summary:
      "Cerca il tuo nome (+ città, + telefono) in una finestra privata e cattura gli screenshot dei primi risultati. Questa è la tua situazione di partenza — puoi misurare le rimozioni solo rispetto a ciò che vedi ora.",
    steps: [
      "Apri una finestra privata/incognito per non essere influenzato dai risultati personalizzati.",
      "Cerca: il tuo nome, poi \"nome + città\", poi il tuo numero di telefono, poi la tua email.",
      "Cattura gli screenshot delle prime due pagine per ogni ricerca. Annota ogni sito che espone indirizzo, telefono, parenti o foto.",
      "Quei siti diventano la tua lista obiettivo nel livello Data Broker.",
    ],
    urlLabel: "Cerca su Google",
  },
  'hibp': {
    title: "Controlla Have I Been Pwned",
    summary:
      "Inserisci la tua email per vedere in quali violazioni è stata esposta e quali password devi cambiare. Il database di violazioni gratuito e canonico.",
    urlLabel: "Controlla HIBP",
  },
  'mozilla-monitor': {
    title: "Configura Mozilla Monitor",
    summary: "Avvisi gratuiti e continui per violazioni su fino a 20 indirizzi email, usando il dataset HIBP.",
    urlLabel: "Apri Monitor",
  },
  'password-manager': {
    title: "Installa un gestore di password",
    summary:
      "Adotta Bitwarden o KeePass. È il fondamento per avere password uniche e per trovare tutti gli account che hai mai creato.",
    urlLabel: "Ottieni Bitwarden",
  },
  'change-breached-passwords': {
    title: "Cambia le password riusate e compromesse",
    summary:
      "Per ogni account segnalato da Have I Been Pwned — e ovunque hai riusato una password — imposta una nuova password unica generata dal tuo gestore.",
    steps: [
      "Inizia dalle \"chiavi del regno\": email, poi banca, poi il gestore di password.",
      "Non riusare mai una password su due siti diversi. Lascia che il gestore le generi.",
      "Se un account era in una violazione, considera la vecchia password come pubblica.",
    ],
  },
  'delete-dormant-accounts': {
    title: "Elimina gli account dormienti",
    summary:
      "Ogni vecchio account è una superficie di attacco e una fonte per i data broker. Usa una directory in stile JustDeleteMe con link diretti per l'eliminazione, ordinati per difficoltà.",
    steps: [
      "Il tuo gestore di password e le vecchie ricerche nella posta in arrivo (\"benvenuto\", \"verifica il tuo account\") rivelano account dimenticati.",
      "Usa la valutazione di difficoltà: verde = un clic, rosso = devi scrivere all'assistenza.",
      "Elimina, non disattivare — gli account disattivati conservano ancora i tuoi dati.",
    ],
    urlLabel: "Apri JustDeleteMe",
  },
  'optout-truepeoplesearch': {
    title: "Opt-out da TruePeopleSearch",
    summary: "Invia la rimozione — senza email né documento, quasi istantanea. Uno dei risultati visibili più rapidi.",
    urlLabel: "Rimuovimi",
  },
  'optout-fastpeoplesearch': {
    title: "Opt-out da FastPeopleSearch",
    summary: "Rimozione rapida tramite modulo, senza documento.",
    urlLabel: "Rimuovimi",
  },
  'optout-usphonebook': {
    title: "Opt-out da USPhoneBook",
    summary: "Rimozione rapida, senza documento.",
    urlLabel: "Rimuovimi",
  },
  'google-results-about-you': {
    title: "\"Risultati su di te\" di Google",
    summary:
      "Usa lo strumento di Google per richiedere la rimozione dalle pagine dei risultati di ricerca che espongono il tuo telefono, indirizzo di casa o email.",
    urlLabel: "Apri lo strumento",
  },
  'google-ad-personalization': {
    title: "Disattiva la personalizzazione degli annunci Google",
    summary: "Disabilita gli annunci personalizzati collegati al tuo profilo account Google.",
    urlLabel: "Impostazioni annunci",
  },
  'reset-advertising-id': {
    title: "Reimposta l'ID pubblicitario del tuo telefono",
    summary: "Interrompi l'identificatore persistente che l'ad-tech usa per seguirti tra le app.",
    steps: [
      "iOS: Impostazioni → Privacy e sicurezza → Tracciamento → disattiva \"Consenti alle app di richiedere il tracciamento\".",
      "iOS: Impostazioni → Privacy e sicurezza → Apple Advertising → disattiva Annunci personalizzati.",
      "Android: Impostazioni → Privacy → Annunci → Elimina l'ID pubblicitario (o reimpostalo).",
    ],
  },
  'prune-social-profiles': {
    title: "Riduci i profili social pubblici",
    summary:
      "Imposta i vecchi post e profili su privato; rimuovi data di nascita, telefono, indirizzo e città natale da tutto ciò che è pubblico.",
    steps: [
      "Facebook: Impostazioni → Privacy → \"Limita i post precedenti\"; rivedi la sezione Info campo per campo.",
      "Instagram/X: passa al privato se puoi; rimuovi posizione, contatti e data di nascita dalla bio.",
      "LinkedIn: nascondi i contatti e le informazioni di contatto alle persone non collegate.",
    ],
  },
  'bulk-delete-posts': {
    title: "Elimina in blocco i vecchi post",
    summary: "Cancella i post storici con gli strumenti nativi di download ed eliminazione delle piattaforme.",
    steps: [
      "X: Impostazioni → \"Scarica un archivio\" prima, poi usa un approccio di eliminazione in blocco.",
      "Facebook: Registro attività → filtra per anno → elimina o archivia in blocco.",
      "Esporta sempre un archivio per te stesso prima di eliminare in massa.",
    ],
  },
  'unsubscribe-marketing': {
    title: "Cancellati dalle liste di marketing",
    summary:
      "Annulla l'iscrizione in massa alle newsletter. Riduce il flusso continuo di dati e limita i danni della prossima violazione.",
    steps: [
      "Cerca nella tua posta \"cancella iscrizione\" e procedi dall'alto verso il basso.",
      "Preferisci il link di disiscrizione nell'email invece di segnalarla come spam (rimozione più pulita).",
      "Per i mittenti che lo ignorano, considera una lettera GDPR/CCPA in seguito.",
    ],
  },
  'unlist-caller-id': {
    title: "Rimuovi il tuo numero dalle app identificatore chiamate",
    summary: "Cancella il tuo numero dai database crowdsourced come Truecaller e Hiya.",
    urlLabel: "Disiscrizione Truecaller",
  },
  'revoke-third-party-apps': {
    title: "Controlla e revoca l'accesso alle app di terze parti",
    summary:
      "Rivedi le app collegate ai tuoi account Google/Apple/Facebook/Microsoft e revoca quelle che non usi più.",
    urlLabel: "Connessioni Google",
  },
  'enable-2fa': {
    title: "Attiva l'autenticazione a due fattori sugli account critici",
    summary:
      "Attiva l'autenticazione a due fattori tramite app (non SMS) per email, banca e gestore di password. I codici SMS possono essere intercettati tramite SIM swap.",
    steps: [
      "Usa un'app authenticator (Aegis, Ente Auth, o il tuo gestore di password).",
      "Priorità: email → gestore di password → banca → social.",
      "Salva i codici di backup nel gestore di password, non su carta vicino alla scrivania.",
    ],
  },
  'wipe-old-devices': {
    title: "Cancella i dati prima di dismettere i dispositivi",
    summary: "Ripristina alle impostazioni di fabbrica e cifra telefoni, laptop e drive prima di venderli o riciclarli.",
    steps: [
      "Assicurati prima che la cifratura completa del disco sia attiva (rende la cancellazione praticamente irreversibile).",
      "Esci da tutti gli account (soprattutto dai blocchi Trova il mio dispositivo / account Google) prima di ripristinare.",
      "Poi ripristina. Per gli hard disk, una cancellazione a più passaggi; per gli SSD usa la cancellazione sicura integrata.",
    ],
  },
  'optout-smartbackgroundchecks': {
    title: "Opt-out da SmartBackgroundChecks",
    summary: "Rimozione rapida tramite modulo, senza documento — un altro sito di ricerca persone che appare nelle ricerche per nome.",
    urlLabel: "Rimuovimi",
  },
  'ad-industry-optout': {
    title: "Opt-out dagli annunci basati sugli interessi (DAA/NAI)",
    summary:
      "Usa gli strumenti di autoregolamentazione del settore pubblicitario per escludere questo browser dalla pubblicità comportamentale in un colpo solo. Basato sui cookie — rifallo dopo aver svuotato i cookie o su un nuovo browser.",
    urlLabel: "DAA WebChoices",
  },
  'optout-spokeo': {
    title: "Opt-out da Spokeo",
    summary: "Incolla l'URL del tuo profilo e conferma via email.",
    urlLabel: "Opt-out",
  },
  'optout-whitepages': {
    title: "Opt-out da Whitepages",
    summary: "Invia una richiesta di soppressione; spesso richiede una verifica telefonica. Appare in alto nelle ricerche per nome.",
    urlLabel: "Richiesta di soppressione",
  },
  'optout-peopleconnect': {
    title: "Opt-out dalla rete PeopleConnect",
    summary:
      "Una sola richiesta di soppressione copre Intelius, BeenVerified, Instant Checkmate, TruthFinder e USSearch. L'azione sui broker con la massima leva.",
    urlLabel: "Sopprimi tutti e 5",
  },
  'optout-radaris': {
    title: "Opt-out da Radaris",
    summary: "Rivendica e rimuovi il tuo profilo; richiede una conferma email.",
    urlLabel: "Controlla la privacy",
  },
  'optout-mylife': {
    title: "Opt-out da MyLife",
    summary: "Invia una richiesta CCPA. MyLife mantiene profili con \"punteggio di reputazione\" persistente ed è notoriamente difficile da rimuovere.",
    urlLabel: "Richiesta CCPA",
  },
  'optout-nuwber': {
    title: "Opt-out da Nuwber",
    summary: "Rimozione tramite link più conferma email.",
    urlLabel: "Rimuovimi",
  },
  'optout-thatsthem': {
    title: "Opt-out da That's Them",
    summary: "Rimozione tramite modulo senza complicazioni.",
    urlLabel: "Opt-out",
  },
  'optout-peoplefinders': {
    title: "Opt-out da PeopleFinders",
    summary: "Modulo più completamento via email.",
    urlLabel: "Opt-out",
  },
  'optout-familytreenow': {
    title: "Opt-out da FamilyTreeNow",
    summary: "Rimuove reti di indirizzi e parenti sorprendentemente dettagliate.",
    urlLabel: "Opt-out",
  },
  'optout-acxiom': {
    title: "Opt-out da Acxiom",
    summary: "Uno dei più grandi aggregatori di dati di marketing — tagliarlo riduce l'apporto a molti broker più piccoli.",
    urlLabel: "Opt-out",
  },
  'optout-oracle': {
    title: "Opt-out da Oracle Data Cloud",
    summary: "Invia l'opt-out al data cloud. Oracle sta chiudendo il suo business pubblicitario — verifica la procedura attuale.",
    urlLabel: "Privacy / opt-out",
  },
  'optout-epsilon': {
    title: "Opt-out da Epsilon",
    summary: "Opt-out dall'aggregatore di dati di marketing.",
    urlLabel: "Opt-out",
  },
  'optout-experian-marketing': {
    title: "Opt-out dal marketing di Experian",
    summary: "Opt-out di marketing, separato dal tuo file creditizio.",
    urlLabel: "Opt-out",
  },
  'private-browser': {
    title: "Passa a un browser orientato alla privacy",
    summary: "Adotta Firefox o Brave con la protezione dal tracciamento attiva per impostazione predefinita.",
    urlLabel: "Ottieni Firefox",
  },
  'tracker-blocker': {
    title: "Aggiungi un blocco contenuti/tracciatori",
    summary: "Installa uBlock Origin per bloccare annunci e tracciatori su tutto il web.",
    urlLabel: "Ottieni uBlock Origin",
  },
  'private-search': {
    title: "Cambia motore di ricerca predefinito",
    summary: "Passa a un motore di ricerca che non traccia, come DuckDuckGo, Startpage o Brave Search.",
    urlLabel: "Prova DuckDuckGo",
  },
  'email-aliases': {
    title: "Inizia a usare alias email",
    summary:
      "Usa un alias unico per ogni servizio così una futura violazione non può collegare i tuoi account — e puoi eliminare qualsiasi alias che inizia a ricevere spam.",
    urlLabel: "Ottieni SimpleLogin",
  },
  'optout-prescreen': {
    title: "Opt-out dalle offerte di credito prescreened (USA)",
    summary: "Blocca le offerte prescreened di credito e assicurazioni — sono vendite in blocco dei tuoi dati creditizi.",
    urlLabel: "Opt-out (5 anni / permanente)",
  },
  'freeze-credit': {
    title: "Blocca il tuo credito",
    summary: "Imposta un blocco di sicurezza presso tutti e tre gli uffici per prevenire frodi su nuovi conti. Gratuito negli USA.",
    steps: [
      "Blocca tutti e tre: Equifax, Experian e TransUnion (ciascuno separatamente).",
      "Un blocco impedisce l'apertura di nuovi crediti a tuo nome; lo \"sblocchi\" temporaneamente quando hai bisogno di credito.",
      "Non influisce sul tuo punteggio ed è gratuito per legge.",
    ],
    urlLabel: "Blocco Equifax",
  },
  'disable-location-history': {
    title: "Disattiva la cronologia della posizione del telefono",
    summary: "Disattiva Google Cronologia posizioni / Luoghi significativi di iOS e cancella la cronologia salvata.",
    urlLabel: "Controlli attività",
  },
  'schedule-broker-recheck': {
    title: "Pianifica un ricontrollo dei broker",
    summary:
      "I broker ti reinseriscono entro 3–6 mesi. Vanish traccia quando ogni opt-out deve essere rifatto — questo conferma che ti impegni nel ciclo.",
  },
  'broker-letter': {
    title: "Lettera: cancellami (senza modulo self-service)",
    summary:
      "Per broker e aziende senza opt-out self-service, genera una lettera di cancellazione GDPR/CCPA e inviatela tu stesso.",
  },
  'optout-checkpeople': {
    title: "Opt-out da CheckPeople",
    summary: "Rimozione tramite modulo per un altro aggregatore di ricerca persone.",
    urlLabel: "Opt-out",
  },
  'optout-dmachoice': {
    title: "Opt-out dalla posta diretta (DMAchoice)",
    summary:
      "Registrati al servizio di preferenza posta dell'associazione Data & Marketing per ridurre la posta indesiderata cartacea. Una piccola quota una tantum copre una registrazione pluriennale.",
    urlLabel: "DMAchoice",
  },
  'youronlinechoices': {
    title: "Opt-out dagli annunci basati sugli interessi (UE)",
    summary:
      "Usa lo strumento EDAA YourOnlineChoices per escludere questo browser dalla pubblicità comportamentale nelle reti partecipanti. Basato sui cookie — rifallo dopo aver svuotato i cookie.",
    urlLabel: "Your Online Choices",
  },
  'encrypted-dns-devices': {
    title: "Imposta DNS cifrato su ogni dispositivo",
    summary:
      "Configura il tuo telefono e laptop su un resolver cifrato e rispettoso della privacy così il tuo ISP non può registrare ogni sito che visiti.",
    steps: [
      "Scegli un resolver senza log: Quad9 (9.9.9.9) o NextDNS.",
      "iOS/macOS: installa il profilo di configurazione del provider, o imposta DNS-over-HTTPS nelle Impostazioni.",
      "Android 9+: Impostazioni → Rete → DNS privato → inserisci il nome host del provider.",
      "Questo integra il DNS a livello di router — i dispositivi lo mantengono anche quando sei fuori dalla rete di casa.",
    ],
    urlLabel: "Quad9",
  },
  'harden-messaging-privacy': {
    title: "Rafforza le impostazioni di privacy nelle app di messaggistica",
    summary: "Attiva i controlli di privacy già integrati nelle app che usi — prima di migrare su qualsiasi altra.",
    steps: [
      "Attiva i messaggi a scomparsa per impostazione predefinita dove supportato (Signal, WhatsApp, Telegram).",
      "Nascondi \"Ultimo accesso\", conferme di lettura e foto del profilo ai non-contatti.",
      "Blocca l'app con PIN/biometria e disattiva le anteprime dei messaggi nella schermata di blocco.",
      "Rivedi le impostazioni degli inviti ai gruppi così gli sconosciuti non possono aggiungerti.",
    ],
  },
  'remove-outdated-google': {
    title: "Rimuovi le pagine obsolete da Google",
    summary:
      "Quando una pagina che ti riguarda è stata modificata o eliminata ma mostra ancora vecchi contenuti nella cache di Search, chiedi a Google di aggiornarla o rimuoverla.",
    urlLabel: "Rimuovi contenuti obsoleti",
  },
  'optout-es-listarobinson': {
    title: "Iscriviti alla Lista Robinson",
    summary:
      "La lista ufficiale spagnola di esclusione dalla pubblicità (gestita da Adigital). Una volta registrato, le aziende aderenti non possono chiamarti, mandarti SMS, posta o email commerciale.",
    urlLabel: "Lista Robinson",
  },
  'optout-it-rpo': {
    title: "Iscriviti al Registro Pubblico delle Opposizioni",
    summary:
      "Il registro pubblico delle opposizioni italiano. Iscrivi il tuo numero di telefono (e indirizzo postale) per bloccare gli operatori che devono consultarlo prima di contattarti per scopi commerciali.",
    urlLabel: "Registro Opposizioni",
  },
  'optout-fr-bloctel': {
    title: "Iscriviti a Bloctel",
    summary:
      "Il registro ufficiale francese anti-telemarketing. I numeri iscritti non possono essere usati legalmente per il marketing telefonico da aziende con cui non hai un contratto in corso.",
    urlLabel: "Bloctel",
  },
  'optout-de-robinsonliste': {
    title: "Iscriviti alla Robinsonliste",
    summary:
      "La lista centrale tedesca di opt-out pubblicitario (gestita dal DDV). Riduce la posta commerciale indirizzata, le chiamate e le email dalle aziende aderenti.",
    urlLabel: "Robinsonliste (DDV)",
  },
  'optout-be-donotcallme': {
    title: "Iscriviti alla lista Do Not Call Me",
    summary:
      "La lista ufficiale belga di non chiamare. Una volta iscritto, il tuo numero non può essere usato per il marketing telefonico. La registrazione avviene per telefono.",
    urlLabel: "Do Not Call Me",
  },
  'optout-pt-amd': {
    title: "Iscriviti alla Lista de Oposição (AMD)",
    summary:
      "La lista di opposizione dei consumatori portoghese. Iscriviti per bloccare chiamate e posta di marketing diretto dalle aziende vincolate al registro.",
    urlLabel: "Lista de Oposição",
  },
  'optout-se-hitta': {
    title: "Rimuovi la tua pagina contatti da Hitta.se",
    summary:
      "Il principio di pubblicità dei registri pubblici svedesi rende il tuo indirizzo facile da trovare. Nascondi la tua pagina contatti su Hitta.se — la rimozione avviene con BankID.",
    urlLabel: "Rimuovimi",
  },
  'optout-se-ratsit': {
    title: "Rimuovi la tua voce da Ratsit",
    summary: "Ratsit ripubblica i registri pubblici svedesi — indirizzo, età, finanze. Rimuovi la tua voce pubblica gratuita con BankID.",
    urlLabel: "Ta bort",
  },
  'optout-se-mrkoll': {
    title: "Nascondi i tuoi dati su MrKoll",
    summary: "MrKoll ripubblica i registri pubblici svedesi. Nascondi il tuo indirizzo e numero di telefono — richiede BankID.",
    urlLabel: "Ändra uppgifter",
  },
  'optout-de-dastelefonbuch': {
    title: "Rimuovi la tua voce da DasTelefonbuch / DasÖrtliche",
    summary: "Rimuovi o limita la tua voce nelle principali rubriche telefoniche pubbliche tedesche (DasTelefonbuch, DasÖrtliche).",
    urlLabel: "Gestisci la voce",
  },
  'optout-at-ecg': {
    title: "Aggiungiti alla ECG-Liste",
    summary:
      "La lista di esclusione dal marketing elettronico austriaca (gestita da RTR). Registrando il tuo indirizzo ti opt-out da email e SMS commerciali non richiesti.",
    urlLabel: "ECG-Liste",
  },
  'optout-dk-robinson': {
    title: "Iscriviti alla Robinsonlisten",
    summary:
      "La lista ufficiale danese di protezione dalla pubblicità, gestita tramite il registro centrale delle persone (CPR). Blocca la posta pubblicitaria indirizzata e le chiamate commerciali.",
    urlLabel: "Robinsonlisten",
  },
  'optout-fi-kieltopalvelu': {
    title: "Registra il divieto di marketing (ASML)",
    summary:
      "L'opt-out Robinson finlandese, gestito dall'associazione di marketing ASML. Iscriviti per bloccare telefonate e marketing diretto indirizzato.",
    urlLabel: "Kieltopalvelut",
  },
  'optout-hr-nezovi': {
    title: "Registrati a NE ZOVI",
    summary:
      "Il registro ufficiale croato di non chiamare (gestito dal regolatore HAKOM). Gratuito — ti registri tramite il tuo operatore telefonico per bloccare le chiamate commerciali.",
    urlLabel: "NE ZOVI",
  },
  'private-email-provider': {
    title: "Migra a un provider email privato",
    summary: "Sposta la tua casella di posta principale su Proton o Tuta e inizia a trasferire i tuoi account.",
    urlLabel: "Proton Mail",
  },
  'signal': {
    title: "Passa a Signal per le comunicazioni",
    summary: "Fai di Signal il tuo messenger predefinito e riduci l'uso di SMS/WhatsApp per tutto ciò che è sensibile.",
    urlLabel: "Ottieni Signal",
  },
  'hardware-keys': {
    title: "Aggiungi chiavi di sicurezza hardware",
    summary: "Registra chiavi FIDO2 (es. YubiKey) su email, banca, gestore di password e account cloud.",
    steps: [
      "Acquista due chiavi — una principale, una di backup conservata in un posto sicuro.",
      "Registra entrambe su ogni account critico prima di rimuovere i metodi 2FA più deboli.",
      "Le chiavi hardware sono a prova di phishing; sono il secondo fattore più robusto disponibile.",
    ],
  },
  'full-broker-sweep': {
    title: "Scansione completa dei broker",
    summary: "Lavora la lista completa dei broker dall'inizio alla fine, registrando ogni data di opt-out così i timer di ricontrollo sono precisi.",
  },
  'e2ee-storage': {
    title: "Passa all'archiviazione cloud con cifratura end-to-end",
    summary: "Sostituisci Drive/Dropbox con archiviazione cifrata end-to-end così il provider non può leggere i tuoi file.",
    urlLabel: "Proton Drive",
  },
  'degoogle-services': {
    title: "De-Google i servizi principali",
    summary: "Sostituisci Maps, Documenti e Foto con alternative rispettose della privacy.",
    steps: [
      "Maps → Organic Maps / OsmAnd. Documenti → CryptPad / OnlyOffice. Foto → Ente / Immich.",
      "Migra un servizio alla volta così non perdi l'accesso a nulla di importante.",
      "Esporta i tuoi dati da Google Takeout prima di eliminare qualsiasi cosa.",
    ],
    urlLabel: "Alternative (Privacy Guides)",
  },
  'masked-phone': {
    title: "Usa un numero di telefono mascherato/VoIP",
    summary: "Fornisci un numero secondario per le iscrizioni e mantieni privato il tuo numero reale.",
    steps: [
      "Opzioni: Google Voice (USA), MySudo, o una seconda SIM/eSIM economica.",
      "Usa il numero mascherato per tessere fedeltà, iscrizioni e tutto il non essenziale.",
      "Riserva il tuo numero reale solo a contatti fidati e fallback 2FA.",
    ],
  },
  'masked-cards': {
    title: "Usa carte di pagamento virtuali/mascherate",
    summary: "I numeri di carta monouso o per singolo commerciante spezzano il collegamento di dati di pagamento acquistati dai broker.",
    steps: [
      "Opzioni: Privacy.com (USA), carte monouso Revolut, o le carte virtuali della tua banca.",
      "Crea una carta unica per ogni commerciante; cancella quelle che perdono dati o addebitano cifre errate.",
    ],
  },
  'strip-exif': {
    title: "Rimuovi i metadati dalle foto prima di pubblicarle",
    summary: "Rimuovi i dati EXIF/GPS dalle immagini che condividi pubblicamente così le foto non rivelano dove vivi o ti trovi.",
    steps: [
      "Molte piattaforme rimuovono l'EXIF al caricamento — ma non tutte, e non nelle condivisioni del file originale.",
      "iOS: menù di condivisione → Opzioni → disattiva Posizione. Android: usa un'app per la rimozione dei metadati.",
      "Desktop: ExifTool, o \"Rimuovi proprietà\" nelle proprietà del file di Windows.",
    ],
  },
  'harden-router-dns': {
    title: "Rafforza il router di casa e il DNS",
    summary: "Cambia la password admin predefinita, attiva il DNS cifrato e disabilita UPnP/WPS.",
    steps: [
      "Cambia subito la password admin del router da quella predefinita.",
      "Imposta il DNS cifrato (DoH/DoT) — es. Quad9 (9.9.9.9) o NextDNS — per impedire al tuo ISP di registrare ogni ricerca.",
      "Disabilita UPnP e WPS; tieni il firmware aggiornato.",
    ],
  },
  'segment-iot': {
    title: "Segmenta i dispositivi IoT sulla rete",
    summary: "Metti i dispositivi smart home su una rete ospite o VLAN per limitare cosa possono vedere e raggiungere.",
  },
  'anti-fingerprint': {
    title: "Blocca il browser fingerprinting",
    summary: "Usa le impostazioni anti-fingerprint così i tracciatori non possono identificare il tuo browser senza cookie.",
    steps: [
      "Firefox: imposta privacy.resistFingerprinting, o usa Mullvad Browser / Tor Browser per le sessioni sensibili.",
      "Evita di accumulare estensioni esotiche — ognuna ti rende più unico, non meno.",
    ],
    urlLabel: "Testa il tuo fingerprint",
  },
  'retire-old-email': {
    title: "Dismetti ed elimina il vecchio account email",
    summary: "Dopo la migrazione, aggiorna i servizi rimanenti, poi elimina la vecchia casella così non può essere violata o analizzata.",
    steps: [
      "Reindirizza la vecchia casella verso quella nuova per un periodo di grazia (3–6 mesi).",
      "Ogni volta che arriva qualcosa al vecchio indirizzo, aggiorna quel servizio con quello nuovo.",
      "Quando il traffico si esaurisce, esporta, poi elimina il vecchio account.",
    ],
  },
  'gdpr-access-letter': {
    title: "Invia richieste di accesso GDPR (SAR)",
    summary: "Obbliga i grandi detentori di dati a rivelare esattamente cosa hanno su di te — una ricognizione prima della cancellazione.",
  },
  'optout-lexisnexis': {
    title: "Opt-out da LexisNexis",
    summary: "Aggregatore FCRA di alto valore che alimenta i controlli dei precedenti; potrebbe richiedere un documento.",
    urlLabel: "Opt-out",
  },
  'broker-registry': {
    title: "Opt-out tramite i registri dei data broker",
    summary: "Usa i registri statali dei broker (California, Vermont) per trovare e fare opt-out dai broker che hai mancato.",
    urlLabel: "Registro broker CA",
  },
  'maps-contributions': {
    title: "Rimuovi l'indirizzo dai contributi a Maps",
    summary: "Elimina recensioni, foto ed etichette che rivelano silenziosamente la tua casa o il tuo luogo di lavoro.",
    urlLabel: "Attività Maps",
  },
  'cross-app-tracking-off': {
    title: "Disattiva il tracciamento cross-app ovunque",
    summary: "App Tracking Transparency iOS disattivata, ID pubblicitario Android disabilitato, posizione per app impostata su \"mai/chiedi\".",
  },
  'optout-eu-brokers': {
    title: "Opt-out dai broker europei",
    summary: "Residenti UE/UK: invia opt-out più lettere GDPR Art.17 ai broker operanti in Europa (Acxiom, Criteo, Experian UK).",
    urlLabel: "Acxiom (globale)",
  },
  'optout-criteo': {
    title: "Opt-out da Criteo",
    summary: "Escludi il tuo profilo dal retargeting pubblicitario di Criteo — una delle più grandi reti pubblicitarie comportamentali in Europa.",
    urlLabel: "Privacy / opt-out",
  },
  'optout-192': {
    title: "Opt-out da 192.com",
    summary:
      "Rimuovi la tua voce dal principale sito di ricerca persone del Regno Unito. Gran parte dei suoi dati proviene dal registro elettorale aperto — fai l'opt-out anche presso il tuo comune.",
    urlLabel: "Rimuovi i miei dati",
  },
  'optout-experian-uk': {
    title: "Opt-out dal marketing di Experian UK",
    summary: "Usa il portale dati di Experian UK per controllare l'uso dei tuoi dati per il marketing, separato dal tuo file creditizio.",
    urlLabel: "Portale dati",
  },
  'google-rtbf-delisting': {
    title: "Richiedi la de-indicizzazione UE/UK su Google (diritto all'oblio)",
    summary:
      "I residenti UE/UK possono chiedere a Google di de-indicizzare URL specifici su di loro dai risultati di ricerca per nome. Rimuove il link dalla Ricerca, non la pagina originale.",
    urlLabel: "Modulo richiesta RTBF",
  },
  'disable-os-telemetry': {
    title: "Riduci la telemetria del sistema operativo su Windows e macOS",
    summary: "Abbassa i dati diagnostici e pubblicitari che il tuo SO desktop invia di default.",
    steps: [
      "Windows: Impostazioni → Privacy e sicurezza → Diagnostica e feedback → imposta su Solo obbligatoria; disattiva l'ID pubblicitario e le esperienze personalizzate.",
      "macOS: Impostazioni → Privacy e sicurezza → Analisi e miglioramenti → disattiva Condividi analisi; Apple Advertising → disattiva Annunci personalizzati.",
      "Rivedi i permessi per app di fotocamera, microfono e posizione mentre ci sei.",
    ],
  },
  'private-mailing-address': {
    title: "Stabilisci un indirizzo postale privato",
    summary:
      "Usa un indirizzo di domiciliazione/inoltro e smetti di fornire il tuo indirizzo di casa per consegne e iscrizioni. Spezza il collegamento pubblico nome↔domicilio.",
    steps: [
      "Opzioni: un'agenzia commerciale di ricezione posta (CMRA), una casella postale virtuale, o un PO box.",
      "Aggiorna il tuo indirizzo sugli account gradualmente, partendo da quelli più esposti.",
      "Non inserire mai più il tuo vero indirizzo di casa in un modulo di iscrizione.",
    ],
  },
  'optout-electoral-register': {
    title: "Fai opt-out dal registro elettorale/votanti aperto",
    summary:
      "Rimuoviti dal registro elettorale venduto pubblicamente (registro aperto UK) o dalla vendita dei dati degli elettori (USA, per stato).",
    steps: [
      "UK: contatta il tuo comune locale per fare opt-out dal registro elettorale \"aperto\" (rimani nel registro completo per votare).",
      "USA: le regole sui registri elettorali variano per stato; alcuni consentono lo status confidenziale/riservato, specialmente per le vittime.",
    ],
  },
  'suppress-public-records': {
    title: "Sopprimi l'indirizzo di casa nei registri pubblici",
    summary:
      "Usa programmi di riservatezza degli indirizzi o la redazione dei registri catastali dove sei idoneo (particolarmente utile per le vittime di abusi).",
    steps: [
      "USA: la maggior parte degli stati gestisce un programma di riservatezza degli indirizzi (ACP) per le vittime di stalking/abusi.",
      "Registri catastali: alcune contee consentono la redazione per le persone a rischio — chiedi all'ufficio del registro.",
      "Questo varia per giurisdizione; un'organizzazione locale di assistenza alle vittime può aiutarti a presentare la domanda.",
    ],
  },
  'compartmentalize-identities': {
    title: "Compartimentalizza le identità",
    summary: "Separa email, telefono e carta per contesto di vita (lavoro / personale / acquisti / finanza) così nessuna singola fuga mappa l'intera tua vita.",
  },
  'degoogled-phone': {
    title: "Passa a un telefono de-Googled (GrapheneOS)",
    summary: "Usa quotidianamente un sistema operativo rinforzato senza servizi Google integrati.",
    urlLabel: "GrapheneOS",
  },
  'always-vpn-tor': {
    title: "VPN sempre attiva / Tor per usi sensibili",
    summary: "Instrada la navigazione sensibile attraverso una VPN senza log affidabile (es. Mullvad) o Tor.",
    urlLabel: "Mullvad VPN",
  },
  'burner-devices': {
    title: "Dispositivi usa e getta/secondari per i viaggi",
    summary: "Porta con te dispositivi con dati minimi ai confini e nei contesti ad alto rischio.",
  },
  'trust-llc-home': {
    title: "Usa un trust/LLC per casa e beni",
    summary:
      "Spezza il collegamento pubblico nome↔indirizzo nei registri catastali detenendo i beni in un trust o LLC. Consulta un professionista — non è consulenza legale.",
  },
  'quarterly-reremoval': {
    title: "Campagna di rimozione trimestrale",
    summary: "Ripeti la scansione completa dei broker ogni trimestre e registra le date. La rimozione è un'abitudine, non un'azione unica.",
  },
  'threat-model-review': {
    title: "Revisione del modello di minaccia ogni trimestre",
    summary:
      "Rivaluta da chi ti stai proteggendo e adeguati. Usa il framework EFF Surveillance Self-Defense.",
    urlLabel: "Piano EFF SSD",
  },
  'remove-osint-aggregators': {
    title: "Rimuoviti dai siti di ricerca violazioni/OSINT",
    summary: "Richiedi la rimozione dai siti di ricerca leak e aggregazione OSINT dove possibile.",
  },
  'scrub-org-sites': {
    title: "Elimina te stesso dai siti di ex datori di lavoro e organizzazioni",
    summary: "Richiedi la rimozione di biografie, pagine del personale e comunicati stampa che espongono i tuoi dati. Usa una lettera se vieni ignorato.",
  },
  'optout-court-arrest-records': {
    title: "Sopprimi gli aggregatori di registri giudiziari e arresti",
    summary:
      "I siti che ripubblicano foto segnaletiche, registri di arresti e atti giudiziari sono un'esposizione ad alto danno anche quando le accuse sono state ritirate. Richiedi la rimozione su ciascuno; alcuni richiedono un documento o la disposizione del tribunale.",
    steps: [
      "Elenca i siti che mostrano i tuoi registri (dalla tua ricerca di base al Livello 1).",
      "Usa la pagina di rimozione di ciascun sito; per i siti di foto segnaletiche, non pagare mai una \"tassa di rimozione\" — finanzia il racket. Cita le leggi statali anti-foto segnaletica dove esistono.",
      "Per i portali ufficiali dei tribunali, chiedi al cancelliere informazioni sulla sigillatura/cancellazione — l'unica soluzione definitiva.",
      "Dove un sito ti ignora, escalation con una lettera di cancellazione GDPR/CCPA.",
    ],
  },
  'optout-gb-open-register': {
    title: "Opt-out dal registro elettorale aperto (UK)",
    summary:
      "Il registro \"aperto\" viene venduto a operatori di marketing e siti di ricerca persone. Fai opt-out tramite il tuo comune — rimani nel registro completo per votare e i controlli del credito.",
    urlLabel: "Come fare opt-out",
  },
  'optout-ie-edited-register': {
    title: "Passa al registro elettorale modificato irlandese",
    summary:
      "Il registro completo irlandese può essere usato per scopi non elettorali; il registro modificato non viene venduto per il marketing. Scegli il registro modificato quando ti registri o aggiorni i tuoi dati.",
    urlLabel: "Controlla il registro",
  },
  'es-asnef': {
    title: "Controlla il tuo file ASNEF (Equifax Iberia)",
    summary:
      "ASNEF (gestito da Equifax) è il principale file di insolvenza/credito spagnolo — i conti fraudolenti non pagati aperti a tuo nome finiscono qui. La Spagna non ha un \"blocco\" preventivo, quindi leggere il file è il modo per rilevare le frodi.",
    steps: [
      "Sul sito di Equifax, trova \"derecho de acceso\" (diritto di accesso) e invia una richiesta con una copia del tuo DNI.",
      "Devono rispondere entro un mese, gratuitamente.",
      "Verifica se ci sono conti o debiti che non riconosci — è il segnale di frode.",
      "Ripeti circa una volta all'anno e dopo qualsiasi notifica di violazione.",
    ],
    urlLabel: "Equifax — consumidores",
  },
  'es-cirbe': {
    title: "Richiedi il tuo rapporto CIRBE (Banco de España)",
    summary:
      "CIRBE è il registro centrale del credito della Banca di Spagna — elenca ogni prestito/credito registrato sotto il tuo codice fiscale. Il modo più affidabile per rilevare crediti aperti a tuo nome.",
    steps: [
      "Vai alla Sede Elettronica della Banca di Spagna → CIRBE → richiedi il tuo rapporto.",
      "Identifica con certificato digitale o Cl@ve (o richiedi per posta / di persona con il tuo DNI).",
      "Gratuito e di solito istantaneo online.",
      "Verifica se ci sono prestiti che non hai aperto.",
    ],
    urlLabel: "Banco de España (sede)",
  },
  'uk-cifas-pr': {
    title: "Aggiungi la Cifas Protective Registration (UK)",
    summary:
      "L'equivalente più vicino al blocco del credito nel Regno Unito: un flag sul tuo file che dice ai creditori di fare controlli aggiuntivi prima di aprire credito a tuo nome. A pagamento (~30£ per due anni), vale la pena se sei a rischio elevato.",
    steps: [
      "Fai domanda sul sito Cifas per la Protective Registration.",
      "I creditori vedranno il flag e dovranno fare ulteriori verifiche per confermare che sei davvero tu.",
      "Aspettati che le tue richieste di credito siano più lente mentre è attivo — è lo scopo.",
    ],
    urlLabel: "Cifas",
  },
  'pihole': {
    title: "Blocca i tracciatori su tutta la rete con Pi-hole",
    summary:
      "Un Pi-hole blocca i domini di tracciatori e annunci per ogni dispositivo della tua rete — telefoni, TV, tutto — a livello DNS, prima che si connettano. Una sola macchina, copertura per tutta la casa.",
    steps: [
      "Installa Pi-hole su un Raspberry Pi o qualsiasi box Linux sempre acceso.",
      "Punta il DNS del router su di esso così ogni dispositivo è coperto automaticamente.",
      "Aggiungi blocklist; rivedi il log delle query per vedere a cosa si connettevano i tuoi dispositivi.",
    ],
    urlLabel: "Pi-hole",
  },
  'code-word': {
    title: "Imposta una \"parola in codice\" di famiglia contro le truffe con cloni vocali",
    summary:
      "L'IA può clonare una voce da pochi secondi di audio e simulare una chiamata disperata \"sono io, mandami i soldi\". Una parola in codice condivisa di famiglia che solo tu conosci la smonta all'istante — economica e tra le cose ad alto impatto che puoi fare.",
    steps: [
      "Concordate una parola o frase con i familiari stretti che uno sconosciuto non potrebbe indovinare.",
      "Regola: qualsiasi richiesta urgente di denaro/segreto per chiamata o messaggio deve includerla, altrimenti è falsa.",
      "Non conservare o inviare mai la parola digitalmente dove potrebbe trapelare.",
    ],
    internalLabel: '🔑 Imposta la tua parola in codice',
  },
  'dont-pay-removers': {
    title: "Non pagare un servizio di rimozione dai data broker",
    summary:
      "I servizi a pagamento (DeleteMe, Incogni…) coprono solo una piccola fetta di broker, gonfiamo i conteggi di \"voci rimosse\", e addebitano in eterno — e molte recensioni entusiastiche sono sponsorizzate. Gli opt-out per cui fanno pagare sono quelli gratuiti in questa app.",
    steps: [
      "Fai tu stesso gli opt-out gratuiti nel livello Broker — stessi broker, nessun abbonamento.",
      "I dati creditizi e di marketing dedotto non possono comunque essere eliminati da questi servizi.",
      "Se apprezzi la comodità, va bene — sappi solo cosa stai comprando.",
    ],
  },
  'poison-profile': {
    title: "Avvelena, non cancellare — dilui il tuo profilo",
    summary:
      "I broker e le piattaforme reinseriscono e ricostruiscono, quindi la cancellazione è un tapis roulant. Aggiungere rumore plausibile ai tuoi account a BASSA POSTA riduce la fiducia di chiunque su quale dato sei davvero tu. Il Kit Esca genera il rumore.",
    steps: [
      "Usa solo account che sono tuoi; punta al banale e generico, non a una persona falsa convincente.",
      "Non impersonare nessuno, non scrivere recensioni false e non iscrivere altre persone.",
      "Apri il Kit Esca per varianti del nome e bio di riempimento da incollare.",
    ],
    internalLabel: '⬡ Apri il Kit Esca',
  },
  'vary-writing-style': {
    title: "Varia il tuo stile di scrittura tra le identità",
    summary:
      "La stilometria può collegare i tuoi account da come scrivi — frasi preferite, punteggiatura, abitudini con le emoji — anche senza nome o IP condivisi. Se mantieni identità separate, scrivile in modo diverso.",
    steps: [
      "Scegli abitudini deliberatamente diverse per ogni identità: lunghezza delle frasi, punteggiatura, maiuscole, uso delle emoji.",
      "Evita frasi caratteristiche e battute ricorrenti tra gli account.",
      "Per situazioni ad alto rischio, scrivi una bozza, poi riscrivi con una voce diversa prima di pubblicare.",
    ],
  },
  'behavioral-fingerprint': {
    title: "Conosci il tuo fingerprint comportamentale",
    summary:
      "Oltre ai cookie, i siti profilano come ti comporti — ritmo di digitazione, velocità di scorrimento, perfino l'andatura rilevata dall'accelerometro del telefono. Non puoi eliminarlo del tutto, ma i browser anti-fingerprinting e i profili separati lo attenuano.",
    steps: [
      "Usa un browser che resiste al fingerprinting (Tor Browser, o Brave con la protezione dal fingerprinting attiva).",
      "Mantieni profili/dispositivi browser separati per identità separate così il comportamento non può essere collegato.",
      "Disabilita l'accesso a movimento/sensori per i siti che non ne hanno bisogno.",
    ],
  },
}
