import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ──────────────────────────────────────────────────────────────
  // Calcolo e Importi
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Calcolo e Importi",
    domanda: "Come si calcola la parcella di un avvocato penalista nel 2026?",
    risposta:
      "La parcella si calcola sommando i valori delle 4 fasi del procedimento (Studio, Introduttiva, Istruttoria/Dibattimentale, Decisionale) previsti dalla Tabella 15 del D.M. 147/2022 per la specifica competenza (Giudice di Pace, Tribunale Monocratico, Corte d'Appello, Cassazione, ecc.). Sul totale si applicano eventuali aumenti per pluralità di imputati (+20% per ogni parte oltre la prima, fino a +180% per 10 imputati) o valutazione soggettiva (±50%). Per il gratuito patrocinio penale si applica la riduzione di 1/3 ex art. 106-bis DPR 115/2002. Si aggiungono spese generali (15%), spese imponibili, CPA (4%), IVA (22%) e si sottrae la ritenuta d'acconto (20%) se il cliente è sostituto d'imposta.",
    fonti: [
      { label: "Art. 12 c. 3 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art12" },
      { label: "D.M. 147/2022 (GU n. 236/2022)", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG" },
    ],
  },
  {
    categoria: "Calcolo e Importi",
    domanda: "Quanto costa in media un avvocato penalista davanti al Tribunale Monocratico?",
    risposta:
      "Per un procedimento penale ordinario davanti al Tribunale in composizione Monocratica, applicando i valori medi della Tabella 15 D.M. 147/2022, il compenso totale è di circa € 3.592 (somma delle 4 fasi medie: € 473 + € 567 + € 1.134 + € 1.418), oltre spese generali 15%, CPA 4% e IVA 22%. Il range di liquidazione varia tra € 1.796 (minimi) e € 5.388 (massimi), prima dei singoli aumenti per pluralità imputati o valutazione soggettiva. Con tutti gli accessori il netto da fatturare al cliente è di circa € 5.150 (valore medio standard).",
    fonti: [
      { label: "Tabella 15 D.M. 147/2022", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG" },
    ],
  },
  {
    categoria: "Calcolo e Importi",
    domanda: "Qual è il compenso massimo dell'avvocato in Corte di Cassazione penale?",
    risposta:
      "Per un ricorso davanti alla Corte Suprema di Cassazione in materia penale, il valore massimo della Tabella 15 D.M. 147/2022 è di € 9.498 (medio totale € 6.332). La Cassazione penale prevede solo le fasi di Studio (max € 1.417,50), Introduttiva (max € 3.969,00) e Decisionale (max € 4.111,50), poiché la fase istruttoria non è prevista nel giudizio di legittimità (artt. 606 ss. c.p.p.). Si aggiungono poi spese generali 15%, CPA 4%, IVA 22%.",
    fonti: [
      { label: "Tabella 15 D.M. 147/2022", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG" },
    ],
  },
  {
    categoria: "Calcolo e Importi",
    domanda: "Quanto costa l'avvocato penale per un procedimento davanti al Giudice di Pace?",
    risposta:
      "Davanti al Giudice di Pace per reati di minore entità (D.Lgs. 274/2000), il valore medio totale è di € 2.269 (fase Studio € 378 + Introduttiva € 473 + Istruttoria € 756 + Decisionale € 662). Il range è € 1.134,50 (minimi) - € 3.403,50 (massimi). Aggiungendo spese generali 15%, CPA 4% e IVA 22%, il costo lordo per il cliente di un valore medio è di circa € 3.260.",
    fonti: [
      { label: "Tabella 15 D.M. 147/2022", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG" },
    ],
  },
  {
    categoria: "Calcolo e Importi",
    domanda: "Il giudice può ridurre la parcella penale sotto il minimo tabellare?",
    risposta:
      "No. La Corte di Cassazione, con ordinanza n. 29925 del 12 novembre 2025, ha confermato che i valori minimi della Tabella 15 sono inderogabili: il giudice non può scendere sotto il minimo nemmeno con una valutazione discrezionale. La rigidità deriva dalla modifica del D.M. 8 marzo 2018 n. 37, che ha sostituito l'espressione «di regola» con «in ogni caso» all'art. 12 c. 1 D.M. 55/2014. Una parcella liquidata al di sotto del minimo è sempre impugnabile.",
    fonti: [
      { label: "Cass. ord. 29925/2025", url: "https://www.misterlex.it/cassazione-civile/2025/29925/" },
      { label: "D.M. 37/2018", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2018-03-08;37" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Normativa
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Normativa",
    domanda: "Cos'è il D.M. 55/2014 e cosa ha cambiato il D.M. 147/2022?",
    risposta:
      "Il D.M. 10 marzo 2014 n. 55 è il regolamento ministeriale che ha sostituito le abrogate tariffe forensi (D.M. 127/2004), introducendo i parametri per la liquidazione dei compensi degli avvocati ai sensi dell'art. 13 c. 6 L. 247/2012. Il D.M. 13 agosto 2022 n. 147, in vigore dal 23 ottobre 2022, ha aggiornato tutti i valori parametrici con un incremento medio del 50% rispetto al testo originario. Ha inoltre introdotto l'art. 22-bis che codifica per la prima volta il compenso orario (€ 200-500 per ora o frazione superiore a 30 minuti).",
    fonti: [
      { label: "D.M. 55/2014 (Normattiva)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55" },
      { label: "D.M. 147/2022 (GU)", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG" },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "I parametri forensi penali sono vincolanti tra avvocato e cliente?",
    risposta:
      "No. I parametri non costituiscono tariffe inderogabili nei rapporti privati: dal D.L. 1/2012 (legge liberalizzazioni) le tariffe forensi sono state abolite e l'avvocato può pattuire liberamente il proprio compenso con il cliente, anche in misura forfettaria, percentuale o oraria. I parametri operano in via sussidiaria: si applicano in mancanza di accordo scritto (art. 1 D.M. 55/2014) o in sede di liquidazione giudiziale del compenso. In quel secondo caso, dal D.M. 37/2018 i limiti del ±50% sono inderogabili.",
    fonti: [
      { label: "Art. 1 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art1" },
      { label: "Art. 13 c. 6 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247~art13" },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "Quando si applicano i nuovi parametri del 2022 invece dei vecchi?",
    risposta:
      "I valori aggiornati del D.M. 147/2022 si applicano alle prestazioni professionali esaurite dopo il 23 ottobre 2022 (data di entrata in vigore). Per le attività concluse prima si applicano i parametri del D.M. 55/2014 originario (eventualmente come modificato dal D.M. 37/2018). La Cassazione, con ordinanza n. 33482 del 14 novembre 2022, ha chiarito che il criterio è il tempus regit prestationem: ciò che conta è il momento di conclusione dell'attività, non quello di liquidazione.",
    fonti: [
      { label: "Cass. ord. 33482/2022", url: "https://www.cortedicassazione.it" },
      { label: "Altalex - Disciplina transitoria", url: "https://www.altalex.com/documents/2022/10/10/parametri-forensi-g-u" },
    ],
  },
  {
    categoria: "Normativa",
    domanda: "Cos'è la riforma dell'ordinamento forense 2025-2026?",
    risposta:
      "Il 4 settembre 2025 il Consiglio dei Ministri ha approvato in via preliminare lo schema di DDL delega per la riforma dell'ordinamento forense, che prevede: l'aggiornamento biennale automatico dei parametri ministeriali, l'attribuzione di efficacia esecutiva al parere di congruità del Consiglio dell'Ordine (in caso di mancato pagamento, il parere costituirà titolo esecutivo), il rafforzamento dell'obbligo di trasparenza nella determinazione dei compensi. L'iter parlamentare è in corso con entrata in vigore prevista nel 2026.",
    fonti: [
      { label: "Teamsystem - Riforma compensi 2025", url: "https://www.teamsystem.com/magazine/legal/come-cambia-compenso-avvocati-con-riforma-2025/" },
      { label: "Camera - DDL Riforma Forense", url: "https://temi.camera.it/leg19/provvedimento/delega-al-governo-per-la-riforma-dell-ordinamento-forense.html" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Spese e Accessori
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Spese e Accessori",
    domanda: "Cosa sono le spese generali al 15% nella parcella penale?",
    risposta:
      "Le spese generali forfettarie sono un'integrazione automatica del compenso a copertura dei costi di studio non documentati (utenze, software, segreteria, materiale di consumo). L'art. 2 c. 2 del D.M. 55/2014 le fissa al 15% del compenso, dovute anche quando il compenso è pattuito convenzionalmente. Concorrono all'imponibile fiscale insieme al compenso e alle eventuali spese imponibili (trasferta, perizie). Si calcolano sul compenso al netto di aumenti e riduzioni, non sul totale fattura.",
    fonti: [
      { label: "Art. 2 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art2" },
    ],
  },
  {
    categoria: "Spese e Accessori",
    domanda: "Cos'è la CPA al 4% e come si calcola sulla parcella penale?",
    risposta:
      "La CPA (Contributo Cassa Forense) è il contributo previdenziale obbligatorio che l'avvocato versa alla Cassa Forense, disciplinato dall'art. 11 della L. 11 febbraio 1992 n. 141. È pari al 4% dell'imponibile fiscale (compenso + spese generali + spese imponibili). Va addebitato in fattura al cliente e concorre alla base imponibile IVA. È dovuto anche dagli avvocati in regime forfettario.",
    fonti: [
      { label: "L. 141/1992 art. 11", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1992-02-11;141" },
    ],
  },
  {
    categoria: "Spese e Accessori",
    domanda: "Quando si applica la ritenuta d'acconto al 20% nella parcella penale?",
    risposta:
      "La ritenuta d'acconto al 20% (art. 25 DPR 600/1973) si applica quando il cliente è sostituto d'imposta: società, ente pubblico, professionista con partita IVA, condominio. Si calcola su compenso + spese generali + spese imponibili (NON sulla CPA, NON sull'IVA, NON sulle spese esenti). Quando il cliente è un privato consumatore non si applica la ritenuta. Il sostituto trattiene il 20% e lo versa con codice tributo 1040.",
    fonti: [
      { label: "Art. 25 DPR 600/1973", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600~art25" },
    ],
  },
  {
    categoria: "Spese e Accessori",
    domanda: "In regime forfettario come si fattura la parcella penale?",
    risposta:
      "In regime forfettario (L. 190/2014 c. 54-89) la parcella non prevede applicazione di IVA né di ritenuta d'acconto. La CPA Cassa Forense al 4% resta dovuta. La fattura va emessa con la dicitura «Operazione in franchigia IVA e non soggetta a ritenuta d'acconto effettuata ai sensi dell'art. 1, commi da 54 a 89 della Legge n. 190/2014 - Regime forfettario». Per fatture di importo superiore a € 77,47 va applicata una marca da bollo da € 2.",
    fonti: [
      { label: "L. 190/2014 c. 54-89", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Gratuito Patrocinio
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Gratuito Patrocinio",
    domanda: "Chi può accedere al gratuito patrocinio nel processo penale 2026?",
    risposta:
      "Possono accedere al gratuito patrocinio penale (patrocinio a spese dello Stato) i soggetti con un reddito imponibile annuo inferiore a € 12.838,01, limite aggiornato dal D.M. Interno 8 gennaio 2024 (GU n. 31/2024). Il limite è aumentato di € 1.032,91 per ciascun familiare convivente. La domanda va presentata al Consiglio dell'Ordine degli Avvocati del luogo del giudice procedente. L'ammissione anticipata è disciplinata dall'art. 96 DPR 115/2002.",
    fonti: [
      { label: "Art. 76 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115~art76" },
      { label: "D.M. Interno 8/1/2024", url: "https://www.gazzettaufficiale.it/eli/id/2024/02/07/24A00567/sg" },
    ],
  },
  {
    categoria: "Gratuito Patrocinio",
    domanda: "Di quanto si riduce la parcella con il gratuito patrocinio penale?",
    risposta:
      "Nel processo penale la riduzione del compenso per il gratuito patrocinio è di un terzo (33,33%) ex art. 106-bis del DPR 115/2002. Questa norma fu introdotta dall'art. 1 c. 607 L. 234/2021 e coordinata con la riforma Cartabia (D.Lgs. 150/2022). Nei giudizi civili, amministrativi e tributari la riduzione è invece della metà (50%) ex art. 130 DPR 115/2002. La distinzione è fondamentale: applicare la riduzione del 50% nel penale produce una sottostima del compenso e una conseguente impugnazione.",
    fonti: [
      { label: "Art. 106-bis DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" },
      { label: "Art. 130 DPR 115/2002 (civile)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115" },
    ],
  },
  {
    categoria: "Gratuito Patrocinio",
    domanda: "L'avvocato d'ufficio nel processo penale va sempre pagato?",
    risposta:
      "Sì. L'art. 97 del codice di procedura penale prevede che l'avvocato d'ufficio sia nominato dal giudice quando l'imputato non ha designato un difensore di fiducia. Il compenso è dovuto direttamente dall'imputato, anche se la prestazione non era richiesta. L'unica ipotesi di esenzione si verifica quando l'imputato è ammesso al gratuito patrocinio: in quel caso paga lo Stato (con la riduzione di 1/3). In caso di inesigibilità dal cliente, l'avvocato d'ufficio può recuperare il credito presso l'Erario solo previa specifica procedura ex art. 116 DPR 115/2002.",
    fonti: [
      { label: "Art. 97 c.p.p.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1988-09-22;447~art97" },
      { label: "Art. 116 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115~art116" },
    ],
  },
  {
    categoria: "Gratuito Patrocinio",
    domanda: "Qual è il limite di reddito 2026 per il gratuito patrocinio?",
    risposta:
      "Il limite di reddito per l'ammissione al patrocinio a spese dello Stato è stato fissato a € 12.838,01 dal D.M. Interno 8 gennaio 2024 (GU n. 31 del 7/2/2024). Il limite è aumentato di € 1.032,91 per ciascun familiare convivente. L'aggiornamento è biennale ex art. 77 DPR 115/2002. Il reddito da considerare è quello imponibile risultante dall'ultima dichiarazione, comprensivo dei redditi anche esenti da IRPEF o sottoposti a ritenuta a titolo d'imposta. Per i procedimenti penali rileva la posizione personale del solo richiedente quando si tratta di redditi prodotti separatamente dai familiari conviventi.",
    fonti: [
      { label: "D.M. Interno 8/1/2024", url: "https://www.gazzettaufficiale.it/eli/id/2024/02/07/24A00567/sg" },
      { label: "Art. 76 DPR 115/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115~art76" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Casi Particolari
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Casi Particolari",
    domanda: "Come si calcola il compenso nel giudizio abbreviato o nel patteggiamento?",
    risposta:
      "Per il giudizio abbreviato (art. 438 c.p.p.) e per il patteggiamento (art. 444 c.p.p.) si applica la competenza del giudice procedente (GIP/GUP, Tribunale Monocratico, Tribunale Collegiale, ecc.) con i valori della Tabella 15 D.M. 147/2022. Tipicamente le fasi attivate sono Studio + Introduttiva + Decisionale (la fase istruttoria è assorbita dalla più semplice articolazione del rito). La prassi giudiziaria prevede spesso una riduzione del 20-30% sulla fase decisionale per la minore complessità della discussione orale.",
    fonti: [
      { label: "Art. 438 c.p.p.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1988-09-22;447~art438" },
      { label: "Art. 444 c.p.p.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1988-09-22;447~art444" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Quanto si paga per la convalida dell'arresto?",
    risposta:
      "La Tabella 15 del D.M. 147/2022 non prevede una voce autonoma per la convalida dell'arresto. Il Consiglio Nazionale Forense, con Parere n. 18 del 27 marzo 2025, ha chiarito che si applicano i parametri della voce «Indagini preliminari», collocando l'attività verso la fascia medio-alta dei valori tabellari, specie in presenza di reati gravi, complessità sulle questioni di legittimità dell'arresto o pluralità di imputati. Il difensore valuta tipicamente: Studio (€ 425-1.277), Istruttoria/udienza convalida (€ 520-1.560) e Decisionale (€ 614-1.844).",
    fonti: [
      { label: "CNF Parere n. 18/2025", url: "https://www.consiglionazionaleforense.it/parametri" },
      { label: "Tabella 15 D.M. 147/2022 - Indagini preliminari", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Come si calcolano gli aumenti per pluralità di imputati?",
    risposta:
      "L'art. 8 del D.M. 55/2014 prevede un aumento del 20% per ogni parte/imputato oltre il primo, fino a un massimo di 10 imputati (aumento cumulativo +180%). Per imputati dall'11° al 20° si applica un ulteriore +5% per ciascuno. Esempio: difesa di 3 imputati = +40% sul compenso base (20% × 2); difesa di 10 imputati = +180% (20% × 9). La regola si applica anche quando l'avvocato difende un solo soggetto contro più parti, purché la prestazione comporti l'esame di situazioni di fatto e diritto distinte.",
    fonti: [
      { label: "Art. 8 D.M. 55/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art8" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Come si calcola il compenso nelle indagini difensive?",
    risposta:
      "Le indagini difensive ex L. 397/2000 (artt. 391-bis ss. c.p.p.) hanno una voce dedicata nella Tabella 15 D.M. 147/2022. Sono previste solo le fasi di Studio (medio € 851) e Istruttoria (medio € 1.418), per un totale medio di € 2.269 (range € 1.134,50 - € 3.403,50). Le fasi introduttiva e decisionale non sono previste perché l'attività investigativa difensiva non si conclude con atto processuale autonomo, ma confluisce nel procedimento principale.",
    fonti: [
      { label: "L. 397/2000 indagini difensive", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-12-07;397" },
      { label: "Tabella 15 D.M. 147/2022", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG" },
    ],
  },
  {
    categoria: "Casi Particolari",
    domanda: "Quanto costa l'avvocato penalista per il Magistrato di Sorveglianza?",
    risposta:
      "Per i procedimenti monocratici davanti al Magistrato di Sorveglianza (permessi premio, liberazione anticipata, applicazione di misure alternative ex art. 47 e ss. L. 354/1975), la Tabella 15 D.M. 147/2022 prevede tre fasi: Studio (medio € 315), Introduttiva (medio € 378), Decisionale (medio € 945). Totale medio € 1.638 (range € 819 - € 2.457). La fase istruttoria non è prevista. Per procedimenti collegiali davanti al Tribunale di Sorveglianza i valori sono più elevati (totale medio € 4.254).",
    fonti: [
      { label: "Tabella 15 D.M. 147/2022", url: "https://www.gazzettaufficiale.it/eli/id/2022/10/08/22G00157/SG" },
      { label: "L. 354/1975 ordinamento penitenziario", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1975-07-26;354" },
    ],
  },

  // ──────────────────────────────────────────────────────────────
  // Preventivo e Pagamento
  // ──────────────────────────────────────────────────────────────
  {
    categoria: "Preventivo e Pagamento",
    domanda: "Il preventivo scritto è obbligatorio per l'avvocato penalista?",
    risposta:
      "Sì. Dal 2017, l'avvocato è tenuto a consegnare al cliente un preventivo scritto al momento del conferimento dell'incarico, anche se non espressamente richiesto. L'obbligo è stato introdotto dall'art. 1 c. 150 della L. 124/2017 (legge annuale per il mercato e la concorrenza), che ha modificato l'art. 13 c. 4 della L. 247/2012. Il preventivo deve indicare oggetto dell'incarico, oneri ipotizzabili, condizioni economiche pattuite e indicazione del grado di complessità. La mancata consegna non priva del diritto al compenso (che sarà determinato secondo i parametri ministeriali) ma costituisce illecito disciplinare.",
    fonti: [
      { label: "L. 124/2017 art. 1 c. 150", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-08-04;124" },
      { label: "Art. 13 c. 4 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247~art13" },
    ],
  },
  {
    categoria: "Preventivo e Pagamento",
    domanda: "In quanto tempo si prescrive il compenso dell'avvocato penalista?",
    risposta:
      "Il diritto al compenso dell'avvocato si prescrive in 3 anni dalla conclusione dell'incarico, ai sensi dell'art. 2956 n. 2 del codice civile. La prescrizione decorre dal momento in cui l'attività professionale si è conclusa, non dal momento dell'emissione della fattura. Per le prestazioni a fasi (es. processo penale con più gradi di giudizio), ogni fase ha una sua autonoma prescrizione. La prescrizione si interrompe con l'emissione del decreto ingiuntivo o con altra forma di costituzione in mora.",
    fonti: [
      { label: "Art. 2956 c.c.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2956" },
    ],
  },
  {
    categoria: "Preventivo e Pagamento",
    domanda: "Cosa succede se l'avvocato non emette il preventivo scritto?",
    risposta:
      "La mancata consegna del preventivo scritto non priva l'avvocato del diritto al compenso, che sarà comunque determinato secondo i parametri ministeriali (D.M. 147/2022). Tuttavia, la violazione dell'obbligo di trasparenza costituisce illecito disciplinare e può portare a un procedimento davanti al Consiglio Distrettuale di Disciplina. In sede di liquidazione giudiziale, l'assenza di preventivo può essere valutata negativamente dal giudice, con applicazione dei valori medi (e non massimi) della Tabella 15. La giurisprudenza maggioritaria conferma comunque il diritto al compenso secondo i parametri.",
    fonti: [
      { label: "Codice Deontologico Forense", url: "https://www.consiglionazionaleforense.it" },
      { label: "Art. 13 L. 247/2012", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247~art13" },
    ],
  },
];
