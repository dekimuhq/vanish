import type { ContentOverlay } from './types'

export const es: ContentOverlay = {
  'google-yourself': {
    title: 'Busca tu nombre en Google',
    summary:
      'Busca tu nombre (+ ciudad, + teléfono) en una ventana privada y captura los primeros resultados. Esta es tu línea base — solo puedes medir las eliminaciones contra lo que puedes ver.',
    steps: [
      'Abre una ventana privada o de incógnito para que los resultados personalizados no te engañen.',
      'Busca: tu nombre, luego «nombre + ciudad», luego tu número de teléfono, luego tu correo.',
      'Captura las dos primeras páginas de cada búsqueda. Anota cada sitio que exponga dirección, teléfono, familiares o fotos.',
      'Esos sitios se convierten en tu lista de objetivos en el nivel de Brokers de datos.',
    ],
    urlLabel: 'Busca en Google',
  },
  'hibp': {
    title: 'Comprueba Have I Been Pwned',
    summary:
      'Introduce tu correo para ver en qué filtraciones apareció y qué contraseñas debes cambiar. La base de datos de filtraciones canónica y gratuita.',
    urlLabel: 'Comprobar en HIBP',
  },
  'mozilla-monitor': {
    title: 'Configura Mozilla Monitor',
    summary: 'Alertas gratuitas y continuas de filtraciones para hasta 20 direcciones de correo, usando el dataset de HIBP.',
    urlLabel: 'Abrir Monitor',
  },
  'password-manager': {
    title: 'Instala un gestor de contraseñas',
    summary:
      'Adopta Bitwarden o KeePass. Es la base para tener contraseñas únicas y para localizar todas las cuentas que has creado alguna vez.',
    urlLabel: 'Obtener Bitwarden',
  },
  'change-breached-passwords': {
    title: 'Cambia contraseñas reutilizadas y filtradas',
    summary:
      'Para cada cuenta señalada por Have I Been Pwned — y en cualquier sitio donde hayas reutilizado una contraseña — establece una nueva contraseña única generada por tu gestor.',
    steps: [
      'Empieza por las «llaves del reino»: correo, luego banca, luego el gestor de contraseñas.',
      'Nunca reutilices una contraseña en dos sitios. Deja que el gestor las genere.',
      'Si una cuenta estuvo en una filtración, asume que la contraseña antigua es pública.',
    ],
  },
  'delete-dormant-accounts': {
    title: 'Elimina cuentas inactivas',
    summary:
      'Cada cuenta antigua es una superficie de filtración y una fuente para los brokers de datos. Usa un directorio tipo JustDeleteMe con enlaces directos de eliminación ordenados por dificultad.',
    steps: [
      'Tu gestor de contraseñas + búsquedas en el buzón antiguo («bienvenido», «verifica tu cuenta») revelan cuentas olvidadas.',
      'Usa la valoración de dificultad: verde = un clic, rojo = hay que enviar un correo al soporte.',
      'Elimina, no solo desactives — las cuentas desactivadas siguen guardando tus datos.',
    ],
    urlLabel: 'Abrir JustDeleteMe',
  },
  'optout-truepeoplesearch': {
    title: 'Opt-out de TruePeopleSearch',
    summary: 'Solicita la eliminación — no requiere correo ni identificación, casi instantáneo. Una de las victorias visibles más rápidas.',
    urlLabel: 'Eliminarme',
  },
  'optout-fastpeoplesearch': {
    title: 'Opt-out de FastPeopleSearch',
    summary: 'Eliminación rápida por formulario, sin necesidad de identificación.',
    urlLabel: 'Eliminarme',
  },
  'optout-usphonebook': {
    title: 'Opt-out de USPhoneBook',
    summary: 'Eliminación rápida, sin identificación requerida.',
    urlLabel: 'Eliminarme',
  },
  'google-results-about-you': {
    title: 'Google «Resultados sobre ti»',
    summary:
      'Usa la propia herramienta de Google para solicitar la eliminación de páginas que exponen tu teléfono, dirección o correo en los resultados de búsqueda.',
    urlLabel: 'Abrir la herramienta',
  },
  'google-ad-personalization': {
    title: 'Desactiva la personalización de anuncios de Google',
    summary: 'Desactiva los anuncios personalizados vinculados al perfil de tu cuenta de Google.',
    urlLabel: 'Configuración de anuncios',
  },
  'reset-advertising-id': {
    title: 'Restablece el ID publicitario de tu móvil',
    summary: 'Elimina el identificador persistente que la tecnología publicitaria usa para seguirte por todas las apps.',
    steps: [
      'iOS: Ajustes → Privacidad y seguridad → Rastreo → desactiva «Permitir que las apps soliciten rastrear».',
      'iOS: Ajustes → Privacidad y seguridad → Publicidad de Apple → desactiva Anuncios personalizados.',
      'Android: Ajustes → Privacidad → Anuncios → Eliminar el ID de publicidad (o restablecerlo).',
    ],
  },
  'prune-social-profiles': {
    title: 'Poda tus perfiles en redes sociales',
    summary:
      'Pon publicaciones y perfiles antiguos en privado; elimina de todo lo público tu fecha de nacimiento, teléfono, dirección y ciudad de origen.',
    steps: [
      'Facebook: Ajustes → Privacidad → «Limitar publicaciones anteriores»; revisa la sección Información campo por campo.',
      'Instagram/X: cambia a privado si puedes; elimina la ubicación, el contacto y la fecha de nacimiento de la bio.',
      'LinkedIn: oculta tus conexiones e información de contacto a personas que no son contactos.',
    ],
  },
  'bulk-delete-posts': {
    title: 'Elimina publicaciones antiguas en masa',
    summary: 'Limpia el historial de publicaciones con las herramientas nativas de descarga y eliminación de cada plataforma.',
    steps: [
      'X: Ajustes → «Descargar un archivo» primero, luego usa un método de eliminación masiva.',
      'Facebook: Registro de actividad → filtra por año → elimina o archiva en masa.',
      'Exporta siempre un archivo para ti antes de borrar en masa.',
    ],
  },
  'unsubscribe-marketing': {
    title: 'Date de baja de listas de marketing',
    summary:
      'Date de baja masivamente de boletines. Reduce el rastro de datos en curso y achica el impacto de la próxima filtración.',
    steps: [
      'Busca «darse de baja» en tu buzón y trabaja de arriba abajo.',
      'Prefiere el enlace de baja dentro del correo a marcarlo como spam (eliminación más limpia).',
      'Para remitentes que lo ignoran, este es un candidato para una carta GDPR/CCPA más adelante.',
    ],
  },
  'unlist-caller-id': {
    title: 'Elimina tu número de las apps de identificación de llamadas',
    summary: 'Retira tu número de bases de datos de identificación de llamadas colaborativas como Truecaller y Hiya.',
    urlLabel: 'Baja en Truecaller',
  },
  'revoke-third-party-apps': {
    title: 'Audita y revoca accesos de apps de terceros',
    summary:
      'Revisa las apps conectadas a tus cuentas de Google, Apple, Facebook o Microsoft y revoca cualquiera que ya no uses.',
    urlLabel: 'Conexiones de Google',
  },
  'enable-2fa': {
    title: 'Activa la verificación en dos pasos en cuentas críticas',
    summary:
      'Activa la autenticación de dos factores basada en app (no por SMS) para el correo, el banco y tu gestor de contraseñas. Los códigos por SMS pueden ser interceptados mediante SIM swapping.',
    steps: [
      'Usa una app autenticadora (Aegis, Ente Auth o tu gestor de contraseñas).',
      'Prioriza: correo → gestor de contraseñas → banco → redes sociales.',
      'Guarda los códigos de respaldo en tu gestor de contraseñas, no en papel encima de la mesa.',
    ],
  },
  'wipe-old-devices': {
    title: 'Borra los datos antes de deshacerte de dispositivos',
    summary: 'Restablece de fábrica y cifra teléfonos, portátiles y discos duros antes de venderlos o reciclarlos.',
    steps: [
      'Asegúrate primero de que el cifrado de disco completo está activado (hace que el borrado sea efectivamente irreversible).',
      'Cierra sesión en todas las cuentas (sobre todo en Find My / bloqueo de cuenta de Google) antes de restablecer.',
      'Luego haz el restablecimiento de fábrica. Para discos duros mecánicos, un borrado multipase; en SSDs usa el borrado seguro integrado.',
    ],
  },
  'optout-smartbackgroundchecks': {
    title: 'Opt-out de SmartBackgroundChecks',
    summary: 'Eliminación rápida por formulario, sin identificación requerida — otro sitio de búsqueda de personas que aparece en búsquedas por nombre.',
    urlLabel: 'Eliminarme',
  },
  'ad-industry-optout': {
    title: 'Opt-out de anuncios basados en intereses (DAA/NAI)',
    summary:
      'Usa las herramientas autorregulatorias de la industria publicitaria para excluir este navegador de la publicidad conductual en un solo paso. Basado en cookies — repítelo tras borrar cookies o en un navegador nuevo.',
    urlLabel: 'DAA WebChoices',
  },
  'optout-spokeo': {
    title: 'Opt-out de Spokeo',
    summary: 'Pega la URL de tu perfil y confirma por correo.',
    urlLabel: 'Opt-out',
  },
  'optout-whitepages': {
    title: 'Opt-out de Whitepages',
    summary: 'Envía una solicitud de supresión; a menudo requiere verificación telefónica. Aparece en los primeros resultados de búsquedas por nombre.',
    urlLabel: 'Solicitud de supresión',
  },
  'optout-peopleconnect': {
    title: 'Opt-out de la red PeopleConnect',
    summary:
      'Una sola solicitud de supresión cubre Intelius, BeenVerified, Instant Checkmate, TruthFinder y USSearch. La acción sobre brokers con mayor apalancamiento.',
    urlLabel: 'Suprimir los 5',
  },
  'optout-radaris': {
    title: 'Opt-out de Radaris',
    summary: 'Reclama y elimina tu perfil; requiere confirmación por correo.',
    urlLabel: 'Controlar privacidad',
  },
  'optout-mylife': {
    title: 'Opt-out de MyLife',
    summary: 'Envía una solicitud de privacidad/CCPA. MyLife mantiene perfiles persistentes de «puntuación de reputación» y es notoriamente difícil de eliminar.',
    urlLabel: 'Solicitud CCPA',
  },
  'optout-nuwber': {
    title: 'Opt-out de Nuwber',
    summary: 'Eliminación mediante enlace más confirmación por correo.',
    urlLabel: 'Eliminarme',
  },
  'optout-thatsthem': {
    title: "Opt-out de That's Them",
    summary: 'Eliminación sencilla por formulario.',
    urlLabel: 'Opt-out',
  },
  'optout-peoplefinders': {
    title: 'Opt-out de PeopleFinders',
    summary: 'Formulario más confirmación por correo.',
    urlLabel: 'Opt-out',
  },
  'optout-familytreenow': {
    title: 'Opt-out de FamilyTreeNow',
    summary: 'Elimina grafos sorprendentemente detallados de dirección y familiares.',
    urlLabel: 'Opt-out',
  },
  'optout-acxiom': {
    title: 'Opt-out de Acxiom',
    summary: 'Uno de los mayores agregadores de datos de marketing — cortarle el suministro reduce el que llega a muchos brokers menores.',
    urlLabel: 'Opt-out',
  },
  'optout-oracle': {
    title: 'Opt-out de Oracle Data Cloud',
    summary: 'Envía el opt-out de data-cloud. Oracle está cerrando su negocio publicitario — verifica el proceso actual.',
    urlLabel: 'Privacidad / opt-out',
  },
  'optout-epsilon': {
    title: 'Opt-out de Epsilon',
    summary: 'Opt-out del agregador de datos de marketing.',
    urlLabel: 'Opt-out',
  },
  'optout-experian-marketing': {
    title: 'Opt-out del marketing de Experian',
    summary: 'Opt-out de marketing, separado de tu historial crediticio.',
    urlLabel: 'Opt-out',
  },
  'private-browser': {
    title: 'Cambia a un navegador privado',
    summary: 'Adopta Firefox o Brave con protección anti-rastreo activada por defecto.',
    urlLabel: 'Obtener Firefox',
  },
  'tracker-blocker': {
    title: 'Añade un bloqueador de contenido y rastreadores',
    summary: 'Instala uBlock Origin para bloquear anuncios y rastreadores en toda la web.',
    urlLabel: 'Obtener uBlock Origin',
  },
  'private-search': {
    title: 'Cambia el motor de búsqueda predeterminado',
    summary: 'Pásate a un motor de búsqueda sin rastreo como DuckDuckGo, Startpage o Brave Search.',
    urlLabel: 'Probar DuckDuckGo',
  },
  'email-aliases': {
    title: 'Empieza a usar alias de correo',
    summary:
      'Usa un alias único por servicio para que una filtración futura no pueda vincular tus cuentas — y puedes cancelar cualquier alias que empiece a recibir spam.',
    urlLabel: 'Obtener SimpleLogin',
  },
  'optout-prescreen': {
    title: 'Opt-out de ofertas de crédito preseleccionadas (EE.UU.)',
    summary: 'Para el envío de ofertas de crédito y seguros preseleccionadas — estas son ventas masivas de tus datos de cabecera de crédito.',
    urlLabel: 'Opt-out (5 años / permanente)',
  },
  'freeze-credit': {
    title: 'Congela tu crédito',
    summary: 'Solicita un bloqueo de seguridad en las tres agencias para impedir fraudes de apertura de nuevas cuentas. Gratuito en EE.UU.',
    steps: [
      'Congela en las tres: Equifax, Experian y TransUnion (cada una es independiente).',
      'Un bloqueo impide que se abra crédito nuevo a tu nombre; lo «desactivas» temporalmente cuando necesitas crédito.',
      'No afecta a tu puntuación y es gratuito por ley.',
    ],
    urlLabel: 'Bloqueo en Equifax',
  },
  'disable-location-history': {
    title: 'Desactiva el historial de ubicación del móvil',
    summary: 'Desactiva el Historial de ubicación de Google / Ubicaciones significativas de iOS y borra el historial guardado.',
    urlLabel: 'Controles de actividad',
  },
  'schedule-broker-recheck': {
    title: 'Programa una revisión periódica de brokers',
    summary:
      'Los brokers te vuelven a listar en 3–6 meses. Vanish registra cuándo hay que repetir cada opt-out — esto confirma que te comprometes con el ciclo.',
  },
  'broker-letter': {
    title: 'Carta: elimíname (sin formulario de autoservicio)',
    summary:
      'Para brokers y empresas sin opt-out de autoservicio, genera una carta de eliminación GDPR/CCPA y envíala tú mismo.',
  },
  'optout-checkpeople': {
    title: 'Opt-out de CheckPeople',
    summary: 'Eliminación por formulario de otro agregador de búsqueda de personas.',
    urlLabel: 'Opt-out',
  },
  'optout-dmachoice': {
    title: 'Opt-out de correo publicitario directo (DMAchoice)',
    summary:
      'Regístrate en el servicio de preferencias de correo de la Data & Marketing Association para reducir el correo postal no deseado. Una pequeña tarifa única cubre un registro de varios años.',
    urlLabel: 'DMAchoice',
  },
  'youronlinechoices': {
    title: 'Opt-out de anuncios basados en intereses en la UE',
    summary:
      'Usa la herramienta YourOnlineChoices de la EDAA para excluir este navegador de la publicidad conductual en las redes participantes. Basado en cookies — repítelo tras borrar cookies.',
    urlLabel: 'Your Online Choices',
  },
  'encrypted-dns-devices': {
    title: 'Configura DNS cifrado en todos tus dispositivos',
    summary:
      'Apunta tu móvil y portátil a un resolver cifrado y respetuoso con la privacidad para que tu ISP no pueda registrar cada sitio que consultas.',
    steps: [
      'Elige un resolver sin registros: Quad9 (9.9.9.9) o NextDNS.',
      'iOS/macOS: instala el perfil de configuración del proveedor, o configura DNS-over-HTTPS en Ajustes.',
      'Android 9+: Ajustes → Red → DNS privado → introduce el nombre de host del proveedor.',
      'Esto complementa el DNS a nivel de router — los dispositivos lo mantienen cuando estás fuera de tu red doméstica.',
    ],
    urlLabel: 'Quad9',
  },
  'harden-messaging-privacy': {
    title: 'Refuerza la privacidad en tus apps de mensajería',
    summary: 'Activa los controles de privacidad ya integrados en las apps que usas — antes de migrar nada.',
    steps: [
      'Activa los mensajes que desaparecen por defecto donde sea posible (Signal, WhatsApp, Telegram).',
      'Oculta «última vez visto», confirmaciones de lectura y foto de perfil a quienes no son contactos.',
      'Bloquea la app con PIN/biometría y desactiva las vistas previas de mensajes en la pantalla de bloqueo.',
      'Revisa los ajustes de invitación a grupos para que desconocidos no puedan añadirte.',
    ],
  },
  'remove-outdated-google': {
    title: 'Elimina páginas desactualizadas de Google',
    summary:
      'Cuando una página sobre ti cambia o se elimina pero Google sigue mostrando el contenido antiguo en caché, pide a Google que lo actualice o elimine.',
    urlLabel: 'Eliminar contenido desactualizado',
  },
  'optout-es-listarobinson': {
    title: 'Regístrate en la Lista Robinson',
    summary:
      'La lista oficial de exclusión publicitaria de España (gestionada por Adigital). Una vez registrado, las empresas adheridas no pueden llamarte, enviarte SMS, correo postal ni email con marketing.',
    urlLabel: 'Lista Robinson',
  },
  'optout-it-rpo': {
    title: 'Regístrate en el Registro Pubblico delle Opposizioni',
    summary:
      'El registro público de oposición italiano. Inscribe tu número de teléfono (y dirección postal) para bloquear a los operadores que están obligados a consultarlo antes de hacerte marketing.',
    urlLabel: 'Registro Opposizioni',
  },
  'optout-fr-bloctel': {
    title: 'Regístrate en Bloctel',
    summary:
      'El registro oficial antillamadas de Francia. Los números inscritos no pueden ser usados legalmente para marketing telefónico por empresas con las que no tienes contrato.',
    urlLabel: 'Bloctel',
  },
  'optout-de-robinsonliste': {
    title: 'Regístrate en la Robinsonliste',
    summary:
      'La lista central de exclusión publicitaria de Alemania (gestionada por la DDV). Reduce el correo postal dirigido, las llamadas y los emails de marketing de las empresas adheridas.',
    urlLabel: 'Robinsonliste (DDV)',
  },
  'optout-be-donotcallme': {
    title: 'Regístrate en la lista Do Not Call Me',
    summary:
      'La lista oficial de no llamar de Bélgica. Una vez inscrito, tu número no puede usarse para marketing telefónico. El registro se gestiona por teléfono.',
    urlLabel: 'Do Not Call Me',
  },
  'optout-pt-amd': {
    title: 'Únete a la Lista de Oposição (AMD)',
    summary:
      'La lista de oposición de consumidores de Portugal. Regístrate para detener llamadas de marketing directo y correo postal de las empresas adheridas al registro.',
    urlLabel: 'Lista de Oposição',
  },
  'optout-se-hitta': {
    title: 'Elimina tu página de contacto de Hitta.se',
    summary:
      'El principio de registros públicos de Suecia hace que tu dirección sea fácil de encontrar. Oculta tu página de contacto en Hitta.se — la eliminación se hace con BankID.',
    urlLabel: 'Eliminarme',
  },
  'optout-se-ratsit': {
    title: 'Elimina tu listado de Ratsit',
    summary: 'Ratsit republica registros públicos suecos — dirección, edad, finanzas. Elimina tu listado gratuito público con BankID.',
    urlLabel: 'Ta bort',
  },
  'optout-se-mrkoll': {
    title: 'Oculta tus datos en MrKoll',
    summary: 'MrKoll republica registros públicos suecos. Oculta tu dirección y número de teléfono — requiere BankID.',
    urlLabel: 'Ändra uppgifter',
  },
  'optout-de-dastelefonbuch': {
    title: 'Elimina tu entrada en DasTelefonbuch / DasÖrtliche',
    summary: 'Elimina o restringe tu listado en los principales directorios telefónicos públicos de Alemania (DasTelefonbuch, DasÖrtliche).',
    urlLabel: 'Gestionar entrada',
  },
  'optout-at-ecg': {
    title: 'Añádete a la ECG-Liste',
    summary:
      'La lista de exclusión de marketing electrónico de Austria (gestionada por RTR). Al registrar tu dirección te excluyes de emails y SMS de marketing no solicitados.',
    urlLabel: 'ECG-Liste',
  },
  'optout-dk-robinson': {
    title: 'Únete a la Robinsonlisten',
    summary:
      'La lista oficial de protección publicitaria de Dinamarca, gestionada a través del registro civil central (CPR). Bloquea el correo publicitario dirigido y las llamadas de marketing.',
    urlLabel: 'Robinsonlisten',
  },
  'optout-fi-kieltopalvelu': {
    title: 'Registra la prohibición de marketing (ASML)',
    summary:
      'El opt-out tipo Robinson de Finlandia, gestionado por la asociación de marketing ASML. Regístrate para parar el telemarketing y el marketing directo dirigido.',
    urlLabel: 'Kieltopalvelut',
  },
  'optout-hr-nezovi': {
    title: 'Regístrate en NE ZOVI',
    summary:
      'El registro oficial de no llamar de Croacia (gestionado por el regulador HAKOM). Gratuito — te registras a través de tu operador de telecomunicaciones para bloquear las llamadas de marketing.',
    urlLabel: 'NE ZOVI',
  },
  'private-email-provider': {
    title: 'Migra a un proveedor de correo privado',
    summary: 'Mueve tu buzón principal a Proton o Tuta y empieza a redirigir y migrar tus cuentas.',
    urlLabel: 'Proton Mail',
  },
  'signal': {
    title: 'Mueve tus comunicaciones a Signal',
    summary: 'Convierte Signal en tu mensajero predeterminado y deja de usar SMS/WhatsApp para cualquier cosa sensible.',
    urlLabel: 'Obtener Signal',
  },
  'hardware-keys': {
    title: 'Añade llaves de seguridad físicas',
    summary: 'Registra llaves FIDO2 (p.ej. YubiKey) en tu correo, banco, gestor de contraseñas y cuentas en la nube.',
    steps: [
      'Compra dos llaves — una principal y una de respaldo guardada en un sitio seguro.',
      'Registra ambas en cada cuenta crítica antes de eliminar métodos de 2FA más débiles.',
      'Las llaves físicas son resistentes al phishing; son el segundo factor más robusto disponible.',
    ],
  },
  'full-broker-sweep': {
    title: 'Barrido completo de brokers',
    summary: 'Recorre la lista completa de brokers de principio a fin, registrando la fecha de cada opt-out para que los temporizadores de revisión sean precisos.',
  },
  'e2ee-storage': {
    title: 'Cambia a almacenamiento en la nube con cifrado de extremo a extremo',
    summary: 'Reemplaza Drive/Dropbox por almacenamiento cifrado de extremo a extremo para que el proveedor no pueda leer tus archivos.',
    urlLabel: 'Proton Drive',
  },
  'degoogle-services': {
    title: 'Elimina Google de tus servicios principales',
    summary: 'Reemplaza Maps, Docs y Photos por alternativas respetuosas con la privacidad.',
    steps: [
      'Maps → Organic Maps / OsmAnd. Docs → CryptPad / OnlyOffice. Photos → Ente / Immich.',
      'Migra un servicio a la vez para no perder el acceso a nada importante.',
      'Exporta tus datos desde Google Takeout antes de eliminar nada.',
    ],
    urlLabel: 'Alternativas (Privacy Guides)',
  },
  'masked-phone': {
    title: 'Usa un número de teléfono enmascarado / VoIP',
    summary: 'Da un número secundario para registros y mantén tu número real en privado.',
    steps: [
      'Opciones: Google Voice (EE.UU.), MySudo o una segunda SIM/eSIM barata.',
      'Usa el número enmascarado para tarjetas de fidelización, registros y todo lo no esencial.',
      'Reserva tu número real solo para contactos de confianza y respaldos de 2FA.',
    ],
  },
  'masked-cards': {
    title: 'Usa tarjetas de pago virtuales / enmascaradas',
    summary: 'Los números de tarjeta de un solo uso o por comerciante rompen el vínculo de datos de pago que compran los brokers.',
    steps: [
      'Opciones: Privacy.com (EE.UU.), tarjetas desechables de Revolut o las tarjetas virtuales de tu banco.',
      'Crea una tarjeta única por comerciante; cancela cualquiera que filtre datos o realice cargos incorrectos.',
    ],
  },
  'strip-exif': {
    title: 'Elimina los metadatos de las fotos antes de publicarlas',
    summary: 'Quita los datos EXIF/GPS de las imágenes que compartes públicamente para que las fotos no revelen dónde vives o estabas.',
    steps: [
      'Muchas plataformas eliminan el EXIF al subir — pero no todas, y no en comparticiones del archivo original.',
      'iOS: hoja de compartir → Opciones → desactiva Ubicación. Android: usa una app de eliminación de metadatos.',
      'Escritorio: ExifTool, o «Quitar propiedades» en las propiedades del archivo en Windows.',
    ],
  },
  'harden-router-dns': {
    title: 'Refuerza el router doméstico y el DNS',
    summary: 'Cambia la contraseña de administrador predeterminada, activa el DNS cifrado y desactiva UPnP/WPS.',
    steps: [
      'Cambia inmediatamente la contraseña de administrador del router si sigue siendo la de fábrica.',
      'Configura DNS cifrado (DoH/DoT) — p.ej. Quad9 (9.9.9.9) o NextDNS — para que tu ISP no registre cada consulta.',
      'Desactiva UPnP y WPS; mantén el firmware actualizado.',
    ],
  },
  'segment-iot': {
    title: 'Segmenta los dispositivos IoT en la red',
    summary: 'Pon los dispositivos del hogar inteligente en una red de invitados o VLAN para limitar lo que pueden ver y alcanzar.',
  },
  'anti-fingerprint': {
    title: 'Bloquea la huella digital del navegador',
    summary: 'Usa ajustes anti-fingerprinting para que los rastreadores no puedan identificar tu navegador sin cookies.',
    steps: [
      'Firefox: activa privacy.resistFingerprinting, o usa Mullvad Browser / Tor Browser para sesiones sensibles.',
      'Evita acumular extensiones exóticas — cada una te hace más único, no menos.',
    ],
    urlLabel: 'Comprueba tu huella digital',
  },
  'retire-old-email': {
    title: 'Retira y elimina la cuenta de correo antigua',
    summary: 'Tras la migración, actualiza los servicios restantes y luego elimina el buzón antiguo para que no pueda filtrarse ni minarse.',
    steps: [
      'Redirige el buzón antiguo al nuevo durante un período de gracia (3–6 meses).',
      'Cada vez que llegue algo a la dirección antigua, actualiza ese servicio a la nueva.',
      'Cuando el tráfico se seque, exporta y luego elimina la cuenta antigua.',
    ],
  },
  'gdpr-access-letter': {
    title: 'Envía solicitudes de acceso GDPR (SAR)',
    summary: 'Obliga a los grandes tenedores de datos a revelar exactamente qué tienen sobre ti — reconocimiento previo a la eliminación.',
  },
  'optout-lexisnexis': {
    title: 'Opt-out de LexisNexis',
    summary: 'Agregador FCRA de alto valor que alimenta comprobaciones de antecedentes; puede requerir prueba de identidad.',
    urlLabel: 'Opt-out',
  },
  'broker-registry': {
    title: 'Opt-out mediante registros de brokers de datos',
    summary: 'Usa los registros estatales de brokers (California, Vermont) para encontrar y excluirte de brokers que hayas pasado por alto.',
    urlLabel: 'Registro de brokers de CA',
  },
  'maps-contributions': {
    title: 'Elimina tu dirección de las contribuciones en Maps',
    summary: 'Borra reseñas, fotos y etiquetas que revelan silenciosamente tu domicilio o lugar de trabajo.',
    urlLabel: 'Actividad en Maps',
  },
  'cross-app-tracking-off': {
    title: 'Desactiva el rastreo entre apps en todas partes',
    summary: 'iOS App Tracking Transparency desactivado, ID publicitario de Android deshabilitado, ubicación por app en «nunca/preguntar».',
  },
  'optout-eu-brokers': {
    title: 'Opt-out de brokers de la UE',
    summary: 'Residentes en la UE/RU: presenta opt-outs más cartas GDPR Art.17 a los brokers que operan en la UE (Acxiom, Criteo, Experian UK).',
    urlLabel: 'Acxiom (global)',
  },
  'optout-criteo': {
    title: 'Opt-out de Criteo',
    summary: 'Excluye tu perfil de retargeting publicitario de Criteo — una de las mayores redes de publicidad conductual que opera en la UE.',
    urlLabel: 'Privacidad / opt-out',
  },
  'optout-192': {
    title: 'Opt-out de 192.com',
    summary:
      'Elimina tu listado del principal sitio de búsqueda de personas del Reino Unido. Gran parte de sus datos proceden del registro electoral abierto — solicita también la exclusión en tu ayuntamiento.',
    urlLabel: 'Eliminar mis datos',
  },
  'optout-experian-uk': {
    title: 'Opt-out del marketing de Experian UK',
    summary: 'Usa el portal de datos de Experian UK para controlar el uso de marketing de tus datos, separado de tu historial crediticio.',
    urlLabel: 'Portal de datos',
  },
  'google-rtbf-delisting': {
    title: 'Solicita la desindexación en Google UE/RU (derecho al olvido)',
    summary:
      'Los residentes en la UE/RU pueden pedir a Google que desindexe URLs concretas sobre ellos de los resultados de búsqueda por nombre. Elimina el enlace de la búsqueda, no la página subyacente.',
    urlLabel: 'Formulario de solicitud RTBF',
  },
  'disable-os-telemetry': {
    title: 'Reduce la telemetría del sistema operativo en Windows y macOS',
    summary: 'Reduce los datos de diagnóstico y publicidad que tu sistema operativo de escritorio envía por defecto.',
    steps: [
      'Windows: Ajustes → Privacidad y seguridad → Diagnósticos y comentarios → selecciona Solo los datos necesarios; desactiva el ID de publicidad y las experiencias personalizadas.',
      'macOS: Ajustes → Privacidad y seguridad → Análisis y mejoras → desactiva Compartir análisis; Publicidad de Apple → desactiva Anuncios personalizados.',
      'Revisa también los permisos de cámara, micrófono y ubicación por app mientras estás ahí.',
    ],
  },
  'private-mailing-address': {
    title: 'Establece una dirección postal privada',
    summary:
      'Usa una dirección de agencia de recepción de correo (CMRA) o buzón virtual y deja de dar tu dirección real para entregas y registros. Rompe el vínculo público nombre↔domicilio.',
    steps: [
      'Opciones: una agencia de recepción de correo comercial (CMRA), un buzón virtual o un apartado de correos.',
      'Actualiza tu dirección en las cuentas gradualmente, empezando por las de mayor exposición.',
      'No vuelvas a introducir tu dirección real en ningún formulario de registro.',
    ],
  },
  'optout-electoral-register': {
    title: 'Opt-out del registro electoral/censo abierto',
    summary:
      'Elimínate del censo electoral de venta pública (registro abierto del RU) o de las ventas de datos de votantes (EE.UU., según el estado).',
    steps: [
      'RU: contacta con tu ayuntamiento para excluirte del registro electoral «abierto» (sigues en el registro completo para votar).',
      'EE.UU.: las normas del censo de votantes son por estado; algunos permiten el estado confidencial/oculto, especialmente para supervivientes.',
    ],
  },
  'suppress-public-records': {
    title: 'Suprime la dirección en registros públicos',
    summary:
      'Usa programas de confidencialidad de dirección o redacción de registros de propiedad donde seas elegible (especialmente útil para supervivientes de abuso).',
    steps: [
      'EE.UU.: la mayoría de los estados tienen un Programa de Confidencialidad de Dirección (ACP) para supervivientes de acoso/abuso.',
      'Registros de propiedad: algunos condados permiten la redacción para personas en riesgo — consulta con el registro del condado.',
      'Es específico por jurisdicción; una organización local de apoyo a víctimas puede ayudarte a tramitarlo.',
    ],
  },
  'compartmentalize-identities': {
    title: 'Compartimentaliza identidades',
    summary: 'Separa correo, teléfono y tarjeta por contexto vital (trabajo / personal / compras / finanzas) para que ninguna filtración mapee toda tu vida.',
  },
  'degoogled-phone': {
    title: 'Cambia a un teléfono sin Google (GrapheneOS)',
    summary: 'Usa a diario un sistema operativo reforzado sin los servicios de Google integrados.',
    urlLabel: 'GrapheneOS',
  },
  'always-vpn-tor': {
    title: 'VPN permanente / Tor para uso sensible',
    summary: 'Enruta la navegación sensible a través de una VPN sin registros de confianza (p.ej. Mullvad) o Tor.',
    urlLabel: 'Mullvad VPN',
  },
  'burner-devices': {
    title: 'Dispositivos secundarios / desechables para viajes',
    summary: 'Lleva dispositivos con datos mínimos al cruzar fronteras y en contextos de riesgo elevado.',
  },
  'trust-llc-home': {
    title: 'Usa un fideicomiso / sociedad para vivienda y activos',
    summary:
      'Rompe el vínculo público nombre↔dirección en los registros de propiedad manteniéndolos en un fideicomiso o sociedad. Consulta a un profesional — esto no es asesoramiento jurídico.',
  },
  'quarterly-reremoval': {
    title: 'Campaña de eliminación trimestral',
    summary: 'Repite el barrido completo de brokers cada trimestre y registra las fechas. La eliminación es un hábito, no algo puntual.',
  },
  'threat-model-review': {
    title: 'Revisión del modelo de amenaza cada trimestre',
    summary:
      'Reevalúa de quién te proteges y ajusta. Usa el marco de Autodefensa contra la Vigilancia de la EFF.',
    urlLabel: 'Plan de seguridad EFF SSD',
  },
  'remove-osint-aggregators': {
    title: 'Elimínate de sitios de búsqueda OSINT y filtraciones',
    summary: 'Solicita la eliminación de sitios de búsqueda de filtraciones y agregación OSINT donde sea posible.',
  },
  'scrub-org-sites': {
    title: 'Elimínate de sitios de exempleadores y organizaciones',
    summary: 'Solicita la eliminación de bios, páginas de personal y menciones en prensa que exponen tus datos. Usa una carta si te ignoran.',
  },
  'optout-court-arrest-records': {
    title: 'Suprime agregadores de expedientes judiciales y detenciones',
    summary:
      'Los sitios que republican ficheros policiales, registros de detenciones y expedientes judiciales causan un daño elevado incluso cuando los cargos fueron retirados. Solicita la eliminación en cada uno; algunos requieren identificación o el auto judicial.',
    steps: [
      'Lista los sitios que muestran tus datos (a partir de tu búsqueda de nombre base del Nivel 1).',
      'Usa la página de eliminación de cada sitio; para los sitios de fotos policiales, nunca pagues una «tarifa de retirada» — financia el negocio. Cita las leyes estatales anti-mugshot donde existan.',
      'Para portales judiciales oficiales, pregunta al secretario sobre sellado/expungement — la única solución duradera.',
      'Si un sitio te ignora, escala con una carta de eliminación GDPR/CCPA.',
    ],
  },
  'optout-gb-open-register': {
    title: 'Opt-out del registro electoral abierto del RU',
    summary:
      'El registro «abierto» se vende a empresas de marketing y sitios de búsqueda de personas. Solicita la exclusión en tu ayuntamiento — sigues en el registro completo para votar y comprobaciones de crédito.',
    urlLabel: 'Cómo solicitar la exclusión',
  },
  'optout-ie-edited-register': {
    title: 'Pásate al registro electoral editado de Irlanda',
    summary:
      'El registro completo irlandés puede usarse para fines no electorales; el registro editado no se vende para marketing. Elige el registro editado cuando te registres o actualices tus datos.',
    urlLabel: 'Comprobar el registro',
  },
  'es-asnef': {
    title: 'Consulta tu fichero de crédito ASNEF (Equifax Iberia)',
    summary:
      'ASNEF (gestionado por Equifax) es el principal fichero de morosidad y crédito de España — las cuentas fraudulentas abiertas a tu nombre aparecen aquí. España no tiene «congelación» preventiva, así que leer el fichero es cómo detectas el fraude.',
    steps: [
      'En el sitio de Equifax, busca «derecho de acceso» y presenta una solicitud con copia de tu DNI.',
      'Deben responderte en un mes, de forma gratuita.',
      'Comprueba si hay alguna cuenta o deuda que no reconozcas — esa es la señal de fraude.',
      'Repítelo aproximadamente una vez al año y después de cualquier notificación de filtración.',
    ],
    urlLabel: 'Equifax — consumidores',
  },
  'es-cirbe': {
    title: 'Solicita tu informe CIRBE (Banco de España)',
    summary:
      'El CIRBE es el registro central de crédito del Banco de España — lista todos los préstamos y créditos registrados con tu identificación. La forma más clara de detectar créditos abiertos a tu nombre.',
    steps: [
      'Accede a la Sede Electrónica del Banco de España → CIRBE → solicita tu informe.',
      'Identifícate con certificado digital o Cl@ve (o solicítalo por correo postal / en persona con tu DNI).',
      'Gratuito y normalmente instantáneo por internet.',
      'Revisa si hay algún préstamo que no hayas solicitado.',
    ],
    urlLabel: 'Banco de España (sede)',
  },
  'uk-cifas-pr': {
    title: 'Añade el Registro de Protección Cifas (RU)',
    summary:
      'Lo más parecido a una congelación de crédito en el RU: una marca en tu fichero que indica a los prestamistas que realicen comprobaciones de identidad adicionales antes de abrir crédito a tu nombre. De pago (~30 £ por dos años), vale la pena si estás en riesgo elevado.',
    steps: [
      'Solicita el Registro de Protección en el sitio web de Cifas.',
      'Los prestamistas verán la marca y deberán tomar pasos adicionales para verificar que eres tú.',
      'Espera que tus propias solicitudes de crédito sean más lentas mientras esté activo — ese es el objetivo.',
    ],
    urlLabel: 'Cifas',
  },
  'pihole': {
    title: 'Bloquea rastreadores en toda la red con Pi-hole',
    summary:
      'Un Pi-hole bloquea dominios de rastreadores y anuncios para todos los dispositivos de tu red — teléfonos, televisores, todo — a nivel DNS, antes de que se conecten siquiera. Una caja, cobertura para todo el hogar.',
    steps: [
      'Instala Pi-hole en una Raspberry Pi o cualquier máquina Linux siempre encendida.',
      'Apunta el DNS de tu router hacia él para que todos los dispositivos queden cubiertos automáticamente.',
      'Añade listas de bloqueo; revisa el registro de consultas para ver a qué se estaban conectando tus dispositivos.',
    ],
    urlLabel: 'Pi-hole',
  },
  'code-word': {
    title: 'Establece una «palabra clave» familiar contra estafas de clonación de voz',
    summary:
      'La IA puede clonar una voz a partir de segundos de audio y simular una llamada de pánico de «soy yo, mándame dinero». Una palabra clave familiar que solo vosotros conocéis lo neutraliza al instante — barato y uno de los pasos de mayor impacto que puedes dar.',
    steps: [
      'Acuerda una palabra o frase con tu familia cercana que un desconocido no pueda adivinar.',
      'Regla: cualquier petición urgente de dinero o secreto por llamada o mensaje debe incluirla, o se trata como falsa.',
      'Nunca guardes ni envíes la palabra digitalmente donde pueda filtrarse.',
    ],
    internalLabel: '🔑 Establece tu palabra clave',
  },
  'dont-pay-removers': {
    title: "No pagues un servicio de eliminación de brokers",
    summary:
      'Los servicios de pago (DeleteMe, Incogni…) solo cubren una pequeña parte de los brokers, inflan sus cifras de «listados eliminados» y cobran indefinidamente — y muchas reseñas elogiosas son patrocinadas. Los opt-outs por los que cobran son los gratuitos que están en esta app.',
    steps: [
      'Haz tú mismo los opt-outs gratuitos de brokers en el nivel Brokers — los mismos brokers, sin suscripción.',
      'Los datos de las agencias de crédito y los datos inferidos/de marketing no pueden ser eliminados por estos servicios de todas formas.',
      'Si valoras la comodidad, adelante — solo ten claro qué estás comprando realmente.',
    ],
  },
  'poison-profile': {
    title: 'Envenena, no borres — diluye tu perfil',
    summary:
      'Los brokers y plataformas vuelven a listarte y reconstruyen tu perfil, así que la eliminación es una cinta sin fin. Añadir ruido plausible a tus propias cuentas de bajo riesgo degrada la confianza de cualquiera en qué datos son los reales. El Kit de ruido genera el ruido.',
    steps: [
      'Usa solo cuentas que sean tuyas; busca que sea soso y genérico, no una persona falsa convincente.',
      'Nunca te hagas pasar por nadie, escribas reseñas falsas ni registres a otras personas.',
      'Abre el Kit de ruido para obtener variantes de nombre y biografías de relleno que puedas pegar.',
    ],
    internalLabel: '⬡ Abrir el Kit de ruido',
  },
  'vary-writing-style': {
    title: 'Varía tu estilo de escritura entre identidades',
    summary:
      'La estilometría puede vincular tus cuentas por cómo escribes — frases favoritas, puntuación, hábitos con emojis — incluso sin nombre o IP compartidos. Si mantienes identidades separadas, escribe de forma diferente en cada una.',
    steps: [
      'Elige hábitos deliberadamente distintos por identidad: longitud de frase, puntuación, mayúsculas, uso de emojis.',
      'Evita frases características y expresiones recurrentes que se repitan entre cuentas.',
      'Para situaciones de alto riesgo, redacta y luego reescribe con una voz diferente antes de publicar.',
    ],
  },
  'behavioral-fingerprint': {
    title: 'Conoce tu huella conductual',
    summary:
      'Más allá de las cookies, los sitios perfilan cómo te comportas — ritmo de escritura, velocidad de desplazamiento, incluso la marcha detectada por el acelerómetro del móvil. No puedes borrarlo del todo, pero los navegadores anti-fingerprinting y los perfiles separados lo mitigan.',
    steps: [
      'Usa un navegador resistente al fingerprinting (Tor Browser o Brave con protección anti-fingerprinting activada).',
      'Mantén perfiles de navegador o dispositivos separados para identidades distintas para que el comportamiento no pueda enlazarse.',
      'Desactiva el acceso a movimiento/sensores para sitios que no lo necesiten.',
    ],
  },
  'recognize-phishing': {
    title: 'Reconoce y evita el phishing',
    summary:
      'La mayoría de los robos de cuentas empiezan con un correo o mensaje convincente, no con un hackeo. Aprende las señales para que una página de inicio de sesión falsa nunca consiga tu contraseña.',
    steps: [
      'Trata como sospechoso cualquier mensaje no solicitado de «verifica tu cuenta» / «actividad inusual» — los bancos y las plataformas nunca necesitan tu contraseña por correo.',
      'Nunca inicies sesión a través de un enlace en un mensaje. Abre el sitio tú mismo desde un marcador o escribiendo la dirección.',
      'Comprueba la dirección real del remitente y pasa el ratón por los enlaces para ver adónde llevan realmente antes de hacer clic.',
      'Deja que tu gestor de contraseñas sea el control: si no autocompleta, el dominio probablemente está mal.',
      'Si puedes, usa una llave de seguridad física — es resistente al phishing incluso si te engañan.',
    ],
    urlLabel: 'EFF: evita el phishing',
  },
  'iphone-lockdown-mode': {
    title: 'Activa el Lockdown Mode en iPhone/Mac',
    summary:
      'El Lockdown Mode de Apple elimina las funciones poco usadas que el spyware mercenario aprovecha. Para personas en riesgo elevado, reduce drásticamente la superficie de ataque.',
    steps: [
      'Actualiza primero a la última versión de iOS/iPadOS/macOS.',
      'Abre Ajustes → Privacidad y seguridad → Lockdown Mode (al final de la lista).',
      'Actívalo y reinicia. Se aplica en todos tus dispositivos Apple conectados a la misma cuenta.',
      'Es normal que algunos enlaces, archivos adjuntos y funciones web queden limitados — esa es la protección funcionando.',
    ],
    urlLabel: 'Apple: Lockdown Mode',
  },
  'verify-signal-safety-numbers': {
    title: 'Verifica los números de seguridad de Signal',
    summary:
      'El cifrado de extremo a extremo solo te protege si hablas con la persona real. Verificar el número de seguridad descarta un posible intermediario.',
    steps: [
      'Abre una conversación en Signal → toca el nombre del contacto → Ver número de seguridad.',
      'En persona, escaneaos mutuamente el código QR; a distancia, comparad el número por un canal de confianza separado.',
      'Toca «Marcar como verificado» una vez que coincidan.',
      'Si el número de seguridad cambia de forma inesperada, confirma el motivo antes de enviar nada sensible.',
    ],
    urlLabel: 'Signal: números de seguridad',
  },
  'detect-bluetooth-trackers': {
    title: 'Detecta rastreadores Bluetooth ocultos',
    summary:
      'Los AirTags y rastreadores tipo Tile son herramientas de acoso baratas. Los teléfonos ahora pueden avisarte de un rastreador desconocido que viaja contigo — asegúrate de que la detección está activa y sabe cómo escanear.',
    steps: [
      'iPhone: mantén Bluetooth y Ubicación activados; iOS te avisa de un rastreador AirTag / Find My desconocido que se mueve contigo. Toca la alerta para hacerlo sonar.',
      'Android: las alertas de rastreadores desconocidos están integradas (Ajustes → Seguridad y emergencias → Alertas de rastreadores desconocidos), o instala «Tracker Detect» de Apple para escanear manualmente.',
      'Si encuentras un rastreador que no es tuyo, puedes desactivarlo quitando la batería — pero si sientes que estás en peligro, consérvalo y contacta primero con los servicios de apoyo o las autoridades locales.',
    ],
    urlLabel: 'Apple: rastreo no deseado',
  },
}
