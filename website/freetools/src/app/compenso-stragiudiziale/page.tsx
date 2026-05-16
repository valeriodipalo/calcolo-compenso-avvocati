import {
  Scale,
  BookOpen,
  HelpCircle,
  Calculator,
  History,
  Table as TableIcon,
  GitCompare,
  Sigma,
  Percent,
  Target,
  ShieldQuestion,
  ArrowUpDown,
  Receipt,
  ListChecks,
  Layers,
  Briefcase,
  ArrowRightLeft,
  Coins,
  FileSignature,
  AlertTriangle,
  Lightbulb,
  ScrollText,
} from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import { CircolariTable } from "@/components/shared/CircolariTable";
import Calcolatore from "@/components/compenso-stragiudiziale/Calcolatore";
import {
  sections,
  normativaRiferimento,
  circolariMinisteriali,
  SCAGLIONI_DM_147_2022,
  SCAGLIONI_DM_55_2014_STORICI,
  SCAGLIONI_PERCENTUALI,
  TIPI_ATTIVITA,
  ESEMPI_COMPENSO,
  ERRORI_COMUNI,
} from "@/data/compenso-stragiudiziale/compensoStragiudizialeData";
import { faqData } from "@/data/compenso-stragiudiziale/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Compenso Avvocato Stragiudiziale 2026 | D.M. 147/2022",
  description:
    "Calcola il compenso dell'avvocato per attività stragiudiziale: Tabella 25 D.M. 147/2022, variazioni ±50%, spese generali 15%, CPA, IVA, ritenuta.",
  alternates: {
    canonical: "/compenso-stragiudiziale",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/compenso-stragiudiziale",
    title: "Compenso Avvocato Stragiudiziale 2026 | D.M. 147/2022",
    description:
      "Calcola il compenso dell'avvocato per attività stragiudiziale: Tabella 25 D.M. 147/2022, variazioni ±50%, spese generali 15%, CPA, IVA, ritenuta.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Compenso Avvocato Stragiudiziale 2026 — Tabella 25 D.M. 147/2022",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compenso Avvocato Stragiudiziale 2026 | D.M. 147/2022",
    description:
      "Calcolatore compenso stragiudiziale aggiornato: Tab. 25 D.M. 147/2022, variazioni ±50%, spese generali, CPA, IVA, ritenuta.",
  },
};

const toolConfig: ToolConfig = {
  slug: "compenso-stragiudiziale",
  title: "Calcolo Compenso Avvocato Stragiudiziale 2026",
  shortTitle: "Compenso Stragiudiziale",
  icon: Scale,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt:
    "Calcolo Compenso Avvocato Stragiudiziale 2026 — Tabella 25 D.M. 147/2022",
  heroEyebrow: "Calcolatore e guida completa ai parametri forensi",
  heroTitle: "Calcolo Compenso Avvocato Stragiudiziale",
  heroDescription:
    "Calcola il compenso per l'attività stragiudiziale dell'avvocato con i parametri D.M. 55/2014 aggiornati dal D.M. 147/2022. Tabella 25 completa, variazioni ±50%, spese generali 15%, CPA 4%, IVA 22% e ritenuta d'acconto 20%.",
  heroReference: "D.M. 10 marzo 2014 n. 55 — D.M. 13 agosto 2022 n. 147 — L. 247/2012",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Tabelle aggiornate al D.M. 147/2022 (vigente dal 23 ottobre 2022). Tabella storica D.M. 55/2014 inclusa per confronto.",
  ],
  sources: [
    {
      label: "D.M. 55/2014 (Normattiva)",
      url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55",
    },
    {
      label: "D.M. 147/2022 (Normattiva)",
      url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147",
    },
    {
      label: "L. 247/2012 — Ordinamento forense",
      url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247",
    },
    {
      label: "Consiglio Nazionale Forense — Parametri",
      url: "https://www.consiglionazionaleforense.it/parametri",
    },
  ],
};

const tabellaVigenteRows = SCAGLIONI_DM_147_2022.map((s) => [
  s.label,
  s.minimo,
  s.medio,
  s.massimo,
]);

const tabellaStoricaRows = SCAGLIONI_DM_55_2014_STORICI.map((s) => [
  s.label,
  s.minimo,
  s.medio,
  s.massimo,
]);

const tabellaConfrontoRows = SCAGLIONI_DM_147_2022.map((s, i) => {
  const storico = SCAGLIONI_DM_55_2014_STORICI[i];
  const delta = s.medio - storico.medio;
  const deltaPerc = (delta / storico.medio) * 100;
  return [
    s.label,
    storico.medio,
    s.medio,
    `+${deltaPerc.toFixed(1)}%`,
  ];
});

const tabellaPercentualiRows = SCAGLIONI_PERCENTUALI.map((s) => [
  s.label,
  `${s.percentuale.toString().replace(".", ",")}%`,
]);

