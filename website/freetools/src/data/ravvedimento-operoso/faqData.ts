import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ─── DEFINIZIONE E AMBITO ───
  {
    categoria: "Definizione",
    domanda: "Cos'è il ravvedimento operoso?",
    risposta:
      "Il ravvedimento operoso è l'istituto giuridico, disciplinato dall'art. 13 del D.Lgs. 472/1997, che permette al contribuente di regolarizzare spontaneamente le proprie violazioni tributarie pagando il tributo dovuto, gli interessi al tasso legale e una sanzione ridotta. La ratio è incentivare la voluntary compliance e ridurre il contenzioso tributario. La regolarizzazione è valida solo se avviene prima che la violazione sia formalmente contestata mediante notifica di atti accertativi (avviso bonario, accertamento, recupero credito d'imposta).",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 472/1997 (Normattiva)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
      },
      {
        label: "Agenzia delle Entrate — Ravvedimento",
        url: "https://www.agenziaentrate.gov.it/portale/schede/accertamenti/ravvedimento-operoso/come-regolarizzare-versimpo",
      },
    ],
  },
  {
    categoria: "Definizione",
    domanda: "Chi può fare il ravvedimento operoso?",
    risposta:
      "Qualsiasi contribuente — persona fisica, professionista, impresa, ente — che abbia commesso una violazione tributaria. La sola condizione è che la violazione non sia stata già constatata mediante notifica formale di atti impositivi (avviso di accertamento, liquidazione, recupero credito d'imposta o avviso bonario). È una facoltà volontaria del contribuente: l'amministrazione finanziaria non può imporre il ravvedimento, ma il contribuente che vi ricorre beneficia delle riduzioni sanzionatorie.",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 472/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
      },
    ],
  },
  {
    categoria: "Definizione",
    domanda: "Per quali tributi posso fare ravvedimento operoso?",
    risposta:
      "Per tutti i tributi erariali (IRPEF, IRES, IRAP, IVA, ritenute, registro, bollo, imposta sostitutiva del regime forfettario, cedolare secca) e per i tributi locali (IMU, TASI, TARI). NON è ammesso per i contributi previdenziali INPS — Gestione Separata, IVS per autonomi e artigiani, contributi minori — che hanno un regime sanzionatorio civile autonomo gestito direttamente dall'Istituto.",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 472/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
      },
    ],
  },

  // ─── CALCOLO ───
  {
    categoria: "Calcolo",
    domanda: "Come si calcola il ravvedimento operoso?",
    risposta:
      "Servono tre componenti: (1) imposta non versata; (2) sanzione ridotta in funzione dei giorni di ritardo; (3) interessi legali calcolati con la formula imposta × tasso × giorni / 36500. Per ravvedimenti dal 1° settembre 2024 le sanzioni partono dallo 0,0833% al giorno per i primi 14 giorni, salgono all'1,25% (15-30 gg), 1,39% (31-90 gg), 3,125% (entro dichiarazione/1 anno) e 3,57% (oltre). Le tre voci vanno versate insieme tramite F24 con codici tributo distinti.",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 472/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
      },
      {
        label: "D.Lgs. 87/2024 (Decreto Sanzioni)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si calcola il ravvedimento operoso 2026?",
    risposta:
      "Per le violazioni commesse dal 1° settembre 2024 in poi si applica il nuovo regime D.Lgs. 87/2024 con sanzione base 25% (era 30%) e 12,5% per ritardi entro 90 giorni (era 15%). Il tasso interesse legale 2026 è 1,60% (D.M. 10 dicembre 2025). Per ravvedimenti a cavallo d'anno (es. periodo 2025→2026) gli interessi vanno calcolati pro-rata: 2,00% per i giorni 2025 + 1,60% per i giorni 2026. Il calcolatore in alto effettua automaticamente questo split.",
    fonti: [
      {
        label: "D.M. 10 dicembre 2025 — Saggio interessi 2026",
        url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg",
      },
      {
        label: "D.Lgs. 87/2024",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Qual è la sanzione minima del ravvedimento operoso?",
    risposta:
      "Lo 0,0833% per ogni giorno di ritardo (regime post-1/9/2024) o lo 0,1% per giorno (regime pre-1/9/2024), applicabile entro i primi 14 giorni dalla scadenza nel cosiddetto «ravvedimento sprint». Su un'imposta di 1.000 € con un solo giorno di ritardo la sanzione è quindi rispettivamente 0,83 € o 1,00 €. Al quattordicesimo giorno la sanzione massima sprint è di 1,166% (post riforma) o 1,4% (pre riforma).",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 471/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471~art13",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si calcolano gli interessi nel ravvedimento operoso?",
    risposta:
      "Si applica la formula dell'art. 1284 c.c.: imposta × tasso legale annuo × giorni / 36500. Il tasso 2026 è 1,60%; per il 2025 era 2,00%; per il 2024 era 2,50%. Quando il periodo di ritardo attraversa il 1° gennaio gli interessi vanno calcolati pro-rata applicando il tasso vigente in ciascun periodo. Esempio: per 100 giorni a cavallo del 31/12/2025, 30 giorni al 2,00% e 70 giorni all'1,60%. La formula 36500 si usa anche negli anni bisestili.",
    fonti: [
      {
        label: "Art. 1284 Codice Civile",
        url: "https://www.brocardi.it/codice-civile/libro-quarto/titolo-i/capo-vii/sezione-i/art1284.html",
      },
      {
        label: "D.M. 10 dicembre 2025",
        url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg",
      },
    ],
  },

  // ─── TEMPI E TERMINI ───
  {
    categoria: "Termini",
    domanda: "Quanto tempo ho per fare il ravvedimento operoso?",
    risposta:
      "Si può fare fino a quando la violazione non è formalmente contestata con notifica di un atto (avviso bonario, accertamento, recupero credito d'imposta). In assenza di tali atti il ravvedimento è teoricamente possibile fino alla scadenza del termine ordinario di accertamento, che varia tra 5 e 7 anni a seconda della tipologia di violazione. Le sanzioni ridotte sono però progressivamente meno favorevoli con l'aumentare del ritardo: chi ravvede entro 14 giorni paga lo 0,0833%/giorno, chi ravvede oltre 1 anno paga il 3,57%.",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 472/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
      },
    ],
  },
  {
    categoria: "Termini",
    domanda: "Cosa succede se pago F24 in ritardo senza ravvedimento?",
    risposta:
      "L'Agenzia delle Entrate, in fase di controllo automatizzato (art. 36-bis DPR 600/1973), applica la sanzione piena del 25% (post-1/9/2024) o del 30% (pre-1/9/2024) sull'imposta non versata, oltre agli interessi legali. Il contribuente riceve un avviso bonario con sanzione ridotta al 10% (definizione automatica entro 30 giorni dal ricevimento) o al 3% se rateizza. Tutte queste opzioni sono peggiorative rispetto al ravvedimento spontaneo, dove la sanzione minima può scendere allo 0,0833%/giorno.",
    fonti: [
      {
        label: "Art. 36-bis DPR 600/1973",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600",
      },
    ],
  },

  // ─── CAUSE OSTATIVE ───
  {
    categoria: "Cause ostative",
    domanda: "Quando NON posso fare il ravvedimento operoso?",
    risposta:
      "Quando ho ricevuto la notifica di: (a) avviso bonario ex artt. 36-bis e 36-ter DPR 600/1973 o art. 54-bis DPR 633/1972 per la stessa violazione; (b) avviso di accertamento ex art. 42 DPR 600/1973; (c) avviso di liquidazione; (d) avviso di recupero credito d'imposta. La nuova disciplina post-D.Lgs. 87/2024 NON considera più cause ostative assolute il PVC e lo schema d'atto: in tali casi è ammesso un ravvedimento «potenziato» con riduzione 1/5 (post-PVC) o 1/6 (post-schema d'atto senza PVC).",
    fonti: [
      {
        label: "Art. 13, c. 1-bis D.Lgs. 472/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
      },
    ],
  },
  {
    categoria: "Cause ostative",
    domanda: "Posso fare ravvedimento dopo un avviso bonario?",
    risposta:
      "Per le violazioni rilevate nell'avviso bonario il ravvedimento è precluso. Tuttavia posso aderire alla definizione agevolata dell'avviso, pagando la sanzione ridotta a 1/3 (10%) entro 30 giorni dalla notifica (oppure entro 90 giorni se l'avviso deriva da controllo formale). Il ravvedimento rimane invece ammesso per altre violazioni dello stesso periodo non rilevate nell'avviso. Se l'avviso bonario è stato ricevuto per errore (es. credito d'imposta legittimamente compensato), si può presentare istanza di autotutela.",
    fonti: [
      {
        label: "Art. 2 D.Lgs. 462/1997 — Definizione agevolata",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;462",
      },
    ],
  },

  // ─── F24 E CODICI TRIBUTO ───
  {
    categoria: "F24",
    domanda: "Come compilo il modello F24 per il ravvedimento operoso?",
    risposta:
      "Devono essere indicate tre voci separate nel medesimo modello F24: (1) l'imposta dovuta con il codice tributo specifico del tributo (es. 4001 per IRPEF saldo); (2) la sanzione con il codice tributo della sanzione (es. 8901 per IRPEF); (3) gli interessi con il codice tributo specifico (es. 1989 per IRPEF). L'anno di riferimento è quello dell'imposta, non quello del versamento. Le tre voci vanno mantenute distinte: cumulare imposta e sanzione su un solo codice rende il ravvedimento inefficace.",
    fonti: [
      {
        label: "Agenzia delle Entrate — Modello F24",
        url: "https://www.agenziaentrate.gov.it/portale/web/guest/schede/pagamenti/f24",
      },
    ],
  },
  {
    categoria: "F24",
    domanda: "Quali sono i codici tributo F24 per il ravvedimento IVA?",
    risposta:
      "Imposta IVA: 6001-6012 (mensile per ciascun mese da gennaio a dicembre), 6031-6034 (trimestrale per ciascun trimestre), 6099 (saldo annuale). Sanzione ravvedimento IVA: 8904. Interessi ravvedimento IVA: 1991. I codici sanzione e interessi sono univoci per IVA, indipendentemente dalla periodicità (mensile, trimestrale o annuale). Per IVA trimestrali maggiorate dell'1% si applica il ravvedimento sull'importo comprensivo della maggiorazione.",
    fonti: [
      {
        label: "Agenzia Entrate — Ricerca codici tributo IVA",
        url: "https://www1.agenziaentrate.gov.it/servizi/codici/ricerca",
      },
    ],
  },

  // ─── CASI SPECIFICI ───
  {
    categoria: "Casi specifici",
    domanda: "Come si fa il ravvedimento per l'IMU?",
    risposta:
      "Per IMU si usano gli stessi tier temporali del ravvedimento erariale, ma con codici tributo specifici della sezione IMU del modello F24: imposta variabile (3912 abitazione principale di lusso A/1, A/8, A/9; 3918 altri fabbricati; 3916 aree fabbricabili; 3914 terreni agricoli; 3913 fabbricati rurali strumentali); sanzione 3923; interessi 3924. Le sanzioni base IMU pre-1/9/2024 erano 30% / 15%; post-1/9/2024 sono 25% / 12,5%. La sanzione ridotta si applica nelle stesse percentuali del ravvedimento erariale.",
    fonti: [
      {
        label: "D.Lgs. 14 marzo 2011, n. 23 (IMU)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2011-03-14;23",
      },
    ],
  },
  {
    categoria: "Casi specifici",
    domanda: "Posso fare ravvedimento sui contributi INPS?",
    risposta:
      "No. I contributi previdenziali INPS (Gestione Separata, IVS per autonomi e artigiani, contributi minori, contributi per cassa integrazione) NON rientrano nell'ambito dell'art. 13 D.Lgs. 472/1997. L'INPS applica sanzioni civili autonome con maggiorazioni interessi. Dal 1° settembre 2024 l'art. 19 del D.L. 19/2024 ha introdotto un meccanismo di «autodenuncia contributiva» con riduzione delle sanzioni civili, gestito direttamente dall'INPS attraverso il portale telematico dell'Istituto.",
    fonti: [
      {
        label: "Sito INPS — Sanzioni civili",
        url: "https://www.inps.it",
      },
    ],
  },
  {
    categoria: "Casi specifici",
    domanda: "Cos'è il ravvedimento sprint?",
    risposta:
      "È la forma più favorevole di ravvedimento, applicabile entro i primi 14 giorni di ritardo. La sanzione è dello 0,0833% per ogni giorno (post-1/9/2024) o dello 0,1% per giorno (pre-1/9/2024). Su un debito di 1.000 € con 5 giorni di ritardo la sanzione è di 4,17 € (post-riforma) o 5,00 € (regime previgente). La logica matematica: 12,5% (sanzione base post riforma) ÷ 15 = 0,833% al giorno, ulteriormente ridotto a 1/10 = 0,0833%. È un fortissimo incentivo alla regolarizzazione immediata.",
    fonti: [
      {
        label: "Art. 13, c. 1, lett. a) D.Lgs. 472/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
      },
    ],
  },
  {
    categoria: "Casi specifici",
    domanda: "Cos'è il cumulo giuridico nel ravvedimento operoso?",
    risposta:
      "Introdotto dal D.Lgs. 87/2024 per violazioni dal 1° settembre 2024, il cumulo giuridico permette di pagare un'unica sanzione ridotta — invece della somma di più sanzioni — per violazioni multiple sullo stesso tributo o tributi diversi nello stesso periodo. La percentuale di riduzione si calcola in relazione alla data della prima violazione. È escluso per gli omessi versamenti e per le indebite compensazioni di crediti inesistenti. Si applica tipicamente a errori dichiarativi che generano violazioni in più tributi (es. IRPEF + add. regionale + add. comunale).",
    fonti: [
      {
        label: "Art. 12 D.Lgs. 472/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art12",
      },
      {
        label: "D.Lgs. 87/2024",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
      },
    ],
  },
  {
    categoria: "Casi specifici",
    domanda: "Il ravvedimento operoso si può fare a rate?",
    risposta:
      "No, il ravvedimento si perfeziona solo con il pagamento integrale (imposta + sanzione + interessi) in un'unica soluzione tramite F24. Tuttavia è ammesso il ravvedimento parziale ex art. 13-bis D.Lgs. 472/1997: il contribuente può ravvedere solo una parte dell'imposta dovuta, applicando le riduzioni sulla porzione effettivamente regolarizzata. Esempio: su 10.000 € dovuti se ne ravvedono 6.000 € entro 30 giorni; sulla quota di 6.000 € si applica la sanzione 1,25%, mentre la quota residua di 4.000 € rimane esposta al regime sanzionatorio piano.",
    fonti: [
      {
        label: "Art. 13-bis D.Lgs. 472/1997",
        url: "https://www.brocardi.it/disposizioni-sanzioni-amministrative-violazioni-norme-tributarie/art13bis.html",
      },
    ],
  },
  {
    categoria: "Casi specifici",
    domanda: "Quali sono le novità del ravvedimento operoso 2026?",
    risposta:
      "(1) Tasso interesse legale all'1,60% dal 1° gennaio 2026 (era 2% nel 2025), per effetto del D.M. 10 dicembre 2025; (2) regime post-D.Lgs. 87/2024 pienamente operativo (sanzioni 25% / 12,5% per violazioni dal 1° settembre 2024); (3) cumulo giuridico ora ammesso anche nel ravvedimento; (4) ravvedimento possibile dopo schema d'atto con riduzione 1/6; (5) eliminazione del tier «lunghissimo oltre 2 anni» nel sistema temporale puro: ora il limite temporale è 1/7 oltre 1 anno, mentre il 1/6 e successivi richiedono milestone procedurali (PVC, schema d'atto).",
    fonti: [
      {
        label: "D.M. 10 dicembre 2025",
        url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg",
      },
      {
        label: "D.Lgs. 87/2024",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87",
      },
    ],
  },
  {
    categoria: "F24",
    domanda: "Cosa succede se sbaglio i codici tributo nel ravvedimento?",
    risposta:
      "L'errore nei codici tributo non invalida automaticamente il ravvedimento, purché l'importo complessivamente versato sia corretto e identificabile. Tuttavia può determinare ritardi nell'attribuzione delle somme da parte dell'Agenzia Entrate, con il rischio di ricevere comunque un avviso bonario per «omesso versamento». In caso di errore si può presentare istanza di rettifica F24 tramite il portale Fisconline/Entratel oppure rivolgersi all'Agenzia delle Entrate per la riconciliazione. È sempre prudente verificare i codici sull'elenco ufficiale prima di trasmettere l'F24.",
    fonti: [
      {
        label: "Agenzia Entrate — Rettifica F24",
        url: "https://www.agenziaentrate.gov.it/portale/web/guest/schede/pagamenti/f24/come-correggere-errori",
      },
    ],
  },
  {
    categoria: "Casi specifici",
    domanda: "Si può fare ravvedimento per dichiarazione tardiva?",
    risposta:
      "Solo entro 90 giorni dalla scadenza ordinaria di presentazione. In tal caso la sanzione è 1/10 del minimo edittale: per la dichiarazione dei redditi il minimo è 250 €, ridotto in ravvedimento a 25 €. Oltre i 90 giorni la dichiarazione è considerata «omessa»: il ravvedimento per la presentazione non è più ammesso, mentre rimane possibile per i versamenti d'imposta connessi (con sanzione 120% delle imposte dovute, ridotta al 75% se la dichiarazione è comunque presentata entro il termine di accertamento).",
    fonti: [
      {
        label: "Art. 1 e 1-bis D.Lgs. 471/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;471",
      },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Quando conviene il ravvedimento operoso?",
    risposta:
      "Sempre, prima di una contestazione formale. Il risparmio sanzionatorio è notevole: per un'imposta di 5.000 € omessa con 25 giorni di ritardo, il ravvedimento costa una sanzione di 62,50 € (1,25%) contro 1.250 € (25%) della sanzione piena, con un risparmio di oltre il 95%. Anche con 200 giorni di ritardo si paga il 3,125% (156 €) anziché il 25% (1.250 €). La decisione tra ravvedimento e definizione agevolata di un avviso bonario dipende dai termini: se l'avviso non è ancora arrivato il ravvedimento è quasi sempre più conveniente.",
    fonti: [
      {
        label: "Art. 13 D.Lgs. 472/1997",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13",
      },
    ],
  },
];
