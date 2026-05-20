import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ============================================================
  // Calcolo
  // ============================================================
  {
    categoria: "Calcolo",
    domanda: "Come si calcola il risarcimento INAIL?",
    risposta:
      "Il sistema INAIL si articola su tre soglie di invalidità permanente: fino al 5% non è dovuto alcun indennizzo (franchigia); dal 6% al 15% spetta un indennizzo in capitale una tantum, calcolato in base alla tabella DM 12 luglio 2000 (o DM 45/2019 per eventi dal 1° gennaio 2019), differenziato per età e grado; dal 16% al 100% spetta una rendita vitalizia mensile composta da una quota per danno biologico (importo fisso dalla tabella) e una quota patrimoniale (retribuzione annua × grado × coefficiente A/B/C/D). Sia capitale sia rendita sono esenti IRPEF (art. 6 DPR 601/1973).",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 38/2000",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
      },
      {
        label: "DM 12 luglio 2000",
        url: "https://www.gazzettaufficiale.it/eli/id/2000/07/25/000A9926/sg",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come viene calcolato il danno biologico INAIL?",
    risposta:
      "Il danno biologico INAIL è valutato in base alla Tabella delle Menomazioni allegata al D.M. 12 luglio 2000 (allegato 4), che contiene circa 400 voci e assegna a ciascuna menomazione una percentuale dal 1% al 100%. La valutazione è effettuata dal medico legale INAIL e tiene conto degli aspetti anatomico-funzionali e dinamico-relazionali. Una volta riconosciuta la percentuale, si applica la tabella indennizzo (capitale per 6-15%, rendita per ≥16%).",
    fonti: [
      {
        label: "DM 12 luglio 2000 — Tabella menomazioni",
        url: "https://www.gazzettaufficiale.it/eli/id/2000/07/25/000A9926/sg",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si calcola il risarcimento danni per un infortunio sul lavoro?",
    risposta:
      "Per un infortunio sul lavoro, l'INAIL eroga: durante l'inabilità temporanea, l'indennità giornaliera al 60% della retribuzione (giorni 4-90) e al 75% (dal 91°); per la menomazione permanente, indennizzo in capitale (6-15%) o rendita vitalizia (≥16%). Se l'evento è dovuto a responsabilità del datore di lavoro (art. 2087 c.c.) o di terzi, il lavoratore può richiedere in sede civile il danno differenziale, ossia l'eccedenza tra il danno totale (es. Tabelle Milano) e quanto già erogato dall'INAIL.",
    fonti: [
      {
        label: "Art. 68 T.U. 1124/1965",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124",
      },
    ],
  },

  // ============================================================
  // Importi per punti di invalidità
  // ============================================================
  {
    categoria: "Importi per punti",
    domanda: "Quanti soldi sono 6 punti di invalidità INAIL?",
    risposta:
      "Per 6 punti di invalidità (soglia minima per l'indennizzo), il capitale varia per età. Per un uomo 36-40 anni (evento 2014-2018): circa € 4.637. Per un evento post 1/1/2019 (tabella unisex DM 45/2019, +40% medio): circa € 6.500-7.000. Per il 2025 si aggiunge il +0,8% del DM 85/2025. L'importo è erogato in unica soluzione, esente IRPEF.",
    fonti: [
      {
        label: "DM 45/2019",
        url: "https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2019/DM-45-del-23042019",
      },
    ],
  },
  {
    categoria: "Importi per punti",
    domanda: "Quanti soldi sono 7 punti di invalidità INAIL?",
    risposta:
      "Per 7 punti (uomo 36-40 anni, evento 2014-2018): circa € 5.748. Per eventi post 2019 con tabella unisex DM 45/2019, l'importo è mediamente +40%, quindi circa € 8.000 ca. Per i giovani sotto 20 anni l'importo è più alto (es. € 7.185 per uomo evento 2014-2018), per gli ultrasessantacinquenni più basso.",
    fonti: [
      {
        label: "Tabella indennizzo capitale 6-15%",
        url: "https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2019/DM-45-del-23042019",
      },
    ],
  },
  {
    categoria: "Importi per punti",
    domanda: "Quanti soldi sono 10 punti di invalidità INAIL?",
    risposta:
      "Per 10 punti, il valore medio dell'indennizzo capitale 2025 (DM 45/2019 + rivalutazione +0,8% del DM 85/2025) è circa € 8.967,29 (importo standard di riferimento, non differenziato per età). Per un uomo 36-40 anni (evento 2014-2018, tabella precedente al DM 45/2019): € 9.660,36. Gli importi reali per età variano: più alti per i giovani, più bassi per gli anziani.",
    fonti: [
      {
        label: "Circ. INAIL 45/2025",
        url: "https://www.inail.it",
      },
      {
        label: "Tabella comparativa 2024-2025 (FiscoeTasse)",
        url: "https://www.fiscoetasse.com/normativa-prassi/13503-indennizzi-danno-biologico-inail-2025.html",
      },
    ],
  },
  {
    categoria: "Importi per punti",
    domanda: "Quanti soldi sono 11 punti di invalidità INAIL?",
    risposta:
      "Per 11 punti (uomo 36-40 anni, evento 2014-2018): € 11.689,13. Per eventi post 2019 con tabella unisex DM 45/2019: mediamente +40%, ossia circa € 16.000. Per il 2025 si applica anche la rivalutazione +0,8% del DM 85/2025.",
    fonti: [
      {
        label: "DM 45/2019",
        url: "https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2019/DM-45-del-23042019",
      },
    ],
  },
  {
    categoria: "Importi per punti",
    domanda: "Quanti soldi sono 16 punti di invalidità INAIL?",
    risposta:
      "Per 16 punti scatta la rendita vitalizia. La quota biologica annua è circa € 1.217,21 (post DM 85/2025); a questa si aggiunge la quota patrimoniale = Retribuzione × 0,16 × 0,4 (coefficiente fascia A). Es. retribuzione € 30.000: quota patrim. = € 1.920/anno. Totale annuo ≈ € 3.137 / mensile ≈ € 261, esente IRPEF.",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 38/2000",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
      },
    ],
  },
  {
    categoria: "Importi per punti",
    domanda: "Quanti soldi sono 20 punti di invalidità INAIL?",
    risposta:
      "Per 20 punti, la quota biologica annua è € 1.704,09 (post DM 85/2025). Quota patrimoniale = Retribuzione × 0,20 × 0,4 (coeff. A). Esempio retribuzione € 30.000: quota patrim. = € 2.400/anno. Totale annuo ≈ € 4.104 / mensile ≈ € 342, esente IRPEF. Le quote integrative per familiari aumentano la sola quota patrimoniale del 5% per ciascuno.",
    fonti: [
      {
        label: "DM 12/07/2000 allegato 5 e 6",
        url: "https://www.gazzettaufficiale.it/eli/id/2000/07/25/000A9926/sg",
      },
    ],
  },

  // ============================================================
  // Rendita
  // ============================================================
  {
    categoria: "Rendita",
    domanda: "Quanto è la rendita mensile INAIL per 16 punti?",
    risposta:
      "Per 16 punti, la quota biologica della rendita è circa € 1.217,21 annui (post DM 85/2025), ossia circa € 101 mensili. A questa va sommata la quota patrimoniale, dipendente dalla retribuzione (= Retribuzione × 0,16 × 0,4). Le quote integrative per familiari aggiungono +5% sulla sola quota patrimoniale per ciascun avente diritto.",
    fonti: [
      {
        label: "Tabella DM 12/07/2000 + DM 85/2025",
        url: "https://www.inail.it",
      },
    ],
  },
  {
    categoria: "Rendita",
    domanda: "Quanti anni dura la rendita INAIL?",
    risposta:
      "La rendita INAIL per inabilità permanente (≥16%) è vitalizia, cioè dura per tutta la vita del beneficiario. È soggetta a revisione entro 10 anni dall'infortunio (15 anni per malattie professionali), poi diventa definitiva. La rendita non si trasmette in caso di morte non legata all'infortunio: in tal caso possono spettare prestazioni ai superstiti se la morte è connessa all'infortunio o alla malattia professionale.",
    fonti: [
      {
        label: "Art. 91 T.U. 1124/1965",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124",
      },
    ],
  },
  {
    categoria: "Rendita",
    domanda: "Qual è uno dei requisiti per accedere alla rendita vitalizia INAIL?",
    risposta:
      "Il requisito principale è avere una menomazione permanente dell'integrità psicofisica (danno biologico) pari o superiore al 16%, riconosciuta a seguito di infortunio sul lavoro o malattia professionale. La menomazione è valutata dal medico legale INAIL sulla base della Tabella delle Menomazioni (DM 12/07/2000). Sotto questa soglia (6-15%) spetta solo l'indennizzo in capitale.",
    fonti: [
      {
        label: "Art. 13 c. 2 D.Lgs. 38/2000",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
      },
    ],
  },
  {
    categoria: "Rendita",
    domanda: "Quando ci sarà la prossima rivalutazione delle rendite INAIL?",
    risposta:
      "La rivalutazione del danno patrimoniale delle rendite è annuale, dal 1° luglio di ogni anno (art. 11 D.Lgs. 38/2000). La rivalutazione del danno biologico è automatica dal 2016 (L. 208/2015) e si applica anch'essa dal 1° luglio. L'ultima rivalutazione è quella del DM 85/2025: +0,8% sul danno biologico (capitale e rendita), in vigore dal 1° luglio 2025 e operativa con la Circ. INAIL 45/2025.",
    fonti: [
      {
        label: "DM 85/2025",
        url: "https://www.lavoro.gov.it/media/90764",
      },
      {
        label: "Circ. INAIL 45/2025",
        url: "https://www.inail.it",
      },
    ],
  },
  {
    categoria: "Rendita",
    domanda: "Qual è l'aggiornamento della rendita INAIL per il 2026?",
    risposta:
      "Al momento (maggio 2026) non è ancora stato pubblicato il decreto di rivalutazione 2026. Resta in vigore la rivalutazione del DM 85/2025 (+0,8% danno biologico) e il coefficiente di rivalutazione delle prestazioni patrimoniali 2025 (1,0084). Per l'aggiornamento 2026 occorre attendere il decreto del Ministero del Lavoro previsto entro il 1° luglio 2026.",
    fonti: [
      {
        label: "Art. 11 D.Lgs. 38/2000",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
      },
    ],
  },

  // ============================================================
  // Indennizzo / Tabelle
  // ============================================================
  {
    categoria: "Indennizzo capitale",
    domanda: "Quale età si considera per il calcolo dell'indennizzo in capitale?",
    risposta:
      "L'età da considerare (art. 13 c. 2 lett. a D.Lgs. 38/2000) è quella dell'assicurato al momento della guarigione clinica, ossia alla data di cessazione del periodo di inabilità temporanea assoluta. Per le malattie professionali senza inabilità temporanea, si considera l'età alla data della denuncia di malattia all'INAIL. A parità di percentuale, un lavoratore più giovane percepisce un capitale più alto.",
    fonti: [
      {
        label: "Art. 13 c. 2 D.Lgs. 38/2000",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
      },
    ],
  },
  {
    categoria: "Indennizzo capitale",
    domanda: "Quando si applica la tabella unisex INAIL?",
    risposta:
      "La tabella unisex (DM 45/2019) si applica agli infortuni verificatisi e alle malattie professionali denunciate dal 1° gennaio 2019. Per gli eventi precedenti restano applicabili le tabelle DM 12/07/2000 differenziate per sesso. La nuova tabella unisex ha eliminato la distinzione uomo/donna (in attuazione della sentenza Corte di Giustizia UE C-318/13) e ha incrementato gli importi mediamente del 40%.",
    fonti: [
      {
        label: "DM 45/2019",
        url: "https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2019/DM-45-del-23042019",
      },
      {
        label: "Circ. INAIL 27/2019",
        url: "https://www.inail.it",
      },
    ],
  },
  {
    categoria: "Indennizzo capitale",
    domanda: "Posso richiedere l'aggravamento del danno biologico INAIL?",
    risposta:
      "Sì. Per l'indennizzo in capitale (6-15%), l'aggravamento può essere richiesto una sola volta. L'INAIL calcola la differenza tra il capitale corrispondente al nuovo grado e quello già erogato (ricalcolato secondo la tabella vigente al momento della richiesta). Per la rendita (≥16%), la revisione per aggravamento è sempre possibile entro 10 anni dall'infortunio (15 per malattie professionali).",
    fonti: [
      {
        label: "Art. 91 T.U. 1124/1965",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124",
      },
    ],
  },

  // ============================================================
  // Tassazione
  // ============================================================
  {
    categoria: "Tassazione",
    domanda: "La rendita INAIL è tassata IRPEF?",
    risposta:
      "No, la rendita INAIL per inabilità permanente è esente da IRPEF, in base all'art. 6 del D.P.R. 601/1973 (chiarito da costante interpretazione dell'Agenzia delle Entrate). Anche l'indennizzo in capitale (6-15%), l'APC, l'assegno funerario, l'assegno di incollocabilità e la rendita ai superstiti sono esenti. È invece soggetta a IRPEF l'indennità giornaliera per inabilità temporanea assoluta, in quanto reddito sostitutivo della retribuzione.",
    fonti: [
      {
        label: "Art. 6 DPR 601/1973",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;601~art6",
      },
    ],
  },

  // ============================================================
  // Danno differenziale
  // ============================================================
  {
    categoria: "Danno differenziale",
    domanda: "Come si calcola il danno differenziale INAIL?",
    risposta:
      "Il danno differenziale si calcola con il metodo delle poste omogenee (Cass. SU 12567/2018, ribadito da Cass. 30293/2023). Si scompone l'indennizzo INAIL nelle sue componenti (danno biologico, danno patrimoniale, indennità temporanea) e si sottrae dal risarcimento civilistico solo la parte corrispondente alla stessa voce di danno. Il danno morale e il danno biologico temporaneo (mai indennizzati INAIL) restano integralmente al lavoratore. Per la rendita, occorre capitalizzare le quote future con i coefficienti aggiornati (Circ. INAIL 46/2025).",
    fonti: [
      {
        label: "Art. 10 T.U. 1124/1965",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124",
      },
      {
        label: "Cass. SU 12567/2018",
        url: "https://www.cortedicassazione.it",
      },
    ],
  },
  {
    categoria: "Danno differenziale",
    domanda: "Qual è la differenza tra danno biologico INAIL e danno differenziale?",
    risposta:
      "Il danno biologico INAIL è l'indennizzo erogato automaticamente dall'Istituto in base alle tabelle (DM 12/07/2000 e DM 45/2019), che copre solo una parte del pregiudizio (biologico permanente e patrimoniale presunto). Il danno differenziale è invece la parte di danno civilisticamente risarcibile che eccede l'indennizzo INAIL (es. danno morale, danno biologico temporaneo, maggior danno biologico permanente, spese mediche, danni patrimoniali ulteriori). Per ottenerlo serve un'azione civile contro il datore di lavoro o terzo responsabile.",
    fonti: [
      {
        label: "Cass. SU 12566/2018",
        url: "https://www.cortedicassazione.it",
      },
    ],
  },

  // ============================================================
  // Cumulo
  // ============================================================
  {
    categoria: "Cumulo prestazioni",
    domanda: "La rendita INAIL fa cumulo con la pensione INPS?",
    risposta:
      "Sì. La rendita INAIL per inabilità permanente è generalmente cumulabile con la pensione INPS di invalidità, di vecchiaia e con la NASpI, in quanto risponde a una funzione diversa (indennitaria e non previdenziale). Esistono alcuni limiti per la rendita ai superstiti INAIL in cumulo con la pensione di reversibilità INPS, oggetto di specifiche regole (L. 388/2000).",
    fonti: [
      {
        label: "L. 388/2000",
        url: "https://www.normattiva.it",
      },
    ],
  },

  // ============================================================
  // Quote integrative
  // ============================================================
  {
    categoria: "Quote integrative",
    domanda: "Cos'è la quota integrativa INAIL?",
    risposta:
      "La quota integrativa (art. 77 T.U. 1124/1965) è un aumento del 5% (un ventesimo) della sola quota PATRIMONIALE della rendita, riconosciuto per ciascun familiare a carico: coniuge o unito civilmente, figli minorenni, figli fino a 21 anni se studenti di scuola media superiore, figli fino a 26 anni se universitari, figli inabili senza limiti di età. Non si applica alla quota biologica. Le quote cessano al venir meno del requisito (es. compimento maggiore età).",
    fonti: [
      {
        label: "Art. 77 T.U. 1124/1965",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124",
      },
    ],
  },

  // ============================================================
  // Casi particolari
  // ============================================================
  {
    categoria: "Casi particolari",
    domanda: "Il tunnel carpale è risarcito dall'INAIL?",
    risposta:
      "Sì, la sindrome del tunnel carpale rientra nella Tabella delle Menomazioni INAIL al codice 163 (esiti neurologici di sindromi canalicolari), con valutazione fino a 7 punti percentuali, variabile in base alla bilateralità e all'efficacia del trattamento. Essendo nella fascia 6-15%, dà diritto all'indennizzo in capitale. Per essere indennizzata, deve essere riconosciuta come malattia professionale (esposizione a movimenti ripetitivi).",
    fonti: [
      {
        label: "DM 12/07/2000 — tabella menomazioni codice 163",
        url: "https://www.gazzettaufficiale.it/eli/id/2000/07/25/000A9926/sg",
      },
    ],
  },
  {
    categoria: "Casi particolari",
    domanda: "Il COVID-19 è risarcito dall'INAIL come infortunio sul lavoro?",
    risposta:
      "Sì. L'art. 42 c. 2 D.L. 18/2020 ha equiparato il contagio da SARS-CoV-2 in occasione di lavoro all'infortunio sul lavoro. L'INAIL eroga le prestazioni ordinarie (indennità temporanea, eventuale rendita in caso di postumi permanenti), e la copertura si estende ai periodi di isolamento fiduciario e quarantena connessi al contagio (Circ. INAIL 13/2020).",
    fonti: [
      {
        label: "D.L. 18/2020 art. 42 c. 2",
        url: "https://www.normattiva.it",
      },
    ],
  },

  // ============================================================
  // Rivalutazione 2025/2026
  // ============================================================
  {
    categoria: "Rivalutazione",
    domanda: "Qual è la rivalutazione INAIL 2025 del danno biologico?",
    risposta:
      "Il D.M. 20 giugno 2025 n. 85 ha disposto una rivalutazione del +0,8% degli indennizzi del danno biologico (capitale e quota biologica della rendita), con decorrenza 1° luglio 2025, basata sulla variazione media annua dell'indice ISTAT FOI 2023-2024. La Circ. INAIL n. 45 del 1° agosto 2025 ha dato attuazione. Per la rendita patrimoniale si applica il coefficiente di rivalutazione 2025 pari a 1,0084.",
    fonti: [
      {
        label: "DM 85/2025",
        url: "https://www.lavoro.gov.it/media/90764",
      },
      {
        label: "Circ. INAIL 45/2025",
        url: "https://www.inail.it",
      },
    ],
  },
  {
    categoria: "Retribuzione",
    domanda: "Quanto è la retribuzione minima e massima INAIL 2025?",
    risposta:
      "Per il 2025 (settore industria, Circ. INAIL 37/2025): retribuzione media giornaliera € 97,27; retribuzione annua minima € 20.426,70; retribuzione annua massima € 37.935,30. Se la retribuzione effettiva del lavoratore è sotto il minimale, si applica il minimale; se è sopra il massimale, si applica il massimale. Nel settore agricoltura, retribuzione convenzionale per subordinati TD: € 30.834,39.",
    fonti: [
      {
        label: "Circ. INAIL 37/2025",
        url: "https://www.inail.it",
      },
    ],
  },

  // ============================================================
  // Prestazioni accessorie
  // ============================================================
  {
    categoria: "Prestazioni accessorie",
    domanda: "Quanto è l'assegno funerario INAIL 2025?",
    risposta:
      "L'assegno funerario INAIL 2025 ammonta a € 12.342,84, erogato una tantum in caso di morte per infortunio sul lavoro o malattia professionale, ai familiari aventi diritto o a chi dimostri di aver sostenuto le spese funerarie. Importo esente IRPEF, aggiornato dalla Circ. INAIL 37/2025.",
    fonti: [
      {
        label: "Circ. INAIL 37/2025",
        url: "https://www.inail.it",
      },
    ],
  },
  {
    categoria: "Prestazioni accessorie",
    domanda: "Quanto è l'APC (Assistenza Personale Continuativa) INAIL 2025?",
    risposta:
      "L'APC INAIL 2025 è di € 672,72 mensili (Circ. INAIL 37/2025), spettante al titolare di rendita 100% con menomazioni che rendono necessaria l'assistenza continua di altra persona. Esente IRPEF, non riversibile ai superstiti, non cumulabile con prestazioni analoghe (indennità di accompagnamento invalidità civile), sospeso in caso di ricovero a spese dell'INAIL.",
    fonti: [
      {
        label: "Circ. INAIL 37/2025",
        url: "https://www.inail.it",
      },
    ],
  },

  // ============================================================
  // Procedura
  // ============================================================
  {
    categoria: "Procedura",
    domanda: "Cosa succede se l'invalidità INAIL è inferiore al 6%?",
    risposta:
      "Per menomazioni permanenti inferiori al 6% si applica la franchigia: l'INAIL non eroga alcun indennizzo per danno biologico (art. 13 c. 2 lett. a D.Lgs. 38/2000). Il lavoratore può comunque aver percepito l'indennità giornaliera per inabilità temporanea durante l'assenza. Resta sempre possibile agire in sede civile contro il datore di lavoro se vi è una responsabilità ex art. 2087 c.c. o ex art. 2043 c.c., per il risarcimento integrale del danno civilistico.",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 38/2000",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
      },
    ],
  },
];
