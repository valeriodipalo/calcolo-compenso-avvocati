import {
  BadgePercent,
  BookOpen,
  HelpCircle,
  Calculator,
  History,
  AlertTriangle,
  Sigma,
  Receipt,
  Percent,
  TrendingUp,
  TrendingDown,
  Tag,
  Layers,
  GitCompare,
  FileSpreadsheet,
  Brain,
  Briefcase,
  Library,
  ExternalLink,
  ArrowRightLeft,
  Hash,
  Equal,
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
import Calcolatore from "@/components/calcolo-percentuale/Calcolatore";
import {
  sections,
  normativaRiferimento,
  conversioniNotevoli,
  aliquoteIva,
  scaglioniIrpef,
  esempiWorked,
  erroriComuni,
  trucchiMentali,
  formuleExcel,
  casiProfessionali,
  fontiAutorevoli,
} from "@/data/calcolo-percentuale/calcoloPercentualeData";
import { faqData } from "@/data/calcolo-percentuale/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Percentuale Online: Formula, Sconto, IVA, Aumento",
  description:
    "Calcolatore percentuale online gratuito: percentuale di un numero, sconto, aumento, variazione, IVA e scorporo, sconti successivi. Formula, esempi e trucchi.",
  alternates: {
    canonical: "/calcolo-percentuale",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-percentuale",
    title: "Calcolo Percentuale Online: Formula, Sconto, IVA, Aumento",
    description:
      "Calcolatore percentuale online gratuito: percentuale di un numero, sconto, aumento, variazione, IVA e scorporo, sconti successivi. Formula, esempi e trucchi.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo percentuale online — calcolatore con 7 modalità",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Percentuale Online | Formula, Sconto, IVA",
    description:
      "Calcolatore percentuale gratuito: 7 modalità (sconto, aumento, variazione, IVA, sconti successivi), formula, trucchi e Excel.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-percentuale",
  title: "Calcolo Percentuale Online",
  shortTitle: "Calcolo Percentuale",
  icon: BadgePercent,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt:
    "Calcolo percentuale online — calcolatore gratuito con 7 modalità (sconto, aumento, IVA, variazione)",
  heroEyebrow: "Calcolatore multi-modalità e guida completa",
  heroTitle: "Calcolo Percentuale Online",
  heroDescription:
    "Calcolatore percentuale gratuito con 7 modalità: percentuale di un numero, sconto, aumento, variazione fra due numeri, percentuale inversa, IVA e sconti successivi. Formula, esempi risolti, trucchi per il calcolo mentale e formule pronte per Excel.",
  heroReference:
    "Treccani · D.P.R. 633/1972 (IVA) · DM 147/2022 (parametri forensi)",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere informativo e didattico. Per applicazioni professionali (fatturazione, fiscalità, contabilità) verifica sempre la normativa vigente o consulta un professionista abilitato.",
    "Dati aggiornati al 2026: aliquote IVA D.P.R. 633/1972, parametri forensi DM 147/2022, scaglioni IRPEF post-riforma 2024.",
  ],
  sources: [
    {
      label: "Treccani — Enciclopedia della Matematica",
      url: "https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/",
    },
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    {
      label: "Agenzia delle Entrate",
      url: "https://www.agenziaentrate.gov.it",
    },
    {
      label: "Microsoft Support — Excel",
      url: "https://support.microsoft.com/it-it/office/calcolare-le-percentuali-6b5506e9-125a-4aba-a638-d6b40e603981",
    },
  ],
};

