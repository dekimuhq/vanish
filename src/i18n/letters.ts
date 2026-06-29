import type { Lang } from './langs'
import type { LetterTemplate, Profile } from '../lib/types'

// Localized GDPR/CCPA letter bodies. The English canonical lives in
// `lib/letters.ts`; this overlay translates the subject + body for every other
// supported language. A missing language or template falls back to English so a
// gap never breaks letter generation. Article / civil-code references are
// language-neutral and stay identical across translations.

export interface LocalizedLetter {
  subject: string
  body: (p: Profile, org: string, authority?: string) => string
}

export type LetterSet = Record<LetterTemplate, LocalizedLetter>

/** Signature block: filled profile fields, each falling back to a localized
 *  placeholder. Mirrors `sig()` in lib/letters.ts. */
function sig(p: Profile, ph: readonly [string, string, string]): string {
  return [p.name || ph[0], p.email || ph[1], p.address || ph[2]].filter(Boolean).join('\n')
}

const fr: LetterSet = (() => {
  const ph = ['[Votre nom complet]', '[Votre e-mail]', '[Votre adresse postale]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `À défaut de réponse dans le délai légal, ou en cas de refus de cette demande sans motif légitime, je me réserve le droit d'introduire une réclamation auprès de ${
      a || 'mon autorité de contrôle'
    } et d'exercer toute autre voie de recours dont je dispose.`
  return {
    'gdpr-erasure': {
      subject: "Demande d'effacement de données personnelles au titre de l'article 17 du RGPD",
      body: (p, org, a) => `À l'attention du Délégué à la protection des données / Service Confidentialité de ${org || '[Organisation]'},

J'exerce par la présente mon droit à l'effacement au titre de l'article 17 du Règlement général sur la protection des données (RGPD).

Je vous demande d'effacer, sans délai injustifié, toutes les données personnelles que vous détenez à mon sujet, y compris, sans s'y limiter : nom, coordonnées, identifiants, données comportementales et de profilage, ainsi que toute donnée obtenue auprès de tiers ou de courtiers en données.

Je suis la personne concernée. Mes éléments d'identification sont :
${sig(p, ph)}

Veuillez également :
1. Confirmer par écrit une fois l'effacement effectué.
2. Informer de cette demande d'effacement tout destinataire ou tiers auquel mes données ont été communiquées, conformément à l'article 19 du RGPD.
3. Cesser tout traitement ultérieur de mes données personnelles, sauf obligation légale de conservation — auquel cas, veuillez préciser la base légale exacte et la durée de conservation.

Conformément à l'article 12(3) du RGPD, vous devez répondre dans un délai d'un mois à compter de la réception. Si vous ne détenez aucune donnée me concernant, veuillez le confirmer expressément.

${esc(a)}

Veuillez agréer mes salutations distinguées,
${name(p)}`,
    },
    'gdpr-access': {
      subject: "Demande d'accès aux données au titre de l'article 15 du RGPD",
      body: (p, org, a) => `À l'attention du Délégué à la protection des données / Service Confidentialité de ${org || '[Organisation]'},

J'exerce mon droit d'accès au titre de l'article 15 du RGPD. Veuillez me fournir :

1. La confirmation que vous traitez ou non des données personnelles me concernant.
2. Une copie de toutes les données personnelles que vous détenez à mon sujet.
3. Les finalités du traitement.
4. Les catégories de données personnelles concernées.
5. Les destinataires ou catégories de destinataires auxquels les données ont été ou seront communiquées.
6. La source des données, lorsqu'elles n'ont pas été collectées directement auprès de moi.
7. L'existence d'une prise de décision automatisée ou d'un profilage, et des informations utiles sur la logique sous-jacente.

Mes éléments d'identification sont :
${sig(p, ph)}

Veuillez fournir ces informations dans un délai d'un mois, gratuitement, dans un format électronique d'usage courant, conformément aux articles 12 et 15 du RGPD.

${esc(a)}

Veuillez agréer mes salutations distinguées,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: "Demande de suppression et d'opposition à la vente/au partage des informations personnelles",
      body: (p, org) => `À l'attention du Service Confidentialité de ${org || '[Organisation]'},

Je suis résident(e) de Californie et j'exerce mes droits au titre du California Consumer Privacy Act, tel que modifié par le CPRA.

1. SUPPRESSION (Cal. Civ. Code §1798.105) : Veuillez supprimer toutes les informations personnelles que vous avez collectées à mon sujet et demander à vos prestataires et sous-traitants de faire de même.

2. OPPOSITION (Cal. Civ. Code §1798.120 et §1798.121) : Veuillez cesser de vendre et de partager mes informations personnelles, et cesser d'utiliser toute information personnelle sensible à des fins non autorisées.

3. Veuillez confirmer par écrit que la demande a été traitée et indiquer les catégories d'informations personnelles supprimées.

Mes éléments d'identification (utilisés uniquement pour localiser et vérifier mes données) sont :
${sig(p, ph)}

Veuillez répondre dans un délai de 45 jours, conformément au §1798.130. Ne m'obligez pas à créer un compte pour exercer ces droits.

Cordialement,
${name(p)}`,
    },
  }
})()

const de: LetterSet = (() => {
  const ph = ['[Ihr vollständiger Name]', '[Ihre E-Mail-Adresse]', '[Ihre Postanschrift]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `Sollten Sie nicht innerhalb der gesetzlichen Frist antworten oder diesen Antrag ohne gültige rechtliche Grundlage ablehnen, behalte ich mir vor, eine Beschwerde bei ${
      a || 'meiner Aufsichtsbehörde'
    } einzureichen und alle weiteren mir zustehenden Rechtsmittel auszuschöpfen.`
  return {
    'gdpr-erasure': {
      subject: 'Antrag auf Löschung personenbezogener Daten gemäß Artikel 17 DSGVO',
      body: (p, org, a) => `An den Datenschutzbeauftragten / das Datenschutzteam von ${org || '[Organisation]'},

hiermit übe ich mein Recht auf Löschung gemäß Artikel 17 der Datenschutz-Grundverordnung (DSGVO) aus.

Ich fordere Sie auf, ohne unangemessene Verzögerung alle personenbezogenen Daten zu löschen, die Sie über mich gespeichert haben, einschließlich, aber nicht beschränkt auf: Name, Kontaktdaten, Kennungen, Verhaltens- und Profilingdaten sowie alle von Dritten oder Datenhändlern bezogenen Daten.

Ich bin die betroffene Person. Meine Identifikationsangaben lauten:
${sig(p, ph)}

Bitte außerdem:
1. Bestätigen Sie schriftlich, sobald die Löschung abgeschlossen ist.
2. Unterrichten Sie gemäß Artikel 19 DSGVO alle Empfänger oder Dritten, denen meine Daten offengelegt wurden, über diesen Löschungsantrag.
3. Stellen Sie jede weitere Verarbeitung meiner personenbezogenen Daten ein, soweit Sie nicht gesetzlich zur Aufbewahrung verpflichtet sind — in diesem Fall geben Sie bitte die genaue Rechtsgrundlage und Aufbewahrungsfrist an.

Gemäß Artikel 12(3) DSGVO müssen Sie innerhalb eines Monats nach Eingang antworten. Sollten Sie keine Daten über mich gespeichert haben, bestätigen Sie dies bitte ausdrücklich.

${esc(a)}

Mit freundlichen Grüßen,
${name(p)}`,
    },
    'gdpr-access': {
      subject: 'Auskunftsersuchen gemäß Artikel 15 DSGVO',
      body: (p, org, a) => `An den Datenschutzbeauftragten / das Datenschutzteam von ${org || '[Organisation]'},

hiermit übe ich mein Auskunftsrecht gemäß Artikel 15 DSGVO aus. Bitte stellen Sie mir Folgendes bereit:

1. Bestätigung, ob Sie personenbezogene Daten über mich verarbeiten.
2. Eine Kopie aller personenbezogenen Daten, die Sie über mich gespeichert haben.
3. Die Zwecke der Verarbeitung.
4. Die Kategorien der betroffenen personenbezogenen Daten.
5. Die Empfänger oder Kategorien von Empfängern, denen die Daten offengelegt wurden oder werden.
6. Die Herkunft der Daten, sofern sie nicht direkt bei mir erhoben wurden.
7. Das Bestehen einer automatisierten Entscheidungsfindung oder eines Profilings sowie aussagekräftige Informationen über die involvierte Logik.

Meine Identifikationsangaben lauten:
${sig(p, ph)}

Bitte stellen Sie diese Informationen innerhalb eines Monats, kostenfrei und in einem gängigen elektronischen Format bereit, wie in den Artikeln 12 und 15 DSGVO vorgesehen.

${esc(a)}

Mit freundlichen Grüßen,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: 'Antrag auf Löschung und Widerspruch gegen Verkauf/Weitergabe personenbezogener Daten',
      body: (p, org) => `An das Datenschutzteam von ${org || '[Organisation]'},

ich bin in Kalifornien wohnhaft und übe meine Rechte gemäß dem California Consumer Privacy Act in der durch den CPRA geänderten Fassung aus.

1. LÖSCHUNG (Cal. Civ. Code §1798.105): Bitte löschen Sie alle personenbezogenen Informationen, die Sie über mich erhoben haben, und weisen Sie alle Dienstleister und Auftragnehmer an, dasselbe zu tun.

2. WIDERSPRUCH (Cal. Civ. Code §1798.120 & §1798.121): Bitte stellen Sie den Verkauf und die Weitergabe meiner personenbezogenen Informationen ein und verwenden Sie keine sensiblen personenbezogenen Informationen für unzulässige Zwecke.

3. Bitte bestätigen Sie den Abschluss schriftlich und legen Sie die Kategorien der gelöschten personenbezogenen Informationen offen.

Meine Identifikationsangaben (ausschließlich zum Auffinden und Verifizieren meiner Daten) lauten:
${sig(p, ph)}

Bitte antworten Sie innerhalb von 45 Tagen gemäß §1798.130. Verlangen Sie nicht, dass ich ein Konto erstelle, um diese Rechte auszuüben.

Mit freundlichen Grüßen,
${name(p)}`,
    },
  }
})()

const es: LetterSet = (() => {
  const ph = ['[Su nombre completo]', '[Su correo electrónico]', '[Su dirección postal]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `Si no responde dentro del plazo legal, o rechaza esta solicitud sin causa legítima, me reservo el derecho a presentar una reclamación ante ${
      a || 'mi autoridad de control'
    } y a ejercer cualquier otra vía de recurso a mi disposición.`
  return {
    'gdpr-erasure': {
      subject: 'Solicitud de supresión de datos personales conforme al artículo 17 del RGPD',
      body: (p, org, a) => `A la atención del Delegado de Protección de Datos / Equipo de Privacidad de ${org || '[Organización]'},

Por la presente ejerzo mi derecho de supresión conforme al artículo 17 del Reglamento General de Protección de Datos (RGPD).

Solicito que suprima, sin dilación indebida, todos los datos personales que conserve sobre mí, incluidos, entre otros: nombre, datos de contacto, identificadores, datos de comportamiento y de elaboración de perfiles, y cualquier dato obtenido de terceros o de intermediarios de datos.

Soy el interesado. Mis datos identificativos son:
${sig(p, ph)}

Asimismo, le ruego que:
1. Confirme por escrito una vez completada la supresión.
2. Comunique esta solicitud de supresión a cualquier destinatario o tercero al que se hayan revelado mis datos, conforme al artículo 19 del RGPD.
3. Cese todo tratamiento ulterior de mis datos personales, salvo que esté legalmente obligado a conservarlos — en cuyo caso, indique la base jurídica exacta y el plazo de conservación.

Conforme al artículo 12(3) del RGPD, debe responder en el plazo de un mes desde la recepción. Si no conserva ningún dato sobre mí, le ruego que lo confirme expresamente.

${esc(a)}

Atentamente,
${name(p)}`,
    },
    'gdpr-access': {
      subject: 'Solicitud de acceso conforme al artículo 15 del RGPD',
      body: (p, org, a) => `A la atención del Delegado de Protección de Datos / Equipo de Privacidad de ${org || '[Organización]'},

Ejerzo mi derecho de acceso conforme al artículo 15 del RGPD. Le ruego que me facilite:

1. La confirmación de si trata datos personales que me conciernen.
2. Una copia de todos los datos personales que conserve sobre mí.
3. Los fines del tratamiento.
4. Las categorías de datos personales afectadas.
5. Los destinatarios o categorías de destinatarios a quienes se hayan comunicado o vayan a comunicarse los datos.
6. El origen de los datos, cuando no se hayan obtenido directamente de mí.
7. La existencia de decisiones automatizadas o elaboración de perfiles, e información significativa sobre la lógica aplicada.

Mis datos identificativos son:
${sig(p, ph)}

Le ruego que facilite esta información en el plazo de un mes, de forma gratuita y en un formato electrónico de uso común, conforme a los artículos 12 y 15 del RGPD.

${esc(a)}

Atentamente,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: 'Solicitud de eliminación y de exclusión de la venta/cesión de información personal',
      body: (p, org) => `A la atención del Equipo de Privacidad de ${org || '[Organización]'},

Soy residente de California y ejerzo mis derechos conforme a la California Consumer Privacy Act, en su versión modificada por la CPRA.

1. ELIMINACIÓN (Cal. Civ. Code §1798.105): Le ruego que elimine toda la información personal que haya recopilado sobre mí e indique a sus proveedores de servicios y contratistas que hagan lo mismo.

2. EXCLUSIÓN (Cal. Civ. Code §1798.120 y §1798.121): Le ruego que deje de vender y ceder mi información personal, y deje de usar cualquier información personal sensible para fines no permitidos.

3. Le ruego que confirme por escrito que se ha completado y comunique las categorías de información personal eliminadas.

Mis datos identificativos (utilizados únicamente para localizar y verificar mis registros) son:
${sig(p, ph)}

Le ruego que responda en un plazo de 45 días, conforme al §1798.130. No me exija crear una cuenta para ejercer estos derechos.

Atentamente,
${name(p)}`,
    },
  }
})()

