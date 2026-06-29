import type { ContentOverlay } from './types'

export const pt: ContentOverlay = {
  'google-yourself': {
    title: 'Pesquisa o teu próprio nome no Google',
    summary:
      'Pesquisa o teu nome (+ cidade, + telefone) numa janela privada e tira screenshots dos primeiros resultados. Esta é a tua linha de base — só podes medir a remoção em relação ao que consegues ver.',
    steps: [
      'Abre uma janela privada/incógnito para que os resultados personalizados não te enganem.',
      'Pesquisa: o teu nome, depois "nome + cidade", depois o teu número de telefone, depois o teu email.',
      'Tira screenshots das primeiras duas páginas de cada pesquisa. Anota todos os sites que expõem uma morada, telefone, familiares ou fotos.',
      'Esses sites tornam-se a tua lista de alvos no nível de Corretores de Dados.',
    ],
    urlLabel: 'Pesquisa no Google',
  },
  'hibp': {
    title: 'Verifica o Have I Been Pwned',
    summary:
      'Introduz o teu email para ver em que fugas foi exposto e quais as palavras-passe que precisas de alterar. A base de dados de fugas canónica e gratuita.',
    urlLabel: 'Verificar no HIBP',
  },
  'mozilla-monitor': {
    title: 'Configura o Mozilla Monitor',
    summary: 'Alertas gratuitos e contínuos de fugas para até 20 endereços de email, usando a base de dados do HIBP.',
    urlLabel: 'Abrir Monitor',
  },
  'password-manager': {
    title: 'Instala um gestor de palavras-passe',
    summary:
      'Adota o Bitwarden ou o KeePass. É a base para palavras-passe únicas e para encontrar todas as contas que já criaste.',
    urlLabel: 'Obter Bitwarden',
  },
  'change-breached-passwords': {
    title: 'Altera palavras-passe reutilizadas e comprometidas',
    summary:
      'Para cada conta sinalizada pelo Have I Been Pwned — e em qualquer sítio onde reutilizaste uma palavra-passe — define uma nova palavra-passe única gerada pelo teu gestor.',
    steps: [
      'Começa pelas "chaves do reino": email, depois banco, depois o teu gestor de palavras-passe.',
      'Nunca reutilizes uma palavra-passe em dois sites. Deixa o gestor gerá-las.',
      'Se uma conta esteve numa fuga, considera a palavra-passe antiga como pública.',
    ],
  },
  'delete-dormant-accounts': {
    title: 'Elimina contas inativas',
    summary:
      'Cada conta antiga é uma superfície de ataque e uma fonte para corretores de dados. Usa um diretório de links de eliminação direta ordenados por dificuldade.',
    steps: [
      'O teu gestor de palavras-passe e pesquisas antigas na caixa de entrada ("bem-vindo", "verifica a tua conta") revelam contas esquecidas.',
      'Usa a classificação de dificuldade: verde = um clique, vermelho = tens de enviar email ao suporte.',
      'Elimina, não apenas desativa — as contas desativadas ainda guardam os teus dados.',
    ],
    urlLabel: 'Abrir JustDeleteMe',
  },
  'optout-truepeoplesearch': {
    title: 'Pede exclusão do TruePeopleSearch',
    summary: 'Envia pedido de remoção — sem email nem ID necessários, quase imediato. Uma das vitórias mais rápidas e visíveis.',
    urlLabel: 'Remover-me',
  },
  'optout-fastpeoplesearch': {
    title: 'Pede exclusão do FastPeopleSearch',
    summary: 'Remoção rápida por formulário, sem ID necessário.',
    urlLabel: 'Remover-me',
  },
  'optout-usphonebook': {
    title: 'Pede exclusão do USPhoneBook',
    summary: 'Remoção rápida, sem ID necessário.',
    urlLabel: 'Remover-me',
  },
  'google-results-about-you': {
    title: '"Resultados sobre ti" do Google',
    summary:
      'Usa a própria ferramenta do Google para pedir a remoção de páginas que exponham o teu telefone, morada ou email nos resultados de pesquisa.',
    urlLabel: 'Abrir a ferramenta',
  },
  'google-ad-personalization': {
    title: 'Desativa a personalização de anúncios do Google',
    summary: 'Desativa os anúncios personalizados associados ao teu perfil da conta Google.',
    urlLabel: 'Definições de anúncios',
  },
  'reset-advertising-id': {
    title: 'Reinicia o ID de publicidade do teu telemóvel',
    summary: 'Elimina o identificador persistente que a publicidade digital usa para te seguir entre aplicações.',
    steps: [
      'iOS: Definições → Privacidade e Segurança → Rastreio → desativa "Permitir que as Apps Peçam para Rastrear".',
      'iOS: Definições → Privacidade e Segurança → Apple Advertising → desativa Anúncios Personalizados.',
      'Android: Definições → Privacidade → Anúncios → Eliminar ID de publicidade (ou reiniciá-lo).',
    ],
  },
  'prune-social-profiles': {
    title: 'Limpa os perfis públicos nas redes sociais',
    summary:
      'Torna publicações e perfis antigos privados; remove data de nascimento, telefone, morada e localização de qualquer coisa pública.',
    steps: [
      'Facebook: Definições → Privacidade → "Limitar Publicações Anteriores"; revê a secção Sobre campo a campo.',
      'Instagram/X: muda para privado se puderes; remove localização, contacto e data de nascimento da bio.',
      'LinkedIn: oculta ligações e informações de contacto a não-ligações.',
    ],
  },
  'bulk-delete-posts': {
    title: 'Elimina publicações antigas em massa',
    summary: 'Limpa publicações históricas com as ferramentas nativas de transferência e eliminação de cada plataforma.',
    steps: [
      'X: Definições → "Transferir um arquivo" primeiro, depois usa uma abordagem de eliminação em massa.',
      'Facebook: Registo de Atividade → filtra por ano → elimina ou arquiva em massa.',
      'Exporta sempre um arquivo para ti antes de apagar em massa.',
    ],
  },
  'unsubscribe-marketing': {
    title: 'Cancela subscrições de listas de marketing',
    summary:
      'Cancela subscrições de newsletters em massa. Reduz o rastro de dados contínuo e diminui o impacto da próxima fuga.',
    steps: [
      'Pesquisa "cancelar subscrição" na tua caixa de entrada e trabalha de cima para baixo.',
      'Prefere o link de cancelamento no email a marcar como spam (remoção mais limpa).',
      'Para remetentes que ignoram o pedido, este é um candidato a carta RGPD/CCPA mais tarde.',
    ],
  },
  'unlist-caller-id': {
    title: 'Remove o teu número das aplicações de identificação de chamadas',
    summary: 'Retira o teu número das bases de dados colaborativas de identificação de chamadas como o Truecaller e o Hiya.',
    urlLabel: 'Remoção no Truecaller',
  },
  'revoke-third-party-apps': {
    title: 'Audita e revoga acessos de aplicações de terceiros',
    summary:
      'Revê as aplicações ligadas às tuas contas Google/Apple/Facebook/Microsoft e revoga as que já não usas.',
    urlLabel: 'Ligações Google',
  },
  'enable-2fa': {
    title: 'Ativa a autenticação de dois fatores nas contas críticas',
    summary:
      'Ativa a autenticação de dois fatores por aplicação (não por SMS) no email, banco e gestor de palavras-passe. Os códigos por SMS podem ser roubados por SIM swapping.',
    steps: [
      'Usa uma aplicação autenticadora (Aegis, Ente Auth, ou o teu gestor de palavras-passe).',
      'Prioridade: email → gestor de palavras-passe → banco → redes sociais.',
      'Guarda os códigos de recuperação no teu gestor de palavras-passe, não em papel perto da secretária.',
    ],
  },
  'wipe-old-devices': {
    title: 'Apaga os dados antes de desfazeres de dispositivos',
    summary: 'Restaura as definições de fábrica e cifra telemóveis, portáteis e discos antes de os vender ou reciclar.',
    steps: [
      'Garante que a cifragem total do disco está ativa primeiro (torna o apagamento efetivamente irreversível).',
      'Termina sessão em todas as contas (especialmente Find My / bloqueio da conta Google) antes de reiniciar.',
      'Depois faz o reset de fábrica. Para discos rígidos convencionais, apagamento multi-passagem; SSDs usam o secure erase integrado.',
    ],
  },
  'optout-smartbackgroundchecks': {
    title: 'Pede exclusão do SmartBackgroundChecks',
    summary: 'Remoção rápida por formulário, sem ID necessário — outro site de pesquisa de pessoas que aparece em pesquisas de nomes.',
    urlLabel: 'Remover-me',
  },
  'ad-industry-optout': {
    title: 'Pede exclusão de anúncios com base em interesses (DAA/NAI)',
    summary:
      'Usa as ferramentas de autorregulação da indústria publicitária para excluir este navegador da publicidade comportamental numa só passagem. Baseado em cookies — repete após limpar cookies ou num navegador novo.',
    urlLabel: 'DAA WebChoices',
  },
  'optout-spokeo': {
    title: 'Pede exclusão do Spokeo',
    summary: 'Cola o URL do teu perfil e confirma por email.',
    urlLabel: 'Pedir exclusão',
  },
  'optout-whitepages': {
    title: 'Pede exclusão do Whitepages',
    summary: 'Envia um pedido de supressão; muitas vezes requer uma etapa de verificação por chamada telefónica. Aparece bem posicionado em pesquisas de nomes.',
    urlLabel: 'Pedido de supressão',
  },
  'optout-peopleconnect': {
    title: 'Pede exclusão da rede PeopleConnect',
    summary:
      'Um único pedido de supressão cobre o Intelius, BeenVerified, Instant Checkmate, TruthFinder e USSearch. A ação de maior alavancagem nos corretores.',
    urlLabel: 'Suprimir os 5',
  },
  'optout-radaris': {
    title: 'Pede exclusão do Radaris',
    summary: 'Reclama e remove o teu perfil; requer confirmação por email.',
    urlLabel: 'Controlar privacidade',
  },
  'optout-mylife': {
    title: 'Pede exclusão do MyLife',
    summary: 'Envia um pedido de privacidade/CCPA. O MyLife mantém perfis com "pontuação de reputação" persistentes e é notoriamente difícil de sair.',
    urlLabel: 'Pedido CCPA',
  },
  'optout-nuwber': {
    title: 'Pede exclusão do Nuwber',
    summary: 'Remoção por link e confirmação por email.',
    urlLabel: 'Remover-me',
  },
  'optout-thatsthem': {
    title: "Pede exclusão do That's Them",
    summary: 'Remoção simples por formulário.',
    urlLabel: 'Pedir exclusão',
  },
  'optout-peoplefinders': {
    title: 'Pede exclusão do PeopleFinders',
    summary: 'Formulário e confirmação por email.',
    urlLabel: 'Pedir exclusão',
  },
  'optout-familytreenow': {
    title: 'Pede exclusão do FamilyTreeNow',
    summary: 'Remove grafos surpreendentemente detalhados de moradas e familiares.',
    urlLabel: 'Pedir exclusão',
  },
  'optout-acxiom': {
    title: 'Pede exclusão do Acxiom',
    summary: 'Um dos maiores agregadores de dados de marketing — cortá-lo reduz o fornecimento a muitos corretores menores.',
    urlLabel: 'Pedir exclusão',
  },
  'optout-oracle': {
    title: 'Pede exclusão do Oracle Data Cloud',
    summary: 'Envia o pedido de exclusão da cloud de dados. A Oracle está a abandonar o negócio publicitário — verifica o processo atual.',
    urlLabel: 'Privacidade / exclusão',
  },
  'optout-epsilon': {
    title: 'Pede exclusão do Epsilon',
    summary: 'Exclusão do agregador de dados de marketing.',
    urlLabel: 'Pedir exclusão',
  },
  'optout-experian-marketing': {
    title: 'Pede exclusão do marketing da Experian',
    summary: 'Exclusão de marketing, separada do teu ficheiro de crédito.',
    urlLabel: 'Pedir exclusão',
  },
  'private-browser': {
    title: 'Muda para um navegador privado',
    summary: 'Adota o Firefox ou o Brave com proteção contra rastreio ativa por defeito.',
    urlLabel: 'Obter Firefox',
  },
  'tracker-blocker': {
    title: 'Adiciona um bloqueador de conteúdo/rastreadores',
    summary: 'Instala o uBlock Origin para bloquear anúncios e rastreadores em toda a web.',
    urlLabel: 'Obter uBlock Origin',
  },
  'private-search': {
    title: 'Muda o motor de pesquisa predefinido',
    summary: 'Passa para um motor de pesquisa sem rastreio como o DuckDuckGo, Startpage ou Brave Search.',
    urlLabel: 'Experimentar DuckDuckGo',
  },
  'email-aliases': {
    title: 'Começa a usar aliases de email',
    summary:
      'Usa um alias único por serviço para que uma fuga futura não consiga ligar as tuas contas — e podes cancelar qualquer alias que comece a receber spam.',
    urlLabel: 'Obter SimpleLogin',
  },
  'optout-prescreen': {
    title: 'Pede exclusão de ofertas de crédito pré-aprovadas nos EUA',
    summary: 'Para o envio de ofertas pré-aprovadas de crédito e seguros — são vendas em massa dos teus dados de cabeçalho de crédito.',
    urlLabel: 'Pedir exclusão (5 anos / permanente)',
  },
  'freeze-credit': {
    title: 'Congela o teu crédito',
    summary: 'Coloca um bloqueio de segurança nos três bureaus para impedir fraudes de novas contas. Gratuito nos EUA.',
    urlLabel: 'Congelamento Equifax',
    steps: [
      'Congela nos três: Equifax, Experian e TransUnion (cada um é separado).',
      'O congelamento impede a abertura de novo crédito em teu nome; "descongelas" temporariamente quando precisas de crédito.',
      'Não afeta a tua pontuação e é gratuito por lei.',
    ],
  },
  'disable-location-history': {
    title: 'Desativa o histórico de localização do telemóvel',
    summary: 'Desativa o Histórico de Localização do Google / Localizações Significativas do iOS e limpa o histórico guardado.',
    urlLabel: 'Controlos de atividade',
  },
  'schedule-broker-recheck': {
    title: 'Agenda uma reverificação de corretores',
    summary:
      'Os corretores voltam a listá-te em 3–6 meses. O Vanish regista quando cada exclusão precisa de ser repetida — esta ação confirma que te comprometes com o ciclo.',
  },
  'broker-letter': {
    title: 'Carta: elimina-me (sem formulário de exclusão)',
    summary:
      'Para corretores e empresas sem formulário de exclusão próprio, gera uma carta de eliminação RGPD/CCPA e envia-a tu mesmo.',
  },
  'optout-checkpeople': {
    title: 'Pede exclusão do CheckPeople',
    summary: 'Remoção por formulário para mais um agregador de pesquisa de pessoas.',
    urlLabel: 'Pedir exclusão',
  },
  'optout-dmachoice': {
    title: 'Pede exclusão de marketing por correio direto (DMAchoice)',
    summary:
      'Regista-te no serviço de preferências de correio da Data & Marketing Association para reduzir o correio postal indesejado. Uma pequena taxa única cobre um registo de vários anos.',
    urlLabel: 'DMAchoice',
  },
  'youronlinechoices': {
    title: 'Pede exclusão de anúncios com base em interesses na UE',
    summary:
      'Usa a ferramenta YourOnlineChoices da EDAA para excluir este navegador da publicidade comportamental nas redes participantes. Baseado em cookies — repete após limpar cookies.',
    urlLabel: 'Your Online Choices',
  },
  'encrypted-dns-devices': {
    title: 'Configura DNS cifrado em todos os dispositivos',
    summary:
      'Aponta o teu telemóvel e portátil para um servidor DNS cifrado e respeitador da privacidade, para que o teu fornecedor de internet não possa registar todos os sites que consultas.',
    steps: [
      'Escolhe um servidor sem registos: Quad9 (9.9.9.9) ou NextDNS.',
      'iOS/macOS: instala o perfil de configuração do fornecedor, ou define DNS-over-HTTPS nas Definições.',
      'Android 9+: Definições → Rede → DNS privado → introduz o nome do servidor do fornecedor.',
      'Complementa o DNS ao nível do router — os dispositivos mantêm-no quando estás fora da tua rede doméstica.',
    ],
    urlLabel: 'Quad9',
  },
  'harden-messaging-privacy': {
    title: 'Reforça as definições de privacidade das aplicações de mensagens',
    summary: 'Ativa os controlos de privacidade já integrados nas aplicações que usas — antes de migrar para outras.',
    steps: [
      'Ativa mensagens temporárias por defeito onde suportado (Signal, WhatsApp, Telegram).',
      'Oculta "visto por último", confirmações de leitura e foto de perfil a não-contactos.',
      'Bloqueia a aplicação com PIN/biometria e desativa pré-visualizações de mensagens no ecrã de bloqueio.',
      'Revê as definições de convite de grupo para que estranhos não te possam adicionar a grupos.',
    ],
  },
  'remove-outdated-google': {
    title: 'Remove páginas desatualizadas do Google',
    summary:
      'Quando uma página sobre ti foi alterada ou eliminada mas ainda mostra conteúdo antigo em cache na Pesquisa, pede ao Google que a atualize ou remova.',
    urlLabel: 'Remover conteúdo desatualizado',
  },
  'optout-es-listarobinson': {
    title: 'Regista-te na Lista Robinson',
    summary:
      'A lista oficial de exclusão de publicidade em Espanha (gerida pela Adigital). Uma vez registado, as empresas associadas não podem contactar-te por telefone, SMS, correio ou email para fins de marketing.',
    urlLabel: 'Lista Robinson',
  },
  'optout-it-rpo': {
    title: 'Regista-te no Registro Pubblico delle Opposizioni',
    summary:
      'O registo público de oposição italiano. Inscreve o teu número de telefone (e morada postal) para bloquear operadores obrigados a consultá-lo antes de te contactar para marketing.',
    urlLabel: 'Registro Opposizioni',
  },
  'optout-fr-bloctel': {
    title: 'Regista-te no Bloctel',
    summary:
      'O registo oficial francês contra chamadas não solicitadas. Os números listados não podem ser legalmente usados para marketing telefónico por empresas sem contrato contigo.',
    urlLabel: 'Bloctel',
  },
  'optout-de-robinsonliste': {
    title: 'Regista-te na Robinsonliste',
    summary:
      'A lista central de exclusão de publicidade alemã (gerida pela DDV). Reduz o correio postal de marketing endereçado, chamadas e emails de empresas participantes.',
    urlLabel: 'Robinsonliste (DDV)',
  },
  'optout-be-donotcallme': {
    title: 'Regista-te na lista Do Not Call Me',
    summary:
      'A lista oficial belga de não chamadas. Uma vez listado, o teu número não pode ser usado para marketing telefónico. O registo é feito por telefone.',
    urlLabel: 'Do Not Call Me',
  },
  'optout-pt-amd': {
    title: 'Inscreve-te na Lista de Oposição (AMD)',
    summary:
      'A lista de oposição de consumidores em Portugal. Inscreve-te para parar chamadas e correio de marketing direto de empresas vinculadas ao registo.',
    urlLabel: 'Lista de Oposição',
  },
  'optout-se-hitta': {
    title: 'Remove a tua página de contacto do Hitta.se',
    summary:
      'O princípio de registos públicos sueco torna a tua morada fácil de encontrar. Oculta a tua página de contacto no Hitta.se — a remoção é feita com BankID.',
    urlLabel: 'Remover-me',
  },
  'optout-se-ratsit': {
    title: 'Remove a tua listagem do Ratsit',
    summary: 'O Ratsit republica registos públicos suecos — morada, idade, finanças. Remove a tua listagem gratuita pública com BankID.',
    urlLabel: 'Ta bort',
  },
  'optout-se-mrkoll': {
    title: 'Oculta os teus dados no MrKoll',
    summary: 'O MrKoll republica registos públicos suecos. Oculta a tua morada e número de telefone — BankID obrigatório.',
    urlLabel: 'Ändra uppgifter',
  },
  'optout-de-dastelefonbuch': {
    title: 'Remove a tua entrada do DasTelefonbuch / DasÖrtliche',
    summary: 'Remove ou restringe a tua listagem nas principais listas telefónicas públicas alemãs (DasTelefonbuch, DasÖrtliche).',
    urlLabel: 'Gerir entrada',
  },
  'optout-at-ecg': {
    title: 'Adiciona-te à ECG-Liste',
    summary:
      'A lista de exclusão de marketing eletrónico da Áustria (gerida pela RTR). Registar o teu endereço exclui-te de emails e SMS de marketing não solicitado.',
    urlLabel: 'ECG-Liste',
  },
  'optout-dk-robinson': {
    title: 'Inscreve-te na Robinsonlisten',
    summary:
      'A lista oficial de proteção publicitária da Dinamarca, gerida pelo registo central de pessoas (CPR). Bloqueia correspondência publicitária endereçada e chamadas de marketing.',
    urlLabel: 'Robinsonlisten',
  },
  'optout-fi-kieltopalvelu': {
    title: 'Regista a proibição de marketing (ASML)',
    summary:
      'A exclusão Robinson da Finlândia, gerida pela associação de marketing ASML. Regista-te para parar o marketing direto por telefone e correio endereçado.',
    urlLabel: 'Kieltopalvelut',
  },
  'optout-hr-nezovi': {
    title: 'Regista-te no NE ZOVI',
    summary:
      'O registo oficial croata de não chamadas (gerido pelo regulador HAKOM). Gratuito — registas-te através do teu operador de telecomunicações para bloquear chamadas de marketing.',
    urlLabel: 'NE ZOVI',
  },
  'private-email-provider': {
    title: 'Migra para um fornecedor de email privado',
    summary: 'Muda a tua caixa de correio principal para o Proton ou o Tuta e começa a redirecionar e migrar as tuas contas.',
    urlLabel: 'Proton Mail',
  },
  'signal': {
    title: 'Muda as comunicações para o Signal',
    summary: 'Torna o Signal o teu serviço de mensagens principal e deixa gradualmente o SMS/WhatsApp para tudo o que seja sensível.',
    urlLabel: 'Obter Signal',
  },
  'hardware-keys': {
    title: 'Adiciona chaves de segurança de hardware',
    summary: 'Regista chaves FIDO2 (ex. YubiKey) no email, banco, gestor de palavras-passe e contas na nuvem.',
    steps: [
      'Compra duas chaves — uma principal, outra de reserva guardada num local seguro.',
      'Regista ambas em todas as contas críticas antes de remover métodos de 2FA mais fracos.',
      'As chaves de hardware são resistentes a phishing; são o segundo fator mais robusto disponível.',
    ],
  },
  'full-broker-sweep': {
    title: 'Varredura completa de corretores',
    summary: 'Percorre a lista completa de corretores de ponta a ponta, registando cada data de exclusão para que os temporizadores de reverificação sejam precisos.',
  },
  'e2ee-storage': {
    title: 'Muda para armazenamento na nuvem com cifra ponta a ponta',
    summary: 'Substitui o Drive/Dropbox por armazenamento cifrado de ponta a ponta para que o fornecedor não consiga ler os teus ficheiros.',
    urlLabel: 'Proton Drive',
  },
  'degoogle-services': {
    title: 'Elimina os serviços Google centrais',
    summary: 'Substitui o Maps, Docs e Photos por alternativas respeitadoras da privacidade.',
    steps: [
      'Maps → Organic Maps / OsmAnd. Docs → CryptPad / OnlyOffice. Photos → Ente / Immich.',
      'Migra um serviço de cada vez para não perderes acesso a nada importante.',
      'Exporta os teus dados do Google Takeout antes de eliminar qualquer coisa.',
    ],
    urlLabel: 'Alternativas (Privacy Guides)',
  },
  'masked-phone': {
    title: 'Usa um número de telefone mascarado/VoIP',
    summary: 'Fornece um número secundário para registos e mantém o teu número real privado.',
    steps: [
      'Opções: Google Voice (EUA), MySudo, ou um segundo SIM/eSIM barato.',
      'Usa o número mascarado para cartões de fidelização, registos e tudo o que não seja essencial.',
      'Reserva o teu número real para contactos de confiança e apenas como alternativa para 2FA.',
    ],
  },
  'masked-cards': {
    title: 'Usa cartões de pagamento virtuais/mascarados',
    summary: 'Números de cartão de uso único ou por comerciante quebram a ligação de dados de pagamento que os corretores compram.',
    steps: [
      'Opções: Privacy.com (EUA), cartões descartáveis Revolut, ou os cartões virtuais do teu banco.',
      'Cria um cartão único por comerciante; cancela qualquer um que vaze ou cobre em excesso.',
    ],
  },
  'strip-exif': {
    title: 'Remove metadados das fotos antes de as publicar',
    summary: 'Elimina dados EXIF/GPS das imagens que partilhas publicamente para que as fotos não revelem onde vives ou estavas.',
    steps: [
      'Muitas plataformas removem EXIF ao carregar — mas não todas, e não em partilhas de ficheiros originais.',
      'iOS: menu de partilha → Opções → desativa Localização. Android: usa uma aplicação de remoção de metadados.',
      'Computador: ExifTool, ou "Remover Propriedades" nas propriedades de ficheiro do Windows.',
    ],
  },
  'harden-router-dns': {
    title: 'Reforça o router doméstico e o DNS',
    summary: 'Altera a palavra-passe de administrador predefinida, ativa DNS cifrado e desativa UPnP/WPS.',
    steps: [
      'Altera imediatamente a palavra-passe de administrador do router da predefinição.',
      'Define DNS cifrado (DoH/DoT) — ex. Quad9 (9.9.9.9) ou NextDNS — para impedir que o teu fornecedor registe cada consulta.',
      'Desativa UPnP e WPS; mantém o firmware atualizado.',
    ],
  },
  'segment-iot': {
    title: 'Segmenta os dispositivos IoT na rede',
    summary: 'Coloca os dispositivos de casa inteligente numa rede de convidados ou VLAN para limitar o que conseguem ver e alcançar.',
  },
  'anti-fingerprint': {
    title: 'Bloqueia a identificação por impressão digital do navegador',
    summary: 'Usa definições anti-impressão digital para que os rastreadores não consigam identificar o teu navegador sem cookies.',
    steps: [
      'Firefox: define privacy.resistFingerprinting, ou usa o Mullvad Browser / Tor Browser para sessões sensíveis.',
      'Evita empilhar extensões exóticas — cada uma torna-te mais único, não menos.',
    ],
    urlLabel: 'Testa a tua impressão digital',
  },
  'retire-old-email': {
    title: 'Desativa e elimina a conta de email antiga',
    summary: 'Após migrar, atualiza os serviços restantes e depois elimina a caixa de entrada antiga para que não possa ser comprometida ou explorada.',
    steps: [
      'Redireciona a caixa antiga para a nova durante um período de transição (3–6 meses).',
      'Cada vez que chegar algo ao endereço antigo, atualiza esse serviço para o novo.',
      'Quando o tráfego diminuir, exporta e depois elimina a conta antiga.',
    ],
  },
  'gdpr-access-letter': {
    title: 'Envia pedidos de acesso RGPD (SAR)',
    summary: 'Obriga os grandes detentores de dados a revelar exatamente o que têm sobre ti — reconhecimento antes da eliminação.',
  },
  'optout-lexisnexis': {
    title: 'Pede exclusão do LexisNexis',
    summary: 'Agregador FCRA de alto valor que alimenta verificações de antecedentes; pode exigir prova de identidade.',
    urlLabel: 'Pedir exclusão',
  },
  'broker-registry': {
    title: 'Pede exclusão através de registos de corretores de dados',
    summary: 'Usa os registos estaduais de corretores (Califórnia, Vermont) para encontrar e excluir corretores que não tenham sido identificados.',
    urlLabel: 'Registo CA de corretores',
  },
  'maps-contributions': {
    title: 'Remove a morada das contribuições no Maps',
    summary: 'Elimina avaliações, fotos e etiquetas que revelem silenciosamente a tua casa ou local de trabalho.',
    urlLabel: 'Atividade no Maps',
  },
  'cross-app-tracking-off': {
    title: 'Desativa o rastreio entre aplicações em todo o lado',
    summary: 'iOS App Tracking Transparency desativado, ID de publicidade Android desativado, localização por aplicação definida como "nunca/perguntar".',
  },
  'optout-eu-brokers': {
    title: 'Pede exclusão de corretores da UE',
    summary: 'Residentes UE/UK: envia pedidos de exclusão mais cartas RGPD Art.17 a corretores que operam na UE (Acxiom, Criteo, Experian UK).',
    urlLabel: 'Acxiom (global)',
  },
  'optout-criteo': {
    title: 'Pede exclusão do Criteo',
    summary: 'Pede exclusão do perfil de retargeting publicitário do Criteo — uma das maiores redes de publicidade comportamental na UE.',
    urlLabel: 'Privacidade / exclusão',
  },
  'optout-192': {
    title: 'Pede exclusão do 192.com',
    summary:
      'Remove a tua listagem do principal site de pesquisa de pessoas do Reino Unido. Muito dos seus dados provém do registo eleitoral aberto — pede também a exclusão deste junto do teu conselho local.',
    urlLabel: 'Remover os meus dados',
  },
  'optout-experian-uk': {
    title: 'Pede exclusão do marketing da Experian UK',
    summary: 'Usa o portal de dados da Experian UK para controlar o uso dos teus dados para marketing, separado do teu ficheiro de crédito.',
    urlLabel: 'Portal de dados',
  },
  'google-rtbf-delisting': {
    title: 'Pede deslistagem na pesquisa UE/UK (direito ao esquecimento)',
    summary:
      'Os residentes UE/UK podem pedir ao Google que remova URLs específicos sobre eles dos resultados de pesquisa por nome. Remove o link da Pesquisa, não a página subjacente.',
    urlLabel: 'Formulário de pedido RTBF',
  },
  'disable-os-telemetry': {
    title: 'Reduz a telemetria do sistema operativo no Windows e macOS',
    summary: 'Diminui os dados de diagnóstico e publicidade que o teu sistema operativo envia por defeito.',
    steps: [
      'Windows: Definições → Privacidade e segurança → Diagnósticos e feedback → define como Necessário apenas; desativa o ID de publicidade e experiências personalizadas.',
      'macOS: Definições → Privacidade e Segurança → Análise e Melhorias → desativa Partilhar Análise; Apple Advertising → desativa Anúncios Personalizados.',
      'Revê as permissões por aplicação para câmara, microfone e localização enquanto estás aqui.',
    ],
  },
  'private-mailing-address': {
    title: 'Estabelece uma morada postal privada',
    summary:
      'Usa uma morada de reencaminhamento/CMRA e para de fornecer a tua morada real para entregas e registos. Quebra a ligação pública nome↔morada.',
    steps: [
      'Opções: uma agência de receção de correio comercial (CMRA), uma caixa postal virtual, ou uma caixa de correio postal.',
      'Atualiza a tua morada nas contas gradualmente, começando pelas de maior exposição.',
      'Nunca introduzas a tua morada real num formulário de registo novamente.',
    ],
  },
  'optout-electoral-register': {
    title: 'Pede exclusão do recenseamento eleitoral/registo de eleitores aberto',
    summary:
      'Remove-te do recenseamento eleitoral vendido publicamente (registo aberto do Reino Unido) ou das vendas de dados de eleitores (EUA, por estado).',
    steps: [
      'UK: contacta o teu conselho local para pedir exclusão do registo eleitoral "aberto" (ficas no registo completo para votar).',
      'EUA: as regras do recenseamento de eleitores variam por estado; alguns permitem estatuto confidencial/oculto, especialmente para sobreviventes.',
    ],
  },
  'suppress-public-records': {
    title: 'Suprime a morada nos registos públicos',
    summary:
      'Usa programas de confidencialidade de morada ou redação de registos de propriedade onde és elegível (especialmente útil para sobreviventes de violência doméstica).',
    steps: [
      'EUA: a maioria dos estados tem um Programa de Confidencialidade de Morada (ACP) para sobreviventes de stalking/abuso.',
      'Registos de propriedade: alguns municípios permitem a redação para indivíduos em risco — pergunta ao cartório.',
      'Isto é específico de cada jurisdição; uma organização local de apoio às vítimas pode ajudar-te a apresentar o pedido.',
    ],
  },
  'compartmentalize-identities': {
    title: 'Compartimenta identidades',
    summary: 'Separa email, telefone e cartão por contexto de vida (trabalho / pessoal / compras / finanças) para que nenhuma fuga mapeie toda a tua vida.',
  },
  'degoogled-phone': {
    title: 'Muda para um telemóvel sem Google (GrapheneOS)',
    summary: 'Usa no dia a dia um sistema operativo reforçado sem os serviços Google integrados.',
    urlLabel: 'GrapheneOS',
  },
  'always-vpn-tor': {
    title: 'VPN sempre ativa / Tor para uso sensível',
    summary: 'Encaminha a navegação sensível por uma VPN sem registos de confiança (ex. Mullvad) ou pelo Tor.',
    urlLabel: 'Mullvad VPN',
  },
  'burner-devices': {
    title: 'Dispositivos descartáveis/secundários para viagens',
    summary: 'Usa dispositivos com dados mínimos ao cruzar fronteiras e em contextos de maior risco.',
  },
  'trust-llc-home': {
    title: 'Usa um trust/LLC para casa e património',
    summary:
      'Quebra a ligação pública nome↔morada nos registos de propriedade colocando os ativos num trust ou LLC. Consulta um profissional — isto não constitui aconselhamento jurídico.',
  },
  'quarterly-reremoval': {
    title: 'Campanha de remoção trimestral',
    summary: 'Repete a varredura completa de corretores a cada trimestre e regista as datas. A remoção é um hábito, não uma ação única.',
  },
  'threat-model-review': {
    title: 'Revisão trimestral do modelo de ameaça',
    summary:
      'Reavalia de quem te estás a proteger e ajusta. Usa a estrutura Surveillance Self-Defense da EFF.',
    urlLabel: 'Plano EFF SSD',
  },
  'remove-osint-aggregators': {
    title: 'Remove-te de sites de pesquisa de fugas/OSINT',
    summary: 'Pede remoção de sites de pesquisa de fugas e agregação OSINT onde possível.',
  },
  'scrub-org-sites': {
    title: 'Remove-te de sites de antigos empregadores/organizações',
    summary: 'Pede a remoção de bios, páginas de pessoal e menções na imprensa que exponham os teus dados. Usa uma carta se fores ignorado.',
  },
  'optout-court-arrest-records': {
    title: 'Suprime agregadores de registos judiciais e de detenção',
    summary:
      'Sites que republica fotos de detidos, registos de detenção e processos judiciais são uma exposição de grande impacto mesmo quando as acusações foram retiradas. Pede remoção a cada um; alguns exigem ID ou decisão judicial.',
    steps: [
      'Lista os sites que mostram os teus registos (a partir do teu levantamento de nomes do Nível 1).',
      'Usa a página de remoção de cada site; para sites de fotos de detidos, nunca pagues uma "taxa de remoção" — isso financia o esquema. Cita leis estaduais anti-mugshot onde existam.',
      'Para portais judiciais oficiais, pergunta ao escrivão sobre selamento/expungement — a única solução duradoura.',
      'Se um site te ignorar, escala com uma carta de eliminação RGPD/CCPA.',
    ],
  },
  'optout-gb-open-register': {
    title: 'Pede exclusão do registo eleitoral aberto do Reino Unido',
    summary:
      'O registo "aberto" é vendido a profissionais de marketing e sites de pesquisa de pessoas. Pede exclusão junto do teu conselho local — ficas no registo completo para votar e verificações de crédito.',
    urlLabel: 'Como pedir exclusão',
  },
  'optout-ie-edited-register': {
    title: 'Passa para o registo eleitoral editado da Irlanda',
    summary:
      'O registo completo da Irlanda pode ser usado para fins não eleitorais; o registo editado não é vendido para marketing. Escolhe o registo editado quando te registas ou atualizas os teus dados.',
    urlLabel: 'Verificar o registo',
  },
  'es-asnef': {
    title: 'Verifica o teu ficheiro de crédito ASNEF (Equifax Iberia)',
    summary:
      'O ASNEF (gerido pela Equifax) é o principal ficheiro de incumprimento/crédito de Espanha — contas fraudulentas por pagar abertas em teu nome aparecem aqui. Espanha não tem um "congelamento" preventivo, por isso ler o ficheiro é a forma de detetar fraude.',
    steps: [
      'No site da Equifax, encontra "derecho de acceso" (direito de acesso) e envia um pedido com uma cópia do teu DNI.',
      'Devem responder no prazo de um mês, gratuitamente.',
      'Verifica se existe alguma conta ou dívida que não reconheças — esse é o sinal de fraude.',
      'Repete cerca de uma vez por ano, e após qualquer notificação de fuga.',
    ],
    urlLabel: 'Equifax — consumidores',
  },
  'es-cirbe': {
    title: 'Solicita o teu relatório CIRBE (Banco de España)',
    summary:
      'O CIRBE é o registo central de crédito do Banco de España — lista todos os empréstimos/créditos registados sob o teu ID. A forma mais direta de detetar crédito contraído em teu nome.',
    steps: [
      'Acede à Sede Electrónica do Banco de España → CIRBE → pede o teu relatório.',
      'Identifica-te com certificado digital ou Cl@ve (ou pede por correio / presencialmente com o teu DNI).',
      'Gratuito e geralmente imediato online.',
      'Verifica se há algum empréstimo que não tenhas contraído.',
    ],
    urlLabel: 'Banco de España (sede)',
  },
  'uk-cifas-pr': {
    title: 'Adiciona o Registo de Proteção Cifas (Reino Unido)',
    summary:
      "O equivalente mais próximo de um congelamento de crédito no Reino Unido: um sinalizador no teu ficheiro que diz aos credores para fazerem verificações de identidade adicionais antes de abrirem crédito em teu nome. Pago (~£30 por dois anos), vale a pena se estiveres em maior risco.",
    steps: [
      'Candidata-te no site do Cifas ao Registo de Proteção.',
      'Os credores veem então o sinalizador e têm de tomar medidas extra para verificar que és realmente tu.',
      'Espera que as tuas próprias candidaturas de crédito demorem mais enquanto estiver ativo — esse é o objetivo.',
    ],
    urlLabel: 'Cifas',
  },
  'pihole': {
    title: 'Bloqueia rastreadores em toda a rede com o Pi-hole',
    summary:
      'Um Pi-hole envia para o vazio os domínios de rastreadores e anúncios de todos os dispositivos da tua rede — telemóveis, televisões, tudo — ao nível DNS, antes de se ligarem. Uma caixa, cobertura de toda a casa.',
    steps: [
      'Instala o Pi-hole num Raspberry Pi ou em qualquer máquina Linux sempre ligada.',
      'Aponta o DNS do teu router para ele de forma a que todos os dispositivos fiquem cobertos automaticamente.',
      'Adiciona listas de bloqueio; revê o registo de consultas para ver a que serviços os teus dispositivos se estavam a ligar.',
    ],
    urlLabel: 'Pi-hole',
  },
  'code-word': {
    title: 'Define uma "palavra-código" familiar contra burlas de clonagem de voz',
    summary:
      'A IA consegue clonar uma voz a partir de segundos de áudio e simular uma chamada desesperada de "sou eu, envia dinheiro". Uma palavra-código familiar partilhada que só vós conheceis derrota-a instantaneamente — barato e uma das coisas de maior alavancagem que podes fazer.',
    steps: [
      'Combina uma palavra ou frase com a família próxima que um estranho não conseguiria adivinhar.',
      'Regra: qualquer pedido urgente de dinheiro/segredo por chamada ou mensagem deve incluí-la, ou é tratado como falso.',
      'Nunca guardes ou envies a palavra digitalmente onde possa vazar.',
    ],
    internalLabel: '🔑 Define a tua palavra-código',
  },
  'dont-pay-removers': {
    title: 'Não pagues um serviço de remoção de corretores',
    summary:
      'Os serviços pagos (DeleteMe, Incogni…) limpam apenas uma pequena fatia de corretores, inflacionam as contagens de "listagens removidas", e cobram para sempre — e muitas das avaliações brilhantes são patrocinadas. As exclusões pelas quais cobram são as gratuitas nesta aplicação.',
    steps: [
      'Faz tu mesmo as exclusões gratuitas de corretores no nível de Corretores — os mesmos corretores, sem subscrição.',
      'Os dados do bureau de crédito e dados de marketing inferidos na sua maioria não podem ser eliminados por estes serviços de qualquer forma.',
      'Se valorizas a conveniência, tudo bem — apenas sabe o que estás realmente a comprar.',
    ],
  },
  'poison-profile': {
    title: 'Contamina, não elimines — dilui o teu perfil',
    summary:
      'Os corretores e plataformas voltam a listar e a reconstruir, por isso a eliminação é uma esteira rolante. Adicionar ruído plausível às tuas próprias contas de baixo risco degrada a confiança de qualquer pessoa em quais dados são os reais. O Kit Isco gera o ruído.',
    steps: [
      'Usa apenas contas que são tuas; aposta no banal e genérico, não numa pessoa falsa convincente.',
      'Nunca te faças passar por ninguém, escrevas avaliações falsas, ou inscreves outras pessoas.',
      'Abre o Kit Isco para variantes de nome e bios de preenchimento que podes colar.',
    ],
    internalLabel: '⬡ Abrir Kit Isco',
  },
  'vary-writing-style': {
    title: 'Varia o teu estilo de escrita entre identidades',
    summary:
      'A estilometria pode ligar as tuas contas pela forma como escreves — frases favoritas, pontuação, hábitos de emoji — mesmo sem nome ou IP partilhados. Se mantiveres identidades separadas, escreve-as de forma diferente.',
    steps: [
      'Escolhe hábitos deliberadamente diferentes por identidade: comprimento de frases, pontuação, maiúsculas, uso de emoji.',
      'Evita frases-assinatura e expressões recorrentes entre contas.',
      'Para situações de maior risco, rascunha, depois reescreve noutra voz antes de publicar.',
    ],
  },
  'behavioral-fingerprint': {
    title: 'Conhece a tua impressão digital comportamental',
    summary:
      'Além dos cookies, os sites perfilam como te comportas — ritmo de escrita, velocidade de deslocamento, até o acelerómetro do telemóvel. Não consegues eliminá-la totalmente, mas os navegadores anti-impressão digital e perfis separados atenuam-na.',
    steps: [
      'Usa um navegador que resista à impressão digital (Tor Browser, ou Brave com proteção de impressão digital ativa).',
      'Mantém perfis de navegador/dispositivos separados para identidades distintas para que o comportamento não possa ser correlacionado.',
      'Desativa o acesso a sensores de movimento para sites que não precisem disso.',
    ],
  },
  'recognize-phishing': {
    title: 'Reconhecer e evitar phishing',
    summary:
      'A maioria das tomadas de conta começa com um email ou mensagem convincente, não com um ataque informático. Aprende os sinais para que uma página de login falsa nunca te roube a palavra-passe.',
    steps: [
      'Trata qualquer mensagem não solicitada de "verifica a tua conta" / "atividade suspeita" como suspeita — os bancos e plataformas nunca pedem a tua palavra-passe por email.',
      'Nunca entres através de um link numa mensagem. Abre o site tu mesmo a partir de um marcador ou digitando o endereço.',
      'Verifica o endereço real do remetente e passa o rato sobre os links para veres para onde vão antes de clicar.',
      'Deixa o gestor de palavras-passe ser o teu verificador: se não preencher automaticamente, o domínio provavelmente está errado.',
      'Sempre que possível usa uma chave de segurança de hardware — é imune a phishing mesmo que sejas enganado.',
    ],
    urlLabel: 'EFF: evitar phishing',
  },
  'iphone-lockdown-mode': {
    title: 'Ativar o Lockdown Mode no iPhone/Mac',
    summary:
      'O Lockdown Mode da Apple remove as funcionalidades raramente usadas que os spywares mercenários exploram. Para pessoas em risco elevado, reduz significativamente a superfície de ataque.',
    steps: [
      'Atualiza primeiro para a versão mais recente do iOS/iPadOS/macOS.',
      'Abre as Definições → Privacidade e Segurança → Lockdown Mode (no fundo da lista).',
      'Ativa e reinicia. Aplica-se em todos os teus dispositivos Apple com sessão iniciada na mesma conta.',
      'Espera que alguns links, anexos e funcionalidades web fiquem limitados — é a proteção a funcionar.',
    ],
    urlLabel: 'Apple: Lockdown Mode',
  },
  'verify-signal-safety-numbers': {
    title: 'Verificar os números de segurança do Signal',
    summary:
      'A encriptação ponta a ponta só te protege se estiveres a falar com a pessoa real. Verificar o número de segurança descarta a possibilidade de um ataque man-in-the-middle.',
    steps: [
      'Abre uma conversa no Signal → toca no nome do contacto → Ver Número de Segurança.',
      'Pessoalmente, leiam mutuamente os códigos QR; à distância, comparem o número por um canal de confiança separado.',
      'Toca em "Marcar como verificado" quando coincidirem.',
      'Se o número de segurança mudar inesperadamente, confirma o motivo antes de enviares algo sensível.',
    ],
    urlLabel: 'Signal: números de segurança',
  },
  'detect-bluetooth-trackers': {
    title: 'Detetar rastreadores Bluetooth ocultos',
    summary:
      'Os AirTags e rastreadores do tipo Tile são ferramentas baratas de stalking. Os telemóveis já conseguem alertar-te para um rastreador desconhecido que viaja contigo — certifica-te de que a deteção está ativa e sabe como fazer uma pesquisa.',
    steps: [
      'iPhone: mantém o Bluetooth e a Localização ativos; o iOS alerta-te para um AirTag/rastreador Find My desconhecido em movimento contigo. Toca no alerta para o fazer emitir som.',
      'Android: os alertas de rastreadores desconhecidos estão integrados (Definições → Segurança e emergência → Alertas de rastreadores desconhecidos), ou instala o "Tracker Detect" da Apple para pesquisar manualmente.',
      'Se encontrares um rastreador que não é teu, podes desativá-lo removendo a bateria — mas se sentires que estás em perigo, preserva-o e contacta primeiro o apoio local ou as autoridades.',
    ],
    urlLabel: 'Apple: rastreamento indesejado',
  },
}
