import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // --- OBBLIGHI E SOGGETTI ---
  {
    categoria: "Obblighi e soggetti",
    domanda: "Chi \u00E8 tenuto al pagamento del contributo unificato?",
    risposta:
      "Il contributo unificato \u00E8 dovuto dalla parte che per prima si costituisce in giudizio, ovvero che deposita il ricorso introduttivo o l'atto di citazione. In caso di pi\u00F9 attori, ciascuno \u00E8 tenuto al pagamento in solido (art. 14, c. 1, DPR 115/2002). Nel processo tributario, \u00E8 dovuto dal soggetto che propone il ricorso.",
    fonti: [{ label: "Art. 14 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" }],
  },
  {
    categoria: "Obblighi e soggetti",
    domanda: "L'avvocato \u00E8 obbligato ad anticipare il contributo unificato per conto del cliente?",
    risposta:
      "No. Il Consiglio Nazionale Forense ha chiarito che l'avvocato non ha alcun obbligo di anticipare il contributo unificato al cliente. L'avvocato \u00E8 tenuto esclusivamente ad informare il cliente sulle conseguenze della mancata contribuzione, tra cui l'impossibilit\u00E0 di iscrivere la causa a ruolo (dal 2025) e le sanzioni previste.",
  },
  {
    categoria: "Obblighi e soggetti",
    domanda: "Il contributo unificato \u00E8 dovuto per ciascun grado di giudizio?",
    risposta:
      "S\u00EC. L'art. 9, c. 1, DPR 115/2002 stabilisce che il contributo \u00E8 dovuto \"per ciascun grado di giudizio\". Pertanto, \u00E8 necessario un nuovo versamento in appello (con aumento del 50%) e in Cassazione (con raddoppio dell'importo). In caso di rigetto dell'impugnazione, il giudice pu\u00F2 condannare la parte al versamento di un ulteriore importo pari a quello gi\u00E0 corrisposto (art. 13, c. 1-quater).",
    fonti: [{ label: "Art. 9 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" }, { label: "Art. 13 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }],
  },
  // --- CALCOLO E VALORE ---
  {
    categoria: "Calcolo e valore",
    domanda: "Come si determina il valore della causa ai fini del contributo unificato?",
    risposta:
      "Il valore della causa si determina secondo le regole degli artt. 10-15 del codice di procedura civile, in base alla domanda formulata nell'atto introduttivo. La parte \u00E8 tenuta a dichiarare il valore nella nota di iscrizione a ruolo. Per le cause di risarcimento danni, il valore \u00E8 quello indicato nella domanda; per le cause di pagamento, \u00E8 la somma richiesta; per le cause relative a beni immobili, si fa riferimento al reddito dominicale.",
    fonti: [{ label: "Art. 13 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }],
  },
  {
    categoria: "Calcolo e valore",
    domanda: "Cosa succede se non dichiaro il valore della causa?",
    risposta:
      "In caso di omessa dichiarazione di valore, si applica automaticamente lo scaglione massimo previsto dall'art. 13 DPR 115/2002, pari a \u20AC 1.686,00 per il primo grado nel processo civile (art. 13, c. 6). \u00C8 quindi fondamentale indicare sempre il valore della causa per evitare un esborso superiore al dovuto.",
    fonti: [{ label: "Art. 13, c. 6 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }],
  },
  {
    categoria: "Calcolo e valore",
    domanda: "Cosa significa \"valore indeterminabile\" della causa?",
    risposta:
      "Una causa ha valore indeterminabile quando non \u00E8 possibile quantificare economicamente l'oggetto della domanda secondo i criteri del codice di procedura civile. In tal caso, il contributo unificato \u00E8 fissato in \u20AC 518,00 per il primo grado nel processo civile (art. 13, c. 1). Esempi tipici: azioni di accertamento, azioni costitutive, impugnazione di delibere assembleari senza domanda risarcitoria.",
  },
  {
    categoria: "Calcolo e valore",
    domanda: "Come si calcola il valore per lo sfratto per morosit\u00E0?",
    risposta:
      "Per lo sfratto per morosit\u00E0, il valore della causa \u00E8 determinato dall'ammontare dei canoni non corrisposti alla data di notifica dell'atto di intimazione. Per la finita locazione, il valore corrisponde all'ammontare del canone annuo. In entrambi i casi si applica la riduzione del 50% del contributo unificato (art. 13, c. 3, DPR 115/2002).",
  },
  // --- RIDUZIONI ED ESENZIONI ---
  {
    categoria: "Riduzioni ed esenzioni",
    domanda: "Quali procedimenti godono della riduzione del 50% del contributo unificato?",
    risposta:
      "La riduzione del 50% si applica a: procedimenti per decreto ingiuntivo, convalida di sfratto, cautelari, possessori, accertamento tecnico preventivo (ATP), opposizione a decreto ingiuntivo in primo grado, sfratto per morosit\u00E0 e finita locazione, controversie individuali di lavoro (se il reddito supera \u20AC 40.978,92) e opposizione alla sentenza dichiarativa di fallimento. Il procedimento semplificato di cognizione (Riforma Cartabia) NON gode del dimezzamento (Circ. Min. 17/3/2023).",
    fonti: [{ label: "Art. 13, c. 3 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }, { label: "Circ. Min. 17/3/2023", url: "https://i2.res.24o.it/pdf2010/Editrice/ILSOLE24ORE/QUOTIDIANI_VERTICALI/Online/_Oggetti_Embedded/Documenti/2023/04/13/Min-Giustizia-circolare-17-3-2023-contributo.pdf" }],
  },
  {
    categoria: "Riduzioni ed esenzioni",
    domanda: "Quando si \u00E8 completamente esenti dal pagamento del contributo unificato?",
    risposta:
      "Sono esenti dal CU, tra gli altri: i procedimenti per assegno di mantenimento dei figli (art. 10, c. 2), le cause di lavoro e previdenza con reddito imponibile inferiore a \u20AC 40.978,92 (art. 9, c. 1-bis), i procedimenti di interdizione e inabilitazione, i procedimenti in materia tavolare, le cause davanti al Giudice di Pace fino a \u20AC 1.100 (art. 46 L. 374/1991), i procedimenti di cui alla L. 89/2001 (equa riparazione), e i procedimenti relativi alla protezione internazionale.",
  },
  {
    categoria: "Riduzioni ed esenzioni",
    domanda: "Il contributo unificato \u00E8 dovuto per la mediazione o la negoziazione assistita?",
    risposta:
      "No. La mediazione e la negoziazione assistita sono procedimenti stragiudiziali e pertanto non richiedono il pagamento del contributo unificato. Il CU \u00E8 dovuto solo al momento dell'iscrizione a ruolo della causa presso l'ufficio giudiziario. Tuttavia, se la mediazione o la negoziazione falliscono e si procede con il giudizio, il CU sar\u00E0 dovuto all'atto dell'iscrizione a ruolo.",
  },
  {
    categoria: "Riduzioni ed esenzioni",
    domanda: "Il procedimento semplificato di cognizione (Riforma Cartabia) beneficia del dimezzamento?",
    risposta:
      "No. La Circolare del Ministero della Giustizia del 17 marzo 2023 ha espressamente chiarito che il procedimento semplificato di cognizione (artt. 281-decies e segg. c.p.c.), introdotto dalla Riforma Cartabia (D.Lgs. 149/2022), non rientra tra i procedimenti per i quali \u00E8 prevista la riduzione del 50% del contributo unificato. Si applica pertanto il CU in misura piena.",
    fonti: [{ label: "Circ. Min. 17/3/2023", url: "https://i2.res.24o.it/pdf2010/Editrice/ILSOLE24ORE/QUOTIDIANI_VERTICALI/Online/_Oggetti_Embedded/Documenti/2023/04/13/Min-Giustizia-circolare-17-3-2023-contributo.pdf" }, { label: "D.Lgs. 149/2022", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2022-10-10;149" }],
  },
  // --- PAGAMENTO ---
  {
    categoria: "Pagamento",
    domanda: "Come si paga il contributo unificato?",
    risposta:
      "Il contributo unificato pu\u00F2 essere pagato tramite: (1) PagoPA, il sistema principale di pagamento digitale della Pubblica Amministrazione, accessibile dal Portale dei Servizi Telematici del Ministero della Giustizia; (2) modello F24 (codice tributo 941T per il processo civile); (3) bollettino di conto corrente postale; (4) contrassegni (marche) acquistati presso le rivendite autorizzate. Dal 2020, PagoPA \u00E8 il metodo preferenziale e in molti uffici giudiziari \u00E8 l'unico accettato.",
  },
  {
    categoria: "Pagamento",
    domanda: "Cos'\u00E8 l'anticipazione forfettaria di \u20AC 27,00 e quando \u00E8 dovuta?",
    risposta:
      "L'anticipazione forfettaria di \u20AC 27,00 (art. 30, DPR 115/2002) \u00E8 un importo aggiuntivo dovuto per tutte le cause civili, da versare contestualmente al contributo unificato. \u00C8 destinata a coprire le spese forfettarie per le notificazioni a cura dell'ufficiale giudiziario. Sono esenti dal pagamento dell'anticipazione forfettaria: i giudizi di lavoro, i procedimenti familiari e la ricerca telematica dei beni ex art. 492-bis c.p.c.",
  },
  {
    categoria: "Pagamento",
    domanda: "Cosa succede dal 2025 se non si paga il contributo unificato all'atto dell'iscrizione a ruolo?",
    risposta:
      "Con la Legge di Bilancio 2025 (L. 207/2024), il nuovo art. 14, c. 3.1, DPR 115/2002 stabilisce che nei procedimenti civili la causa non pu\u00F2 essere iscritta a ruolo se non \u00E8 versato almeno l'importo minimo di \u20AC 43,00 (o il minor contributo dovuto per legge), fatti salvi i casi di esenzione e di ammissione al patrocinio a spese dello Stato.",
    fonti: [{ label: "L. 207/2024", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024;207~art1!vig=" }, { label: "Circ. Min. 24/3/2025", url: "https://www.giustizia.it/giustizia/it/mg_1_40_0.page?contentId=IGC1450602" }],
  },
  // --- SANZIONI ---
  {
    categoria: "Sanzioni",
    domanda: "Quali sono le sanzioni per il mancato o ritardato pagamento del contributo unificato?",
    risposta:
      "Le sanzioni sono progressive: (1) pagamento entro 60 giorni dalla notifica dell'invito: sanzione del 33% dell'importo dovuto; (2) pagamento tra il 61\u00B0 e l'80\u00B0 giorno: sanzione del 150%; (3) pagamento oltre l'80\u00B0 giorno o mancato pagamento: sanzione del 200%. In caso di dichiarazione di valore inferiore a quello effettivo, \u00E8 dovuta una sanzione dal 100% al 200% della differenza (art. 248, DPR 115/2002).",
    fonti: [{ label: "Art. 248 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" }],
  },
  {
    categoria: "Sanzioni",
    domanda: "Il giudice pu\u00F2 condannare al pagamento di un ulteriore contributo unificato in caso di impugnazione rigettata?",
    risposta:
      "S\u00EC. L'art. 13, c. 1-quater, DPR 115/2002 prevede che quando l'impugnazione (appello o ricorso in Cassazione) \u00E8 integralmente rigettata, dichiarata inammissibile o improcedibile, la parte che l'ha proposta \u00E8 tenuta a versare un ulteriore importo a titolo di contributo unificato pari a quello dovuto per l'iscrizione del ricorso. Questa disposizione ha funzione dissuasiva contro le impugnazioni manifestamente infondate.",
    fonti: [{ label: "Art. 13, c. 1-quater DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }],
  },
  // --- RIMBORSO ---
  {
    categoria: "Rimborso",
    domanda: "\u00C8 possibile ottenere il rimborso del contributo unificato pagato in eccesso o indebitamente?",
    risposta:
      "S\u00EC. Il rimborso \u00E8 previsto dagli artt. 192-195 del DPR 115/2002 nei seguenti casi: pagamento in misura superiore al dovuto, duplicazione di versamenti, versamento per un procedimento esente e versamento senza successiva iscrizione a ruolo. La domanda di rimborso va presentata all'Ufficio di Cancelleria competente, allegando la documentazione attestante il pagamento. Il diritto al rimborso \u00E8 soggetto a prescrizione decennale.",
    fonti: [{ label: "Artt. 192-195 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" }],
  },
  {
    categoria: "Rimborso",
    domanda: "Il contributo unificato \u00E8 deducibile fiscalmente?",
    risposta:
      "Il contributo unificato, avendo natura di tributo (come riconosciuto dalla Corte Costituzionale con sentenza 73/2005), non \u00E8 deducibile dal reddito imponibile ai fini IRPEF o IRES. Tuttavia, pu\u00F2 essere incluso tra le spese processuali che il giudice pone a carico della parte soccombente nella sentenza di condanna alle spese.",
  },
  // --- PROCESSO TRIBUTARIO ---
  {
    categoria: "Processo tributario",
    domanda: "Come funziona il contributo unificato nel processo tributario?",
    risposta:
      "Dal 2011 (D.L. 98/2011), anche il processo tributario \u00E8 soggetto al contributo unificato, con scaglioni propri previsti dall'art. 13, c. 6-quater, DPR 115/2002. Gli importi vanno da \u20AC 30,00 (fino a \u20AC 2.582,28) a \u20AC 1.500,00 (oltre \u20AC 200.000). Per le controversie di valore indeterminabile, il CU \u00E8 pari a \u20AC 120,00. In Cassazione, si applicano gli scaglioni del processo civile con raddoppio dell'importo.",
    fonti: [{ label: "Art. 13, c. 6-quater DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }, { label: "D.L. 98/2011", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2011-07-06;98" }],
  },
  // --- PROCESSO AMMINISTRATIVO ---
  {
    categoria: "Processo amministrativo",
    domanda: "Quanto costa il contributo unificato per un ricorso al TAR?",
    risposta:
      "Il ricorso ordinario al TAR e al Consiglio di Stato richiede un contributo unificato fisso di \u20AC 650,00 (art. 13, c. 6-bis, DPR 115/2002). Per i ricorsi in materia di appalti pubblici, l'importo varia in base al valore: \u20AC 2.000,00 fino a \u20AC 200.000, \u20AC 4.000,00 da \u20AC 200.001 a \u20AC 1.000.000, \u20AC 6.000,00 oltre \u20AC 1.000.000. Per i riti abbreviati (Titolo V, Libro IV CPA), il CU \u00E8 di \u20AC 1.800,00.",
    fonti: [{ label: "Art. 13, c. 6-bis DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }],
  },
  // --- CASI PARTICOLARI ---
  {
    categoria: "Casi particolari",
    domanda: "Quanto è il contributo unificato per il pignoramento presso terzi?",
    risposta:
      "Il contributo unificato per il pignoramento presso terzi (es. pignoramento dello stipendio o del conto corrente) è di € 43,00 se il credito è inferiore a € 2.500,00 e di € 139,00 se il credito è pari o superiore a € 2.500,00 (art. 13, c. 2, DPR 115/2002). Le opposizioni proposte nell'ambito di un'esecuzione già iniziata non richiedono un ulteriore CU.",
    fonti: [{ label: "Art. 13, c. 2 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }],
  },
  {
    categoria: "Casi particolari",
    domanda: "Qual è la tabella del contributo unificato aggiornata al 2026?",
    risposta:
      "La tabella del contributo unificato 2026 prevede 7 scaglioni per il processo civile: € 43 (fino a € 1.100), € 98 (fino a € 5.200), € 237 (fino a € 26.000), € 518 (fino a € 52.000), € 759 (fino a € 260.000), € 1.214 (fino a € 520.000) e € 1.686 (oltre € 520.000). In appello gli importi aumentano del 50%, in Cassazione raddoppiano. Gli importi non sono stati modificati dalla Legge di Bilancio 2025.",
    fonti: [{ label: "Art. 13 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }],
  },
  {
    categoria: "Casi particolari",
    domanda: "Quanto costa il contributo unificato per la separazione e il divorzio?",
    risposta:
      "Per la separazione consensuale e il divorzio congiunto, il CU \u00E8 di \u20AC 43,00 ciascuno (art. 13, c. 1, lett. a). Per la separazione e il divorzio giudiziale (contenzioso), il CU \u00E8 di \u20AC 98,00 ciascuno (art. 13, c. 1, lett. b). Con il cumulo separazione + divorzio congiunto (art. 473-bis.49 c.p.c., Riforma Cartabia), si pagano \u20AC 43 + \u20AC 43 = \u20AC 86,00. In tutti i casi, non \u00E8 dovuta la marca da \u20AC 27,00.",
    fonti: [{ label: "Art. 13 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:2002-05-30;115~art13" }, { label: "Circ. Min. 19/12/2024", url: "https://www.giustizia.it/giustizia/it/mg_1_8_1.page?contentId=SDC1453657" }],
  },
  {
    categoria: "Casi particolari",
    domanda: "Il contributo unificato \u00E8 dovuto per le opposizioni esecutive?",
    risposta:
      "Le opposizioni (agli atti esecutivi, all'esecuzione, di terzo) proposte nell'ambito di un'esecuzione gi\u00E0 iniziata non richiedono un ulteriore contributo unificato, essendo gi\u00E0 stato versato il CU per l'esecuzione (Circ. Min. Giustizia 38550/2015). L'opposizione all'esecuzione proposta prima dell'inizio dell'esecuzione richiede invece il versamento del CU secondo il valore della causa.",
  },
];