const it: LetterSet = (() => {
  const ph = ['[Il tuo nome completo]', '[La tua e-mail]', '[Il tuo indirizzo postale]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `In caso di mancata risposta entro il termine di legge, o di rifiuto della presente richiesta senza valido motivo, mi riservo il diritto di proporre reclamo a ${
      a || 'la mia autorità di controllo'
    } e di esperire ogni ulteriore rimedio giuridico a mia disposizione.`
  return {
    'gdpr-erasure': {
      subject: 'Richiesta di cancellazione dei dati personali ai sensi dell\'articolo 17 del GDPR',
      body: (p, org, a) => `Al Responsabile della protezione dei dati / Ufficio Privacy di ${org || '[Organizzazione]'},

con la presente esercito il mio diritto alla cancellazione ai sensi dell'articolo 17 del Regolamento generale sulla protezione dei dati (GDPR).

Chiedo che cancelliate, senza ingiustificato ritardo, tutti i dati personali che detenete sul mio conto, inclusi a titolo esemplificativo: nome, recapiti, identificativi, dati comportamentali e di profilazione, nonché qualsiasi dato ottenuto da terzi o da intermediari di dati.

Sono l'interessato. I miei dati identificativi sono:
${sig(p, ph)}

Vi chiedo inoltre di:
1. Confermare per iscritto una volta completata la cancellazione.
2. Informare di questa richiesta di cancellazione ogni destinatario o terzo a cui i miei dati sono stati comunicati, ai sensi dell'articolo 19 del GDPR.
3. Cessare ogni ulteriore trattamento dei miei dati personali, salvo obbligo di legge di conservazione — nel qual caso vi prego di specificare l'esatta base giuridica e il periodo di conservazione.

Ai sensi dell'articolo 12(3) del GDPR siete tenuti a rispondere entro un mese dal ricevimento. Se non detenete alcun dato sul mio conto, vi prego di confermarlo espressamente.

${esc(a)}

Distinti saluti,
${name(p)}`,
    },
    'gdpr-access': {
      subject: 'Richiesta di accesso ai sensi dell\'articolo 15 del GDPR',
      body: (p, org, a) => `Al Responsabile della protezione dei dati / Ufficio Privacy di ${org || '[Organizzazione]'},

esercito il mio diritto di accesso ai sensi dell'articolo 15 del GDPR. Vi chiedo di fornirmi:

1. La conferma se trattate dati personali che mi riguardano.
2. Una copia di tutti i dati personali che detenete sul mio conto.
3. Le finalità del trattamento.
4. Le categorie di dati personali interessate.
5. I destinatari o le categorie di destinatari a cui i dati sono stati o saranno comunicati.
6. L'origine dei dati, qualora non siano stati raccolti direttamente presso di me.
7. L'esistenza di un processo decisionale automatizzato o di profilazione e informazioni significative sulla logica utilizzata.

I miei dati identificativi sono:
${sig(p, ph)}

Vi chiedo di fornire queste informazioni entro un mese, gratuitamente e in un formato elettronico di uso comune, come previsto dagli articoli 12 e 15 del GDPR.

${esc(a)}

Distinti saluti,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: 'Richiesta di cancellazione e di opposizione alla vendita/condivisione delle informazioni personali',
      body: (p, org) => `All'Ufficio Privacy di ${org || '[Organizzazione]'},

sono residente in California ed esercito i miei diritti ai sensi del California Consumer Privacy Act, come modificato dal CPRA.

1. CANCELLAZIONE (Cal. Civ. Code §1798.105): Vi chiedo di cancellare tutte le informazioni personali che avete raccolto sul mio conto e di chiedere ai vostri fornitori di servizi e appaltatori di fare altrettanto.

2. OPPOSIZIONE (Cal. Civ. Code §1798.120 e §1798.121): Vi chiedo di cessare la vendita e la condivisione delle mie informazioni personali e di cessare l'uso di qualsiasi informazione personale sensibile per finalità non consentite.

3. Vi chiedo di confermare per iscritto l'avvenuta esecuzione e di indicare le categorie di informazioni personali cancellate.

I miei dati identificativi (usati esclusivamente per individuare e verificare i miei dati) sono:
${sig(p, ph)}

Vi chiedo di rispondere entro 45 giorni, come previsto dal §1798.130. Non richiedetemi di creare un account per esercitare questi diritti.

Cordiali saluti,
${name(p)}`,
    },
  }
})()

