import type { FAQItem } from "@/components/shared/FAQ";

export const faqData: FAQItem[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA 1: CALCOLO GENERALE (PAA primarie)
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Calcolo generale",
    domanda: "Come si calcola il TFR con un esempio pratico?",
    risposta:
      "Per ogni anno di servizio si divide la retribuzione utile annuale per 13,5 (ex art. 2120 c.c.). Esempio: con una RAL di 27.000 € la quota annuale è 27.000 ÷ 13,5 = 2.000 €. Dopo 10 anni, il TFR lordo accantonato è 20.000 € circa (2.000 × 10), a cui si aggiunge la rivalutazione annua (1,5% fisso + 75% dell'aumento ISTAT FOI). Dal montante si sottrae il contributo IVS dello 0,5% sull'imponibile previdenziale (L. 297/1982 art. 3). Il TFR lordo così ottenuto è poi assoggettato a tassazione separata con aliquota media IRPEF del quinquennio precedente (art. 19 TUIR).",
    fonti: [
      {
        label: "Art. 2120 Codice Civile",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
      {
        label: "L. 297/1982 (riforma TFR)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297",
      },
    ],
  },
  {
    categoria: "Calcolo generale",
    domanda: "Come faccio a calcolare il mio TFR?",
    risposta:
      "Il metodo più rapido è il nostro calcolatore online: inserisci la retribuzione annua lorda, gli anni e mesi di servizio, la categoria (privato, pubblico o colf/badante) e una stima del tasso medio di rivalutazione (2-3% è una stima ragionevole). Il calcolatore applica la formula ex art. 2120 c.c. (RAL ÷ 13,5), somma la rivalutazione annua composta, sottrae il contributo IVS 0,5% e stima la tassazione separata. Ogni anno il datore di lavoro è comunque tenuto a comunicare al lavoratore il TFR maturato (spesso indicato in busta paga di dicembre o nel CUD).",
    fonti: [
      {
        label: "Art. 2120 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
    ],
  },
  {
    categoria: "Calcolo generale",
    domanda: "Come si calcola l'ammontare del TFR?",
    risposta:
      "L'ammontare totale del TFR è dato da tre componenti sommate: (1) la quota annuale accantonata, pari a RAL ÷ 13,5 per ciascun anno di servizio, al netto del contributo IVS 0,5%; (2) la rivalutazione annua composta (1,5% fisso + 75% variazione FOI ISTAT) applicata solo alle quote degli anni precedenti; (3) eventuali quote maturate nell'anno in corso, non rivalutate. Le frazioni di mese pari o superiori a 15 giorni sono conteggiate come mese intero (art. 2120 c. 1 c.c.). Per i dipendenti pubblici la quota annuale è invece il 6,91% della RAL (DPCM 20/12/1999).",
    fonti: [
      {
        label: "Art. 2120 Codice Civile",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
    ],
  },
  {
    categoria: "Calcolo generale",
    domanda: "Come faccio a sapere quanto è il mio TFR maturato?",
    risposta:
      "Il datore di lavoro è tenuto per prassi a comunicare annualmente al lavoratore il TFR accantonato, tipicamente nella busta paga di dicembre o nel CU (Certificazione Unica). In alternativa, puoi richiedere un estratto al proprio ufficio del personale o consultare il fondo pensione, se il TFR è destinato alla previdenza complementare. Il nostro calcolatore fornisce una stima accurata partendo dalla RAL e dall'anzianità: è particolarmente utile per verificare la coerenza tra quanto dichiarato dal datore e il calcolo teorico ex art. 2120 c.c.",
    fonti: [
      {
        label: "Art. 2120 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
    ],
  },
  {
    categoria: "Calcolo generale",
    domanda: "Perché si divide per 13,5 nel calcolo del TFR?",
    risposta:
      "Il divisore 13,5 deriva dalla riforma della Legge 297/1982 e rappresenta una convenzione normativa che garantisce un trattamento egualitario tra lavoratori con diverso numero di mensilità. Matematicamente è la media tra 12 (solo 12 mensilità ordinarie), 13 (con tredicesima) e 14 mensilità (con quattordicesima). Dividere per 13,5 produce un coefficiente annuo di circa il 7,41% della RAL complessiva. L'art. 2120 c.c. stabilisce che la quota non può essere superiore a RAL ÷ 13,5, anche se il contratto collettivo prevedesse importi inferiori.",
    fonti: [
      {
        label: "Legge 29 maggio 1982, n. 297",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297",
      },
    ],
  },
  {
    categoria: "Calcolo generale",
    domanda: "Come si calcola lo 0,50% sul TFR?",
    risposta:
      "Il contributo dello 0,50% è stato introdotto dall'art. 3 della L. 297/1982 per finanziare il sistema pensionistico IVS (Invalidità, Vecchiaia, Superstiti). È calcolato sull'imponibile previdenziale annuo (NON sulla retribuzione utile per il TFR, che può essere diversa) ed è trattenuto dal TFR accantonato. Esempio: con un imponibile previdenziale di 25.000 €, il contributo IVS annuo è 25.000 × 0,005 = 125 €, sottratto dalla quota TFR. Se il datore beneficia di sgravi contributivi, l'aliquota dello 0,5% è ridotta in proporzione.",
    fonti: [
      {
        label: "Art. 3 L. 297/1982",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA 2: TASSAZIONE E NETTO
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Tassazione e netto",
    domanda: "Quanto sono 60.000 € lordi in TFR netto?",
    risposta:
      "Dipende dagli anni di servizio (che determinano il reddito di riferimento) e dall'aliquota media IRPEF del quinquennio precedente. Per un TFR lordo di 60.000 € maturato in 15 anni, il reddito di riferimento è (60.000 × 12) ÷ 15 = 48.000 €. Con gli scaglioni 2026 (23% fino a 28.000 €, 33% 28-50k, 43% >50k), l'aliquota media stimata è circa 26,8% — imposta ~16.080 €, netto ~43.920 €. Il calcolo definitivo è effettuato dall'Agenzia delle Entrate con la riliquidazione ex art. 19 TUIR (aliquota media 5 anni precedenti), che può generare un conguaglio a credito o a debito.",
    fonti: [
      {
        label: "Art. 19 TUIR (DPR 917/1986)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917~art19",
      },
    ],
  },
  {
    categoria: "Tassazione e netto",
    domanda: "Come si calcola il TFR netto con la tassazione separata?",
    risposta:
      "La tassazione separata (art. 19 TUIR) segue tre passaggi: (1) Reddito di riferimento = (TFR lordo − rivalutazioni già tassate) × 12 ÷ anni di servizio; (2) Aliquota media IRPEF = IRPEF calcolata sul reddito di riferimento con gli scaglioni dell'anno di cessazione, diviso il reddito stesso; (3) Imposta = base imponibile × aliquota media − detrazioni (D.M. 20/03/2008). L'imposta sostitutiva del 17% sulle rivalutazioni è trattenuta a parte (L. 190/2014). L'Agenzia delle Entrate riliquida successivamente applicando l'aliquota media dei 5 anni precedenti, generando un conguaglio.",
    fonti: [
      {
        label: "Art. 19 TUIR",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917~art19",
      },
      {
        label: "L. 190/2014 art. 1 c. 623 (imposta sostitutiva 17%)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190",
      },
    ],
  },
  {
    categoria: "Tassazione e netto",
    domanda: "Le addizionali regionali e comunali si applicano al TFR?",
    risposta:
      "No. Il TFR in regime di tassazione separata è escluso dalla base imponibile delle addizionali regionale e comunale IRPEF, secondo l'art. 50 c. 2 D.Lgs. 446/1997, l'art. 14 c. 1 D.Lgs. 360/1998 e la Circolare Agenzia Entrate 3/E del 9/01/1998. L'eccezione è il TFR erogato mensilmente come Qu.I.R. (TFR in busta paga) nella sperimentazione 2015-2018, che era soggetto a tassazione ordinaria e quindi alle addizionali regionali e comunali. Poiché la Qu.I.R. è terminata il 30/06/2018, oggi questa eccezione non ha applicazione pratica per le nuove erogazioni.",
    fonti: [
      {
        label: "Circolare AdE 3/E 1998",
        url: "https://www.agenziaentrate.gov.it",
      },
    ],
  },
  {
    categoria: "Tassazione e netto",
    domanda: "Qual è l'aliquota dell'imposta sostitutiva sulla rivalutazione TFR?",
    risposta:
      "L'aliquota dell'imposta sostitutiva sulla rivalutazione annua del TFR è del 17%, introdotta dall'art. 1 c. 623 della L. 190/2014 con decorrenza 1° gennaio 2015. In precedenza (dal 2001 al 2014) era dell'11%. Il datore di lavoro versa un acconto del 90% entro il 16 dicembre (codice tributo F24 1712) e il saldo entro il 16 febbraio dell'anno successivo (codice 1713). La rivalutazione già tassata con il 17% viene esclusa dalla base imponibile della tassazione separata ordinaria del TFR, per evitare la doppia imposizione.",
    fonti: [
      {
        label: "L. 190/2014 art. 1 c. 623",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA 3: ANTICIPAZIONE
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Anticipazione",
    domanda: "Quando posso chiedere l'anticipazione del TFR?",
    risposta:
      "L'anticipazione del TFR è disciplinata dall'art. 2120 c. 6-11 c.c. e richiede: (a) almeno 8 anni di servizio presso lo stesso datore di lavoro; (b) una delle causali tassative previste dalla legge — spese sanitarie straordinarie, acquisto prima casa per sé o figli, congedi parentali/malattia del bambino (L. 53/2000 art. 7), formazione continua (L. 53/2000 art. 5); (c) richiesta scritta al datore con documentazione. L'importo massimo è il 70% del TFR maturato alla data della richiesta. Il datore può accogliere al massimo il 10% degli aventi diritto, e comunque non oltre il 4% del totale dipendenti.",
    fonti: [
      {
        label: "Art. 2120 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
      {
        label: "L. 53/2000",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2000-03-08;53",
      },
    ],
  },
  {
    categoria: "Anticipazione",
    domanda: "Posso chiedere l'anticipazione del TFR più di una volta?",
    risposta:
      "L'art. 2120 c. 7 c.c. stabilisce che l'anticipazione può essere richiesta una sola volta nel corso del rapporto di lavoro presso lo stesso datore. Tuttavia, l'art. 2120 c. 11 c.c. consente ai contratti collettivi nazionali o aziendali di prevedere criteri applicativi di miglior favore, inclusa la possibilità di più anticipazioni. Nel caso di previdenza complementare (D.Lgs. 252/2005) le regole sono più flessibili: l'anticipazione è possibile fino al 75% del montante per spese sanitarie gravissime anche senza anzianità minima, e dopo 8 anni di iscrizione al fondo è possibile chiedere il 30% del montante senza specifica motivazione.",
    fonti: [
      {
        label: "Art. 2120 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
      {
        label: "D.Lgs. 252/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-12-05;252",
      },
    ],
  },
  {
    categoria: "Anticipazione",
    domanda: "Come viene tassata l'anticipazione del TFR?",
    risposta:
      "L'anticipazione del TFR è sottoposta allo stesso regime di tassazione separata del TFR ordinario (art. 19 TUIR), quindi con aliquota media IRPEF determinata sul reddito di riferimento. Per l'anticipazione destinata all'acquisto della prima casa di abitazione è prevista una ritenuta agevolata del 23% a titolo di imposta sostitutiva. Per le altre causali (spese sanitarie, formazione, congedi L. 53/2000) si applica la tassazione separata ordinaria. Le detrazioni d'imposta del D.M. 20/03/2008 non si applicano sulle anticipazioni erogate dal 01/01/2001 (comma 4 art. 19 TUIR).",
    fonti: [
      {
        label: "Art. 19 TUIR",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1986-12-22;917~art19",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA 4: DIPENDENTI PUBBLICI
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Dipendenti pubblici",
    domanda: "Come si calcola il TFR per i dipendenti pubblici?",
    risposta:
      "Per i dipendenti pubblici assunti a tempo indeterminato dopo il 31/12/2000 (o a tempo determinato dopo il 30/05/2000), il TFR è calcolato applicando l'aliquota del 6,91% alla retribuzione annua lorda, con rivalutazione annua 1,5% + 75% FOI. A differenza del settore privato, la RAL considerata non può eccedere i 240.000 € dal 1° maggio 2014 (L. 147/2013 art. 1 c. 484). I dipendenti pubblici assunti prima del 31/12/2000 hanno invece diritto al TFS (Trattamento di Fine Servizio), con regole diverse (indennità di buonuscita o premio di fine servizio), salvo opzione irrevocabile per il TFR con adesione al fondo di previdenza complementare.",
    fonti: [
      {
        label: "DPCM 20 dicembre 1999",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.del.consiglio.dei.ministri:1999-12-20",
      },
      {
        label: "L. 147/2013 art. 1 c. 484",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2013-12-27;147",
      },
      {
        label: "INPS — TFR dipendenti pubblici",
        url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.il-trattamento-di-fine-rapporto-tfr-per-i-dipendenti-pubblici-50229.il-trattamento-di-fine-rapporto-tfr-per-i-dipendenti-pubblici.html",
      },
    ],
  },
  {
    categoria: "Dipendenti pubblici",
    domanda: "Quanto tempo devo aspettare per il TFR da dipendente pubblico?",
    risposta:
      "I tempi di erogazione del TFR/TFS per i dipendenti pubblici, stabiliti dalla L. 147/2013 art. 1 c. 484, sono significativamente più lunghi rispetto al settore privato: 12 mesi dalla cessazione per importi fino a 50.000 €; due rate annuali (dopo 12 e 24 mesi) per importi 50.001-100.000 €; tre rate annuali (dopo 12, 24 e 36 mesi) per importi oltre 100.000 €. I tempi scendono a 105 giorni in caso di cessazione per decesso o inabilità. Con la sentenza 130/2023 la Corte Costituzionale ha dichiarato irragionevoli questi ritardi — è in corso un progressivo adeguamento normativo, ma le soglie sono ancora formalmente in vigore.",
    fonti: [
      {
        label: "L. 147/2013 art. 1 c. 484",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2013-12-27;147",
      },
      {
        label: "Corte Cost. sent. 130/2023",
        url: "https://www.cortecostituzionale.it/actionSchedaPronuncia.do?anno=2023&numero=130",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA 5: CATEGORIE PARTICOLARI (colf, previdenza)
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Categorie particolari",
    domanda: "Come si calcola il TFR per colf e badanti?",
    risposta:
      "Il TFR dei lavoratori domestici (colf, badanti, baby sitter) è regolato dal CCNL del lavoro domestico (Assindatcolf, Domina, Fidaldo, Federcolf) e applica le regole generali dell'art. 2120 c.c. con la formula RAL ÷ 13,5. La retribuzione utile comprende lo stipendio mensile, la tredicesima, il vitto/alloggio per conviventi (valorizzato con le quotazioni fissate dalle parti sociali, pubblicate annualmente dall'INPS), le ore di straordinario continuative. Sono escluse le somme occasionali e i rimborsi spese. Se lavoro a ore, il TFR si calcola sulla retribuzione oraria × ore mensili effettive. La rivalutazione annua (1,5% + 75% FOI) si applica anche ai domestici.",
    fonti: [
      {
        label: "Art. 2120 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
      {
        label: "CCNL Lavoro Domestico (INPS)",
        url: "https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.lavoratori-domestici-la-contribuzione-50143.lavoratori-domestici-la-contribuzione.html",
      },
    ],
  },
  {
    categoria: "Categorie particolari",
    domanda: "È meglio lasciare il TFR in azienda o destinarlo alla previdenza complementare?",
    risposta:
      "Dipende dal profilo personale. In azienda il TFR è garantito (Fondo Garanzia INPS in caso di insolvenza datore) e rivalutato all'1,5% + 75% FOI (rivalutazione media storica ~2,5% annuo), ma è tassato con aliquota IRPEF media (spesso 23-35%). Nel fondo pensione è investito sui mercati finanziari (rendimenti potenzialmente più alti ma con rischio) e la tassazione è molto più favorevole: imposta sostitutiva del 15%, che si riduce di 0,3 punti all'anno dopo 15 anni di anzianità fino a un minimo del 9% (art. 14 D.Lgs. 252/2005). La scelta è irrevocabile verso la previdenza complementare; è revocabile invece la scelta di lasciare in azienda.",
    fonti: [
      {
        label: "D.Lgs. 252/2005",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-12-05;252",
      },
    ],
  },
  {
    categoria: "Categorie particolari",
    domanda: "Se non scelgo dove destinare il TFR, cosa succede?",
    risposta:
      "Il D.Lgs. 252/2005 prevede il meccanismo del silenzio-assenso: se entro 6 mesi dall'assunzione il lavoratore non esprime una scelta esplicita (mediante apposito modulo TFR2 fornito dal datore), il TFR futuro viene automaticamente versato al fondo di previdenza complementare previsto dal CCNL applicabile. In assenza di un fondo negoziale di categoria, viene trasferito al FondINPS (fondo residuale presso l'INPS). La scelta fatta esplicitamente per la previdenza complementare è irrevocabile; quella di mantenere il TFR in azienda è revocabile in qualsiasi momento comunicandolo per iscritto al datore di lavoro.",
    fonti: [
      {
        label: "D.Lgs. 252/2005 art. 8",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-12-05;252",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORIA 6: NORMATIVA E PRESCRIZIONE
  // ─────────────────────────────────────────────────────────────────────────
  {
    categoria: "Normativa e prescrizione",
    domanda: "Quanto tempo ho per reclamare il TFR non pagato?",
    risposta:
      "Il diritto al TFR si prescrive in 5 anni dalla data di cessazione del rapporto di lavoro, ex art. 2948 c. 5 c.c. Il termine decorre dal giorno in cui il TFR è esigibile (cessazione del rapporto). Se il diritto al TFR è stato accertato con sentenza passata in giudicato, il termine di prescrizione si allunga a 10 anni ex art. 2953 c.c. Per interrompere la prescrizione serve un atto scritto di diffida del lavoratore (raccomandata A/R o PEC), oppure un riconoscimento esplicito del debito da parte del datore (artt. 2944-2945 c.c.). Il decorso è sospeso in caso di fallimento del datore fino alla chiusura della procedura.",
    fonti: [
      {
        label: "Art. 2948 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2948",
      },
    ],
  },
  {
    categoria: "Normativa e prescrizione",
    domanda: "Cosa succede al mio TFR se l'azienda fallisce?",
    risposta:
      "In caso di fallimento, concordato preventivo, liquidazione giudiziale o amministrazione straordinaria del datore di lavoro, interviene il Fondo di Garanzia istituito presso l'INPS con l'art. 2 della L. 297/1982. Il lavoratore (o gli eredi) presenta domanda all'INPS allegando la documentazione del credito ammesso allo stato passivo. Il Fondo paga il TFR entro 60 giorni dalla richiesta, surrogandosi nei diritti del lavoratore verso il datore. La copertura si estende anche alle ultime 3 mensilità di retribuzione non corrisposte. La domanda si prescrive in 5 anni dalla data del decreto di chiusura della procedura concorsuale.",
    fonti: [
      {
        label: "Art. 2 L. 297/1982",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1982-05-29;297",
      },
    ],
  },
  {
    categoria: "Normativa e prescrizione",
    domanda: "Il TFR è dovuto in caso di dimissioni?",
    risposta:
      "Sì. L'art. 2120 c. 1 c.c. stabilisce che il TFR spetta al lavoratore \"in ogni caso di cessazione del rapporto di lavoro subordinato\", indipendentemente dalla causa: dimissioni (volontarie o per giusta causa), licenziamento (legittimo o illegittimo), pensionamento, morte del lavoratore (in questo caso agli eredi ex art. 2122 c.c.), risoluzione consensuale, scadenza del contratto a termine. Il TFR matura anche durante il periodo di prova se questo dura almeno 14 giorni. Il TFR è un diritto inviolabile del lavoratore, che non può essere escluso per contratto e sorge automaticamente per legge.",
    fonti: [
      {
        label: "Art. 2120 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
    ],
  },
  {
    categoria: "Normativa e prescrizione",
    domanda: "Il TFR in busta paga (Qu.I.R.) è ancora possibile?",
    risposta:
      "No. Il TFR in busta paga (Qu.I.R. — Quota Integrativa della Retribuzione), introdotto sperimentalmente dalla L. 190/2014 (Legge di Stabilità 2015) per il periodo 01/03/2015 – 30/06/2018, è terminato il 30/06/2018 e non è stato prorogato. Attualmente non è più possibile richiedere l'erogazione mensile del TFR: il lavoratore riceverà l'intero TFR accumulato al momento della cessazione del rapporto (o in forma rateale se dipendente pubblico). La Qu.I.R. era tassata con aliquote IRPEF ordinarie e non rientrava nelle detrazioni da lavoro dipendente.",
    fonti: [
      {
        label: "L. 190/2014 art. 1 c. 26-34",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190",
      },
    ],
  },
  {
    categoria: "Normativa e prescrizione",
    domanda: "Quali periodi di assenza maturano TFR?",
    risposta:
      "L'art. 2120 c. 3 c.c. distingue tre categorie. (1) Assenze retribuite → computabili: ferie godute, festività, permessi orari, permessi L. 104/1992 per assistenza familiari disabili, permessi donatori di sangue, congedo matrimoniale, aspettative retribuite. (2) Assenze non retribuite → NON computabili: servizio militare, permessi sindacali non retribuiti, permessi studio non retribuiti. (3) Assenze con retribuzione figurativa → computabili al valore figurativo: malattia (art. 2110 c.c.), infortunio, congedo di maternità/paternità (D.Lgs. 151/2001 artt. 22 e 34), permessi per allattamento, malattia del bambino, CIGO e CIGS. I contratti collettivi possono prevedere condizioni migliorative.",
    fonti: [
      {
        label: "Art. 2120 c. 3 c.c.",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2120",
      },
      {
        label: "D.Lgs. 151/2001",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2001-03-26;151",
      },
    ],
  },
];
