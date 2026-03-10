import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // --- CONCETTI BASE ---
  {
    categoria: "Concetti base",
    domanda: "Cosa sono gli interessi legali?",
    risposta:
      "Gli interessi legali sono il corrispettivo spettante al creditore per il ritardo nel pagamento di una somma di denaro, calcolato al tasso stabilito annualmente dal Ministero dell'Economia e delle Finanze (MEF) ai sensi dell'art. 1284 del Codice Civile. Si applicano automaticamente ai crediti liquidi ed esigibili, salvo diversa pattuizione tra le parti.",
    fonti: [{ label: "Art. 1284 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" }],
  },
  {
    categoria: "Concetti base",
    domanda: "Qual è la differenza tra interessi legali e interessi convenzionali?",
    risposta:
      "Gli interessi legali sono quelli fissati per legge (art. 1284 c.c.) e si applicano in mancanza di diversa pattuizione. Gli interessi convenzionali sono stabiliti dalle parti con accordo scritto. Se il tasso convenzionale supera il tasso legale, la misura deve risultare per iscritto, altrimenti sono dovuti nella misura legale (art. 1284, c. 3, c.c.).",
    fonti: [{ label: "Art. 1284, c. 3, cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" }],
  },
  {
    categoria: "Concetti base",
    domanda: "Da quando decorrono gli interessi legali?",
    risposta:
      "Gli interessi legali decorrono automaticamente dal giorno in cui il credito diventa liquido (determinato nel suo ammontare) ed esigibile (scaduto e non soggetto a condizione). Per le obbligazioni pecuniarie, la decorrenza è dal giorno della scadenza del debito (art. 1282 c.c.). Per il risarcimento del danno, dal giorno del fatto illecito (giurisprudenza consolidata, Cass. SS.UU. 1712/1995).",
    fonti: [{ label: "Art. 1282 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1282" }],
  },
  // --- TASSO 2026 ---
  {
    categoria: "Tasso 2026",
    domanda: "Qual è il tasso di interesse legale 2026?",
    risposta:
      "Il tasso di interesse legale per il 2026 è pari all'1,60% in ragione d'anno, stabilito dal Decreto del Ministero dell'Economia e delle Finanze del 10 dicembre 2025, pubblicato sulla Gazzetta Ufficiale n. 289 del 13 dicembre 2025. Il tasso è in vigore dal 1° gennaio 2026.",
    fonti: [{ label: "DM Economia 10/12/2025", url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg" }],
  },
  {
    categoria: "Tasso 2026",
    domanda: "Come è cambiato il tasso legale negli ultimi anni?",
    risposta:
      "Il tasso legale ha subito variazioni significative: 0,01% nel 2021, 1,25% nel 2022, 5,00% nel 2023 (il picco degli ultimi 25 anni dovuto all'inflazione), 2,50% nel 2024, 2,00% nel 2025, e 1,60% nel 2026. Il trend discendente dal 2023 riflette il graduale calo dell'inflazione nell'area euro.",
    fonti: [{ label: "Art. 1284 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" }],
  },
  {
    categoria: "Tasso 2026",
    domanda: "Chi stabilisce il tasso di interesse legale e quando viene pubblicato?",
    risposta:
      "Il tasso di interesse legale è stabilito annualmente dal Ministero dell'Economia e delle Finanze con decreto pubblicato sulla Gazzetta Ufficiale entro il 15 dicembre dell'anno precedente (art. 1284, c. 1, c.c., come modificato dalla L. 662/1996). Il nuovo tasso entra in vigore il 1° gennaio dell'anno successivo.",
    fonti: [{ label: "L. 662/1996, art. 2, c. 185", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1996-12-23;662" }],
  },
  // --- CALCOLO ---
  {
    categoria: "Calcolo",
    domanda: "Come si calcolano gli interessi legali?",
    risposta:
      "La formula per il calcolo degli interessi legali semplici è: I = C \u00D7 S \u00D7 N / 36.500, dove I = interessi, C = capitale, S = tasso percentuale annuo, N = numero di giorni. Il divisore è sempre 36.500 (365 giorni \u00D7 100) anche negli anni bisestili, come confermato dalla Risoluzione dell'Agenzia delle Entrate n. 296/E del 14 luglio 2008.",
    fonti: [
      { label: "Ris. AE 296/E/2008", url: "https://www.agenziaentrate.gov.it/portale/documents/20143/0/Risoluzione_14_07_2008_296.pdf" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si calcolano gli interessi quando il periodo attraversa più anni con tassi diversi?",
    risposta:
      "Quando il periodo di calcolo attraversa più anni con tassi diversi, occorre suddividerlo in sotto-periodi corrispondenti a ciascun tasso vigente. Per ogni sotto-periodo si applica la formula I = C \u00D7 S \u00D7 N / 36.500 con il tasso del periodo. Il totale degli interessi è la somma degli interessi di ciascun sotto-periodo.",
  },
  {
    categoria: "Calcolo",
    domanda: "Il divisore 36.500 si usa anche negli anni bisestili?",
    risposta:
      "Sì. La Risoluzione dell'Agenzia delle Entrate n. 296/E del 14 luglio 2008 ha chiarito che il divisore resta 36.500 anche negli anni bisestili. Questo vale sia per il calcolo degli interessi legali sia per il ravvedimento operoso. Non si utilizza quindi il divisore 36.600.",
    fonti: [
      { label: "Ris. AE 296/E/2008", url: "https://www.agenziaentrate.gov.it/portale/documents/20143/0/Risoluzione_14_07_2008_296.pdf" },
    ],
  },
  // --- LEGALI VS MORATORI ---
  {
    categoria: "Legali vs moratori",
    domanda: "Qual è la differenza tra interessi legali e interessi moratori?",
    risposta:
      "Gli interessi legali (art. 1284 c.c.) remunerano il creditore per il mancato godimento della somma e si applicano al tasso fissato dal MEF. Gli interessi moratori (D.Lgs. 231/2002) si applicano nelle transazioni commerciali e sono calcolati al tasso BCE + 8 punti percentuali (circa 11,65% nel 2026). Gli interessi moratori hanno funzione sanzionatoria e sono significativamente più elevati.",
    fonti: [
      { label: "Art. 1284 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284" },
      { label: "D.Lgs. 231/2002", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231" },
    ],
  },
  {
    categoria: "Legali vs moratori",
    domanda: "Cosa sono gli interessi in corso di causa?",
    risposta:
      "Dal 2014 (D.L. 132/2014, art. 17), il comma 4 dell'art. 1284 c.c. prevede che, se le parti non hanno convenuto la misura degli interessi moratori, dal momento in cui è proposta domanda giudiziale il saggio degli interessi legali è pari a quello previsto dalla legislazione speciale relativa ai ritardi di pagamento nelle transazioni commerciali (tasso BCE + 8%). Questo tasso maggiorato si applica automaticamente dalla proposizione della domanda giudiziale.",
    fonti: [
      { label: "D.L. 132/2014, art. 17", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" },
    ],
  },
  // --- ANATOCISMO ---
  {
    categoria: "Anatocismo",
    domanda: "Cos'è l'anatocismo e quando è ammesso?",
    risposta:
      "L'anatocismo è la capitalizzazione degli interessi scaduti, ossia il calcolo di interessi sugli interessi (\"interesse composto\"). L'art. 1283 c.c. lo vieta in linea generale, ammettendolo solo in due casi tassativi: (1) dal giorno della domanda giudiziale, purché gli interessi siano dovuti per almeno sei mesi; (2) in forza di convenzione posteriore alla scadenza degli interessi, alle medesime condizioni temporali.",
    fonti: [{ label: "Art. 1283 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1283" }],
  },
  {
    categoria: "Anatocismo",
    domanda: "L'anatocismo è ammesso nei rapporti bancari?",
    risposta:
      "La disciplina dell'anatocismo bancario è stata oggetto di numerosi interventi normativi. L'art. 120, c. 2, TUB (D.Lgs. 385/1993), come modificato dalla L. 49/2016, prevede che nei rapporti di conto corrente bancario gli interessi maturati non possono produrre interessi ulteriori (divieto di capitalizzazione). La Delibera CICR del 3 agosto 2016 ha attuato il divieto, prevedendo che gli interessi debitori e creditori sono conteggiati separatamente senza capitalizzazione.",
    fonti: [
      { label: "Art. 120 TUB", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1993-09-01;385~art120" },
    ],
  },
  // --- APPLICAZIONI PRATICHE ---
  {
    categoria: "Applicazioni pratiche",
    domanda: "Come si calcolano gli interessi per il ravvedimento operoso?",
    risposta:
      "Per il ravvedimento operoso (art. 13 D.Lgs. 472/1997), gli interessi si calcolano con la formula: I = imposta \u00D7 tasso legale \u00D7 giorni / 36.500. Si applica il tasso legale vigente nel periodo di ritardo. Se il ritardo attraversa più anni con tassi diversi, si fraziona il calcolo per ciascun periodo. Gli interessi vanno versati separatamente dall'imposta e dalla sanzione ridotta.",
    fonti: [
      { label: "Art. 13 D.Lgs. 472/1997", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13" },
    ],
  },
  {
    categoria: "Applicazioni pratiche",
    domanda: "Gli interessi legali si applicano al TFR?",
    risposta:
      "Sì. In caso di ritardato pagamento del TFR (Trattamento di Fine Rapporto), il lavoratore ha diritto agli interessi legali dalla data di cessazione del rapporto di lavoro. La Cassazione ha consolidato l'orientamento secondo cui gli interessi decorrono automaticamente dalla data di cessazione del rapporto, senza necessità di messa in mora (Cass. 4822/2001).",
  },
  {
    categoria: "Applicazioni pratiche",
    domanda: "Come si calcolano gli interessi sulla caparra confirmatoria da restituire?",
    risposta:
      "Quando il contratto viene risolto e la caparra confirmatoria deve essere restituita, gli interessi legali decorrono dalla data della domanda giudiziale (se la restituzione è controversa) oppure dalla data della messa in mora (se stragiudiziale). Il calcolo segue la formula standard: I = C \u00D7 S \u00D7 N / 36.500.",
    fonti: [{ label: "Art. 1385 cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1385" }],
  },
  {
    categoria: "Applicazioni pratiche",
    domanda: "Gli interessi legali si applicano ai debiti condominiali?",
    risposta:
      "Sì. Il condomino moroso è tenuto al pagamento degli interessi legali sulle quote condominiali non versate, a decorrere dalla data di delibera assembleare che ne ha approvato la ripartizione (o dalla diversa data indicata nel regolamento condominiale). Il tasso applicabile è quello legale, salvo diversa pattuizione nel regolamento contrattuale.",
  },
  {
    categoria: "Applicazioni pratiche",
    domanda: "Come funzionano gli interessi legali nelle espropriazioni?",
    risposta:
      "Nelle espropriazioni per pubblica utilità, sull'indennità di esproprio sono dovuti gli interessi legali dalla data del decreto di esproprio fino all'effettivo pagamento (art. 22 DPR 327/2001, Testo Unico Espropriazioni). Il tasso è quello legale vigente di anno in anno. In caso di occupazione d'urgenza, gli interessi decorrono dalla data di immissione in possesso.",
    fonti: [{ label: "Art. 22 DPR 327/2001", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2001-06-08;327~art22" }],
  },
  {
    categoria: "Applicazioni pratiche",
    domanda: "Qual è la prescrizione degli interessi legali?",
    risposta:
      "Il diritto agli interessi legali si prescrive in 5 anni (art. 2948, n. 4, c.c.), trattandosi di prestazione periodica. La prescrizione decorre dalla scadenza di ciascuna rata di interessi. Attenzione: la prescrizione degli interessi è autonoma rispetto a quella del credito principale, quindi è possibile che gli interessi si prescrivano anche se il credito principale è ancora esigibile.",
    fonti: [{ label: "Art. 2948, n. 4, cod. civ.", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2948" }],
  },
  {
    categoria: "Applicazioni pratiche",
    domanda: "Gli interessi legali sono soggetti a tassazione?",
    risposta:
      "Sì. Gli interessi legali percepiti costituiscono reddito imponibile ai fini IRPEF. Se corrisposti da un sostituto d'imposta (es. datore di lavoro, banca), sono soggetti a ritenuta d'acconto del 20% (art. 26 DPR 600/1973). Per le persone fisiche, gli interessi concorrono alla formazione del reddito complessivo nella categoria dei redditi di capitale.",
  },
];