const pt: LetterSet = (() => {
  const ph = ['[O seu nome completo]', '[O seu e-mail]', '[A sua morada postal]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `Caso não responda dentro do prazo legal, ou recuse este pedido sem fundamento legítimo, reservo-me o direito de apresentar uma reclamação junto de ${
      a || 'a minha autoridade de controlo'
    } e de recorrer a qualquer outra via legal ao meu dispor.`
  return {
    'gdpr-erasure': {
      subject: 'Pedido de apagamento de dados pessoais ao abrigo do artigo 17.º do RGPD',
      body: (p, org, a) => `Ao Encarregado da Proteção de Dados / Equipa de Privacidade de ${org || '[Organização]'},

venho por este meio exercer o meu direito ao apagamento ao abrigo do artigo 17.º do Regulamento Geral sobre a Proteção de Dados (RGPD).

Solicito que apague, sem demora injustificada, todos os dados pessoais que detém sobre mim, incluindo, entre outros: nome, contactos, identificadores, dados comportamentais e de definição de perfis, e quaisquer dados obtidos de terceiros ou de intermediários de dados.

Sou o titular dos dados. Os meus dados de identificação são:
${sig(p, ph)}

Solicito ainda que:
1. Confirme por escrito após concluído o apagamento.
2. Informe deste pedido de apagamento qualquer destinatário ou terceiro a quem os meus dados tenham sido divulgados, nos termos do artigo 19.º do RGPD.
3. Cesse qualquer tratamento posterior dos meus dados pessoais, salvo obrigação legal de conservação — caso em que solicito que indique a base jurídica exata e o prazo de conservação.

Nos termos do artigo 12.º, n.º 3, do RGPD, deve responder no prazo de um mês a contar da receção. Se não detiver quaisquer dados sobre mim, solicito que o confirme expressamente.

${esc(a)}

Com os melhores cumprimentos,
${name(p)}`,
    },
    'gdpr-access': {
      subject: 'Pedido de acesso ao abrigo do artigo 15.º do RGPD',
      body: (p, org, a) => `Ao Encarregado da Proteção de Dados / Equipa de Privacidade de ${org || '[Organização]'},

exerço o meu direito de acesso ao abrigo do artigo 15.º do RGPD. Solicito que me faculte:

1. A confirmação de que trata, ou não, dados pessoais que me dizem respeito.
2. Uma cópia de todos os dados pessoais que detém sobre mim.
3. As finalidades do tratamento.
4. As categorias de dados pessoais em causa.
5. Os destinatários ou categorias de destinatários a quem os dados foram ou serão divulgados.
6. A origem dos dados, quando não tenham sido recolhidos diretamente junto de mim.
7. A existência de decisões automatizadas ou de definição de perfis, e informação útil sobre a lógica subjacente.

Os meus dados de identificação são:
${sig(p, ph)}

Solicito que faculte esta informação no prazo de um mês, gratuitamente e num formato eletrónico de uso corrente, conforme exigido pelos artigos 12.º e 15.º do RGPD.

${esc(a)}

Com os melhores cumprimentos,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: 'Pedido de eliminação e de oposição à venda/partilha de informações pessoais',
      body: (p, org) => `À Equipa de Privacidade de ${org || '[Organização]'},

sou residente na Califórnia e exerço os meus direitos ao abrigo da California Consumer Privacy Act, com as alterações da CPRA.

1. ELIMINAÇÃO (Cal. Civ. Code §1798.105): Solicito que elimine todas as informações pessoais que recolheu sobre mim e instrua os seus prestadores de serviços e contratantes a fazerem o mesmo.

2. OPOSIÇÃO (Cal. Civ. Code §1798.120 e §1798.121): Solicito que cesse a venda e a partilha das minhas informações pessoais e cesse a utilização de quaisquer informações pessoais sensíveis para fins não permitidos.

3. Solicito que confirme por escrito a conclusão e divulgue as categorias de informações pessoais eliminadas.

Os meus dados de identificação (usados exclusivamente para localizar e verificar os meus registos) são:
${sig(p, ph)}

Solicito que responda no prazo de 45 dias, conforme exigido pelo §1798.130. Não exija que crie uma conta para exercer estes direitos.

Com os melhores cumprimentos,
${name(p)}`,
    },
  }
})()

