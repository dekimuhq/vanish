import type { Dict } from './en'

export const pt: Dict = {
  // App chrome / nav
  'app.name': 'Vanish',
  'app.tagline': 'desaparecer, um nível de cada vez',
  'offline.badge': '⬡ 100% offline',
  'offline.title': 'Nenhum pedido de rede sai do teu dispositivo',
  'nav.dashboard': 'Painel',
  'nav.plan': 'A Escada',
  'nav.brokers': 'Corretores',
  'nav.letters': 'Cartas',
  'nav.panic': 'Pânico',
  'nav.settings': 'Definições',

  // Common
  'common.back': '← Voltar',
  'common.next': 'Seguinte →',
  'common.cancel': 'Cancelar',

  // Country group labels (select optgroups)
  'countryGroup.eu': 'União Europeia',
  'countryGroup.uk': 'Reino Unido',
  'countryGroup.us': 'Estados Unidos',
  'countryGroup.other': 'Outro país',

  // Tiers
  'tier.tidy.name': 'Arrumar',
  'tier.tidy.tagline': 'Pouco esforço, grande alívio',
  'tier.tidy.who': 'Toda a gente. Os 20 minutos que qualquer pessoa devia dedicar.',
  'tier.reduce.name': 'Reduzir',
  'tier.reduce.tagline': 'Diminui a tua pegada digital',
  'tier.reduce.who': "Tens curiosidade pela privacidade e queres distância real da Big Tech e dos corretores de dados.",
  'tier.lockdown.name': 'Blindar',
  'tier.lockdown.tagline': 'Reforça tudo',
  'tier.lockdown.who': 'Queres ser genuinamente difícil de rastrear, perfilar ou doxar.',
  'tier.ghost.name': 'Fantasma',
  'tier.ghost.tagline': 'Desaparece',
  'tier.ghost.who': 'Ativistas, sobreviventes, pessoas visadas. Separação máxima entre o teu nome e a tua vida.',

  // Categories
  'category.accounts': 'Contas',
  'category.data-brokers': 'Corretores de Dados',
  'category.devices': 'Dispositivos',
  'category.browser': 'Navegador',
  'category.social': 'Redes Sociais',
  'category.search': 'Pesquisa',
  'category.messaging': 'Mensagens',
  'category.email': 'Email',
  'category.finance': 'Finanças',
  'category.network': 'Rede',
  'category.legal': 'Alavancas Legais',

  // Score labels + ring
  'score.wideOpen': 'Totalmente exposto',
  'score.exposed': 'Exposto',
  'score.guarded': 'Protegido',
  'score.ghosting': 'Fantasma',
  'score.ariaLabel': 'Pontuação de privacidade {score} de 100',

  // Effort / impact pills
  'pills.effort.low': 'Fácil',
  'pills.effort.med': 'Moderado',
  'pills.effort.high': 'Exigente',
  'pills.effortTitle': 'Quanto esforço isto requer',
  'pills.impact.low': 'Impacto baixo',
  'pills.impact.med': 'Impacto sólido',
  'pills.impact.high': 'Impacto alto',

  // Adversaries (onboarding concern → adversary phrase)
  'adversary.stalking': 'uma pessoa específica que te tenta encontrar',
  'adversary.bigtech': 'perfilagem da Big Tech e redes de publicidade',
  'adversary.brokers': 'corretores de dados que vendem o teu perfil',
  'adversary.breaches': 'fugas de dados e roubo de contas',
  'adversary.recruiters': 'pesquisas casuais — pretendentes, recrutadores',
  'adversary.spam': 'spammers e listas de correio indesejado',

  // Onboarding
  'onboarding.subtitle': 'Desaparece da internet, um nível de cada vez.',
  'onboarding.bullet1': 'Funciona 100% no teu dispositivo. Sem conta, sem servidores, sem rastreio.',
  'onboarding.bullet2': 'Uma escada guiada de ações de remoção reais, desde arrumar até desaparecer por completo.',
  'onboarding.bullet3': 'Gera cartas de eliminação RGPD/CCPA que envias tu mesmo.',
  'onboarding.privacyNote': 'Três perguntas rápidas para personalizar o teu plano. As tuas respostas nunca saem deste dispositivo.',
  'onboarding.start': 'Começar →',
  'onboarding.step1.title': 'Onde estás?',
  'onboarding.step1.hint': 'Define quais os corretores e direitos legais aplicáveis — e identifica a tua autoridade de proteção de dados nas cartas.',
  'onboarding.selectCountry': 'Seleciona o teu país…',
  'onboarding.authority': 'A tua autoridade de supervisão:',
  'onboarding.step2.title': 'O que te preocupa mais?',
  'onboarding.step2.hint': 'Escolhe o que quiseres. Mostramos primeiro as ações mais relevantes.',
  'onboarding.concern.recruiters': 'Pessoas a pesquisar-me no Google (pretendentes, recrutadores)',
  'onboarding.concern.brokers': 'Corretores de dados a vender as minhas informações',
  'onboarding.concern.bigtech': 'Perfilagem da Big Tech e publicidade',
  'onboarding.concern.breaches': 'Fugas de dados e roubo de contas',
  'onboarding.concern.stalking': 'Uma pessoa específica a tentar encontrar-me',
  'onboarding.concern.spam': 'Chamadas spam, SMS e correio indesejado',
  'onboarding.step3.title': 'Até onde queres chegar?',
  'onboarding.step3.hint': 'Um objetivo, não uma prisão — podes subir ainda mais a qualquer momento.',
  'onboarding.adversaryLead': 'Com base nas tuas preocupações, o teu principal adversário é {adversary}.',
  'onboarding.rationale':
    "A tua maior preocupação — {adversary} — aponta para {tier}. Ajusta o esforço a quem realmente te estás a esconder; ir além do teu modelo de ameaça custa comodidade sem benefício real.",
  'onboarding.useRecommended': 'Usar o recomendado: T{tier} · {name}',
  'onboarding.build': 'Criar o meu plano →',
  'onboarding.restore': 'Estás a regressar? Restaura uma cópia de segurança',
  'onboarding.restoreCta': 'Escolher ficheiro .vanish',
  'onboarding.restoreErr': 'Frase-passe errada ou não é uma cópia de segurança do Vanish.',
  'onboarding.restorePass': 'Frase-passe da cópia de segurança',

  // Dashboard
  'dashboard.title': 'A tua pontuação de privacidade',
  'dashboard.actionsDone': '{done} de {total} ações concluídas · objetivo',
  'dashboard.encouragement.danger':
    'Estás totalmente exposto agora — mas as primeiras ações são as de maior impacto e levam minutos. Começa pelo topo.',
  'dashboard.encouragement.warn':
    'Bom começo. Fechaste as lacunas mais fáceis; o próximo nível é onde começa a distância real de corretores e da Big Tech.',
  'dashboard.encouragement.ok':
    'Agora és genuinamente difícil de rastrear. Mantém as reverificações e revê o teu modelo de ameaça trimestralmente.',
  'dashboard.openLadder': 'Abrir a escada →',
  'dashboard.printPlan': '🖨 Imprimir o meu plano',
  'dashboard.rechecksDue.one': '↻ {count} reverificação em atraso',
  'dashboard.rechecksDue.other': '↻ {count} reverificações em atraso',
  'dashboard.streak': '🔥 Sequência de {count} dias',
  'dashboard.doneThisWeek': '{count} concluídas esta semana',
  'dashboard.rechecksHeading': '↻ Reverificações em atraso',
  'dashboard.rechecksBody': 'Os corretores de dados voltam a listá-te após alguns meses. Estas exclusões precisam de ser feitas novamente:',
  'dashboard.overdue': 'em atraso',
  'dashboard.recommendedNext': 'Recomendado a seguir',
  'dashboard.seeAll': 'Ver tudo',
  'dashboard.allDone': '🎉 Todas as ações relevantes estão concluídas ou ignoradas. Estás fantasma — mantém as reverificações.',

  // Plan / The Ladder
  'plan.title': 'A Escada',
  'plan.subtitle': 'Sobe ao teu ritmo. Escolhe as ações de maior impacto de qualquer nível — a privacidade é pessoal.',
  'plan.results.one': '{count} resultado para "{query}"',
  'plan.results.other': '{count} resultados para "{query}"',
  'plan.allTiers': 'Todos os níveis',
  'plan.allCategories': 'Todas as categorias',
  'plan.hideCompleted': 'Ocultar concluídas',
  'plan.searchPlaceholder': 'Pesquisar todas as ações… (ex. "Spokeo", "2FA", "email")',
  'plan.filterByCategory': 'Filtrar por categoria',
  'plan.searchAria': 'Pesquisar ações',

  // Brokers
  'brokers.title': 'Lista Negra de Corretores de Dados',
  'brokers.subtitle':
    'Os corretores são quem coloca a tua morada e telefone nos resultados de pesquisa de estranhos. Começa pelos que não exigem ID, depois passa aos agregadores que alimentam todos os outros.',
  'brokers.cleared': '{done}/{total} eliminados.',
  'brokers.dueToRedo.one': '↻ {count} a rever.',
  'brokers.dueToRedo.other': '↻ {count} a rever.',
  'brokers.relistBody':
    'Os corretores voltam a listá-te silenciosamente após 3–6 meses — é por isso que os serviços cobram mensalmente. O Vanish apenas te lembra de repetir a exclusão gratuita.',
  'brokers.honestLabel': '⚠️ A verdade honesta:',
  'brokers.honestBody':
    'as exclusões reduzem a tua exposição, mas não garantem invisibilidade permanente. Os links mudam e os dados reaparecem. Trata isto como um hábito recorrente, não uma correção única — e nunca pagues uma "garantia de remoção".',

  // Letters (chrome only — generated letter body/subject stay English)
  'letters.title': 'Forja de Cartas',
  'letters.subtitle':
    'Gera um pedido de eliminação ou acesso com enquadramento legal. É criado inteiramente no teu dispositivo com os dados abaixo — nada é enviado por ti. Tu copias ou envias por email tu mesmo.',
  'letters.authorityLabel': 'A tua autoridade de supervisão ({flag} {name}):',
  'letters.authorityNote': 'Mencionada na carta — escala aqui se fores ignorado.',
  'letters.noAuthority': 'Define o teu país nas Definições para indicar a tua autoridade de supervisão nesta carta.',
  'letters.recipientOrg': 'Organização destinatária',
  'letters.orgPlaceholder': 'ex. Spokeo, Inc.',
  'letters.recipientEmail': 'Email do destinatário (opcional)',
  'letters.yourDetails': 'Os teus dados — guardados apenas neste dispositivo, usados para preencher a carta',
  'letters.fullName': 'Nome completo',
  'letters.namePlaceholder': 'O teu nome completo',
  'letters.email': 'Email',
  'letters.postalAddress': 'Morada postal',
  'letters.addressPlaceholder': 'Para corretores que só aceitam correio postal',
  'letters.subject': 'Assunto:',
  'letters.copy': '⧉ Copiar texto',
  'letters.copied': '✓ Copiado',
  'letters.download': '↓ Transferir .txt',
  'letters.openEmail': '✉️ Abrir no email',
  'letters.disclaimerPre': '⚖️ Modelo para conveniência, ',
  'letters.disclaimerStrong': 'não constitui aconselhamento jurídico',
  'letters.disclaimerPost': '. Verifica o destinatário correto e os teus direitos locais antes de enviar.',
  'letters.status.drafted': 'Rascunho',
  'letters.status.escalated': 'Escalada',
  'letters.status.resolved': 'Resolvida',
  'letters.status.responded': 'Respondida',
  'letters.status.sent': 'A aguardar resposta',
  'letters.trackedConfirm': '✓ Em acompanhamento',
  'letters.tracked.copied': '✓ Copiado',
  'letters.tracked.copyEscalation': '⧉ Copiar reclamação',
  'letters.tracked.daysLeft': '{days} dias até ao prazo de resposta',
  'letters.tracked.delete': 'Remover',
  'letters.tracked.empty': 'As cartas que acompanhas aparecem aqui com uma contagem decrescente até ao prazo.',
  'letters.tracked.escalate': 'Escalar para {authority}',
  'letters.tracked.overdue': 'Em atraso há {days} dias',
  'letters.tracked.resolved': 'Marcar como resolvida',
  'letters.tracked.responded': 'Marcar como respondida',
  'letters.tracked.sentOn': 'Enviada a {date}',
  'letters.tracked.title': 'As minhas cartas',
  'letters.trackThis': '+ Acompanhar esta como enviada',

  // Panic
  'panic.title': '🆘 Modo Pânico',
  'panic.intro':
    'Se alguém está ativamente a tentar encontrar-te, assediar-te ou doxar-te, faz estas ações por esta ordem. São os passos de maior alavancagem para romper a ligação entre o teu nome e a tua localização, os mais rápidos primeiro.',
  'panic.danger': 'Se estiveres em perigo imediato, contacta primeiro os serviços de emergência locais.',
  'panic.resources':
    'Recursos para sobreviventes: a APAV e a UMAR podem ajudar com medidas de proteção e supressão de dados públicos. Em muitos países existem equivalentes. Uma organização local de apoio às vítimas pode ajudar-te a apresentar pedidos de supressão de registos públicos.',
  'panic.doNow': 'Faz agora',
  'panic.doneCount': '{done}/{total} feitas',

  // Report / Disappearance Plan
  'report.title': 'O Teu Plano de Desaparecimento',
  'report.subtitle': 'Uma lista de verificação imprimível do que falta. Guarda como PDF ou imprime.',
  'report.print': '🖨 Imprimir / Guardar como PDF',
  'report.costNote':
    'O Vanish aumenta o custo de te encontrarem. Contra um adversário determinado e com recursos, nada é absoluto — e o que normalmente trai as pessoas raramente é a tecnologia, é a falta de consistência e o ego (um nome de utilizador reutilizado, um deslize). Ajusta o esforço a quem realmente te estás a esconder.',
  'report.docTitle': 'Vanish — Plano de Desaparecimento',
  'report.meta': 'Gerado em {date} · objetivo {tier} · região {region}',
  'report.privacyScore': 'pontuação de privacidade',
  'report.tierHeading': 'Nível {tier} · {name} — {count} por fazer',
  'report.allDone': 'Nada por fazer — todas as ações relevantes estão concluídas ou ignoradas. Mantém as reverificações.',
  'report.footer':
    'Criado com o Vanish — um coach de privacidade totalmente offline. Os links de exclusão mudam; verifica antes de agir. Não constitui aconselhamento jurídico.',

  // Backup nudge
  'nudge.backup': 'O teu progresso vive apenas neste navegador. Faz uma cópia de segurança para que apagar os teus dados não o elimine.',
  'nudge.backupCta': 'Fazer cópia de segurança agora',
  'nudge.dismiss': 'Mais tarde',

  // Settings
  'settings.title': 'Definições',
  'settings.language': 'Idioma',
  'settings.languageHint': 'Altera todos os ecrãs. Guardado apenas neste dispositivo.',
  'settings.yourPlan': 'O teu plano',
  'settings.country': 'País',
  'settings.notSet': 'Não definido',
  'settings.supervisoryAuthority': 'Autoridade de supervisão:',
  'settings.region': 'Região: {region}',
  'settings.targetTier': 'Nível objetivo',
  'settings.codeWordTitle': '🔑 Palavra-código familiar',
  'settings.codeWordBody':
    'Uma palavra partilhada que derrota as burlas de clonagem de voz por IA do tipo "sou eu, envia dinheiro". Combina-a com a família próxima e fica guardada apenas neste dispositivo — nunca enviada para lado nenhum.',
  'settings.codeWordPlaceholder': 'ex. pinguim azul',
  'settings.printCard': '🖨 Imprimir um cartão de bolso',
  'settings.codeWordRule':
    'Regra: qualquer pedido urgente de dinheiro ou segredo deve incluir esta palavra, ou trata-o como falso. Nunca envies a palavra por mensagem ou email.',
  'settings.cardDocTitle': 'Vanish — palavra-código',
  'settings.cardLabel': 'Palavra-código familiar',
  'settings.cardNote':
    'Qualquer pedido urgente de dinheiro ou segredo deve incluir esta palavra, ou trata-o como falso. Não envies a palavra por SMS ou email.',
  'settings.backupTitle': 'Cópia de segurança e transferência',
  'settings.backupBody':
    'Sem conta significa sem sincronização na nuvem — por design. Exporta um ficheiro JSON cifrado por ti para transferir o teu plano para outro dispositivo. O ficheiro contém o teu progresso e os dados que introduziste para as cartas.',
  'settings.export': '↓ Exportar plano',
  'settings.import': '↑ Importar plano',
  'settings.importOk': '✓ Plano importado.',
  'settings.importErr': '✗ Não foi possível ler esse ficheiro.',
  'settings.encBackupTitle': 'Cópia de segurança cifrada',
  'settings.encBackupBody': 'Apagar os dados do teu navegador elimina tudo o que está aqui — por design. A única cópia que sobrevive é um ficheiro que guardas. Esta cópia de segurança é cifrada com uma frase-passe, por isso o próprio ficheiro não constitui uma fuga de privacidade. Guarda a frase-passe num local seguro; não a conseguimos recuperar.',
  'settings.exportEncrypted': '↓ Guardar cópia de segurança cifrada (.vanish)',
  'settings.importEncrypted': '↥ Restaurar cópia de segurança cifrada',
  'settings.passphrase': 'Frase-passe da cópia de segurança',
  'settings.passphrasePlaceholder': 'Uma frase-passe que só tu conheces',
  'settings.passphraseRequired': 'Introduz primeiro uma frase-passe.',
  'settings.backupErr': 'A cópia de segurança falhou.',
  'settings.backupSaved': '✓ Cópia de segurança guardada',
  'settings.wipeTitle': 'Apagar tudo',
  'settings.wipeBody':
    'Elimina todo o progresso e dados pessoais deste dispositivo. Esta ação não pode ser desfeita. (Não há nada num servidor para apagar — nunca houve.)',
  'settings.wipeBtn': 'Apagar todos os dados locais',
  'settings.wipeConfirm': 'Tens a certeza? Isto elimina tudo.',
  'settings.wipeYes': 'Sim, apagar',
  'settings.dataTitle': 'Como o Vanish trata os teus dados',
  'settings.dataBullet1': 'Tudo fica no armazenamento local deste navegador. Nada é enviado, nunca.',
  'settings.dataBullet2':
    "A Política de Segurança de Conteúdo da página bloqueia todos os pedidos de rede de terceiros — verificável nas ferramentas de desenvolvimento do teu navegador.",
  'settings.dataBullet3': 'Sem análises, sem cookies, sem conta, sem telemetria — verifica nas ferramentas de desenvolvimento do teu navegador.',
  'settings.dataBullet4':
    'Os links para páginas de exclusão abrem num novo separador — esses são os únicos "pedidos de rede", e és tu quem inicia cada um.',

  // Decoy Kit
  'decoy.title': '⬡ Kit Isco',
  'decoy.subtitle':
    'Contamina, não elimines. Os corretores e plataformas voltam a listar e a reconstruir, por isso adicionar ruído banal às tuas contas de baixo risco supera a perseguição de eliminações. Este kit funciona inteiramente no teu dispositivo.',
  'decoy.responsibly': 'Usa-o com responsabilidade',
  'decoy.do': 'Faz',
  'decoy.never': 'Nunca',
  'decoy.rulesDo': [
    'Usa apenas em contas que são TUAS.',
    'Usa em perfis descartáveis de baixo risco, nunca em nada ligado a dinheiro ou identidade.',
    'Aposta no banal e genérico — ruído, não uma pessoa falsa convincente.',
  ],
  'decoy.rulesDont': [
    'Nunca te faças passar por uma pessoa real e identificada.',
    'Nunca escrevas avaliações ou classificações falsas.',
    'Nunca inscreves outra pessoa, nem uses os dados de ninguém.',
    "Nunca uses isto para fugir a um credor, a um tribunal ou às autoridades.",
  ],
  'decoy.nameVariants': 'Variantes do nome',
  'decoy.noVariants': 'Sem variantes para um nome de uma só palavra — adiciona um apelido nas Definições para gerar mais.',
  'decoy.addNamePre': 'Adiciona o teu nome em ',
  'decoy.addNameLink': 'Definições',
  'decoy.addNamePost': ' para gerar grafias alternativas a espalhar por perfis descartáveis.',
  'decoy.fillerBio': 'Bio de preenchimento',
  'decoy.regenerate': '↻ Regenerar',
  'decoy.copyBio': '⧉ Copiar bio',
  'decoy.copied': '✓ Copiado',
  'decoy.footer':
    'Genérico por design — o objetivo é ruído estatístico, não uma pessoa falsa convincente. Cola nos teus perfis de baixo risco.',
  'decoy.interests': [
    'plantas de interior', 'ciclismo', 'fazer pão de fermentação natural', 'observação de aves', 'jogos de tabuleiro',
    'caminhadas', 'fotografia analógica', 'jazz', 'olaria', 'palavras cruzadas',
    'jardinagem', 'corrida', 'culinária', 'astronomia', 'mergulho em água fria',
    'xadrez', 'tricô', 'viagens de carro', 'café', 'concertos ao vivo',
  ],
  'decoy.bioTemplate': 'Por aqui por causa de {list}. Simpatia acima de tudo. Opiniões minhas.',
  'decoy.bioAnd': 'e',

  // Action card
  'actionCard.markDone': 'Marcar "{title}" como feito',
  'actionCard.markNotDone': 'Marcar "{title}" como não feito',
  'actionCard.open': 'Abrir',
  'actionCard.recheckEvery': '↻ reverificar a cada {days}d',
  'actionCard.recheckTitle': 'Os corretores voltam a listá-te; repete periodicamente',
  'actionCard.searchCurrent': '🔎 Pesquisar página atual',
  'actionCard.linkDead': 'link inativo?',
  'actionCard.linkDeadTitle': 'Os URLs de exclusão mudam com frequência',
  'actionCard.generateLetter': '✍️ Gerar carta',
  'actionCard.openTool': 'Abrir ferramenta',
  'actionCard.howTo': 'Como fazer',
  'actionCard.hideSteps': 'Ocultar passos',
  'actionCard.notRelevant': 'Não é relevante',
  'actionCard.restore': 'Restaurar',
  'actionCard.verified': 'Verificado a {date}',
  'actionCard.verifiedTitle': 'Quando esta ação e o respetivo link foram verificados pela última vez. Reporta um link inativo se tiver mudado.',

  // EFF SSD: scenario playlists
  'nav.scenarios': 'Cenários',
  'scenarios.title': 'Começa pela tua situação',
  'scenarios.lead':
    'Percursos organizados para situações específicas. Cada um é uma ordem escolhida a dedo pelas ações que já tens — começa pelo topo.',
  'scenarios.notFound': 'Esse cenário não existe.',
  'scenario.survivor.title': 'Sobrevivente de stalking ou abuso',
  'scenario.survivor.intro':
    'Separar a tua localização e dados de contacto do teu nome, e descartar rastreadores ocultos. Se estiveres em perigo imediato, contacta primeiro os serviços de apoio locais.',
  'scenario.job-seeker.title': 'Limpar a pegada antes de uma procura de emprego',
  'scenario.job-seeker.intro':
    'O que um recrutador ou responsável de contratação encontra ao pesquisar o teu nome — e como arrumar isso antes de procurarem.',
  'scenario.activist.title': 'Ativista / a participar num protesto',
  'scenario.activist.intro':
    'Reforçar o teu telemóvel e as comunicações antes e durante uma organização ou manifestação.',
  'scenario.journalist.title': 'Jornalista a proteger fontes',
  'scenario.journalist.intro':
    'Comunicação confidencial e manter separadas as identidades profissional e pessoal.',
  'scenario.breach.title': 'Após uma fuga de dados',
  'scenario.breach.intro':
    'Estiveste numa fuga (ou suspeitas disso). Contém os danos e fecha a porta atrás de ti.',

  // EFF SSD: learn primers
  'nav.learn': 'Aprender',
  'learn.title': 'Percebe o porquê',
  'learn.lead':
    'Introduções curtas em linguagem simples sobre o que está por trás das ações. Para o guia completo, cada uma tem um link para o Surveillance Self-Defense da EFF.',
  'learn.related': 'Ações relacionadas',
  'learn.readMore': 'Guia completo',
  'learn.notFound': 'Esse tema não existe.',
  'learn.threat-model.title': 'O que é um modelo de ameaça?',
  'learn.threat-model.body': [
    'Um modelo de ameaça são apenas cinco perguntas honestas: o que queres proteger, de quem o queres proteger, qual é a probabilidade de precisares de o fazer, quão graves são as consequências se falhares, e quanto trabalho estás disposto a fazer para o evitar?',
    'Não existe um nível de privacidade universalmente certo. Ajustar o esforço às pessoas de quem realmente te preocupas é o essencial — ir além do que a tua situação exige troca comodidade real por nenhuma segurança real.',
  ],
  'learn.metadata.title': 'O que os metadados revelam',
  'learn.metadata.body': [
    'Os metadados são os dados sobre os teus dados: quando foi tirada uma fotografia, em que telemóvel, e muitas vezes as coordenadas GPS exatas. Os metadados de uma mensagem — quem, quando, com que frequência — podem ser tão reveladores como as palavras em si.',
    'Nem sempre consegues controlar os metadados que os serviços guardam, mas podes parar de os distribuir: remove os dados de localização e de dispositivo das fotos antes de as publicares.',
  ],
  'learn.encryption.title': 'O que é a encriptação ponta a ponta',
  'learn.encryption.body': [
    'A encriptação ponta a ponta (E2EE) significa que apenas tu e a pessoa com quem estás a falar conseguem ler as mensagens — nem o criador da aplicação, nem a rede, nem ninguém que as intercete em trânsito.',
    'É a diferença entre um postal e uma carta selada. Usa ferramentas E2EE para tudo o que seja sensível, e lembra-te de que protege o conteúdo, mas não necessariamente os metadados à sua volta.',
  ],
  'learn.phishing.title': 'Como funciona o phishing',
  'learn.phishing.body': [
    'O phishing engana-te para entregares uma palavra-passe ou código, normalmente com uma mensagem urgente e um link para uma página de login falsa. É assim que a maioria das tomadas de conta começa — sem necessidade de hacking.',
    'As defesas são hábitos, não ferramentas: nunca entres através de um link numa mensagem, verifica o remetente, e confia num gestor de palavras-passe (que não preenche automaticamente no domínio errado) e em chaves de hardware (que são imunes a phishing).',
  ],
  'learn.data-brokers.title': 'O que são os corretores de dados',
  'learn.data-brokers.body': [
    'Os corretores de dados compram, raspam e revendem perfis teus — nome, morada, familiares, números de telefone — a anunciantes, recrutadores e a quem pagar. Os sites de pesquisa de pessoas são a montra pública desta indústria.',
    'A exclusão funciona, mas não é permanente: os corretores voltam a adquirir e a listar-te a partir de registos públicos novos, por isso a remoção é um hábito com prazo, não uma correção única.',
  ],
  'learn.vpn.title': 'O que uma VPN faz e não faz',
  'learn.vpn.body': [
    'Uma VPN esconde a tua navegação à tua rede e ao teu fornecedor de internet, e o teu endereço IP aos sites que visitas — útil em redes Wi-Fi não fidedignas ou para evitar que um único ISP perfile tudo o que fazes.',
    'Não te torna anónimo: estás agora a confiar no fornecedor de VPN em vez disso, e não impede que os sites te rastreiem depois de iniciares sessão. Para um anonimato forte, o Tor é a melhor ferramenta.',
  ],
  'learn.key-verification.title': 'Porque verificar chaves',
  'learn.key-verification.body': [
    'A encriptação pressupõe que estás a falar com a pessoa real. Um ataque man-in-the-middle funciona ao sentar-se entre vós e a substituir as chaves — continuarias a ver um cadeado fechado.',
    'Verificar um número de segurança (pessoalmente por QR, ou por um canal de confiança separado) confirma que não há nenhum impostor no meio. Faz-o uma vez para os teus contactos mais sensíveis.',
  ],
} satisfies Dict