export default function CalcoloPercentualePage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ── JSON-LD: Article ── */}
      <JsonLd
        data={articleSchema({
          headline:
            "Calcolo Percentuale Online 2026: Calcolatore con 7 Modalità, Formula, Sconto, IVA, Excel",
          description:
            "Guida completa al calcolo percentuale: le 4 formule fondamentali, percentuale di un numero, incidenza, percentuale inversa, variazione, sconto e sconti successivi, IVA italiana (D.P.R. 633/1972), formule pronte per Excel, trucchi per il calcolo mentale, errori comuni e applicazioni professionali (fattura avvocato, margine commerciale, voto scolastico, affluenza).",
          path: "/calcolo-percentuale",
          datePublished: "2026-05-16",
          dateModified: "2026-05-16",
          image: HERO_IMG,
          wordCount: 5200,
          keywords:
            "calcolo percentuale, calcolatore percentuale, calcolo della percentuale, come calcolare la percentuale, percentuale di un numero, sconto percentuale, aumento percentuale, variazione percentuale, IVA scorporo, sconti successivi, percentuale inversa, calcolo percentuale Excel, punti percentuali, margine markup",
          sections: [
            "Calcolatore Percentuale",
            "Cos'è una Percentuale",
            "Etimologia e Storia",
            "Tabella Conversioni Notevoli",
            "Le 4 Formule Fondamentali",
            "Calcolo della Percentuale di un Numero",
            "Quale % è un Numero di un Altro",
            "Trovare il Totale (% Inversa)",
            "Variazione Percentuale",
            "Aumento e Diminuzione",
            "Calcolo dello Sconto",
            "Sconti Successivi (Composti)",
            "Punti Percentuali vs Percentuale Relativa",
            "Calcolo dell'IVA e Scorporo",
            "Casi d'Uso Professionali",
            "Calcolo Percentuale in Excel",
            "Trucchi per il Calcolo Mentale",
            "Errori Comuni da Evitare",
            "Fonti e Riferimenti",
            "FAQ",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* ── JSON-LD: WebApplication ── */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Percentuale Online — 7 modalità",
          description:
            "Calcolatore percentuale online gratuito con 7 modalità: percentuale di un numero, incidenza, percentuale inversa, variazione, aumento/diminuzione, sconto e sconti successivi composti. Formula visibile, calcolo step-by-step e formato italiano (virgola decimale).",
          path: "/calcolo-percentuale",
          applicationCategory: "UtilitiesApplication",
          featureList: [
            "Calcolo percentuale di un numero (X% di N)",
            "Calcolo incidenza percentuale (V su N = ?%)",
            "Calcolo percentuale inversa (V è il p% di → Totale)",
            "Variazione percentuale tra due valori",
            "Aumento e diminuzione percentuale",
            "Calcolo dello sconto con risparmio evidenziato",
            "Sconti successivi composti (sconto reale di due o tre sconti)",
            "Formula matematica visibile e calcolo step-by-step",
            "Formato italiano (virgola decimale, simbolo % attaccato)",
          ],
        })}
      />

      {/* ═══════════════════════════════════════════════════════════
          CALCOLATORE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="calcolatore"
        icon={Calculator}
        title="Calcolatore Percentuale Online"
        subtitle="7 modalità in un unico strumento: percentuale di un numero, sconto, aumento, variazione, IVA, sconti successivi"
      />
      <Calcolatore />

      {/* ═══════════════════════════════════════════════════════════
          COS'È UNA PERCENTUALE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cose-percentuale"
        icon={BookOpen}
        title="Cos'è una Percentuale"
        subtitle="Definizione matematica, simbolo % e differenze con frazione, rapporto e proporzione"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>percentuale</strong> è un modo di esprimere il rapporto fra
          due grandezze omogenee (una <strong>parte</strong> e un{" "}
          <strong>totale</strong>) usando come riferimento il numero{" "}
          <strong>100</strong>. Una percentuale dice quante unità su cento
          rappresenta la parte rispetto al totale: il 45% di una quantità
          significa che la parte sta al totale come 45 sta a 100. Dal punto di
          vista formale, la percentuale è una frazione con denominatore 100,
          accompagnata dal simbolo <span className="font-mono">%</span>.
        </p>

        <p className="text-base leading-relaxed">
          La definizione canonica dell'
          <a
            href="https://www.treccani.it/enciclopedia/percentuale_(Enciclopedia-della-Matematica)/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
          >
            Enciclopedia della Matematica Treccani
          </a>{" "}
          parte da una proporzione fondamentale: indicate la parte con{" "}
          <em>a</em>, il totale con <em>b</em> e la percentuale con <em>n</em>,
          si ha
        </p>

        <div
          className="bg-[oklch(0.97_0.02_85)] border border-[oklch(0.85_0.05_85)] px-4 py-3 font-mono text-base text-[oklch(0.25_0.04_250)]"
          style={{ borderRadius: "0.375rem" }}
        >
          a / b = n / 100 → n = (a / b) × 100
        </div>

        <p className="text-base leading-relaxed">
          Dimensionalmente la percentuale è un <strong>numero puro</strong>{" "}
          (adimensionale), perché nasce dal rapporto fra due grandezze
          omogenee. Operativamente, quando si scrive «X% di Y» si intende
          esattamente il prodotto <span className="font-mono">Y × (X / 100)</span>:
          per esempio, il 32% di 2.000 si calcola come{" "}
          <span className="font-mono">2.000 × 0,32 = 640</span>.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Percentuale, frazione, rapporto e proporzione
        </h3>
        <p className="text-base leading-relaxed">
          Sono tutti modi di esprimere un rapporto fra due quantità, ma con
          ruoli diversi. La <strong>frazione</strong> è la forma «pura» del
          rapporto (3/4); il <strong>numero decimale</strong> è la sua
          rappresentazione decimale (0,75); la <strong>percentuale</strong> è
          la frazione moltiplicata per 100 e accompagnata dal simbolo %
          (75%). Una <strong>proporzione</strong>, in matematica, è
          un'uguaglianza fra due rapporti del tipo <em>a:b = c:d</em>, e il
          calcolo percentuale è proprio un caso particolare di proporzione in
          cui uno dei due rapporti ha denominatore 100.
        </p>

        <p className="text-base leading-relaxed">
          In <strong>statistica</strong> si distingue spesso fra{" "}
          <strong>proporzioni</strong> (rapporti in cui il numeratore è un
          sottoinsieme del denominatore, sempre compresi tra 0 e 1),{" "}
          <strong>tassi</strong> (frequenze in un intervallo temporale, spesso
          riportati per 1.000 o 100.000 abitanti) e <strong>rapporti</strong>{" "}
          veri e propri (numeratore e denominatore disgiunti, come maschi su
          femmine). Il simbolo <span className="font-mono">‰</span> (per mille)
          e <span className="font-mono">‱</span> (per diecimila, «punto base»
          in finanza) sono parenti diretti del simbolo %, con basi di
          riferimento più ampie.
        </p>

        <AlertBox variant="info">
          <p>
            La percentuale è un numero <strong>adimensionale</strong>: somma
            percentuali fra grandezze diverse solo se hanno significato
            comune. «Aliquota IVA + tasso di sconto» non è una somma
            sensata: vanno applicate in sequenza, non aggregate.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          STORIA E ETIMOLOGIA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="storia"
        icon={History}
        title="Etimologia e Storia della Percentuale"
        subtitle="Dal latino «per centum» ai mercanti italiani del Quattrocento"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il termine <strong>percentuale</strong> deriva dal latino tardo{" "}
          <em>per centum</em>, locuzione composta dalla preposizione{" "}
          <em>per</em> e dal numerale <em>centum</em> («cento»), e significa
          letteralmente «per cento». Il{" "}
          <a
            href="https://www.treccani.it/vocabolario/centum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
          >
            Vocabolario Treccani
          </a>{" "}
          registra la voce come aggettivo e sostantivo femminile, con il
          significato di «che si riferisce a cento unità» o di «numeratore di
          una frazione con denominatore 100», esplicitando il legame fra
          linguaggio comune e formalismo matematico.
        </p>

        <p className="text-base leading-relaxed">
          La necessità di ragionare «su cento» nasce dall'esigenza pratica di
          calcolare <strong>interessi</strong>, <strong>tasse</strong>,{" "}
          <strong>tributi</strong> e <strong>sconti</strong> in modo
          proporzionale. Tracce di questo modo di calcolare le ritroviamo già
          nell'antichità romana, dove la tassazione e gli interessi sui
          capitali erano spesso espressi come frazioni con denominatori
          centesimi. La <strong>civiltà mercantile italiana</strong> dei
          secoli XIV e XV — con la nascita della partita doppia, l'attività
          dei banchieri toscani e lombardi e l'espansione del commercio
          mediterraneo — ha trasformato il calcolo percentuale in uno
          strumento sistematico per ricarichi, ribassi, cambi e interessi
          composti.
        </p>

        <p className="text-base leading-relaxed">
          Il <strong>simbolo «%»</strong> nella sua forma attuale si
          consolida fra XVI e XVII secolo, in parallelo con lo sviluppo
          dell'algebra simbolica e della matematica finanziaria moderna.
          Linguisticamente, la radice <em>centum</em> è la stessa che ha dato
          nome al gruppo delle «lingue centum» nella classificazione delle
          lingue indoeuropee — un dettaglio che testimonia l'antichità e
          la diffusione del concetto di «cento» come base di conteggio.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TABELLA CONVERSIONI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="tabella-conversioni"
        icon={ArrowRightLeft}
        title="Tabella delle Conversioni Notevoli"
        subtitle="Percentuali ↔ frazioni ↔ decimali con trucco rapido per il calcolo mentale"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Memorizzare le percentuali più comuni nella loro forma frazionaria e
          decimale rende il calcolo mentale molto più rapido. La tabella
          seguente raccoglie le percentuali notevoli che ricorrono in
          fatturazione, sconti, voti scolastici, IVA, statistica e contabilità
          quotidiana.
        </p>

        <LegalTable
          headers={[
            "Percentuale",
            "Frazione",
            "Decimale",
            "Esempio",
            "Trucco rapido",
          ]}
          rows={conversioniNotevoli.map((c) => [
            c.percentuale,
            c.frazione,
            c.decimale,
            c.esempio,
            c.trucco,
          ])}
        />

        <p className="text-sm text-muted-foreground">
          Suggerimento: ogni volta che ti capita una percentuale «strana»,
          prova a scomporla nelle percentuali notevoli. Il 35% di N, per
          esempio, è 25% + 10% (cioè N/4 + N/10) — molto più semplice da
          calcolare a mente che 35/100.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          LE 4 FORMULE FONDAMENTALI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="formule-base"
        icon={Sigma}
        title="Le 4 Formule Fondamentali del Calcolo Percentuale"
        subtitle="Tutti i problemi percentuali si riconducono a queste quattro situazioni"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          In tutta la pratica professionale, i problemi percentuali si
          riconducono a quattro domande di base, ciascuna risolta da una delle
          formule che derivano dalla proporzione fondamentale{" "}
          <span className="font-mono">Parte : Totale = Percentuale : 100</span>.
          Imparate queste, e saprete risolvere qualsiasi problema percentuale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="border border-[oklch(0.85_0.05_250)] bg-[oklch(0.97_0.015_250)] p-5"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-[oklch(0.45_0.12_250)] font-semibold">
                Formula 1
              </span>
            </div>
            <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Trovare la parte
            </h3>
            <div className="font-mono text-sm text-[oklch(0.25_0.04_250)] bg-white border border-border px-3 py-2 mb-3" style={{ borderRadius: "0.25rem" }}>
              Parte = Totale × (% / 100)
            </div>
            <p className="text-sm leading-relaxed">
              <strong>Esempio:</strong> il 20% di 150 → 150 × 0,20 ={" "}
              <strong className="font-mono">30</strong>.
            </p>
          </div>

          <div
            className="border border-[oklch(0.85_0.05_25)] bg-[oklch(0.97_0.015_25)] p-5"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-[oklch(0.50_0.15_25)] font-semibold">
                Formula 2
              </span>
            </div>
            <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Trovare la percentuale (incidenza)
            </h3>
            <div className="font-mono text-sm text-[oklch(0.25_0.04_250)] bg-white border border-border px-3 py-2 mb-3" style={{ borderRadius: "0.25rem" }}>
              % = (Parte / Totale) × 100
            </div>
            <p className="text-sm leading-relaxed">
              <strong>Esempio:</strong> 15 è che % di 60? → (15 ÷ 60) × 100 ={" "}
              <strong className="font-mono">25%</strong>.
            </p>
          </div>

          <div
            className="border border-[oklch(0.85_0.05_155)] bg-[oklch(0.97_0.015_155)] p-5"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-[oklch(0.40_0.12_155)] font-semibold">
                Formula 3
              </span>
            </div>
            <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Trovare il totale (% inversa)
            </h3>
            <div className="font-mono text-sm text-[oklch(0.25_0.04_250)] bg-white border border-border px-3 py-2 mb-3" style={{ borderRadius: "0.25rem" }}>
              Totale = Parte / (% / 100)
            </div>
            <p className="text-sm leading-relaxed">
              <strong>Esempio:</strong> 30 è il 15% di quanto? → 30 ÷ 0,15 ={" "}
              <strong className="font-mono">200</strong>.
            </p>
          </div>

          <div
            className="border border-[oklch(0.85_0.05_85)] bg-[oklch(0.97_0.015_85)] p-5"
            style={{ borderRadius: "0.5rem" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-[oklch(0.50_0.12_85)] font-semibold">
                Formula 4
              </span>
            </div>
            <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Variazione percentuale
            </h3>
            <div className="font-mono text-sm text-[oklch(0.25_0.04_250)] bg-white border border-border px-3 py-2 mb-3" style={{ borderRadius: "0.25rem" }}>
              Var% = ((Nuovo − Vecchio) / Vecchio) × 100
            </div>
            <p className="text-sm leading-relaxed">
              <strong>Esempio:</strong> da 80 a 92 → ((92 − 80) ÷ 80) × 100 ={" "}
              <strong className="font-mono">+15%</strong>.
            </p>
          </div>
        </div>

        <p className="text-base leading-relaxed mt-4">
          Tutte le altre operazioni percentuali — sconto, aumento,
          diminuzione, scorporo IVA, sconti successivi — sono varianti o
          combinazioni di queste quattro formule. Le sezioni che seguono
          analizzano ciascun caso con esempi worked passo-passo.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CALCOLO PERCENTUALE DI UN NUMERO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="percentuale-numero"
        icon={Percent}
        title="Calcolo della Percentuale di un Numero"
        subtitle="X% di N → Parte = Totale × (% / 100). Il calcolo più comune in assoluto."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Calcolare la percentuale di un numero significa rispondere alla
          domanda «<strong>quanto vale il X% di N?</strong>», che è il
          calcolo più frequente in fatturazione, fiscalità, sconti e tutti i
          contesti in cui si applica un'aliquota a un imponibile. La formula è:
        </p>

        <div
          className="bg-[oklch(0.25_0.04_250)] text-white px-5 py-4 font-mono text-base text-center"
          style={{ borderRadius: "0.5rem" }}
        >
          Parte = Totale × (Percentuale / 100)
        </div>

        <p className="text-base leading-relaxed">
          In pratica, si trasforma la percentuale in un numero decimale
          (dividendola per 100, oppure spostando la virgola di due posizioni a
          sinistra) e si moltiplica per il totale. Esempi numerici:
        </p>

        <LegalTable
          headers={[
            "Problema",
            "Formula applicata",
            "Calcolo",
            "Risultato",
          ]}
          rows={esempiWorked.slice(0, 3).map((e) => [
            e.problema,
            e.formula,
            e.calcolo,
            e.risultato,
          ])}
        />

        <p className="text-base leading-relaxed">
          Il <strong>30% di 50 €</strong> — domanda fra le più ricercate su
          Google — si calcola così: 50 × 0,30 = 15 €. A mente, è ancora più
          rapido: il 10% di 50 è 5; moltiplicato per 3 dà 15. Lo stesso
          ragionamento vale per qualunque «X% di Y» — basta partire dal 10% e
          aggiustare con somme e divisioni.
        </p>

        <AlertBox variant="info" title="Trucco potente: la commutatività">
          <p>
            Per la commutatività della moltiplicazione,{" "}
            <strong>a% di b = b% di a</strong>. Se devi calcolare il 4% di
            75, calcola piuttosto il 75% di 4 = 3 (i tre quarti di 4). Molto
            più rapido!
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          INCIDENZA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="incidenza"
        icon={GitCompare}
        title="Quale Percentuale è un Numero di un Altro"
        subtitle="V su N → % = (Parte / Totale) × 100. Tipico per pesi, quote, voti, affluenze."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>incidenza percentuale</strong> risponde alla domanda
          inversa: dato un valore <em>V</em> rispetto a un totale <em>N</em>,
          quale percentuale rappresenta? È il calcolo tipico quando si vuole
          capire quanto «pesa» una voce sul totale, quanto rappresenta una
          spesa rispetto al budget, oppure convertire un voto in trentesimi in
          percentuale.
        </p>

        <div
          className="bg-[oklch(0.25_0.04_250)] text-white px-5 py-4 font-mono text-base text-center"
          style={{ borderRadius: "0.5rem" }}
        >
          % = (Parte / Totale) × 100
        </div>

        <LegalTable
          headers={[
            "Problema",
            "Formula applicata",
            "Calcolo",
            "Risultato",
          ]}
          rows={esempiWorked.slice(3, 6).map((e) => [
            e.problema,
            e.formula,
            e.calcolo,
            e.risultato,
          ])}
        />

        <p className="text-base leading-relaxed">
          Esempi tipici tratti dalle ricerche più frequenti: la{" "}
          <strong>percentuale di 75 su 300</strong> è il 25% (un quarto), la{" "}
          <strong>percentuale di 21 su 30</strong> è il 70% (utile per
          convertire un voto scolastico). Una <strong>spesa di 80 €</strong>{" "}
          su un budget mensile di 320 € incide per il 25% del budget — molto
          se ripetuta, poco se isolata.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PERCENTUALE INVERSA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="percentuale-inversa"
        icon={Equal}
        title="Trovare il Totale (Percentuale Inversa)"
        subtitle="V è il p% di → Totale = Parte / (% / 100). Per ricavare l'imponibile da un'imposta."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>percentuale inversa</strong> entra in gioco quando si
          conoscono la <em>parte</em> e la <em>percentuale</em>, e si vuole
          ricavare il <em>totale</em> di riferimento. È il calcolo che si fa,
          per esempio, quando si ha l'importo di un'imposta e si vuole
          risalire all'imponibile, oppure quando si conosce lo sconto in
          valore assoluto e si vuole risalire al prezzo originale.
        </p>

        <div
          className="bg-[oklch(0.25_0.04_250)] text-white px-5 py-4 font-mono text-base text-center"
          style={{ borderRadius: "0.5rem" }}
        >
          Totale = Parte / (Percentuale / 100)
        </div>

        <p className="text-base leading-relaxed">
          <strong>Esempio classico:</strong> 30 è il 15% di quanto? Bastano
          due passaggi: si trasforma la percentuale in decimale (15 ÷ 100 =
          0,15) e si divide la parte per il decimale (30 ÷ 0,15 = 200).
          Quindi 30 è il 15% di 200.
        </p>

        <p className="text-base leading-relaxed">
          <strong>Applicazione tributaria:</strong> hai pagato 230 € di IRPEF
          al 23% (primo scaglione). Qual è il reddito tassato? 230 ÷ 0,23 =
          1.000 €. Hai versato 220 € di IVA al 22%. Qual è l'imponibile?
          220 ÷ 0,22 = 1.000 €. La percentuale inversa è dunque uno strumento
          quotidiano per chi fattura o gestisce contabilità.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          VARIAZIONE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="variazione"
        icon={TrendingUp}
        title="Variazione Percentuale tra Due Numeri"
        subtitle="Var% = ((Nuovo − Vecchio) / Vecchio) × 100. Per confrontare due periodi o valori."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>variazione percentuale</strong> misura di quanto è
          cambiato un valore rispetto a un riferimento iniziale, ed è alla
          base di tutte le analisi comparative anno-su-anno (YoY) e
          mese-su-mese (MoM): andamento del fatturato, prezzi al consumo,
          quotazioni di borsa, indici ISTAT, performance di marketing.
        </p>

        <div
          className="bg-[oklch(0.25_0.04_250)] text-white px-5 py-4 font-mono text-base text-center"
          style={{ borderRadius: "0.5rem" }}
        >
          Var% = ((Valore finale − Valore iniziale) / Valore iniziale) × 100
        </div>

        <p className="text-base leading-relaxed">
          Se la variazione è <strong>positiva</strong> si parla di aumento
          (crescita); se è <strong>negativa</strong> di diminuzione (calo).
          La base di calcolo è sempre il valore iniziale.
        </p>

        <LegalTable
          headers={[
            "Confronto",
            "Calcolo",
            "Variazione",
          ]}
          rows={[
            ["Da 80 a 92", "((92 − 80) ÷ 80) × 100", "+15%"],
            ["Da 100 a 75", "((75 − 100) ÷ 100) × 100", "−25%"],
            ["Da 1.500 a 1.620", "((1.620 − 1.500) ÷ 1.500) × 100", "+8%"],
            ["Da 50 a 65", "((65 − 50) ÷ 50) × 100", "+30%"],
            ["Da 200 a 180", "((180 − 200) ÷ 200) × 100", "−10%"],
          ]}
        />

        <AlertBox variant="warning" title="Attenzione alla base di calcolo">
          <p>
            La variazione percentuale è <strong>asimmetrica</strong>: un
            aumento del 50% da 100 a 150 NON è bilanciato da una diminuzione
            del 50%, ma da una diminuzione del 33,3% (150 → 100). Il motivo:
            la base di calcolo cambia da 100 a 150.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          AUMENTO E DIMINUZIONE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="aumento-diminuzione"
        icon={TrendingDown}
        title="Aumento e Diminuzione Percentuale"
        subtitle="Nuovo = Iniziale × (1 ± % / 100). Ricarichi, indicizzazioni, ribassi."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Quando si applica un <strong>aumento</strong> o una{" "}
          <strong>diminuzione</strong> percentuale a un valore, il calcolo si
          fa in un solo passaggio moltiplicando il valore iniziale per un
          fattore moltiplicativo costruito a partire dalla percentuale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="bg-[oklch(0.97_0.015_155)] border border-[oklch(0.85_0.05_155)] px-5 py-4"
            style={{ borderRadius: "0.5rem" }}
          >
            <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Aumento del p%
            </h3>
            <div className="font-mono text-sm bg-white border border-border px-3 py-2 mb-2" style={{ borderRadius: "0.25rem" }}>
              Nuovo = Iniziale × (1 + p/100)
            </div>
            <p className="text-sm">
              <strong>Esempio:</strong> +15% su 80 → 80 × 1,15 ={" "}
              <strong className="font-mono">92</strong>
            </p>
          </div>

          <div
            className="bg-[oklch(0.97_0.015_25)] border border-[oklch(0.85_0.05_25)] px-5 py-4"
            style={{ borderRadius: "0.5rem" }}
          >
            <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Diminuzione del p%
            </h3>
            <div className="font-mono text-sm bg-white border border-border px-3 py-2 mb-2" style={{ borderRadius: "0.25rem" }}>
              Nuovo = Iniziale × (1 − p/100)
            </div>
            <p className="text-sm">
              <strong>Esempio:</strong> −30% su 100 → 100 × 0,70 ={" "}
              <strong className="font-mono">70</strong>
            </p>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          <strong>Applicazione commerciale (ricarico):</strong> un prodotto
          acquistato a 60 € viene rivenduto con ricarico del 50%. Prezzo di
          vendita: 60 × 1,50 = 90 €. <strong>Indicizzazione ISTAT</strong>:
          un canone di locazione di 800 €/mese si rivaluta del 4% all'anno
          successivo → 800 × 1,04 = 832 €. <strong>Applicazione IVA</strong>:
          il netto 100 € più IVA 22% dà 100 × 1,22 = 122 € lordi (sezione
          dedicata sotto).
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCONTO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="sconto"
        icon={Tag}
        title="Calcolo dello Sconto in Percentuale"
        subtitle="Finale = Prezzo × (1 − sconto / 100). Saldi, promozioni, ribassi commerciali."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Lo <strong>sconto</strong> è il caso particolare di diminuzione
          percentuale applicata a un prezzo. Calcolare lo sconto significa
          rispondere a due domande complementari: quanto si risparmia, e
          quanto si paga alla fine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            className="bg-[oklch(0.97_0.015_25)] border border-[oklch(0.85_0.05_25)] px-5 py-4"
            style={{ borderRadius: "0.5rem" }}
          >
            <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Importo dello sconto
            </h3>
            <div className="font-mono text-sm bg-white border border-border px-3 py-2" style={{ borderRadius: "0.25rem" }}>
              Sconto = Prezzo × (% / 100)
            </div>
          </div>

          <div
            className="bg-[oklch(0.97_0.015_155)] border border-[oklch(0.85_0.05_155)] px-5 py-4"
            style={{ borderRadius: "0.5rem" }}
          >
            <h3 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Prezzo finale
            </h3>
            <div className="font-mono text-sm bg-white border border-border px-3 py-2" style={{ borderRadius: "0.25rem" }}>
              Finale = Prezzo × (1 − % / 100)
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          <strong>Esempio worked:</strong> un capo da 80 € con sconto del 20%.
          Importo dello sconto: 80 × 0,20 = 16 €. Prezzo finale: 80 × 0,80 =
          64 €. Verifica: 80 − 16 = 64. Quando lo sconto è espresso in valore
          assoluto e si vuole risalire alla percentuale, si applica la
          formula dell'incidenza: «sconto / prezzo iniziale × 100».
        </p>

        <p className="text-base leading-relaxed">
          <strong>Sconto inverso</strong>: il caso in cui si conosce il
          prezzo scontato e si vuole risalire al prezzo originale. Se hai
          pagato 64 € con uno sconto del 20%, il prezzo originale era 64 ÷
          0,80 = 80 €. Stessa logica della percentuale inversa.
        </p>

        <AlertBox variant="info">
          <p>
            <strong>Bonifici e fatture commerciali</strong>: in Italia gli
            sconti possono essere applicati sul totale netto (prima dell'IVA)
            o sul totale lordo (dopo l'IVA). I due risultati sono diversi e
            la prassi corretta in fatturazione è applicare lo sconto sul
            netto, prima di calcolare l'IVA.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCONTI SUCCESSIVI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="sconti-successivi"
        icon={Layers}
        title="Sconti Successivi (Composti): Perché 30% + 20% Non Fa 50%"
        subtitle="Sconto reale = 1 − (1 − s₁/100) × (1 − s₂/100). Errore frequentissimo nei saldi."
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Quando un negozio applica due sconti in sequenza — uno sconto di
          listino seguito da uno sconto fedeltà, oppure uno sconto saldi
          seguito da una promozione finale — la tentazione di sommare le due
          percentuali è fortissima. Ed è sbagliata: gli sconti successivi{" "}
          <strong>NON si sommano</strong>, si <strong>compongono</strong>{" "}
          moltiplicando i fattori residui.
        </p>

        <AlertBox variant="warning" title="L'errore classico del 30% + 20%">
          <p>
            Su un prezzo di <strong>100 €</strong>, uno sconto del 30%
            seguito da uno del 20% NON fa 50%, ma <strong>44%</strong>. Il
            calcolo corretto: 100 × 0,70 × 0,80 = <strong>56 €</strong>{" "}
            (risparmio 44 €). Se fosse 50% di sconto, finiresti a 50 € — 6 €
            in meno di quanto pagherai realmente.
          </p>
        </AlertBox>

        <div
          className="bg-[oklch(0.25_0.04_250)] text-white px-5 py-4 font-mono text-sm text-center"
          style={{ borderRadius: "0.5rem" }}
        >
          Sconto_tot = 1 − (1 − s₁/100) × (1 − s₂/100) × …
        </div>

        <p className="text-base leading-relaxed">
          La logica è semplice: ogni sconto si applica sul prezzo residuo
          dopo il precedente, non sul prezzo originale. Il primo sconto del
          30% lascia il 70% del prezzo (fattore 0,70). Il secondo sconto del
          20% si applica al 70% rimasto, lasciando il 70% × 80% = 56% del
          prezzo originale. Lo sconto totale è quindi 100% − 56% = 44%.
        </p>

        <LegalTable
          headers={[
            "Sconti applicati",
            "Prezzo originale",
            "Fattori (1 − s)",
            "Finale",
            "Sconto reale",
          ]}
          rows={[
            ["20% + 20%", "100 €", "0,80 × 0,80", "64 €", "36% (non 40%)"],
            ["30% + 20%", "100 €", "0,70 × 0,80", "56 €", "44% (non 50%)"],
            ["50% + 50%", "100 €", "0,50 × 0,50", "25 €", "75% (non 100%)"],
            ["30% + 20% + 10%", "100 €", "0,70 × 0,80 × 0,90", "50,40 €", "49,6% (non 60%)"],
          ]}
        />

        <p className="text-base leading-relaxed">
          La <strong>sequenza</strong> dei due sconti, dal punto di vista
          matematico, è irrilevante: per la commutatività della
          moltiplicazione, applicare prima il 30% e poi il 20%, oppure prima
          il 20% e poi il 30%, dà lo stesso risultato (56 €). In pratica,
          tuttavia, può fare differenza se i due sconti sono soggetti a
          condizioni (sconto fedeltà solo sul prezzo di listino, sconto
          promozionale solo se il prezzo finale supera una certa soglia,
          ecc.).
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PUNTI PERCENTUALI VS % RELATIVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="punti-percentuali"
        icon={AlertTriangle}
        title="Punti Percentuali vs Percentuale Relativa"
        subtitle="Due concetti distinti, spesso confusi nella stampa finanziaria"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Quando una percentuale stessa cambia nel tempo (un tasso di
          interesse, un'aliquota fiscale, un'affluenza elettorale), si possono
          esprimere due tipi di variazione completamente diversi: i{" "}
          <strong>punti percentuali (pp)</strong> e la{" "}
          <strong>percentuale relativa</strong>. Confonderli porta a errori
          di lettura sistemici, frequenti nella stampa generalista.
        </p>

        <p className="text-base leading-relaxed">
          I <strong>punti percentuali</strong> misurano la{" "}
          <strong>differenza aritmetica</strong> fra due percentuali: passare
          dal 5% al 7% è un aumento di <strong>+2 punti percentuali</strong>.
          La <strong>percentuale relativa</strong> misura invece quanto è
          variata la percentuale rispetto al valore di partenza: passare dal
          5% al 7% è un aumento <strong>relativo del 40%</strong> (perché
          2 ÷ 5 × 100 = 40).
        </p>

        <LegalTable
          headers={[
            "Variazione",
            "Punti percentuali (pp)",
            "Percentuale relativa",
          ]}
          rows={[
            ["Tasso BCE: dal 3% al 4%", "+1 pp", "+33,3%"],
            ["Affluenza: dal 70% al 60%", "−10 pp", "−14,3%"],
            ["IVA: dal 10% al 22%", "+12 pp", "+120%"],
            ["IRPEF: dal 23% al 35%", "+12 pp", "+52,2%"],
          ]}
        />

        <AlertBox variant="warning" title="Errore da titolo di giornale">
          <p>
            «I tassi BCE sono saliti del 2%» è ambiguo: vuol dire +2 punti
            percentuali (es. dal 3% al 5%) oppure +2% relativo (es. dal 3% al
            3,06%)? Sono due scenari completamente diversi. La forma corretta
            è scrivere esplicitamente <strong>«+2 pp»</strong> oppure{" "}
            <strong>«variazione relativa del +2%»</strong>.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          IVA E SCORPORO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="iva-scorporo"
        icon={Receipt}
        title="Calcolo dell'IVA e Scorporo (D.P.R. 633/1972)"
        subtitle="Aliquote 2026 (22%, 10%, 5%, 4%), coefficienti rapidi e gli errori da evitare"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>IVA</strong> (Imposta sul Valore Aggiunto) è il caso di
          applicazione percentuale più ricorrente nella vita professionale.
          La disciplina è contenuta nel{" "}
          <InlineNormLink
            text="D.P.R. 26 ottobre 1972, n. 633"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633"
          />
          : l'art. 16 fissa l'aliquota ordinaria al 22%, mentre la Tabella A
          (Parti II, II-bis e III) elenca i beni e servizi soggetti alle
          aliquote ridotte 4%, 5% e 10%.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633">
          Art. 16, c. 1 D.P.R. 633/1972: «L'aliquota dell'imposta è stabilita
          nella misura del ventidue per cento della base imponibile
          dell'operazione».
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Aliquote IVA vigenti e coefficienti
        </h3>

        <LegalTable
          headers={[
            "Aliquota",
            "Aggiunta",
            "Scorporo",
            "Norma",
            "Casi tipici",
          ]}
          rows={aliquoteIva.map((a) => [
            `${a.aliquota}%`,
            a.coefficienteAggiunta,
            a.coefficienteScorporo,
            a.norma,
            a.casiTipici,
          ])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Aggiungere l'IVA al netto
        </h3>
        <p className="text-base leading-relaxed">
          La formula generale per aggiungere l'IVA a un imponibile netto è{" "}
          <span className="font-mono">Lordo = Netto × (1 + aliquota/100)</span>.
          Per l'aliquota ordinaria 22%, il fattore di moltiplicazione è 1,22;
          quindi un netto di 1.000 € diventa 1.000 × 1,22 = 1.220 € lordi
          (di cui 220 € di IVA). Per il 10%: × 1,10. Per il 5%: × 1,05. Per
          il 4%: × 1,04.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Scorporare l'IVA dal lordo
        </h3>
        <p className="text-base leading-relaxed">
          Lo <strong>scorporo dell'IVA</strong> consiste nel ricavare
          l'imponibile netto a partire da un prezzo lordo IVA inclusa.
          Formula generale: <span className="font-mono">Netto = Lordo / (1 + aliquota/100)</span>.
          Per IVA 22%: Netto = Lordo ÷ 1,22, equivalente a moltiplicare per
          il <strong>coefficiente 0,8197</strong>. Esempio: lordo 122 € →
          netto 100 €.
        </p>

        <AlertBox variant="warning" title="Errore di scorporo da evitare assolutamente">
          <p>
            <strong>NON scorporare l'IVA 22% facendo Lordo × 0,78.</strong>{" "}
            Sembra naturale (22% in meno) ma è sbagliato: 122 × 0,78 =
            95,16 € — un'imposta di 26,84 € invece dei corretti 22 €. Il
            metodo giusto è dividere per 1,22 (coefficiente 0,8197), perché
            il 22% è calcolato sul netto e non sul lordo. Per uno strumento
            dedicato con tutte le aliquote, vedi il nostro tool{" "}
            <a
              href="/scorporo-iva"
              className="text-[oklch(0.45_0.12_250)] underline hover:text-[oklch(0.35_0.15_250)]"
            >
              Scorporo IVA
            </a>
            .
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CASI D'USO PROFESSIONALI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="casi-uso"
        icon={Briefcase}
        title="Casi d'Uso Professionali"
        subtitle="Fattura avvocato, margine commerciale, voti, affluenza, interessi finanziari"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo percentuale non è solo matematica scolastica: è uno
          strumento quotidiano in fatturazione, commercio, didattica, finanza
          e statistica. Ecco i casi d'uso più ricorrenti per le diverse
          categorie professionali.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          1. Fattura dell'avvocato (parametri DM 147/2022)
        </h3>
        <p className="text-base leading-relaxed">
          Una parcella forense italiana coinvolge ben quattro percentuali in
          sequenza, ciascuna applicata su una base diversa:
        </p>

        <BulletList
          items={[
            "Compenso base (DM 147/2022, parametri forensi 2022)",
            "Spese forfettarie 15% del compenso (art. 2, c. 2 DM 147/2022)",
            "CPA (Cassa Forense) 4% sul compenso + spese forfettarie imponibili",
            "IVA 22% sul totale (compenso + spese + CPA)",
            "Ritenuta d'acconto 20% sul compenso + spese imponibili (art. 25 D.P.R. 600/1973), trattenuta dal committente sostituto d'imposta",
          ]}
        />

        <p className="text-base leading-relaxed">
          <strong>Esempio:</strong> compenso 1.000 € → spese forfettarie 150 €
          → base CPA 1.150 € → CPA 46 € → imponibile IVA 1.196 € → IVA 22%
          263,12 € → totale lordo 1.459,12 €. Ritenuta 20% su 1.150 = 230 €.
          Netto incassato dal professionista: 1.459,12 − 230 = 1.229,12 €.
          Per dettagli e calcolatore dedicato vedi{" "}
          <a
            href="/calcolo-fattura-avvocato"
            className="text-[oklch(0.45_0.12_250)] underline hover:text-[oklch(0.35_0.15_250)]"
          >
            Calcolo Fattura Avvocato
          </a>
          .
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          2. Margine vs Markup nel commercio
        </h3>
        <p className="text-base leading-relaxed">
          Due concetti percentuali spesso confusi: il <strong>margine</strong>{" "}
          si calcola sul prezzo di vendita, il <strong>markup</strong> sul
          costo. Sono numeri diversi e producono pricing diversi se confusi.
        </p>

        <LegalTable
          headers={["Indicatore", "Formula", "Costo 60 € — Prezzo 100 €"]}
          rows={[
            ["Margine %", "(Prezzo − Costo) / Prezzo × 100", "40%"],
            ["Markup %", "(Prezzo − Costo) / Costo × 100", "66,7%"],
            ["Margine assoluto", "Prezzo − Costo", "40 €"],
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          3. IRPEF e scaglioni progressivi
        </h3>
        <p className="text-base leading-relaxed">
          L'IRPEF è un'imposta progressiva: l'aliquota cresce a scaglioni in
          funzione del reddito imponibile. La riforma fiscale 2024,
          consolidata per il 2026, ha ridotto a 3 gli scaglioni (prima erano
          4).
        </p>

        <LegalTable
          headers={["Scaglione", "Reddito imponibile", "Aliquota"]}
          rows={scaglioniIrpef.map((s) => [s.scaglione, s.reddito, s.aliquota])}
        />

        <p className="text-base leading-relaxed">
          Su un reddito di 35.000 €: 28.000 × 23% = 6.440 € + 7.000 × 35% =
          2.450 €. IRPEF lorda complessiva: 8.890 €. L'aliquota media è
          25,4% (più bassa dell'aliquota marginale del 35%). Per altri
          calcoli fiscali correlati vedi{" "}
          <a
            href="/ravvedimento-operoso"
            className="text-[oklch(0.45_0.12_250)] underline hover:text-[oklch(0.35_0.15_250)]"
          >
            Ravvedimento Operoso
          </a>
          .
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          4. Voto scolastico e media ponderata
        </h3>
        <p className="text-base leading-relaxed">
          Convertire un voto in trentesimi (tipico universitario) o
          centesimi (esame di maturità) in percentuale è un caso classico di
          incidenza: voto ÷ massimo × 100. Un 18/30 è il 60%, un 24/30 è
          l'80%, un 28/30 è il 93,3%, un 30/30 è il 100%. La{" "}
          <strong>media ponderata</strong> dei voti universitari si calcola
          con i CFU: <span className="font-mono">M = Σ(voto × CFU) / Σ(CFU)</span>.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          5. Affluenza e quoziente di sbarramento
        </h3>
        <p className="text-base leading-relaxed">
          L'<strong>affluenza elettorale</strong> è la percentuale di
          aventi diritto che ha effettivamente votato:{" "}
          <span className="font-mono">Affluenza = (votanti / aventi diritto) × 100</span>.
          La <strong>soglia di sbarramento</strong> del 4% alle elezioni
          politiche è la percentuale minima sui voti validi per accedere al
          riparto dei seggi. Il quorum referendario del 50%+1 è anch'esso una
          percentuale degli aventi diritto.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          6. Interesse semplice e rendimento finanziario
        </h3>
        <p className="text-base leading-relaxed">
          L'<strong>interesse semplice</strong> si calcola come{" "}
          <span className="font-mono">I = Capitale × tasso% × tempo / 100</span>.
          Per un capitale di 10.000 € a un tasso del 5% per 2 anni:
          10.000 × 5 × 2 ÷ 100 = 1.000 €. Per gli interessi legali italiani
          (1,60% per il 2026) e quelli moratori (BCE + 8%, ca. 10,15% nel
          2026) vedi i tool dedicati{" "}
          <a
            href="/calcolo-interessi-legali"
            className="text-[oklch(0.45_0.12_250)] underline hover:text-[oklch(0.35_0.15_250)]"
          >
            Interessi Legali
          </a>{" "}
          e{" "}
          <a
            href="/calcolo-interessi-moratori"
            className="text-[oklch(0.45_0.12_250)] underline hover:text-[oklch(0.35_0.15_250)]"
          >
            Interessi Moratori
          </a>
          .
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          7. Quadro riepilogativo
        </h3>
        <LegalTable
          headers={["Caso", "Applicazione tipica"]}
          rows={casiProfessionali.map((c) => [c.categoria, c.descrizione])}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          EXCEL E GOOGLE SHEETS
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="excel"
        icon={FileSpreadsheet}
        title="Calcolo Percentuale in Excel e Google Sheets"
        subtitle="Formule pronte all'uso per fogli di calcolo, con sintassi italiana"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le stesse formule matematiche del calcolo percentuale si traducono
          direttamente in formule per <strong>Excel</strong> e{" "}
          <strong>Google Sheets</strong>. La sintassi è praticamente
          identica nei due programmi (la versione italiana di Excel usa la
          virgola come separatore decimale e il punto e virgola come
          separatore di argomenti). Ecco le otto formule più utili.
        </p>

        <LegalTable
          headers={["Calcolo", "Formula", "Note"]}
          rows={formuleExcel.map((f) => [f.calcolo, f.formula, f.esempio])}
        />

        <p className="text-base leading-relaxed">
          <strong>Formattazione cella come percentuale:</strong> in Excel
          seleziona la cella e premi <code>Ctrl + Maiusc + 5</code> (oppure
          Home → Numero → Percentuale). La cella mostrerà il valore moltiplicato
          per 100 con il simbolo %. Lo stesso vale in Google Sheets con il
          pulsante % nella barra degli strumenti.
        </p>

        <AlertBox variant="info" title="Suggerimento: usa ARROTONDA() per i decimali finali">
          <p>
            Nei calcoli finanziari, arrotonda i decimali solo alla fine, non
            ai passaggi intermedi. Usa la funzione <code>=ARROTONDA(formula;2)</code>
            sul risultato finale (2 = numero di decimali). Esempio:
            <code>=ARROTONDA(A1*0,075;2)</code> per centesimi di euro nel
            7,5% di A1.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TRUCCHI MENTALI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="trucchi-mentali"
        icon={Brain}
        title="Trucchi per il Calcolo Mentale Rapido"
        subtitle="Calcola la maggior parte delle percentuali in pochi secondi, senza calcolatrice"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Con i trucchi giusti, la maggior parte dei calcoli percentuali si
          fanno a mente in pochi secondi. La chiave è partire dal{" "}
          <strong>10%</strong> (immediato: sposta la virgola di una posizione
          a sinistra) e scomporre le altre percentuali in somme e divisioni
          di percentuali notevoli.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {trucchiMentali.map((t, i) => (
            <div
              key={i}
              className="border border-border bg-white p-4 hover:shadow-md transition-shadow"
              style={{ borderRadius: "0.5rem" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center w-8 h-8 bg-[oklch(0.94_0.03_85)] text-[oklch(0.45_0.10_85)] font-bold text-sm flex-shrink-0"
                  style={{ borderRadius: "9999px" }}
                >
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                    {t.titolo}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    {t.descrizione}
                  </p>
                  <p className="text-sm font-mono text-[oklch(0.25_0.04_250)]">
                    {t.esempio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AlertBox variant="success" title="Il trucco più potente: la commutatività">
          <p>
            Per la commutatività della moltiplicazione,{" "}
            <strong>a% di b = b% di a</strong>. Spesso uno dei due ordini è
            molto più semplice da calcolare a mente. Il 4% di 75 è uguale al{" "}
            <strong>75% di 4 = 3</strong> (i tre quarti di 4 sono 3). Il 16%
            di 25 è uguale al <strong>25% di 16 = 4</strong>. Provalo: in
            molti casi il calcolo «al contrario» è quasi immediato.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ERRORI COMUNI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="errori-comuni"
        icon={AlertTriangle}
        title="Errori Comuni da Evitare"
        subtitle="I sette errori percentuali che fanno anche i professionisti"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Anche chi lavora quotidianamente con le percentuali commette errori
          ricorrenti. Ecco i sette più frequenti, da conoscere bene per
          evitarli — alcuni capitano sistematicamente in stampa finanziaria,
          fatturazione e contabilità.
        </p>

        {erroriComuni.map((e, i) => (
          <div
            key={i}
            className="border-l-4 border-[oklch(0.65_0.20_25)] bg-[oklch(0.98_0.01_25)] px-5 py-4"
            style={{ borderRadius: "0 0.375rem 0.375rem 0" }}
          >
            <h3 className="text-base font-semibold text-[oklch(0.50_0.15_25)] mb-1">
              {i + 1}. {e.titolo}
            </h3>
            <p className="text-sm text-[oklch(0.25_0.04_250)] mb-2">
              {e.spiegazione}
            </p>
            <p className="text-sm font-mono text-[oklch(0.25_0.04_250)] bg-white border border-border px-3 py-2" style={{ borderRadius: "0.25rem" }}>
              {e.esempio}
            </p>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FONTI E RIFERIMENTI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fonti"
        icon={Library}
        title="Fonti e Riferimenti"
        subtitle="Fonti istituzionali e autorevoli utilizzate per questa guida"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le informazioni contenute in questa pagina sono basate su fonti
          istituzionali, accademiche e tecniche di riconosciuta affidabilità.
          Ecco la bibliografia completa, organizzata per ambito tematico.
        </p>

        <div className="space-y-3">
          {fontiAutorevoli.map((f, i) => (
            <div
              key={i}
              className="border border-border bg-white p-4"
              style={{ borderRadius: "0.5rem" }}
            >
              <div className="flex items-start gap-3">
                <Hash className="w-4 h-4 text-[oklch(0.75_0.10_85)] flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {f.categoria}
                    </span>
                  </div>
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[oklch(0.25_0.04_250)] hover:text-[oklch(0.45_0.12_250)] mb-1 break-words"
                  >
                    {f.label}
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {f.descrizione}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande Frequenti (FAQ)"
        subtitle="Le risposte alle domande più cercate su Google sul calcolo percentuale"
      />
      <FAQ items={faqData} />

      {/* ═══════════════════════════════════════════════════════════
          NORMATIVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="normativa"
        icon={BookOpen}
        title="Normativa di Riferimento"
        subtitle="Le principali fonti normative italiane citate in questa pagina"
      />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}