const nl: LetterSet = (() => {
  const ph = ['[Uw volledige naam]', '[Uw e-mailadres]', '[Uw postadres]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `Mocht u niet binnen de wettelijke termijn reageren, of dit verzoek zonder geldige juridische grond weigeren, dan behoud ik mij het recht voor een klacht in te dienen bij ${
      a || 'mijn toezichthoudende autoriteit'
    } en elk ander mij ter beschikking staand rechtsmiddel aan te wenden.`
  return {
    'gdpr-erasure': {
      subject: 'Verzoek tot wissing van persoonsgegevens op grond van artikel 17 AVG',
      body: (p, org, a) => `Aan de Functionaris voor gegevensbescherming / het Privacyteam van ${org || '[Organisatie]'},

hierbij oefen ik mijn recht op wissing uit op grond van artikel 17 van de Algemene Verordening Gegevensbescherming (AVG).

Ik verzoek u zonder onnodige vertraging alle persoonsgegevens te wissen die u over mij bewaart, met inbegrip van maar niet beperkt tot: naam, contactgegevens, identificatoren, gedrags- en profileringsgegevens, en alle gegevens verkregen van derden of gegevenshandelaren.

Ik ben de betrokkene. Mijn identificatiegegevens zijn:
${sig(p, ph)}

Tevens verzoek ik u:
1. Schriftelijk te bevestigen zodra de wissing is voltooid.
2. Elke ontvanger of derde aan wie mijn gegevens zijn verstrekt op de hoogte te stellen van dit wissingsverzoek, overeenkomstig artikel 19 AVG.
3. Elke verdere verwerking van mijn persoonsgegevens te staken, behalve waar u wettelijk verplicht bent deze te bewaren — vermeld in dat geval de precieze rechtsgrond en bewaartermijn.

Op grond van artikel 12(3) AVG dient u binnen één maand na ontvangst te reageren. Indien u geen gegevens over mij bewaart, verzoek ik u dit uitdrukkelijk te bevestigen.

${esc(a)}

Met vriendelijke groet,
${name(p)}`,
    },
    'gdpr-access': {
      subject: 'Inzageverzoek op grond van artikel 15 AVG',
      body: (p, org, a) => `Aan de Functionaris voor gegevensbescherming / het Privacyteam van ${org || '[Organisatie]'},

ik oefen mijn recht op inzage uit op grond van artikel 15 AVG. Ik verzoek u mij het volgende te verstrekken:

1. Bevestiging of u persoonsgegevens over mij verwerkt.
2. Een kopie van alle persoonsgegevens die u over mij bewaart.
3. De doeleinden van de verwerking.
4. De betrokken categorieën persoonsgegevens.
5. De ontvangers of categorieën ontvangers aan wie de gegevens zijn of zullen worden verstrekt.
6. De herkomst van de gegevens, voor zover deze niet rechtstreeks bij mij zijn verzameld.
7. Het bestaan van geautomatiseerde besluitvorming of profilering, en nuttige informatie over de onderliggende logica.

Mijn identificatiegegevens zijn:
${sig(p, ph)}

Ik verzoek u deze informatie binnen één maand, kosteloos en in een gangbaar elektronisch formaat te verstrekken, zoals vereist door de artikelen 12 en 15 AVG.

${esc(a)}

Met vriendelijke groet,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: 'Verzoek tot verwijdering en bezwaar tegen verkoop/delen van persoonlijke informatie',
      body: (p, org) => `Aan het Privacyteam van ${org || '[Organisatie]'},

ik ben inwoner van Californië en oefen mijn rechten uit op grond van de California Consumer Privacy Act, zoals gewijzigd door de CPRA.

1. VERWIJDERING (Cal. Civ. Code §1798.105): Verwijder alle persoonlijke informatie die u over mij hebt verzameld en draag uw dienstverleners en opdrachtnemers op hetzelfde te doen.

2. BEZWAAR (Cal. Civ. Code §1798.120 en §1798.121): Staak de verkoop en het delen van mijn persoonlijke informatie en staak het gebruik van gevoelige persoonlijke informatie voor niet-toegestane doeleinden.

3. Bevestig de voltooiing schriftelijk en maak de categorieën verwijderde persoonlijke informatie bekend.

Mijn identificatiegegevens (uitsluitend gebruikt om mijn gegevens te vinden en te verifiëren) zijn:
${sig(p, ph)}

Reageer binnen 45 dagen, zoals vereist door §1798.130. Verlang niet dat ik een account aanmaak om deze rechten uit te oefenen.

Met vriendelijke groet,
${name(p)}`,
    },
  }
})()

