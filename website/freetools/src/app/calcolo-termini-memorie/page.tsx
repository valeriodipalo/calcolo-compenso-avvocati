import { FileText, BookOpen, HelpCircle, Calculator, Scale, AlertTriangle, CalendarOff, Clock, ListChecks, Gavel, Link2 } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import Calcolatore from "@/components/calcolo-termini-memorie/Calcolatore";
import {
  sections,
  normativaRiferimento,
  tabellaConfrontoRegimi,
  tabellaVecchioRito,
  tabellaCartabia,
  tabellaArt155,
  tabellaRiducibilitaTermini,
  URLS,
} from "@/data/calcolo-termini-memorie/terminiMemorieData";
import { faqData } from "@/data/calcolo-termini-memorie/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Termini Memorie 183/190 c.p.c. e Cartabia 2026",
  description:
    "Calcola i termini delle memorie civili: art. 183 c. 6 (30+30+20), art. 190 (60+20) e Cartabia 171-ter (40/20/10), 189 (60/30/15), 275-bis (30/15).",
  alternates: { canonical: "/calcolo-termini-memorie" },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-termini-memorie",
    title: "Calcolo Termini Memorie 183/190 c.p.c. e Cartabia — Guida e Calcolatore 2026",
    description:
      "Calcolatore unificato per memorie ex art. 183, comparse 190, memorie integrative 171-ter, note 189 e discussione orale 275-bis. Sospensione feriale, sabato e festivi, regime transitorio Cartabia.",
    images: [{ url: HERO_IMG, width: 1920, height: 1072, alt: "Calcolo termini memorie 183/190 c.p.c. e Cartabia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Termini Memorie 183/190 c.p.c. e Cartabia",
    description:
      "Calcolatore unificato dei termini delle memorie processuali — vecchio rito e Riforma Cartabia.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-termini-memorie",
  title: "Calcolo Termini Memorie 183/190 c.p.c. e Cartabia",
  shortTitle: "Termini Memorie",
  icon: FileText,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt: "Calcolo Termini Memorie 183/190 c.p.c. e Cartabia — calcolatore unificato",
  heroEyebrow: "Calcolatore e Guida Completa",
  heroTitle: "Calcolo Termini Memorie 183/190 c.p.c. e Cartabia",
  heroDescription:
    "Calcolatore unificato per il deposito delle memorie nel processo civile: vecchio rito (art. 183 c. 6 e art. 190) e Riforma Cartabia (artt. 171-ter, 189 e 275-bis). Sospensione feriale, sabato e festivi.",
  heroReference: "Artt. 183, 190, 171-ter, 189, 275-bis c.p.c. — D.Lgs. 149/2022 + correttivo 164/2024",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati al D.Lgs. 149/2022 (Riforma Cartabia) e al D.Lgs. correttivo 164/2024. Sospensione feriale: L. 742/1969 come modificata dal D.L. 132/2014 conv. L. 162/2014.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Art. 155 c.p.c.", url: URLS.art155 },
    { label: "Art. 183 c.p.c.", url: URLS.art183 },
    { label: "Art. 171-ter c.p.c.", url: URLS.art171ter },
    { label: "Art. 189 c.p.c.", url: URLS.art189 },
    { label: "Art. 275-bis c.p.c.", url: URLS.art275bis },
    { label: "L. 742/1969 — Sospensione feriale", url: URLS.L742_1969 },
  ],
};

