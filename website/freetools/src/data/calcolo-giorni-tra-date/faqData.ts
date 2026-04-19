import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // --- CALCOLO ---
  {
    categoria: "Calcolo",
    domanda: "Come si calcola il numero di giorni tra due date?",
    risposta:
      "Si sottrae la data iniziale dalla data finale. Nel diritto italiano si applica il principio dies a quo non computatur: il giorno iniziale non si conta, il giorno finale sì. Esempio: dal 10 aprile al 25 aprile sono 15 giorni (dal 11 al 25 aprile inclusi). Il calcolatore applica automaticamente questa regola e la disattiva solo se selezioni l'opzione apposita.",
    fonti: [
      { label: "Art. 155 c.p.c.", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" },
      { label: "Art. 2963 c.c.", url: "https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Qual è la formula per calcolare i giorni tra due date?",
    risposta:
      "La formula matematica è: giorni = data_finale − data_iniziale. Per i termini processuali si esclude il dies a quo e si include il dies ad quem. Per il breakdown in anni, mesi e giorni si usa il calendario comune (art. 2963 c.c., comma 4): il termine scade nel giorno del mese numericamente corrispondente al mese iniziale.",
    fonti: [
      { label: "Art. 2963 c.c.", url: "https://www.brocardi.it/codice-civile/libro-sesto/titolo-v/capo-i/sezione-iv/art2963.html" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Il giorno iniziale si conta o no?",
    risposta:
      "No, nel diritto italiano il dies a quo (giorno iniziale) non si computa nel termine. È una regola generale codificata sia nell'art. 155 c.p.c. (termini processuali), sia nell'art. 2963 c.c. (prescrizione e decadenza). Esistono eccezioni nei termini liberi (art. 163 bis c.p.c.) dove si escludono entrambi dies a quo e dies ad quem.",
    fonti: [
      { label: "Art. 155 c.p.c.", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come si calcolano i giorni tra due date in Excel?",
    risposta:
      "Tre modi: (1) sottrazione diretta =B2-A2, (2) funzione =GIORNI(B2;A2), (3) =DATA.DIFF(A2;B2;\"d\") per i giorni totali. Per le differenze anni/mesi/giorni usa DATA.DIFF con parametri \"y\", \"ym\" e \"md\". Per i soli giorni lavorativi: =GIORNI.LAVORATIVI.TOT(A2;B2;C2:C15) dove C2:C15 è l'elenco delle festività italiane.",
    fonti: [
      { label: "Microsoft Support: funzione GIORNI", url: "https://support.microsoft.com/it-it/office/giorni-funzione-giorni-57740535-d549-4395-8728-0f07bff0b9df" },
    ],
  },
  {
    categoria: "Calcolo",
    domanda: "Come calcolo la differenza in anni, mesi e giorni tra due date?",
    risposta:
      "Usa il nostro calcolatore che restituisce automaticamente il breakdown in anni, mesi, settimane e giorni. In Excel, combina DATA.DIFF con tre parametri diversi: =DATA.DIFF(A2;B2;\"y\") per gli anni, =DATA.DIFF(A2;B2;\"ym\") per i mesi esclusi gli anni, =DATA.DIFF(A2;B2;\"md\") per i giorni esclusi i mesi. Per esempio, tra il 21 novembre 1975 e il 22 marzo 2023 ci sono 17.288 giorni totali che corrispondono a 47 anni, 4 mesi e 1 giorno.",
  },

  // --- TIPOLOGIE DI GIORNI ---
  {
    categoria: "Tipologie di Giorni",
    domanda: "Che differenza c'è tra giorni lavorativi, feriali e naturali?",
    risposta:
      "I giorni naturali (o consecutivi) comprendono TUTTI i giorni del calendario, inclusi sabati, domeniche e festività. I giorni feriali escludono sabati e domeniche (e talvolta anche le festività). I giorni lavorativi sono sinonimo di feriali in senso stretto. Nei termini processuali civili ordinari si usano sempre i giorni naturali: se un termine è di 30 giorni, comprende anche weekend e festivi.",
    fonti: [
      { label: "Art. 155 c.p.c. (termini naturali)", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" },
    ],
  },
  {
    categoria: "Tipologie di Giorni",
    domanda: "Cosa sono i giorni liberi nel diritto?",
    risposta:
      "I giorni liberi sono un tipo speciale di termine in cui si escludono SIA il dies a quo SIA il dies ad quem. L'esempio classico è l'art. 163 bis c.p.c. che prevede almeno 120 giorni liberi tra la notifica della citazione e l'udienza (150 se la notifica avviene all'estero). Se la citazione è notificata il 10 marzo, il primo giorno libero è l'11 marzo e il 120° giorno libero è l'8 luglio: l'udienza non può essere fissata prima del 9 luglio.",
    fonti: [
      { label: "Art. 163 bis c.p.c.", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-i/sezione-i/art163bis.html" },
    ],
  },
  {
    categoria: "Tipologie di Giorni",
    domanda: "Il sabato è un giorno lavorativo?",
    risposta:
      "Nel processo civile, il sabato è considerato non lavorativo per gli atti fuori udienza: la scadenza che cade di sabato è prorogata al primo lunedì successivo (art. 155, comma 5, c.p.c., introdotto dalla L. 263/2005). Le udienze e l'attività giudiziaria ordinaria si svolgono però regolarmente anche di sabato. Nel diritto del lavoro la qualificazione dipende dal CCNL applicabile: alcuni contratti prevedono settimana corta con sabato non lavorativo.",
    fonti: [
      { label: "Art. 155 comma 5 c.p.c.", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" },
    ],
  },
  {
    categoria: "Tipologie di Giorni",
    domanda: "Come si calcolano i giorni lavorativi tra due date?",
    risposta:
      "Per calcolare i giorni lavorativi si escludono sabati, domeniche e le festività nazionali italiane (13 festività dal 2026). Il nostro calcolatore offre cinque modalità: (1) tutti i giorni, (2) esclude solo domeniche, (3) esclude sabati e domeniche, (4) esclude domeniche e festività, (5) esclude sabati, domeniche e festività (lavorativi puri). In Excel: =GIORNI.LAVORATIVI.TOT(A2;B2;{festività}).",
    fonti: [
      { label: "L. 260/1949 (festività)", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260" },
    ],
  },

  // --- USO PROCESSUALE ---
  {
    categoria: "Uso Processuale",
    domanda: "Come si calcolano i termini processuali?",
    risposta:
      "Si applica l'art. 155 c.p.c.: dies a quo escluso, dies ad quem incluso, giorni festivi computati nel termine. Se il dies ad quem cade in giorno festivo, la scadenza è prorogata di diritto al primo giorno non festivo successivo. I termini processuali sono inoltre soggetti a sospensione feriale dal 1° al 31 agosto (L. 742/1969). Esempio: appello di 30 giorni notificato il 10 aprile scade il 10 maggio (se non festivo).",
    fonti: [
      { label: "Art. 155 c.p.c.", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" },
      { label: "L. 742/1969", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" },
    ],
  },
  {
    categoria: "Uso Processuale",
    domanda: "Cosa succede se il termine scade di domenica o in un giorno festivo?",
    risposta:
      "La scadenza è automaticamente prorogata al primo giorno non festivo successivo (art. 155, comma 4, c.p.c.). La proroga opera di diritto: non serve alcuna istanza. Se una scadenza cade il 25 dicembre 2026 (Natale, venerdì), si trasla al 28 dicembre 2026 (lunedì: 26 sabato e 27 domenica sono anch'essi non lavorativi).",
    fonti: [
      { label: "Art. 155 c.p.c.", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" },
    ],
  },
  {
    categoria: "Uso Processuale",
    domanda: "La sospensione feriale dei termini quando vale?",
    risposta:
      "Dal 1° al 31 agosto di ogni anno, per 31 giorni complessivi (L. 742/1969 come modificata dalla L. 162/2014). In questo periodo i termini processuali ordinari NON decorrono: se un termine scade in agosto, la scadenza si sposta al 1° settembre; se un termine inizia a decorrere in agosto, inizia dal 1° settembre. Sono ESCLUSI dalla sospensione: cause di alimenti, controversie di lavoro, procedimenti cautelari, opposizioni all'esecuzione, sfratti, fallimento, procedimenti penali.",
    fonti: [
      { label: "L. 742/1969", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1969-10-07;742" },
      { label: "D.L. 132/2014", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2014-09-12;132" },
    ],
  },
  {
    categoria: "Uso Processuale",
    domanda: "Cos'è un termine a ritroso e come si calcola?",
    risposta:
      "Un termine a ritroso si calcola all'indietro dalla data finale. L'esempio classico sono le memorie scritte da depositare prima di un'udienza. La Cassazione (sent. n. 14767/2014) ha chiarito che la proroga per dies ad quem festivo opera ANCH'ESSA all'indietro: se la scadenza cade in giorno festivo, si ANTICIPA al primo giorno non festivo precedente, non si posticipa al successivo. Questo per non abbreviare l'intervallo di tempo previsto a tutela della parte.",
    fonti: [
      { label: "Cass. Civ. Sez. III n. 14767/2014", url: "https://www.expartecreditoris.it/provvedimenti/computo-dei-termini-a-ritroso-si-individua-il-dies-ad-quem-e-non-il-dies-a-quo" },
    ],
  },
  {
    categoria: "Uso Processuale",
    domanda: "Come si calcola il termine per l'opposizione al decreto ingiuntivo?",
    risposta:
      "Il termine è di 40 giorni dalla notifica del decreto ingiuntivo (art. 641 c.p.c.). Se il decreto è notificato il 15 marzo 2026, il termine di 40 giorni scade il 24 aprile 2026 (dies a quo escluso, 40 giorni dal 16 marzo). È soggetto a sospensione feriale 1-31 agosto. Se il dies ad quem cade in giorno festivo, proroga automatica al primo giorno non festivo. Il 40° giorno è un termine perentorio: lo sforamento comporta la decadenza dalla facoltà di opporsi.",
    fonti: [
      { label: "Art. 641 c.p.c.", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-quarto/titolo-i/capo-i/art644.html" },
    ],
  },

  // --- FESTIVITÀ ---
  {
    categoria: "Festività",
    domanda: "Quali sono le festività nazionali italiane nel 2026?",
    risposta:
      "Sono 13 festività: Capodanno (1 gennaio, giovedì), Epifania (6 gennaio, martedì), Pasqua (5 aprile, domenica), Lunedì dell'Angelo (6 aprile), Festa della Liberazione (25 aprile, sabato), Festa del Lavoro (1 maggio, venerdì), Festa della Repubblica (2 giugno, martedì), Ferragosto (15 agosto, sabato), San Francesco d'Assisi (4 ottobre, domenica — NUOVA dal 2026), Ognissanti (1 novembre, domenica), Immacolata Concezione (8 dicembre, martedì), Natale (25 dicembre, venerdì), Santo Stefano (26 dicembre, sabato). Più tutte le domeniche.",
    fonti: [
      { label: "L. 260/1949", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260" },
      { label: "L. 151/2025", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-10-08;151" },
    ],
  },
  {
    categoria: "Festività",
    domanda: "Il 4 ottobre è festivo in Italia?",
    risposta:
      "Sì, dal 1° gennaio 2026. La Legge 8 ottobre 2025, n. 151 (pubblicata in GU n. 236 del 10 ottobre 2025) ha istituito la festa nazionale di San Francesco d'Assisi, patrono d'Italia, da celebrare il 4 ottobre di ogni anno. La nuova festività è stata aggiunta all'elenco dei giorni festivi civili nell'art. 2 della L. 260/1949. Nel 2026 cade di domenica; nel 2027 di lunedì; nel 2028 di mercoledì. È la 13ª festività nazionale italiana.",
    fonti: [
      { label: "L. 151/2025", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2025-10-08;151" },
      { label: "GU n. 236/2025", url: "https://www.gazzettaufficiale.it/eli/id/2025/10/10/25G00153/sg" },
    ],
  },
  {
    categoria: "Festività",
    domanda: "Come si calcola la data della Pasqua?",
    risposta:
      "Con l'algoritmo di Gauss o di Meeus/Jones/Butcher. La regola base stabilita dal Concilio di Nicea (325 d.C.): Pasqua cade nella prima domenica successiva al primo plenilunio di primavera (equinozio convenzionale 21 marzo). Può variare tra il 22 marzo e il 25 aprile. Nel 2025: 20 aprile. Nel 2026: 5 aprile. Nel 2027: 28 marzo. Nel 2028: 16 aprile. Il Lunedì dell'Angelo (Pasquetta) è sempre il giorno successivo alla Pasqua.",
  },
  {
    categoria: "Festività",
    domanda: "Il Santo Patrono locale vale per i termini processuali?",
    risposta:
      "No, ai fini dei termini processuali civili, amministrativi e tributari si applicano solo le festività nazionali stabilite dalla L. 260/1949 (e, dal 2026, dalla L. 151/2025). Il Santo Patrono locale (es. 29 giugno per Roma, 7 dicembre per Milano) è una festività riconosciuta dai CCNL e dalla tradizione locale, ma non opera automaticamente per i termini processuali nazionali. Vale per gli effetti lavoristici nel comune interessato.",
    fonti: [
      { label: "L. 260/1949 art. 2", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1949-05-27;260" },
    ],
  },

  // --- APPLICAZIONI PRATICHE ---
  {
    categoria: "Applicazioni Pratiche",
    domanda: "Come si calcola il preavviso di disdetta di un contratto di locazione?",
    risposta:
      "Per le locazioni abitative, il conduttore può recedere con preavviso di almeno 6 mesi mediante raccomandata (art. 4 L. 392/1978). I 6 mesi si calcolano a mesi secondo il calendario comune: dal 15 marzo 2026, il preavviso scade il 15 settembre 2026 (giorno numericamente corrispondente nel mese di scadenza). Se il 15 settembre è festivo, proroga al primo giorno non festivo. Per locazioni commerciali il preavviso è di 12 o 18 mesi secondo l'art. 27 L. 392/1978.",
    fonti: [
      { label: "Art. 4 L. 392/1978", url: "https://www.brocardi.it/legge-equo-canone/titolo-i/capo-i/art4.html" },
    ],
  },
  {
    categoria: "Applicazioni Pratiche",
    domanda: "Come si calcolano i giorni per il ravvedimento operoso?",
    risposta:
      "Il ravvedimento operoso permette di regolarizzare un inadempimento tributario pagando l'imposta, gli interessi legali e una sanzione ridotta. La riduzione dipende dal ritardo: entro 14 giorni = 0,1% al giorno (fino all'1,4%); da 15 a 30 giorni = 1,67%; da 31 a 90 giorni = 1,88%; entro un anno = 3,75%; entro 2 anni = 4,29%; oltre 2 anni = 5%; dopo PVC = 6%. I giorni si contano dal giorno successivo alla scadenza dell'imposta (dies a quo escluso).",
    fonti: [
      { label: "Art. 13 D.Lgs. 472/1997", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:1997-12-18;472~art13" },
    ],
  },
  {
    categoria: "Applicazioni Pratiche",
    domanda: "Come si calcolano i giorni di malattia e ferie?",
    risposta:
      "I giorni di malattia si calcolano come giorni naturali consecutivi: se un lavoratore è in malattia dal 10 al 20 aprile, sono 11 giorni (incluso sia il primo sia l'ultimo giorno, perché il dies a quo coincide con l'inizio della prestazione interrotta). Sabati, domeniche e festività sono inclusi nel conteggio. Le ferie si maturano in misura di 26 giorni minimi all'anno (D.Lgs. 66/2003), pari a circa 2,17 giorni al mese lavorato, con almeno 2 settimane continuative nell'anno di maturazione.",
    fonti: [
      { label: "D.Lgs. 66/2003", url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2003-04-08;66" },
    ],
  },

  // --- ERRORI COMUNI ---
  {
    categoria: "Errori Comuni",
    domanda: "Quali sono gli errori più frequenti nel calcolo dei giorni?",
    risposta:
      "I principali: (1) includere il dies a quo nel conteggio (va escluso); (2) confondere giorni naturali e lavorativi (nei termini processuali si usano i naturali); (3) ignorare la sospensione feriale 1-31 agosto; (4) non applicare la proroga al primo giorno non festivo per dies ad quem festivo; (5) applicare la proroga in avanti anche ai termini a ritroso (deve invece operare all'indietro, Cass. 14767/2014); (6) non aggiornare il calendario con la nuova festività 4 ottobre (San Francesco, dal 2026).",
    fonti: [
      { label: "Cass. n. 14767/2014", url: "https://www.expartecreditoris.it/provvedimenti/computo-dei-termini-a-ritroso-si-individua-il-dies-ad-quem-e-non-il-dies-a-quo" },
    ],
  },
  {
    categoria: "Errori Comuni",
    domanda: "Gli anni bisestili cambiano il calcolo?",
    risposta:
      "Sì, ma solo per i calcoli a giorni: un anno bisestile ha 366 giorni (febbraio 29), un anno comune 365. Per i calcoli a mesi o anni, l'art. 155, comma 2, c.p.c. e l'art. 2963, comma 4, c.c. stabiliscono che non si tiene conto della durata effettiva dei mesi: un termine di 6 mesi dal 30 novembre scade il 30 maggio, anche se il mese di scadenza avesse meno giorni. Anni bisestili recenti: 2020, 2024, 2028. Il 2025, 2026 e 2027 NON sono bisestili.",
    fonti: [
      { label: "Art. 155 c.p.c.", url: "https://www.brocardi.it/codice-di-procedura-civile/libro-primo/titolo-vi/capo-ii/art155.html" },
    ],
  },
  {
    categoria: "Errori Comuni",
    domanda: "Come funziona il calcolo dei termini con notifica PEC dopo le 21?",
    risposta:
      "Dopo l'intervento della Corte Costituzionale (sent. n. 75/2019), per il mittente la notifica via PEC si considera perfezionata il giorno stesso se effettuata entro le ore 24 (anche se eseguita tra le 21 e le 24). Per il destinatario, invece, la notifica si perfeziona alle ore 7 del giorno successivo, a tutela del diritto al riposo (art. 16 septies D.L. 179/2012). Questa differenziazione è cruciale per calcolare se il termine è stato rispettato dal mittente o meno.",
    fonti: [
      { label: "Corte Cost. n. 75/2019", url: "https://www.cortecostituzionale.it" },
    ],
  },
];