const ca: LetterSet = (() => {
  const ph = ['[El vostre nom complet]', '[El vostre correu electrònic]', '[La vostra adreça postal]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `Si no responeu dins del termini legal, o rebutgeu aquesta sol·licitud sense causa legítima, em reservo el dret de presentar una reclamació davant de ${
      a || 'la meva autoritat de control'
    } i d'exercir qualsevol altra via de recurs a la meva disposició.`
  return {
    'gdpr-erasure': {
      subject: 'Sol·licitud de supressió de dades personals d\'acord amb l\'article 17 del RGPD',
      body: (p, org, a) => `A l'atenció del Delegat de Protecció de Dades / Equip de Privadesa de ${org || '[Organització]'},

per la present exerceixo el meu dret de supressió d'acord amb l'article 17 del Reglament General de Protecció de Dades (RGPD).

Sol·licito que suprimiu, sense dilació indeguda, totes les dades personals que conserveu sobre mi, incloses, entre altres: nom, dades de contacte, identificadors, dades de comportament i d'elaboració de perfils, i qualsevol dada obtinguda de tercers o d'intermediaris de dades.

Sóc l'interessat. Les meves dades identificatives són:
${sig(p, ph)}

Així mateix, us demano que:
1. Confirmeu per escrit un cop completada la supressió.
2. Comuniqueu aquesta sol·licitud de supressió a qualsevol destinatari o tercer a qui s'hagin revelat les meves dades, d'acord amb l'article 19 del RGPD.
3. Cesseu qualsevol tractament ulterior de les meves dades personals, llevat que estigueu legalment obligats a conservar-les — cas en què us demano que indiqueu la base jurídica exacta i el termini de conservació.

D'acord amb l'article 12(3) del RGPD, heu de respondre en el termini d'un mes des de la recepció. Si no conserveu cap dada sobre mi, us demano que ho confirmeu expressament.

${esc(a)}

Atentament,
${name(p)}`,
    },
    'gdpr-access': {
      subject: 'Sol·licitud d\'accés d\'acord amb l\'article 15 del RGPD',
      body: (p, org, a) => `A l'atenció del Delegat de Protecció de Dades / Equip de Privadesa de ${org || '[Organització]'},

exerceixo el meu dret d'accés d'acord amb l'article 15 del RGPD. Us demano que em faciliteu:

1. La confirmació de si tracteu dades personals que em concerneixen.
2. Una còpia de totes les dades personals que conserveu sobre mi.
3. Les finalitats del tractament.
4. Les categories de dades personals afectades.
5. Els destinataris o categories de destinataris a qui s'hagin comunicat o es comunicaran les dades.
6. L'origen de les dades, quan no s'hagin obtingut directament de mi.
7. L'existència de decisions automatitzades o elaboració de perfils, i informació significativa sobre la lògica aplicada.

Les meves dades identificatives són:
${sig(p, ph)}

Us demano que faciliteu aquesta informació en el termini d'un mes, de manera gratuïta i en un format electrònic d'ús comú, tal com exigeixen els articles 12 i 15 del RGPD.

${esc(a)}

Atentament,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: 'Sol·licitud d\'eliminació i d\'oposició a la venda/compartició d\'informació personal',
      body: (p, org) => `A l'atenció de l'Equip de Privadesa de ${org || '[Organització]'},

sóc resident a Califòrnia i exerceixo els meus drets d'acord amb la California Consumer Privacy Act, modificada per la CPRA.

1. ELIMINACIÓ (Cal. Civ. Code §1798.105): Us demano que elimineu tota la informació personal que heu recopilat sobre mi i indiqueu als vostres proveïdors de serveis i contractistes que facin el mateix.

2. OPOSICIÓ (Cal. Civ. Code §1798.120 i §1798.121): Us demano que deixeu de vendre i compartir la meva informació personal i deixeu d'usar qualsevol informació personal sensible per a finalitats no permeses.

3. Us demano que confirmeu per escrit que s'ha completat i comuniqueu les categories d'informació personal eliminades.

Les meves dades identificatives (usades únicament per localitzar i verificar els meus registres) són:
${sig(p, ph)}

Us demano que respongueu en un termini de 45 dies, tal com exigeix el §1798.130. No m'exigiu crear un compte per exercir aquests drets.

Atentament,
${name(p)}`,
    },
  }
})()

const pl: LetterSet = (() => {
  const ph = ['[Twoje imię i nazwisko]', '[Twój e-mail]', '[Twój adres pocztowy]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `W razie braku odpowiedzi w ustawowym terminie lub odmowy spełnienia niniejszego żądania bez ważnej podstawy prawnej zastrzegam sobie prawo do wniesienia skargi do ${
      a || 'mojego organu nadzorczego'
    } oraz do skorzystania z wszelkich innych przysługujących mi środków prawnych.`
  return {
    'gdpr-erasure': {
      subject: 'Żądanie usunięcia danych osobowych na podstawie art. 17 RODO',
      body: (p, org, a) => `Do Inspektora Ochrony Danych / Zespołu ds. Prywatności ${org || '[Organizacja]'},

niniejszym korzystam z prawa do usunięcia danych na podstawie art. 17 Ogólnego rozporządzenia o ochronie danych (RODO).

Żądam usunięcia, bez zbędnej zwłoki, wszystkich danych osobowych, które Państwo na mój temat przechowują, w tym między innymi: imienia i nazwiska, danych kontaktowych, identyfikatorów, danych behawioralnych i profilujących oraz wszelkich danych uzyskanych od stron trzecich lub brokerów danych.

Jestem osobą, której dane dotyczą. Moje dane identyfikacyjne to:
${sig(p, ph)}

Proszę również o:
1. Pisemne potwierdzenie po zakończeniu usuwania.
2. Poinformowanie o niniejszym żądaniu usunięcia każdego odbiorcy lub strony trzeciej, której ujawniono moje dane, zgodnie z art. 19 RODO.
3. Zaprzestanie dalszego przetwarzania moich danych osobowych, z wyjątkiem przypadków, gdy są Państwo prawnie zobowiązani do ich przechowywania — w takim przypadku proszę o wskazanie dokładnej podstawy prawnej i okresu przechowywania.

Zgodnie z art. 12 ust. 3 RODO są Państwo zobowiązani odpowiedzieć w terminie jednego miesiąca od otrzymania. Jeśli nie przechowują Państwo żadnych moich danych, proszę o wyraźne potwierdzenie tego faktu.

${esc(a)}

Z poważaniem,
${name(p)}`,
    },
    'gdpr-access': {
      subject: 'Żądanie dostępu do danych na podstawie art. 15 RODO',
      body: (p, org, a) => `Do Inspektora Ochrony Danych / Zespołu ds. Prywatności ${org || '[Organizacja]'},

korzystam z prawa dostępu na podstawie art. 15 RODO. Proszę o udostępnienie mi:

1. Potwierdzenia, czy przetwarzają Państwo dane osobowe mnie dotyczące.
2. Kopii wszystkich danych osobowych, które Państwo na mój temat przechowują.
3. Celów przetwarzania.
4. Kategorii przetwarzanych danych osobowych.
5. Odbiorców lub kategorii odbiorców, którym dane ujawniono lub zostaną ujawnione.
6. Źródła danych, jeżeli nie zostały zebrane bezpośrednio ode mnie.
7. Informacji o zautomatyzowanym podejmowaniu decyzji lub profilowaniu oraz istotnych informacji o zasadach ich działania.

Moje dane identyfikacyjne to:
${sig(p, ph)}

Proszę o udostępnienie tych informacji w terminie jednego miesiąca, bezpłatnie i w powszechnie używanym formacie elektronicznym, zgodnie z art. 12 i 15 RODO.

${esc(a)}

Z poważaniem,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: 'Żądanie usunięcia oraz sprzeciw wobec sprzedaży/udostępniania danych osobowych',
      body: (p, org) => `Do Zespołu ds. Prywatności ${org || '[Organizacja]'},

jestem mieszkańcem Kalifornii i korzystam z moich praw na podstawie California Consumer Privacy Act, zmienionej przez CPRA.

1. USUNIĘCIE (Cal. Civ. Code §1798.105): Proszę o usunięcie wszystkich danych osobowych zebranych na mój temat oraz polecenie usługodawcom i wykonawcom, aby uczynili to samo.

2. SPRZECIW (Cal. Civ. Code §1798.120 i §1798.121): Proszę o zaprzestanie sprzedaży i udostępniania moich danych osobowych oraz zaprzestanie wykorzystywania wrażliwych danych osobowych do niedozwolonych celów.

3. Proszę o pisemne potwierdzenie wykonania oraz wskazanie kategorii usuniętych danych osobowych.

Moje dane identyfikacyjne (wykorzystywane wyłącznie do odnalezienia i weryfikacji moich rekordów) to:
${sig(p, ph)}

Proszę o odpowiedź w terminie 45 dni, zgodnie z §1798.130. Proszę nie wymagać ode mnie założenia konta w celu skorzystania z tych praw.

Z poważaniem,
${name(p)}`,
    },
  }
})()

