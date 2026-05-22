import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ── Obbligo e Soggetti ──
  {
    categoria: "Obbligo e Soggetti",
    domanda: "Gli avvocati devono emettere fattura elettronica nel 2026?",
    risposta:
      "Sì, l'obbligo riguarda tutti gli avvocati, sia in regime ordinario sia in regime forfettario, per ogni fattura emessa verso imprese, Pubbliche Amministrazioni e privati cittadini. L'obbligo generalizzato è in vigore dal 1° gennaio 2019 (L. 205/2017) e dal 1° gennaio 2024 è stato esteso anche a tutti i forfettari (art. 18 D.L. 36/2022). Restano esonerati solo i contribuenti in regime di vantaggio ex art. 27 D.L. 98/2011 e alcuni operatori del Sistema Tessera Sanitaria.",
    fonti: [
      { label: "L. 205/2017 art. 1 c. 909", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-12-27;205" },
      { label: "D.L. 36/2022 art. 18", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2022-04-30;36" },
    ],
  },
  {
    categoria: "Obbligo e Soggetti",
    domanda: "Un avvocato in regime forfettario deve fare fattura elettronica anche verso un privato cittadino?",
    risposta:
      "Sì. Dal 1° gennaio 2024 anche le fatture emesse dal forfettario verso privati cittadini devono essere in formato elettronico, trasmesse al Sistema di Interscambio (SDI) con codice destinatario 0000000 (sette zeri). Il cliente non riceve l'XML ma trova la fattura nel suo cassetto fiscale; l'avvocato deve comunque consegnare una copia di cortesia in PDF.",
    fonti: [
      { label: "D.L. 36/2022 art. 18", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2022-04-30;36" },
      { label: "Agenzia delle Entrate - FE", url: "https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica" },
    ],
  },
  {
    categoria: "Obbligo e Soggetti",
    domanda: "Esistono ancora esoneri dall'obbligo di fattura elettronica per gli avvocati?",
    risposta:
      "Per gli avvocati, gli esoneri sono ormai residuali: rimangono fuori dall'obbligo soltanto i contribuenti in regime di vantaggio (art. 27 cc. 1 e 2 D.L. 98/2011), figura ormai marginale e quasi esaurita. Tutti gli altri avvocati — ordinari, forfettari, studi associati, società tra avvocati — devono emettere e ricevere fatture elettroniche tramite SDI.",
    fonti: [
      { label: "D.L. 98/2011 art. 27", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2011-07-06;98" },
    ],
  },

  // ── Calcolo Importi ──
  {
    categoria: "Calcolo Importi",
    domanda: "Come si calcolano le spese generali 15% nella fattura dell'avvocato?",
    risposta:
      "Le spese generali si calcolano applicando il 15% al compenso netto del professionista, non al totale fattura. Sono previste dall'art. 13 c. 10 della L. 247/2012 (nuovo ordinamento forense) e dall'art. 2 del D.M. 147/2022 (parametri forensi). Esempio: per un compenso di €2.000, le spese generali sono €300 (2.000 × 15%). Sono dovute automaticamente sia in sede contrattuale sia in sede giudiziale, salvo diversa pattuizione.",
    fonti: [
      { label: "L. 247/2012 art. 13 c. 10", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
      { label: "D.M. 147/2022", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/12/22G00153/sg" },
    ],
  },
  {
    categoria: "Calcolo Importi",
    domanda: "Qual è la base imponibile della CPA Cassa Forense del 4%?",
    risposta:
      "Il contributo integrativo del 4% si calcola sulla somma di compenso + spese generali 15% + spese imponibili. Sono escluse le anticipazioni ex art. 15 DPR 633/72 (contributo unificato, marche da bollo per CU, diritti di copia) perché non concorrono al volume d'affari del professionista. Esempio: compenso €2.000 + spese gen. €300 + spese imp. €100 = imponibile CPA €2.400 → CPA = €96. Riferimento: art. 11 L. 576/1980 + art. 18 Regolamento Unico Previdenza Forense.",
    fonti: [
      { label: "L. 576/1980 art. 11", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1980-09-20;576" },
      { label: "Regolamento Cassa Forense", url: "https://www.cassaforense.it/regolamento-unico-previdenza-forense" },
    ],
  },
  {
    categoria: "Calcolo Importi",
    domanda: "Come si calcola la base imponibile IVA nella fattura dell'avvocato?",
    risposta:
      "L'imponibile IVA è la somma di compenso + spese generali 15% + spese imponibili + CPA 4%. Sono escluse le anticipazioni ex art. 15 DPR 633/72. Sull'imponibile così calcolato si applica l'aliquota IVA del 22% (art. 16 DPR 633/72). Esempio: 2.000 + 300 + 100 + 96 = €2.496 imponibile IVA → IVA = €549,12. Per gli avvocati in regime forfettario non si applica IVA.",
    fonti: [
      { label: "DPR 633/72 art. 13", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" },
      { label: "DPR 633/72 art. 16", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" },
    ],
  },
  {
    categoria: "Calcolo Importi",
    domanda: "Qual è la base della ritenuta d'acconto del 20%?",
    risposta:
      "La ritenuta del 20% (art. 25 DPR 600/73) si calcola sulla somma di compenso + spese generali 15% + spese imponibili. Sono escluse: CPA Cassa Forense, IVA, anticipazioni ex art. 15. Si applica solo se il cliente è sostituto d'imposta (impresa, professionista, PA, condominio) e se l'avvocato è in regime ordinario. Esempio: compenso 2.000 + spese gen. 300 + spese imp. 100 = €2.400 base ritenuta → ritenuta = €480.",
    fonti: [
      { label: "DPR 600/73 art. 25", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600" },
    ],
  },

  // ── Codici Tecnici ──
  {
    categoria: "Codici Tecnici",
    domanda: "Quale TipoDocumento (TD) deve usare l'avvocato in fattura elettronica?",
    risposta:
      "Il codice TD01 (Fattura) è oggi il codice raccomandato per le prestazioni professionali dell'avvocato, sia verso privati sia verso PA. Il codice TD06 (Parcella), storicamente usato dai professionisti, è ancora ammesso dal Sistema di Interscambio ma è di uso decrescente nella prassi; ai fini fiscali è equivalente al TD01. Per le note di credito si usa TD04, per gli acconti TD02 o TD03.",
    fonti: [
      { label: "Provv. AdE 89757/2018", url: "https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica" },
    ],
  },
  {
    categoria: "Codici Tecnici",
    domanda: "Quando si usa il codice SDI 0000000 (sette zeri)?",
    risposta:
      "Il codice destinatario 0000000 si utilizza quando il cliente è un privato cittadino senza partita IVA, oppure quando il cliente, pur essendo titolare di partita IVA, non ha comunicato un proprio codice destinatario o un indirizzo PEC. Il Sistema di Interscambio deposita la fattura nel cassetto fiscale del cliente; l'avvocato deve comunque consegnare una copia di cortesia (PDF) al destinatario.",
    fonti: [
      { label: "Provv. AdE 89757/2018", url: "https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica" },
    ],
  },
  {
    categoria: "Codici Tecnici",
    domanda: "Cos'è il codice N2.2 e quando lo usa l'avvocato?",
    risposta:
      "Il codice N2.2 identifica le 'operazioni non soggette ad IVA - altri casi' ed è il codice da utilizzare obbligatoriamente dall'avvocato in regime forfettario su tutte le fatture, perché le sue operazioni non sono soggette a IVA per effetto dell'art. 1 cc. 54-89 della L. 190/2014. Insieme al codice va inserita in fattura la dicitura 'Operazione non soggetta a IVA ex art. 1 cc. 54-89 L. 190/2014 - Regime forfettario'.",
    fonti: [
      { label: "L. 190/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-27;190" },
      { label: "Circolare AdE 10/E del 2016", url: "https://www.agenziaentrate.gov.it/portale/" },
    ],
  },
  {
    categoria: "Codici Tecnici",
    domanda: "Quale codice Natura IVA usare per il contributo unificato e le marche da bollo?",
    risposta:
      "Per le anticipazioni in nome e per conto del cliente — come contributo unificato, marche da bollo per CU, diritti di copia, spese di notifica — si usa il codice N1 (escluse ex art. 15 DPR 633/72). Queste somme non concorrono alla base imponibile IVA, CPA e ritenuta. Per gli avvocati forfettari il riaddebito di tali spese va invece sotto codice N2.2 perché concorre alla determinazione del reddito (Risposta AdE 428/2022).",
    fonti: [
      { label: "DPR 633/72 art. 15", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" },
      { label: "Risposta AdE 428/2022", url: "https://www.agenziaentrate.gov.it/portale/" },
    ],
  },

  // ── Split Payment e PA ──
  {
    categoria: "Split Payment e PA",
    domanda: "L'avvocato deve applicare lo split payment quando fattura alla Pubblica Amministrazione?",
    risposta:
      "No. Lo split payment per i compensi professionali assoggettati a ritenuta è stato abolito dal 14 luglio 2018 con l'introduzione del comma 1-sexies all'art. 17-ter DPR 633/72 (art. 12 D.L. 87/2018 - Decreto Dignità). Nel 2026 l'avvocato che fattura a Ministeri, INPS, INAIL, Comuni, ASL o società controllate dalla PA applica IVA 22% ordinaria che incassa direttamente, senza scissione dei pagamenti. In fattura il campo EsigibilitaIVA deve essere 'I' (immediata) o 'D' (differita), mai 'S'.",
    fonti: [
      { label: "D.L. 87/2018 art. 12", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2018-07-12;87" },
      { label: "DPR 633/72 art. 17-ter", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" },
    ],
  },
  {
    categoria: "Split Payment e PA",
    domanda: "Come si fattura al Ministero della Giustizia per gratuito patrocinio?",
    risposta:
      "Si emette fattura elettronica TD01 indirizzata all'ufficio giudiziario competente (codice destinatario IPA reperibile su indicepa.gov.it), con IVA 22% in regime ordinario, CPA Cassa Forense 4%, spese generali 15% (se liquidate dal giudice) e ritenuta d'acconto 20% applicata dal Ministero come sostituto d'imposta (codice tributo F24 1040). La fattura va emessa al momento dell'incasso (art. 6 c. 3 DPR 633/72). Il Ministero rilascia annualmente la Certificazione Unica.",
    fonti: [
      { label: "DPR 115/2002 artt. 82-83", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" },
      { label: "IndicePA", url: "https://www.indicepa.gov.it" },
    ],
  },
  {
    categoria: "Split Payment e PA",
    domanda: "Nel gratuito patrocinio civile il compenso è ridotto del 50% come nel penale?",
    risposta:
      "No. La riduzione del 50% prevista dall'art. 130 DPR 115/2002 si applica esclusivamente al processo penale ('nel processo penale… sono ridotti della metà'). Nel processo civile, amministrativo e tributario il compenso al difensore della parte ammessa al patrocinio a spese dello Stato è liquidato integralmente secondo i parametri forensi del D.M. 147/2022, con la sola modulazione discrezionale del giudice tra minimi e massimi previsti dai parametri.",
    fonti: [
      { label: "DPR 115/2002 art. 130", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" },
      { label: "D.M. 147/2022", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/12/22G00153/sg" },
    ],
  },

  // ── Imposta di Bollo ──
  {
    categoria: "Imposta di Bollo",
    domanda: "Quando si applica la marca da bollo di €2 sulla fattura dell'avvocato?",
    risposta:
      "L'imposta di bollo di €2,00 si applica solo se la fattura è non soggetta a IVA (regime forfettario, operazioni esenti, non imponibili o fuori campo) e l'importo non soggetto a IVA supera €77,47 (art. 13 Tariffa Parte I, DPR 642/72). Nella fattura elettronica si indica il campo BolloVirtuale = 'SI' e ImportoBollo = 2,00; il versamento avviene trimestralmente tramite il portale Fatture e Corrispettivi entro il 20 del mese successivo al trimestre.",
    fonti: [
      { label: "DPR 642/72 art. 13 Tariffa", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;642" },
      { label: "D.M. 28/12/2018", url: "https://www.gazzettaufficiale.it/eli/id/2019/01/07/19A00047/sg" },
    ],
  },
  {
    categoria: "Imposta di Bollo",
    domanda: "Il bollo riaddebitato al cliente è compenso per l'avvocato forfettario?",
    risposta:
      "Sì. Secondo la Risposta dell'Agenzia delle Entrate n. 428/2022, il bollo riaddebitato al cliente dall'avvocato in regime forfettario è ricavo che concorre alla determinazione del reddito imponibile e al rispetto del limite di €85.000 per la permanenza nel regime forfettario. Su tale importo si applica anche il coefficiente di redditività del 78% per gli avvocati e si calcola la CPA del 4%.",
    fonti: [
      { label: "Risposta AdE 428/2022", url: "https://www.agenziaentrate.gov.it/portale/" },
      { label: "Circolare AdE 5/E/2021", url: "https://www.agenziaentrate.gov.it/portale/" },
    ],
  },

  // ── Casi Particolari ──
  {
    categoria: "Casi Particolari",
    domanda: "Come si fattura un cliente UE soggetto a IVA (B2B)?",
    risposta:
      "Per la prestazione resa a un cliente UE soggetto passivo IVA si emette fattura non imponibile ex art. 7-ter DPR 633/72, con codice natura N6.9 (reverse charge cliente). In fattura va indicato il numero di identificazione VIES del cliente UE; il cliente assolverà l'IVA nel proprio Paese tramite inversione contabile. L'avvocato deve essere iscritto al VIES per poter effettuare operazioni intracomunitarie.",
    fonti: [
      { label: "DPR 633/72 art. 7-ter", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Cos'è il pro-forma o avviso di parcella? Quando si emette la fattura definitiva?",
    risposta:
      "Il pro-forma (o 'avviso di parcella' o 'nota informale') è un documento non fiscale che riproduce il contenuto della futura fattura. Non va trasmesso al SDI, non si registra nei registri IVA e non genera obbligo IVA. La sequenza tipica è: 1) avvocato emette pro-forma con dicitura 'documento non valido ai fini fiscali'; 2) cliente paga; 3) entro 12 giorni dall'incasso (art. 21 c. 4 DPR 633/72) l'avvocato emette fattura elettronica TD01. Per i professionisti l'IVA è dovuta al pagamento (art. 6 c. 3 DPR 633/72).",
    fonti: [
      { label: "DPR 633/72 art. 6 c. 3", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" },
      { label: "L. 247/2012 art. 13", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Quando si emette una nota di credito (TD04)?",
    risposta:
      "La nota di credito TD04 si emette per stornare totalmente o parzialmente una fattura precedente, in caso di errore di calcolo, sconto successivo, abbuono, restituzione o annullamento del contratto. I termini sono regolati dall'art. 26 DPR 633/72: senza limite per nullità del contratto o errore di calcolo, entro un anno per variazione concordata tra le parti. La nota deve contenere il riferimento alla fattura originaria nel campo DatiFattureCollegate.",
    fonti: [
      { label: "DPR 633/72 art. 26", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" },
    ],
  },

  // ── Sanzioni e Aggiornamenti ──
  {
    categoria: "Sanzioni e Aggiornamenti",
    domanda: "Quali sono le sanzioni per omessa fattura elettronica nel 2026?",
    risposta:
      "Dal 1° settembre 2024 (D.Lgs. 87/2024 - Riforma sanzioni tributarie) le sanzioni sono state ridotte: omessa o tardiva fatturazione che incide sull'IVA = 70% dell'imposta con minimo €300 (era 90-180%); errori formali che non incidono sull'IVA = sanzione fissa €250-2.000; operazioni esenti, non imponibili o reverse charge non documentate = 5% dei corrispettivi con minimo €300. È sempre applicabile il ravvedimento operoso con riduzione delle sanzioni.",
    fonti: [
      { label: "D.Lgs. 87/2024", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87" },
    ],
  },
  {
    categoria: "Sanzioni e Aggiornamenti",
    domanda: "Cosa cambia con il tracciato XML versione 1.9.1 dal 15 maggio 2026?",
    risposta:
      "Dal 15 maggio 2026 è obbligatorio l'utilizzo del tracciato XML versione 1.9.1 delle specifiche tecniche della fattura elettronica. Da quella data, il Sistema di Interscambio scarta automaticamente le fatture predisposte con tracciato precedente. Tutti i gestionali di studio e i software di fatturazione devono essere aggiornati alla nuova versione, che introduce nuovi codici tipo documento, affinamenti dei codici natura IVA e regole di controllo più stringenti.",
    fonti: [
      { label: "Provv. AdE specifiche tecniche", url: "https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica" },
    ],
  },
  {
    categoria: "Sanzioni e Aggiornamenti",
    domanda: "Per quanto tempo si devono conservare le fatture elettroniche?",
    risposta:
      "Le fatture elettroniche devono essere conservate per 10 anni (art. 2220 c.c. + art. 39 DPR 633/72) in modalità digitale, secondo le regole del D.M. 17 giugno 2014 e del D.P.C.M. 3 dicembre 2013. La conservazione deve garantire autenticità, integrità, leggibilità e reperibilità. L'Agenzia delle Entrate offre un servizio gratuito di conservazione tramite il portale Fatture e Corrispettivi (durata 15 anni). La responsabilità ultima della conservazione resta in capo all'avvocato.",
    fonti: [
      { label: "D.M. 17/06/2014", url: "https://www.gazzettaufficiale.it/eli/id/2014/06/26/14A04778/sg" },
      { label: "DPR 633/72 art. 39", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" },
    ],
  },
  {
    categoria: "Sanzioni e Aggiornamenti",
    domanda: "Quale codice tributo F24 deve usare il sostituto d'imposta per la ritenuta sull'avvocato?",
    risposta:
      "Il codice tributo F24 per il versamento della ritenuta d'acconto del 20% sui compensi degli avvocati è il 1040 (ritenute su redditi di lavoro autonomo - compensi per l'esercizio di arti e professioni). Il sostituto d'imposta (impresa, professionista, PA, condominio) versa la ritenuta entro il 16 del mese successivo a quello del pagamento e rilascia annualmente la Certificazione Unica (CU) all'avvocato.",
    fonti: [
      { label: "DPR 600/73 art. 25", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600" },
    ],
  },
];