export default function CompensoStragiudizialePage() {
  return (
    <ToolLayout config={toolConfig}>
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Compenso Avvocato Stragiudiziale 2026 — Parametri D.M. 147/2022",
          description:
            "Guida completa al calcolo del compenso dell'avvocato per attività stragiudiziale. Tabella 25 D.M. 147/2022, variazioni, spese generali, CPA, IVA, ritenuta, esempi pratici.",
          path: "/compenso-stragiudiziale",
          datePublished: "2026-05-16",
          dateModified: "2026-05-16",
          image: HERO_IMG,
          sections: sections.map((s) => s.label),
          keywords:
            "compenso avvocato stragiudiziale, parametri stragiudiziali, D.M. 147/2022, tabella 25, tariffe forensi stragiudiziale, calcolo compenso avvocato, parcella avvocato stragiudiziale",
        })}
      />
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Compenso Avvocato Stragiudiziale",
          description:
            "Calcolatore online del compenso dell'avvocato per attività stragiudiziale. Modalità tabellare e percentuale, variazioni ±50%, spese generali, CPA, IVA, ritenuta.",
          path: "/compenso-stragiudiziale",
          applicationCategory: "LegalService",
          featureList: [
            "Tabella 25 D.M. 147/2022 (vigente dal 23/10/2022)",
            "Tabella storica D.M. 55/2014 per confronto",
            "Modalità tabellare e percentuale",
            "Variazioni ±50% del parametro medio (art. 19)",
            "Ulteriore valutazione soggettiva 0-50%",
            "Spese generali 15% (art. 2)",
            "Spese imponibili ed esenti distinte",
            "Accessori fiscali: CPA 4%, IVA 22%, ritenuta 20%",
            "Valori indeterminabili (art. 21 c. 7)",
            "Sezioni II e III: percentuali per valori oltre € 520.000",
          ],
        })}
      />

      {/* Calcolatore */}
      <Calcolatore />

      {/* Cos'è il compenso stragiudiziale */}
      <SectionTitle
        id="cose-compenso-stragiudiziale"
        icon={BookOpen}
        title="Cos'è il compenso stragiudiziale"
        subtitle="Definizione, ambito e funzione dei parametri forensi"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il compenso stragiudiziale è la remunerazione che spetta all’avvocato per le
          prestazioni professionali rese fuori dal processo: pareri scritti, consulenze,
          trattative, transazioni, redazione di contratti, assistenza in procedure di
          mediazione e negoziazione assistita, recupero crediti in via amichevole,
          assistenza in procedure concorsuali stragiudiziali (piani attestati, accordi di
          ristrutturazione, composizione negoziata). A differenza del compenso giudiziale
          — che si articola per fasi processuali — il compenso stragiudiziale è calcolato
          in misura unica sulla base del valore dell’affare, secondo la Tabella 25
          allegata al{" "}
          <InlineNormLink
            text="D.M. 10 marzo 2014 n. 55"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />
          , come modificato dal{" "}
          <InlineNormLink
            text="D.M. 13 agosto 2022 n. 147"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
          />
          .
        </p>
        <p className="text-base leading-relaxed">
          I parametri ministeriali non costituiscono tariffe inderogabili: dal{" "}
          <InlineNormLink
            text="D.L. 1/2012"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-01-24;1"
          />{" "}
          le tariffe forensi sono state abolite e l’avvocato può pattuire liberamente
          il proprio compenso con il cliente, anche in misura forfettaria, percentuale o
          oraria. I parametri operano quindi in via sussidiaria: si applicano in mancanza
          di accordo scritto o in sede di liquidazione giudiziale del compenso quando il
          giudice deve quantificare l’onorario dovuto. Il fondamento normativo è l’
          <InlineNormLink
            text="art. 13 c. 6 L. 247/2012"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247~art13"
          />{" "}
          (nuovo ordinamento forense).
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art1">
          Art. 1, c. 1 D.M. 55/2014 — Ambito di applicazione: «Il presente regolamento
          disciplina, in attuazione dell’art. 13, comma 6, della L. 31 dicembre 2012,
          n. 247, i parametri dei compensi all’avvocato quando all’atto
          dell’incarico o successivamente il compenso non sia stato determinato in
          forma scritta, in ogni caso di mancata determinazione consensuale degli stessi,
          comprese le ipotesi di liquidazione nonché di prestazione nell’interesse di
          terzi o prestazioni officiose previste dalla legge […]».
        </NormativaQuote>
      </div>

      {/* Evoluzione normativa */}
      <SectionTitle
        id="evoluzione-storica"
        icon={History}
        title="Evoluzione normativa: dalle tariffe del 2004 al D.M. 147/2022"
        subtitle="Quattro decenni di liberalizzazione dell'onorario forense"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La disciplina del compenso stragiudiziale dell’avvocato è il risultato di
          un percorso di progressiva liberalizzazione che attraversa quattro tappe
          fondamentali. Fino al 2012, gli onorari erano regolati dal D.M. 8 aprile 2004,
          che imponeva minimi inderogabili e una struttura tariffaria rigida. La svolta
          arriva con il{" "}
          <InlineNormLink
            text="D.L. 1/2012"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-01-24;1"
          />{" "}
          (decreto liberalizzazioni), convertito nella L. 27/2012, che all’art. 9
          abroga tutte le tariffe professionali in nome della libera concorrenza tra
          professionista e cliente.
        </p>
        <p className="text-base leading-relaxed">
          In attuazione di questa nuova impostazione viene emanato il{" "}
          <InlineNormLink
            text="D.M. 140/2012"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2012-07-20;140"
          />
          , primo regolamento dei parametri per la liquidazione giudiziale dei compensi.
          Si tratta però di un decreto transitorio, costruito per un insieme eterogeneo di
          professioni, con strutture sintetiche poco adatte alle specificità della
          professione forense. Pochi mesi dopo, la{" "}
          <InlineNormLink
            text="L. 247/2012"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247"
          />{" "}
          (nuovo ordinamento forense) all’art. 13 c. 6 delega il Ministro della
          Giustizia ad emanare un regolamento dedicato. Nasce così il{" "}
          <InlineNormLink
            text="D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />
          , in vigore dal 3 aprile 2014, che introduce un sistema organico di tabelle
          articolate per tipo di giudizio e per scaglioni di valore. Per l’attività
          stragiudiziale l’art. 18 rinvia alla Tabella 25, dedicata alle “
          prestazioni di assistenza stragiudiziale”.
        </p>
        <p className="text-base leading-relaxed">
          Il primo aggiornamento arriva con il{" "}
          <InlineNormLink
            text="D.M. 37/2018"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2018-03-08;37"
          />
          , che ritocca le tabelle senza modifiche strutturali. L’intervento decisivo
          è invece quello del{" "}
          <InlineNormLink
            text="D.M. 147/2022"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2022-08-13;147"
          />
          , in vigore dal 23 ottobre 2022. Secondo la Relazione tecnica del Ministero
          della Giustizia, l’aggiornamento ha riallineato i parametri all’
          inflazione registrata dal 2014, con incrementi medi di circa il 5%, coerenti con
          l’andamento ISTAT dei prezzi al consumo. Sul piano strutturale, il D.M.
          147/2022 ha uniformato a ±50% il margine di variazione dei valori medi (art.
          19), eliminando il precedente aumento fino all’80% e fino al 100% per la
          fase istruttoria.
        </p>
        <AlertBox variant="info" title="Disciplina transitoria">
          <p className="text-sm leading-relaxed">
            L’art. 6 del D.M. 147/2022 (criterio del{" "}
            <em>tempus regit prestationem</em>) stabilisce che i nuovi valori si
            applicano alle prestazioni professionali esaurite dopo il 23 ottobre 2022.
            Per le attività concluse prima si continuano ad applicare i parametri del
            D.M. 55/2014 (eventualmente come modificato dal D.M. 37/2018). Per attività
            in corso a cavallo della data, la prassi maggioritaria applica i nuovi
            parametri se la fase si conclude dopo il 23/10/2022.
          </p>
        </AlertBox>
      </div>

      {/* Tabella 25 D.M. 147/2022 */}
      <SectionTitle
        id="tabella-147-2022"
        icon={TableIcon}
        title="Tabella 25 — D.M. 147/2022 (vigente dal 23/10/2022)"
        subtitle="Parametri stragiudiziali per scaglioni fino a € 520.000"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La Tabella 25 D.M. 55/2014, nella versione aggiornata dal D.M. 147/2022,
          contiene i parametri stragiudiziali per scaglioni di valore fino a € 520.000.
          Per ciascuno scaglione è indicato un parametro medio in euro; i valori minimo
          e massimo sono calcolati applicando la variazione di ±50% prevista dall’
          <InlineNormLink
            text="art. 19 D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art19"
          />{" "}
          (post modifica del 2022).
        </p>
        <LegalTable
          headers={["Scaglione", "Minimo (−50%)", "Medio (parametro)", "Massimo (+50%)"]}
          rows={tabellaVigenteRows}
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Per valori superiori a € 520.000 si applicano le percentuali decrescenti delle
          sezioni II e III della Tabella 25 (vedi sezione dedicata).
        </p>
      </div>

      {/* Confronto storico */}
      <SectionTitle
        id="confronto-tabelle"
        icon={GitCompare}
        title="Confronto storico: D.M. 55/2014 vs D.M. 147/2022"
        subtitle="L'incremento medio del 5,2% sui parametri stragiudiziali"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il D.M. 147/2022 ha aggiornato i parametri di Tabella 25 per riallinearli
          all’inflazione registrata tra il 2014 e il 2022. L’incremento medio è
          di circa il 5%, con variazioni leggermente differenziate per scaglione:
        </p>
        <LegalTable
          headers={[
            "Scaglione",
            "Medio D.M. 55/2014",
            "Medio D.M. 147/2022",
            "Variazione",
          ]}
          rows={tabellaConfrontoRows}
        />
        <p className="text-sm leading-relaxed">
          Per le prestazioni professionali esaurite prima del 23 ottobre 2022 si applica
          la tabella storica D.M. 55/2014 originale (qui riportata per riferimento):
        </p>
        <LegalTable
          headers={["Scaglione", "Minimo (−50%)", "Medio (parametro)", "Massimo (+50%)"]}
          rows={tabellaStoricaRows}
        />
      </div>

      {/* Come si calcola */}
      <SectionTitle
        id="come-si-calcola"
        icon={Sigma}
        title="Come si calcola il compenso stragiudiziale"
        subtitle="Formula passo passo dal valore dell'affare al netto a pagare"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo del compenso stragiudiziale segue uno schema standardizzato. Si parte
          dal valore dell’affare, si individua lo scaglione della Tabella 25, si
          sceglie il livello (minimo/medio/massimo) con eventuale variazione ai sensi
          dell’art. 19, si aggiungono spese e accessori. La formula completa è:
        </p>
        <div
          className="bg-[oklch(0.95_0.01_85)] border border-border p-4 font-mono text-sm leading-relaxed text-[oklch(0.30_0.03_250)]"
          style={{ borderRadius: "0.375rem" }}
        >
          Compenso base (parametro)
          <br />
          + Variazione art. 19 (−50% / +50%)
          <br />
          + Ulteriore valutazione (0-50%)
          <br />
          = <strong>Compenso finale</strong>
          <br />
          + Spese generali 15% (art. 2)
          <br />
          + Spese imponibili (trasferta art. 27, perizie, ecc.)
          <br />
          = <strong>Imponibile fiscale</strong>
          <br />
          + CPA Cassa Forense 4% (sull’imponibile fiscale)
          <br />
          = <strong>Imponibile IVA</strong>
          <br />
          + IVA 22% (sull’imponibile IVA)
          <br />
          + Spese esenti (marche da bollo, anticipazioni)
          <br />
          = <strong>Totale fattura</strong>
          <br />− Ritenuta d’acconto 20% (su Compenso + Spese imponibili)
          <br />= <strong>Netto a pagare</strong>
        </div>
        <p className="text-base leading-relaxed">
          La separazione tra spese imponibili ed esenti è fondamentale: le prime
          concorrono all’imponibile IVA e CPA, le seconde no. Il calcolatore in cima
          alla pagina applica automaticamente questo schema, con possibilità di attivare
          o disattivare i singoli accessori.
        </p>
      </div>

      {/* Percentuali oltre 520k */}
      <SectionTitle
        id="percentuali-oltre-520k"
        icon={Percent}
        title="Valori oltre € 520.000 — Sezioni II e III"
        subtitle="Percentuali decrescenti dal 3% allo 0,25%"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per affari di valore superiore a € 520.000 la Tabella 25 abbandona il sistema
          a parametri fissi e introduce percentuali decrescenti applicate al valore
          dell’affare. La sezione II copre valori da € 520.000 a € 12.000.000; la
          sezione III copre valori superiori, fino a oltre € 22.000.000:
        </p>
        <LegalTable
          headers={["Scaglione", "Aliquota"]}
          rows={tabellaPercentualiRows}
        />
        <p className="text-sm leading-relaxed">
          Esempio: per un affare di € 3.000.000 (sezione II, scaglione 2-4 milioni), il
          compenso base è 2,75% × 3.000.000 = € 82.500. Su questo importo si applicano
          variazione, spese generali e accessori secondo lo schema ordinario.
        </p>
        <AlertBox variant="warning" title="Modalità di calcolo: secca o a scaglioni?">
          <p className="text-sm leading-relaxed">
            Il D.M. non chiarisce se la percentuale vada applicata al valore intero
            (“secca”) oppure solo sulla parte eccedente lo scaglione precedente
            (“a scaglioni”). La lettura letterale della norma è quella della
            percentuale “secca” sull’intero valore, ma alcune
            interpretazioni — analogiche al calcolo dei compensi CTU — applicano il
            metodo a scaglioni. In caso di liquidazione giudiziale può essere prudente
            indicare entrambe le ipotesi.
          </p>
        </AlertBox>
      </div>

      {/* Valore dell'affare */}
      <SectionTitle
        id="valore-affare"
        icon={Target}
        title="Determinazione del valore dell'affare (art. 21)"
        subtitle="I 7 commi che governano la scelta dello scaglione"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’art. 21 del D.M. 55/2014 stabilisce in 7 commi come determinare il
          valore dell’affare ai fini stragiudiziali. La regola base è il rinvio al
          codice di procedura civile, con criteri specifici per le tipologie di affari
          più frequenti:
        </p>
        <BulletList
          items={[
            "Comma 1: il valore si determina secondo il codice di procedura civile; quando manifestamente diverso, si tiene conto del valore effettivo (compresi gli interessi perseguiti dalla parte).",
            "Comma 2: per le procedure concorsuali, il valore e il credito del cliente creditore o l'entita del passivo del cliente debitore.",
            "Comma 3: per successioni, divisioni e liquidazioni, il valore e la quota attribuita al cliente.",
            "Comma 4: per affari amministrativi, si applicano i criteri delle prestazioni giudiziali, tenendo presente l'interesse sostanziale del cliente.",
            "Comma 5: per affari tributari, il valore è quello delle imposte, tasse, contributi e relativi accessori oggetto di contestazione, con il limite di un quinquennio per gli oneri poliennali.",
            "Comma 6: in mancanza di criteri applicabili, l'affare si considera di valore indeterminabile.",
            "Comma 7: gli affari di valore indeterminabile si considerano di regola compresi tra € 26.000 e € 260.000; per affari di particolare importanza, fino a € 520.000.",
          ]}
        />
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art21">
          Art. 21 c. 7 D.M. 55/2014: «Gli affari di valore indeterminabile si considerano
          di regola e a questi fini di valore non inferiore a euro 26.000,00 e non
          superiore a euro 260.000,00, tenuto conto dell’oggetto e della complessità
          dell’affare stesso. Qualora il valore effettivo dell’affare risulti di
          particolare importanza per l’oggetto, per il numero e la complessità delle
          questioni giuridiche trattate, per la rilevanza degli effetti e dei risultati
          utili di qualsiasi natura, anche non patrimoniale, il suo valore si considera di
          regola e a questi fini entro lo scaglione fino a euro 520.000,00».
        </NormativaQuote>
      </div>

      {/* Valore indeterminabile */}
      <SectionTitle
        id="valore-indeterminabile"
        icon={ShieldQuestion}
        title="Valore indeterminabile: scaglioni e prassi"
        subtitle="Tre fasce di complessità più la “particolare importanza”"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il valore indeterminabile è una delle aree più discusse dell’applicazione
          dei parametri stragiudiziali. Le Sezioni Unite della Cassazione, con la{" "}
          <strong>sentenza n. 19427/2018</strong>, hanno chiarito che lo scaglione di
          riferimento è quello indicato dall’art. 21 c. 7 (€ 26.000-€ 260.000), salvo
          la “particolare importanza” che giustifica lo scaglione fino a €
          520.000. Nella prassi si articolano tre sotto-fasce per gradare la complessità:
        </p>
        <BulletList
          items={[
            "Complessità bassa: valore convenzionale € 50.000 (scaglione € 26.000-€ 52.000) — affari di routine, ricorrenti.",
            "Complessità media: valore convenzionale € 150.000 (media tra le due fasce) — affari di media complessità con questioni giuridiche standardizzate.",
            "Complessità alta: valore convenzionale € 250.000 (scaglione € 52.000-€ 260.000) — affari complessi con questioni giuridiche peculiari, lunga durata, rilevanti effetti.",
            "Particolare importanza: scaglione fino a € 520.000 — riservato a casi straordinari per numero, complessità delle questioni o rilevanza degli effetti, anche non patrimoniali.",
          ]}
        />
        <AlertBox variant="info" title="Onere di motivazione">
          <p className="text-sm leading-relaxed">
            La scelta della sotto-fascia richiede una motivazione specifica nella parcella
            o nel provvedimento di liquidazione giudiziale. Non basta dichiarare
            l’indeterminabilità: occorre indicare gli elementi che giustificano la
            collocazione in una specifica fascia di valore.
          </p>
        </AlertBox>
      </div>

      {/* Aumenti e riduzioni */}
      <SectionTitle
        id="aumenti-riduzioni"
        icon={ArrowUpDown}
        title="Aumenti e riduzioni del compenso (art. 19)"
        subtitle="Il margine uniforme ±50% post D.M. 147/2022"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’art. 19 del D.M. 55/2014 disciplina i margini di variazione del
          parametro medio. Dopo le modifiche del D.M. 147/2022, la variazione è uniforme
          fino a ±50% del valore medio. La <strong>riduzione</strong> si applica per
          attività di limitata complessità, brevità, ripetitività o quando la pratica si
          risolve rapidamente. L’<strong>aumento</strong> si applica per attività
          complesse, di lunga durata, con plurime questioni giuridiche, di particolare
          rilevanza patrimoniale o sociale, o che richiedono competenze specialistiche.
        </p>
        <AlertBox variant="warning" title="Attenzione: il +80% non è più applicabile">
          <p className="text-sm leading-relaxed">
            Molte calcolatrici online e siti di settore continuano a riportare il vecchio
            margine di -50%/+80% (con punte del +100% per la fase istruttoria) previsto
            dal D.M. 55/2014 originale. Dal <strong>23 ottobre 2022</strong> il margine è
            stato uniformato a ±50% dal D.M. 147/2022. Applicare oggi un aumento del 70%
            o 80% espone a contestazioni e a riduzioni in sede di liquidazione
            giudiziale.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Oltre alla variazione “ordinaria”, è prevista una{" "}
          <em>ulteriore valutazione soggettiva</em> per esprimere in forma percentuale la
          valutazione discrezionale dell’attività, sempre entro i limiti del 50%.
          Questa modalità di incremento si applica tipicamente su un compenso di
          liquidazione medio e si somma alle eventuali variazioni base.
        </p>
      </div>

      {/* Spese generali */}
      <SectionTitle
        id="spese-generali"
        icon={Receipt}
        title="Spese generali forfettarie 15% (art. 2)"
        subtitle="Sempre dovute, anche con compenso pattuito"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le spese generali forfettarie sono un’integrazione automatica del compenso
          a copertura forfettaria dei costi di studio non documentati (utenze, materiale
          di consumo, software, segreteria, ecc.). L’art. 2 del D.M. 55/2014 le
          fissa nella misura fissa del <strong>15% del compenso spettante</strong>,
          dovute anche quando il compenso è stato concordato con il cliente in via
          convenzionale.
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art2">
          Art. 2 D.M. 55/2014 — Compenso e spese: «Oltre al compenso e al rimborso delle
          spese effettivamente sostenute e documentate, all’avvocato è dovuta — in
          ogni caso ed anche in caso di determinazione contrattuale — una somma per
          rimborso spese forfettarie di regola nella misura del 15 per cento del compenso
          totale per la prestazione».
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          Storicamente, le spese generali al 12,5% erano previste dalle tariffe forensi
          del 2004. Furono abolite dal D.M. 140/2012 e reintrodotte dal nuovo
          ordinamento forense (L. 247/2012) e poi confermate dal D.M. 55/2014, con la
          percentuale alzata al 15%. Concorrono all’imponibile fiscale insieme al
          compenso e alle eventuali spese imponibili.
        </p>
      </div>

      {/* Spese esenti e trasferta */}
      <SectionTitle
        id="spese-esenti-trasferta"
        icon={Layers}
        title="Spese esenti, imponibili e di trasferta"
        subtitle="Distinzione fiscale fondamentale per fatturazione corretta"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La parcella dell’avvocato distingue due tipologie di spese, con regime
          fiscale opposto:
        </p>
        <BulletList
          items={[
            "Spese imponibili: spese sostenute dall'avvocato nell'interesse del cliente che concorrono all'imponibile IVA e CPA. Tipico esempio sono le spese di trasferta (art. 27 D.M. 55/2014), le perizie di parte, i costi tecnici (consulenti, traduttori).",
            "Spese esenti (anticipazioni in nome e per conto del cliente): spese che l'avvocato anticipa per documentare un atto del cliente, esenti IVA ex art. 15 c. 1 n. 3 D.P.R. 633/1972. Tipici esempi: marche da bollo, diritti di copia, registrazioni, imposte di registro, diritti UNEP, contributo unificato.",
          ]}
        />
        <p className="text-base leading-relaxed">
          Le spese di trasferta sono disciplinate dall’
          <InlineNormLink
            text="art. 27 D.M. 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55~art27"
          />
          : il rimborso (forfettario o a piè di lista) è soggetto alla stessa disciplina
          fiscale del compenso del professionista e va inserito tra le spese imponibili.
          Le spese esenti, invece, vanno indicate analiticamente in fattura, con
          documentazione allegata, e non concorrono né all’imponibile IVA né a quello
          CPA.
        </p>
        <AlertBox variant="info" title="Errore frequente">
          <p className="text-sm leading-relaxed">
            Inserire spese esenti come imponibili è un errore comune che gonfia
            ingiustificatamente IVA e CPA, e — nei rapporti con sostituti d’imposta —
            anche la ritenuta d’acconto. La separazione netta delle due tipologie è
            obbligatoria.
          </p>
        </AlertBox>
      </div>

      {/* Accessori fiscali */}
      <SectionTitle
        id="accessori-fiscali"
        icon={Coins}
        title="Accessori fiscali: CPA, IVA, ritenuta d'acconto"
        subtitle="Ordine di applicazione e basi imponibili"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Sulla base del compenso lordo (compenso finale + spese generali + spese
          imponibili) si applicano tre voci accessorie con basi imponibili distinte:
        </p>
        <BulletList
          items={[
            "CPA Cassa Forense 4% (art. 11 L. 247/2012): si calcola sull'imponibile fiscale (compenso + spese generali + spese imponibili). Va addebitato in fattura al cliente e concorre alla base imponibile IVA.",
            "IVA 22% (art. 16 D.P.R. 633/1972): si calcola sull'imponibile IVA = imponibile fiscale + CPA. Non si applica alle spese esenti.",
            "Ritenuta d'acconto 20% (art. 25 D.P.R. 600/1973): si applica solo quando il cliente e sostituto d'imposta. Si calcola su compenso + spese imponibili (NON su CPA, NON su IVA, NON su spese esenti).",
          ]}
        />
        <AlertBox variant="warning" title="Ordine di calcolo">
          <p className="text-sm leading-relaxed">
            L’ordine di applicazione è vincolante: prima CPA sull’imponibile
            fiscale, poi IVA sull’imponibile inclusivo del CPA. Invertire l’
            ordine produce un calcolo errato. La ritenuta è invece l’ultima
            operazione, e si calcola su una base ristretta (solo compenso + spese
            imponibili).
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Quando il cliente è un privato consumatore, non si applica la ritenuta
          d’acconto. Quando è un sostituto d’imposta (società, ente pubblico,
          professionista, condominio, ecc.), il sostituto trattiene il 20% e lo versa con
          codice tributo 1040.
        </p>
      </div>

      {/* Tipi di attività */}
      <SectionTitle
        id="tipi-attività"
        icon={Briefcase}
        title="Compenso per tipo di attività stragiudiziale"
        subtitle="Parere, transazione, redazione contratto, mediazione, recupero crediti"
      />
      <div className="space-y-6">
        <p className="text-base leading-relaxed">
          L’attività stragiudiziale dell’avvocato comprende un’ampia gamma
          di prestazioni, ciascuna con le sue peculiarità in termini di valore di
          riferimento e modalità di pattuizione del compenso:
        </p>
        <div className="space-y-3">
          {TIPI_ATTIVITA.map((tipo) => (
            <div
              key={tipo.id}
              className="border border-border p-4 bg-white"
              style={{ borderRadius: "0.375rem" }}
            >
              <h4 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1.5">
                {tipo.nome}
              </h4>
              <p className="text-sm text-[oklch(0.40_0.02_250)] mb-2 leading-relaxed">
                {tipo.descrizione}
              </p>
              <div className="text-xs space-y-1">
                <div>
                  <span className="font-medium text-[oklch(0.45_0.05_250)]">
                    Riferimento:
                  </span>{" "}
                  <span className="text-muted-foreground">{tipo.riferimento}</span>
                </div>
                <div>
                  <span className="font-medium text-[oklch(0.45_0.05_250)]">
                    Note fiscali:
                  </span>{" "}
                  <span className="text-muted-foreground">{tipo.noteFiscali}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stragiudiziale vs giudiziale */}
      <SectionTitle
        id="stragiudiziale-vs-giudiziale"
        icon={ArrowRightLeft}
        title="Compenso stragiudiziale vs giudiziale"
        subtitle="Due tabelle distinte, due logiche di calcolo"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il compenso giudiziale (Tabelle 1-24 del D.M. 55/2014) è articolato per fasi
          processuali (studio, introduttiva, istruttoria, decisionale, esecutiva) e per
          tipologia di autorità giudiziaria (Tribunale, Corte d’Appello, Cassazione,
          giudice di pace, TAR, Consiglio di Stato, commissioni tributarie, ecc.). Il
          compenso stragiudiziale (Tabella 25) è invece unico e si determina sulla base
          del valore dell’affare. Quando un’attività stragiudiziale sfocia in
          giudizio, le due fasi vanno fatturate separatamente: il compenso stragiudiziale
          per la fase pre-processuale e il compenso giudiziale per la fase processuale,
          ciascuno con la propria tabella di riferimento.
        </p>
        <p className="text-base leading-relaxed">
          Esempio: un avvocato avvia una trattativa stragiudiziale con la controparte
          (Tabella 25), che non porta ad accordo, e successivamente intraprende il
          giudizio civile (Tabelle 1-3 per il primo grado). Le due attività generano due
          parcelle distinte: la prima sulla base del valore della controversia oggetto
          della trattativa, la seconda sulla base delle fasi processuali effettivamente
          espletate.
        </p>
      </div>

      {/* Chi paga le spese */}
      <SectionTitle
        id="chi-paga-spese"
        icon={FileSignature}
        title="Spese stragiudiziali: chi paga?"
        subtitle="La giurisprudenza Cass. SS.UU. 24481/2020"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          In via diretta, le spese legali stragiudiziali sono pagate dal cliente che ha
          conferito l’incarico. Tuttavia, le Sezioni Unite della Corte di
          Cassazione, con la <strong>sentenza n. 24481 del 3 novembre 2020</strong>,
          hanno chiarito un punto fondamentale: le spese sostenute dal cliente per
          l’attività stragiudiziale del proprio avvocato costituiscono{" "}
          <strong>danno emergente</strong> recuperabile nel successivo giudizio civile,
          a condizione che siano provate documentalmente, necessarie ai fini della tutela
          del diritto e ragionevoli anche con riferimento ai parametri D.M. 55/2014.
        </p>
        <AlertBox variant="success" title="Cass. SS.UU. 24481/2020 — principio">
          <p className="text-sm leading-relaxed">
            Le spese legali stragiudiziali rientrano nella categoria del danno emergente
            quando rappresentano un costo effettivamente sostenuto dal cliente per
            l’attività del legale durante la fase precontenziosa (es. procedura di
            mediazione, trattativa di rientro per recupero crediti). Il recupero in
            giudizio richiede prova della spesa, della sua necessità e della sua utilità
            ai fini della tutela del diritto.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Il recupero non avviene automaticamente: deve essere espressamente domandato in
          giudizio e supportato da fattura quietanzata. Le spese da semplice consulenza
          preventiva (parere non utile ai fini della causa) non sempre vengono
          riconosciute. La giurisprudenza ha progressivamente affinato i requisiti,
          richiedendo un nesso di strumentalità tra l’attività stragiudiziale e
          l’esito del giudizio.
        </p>
      </div>

      {/* Preventivo obbligatorio */}
      <SectionTitle
        id="preventivo-obbligatorio"
        icon={FileSignature}
        title="Preventivo scritto obbligatorio (L. 124/2017)"
        subtitle="L'obbligo introdotto dalla legge concorrenza"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Dal 2017, l’avvocato è tenuto a consegnare al cliente un preventivo scritto
          al momento del conferimento dell’incarico. L’obbligo è stato
          introdotto dall’
          <InlineNormLink
            text="art. 1 c. 150 L. 124/2017"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-08-04;124"
          />{" "}
          (legge annuale per il mercato e la concorrenza), che ha modificato l’art.
          13 c. 5 della L. 247/2012. Il preventivo deve indicare in modo chiaro:
        </p>
        <BulletList
          items={[
            "L'oggetto dell'incarico e l'attività prevista.",
            "Gli oneri ipotizzabili dal momento del conferimento dell'incarico fino alla conclusione della prestazione.",
            "Le condizioni economiche pattuite (compenso forfettario, orario, percentuale, parametri ministeriali).",
            "L'indicazione del grado di complessità dell'incarico.",
          ]}
        />
        <AlertBox variant="info" title="Conseguenze della mancata consegna">
          <p className="text-sm leading-relaxed">
            La mancata consegna del preventivo scritto non priva l’avvocato del
            diritto al compenso — che sarà comunque determinato secondo i parametri
            ministeriali — ma costituisce illecito disciplinare ai sensi del codice
            deontologico forense. In sede di liquidazione giudiziale, l’assenza di
            preventivo può anche essere valutata negativamente dal giudice.
          </p>
        </AlertBox>
      </div>

      {/* Esempi pratici */}
      <SectionTitle
        id="esempi-pratici"
        icon={Lightbulb}
        title="Esempi pratici di calcolo"
        subtitle="Tre scenari completi dal compenso base al netto a pagare"
      />
      <div className="space-y-4">
        {ESEMPI_COMPENSO.map((esempio, idx) => (
          <div
            key={idx}
            className="border border-border p-5 bg-white"
            style={{ borderRadius: "0.375rem" }}
          >
            <h4 className="text-base font-semibold text-[oklch(0.25_0.04_250)] mb-1.5 font-serif">
              {esempio.titolo}
            </h4>
            <p className="text-sm text-[oklch(0.40_0.02_250)] mb-3 leading-relaxed">
              {esempio.descrizione}
            </p>
            <div
              className="bg-[oklch(0.98_0.005_85)] p-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-mono"
              style={{ borderRadius: "0.25rem" }}
            >
              <div className="text-[oklch(0.50_0.02_250)]">Valore affare:</div>
              <div className="text-right text-[oklch(0.30_0.03_250)]">
                € {esempio.valore.toLocaleString("it-IT")}
              </div>
              <div className="text-[oklch(0.50_0.02_250)]">Scaglione:</div>
              <div className="text-right text-[oklch(0.30_0.03_250)]">
                {esempio.scaglione}
              </div>
              <div className="text-[oklch(0.50_0.02_250)]">Compenso base:</div>
              <div className="text-right text-[oklch(0.30_0.03_250)]">
                € {esempio.compensoBase.toLocaleString("it-IT")}
              </div>
              <div className="text-[oklch(0.50_0.02_250)]">Variazione:</div>
              <div className="text-right text-[oklch(0.30_0.03_250)]">
                {esempio.variazione}
              </div>
              <div className="text-[oklch(0.50_0.02_250)]">Spese generali 15%:</div>
              <div className="text-right text-[oklch(0.30_0.03_250)]">
                € {esempio.speseGenerali.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
              </div>
              <div className="text-[oklch(0.50_0.02_250)]">CPA 4%:</div>
              <div className="text-right text-[oklch(0.30_0.03_250)]">
                € {esempio.cpa.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
              </div>
              <div className="text-[oklch(0.50_0.02_250)]">IVA 22%:</div>
              <div className="text-right text-[oklch(0.30_0.03_250)]">
                € {esempio.iva.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
              </div>
              <div className="col-span-2 border-t border-[oklch(0.90_0.01_85)] mt-1 pt-1" />
              <div className="font-semibold text-[oklch(0.25_0.04_250)]">
                Totale fattura:
              </div>
              <div className="text-right font-semibold text-[oklch(0.25_0.04_250)]">
                € {esempio.totale.toLocaleString("it-IT", { minimumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Errori comuni */}
      <SectionTitle
        id="errori-comuni"
        icon={AlertTriangle}
        title="Errori comuni nella determinazione del compenso"
        subtitle="Otto trappole da evitare"
      />
      <div className="space-y-3">
        {ERRORI_COMUNI.map((errore, idx) => (
          <AlertBox key={idx} variant="warning" title={errore.titolo}>
            <p className="text-sm leading-relaxed">{errore.descrizione}</p>
          </AlertBox>
        ))}
      </div>

      {/* Fonti */}
      <SectionTitle
        id="fonti"
        icon={ListChecks}
        title="Fonti e riferimenti istituzionali"
        subtitle="Documenti ufficiali utilizzati per la redazione di questa pagina"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          Le informazioni presenti in questa pagina sono state verificate sulle seguenti
          fonti istituzionali. Si raccomanda di consultare sempre il testo ufficiale
          aggiornato della normativa prima di applicarla a casi concreti:
        </p>
        <BulletList
          items={[
            "Normattiva.it — testo vigente del D.M. 55/2014 e del D.M. 147/2022 con coordinamenti.",
            "Gazzetta Ufficiale — pubblicazione originale dei decreti (D.M. 55/2014: GU n. 77 del 02/04/2014; D.M. 147/2022: GU n. 236 del 08/10/2022).",
            "Ministero della Giustizia — Relazione tecnica al D.M. 147/2022, che illustra le ragioni dell'aggiornamento (+5% medio, allineamento ISTAT).",
            "Consiglio Nazionale Forense — sezione dedicata ai parametri con linee guida interpretative.",
            "Corte di Cassazione — sentenze SS.UU. 19427/2018 (valore indeterminabile) e 24481/2020 (spese stragiudiziali come danno emergente).",
            "Agenzia delle Entrate — circolari su trattamento fiscale dei compensi professionali (CPA, IVA, ritenuta).",
          ]}
        />
      </div>

      {/* FAQ */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande frequenti (FAQ)"
        subtitle="20 risposte sul compenso stragiudiziale, con fonti normative"
      />
      <FAQ items={faqData} />

      {/* Normativa */}
      <SectionTitle
        id="normativa"
        icon={ScrollText}
        title="Normativa di riferimento"
        subtitle="Decreti, leggi, circolari e pronunce di legittimità"
      />
      <div className="space-y-6">
        <NormativaRefTable items={normativaRiferimento} />
        <CircolariTable items={circolariMinisteriali} />
      </div>
    </ToolLayout>
  );
}