const sv: LetterSet = (() => {
  const ph = ['[Ditt fullständiga namn]', '[Din e-postadress]', '[Din postadress]'] as const
  const name = (p: Profile) => p.name || ph[0]
  const esc = (a?: string) =>
    `Om ni inte svarar inom den lagstadgade tiden, eller avslår denna begäran utan giltig rättslig grund, förbehåller jag mig rätten att lämna in ett klagomål till ${
      a || 'min tillsynsmyndighet'
    } och att vidta alla andra rättsmedel som står till mitt förfogande.`
  return {
    'gdpr-erasure': {
      subject: 'Begäran om radering av personuppgifter enligt artikel 17 i GDPR',
      body: (p, org, a) => `Till Dataskyddsombudet / Integritetsteamet på ${org || '[Organisation]'},

härmed utövar jag min rätt till radering enligt artikel 17 i dataskyddsförordningen (GDPR).

Jag begär att ni utan onödigt dröjsmål raderar alla personuppgifter ni har om mig, inklusive men inte begränsat till: namn, kontaktuppgifter, identifierare, beteende- och profileringsdata samt alla uppgifter som inhämtats från tredje part eller datamäklare.

Jag är den registrerade. Mina identifieringsuppgifter är:
${sig(p, ph)}

Jag ber er även att:
1. Skriftligen bekräfta när raderingen är slutförd.
2. Underrätta varje mottagare eller tredje part som mina uppgifter har lämnats ut till om denna begäran om radering, i enlighet med artikel 19 i GDPR.
3. Upphöra med all vidare behandling av mina personuppgifter, utom där ni är rättsligt skyldiga att bevara dem — ange i så fall den exakta rättsliga grunden och lagringstiden.

Enligt artikel 12.3 i GDPR ska ni svara inom en månad från mottagandet. Om ni inte har några uppgifter om mig, ber jag er att uttryckligen bekräfta detta.

${esc(a)}

Med vänlig hälsning,
${name(p)}`,
    },
    'gdpr-access': {
      subject: 'Begäran om tillgång enligt artikel 15 i GDPR',
      body: (p, org, a) => `Till Dataskyddsombudet / Integritetsteamet på ${org || '[Organisation]'},

jag utövar min rätt till tillgång enligt artikel 15 i GDPR. Jag ber er tillhandahålla:

1. Bekräftelse på huruvida ni behandlar personuppgifter om mig.
2. En kopia av alla personuppgifter ni har om mig.
3. Ändamålen med behandlingen.
4. De kategorier av personuppgifter som berörs.
5. De mottagare eller kategorier av mottagare som uppgifterna har lämnats eller kommer att lämnas ut till.
6. Uppgifternas ursprung, om de inte samlats in direkt från mig.
7. Förekomsten av automatiserat beslutsfattande eller profilering, samt meningsfull information om logiken bakom.

Mina identifieringsuppgifter är:
${sig(p, ph)}

Jag ber er tillhandahålla denna information inom en månad, kostnadsfritt och i ett vanligt elektroniskt format, i enlighet med artiklarna 12 och 15 i GDPR.

${esc(a)}

Med vänlig hälsning,
${name(p)}`,
    },
    'ccpa-delete': {
      subject: 'Begäran om radering och invändning mot försäljning/delning av personlig information',
      body: (p, org) => `Till Integritetsteamet på ${org || '[Organisation]'},

jag är bosatt i Kalifornien och utövar mina rättigheter enligt California Consumer Privacy Act, ändrad genom CPRA.

1. RADERING (Cal. Civ. Code §1798.105): Radera all personlig information ni har samlat in om mig och uppmana era tjänsteleverantörer och underleverantörer att göra detsamma.

2. INVÄNDNING (Cal. Civ. Code §1798.120 och §1798.121): Upphör med att sälja och dela min personliga information och upphör med att använda känslig personlig information för otillåtna ändamål.

3. Bekräfta skriftligen att det är genomfört och redovisa kategorierna av raderad personlig information.

Mina identifieringsuppgifter (används endast för att hitta och verifiera mina uppgifter) är:
${sig(p, ph)}

Svara inom 45 dagar, i enlighet med §1798.130. Kräv inte att jag skapar ett konto för att utöva dessa rättigheter.

Med vänlig hälsning,
${name(p)}`,
    },
  }
})()

const OVERLAYS: Partial<Record<Lang, LetterSet>> = { fr, de, es, it, pt, nl, ca, pl, sv }

/** Localized letter for a language+template, or undefined to fall back to the
 *  English canonical in lib/letters.ts. */
export function localizedLetter(lang: Lang, template: LetterTemplate): LocalizedLetter | undefined {
  return OVERLAYS[lang]?.[template]
}