export default function CalcoloTerminiMemoriePage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Termini Memorie 183/190 c.p.c. e Cartabia: Guida e Calcolatore 2026",
          description:
            "Guida completa al calcolo dei termini per il deposito delle memorie nel processo civile italiano: regime ante-Cartabia (artt. 183 c. 6 e 190 c.p.c., 30+30+20 e 60+20 giorni) e regime post-Cartabia (artt. 171-ter, 189, 275-bis c.p.c., termini a ritroso 40+20+10, 60+30+15 e 30+15). Sospensione feriale, computo del sabato e dei festivi, decorrenza, rimessione in termini.",
          path: "/calcolo-termini-memorie",
          datePublished: "2026-05-20",
          dateModified: "2026-05-20",
          image: HERO_IMG,
          keywords:
            "termini memorie 183 cpc, calcolo termini 190, art 183 cpc, art 190 cpc, memorie integrative cartabia, art 171-ter, art 189 cpc, art 275-bis cpc, comparse conclusionali, memorie di replica, sospensione feriale",
          sections: [
            "Quale regime si applica",
            "Memorie ex art. 183 c. 6 (vecchio rito)",
            "Comparse conclusionali e repliche ex art. 190",
            "Memorie integrative ex art. 171-ter",
            "Note di precisazione conclusioni, comparse e repliche ex art. 189",
            "Discussione orale ex art. 275-bis",
            "Computo dei termini ex art. 155 c.p.c.",
            "Il sabato e i termini plurimi",
            "Sospensione feriale dei termini",
            "Decorrenza e dies a quo",
            "Deposito tardivo e rimessione in termini",
            "Riducibilità dei termini",
            "Tabella riepilogativa",
            "Domande frequenti (FAQ)",
            "Fonti e Riferimenti",
            "Normativa di riferimento",
          ],
        })}
      />
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Unificato Termini Memorie 183/190 c.p.c. e Cartabia 2026",
          description:
            "Calcolatore online per il deposito delle memorie nel processo civile: copre tutti e 5 gli scenari (memorie 183 c. 6, comparse 190, memorie integrative 171-ter, note 189, discussione orale 275-bis) con sospensione feriale, gestione sabato/festivi e modalità Cassazione 13201/2006.",
          path: "/calcolo-termini-memorie",
          applicationCategory: "UtilityApplication",
        })}
      />

      {/* ===== Definizione introduttiva (GEO: AI Overview extraction) ===== */}
      <p className="text-base leading-relaxed mb-6">
        Il <strong>calcolo dei termini delle memorie</strong> nel processo civile italiano segue due regimi distinti a seconda della data di instaurazione del procedimento. Per i giudizi <strong>instaurati prima del 28 febbraio 2023</strong> si applica il <strong>vecchio rito</strong> (<InlineNormLink text="art. 183, comma 6, c.p.c." url={URLS.art183} /> per le tre memorie 30+30+20 dall'udienza, <InlineNormLink text="art. 190 c.p.c." url={URLS.art190} /> per comparse conclusionali 60 + repliche 20 dalla rimessione). Per i giudizi <strong>instaurati dal 28 febbraio 2023</strong> in poi si applica la <InlineNormLink text="Riforma Cartabia (D.Lgs. 149/2022)" url={URLS.dlgs149_2022} />: <InlineNormLink text="art. 171-ter c.p.c." url={URLS.art171ter} /> per le memorie integrative 40+20+10 a ritroso, <InlineNormLink text="art. 189 c.p.c." url={URLS.art189} /> per note pc + comparse + repliche 60+30+15 a ritroso, <InlineNormLink text="art. 275-bis c.p.c." url={URLS.art275bis} /> per la discussione orale 30+15 a ritroso. Il computo segue l'<InlineNormLink text="art. 155 c.p.c." url={URLS.art155} /> e la sospensione feriale opera dal 1° al 31 agosto (<InlineNormLink text="L. 742/1969" url={URLS.L742_1969} />).
      </p>

      {/* ═══════════════════════════════════════════════════════════
          1. Calcolatore
          ═══════════════════════════════════════════════════════════ */}
      <Calcolatore />

      {/* ═══════════════════════════════════════════════════════════
          2. Quale regime
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="quale-regime" icon={Scale} title="Quale regime si applica? Vecchio rito o Cartabia" subtitle="Lo spartiacque del 28 febbraio 2023 e il regime transitorio" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>Riforma Cartabia</strong>, attuata con il <InlineNormLink text="D.Lgs. 10 ottobre 2022, n. 149" url={URLS.dlgs149_2022} />, ha riscritto integralmente la disciplina del deposito delle memorie nel processo civile di cognizione. L'<strong>art. 35, comma 1</strong> del decreto delegato dispone che le nuove norme «hanno effetto a decorrere dal 28 febbraio 2023 e si applicano ai procedimenti instaurati successivamente a tale data. Ai procedimenti pendenti alla data del 28 febbraio 2023 si applicano le disposizioni anteriormente vigenti». L'efficacia, originariamente prevista per il 30 giugno 2023, fu anticipata dalla L. 197/2022 (legge di bilancio 2023) al 28 febbraio.
        </p>
        <NormativaQuote url={URLS.dlgs149_2022}>
          Art. 35, c. 1, D.Lgs. 149/2022: «Le disposizioni del presente decreto, salvo che non sia diversamente disposto, hanno effetto a decorrere dal 28 febbraio 2023 e si applicano ai procedimenti instaurati successivamente a tale data. Ai procedimenti pendenti alla data del 28 febbraio 2023 si applicano le disposizioni anteriormente vigenti.»
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La <strong>data di instaurazione del procedimento</strong> coincide con la data di notifica dell'atto di citazione (o di deposito del ricorso, per i riti che si introducono con ricorso). Questa data resta determinante per tutto il giudizio: anche le fasi successive (rimessione in decisione, conclusionali, eventuali impugnazioni di primo grado per i procedimenti pendenti) continuano ad applicare la disciplina del rito previgente.
        </p>
        <AlertBox variant="warning" title="Attenzione al regime transitorio">
          <p className="leading-relaxed">
            Verifica sempre la <strong>data di notifica dell'atto di citazione</strong> prima di calcolare i termini. Un errore nel determinare il regime applicabile può portare a depositare memorie con la scansione sbagliata (30+30+20 invece di 40+20+10) e a incorrere in decadenze irreversibili. Per i procedimenti pendenti al 28/02/2023 il vecchio rito ex artt. 183 e 190 c.p.c. è ancora pienamente operativo, anche se le memorie vengono depositate nel 2026 o oltre.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Il <strong>D.Lgs. correttivo 31/10/2024, n. 164</strong> (pubblicato in G.U. n. 257 del 3/11/2024) ha integrato e corretto puntualmente la riforma, soprattutto sulla <strong>decorrenza dei termini delle memorie integrative ex art. 171-ter c.p.c.</strong>: il nuovo comma 5 dell'<InlineNormLink text="art. 171-bis c.p.c." url={URLS.art171bis} /> chiarisce che i termini iniziano a decorrere «quando è pronunciato il decreto previsto dal terzo comma» del medesimo articolo, computati rispetto all'udienza fissata in citazione o a quella fissata dal giudice istruttore. Il correttivo non ha modificato la struttura 40+20+10 delle memorie integrative, né i termini massimi 60+30+15 dell'art. 189 e 30+15 dell'art. 275-bis.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          3. Memorie 183
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="memorie-183" icon={BookOpen} title="Memorie ex art. 183, comma 6, c.p.c. (vecchio rito)" subtitle="Il 'triplo termine' 30+30+20 per i procedimenti ante 28/02/2023" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>art. 183, comma 6, c.p.c.</strong>, nella formulazione vigente fino al 27 febbraio 2023 (e ancora applicabile ai procedimenti pendenti a tale data), introduce il c.d. <strong>triplo termine</strong> che il giudice, su richiesta delle parti, concede al termine della prima udienza di trattazione. La struttura è quella della classica trattazione scritta a cascata, finalizzata a definire il <em>thema decidendum</em> e il <em>thema probandum</em> attraverso tre momenti progressivi di contraddittorio.
        </p>
        <NormativaQuote url={URLS.art183}>
          Art. 183, c. 6, c.p.c.: «Se richiesto, il giudice concede alle parti i seguenti termini perentori: 1) un termine di ulteriori trenta giorni per il deposito di memorie limitate alle sole precisazioni o modificazioni delle domande, delle eccezioni e delle conclusioni già proposte; 2) un termine di ulteriori trenta giorni per replicare alle domande ed eccezioni nuove, o modificate dall'altra parte, per proporre le eccezioni che sono conseguenza delle domande e delle eccezioni medesime e per l'indicazione dei mezzi di prova e produzioni documentali; 3) un termine di ulteriori venti giorni per le sole indicazioni di prova contraria.»
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          Le <strong>tre memorie</strong> presentano un contenuto funzionale specifico e distinto. La <strong>prima memoria</strong> (30 giorni) serve a iniziare a perimetrare il <em>thema decidendum</em>: consente alla parte di precisare o modificare le domande, le eccezioni e le conclusioni già proposte negli atti introduttivi (<em>ius variandi</em> e <em>ius poenitendi</em>). La giurisprudenza esclude tuttavia la possibilità di proporre con questa memoria domande del tutto nuove, ma ammette modifiche anche profonde degli elementi oggettivi della domanda (<em>petitum</em> e <em>causa petendi</em>). La <strong>seconda memoria</strong> (ulteriori 30 giorni) consente di replicare alle domande ed eccezioni nuove o modificate dalla controparte, di proporre eccezioni che sono conseguenza delle domande e delle eccezioni altrui, di indicare i mezzi di prova diretti e di produrre i documenti. La <strong>terza memoria</strong> (ulteriori 20 giorni) è riservata alla sola indicazione della prova contraria rispetto alle istanze istruttorie avversarie.
        </p>
        <LegalTable
          headers={["Memoria", "Termine", "Riferimento normativo"]}
          rows={tabellaVecchioRito.slice(0, 3)}
        />
        <p className="text-base leading-relaxed">
          I termini ex art. 183, c. 6, c.p.c. presentano alcune caratteristiche essenziali ribadite costantemente dalla giurisprudenza e dalla dottrina. Sono <strong>perentori</strong>: la loro inosservanza comporta decadenza dal potere di compiere l'atto e l'inammissibilità della memoria depositata tardivamente (<InlineNormLink text="art. 152 c.p.c." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art152" />). Sono <strong>consequenziali</strong>: ciascuno decorre dalla scadenza del precedente, non dalla data dell'udienza per i termini successivi al primo. Sono <strong>simultanei</strong>: vengono concessi in contemporanea a tutte le parti del giudizio. Sono <strong>oggetto di facoltà</strong> e non di obbligo: le parti possono scegliere se depositare o meno ciascuna memoria, ma una volta depositate sono soggette alle preclusioni previste.
        </p>
        <AlertBox variant="info" title="La concessione del giudice non è automatica">
          <p className="leading-relaxed">
            La Corte di Cassazione, con la sentenza <strong>n. 17685 del 31 maggio 2022</strong> (in linea con Cass. 8287/2017, 7474/2017, 4767/2016), ha precisato che «la sussistenza di un obbligo del giudice di concedere, ove richiesti, i termini per lo svolgimento delle facoltà difensive di cui all'art. 183, comma sesto, c.p.c., è tutt'altro che pacifico nella giurisprudenza di questa Corte». In forza del combinato disposto degli artt. 187, c. 1, c.p.c. e 80-bis disp. att. c.p.c., il giudice può legittimamente invitare le parti a precisare le conclusioni e assegnare la causa in decisione, anche in presenza di una richiesta di concessione del triplo termine, qualora ritenga la causa matura per la decisione.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Il <strong>deposito tardivo</strong> di una memoria 183, c. 6, comporta l'<strong>inammissibilità</strong> della stessa: le argomentazioni e le richieste in essa contenute non possono essere prese in considerazione dal giudice, come ripetutamente affermato dalla giurisprudenza e ricordato dalla dottrina prevalente (per tutti, Studio Cataldi 2021). Fa eccezione la sola ipotesi della <strong>rimessione in termini</strong> ex <InlineNormLink text="art. 153, c. 2, c.p.c." url={URLS.art153} />, ammessa quando il ritardo sia dipeso da causa non imputabile alla parte (forza maggiore, errore della cancelleria, malfunzionamento accertato del PCT, gravi impedimenti documentabili). L'errore di calcolo del termine da parte dell'avvocato non costituisce causa non imputabile, secondo Cass. 27449/2015.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          4. Comparse 190
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="comparse-190" icon={Gavel} title="Comparse conclusionali e repliche ex art. 190 c.p.c. (vecchio rito)" subtitle="60 giorni dalla rimessione + 20 giorni successivi per le repliche" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>art. 190 c.p.c.</strong>, nella formulazione ante-Cartabia ancora applicabile ai procedimenti pendenti al 28/02/2023, disciplina la fase conclusiva del giudizio civile davanti al tribunale in composizione collegiale. Dopo la rimessione della causa al collegio, il giudice istruttore assegna alle parti un termine perentorio di sessanta giorni per il deposito delle <strong>comparse conclusionali</strong>, seguito da un ulteriore termine perentorio di venti giorni per il deposito delle <strong>memorie di replica</strong>.
        </p>
        <NormativaQuote url={URLS.art190}>
          Art. 190 c.p.c. (versione ante-Cartabia): «Le comparse conclusionali debbono essere depositate entro il termine perentorio di sessanta giorni dalla rimessione della causa al collegio e le memorie di replica entro i venti giorni successivi. Per il deposito delle comparse conclusionali il giudice istruttore, quando rimette la causa al collegio, può fissare un termine più breve, comunque non inferiore a venti giorni.»
        </NormativaQuote>
        <LegalTable
          headers={["Atto", "Termine", "Riferimento normativo"]}
          rows={tabellaVecchioRito.slice(3)}
        />
        <p className="text-base leading-relaxed">
          La <strong>comparsa conclusionale</strong> è l'atto difensivo conclusivo con il quale ciascuna parte espone le argomentazioni giuridiche a sostegno delle proprie richieste, sviluppando in modo organico e completo le ragioni che dovrebbero condurre il collegio ad accogliere o rigettare le domande proposte. Deve contenere le conclusioni già fissate dinanzi all'istruttore (Cass. SS.UU. ord. 17 agosto 2020, n. 17197 e Corte d'Appello Palermo sent. 18/11/2021 ribadiscono la stretta connessione con la precisazione delle conclusioni). La <strong>memoria di replica</strong> consente di rispondere alle argomentazioni avversarie esposte nella comparsa conclusionale, ma non di introdurre nuove tematiche.
        </p>
        <AlertBox variant="info" title="Termine ridotto: il limite minimo di 20 giorni">
          <p className="leading-relaxed">
            Il comma 2 dell'art. 190 c.p.c. attribuisce al giudice istruttore il potere di fissare un termine <strong>più breve</strong> di 60 giorni per il deposito delle comparse conclusionali, purché <strong>non inferiore a 20 giorni</strong>. La giurisprudenza esclude la fissazione di termini inferiori al limite minimo, anche se concordati tra le parti, trattandosi di norma imperativa finalizzata a garantire il diritto di difesa. La riduzione richiede una specifica motivazione fondata su esigenze di celerità processuale o sulla semplicità del caso concreto.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          I termini ex art. 190 c.p.c. sono <strong>perentori</strong> e <strong>consequenziali</strong>: il termine per le memorie di replica decorre dalla scadenza del termine per la comparsa conclusionale. La Cassazione (sent. 8287/2017) ha chiarito che il termine di 20 giorni per la replica non è autonomo, ma dipendente dalla regolare decorrenza del termine per la comparsa, escludendo proroghe indipendenti. Il <strong>mancato deposito</strong> della comparsa conclusionale non comporta una formale inammissibilità della comparsa di costituzione, ma preclude alla parte la valida formulazione delle argomentazioni finali e dei motivi giuridici, con conseguenze processuali significative sulla decisione del collegio.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          5. Memorie 171-ter
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="memorie-171-ter" icon={Calculator} title="Memorie integrative ex art. 171-ter c.p.c. (Cartabia)" subtitle="40+20+10 giorni a ritroso dall'udienza ex art. 183 per i procedimenti instaurati dal 28/02/2023" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>art. 171-ter c.p.c.</strong>, introdotto dalla Riforma Cartabia (D.Lgs. 149/2022) e applicabile ai procedimenti instaurati dal 28 febbraio 2023, ha completamente rovesciato la logica del vecchio triplo termine: i termini non sono più assegnati dal giudice dopo l'udienza, ma sono <strong>fissati ex lege</strong> e si calcolano <strong>a ritroso</strong> rispetto alla data dell'udienza ex art. 183. Lo scopo è di anticipare al massimo la definizione del <em>thema decidendum</em> e del <em>thema probandum</em>, riducendo i tempi complessivi del processo.
        </p>
        <NormativaQuote url={URLS.art171ter}>
          Art. 171-ter c.p.c.: «Le parti, a pena di decadenza, con memorie integrative possono: 1) almeno quaranta giorni prima dell'udienza di cui all'articolo 183, proporre le domande e le eccezioni che sono conseguenza della domanda riconvenzionale o delle eccezioni proposte dal convenuto, oltre che chiedere la chiamata in causa di un terzo se l'esigenza è sorta dalle difese del convenuto, e precisare e modificare le domande, eccezioni e conclusioni già proposte; 2) almeno venti giorni prima dell'udienza, replicare alle domande ed eccezioni nuove, o modificate dall'altra parte, proporre le eccezioni che sono conseguenza delle domande e delle eccezioni medesime e indicare i mezzi di prova e le produzioni documentali; 3) almeno dieci giorni prima dell'udienza, replicare alle eccezioni nuove e indicare la prova contraria.»
        </NormativaQuote>
        <LegalTable
          headers={["Memoria", "Termine a ritroso", "Riferimento normativo"]}
          rows={tabellaCartabia.slice(0, 3)}
        />
        <p className="text-base leading-relaxed">
          Le tre <strong>memorie integrative</strong> coincidono nella sostanza con quelle del vecchio art. 183, c. 6, c.p.c. (la prima per precisazioni/modifiche, la seconda per repliche e prove, la terza per la prova contraria), ma con una differenza fondamentale: nel nuovo rito è ammessa la <strong>chiamata in causa del terzo</strong> da parte dell'attore con la prima memoria integrativa, quando l'esigenza sia sorta dalle difese del convenuto nella propria comparsa di costituzione. Questa apertura è una delle innovazioni più rilevanti della Riforma Cartabia, perché supera il rigore della precedente disciplina e consente una più ampia gestione delle dinamiche processuali.
        </p>
        <AlertBox variant="warning" title="I termini 40-20-10 sono inderogabili">
          <p className="leading-relaxed">
            A differenza dei termini delle conclusionali ex art. 189 (che sono massimi: «non superiore a 60/30/15 giorni»), i termini ex art. 171-ter sono <strong>fissi e non riducibili</strong> dal giudice. Il testo della norma usa le parole «quaranta», «venti» e «dieci» giorni, senza formule attenuative. Il Tribunale di Bologna, con sentenza del 20 marzo 2024, ha confermato che i termini «sono predeterminati dal legislatore» e non possono essere abbreviati. L'unica leva del giudice è lo spostamento della data dell'udienza ex art. 171-bis, c. 3, che comporta la rideterminazione automatica delle scadenze a ritroso.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Sulla <strong>decorrenza dei termini a ritroso</strong> è intervenuto il <strong>D.Lgs. correttivo 164/2024</strong>, che ha aggiunto il comma 5 all'art. 171-bis c.p.c. La nuova disposizione chiarisce che «i termini di cui all'articolo 171-ter iniziano a decorrere quando è pronunciato il decreto previsto dal terzo comma e si computano rispetto all'udienza fissata nell'atto di citazione o a quella fissata dal giudice istruttore». La precisazione era necessaria perché, sotto la sola formulazione originaria della Riforma Cartabia, era controverso se i termini decorressero «ex lege» dalla data di citazione anche in mancanza del decreto di conferma o spostamento dell'udienza. Il Tribunale di Bologna, nella citata sentenza del 20/03/2024, aveva infatti propeso per la decorrenza automatica; il correttivo ha eliminato l'ambiguità.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          6. Note 189
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="note-189" icon={FileText} title="Note di precisazione conclusioni, comparse e repliche ex art. 189 c.p.c. (Cartabia)" subtitle="60+30+15 giorni a ritroso dall'udienza collegiale" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>art. 189 c.p.c.</strong>, riscritto dalla Riforma Cartabia, disciplina la fase conclusiva del giudizio sostituendo la vecchia udienza di precisazione delle conclusioni con il deposito di <strong>note scritte</strong>. Quando il giudice istruttore rimette la causa al collegio (o davanti a sé per il procedimento monocratico), fissa un'udienza e assegna alle parti termini perentori massimi a ritroso. La struttura è triplice: note di precisazione delle conclusioni, comparse conclusionali e memorie di replica.
        </p>
        <NormativaQuote url={URLS.art189}>
          Art. 189 c.p.c.: «Con l'ordinanza di rimessione al collegio il giudice istruttore fissa: 1) un termine non superiore a sessanta giorni prima dell'udienza per il deposito di note scritte contenenti la sola precisazione delle conclusioni che le parti intendono sottoporre al collegio, nei limiti di quelle formulate negli atti introduttivi o a norma dell'articolo 171-ter; 2) un termine non superiore a trenta giorni prima dell'udienza per il deposito delle comparse conclusionali; 3) un termine non superiore a quindici giorni prima dell'udienza per il deposito delle memorie di replica.»
        </NormativaQuote>
        <LegalTable
          headers={["Atto", "Termine a ritroso", "Riferimento normativo"]}
          rows={tabellaCartabia.slice(3, 6)}
        />
        <p className="text-base leading-relaxed">
          Le <strong>note di precisazione delle conclusioni</strong> sostituiscono la tradizionale udienza di p.c., adattando il sistema processuale alle esigenze di digitalizzazione e snellimento. La precisazione deve restare nei limiti delle conclusioni formulate negli atti introduttivi e nelle memorie integrative ex art. 171-ter: il D.Lgs. correttivo 164/2024 ha rafforzato questo collegamento, sottolineando la funzione di chiusura del <em>thema decidendum</em>. La <strong>comparsa conclusionale</strong> conserva la funzione tradizionale di esposizione completa delle argomentazioni giuridiche; la <strong>memoria di replica</strong> consente l'ultimo contraddittorio scritto.
        </p>
        <AlertBox variant="info" title="Termini massimi, non fissi">
          <p className="leading-relaxed">
            A differenza dell'art. 171-ter, l'art. 189 c.p.c. fissa <strong>termini massimi</strong> («non superiore a»): il giudice può quindi <strong>ridurli</strong>, fissando scadenze più ravvicinate, purché ciò non comprima irragionevolmente il diritto di difesa. Non può invece superarli. La perentorietà dei termini deriva dalla natura decadenziale dell'attività processuale (precisazione conclusioni, conclusionali, repliche).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          7. Discussione orale 275-bis
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="discussione-275-bis" icon={Gavel} title="Discussione orale ex art. 275-bis c.p.c. (Cartabia)" subtitle="30+15 giorni a ritroso: niente memorie di replica" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>art. 275-bis c.p.c.</strong>, introdotto dalla Riforma Cartabia, disciplina la <strong>decisione a seguito di discussione orale</strong> davanti al collegio (commi 1-3) o al giudice monocratico (commi 4-6). Quando il giudice istruttore ritiene che la causa possa essere decisa con discussione orale, fissa direttamente l'udienza davanti al collegio e assegna due termini massimi: 30 giorni a ritroso per le <strong>note di precisazione delle conclusioni</strong> e 15 giorni a ritroso per le <strong>note conclusionali</strong>. Non è prevista alcuna memoria di replica.
        </p>
        <NormativaQuote url={URLS.art275bis}>
          Art. 275-bis c.p.c.: «Il giudice istruttore, quando ritiene che la causa può essere decisa a seguito di discussione orale, fissa udienza davanti al collegio e assegna alle parti termine, anteriore all'udienza, non superiore a trenta giorni per il deposito di note limitate alla precisazione delle conclusioni e un ulteriore termine non superiore a quindici giorni per note conclusionali. […] Se il giudizio si svolge davanti al giudice monocratico, questi, quando ritiene che la causa può essere decisa a seguito di discussione orale, fissa udienza davanti a sé e assegna alle parti termine, anteriore all'udienza, non superiore a trenta giorni per il deposito di note limitate alla precisazione delle conclusioni e un ulteriore termine non superiore a quindici giorni per note conclusionali.»
        </NormativaQuote>
        <LegalTable
          headers={["Atto", "Termine a ritroso", "Riferimento normativo"]}
          rows={tabellaCartabia.slice(6)}
        />
        <p className="text-base leading-relaxed">
          La <strong>discussione orale</strong> ha il vantaggio della rapidità: dopo la relazione orale del giudice istruttore e l'intervento delle parti, il collegio può pronunciare sentenza all'udienza stessa, dando lettura del dispositivo e della concisa esposizione delle ragioni di fatto e di diritto della decisione; in alternativa, la sentenza è depositata entro i sessanta giorni successivi. Il <strong>D.Lgs. correttivo 164/2024</strong> ha apportato soltanto una modifica formale all'art. 275-bis, sopprimendo le parole «in cancelleria» al comma 3 (oggi la sentenza è semplicemente «pubblicata»); i termini 30+15 sono invariati.
        </p>
        <AlertBox variant="info">
          <p className="leading-relaxed">
            L'art. 275-bis è collocato nel libro II, titolo I, capo III del codice di procedura civile, dedicato al procedimento davanti al tribunale: si applica quindi al <strong>primo grado di giudizio</strong>, sia in composizione collegiale che monocratica. La disciplina della decisione in appello è invece autonoma (artt. 350-bis e 352 c.p.c.).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          8. Computo termini art. 155
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="computo-termini" icon={Clock} title="Computo dei termini ex art. 155 c.p.c." subtitle="Le regole generali: dies a quo, festivi, sabato" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La disciplina generale del <strong>computo dei termini processuali</strong> civili è contenuta nell'<InlineNormLink text="art. 155 c.p.c." url={URLS.art155} />, che si applica a tutti i termini per il deposito delle memorie, indipendentemente dal regime processuale di riferimento (vecchio rito o Cartabia). Le regole codificate dall'articolo sono sei commi precisi che il professionista deve conoscere per non incorrere in errori di calcolo.
        </p>
        <LegalTable
          headers={["Comma", "Disposizione"]}
          rows={tabellaArt155}
        />
        <NormativaQuote url={URLS.art155}>
          Art. 155 c.p.c.: «1. Nel computo dei termini a giorni o ad ore, si escludono il giorno o l'ora iniziali. 2. Per il computo dei termini a mesi o ad anni, si osserva il calendario comune. 3. I giorni festivi si computano nel termine. 4. Se il giorno di scadenza è festivo, la scadenza è prorogata di diritto al primo giorno seguente non festivo. 5. La proroga prevista dal quarto comma si applica altresì ai termini per il compimento degli atti processuali svolti fuori dell'udienza che scadono nella giornata del sabato. 6. Resta fermo il regolare svolgimento delle udienze e di ogni altra attività giudiziaria, anche svolta da ausiliari, nella giornata del sabato, che ad ogni effetto è considerata lavorativa.»
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          I commi 5 e 6 sono stati aggiunti dalla L. 28 dicembre 2005, n. 263 e sono in vigore dal 1° marzo 2006. In base all'art. 58, c. 3, della L. 18 giugno 2009, n. 69, le disposizioni si applicano anche ai giudizi pendenti alla data del 1° marzo 2006. La regola fondamentale è il principio <em>dies a quo non computatur</em>: il giorno iniziale (data dell'udienza, della rimessione, della notifica) non si conta; il computo parte dal giorno immediatamente successivo. I giorni festivi intermedi (domeniche, sabati, festività nazionali) si computano sempre nel termine: non vanno mai esclusi dal conteggio. La proroga per sabato e festivi opera esclusivamente quando la scadenza finale cade in giorno festivo o di sabato.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          9. Sabato e termini plurimi
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="sabato-plurimi" icon={Calculator} title="Il sabato e i termini plurimi consequenziali" subtitle="Cass. 13201/2006 e modalità prudenziale vs Cassazione" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Una delle questioni più tecniche e potenzialmente insidiose riguarda il calcolo dei <strong>termini plurimi consequenziali</strong>, come il triplo termine ex art. 183, c. 6, o la sequenza comparse-repliche ex art. 190 c.p.c. Quando il termine intermedio cade in giorno festivo o di sabato, come si calcola il dies a quo del termine successivo? La giurisprudenza di legittimità ha fornito una risposta chiara, ma nella prassi forense sono emerse due modalità distinte di calcolo.
        </p>
        <p className="text-base leading-relaxed">
          La Cassazione, con le sentenze <strong>n. 13201 del 5 giugno 2006</strong> e <strong>n. 10741 del 3 novembre 1997</strong>, ha affermato il principio per cui, in presenza di termini plurimi, quando un termine intermedio cade in un giorno festivo o di sabato e viene quindi prorogato ex art. 155, commi 4 e 5, c.p.c., <strong>il dies a quo del termine successivo decorre dalla scadenza posticipata del termine precedente</strong>. Esempio pratico: se il primo termine di 30 giorni scade di sabato 13 marzo e viene prorogato a lunedì 15 marzo, il successivo termine di 30 giorni inizia a decorrere dal 15 marzo, non dal 13 marzo. Questa è la <strong>modalità Cassazione</strong> (o «non prudenziale»).
        </p>
        <AlertBox variant="info" title="Due modalità di calcolo emerse nella prassi">
          <div className="space-y-2 leading-relaxed">
            <p>
              <strong>1) Modalità Cassazione 13201/2006</strong> (orientamento prevalente): il dies a quo del termine successivo decorre dalla scadenza <strong>posticipata</strong> del termine precedente. Massima espansione dei termini per la difesa, conforme alla giurisprudenza di legittimità.
            </p>
            <p>
              <strong>2) Modalità prudenziale</strong>: il dies a quo del termine successivo decorre dal termine precedente <strong>calcolato senza</strong> applicare i commi 4 e 5 dell'art. 155 c.p.c. È un'interpretazione letterale e cautelativa, adottata da alcuni professionisti per evitare contestazioni.
            </p>
          </div>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Per i <strong>termini a ritroso</strong> (memorie integrative ex art. 171-ter, note e conclusionali ex art. 189 e 275-bis), il problema si pone in modo speculare. La proroga in avanti prevista dall'art. 155, comma 5, non si applica letteralmente ai termini a ritroso, perché ciò comporterebbe l'invasione dello spazio temporale dell'udienza. L'<strong>orientamento cautelativo prevalente</strong>, condiviso dai principali strumenti di calcolo professionali, sposta la scadenza al <strong>venerdì precedente</strong> (o al primo giorno non festivo precedente) per evitare di incorrere in decadenze. È la soluzione più sicura per il difensore.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          10. Sospensione feriale
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="sospensione-feriale" icon={CalendarOff} title="Sospensione feriale dei termini (L. 742/1969)" subtitle="1°-31 agosto: la pausa estiva dei termini processuali" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>sospensione feriale dei termini processuali</strong> è disciplinata dall'<InlineNormLink text="art. 1 della L. 7 ottobre 1969, n. 742" url={URLS.L742_1969} />, come modificato dall'art. 16 del <InlineNormLink text="D.L. 12 settembre 2014, n. 132" url={URLS.dl132_2014} />, convertito con modificazioni dalla L. 10 novembre 2014, n. 162. Dal 2015 il periodo di sospensione è ridotto al <strong>mese di agosto</strong> (precedentemente era 1° agosto – 15 settembre): dal 1° al 31 agosto di ciascun anno il decorso dei termini processuali è sospeso di diritto.
        </p>
        <NormativaQuote url={URLS.L742_1969}>
          Art. 1, L. 742/1969 (testo vigente): «Il decorso dei termini processuali relativi alle giurisdizioni ordinarie e a quelle amministrative è sospeso di diritto dal 1° al 31 agosto di ciascun anno e riprende a decorrere dalla fine del periodo di sospensione.»
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La meccanica della sospensione è semplice: se il termine inizia a decorrere <strong>prima del 1° agosto</strong> e non è ancora interamente decorso, il conteggio si arresta il 31 luglio, resta «congelato» per tutto agosto, e riprende dal 1° settembre per i giorni residui. Se il termine inizia a decorrere <strong>durante il periodo feriale</strong>, il decorso parte dal 1° settembre. Se il termine a mesi o anni scade dopo agosto, il mese di agosto resta «neutro» nel conteggio effettivo dei giorni.
        </p>
        <p className="text-base leading-relaxed">
          La sospensione feriale si applica a tutti i termini processuali, <strong>incluse le memorie ex art. 183 c. 6, le comparse 190, le memorie integrative 171-ter, le note 189 e 275-bis</strong>. L'art. 3 della L. 742/1969 esclude tassativamente solo alcune categorie di procedimenti, la cui interpretazione è di stretta interpretazione (Cass. 15643/2014):
        </p>
        <BulletList
          items={[
            "Cause relative agli alimenti",
            "Procedimenti cautelari (anche d'urgenza ex art. 700 c.p.c.)",
            "Procedimenti urgenti in materia di separazione personale dei coniugi e affidamento prole",
            "Procedimenti per ordini di protezione contro gli abusi familiari",
            "Procedimenti di convalida di licenza o sfratto",
            "Procedimenti di opposizione all'esecuzione e agli atti esecutivi",
            "Procedimenti dichiarativi e di revoca del fallimento e relative impugnazioni",
            "Controversie individuali di lavoro e di previdenza/assistenza obbligatorie",
          ]}
        />
        <AlertBox variant="success" title="La sospensione si applica anche ai termini a ritroso">
          <p className="leading-relaxed">
            La giurisprudenza prevalente conferma che la sospensione feriale opera anche per i <strong>termini a ritroso</strong> ex art. 171-ter e 189 c.p.c. La Cassazione (sent. 68/1989) ha stabilito che la sospensione «riguarda tutti i termini processuali senza distinzione tra quelli acceleratori e quelli dilatori». Se la scadenza di un termine a ritroso cadrebbe in agosto, slitta in avanti in modo che la parte conservi il pieno godimento dei 40/20/10 (o 60/30/15) giorni utili (cfr. Trib. Milano sez. impresa ord. 10/10/2023; Trib. Roma sez. XIII ord. 04/09/2023; Trib. Venezia ord. 12/09/2023; CA Venezia Rel. 2025).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          11. Decorrenza
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="decorrenza" icon={Clock} title="Decorrenza e dies a quo" subtitle="Quando partono i termini, in particolare con provvedimento fuori udienza" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La determinazione esatta del <strong>dies a quo</strong> è uno snodo critico per il calcolo dei termini delle memorie. Le regole variano a seconda del regime processuale e della modalità con cui il giudice provvede.
        </p>
        <p className="text-base leading-relaxed">
          Nel <strong>vecchio rito</strong> (art. 183 c. 6 c.p.c.), il dies a quo coincide con la data dell'<strong>udienza di prima comparizione e trattazione</strong>. Quando il giudice provvede fuori udienza con ordinanza istruttoria, l'orientamento prevalente in giurisprudenza ritiene che i termini decorrano dalla <strong>comunicazione di cancelleria</strong> dell'ordinanza alle parti, ai sensi dell'art. 134 c.p.c. Questo principio garantisce alle parti la piena cognizione del provvedimento prima dell'avvio dei termini perentori.
        </p>
        <p className="text-base leading-relaxed">
          Nel rito <strong>Cartabia</strong> (art. 171-ter c.p.c.), i termini si calcolano a ritroso dalla data dell'udienza fissata in citazione o, se modificata, dall'udienza fissata dal giudice istruttore ex art. 171-bis, c. 3. Il <strong>D.Lgs. correttivo 164/2024</strong> ha aggiunto il comma 5 all'art. 171-bis, risolvendo definitivamente la questione della decorrenza:
        </p>
        <NormativaQuote url={URLS.art171bis}>
          Art. 171-bis, c. 5, c.p.c. (testo introdotto dal D.Lgs. 164/2024): «I termini di cui all'articolo 171-ter iniziano a decorrere quando è pronunciato il decreto previsto dal terzo comma e si computano rispetto all'udienza fissata nell'atto di citazione o a quella fissata dal giudice istruttore.»
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La precisazione era necessaria perché, sotto la sola Riforma Cartabia, era controverso se i termini decorressero ex lege dalla data di citazione anche in mancanza del decreto di conferma o spostamento. Il Tribunale di Bologna, con sentenza del 20 marzo 2024, aveva propeso per la decorrenza automatica. Oggi, dopo il correttivo, è chiaro che è il <strong>decreto ex art. 171-bis, c. 3</strong> a fare partire il calcolo, mentre il riferimento temporale (la data dell'udienza) resta invariato. Il decreto, da emanare entro 15 giorni dalla scadenza del termine per la costituzione del convenuto (70 gg prima dell'udienza), conferma o modifica la data dell'udienza, e da quel momento decorrono i 40/20/10 giorni a ritroso.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          12. Tardività e rimessione
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="tardivita" icon={AlertTriangle} title="Deposito tardivo, decadenza e rimessione in termini" subtitle="Cosa succede se si sbaglia il calcolo e quando si può rimediare" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il mancato rispetto dei termini perentori per il deposito delle memorie comporta conseguenze processuali significative e, di regola, irreversibili. Le memorie ex art. 183, c. 6, c.p.c. e le memorie integrative ex art. 171-ter c.p.c. depositate tardivamente devono reputarsi <strong>inammissibili</strong>: le argomentazioni in esse contenute non possono essere prese in considerazione dal giudice, come ribadito dalla giurisprudenza e dalla dottrina prevalente. Le comparse conclusionali ex art. 190 e le note ex art. 189 sono parimenti soggette al regime della decadenza per inammissibilità.
        </p>
        <AlertBox variant="warning" title="Decadenza irreversibile dei termini perentori">
          <p className="leading-relaxed">
            La violazione di un termine perentorio comporta la <strong>decadenza</strong> dal potere di compiere l'atto (art. 152 c.p.c.). Non esistono sanatorie: il giudice non può concedere proroghe né sanare la decadenza, salvo il rimedio eccezionale della rimessione in termini ex art. 153, c. 2, c.p.c.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          L'unico rimedio è la <strong>rimessione in termini</strong>, disciplinata dall'<InlineNormLink text="art. 153, c. 2, c.p.c." url={URLS.art153} />: la parte decaduta da un termine perentorio può chiedere al giudice di essere rimessa in termini se prova di essere incorsa nella decadenza per <strong>causa ad essa non imputabile</strong>. La giurisprudenza qualifica come «causa non imputabile» i casi di forza maggiore, di errore della cancelleria, di malfunzionamento accertato del PCT o del sistema giustizia digitale, di gravi impedimenti personali documentabili (ricovero ospedaliero, eventi straordinari). L'istanza deve essere proposta entro un termine ragionevole (la giurisprudenza indica circa 30 giorni dalla cessazione dell'impedimento) e la causa non imputabile deve essere provata con rigore.
        </p>
        <NormativaQuote url={URLS.art153}>
          Art. 153, c. 2, c.p.c.: «La parte che dimostra di essere incorsa in decadenze per causa ad essa non imputabile può chiedere al giudice di essere rimessa in termini.»
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La Corte di Cassazione, con sentenza n. 27449/2015 e in numerose successive pronunce, ha chiarito che l'<strong>errore di calcolo del termine da parte dell'avvocato</strong> non costituisce causa non imputabile alla parte, poiché il professionista è tenuto a conoscere le regole di computo dei termini processuali. La rimessione in termini resta quindi riservata a casi di reale impossibilità materiale di osservare il termine, derivante da fatti esterni alla sfera di controllo della parte e del suo difensore.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          13. Poteri del giudice
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="poteri-giudice" icon={Scale} title="Riducibilità dei termini: cosa può fare il giudice" subtitle="Termini fissi, massimi e poteri discrezionali" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Non tutti i termini per il deposito delle memorie possono essere modificati dal giudice. La disciplina varia significativamente a seconda dell'articolo applicabile e del regime processuale.
        </p>
        <LegalTable
          headers={["Articolo", "Tipo termini", "Riducibili dal giudice?"]}
          rows={tabellaRiducibilitaTermini}
        />
        <p className="text-base leading-relaxed">
          Il quadro evidenzia tre logiche normative diverse. I termini del <strong>vecchio art. 183, c. 6</strong>, dipendono dalla scelta del giudice di concederli o meno: una volta concessi, però, devono rispettare la sequenza 30+30+20. I termini del <strong>vecchio art. 190</strong>, c. 2, sono riducibili dal giudice istruttore fino a un minimo di 20 giorni per le comparse conclusionali. I termini <strong>Cartabia ex art. 171-ter</strong> sono fissi e non riducibili: il giudice può solo spostare l'udienza, con rideterminazione automatica delle scadenze a ritroso. I termini <strong>Cartabia ex art. 189 e 275-bis</strong> sono massimi («non superiore a») e quindi riducibili dal giudice nei limiti del diritto di difesa.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          14. Tabella riepilogo
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="tabella-riepilogo" icon={ListChecks} title="Tabella riepilogativa: vecchio rito vs Cartabia" subtitle="Confronto sintetico tra i due regimi" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La tabella che segue riassume in un colpo d'occhio le principali differenze tra il regime ante-Cartabia (procedimenti instaurati prima del 28/02/2023) e il regime post-Cartabia (procedimenti instaurati dal 28/02/2023). Le differenze più rilevanti riguardano l'inversione della logica temporale (da «in avanti» a «a ritroso»), l'automatismo della concessione dei termini delle memorie integrative e la riducibilità delle scadenze.
        </p>
        <LegalTable
          headers={["Atto / aspetto", "Vecchio rito", "Cartabia", "Differenza chiave"]}
          rows={tabellaConfrontoRegimi}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Risposte sintetiche e citate alle domande più comuni" />
      <FAQ items={faqData} />

      {/* ═══════════════════════════════════════════════════════════
          Fonti e Riferimenti
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="fonti-riferimenti" icon={Link2} title="Fonti e Riferimenti" subtitle="Documenti istituzionali e dottrinali utilizzati per questa pagina" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Tutte le informazioni di questa pagina sono tratte da fonti istituzionali e dalla migliore dottrina forense. Di seguito i principali riferimenti consultabili online:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Normattiva</strong> —{" "}
            <a href={URLS.art183} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Art. 183 c.p.c.</a>,{" "}
            <a href={URLS.art190} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 190 c.p.c.</a>,{" "}
            <a href={URLS.art171bis} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 171-bis c.p.c.</a>,{" "}
            <a href={URLS.art171ter} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 171-ter c.p.c.</a>,{" "}
            <a href={URLS.art189} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 189 c.p.c.</a>,{" "}
            <a href={URLS.art275bis} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 275-bis c.p.c.</a>,{" "}
            <a href={URLS.art155} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 155 c.p.c.</a>,{" "}
            <a href={URLS.art153} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 153 c.p.c.</a>
          </li>
          <li>
            <strong>D.Lgs. 10/10/2022, n. 149 (Riforma Cartabia)</strong> —{" "}
            <a href={URLS.dlgs149_2022} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">testo vigente su Normattiva</a>
          </li>
          <li>
            <strong>D.Lgs. 31/10/2024, n. 164 (Correttivo Cartabia)</strong> —{" "}
            <a href={URLS.dlgs164_2024} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">testo vigente su Normattiva</a>
          </li>
          <li>
            <strong>L. 7/10/1969, n. 742 (Sospensione feriale)</strong> —{" "}
            <a href={URLS.L742_1969} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">testo vigente su Normattiva</a>
          </li>
          <li>
            <strong>D.L. 12/09/2014, n. 132 conv. L. 162/2014</strong> —{" "}
            <a href={URLS.dl132_2014} target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">testo vigente</a>
          </li>
          <li>
            <strong>Cassazione Civile</strong> — Cass. ord. 17685/2022 (PDF su{" "}
            <a href="https://news.avvocatoandreani.it/public/doc/blog/cassazione/Cassazione-civile-ordinanza-17685-2022.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">avvocatoandreani.it</a>); Cass. 13201/2006 e Cass. 10741/1997 sul calcolo dei termini plurimi consequenziali
          </li>
          <li>
            <strong>Vademecum forensi sulla Riforma Cartabia</strong> —{" "}
            <a href="https://www.ordineavvocatiasti.it/wp-content/uploads/PROCEDIMENTO-COGNIZIONE-RIFORMA-CARTABIA.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Ordine Avvocati Asti</a>,{" "}
            <a href="https://www.ordineavvocatitorino.it/sites/default/files/documents/News/news2023/ALL%205%20vademecum%20riforma%20cartabia.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Ordine Avvocati Torino</a>
          </li>
          <li>
            <strong>Brocardi.it</strong> —{" "}
            <a href="https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-ii/sezione-ii/art183.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">Art. 183 c.p.c.</a>,{" "}
            <a href="https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-i/sezione-i/art171ter.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 171-ter c.p.c.</a>,{" "}
            <a href="https://www.brocardi.it/codice-di-procedura-civile/libro-secondo/titolo-i/capo-iii/art275bis.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">art. 275-bis c.p.c.</a>
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          Normativa
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" subtitle="Tutti i riferimenti normativi citati nella pagina" />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}
