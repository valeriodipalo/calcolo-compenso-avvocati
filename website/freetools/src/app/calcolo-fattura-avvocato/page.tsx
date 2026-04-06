import {
  FileText,
  BookOpen,
  HelpCircle,
  Calculator,
  ArrowDownUp,
  Percent,
  Landmark,
  Receipt,
  Shield,
  Building2,
  Stamp,
  Wifi,
  Link2,
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
import Calcolatore from "@/components/calcolo-fattura-avvocato/Calcolatore";
import {
  sections,
  normativaRiferimento,
} from "@/data/calcolo-fattura-avvocato/fatturaData";
import { faqData } from "@/data/calcolo-fattura-avvocato/faqData";
import {
  JsonLd,
  articleSchema,
  webApplicationSchema,
} from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Fattura Avvocato 2026 — Calcolatore Gratuito",
  description:
    "Calcolo fattura avvocato 2026: calcolatore gratuito diretto e inverso (scorporo). Regime ordinario e forfettario, IVA 22%, CPA 4%, ritenuta 20%.",
  alternates: {
    canonical: "/calcolo-fattura-avvocato",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-fattura-avvocato",
    title: "Calcolo Fattura Avvocato 2026 — Calcolatore Gratuito",
    description:
      "Calcolo fattura avvocato 2026: calcolatore gratuito diretto e inverso (scorporo). Regime ordinario e forfettario, IVA 22%, CPA 4%, ritenuta 20%.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Fattura Avvocato 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Fattura Avvocato 2026 — Calcolatore Gratuito",
    description:
      "Calcolo fattura avvocato 2026: calcolatore gratuito diretto e inverso (scorporo). Regime ordinario e forfettario, IVA 22%, CPA 4%, ritenuta 20%.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-fattura-avvocato",
  title: "Calcolo Fattura Avvocato 2026",
  shortTitle: "Fattura Avvocato",
  icon: FileText,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Calcolatore Diretto e Inverso, Guida Completa",
  heroTitle: "Calcolo Fattura Avvocato 2026",
  heroDescription:
    "Calcola la fattura dell'avvocato con il calcolatore gratuito aggiornato al 2026: calcolo diretto dal compenso e inverso (scorporo) dal totale. Supporto regime ordinario e forfettario, IVA 22%, CPA 4%, ritenuta 20%, split payment PA e marca da bollo.",
  heroReference:
    "DPR 633/72 (IVA) — DPR 600/73, art. 25 (Ritenuta) — DM 55/2014, art. 2 (Forfettarie 15%) — L. 247/2012, art. 11 (CPA 4%)",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale né fiscale.",
    "Dati aggiornati alla normativa vigente al 2026. Per casi specifici consultare il proprio commercialista.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    {
      label: "Agenzia delle Entrate",
      url: "https://www.agenziaentrate.gov.it",
    },
    { label: "Cassa Forense", url: "https://www.cassaforense.it" },
  ],
};

export default function CalcoloFatturaAvvocatoPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ── JSON-LD: Article ── */}
      <JsonLd
        data={articleSchema({
          headline:
            "Calcolo Fattura Avvocato 2026: Guida Completa con Calcolatore Online",
          description:
            "Guida completa al calcolo della fattura dell'avvocato: composizione, voci obbligatorie, IVA, CPA, ritenuta, regime ordinario e forfettario, calcolo inverso, split payment PA.",
          path: "/calcolo-fattura-avvocato",
          datePublished: "2026-03-26",
          dateModified: "2026-03-26",
          image: HERO_IMG,
          sections: [
            "Calcolatore Fattura Avvocato",
            "Cos'è la Fattura dell'Avvocato",
            "Come si Compone la Fattura",
            "Spese Forfettarie 15%",
            "CPA 4%",
            "IVA 22%",
            "Ritenuta d'Acconto 20%",
            "Calcolo Inverso",
            "Regime Forfettario",
            "Regime Ordinario",
            "Split Payment PA",
            "Marca da Bollo",
            "Fattura Elettronica",
            "FAQ",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* ── JSON-LD: WebApplication ── */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Fattura Avvocato 2026",
          description:
            "Calcola la fattura dell'avvocato online: calcolo diretto e inverso (scorporo), regime ordinario e forfettario, IVA, CPA, ritenuta, split payment PA.",
          path: "/calcolo-fattura-avvocato",
          applicationCategory: "FinanceApplication",
        })}
      />

      {/* ═══════════════════════════════════════════════════════════
          CALCOLATORE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="calcolatore"
        icon={Calculator}
        title="Calcolatore Fattura Avvocato"
        subtitle="Calcolo diretto e inverso (scorporo)"
      />
      <Calcolatore />

      {/* ═══════════════════════════════════════════════════════════
          COS'È LA FATTURA DELL'AVVOCATO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cose-fattura"
        icon={FileText}
        title="Cos'è la Fattura dell'Avvocato"
        subtitle="Differenza tra fattura, parcella e notula"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>fattura dell'avvocato</strong> è il documento fiscale obbligatorio che il professionista
          emette al cliente a fronte di una prestazione legale. A differenza della <em>parcella</em> (o <em>notula</em>),
          che è un documento descrittivo delle attività svolte e dei compensi per fase, la fattura ha rilevanza
          fiscale ed è disciplinata dall'
          <InlineNormLink
            text="art. 21 del DPR 633/72"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633"
          />{" "}
          (Testo Unico IVA). Per determinare il compenso base da inserire in fattura,
          si può utilizzare il nostro{" "}
          <a href="/calcolo-compenso" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
            calcolatore del compenso avvocato
          </a>{" "}
          basato sui parametri forensi DM 55/2014.
        </p>
        <p className="text-base leading-relaxed">
          Dopo l'abolizione delle tariffe forensi avvenuta con il{" "}
          <InlineNormLink
            text="DL 24 gennaio 2012, n. 1"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2012-01-24;1"
          />{" "}
          (decreto Bersani bis, art. 9), il compenso dell'avvocato non si determina più in base a «diritti e onorari»
          ma come <strong>compenso unico</strong> per la prestazione professionale, parametrato secondo il{" "}
          <InlineNormLink
            text="DM 10 marzo 2014, n. 55"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />{" "}
          (parametri forensi). L'
          <InlineNormLink
            text="art. 2233 del Codice Civile"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262"
          />{" "}
          prevede che il compenso sia determinato in via prioritaria dall'accordo tra le parti e, in mancanza,
          secondo i parametri vigenti.
        </p>

        <AlertBox variant="info">
          <p>
            <strong>Obbligo di preventivo:</strong> l'
            <InlineNormLink
              text="art. 13, comma 5, L. 247/2012"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247"
            />{" "}
            impone all'avvocato di comunicare al cliente, al conferimento dell'incarico, la prevedibile
            misura del costo della prestazione, distinguendo tra oneri, spese (anche forfettarie) e
            compenso professionale.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          COMPOSIZIONE DELLA FATTURA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="composizione"
        icon={Receipt}
        title="Come si Compone la Fattura dell'Avvocato"
        subtitle="Le voci obbligatorie della fattura in regime ordinario"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La fattura dell'avvocato in <strong>regime ordinario</strong> si compone delle seguenti voci, ciascuna
          disciplinata da una specifica norma:
        </p>

        <LegalTable
          headers={["Voce", "Percentuale", "Base di calcolo", "Riferimento normativo"]}
          rows={[
            ["Compenso professionale", "—", "Accordo / parametri DM 55/2014", "Art. 2233 c.c."],
            ["Spese forfettarie", "15%", "Compenso", "Art. 2 DM 55/2014"],
            ["CPA Cassa Forense", "4%", "Compenso + forfettarie", "Art. 11 L. 247/2012"],
            ["IVA", "22%", "Compenso + forf. + CPA + spese imp.", "Art. 16 DPR 633/72"],
            ["Spese anticipate art. 15", "—", "Escluse da imponibile IVA", "Art. 15 DPR 633/72"],
            ["Ritenuta d'acconto", "20%", "Compenso + forfettarie", "Art. 25 DPR 600/73"],
          ]}
        />

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633">
          Art. 15 DPR 633/72: «Non concorrono a formare la base imponibile le somme dovute a titolo di
          rimborso delle anticipazioni fatte in nome e per conto della controparte, purché regolarmente
          documentate.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Esempio fattura avvocato — Regime ordinario, compenso €1.000
        </h3>

        <LegalTable
          headers={["Voce", "Importo"]}
          rows={[
            ["Compenso professionale", 1000],
            ["Spese forfettarie (15%)", 150],
            ["CPA (4% su 1.150)", 46],
            ["Imponibile IVA", 1196],
            ["IVA (22%)", 263.12],
            ["Spese anticipate (es. CU)", 259],
            ["TOTALE FATTURA", 1718.12],
            ["Ritenuta d'acconto (20% su 1.150)", -230],
            ["NETTO A PAGARE", 1488.12],
          ]}
        />

        <AlertBox variant="warning" title="Attenzione">
          <p>
            La <strong>ritenuta d'acconto del 20%</strong> si applica su compenso + spese forfettarie
            (non sulla CPA, non sull'IVA, non sulle spese anticipate). La ritenuta non riduce il totale
            fattura ma solo il netto che il cliente versa all'avvocato.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SPESE FORFETTARIE 15%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="spese-forfettarie"
        icon={Percent}
        title="Spese Forfettarie 15%"
        subtitle="Art. 2 DM 55/2014 — Rimborso spese generali"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le <strong>spese forfettarie</strong> (o rimborso spese generali) sono disciplinate dall'
          <InlineNormLink
            text="art. 2, comma 2, del DM 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />
          , che stabilisce: oltre al compenso e al rimborso delle spese documentate, all'avvocato è dovuta
          una somma per rimborso delle spese forfettarie nella misura del <strong>15% del compenso totale</strong>.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55">
          Art. 2, c. 2, DM 55/2014: «Oltre al compenso e al rimborso delle spese documentate, all'avvocato
          è dovuta — a titolo di rimborso delle spese forfettarie — una somma pari al 15 per cento del
          compenso totale per la prestazione.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          La percentuale del <strong>15% è fissa e inderogabile</strong>: la Corte di Cassazione
          (ordinanza n. 28/2024) ha confermato che le spese forfettarie spettano all'avvocato in modo
          automatico, senza obbligo di documentarle analiticamente. Coprono le spese generali di studio:
          affitto, utenze, segreteria, cancelleria, software.
        </p>

        <AlertBox variant="info">
          <p>
            Le spese forfettarie entrano nella base di calcolo della <strong>CPA</strong> (4% su
            compenso + forfettarie) e della <strong>ritenuta d'acconto</strong> (20% su compenso +
            forfettarie), oltre che nell'imponibile IVA.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CPA 4%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cpa"
        icon={Landmark}
        title="CPA 4% — Contributo Cassa Forense"
        subtitle="Art. 11 L. 247/2012"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>contributo integrativo alla Cassa Nazionale di Previdenza e Assistenza Forense</strong> (CPA)
          è pari al <strong>4%</strong> e si calcola sulla somma di compenso e spese forfettarie. È previsto
          dall'
          <InlineNormLink
            text="art. 11 della L. 247/2012"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247"
          />{" "}
          e dal regolamento della Cassa Forense.
        </p>

        <BulletList
          items={[
            "Base di calcolo: compenso + spese forfettarie 15%",
            "La CPA è obbligatoria per tutti gli iscritti all'Albo, indipendentemente dal regime fiscale",
            "In regime ordinario, la CPA entra nell'imponibile IVA",
            "In regime forfettario, la CPA è comunque dovuta ma non soggetta a IVA",
            "La CPA non rientra nella base di calcolo della ritenuta d'acconto",
          ]}
        />

        <AlertBox variant="success">
          <p>
            <strong>Formula CPA:</strong>{" "}
            <span className="font-mono">CPA = (Compenso + Spese Forfettarie) × 4%</span>
          </p>
          <p className="mt-1">
            Esempio: compenso €1.000 + forf. €150 = €1.150 →{" "}
            <span className="font-mono">CPA = €1.150 × 4% = €46,00</span>
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          IVA 22%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="iva"
        icon={Percent}
        title="IVA 22% sulla Fattura dell'Avvocato"
        subtitle="Art. 16 DPR 633/72"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>IVA al 22%</strong> si applica sull'intero imponibile della fattura, come previsto
          dall'
          <InlineNormLink
            text="art. 16 del DPR 633/72"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633"
          />
          . L'imponibile IVA è composto da:
        </p>

        <BulletList
          items={[
            "Compenso professionale",
            "Spese forfettarie (15%)",
            "CPA (4%)",
            "Spese imponibili (es. viaggio, alloggio, perizie)",
          ]}
        />

        <p className="text-base leading-relaxed">
          Sono invece <strong>escluse</strong> dall'imponibile IVA le <strong>spese anticipate</strong> in nome
          e per conto del cliente — tra cui il{" "}
          <a href="/contributo-unificato" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
            contributo unificato
          </a>{" "}
          (
          <InlineNormLink
            text="art. 15 DPR 633/72"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633"
          />
          ): contributo unificato, marche da bollo, diritti di copia, spese di notifica, tassa di registro.
        </p>

        <AlertBox variant="info">
          <p>
            <strong>Chi paga l'IVA?</strong> L'IVA è a carico del cliente. Nelle cause con condanna
            alle spese, il soccombente rimborsa l'IVA al vincitore solo se quest'ultimo non può
            detrarla (soggetto privato). Se il vincitore è un soggetto IVA, l'IVA non viene rimborsata.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          RITENUTA D'ACCONTO 20%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="ritenuta"
        icon={Shield}
        title="Ritenuta d'Acconto 20%"
        subtitle="Art. 25 DPR 600/73"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>ritenuta d'acconto del 20%</strong> è il prelievo fiscale che il cliente (sostituto
          d'imposta) opera sul compenso dell'avvocato al momento del pagamento, ai sensi dell'
          <InlineNormLink
            text="art. 25 del DPR 600/73"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;600"
          />
          .
        </p>

        <p className="text-base leading-relaxed">
          La base di calcolo della ritenuta è la somma di <strong>compenso + spese forfettarie 15%</strong>.
          Non si calcola sulla CPA, sull'IVA, sulle spese anticipate né sulle spese imponibili.
        </p>

        <AlertBox variant="success">
          <p>
            <strong>Formula ritenuta:</strong>{" "}
            <span className="font-mono">Ritenuta = (Compenso + Spese Forfettarie) × 20%</span>
          </p>
          <p className="mt-1">
            Esempio: €1.000 + €150 = €1.150 →{" "}
            <span className="font-mono">Ritenuta = €1.150 × 20% = €230,00</span>
          </p>
        </AlertBox>

        <AlertBox variant="warning" title="Attenzione">
          <p>
            La ritenuta d'acconto <strong>non si applica</strong> quando il cliente è un privato
            (persona fisica non sostituto d'imposta) o quando l'avvocato è in{" "}
            <strong>regime forfettario</strong> (art. 1, comma 67, L. 190/2014).
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          In caso di ritardo nel pagamento della fattura, sulla somma dovuta maturano{" "}
          <a href="/calcolo-interessi-legali" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
            interessi legali
          </a>{" "}
          (art. 1284 c.c.) o, nelle transazioni commerciali,{" "}
          <a href="/calcolo-interessi-moratori" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
            interessi moratori
          </a>{" "}
          (D.Lgs. 231/2002).
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CALCOLO INVERSO (SCORPORO)
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="calcolo-inverso"
        icon={ArrowDownUp}
        title="Calcolo Inverso (Scorporo) della Fattura"
        subtitle="Come risalire dal totale al compenso base"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>calcolo inverso</strong> (o <strong>scorporo</strong>) permette di risalire dal
          totale della fattura (o dal netto a pagare) al compenso base dell'avvocato. È particolarmente
          utile quando il cliente e l'avvocato concordano un importo «tutto compreso» e occorre
          determinare il compenso che, con tutti gli accessori, produce quel totale.
        </p>

        <p className="text-base leading-relaxed">
          Lo <strong>scorporo fattura avvocato</strong> è l'operazione opposta al calcolo diretto:
          si parte dall'importo complessivo e si «scompongono» le singole voci per risalire
          al compenso professionale originario.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Formula scorporo — Regime ordinario dal Totale Fattura
        </h3>

        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose">
            1. Imponibile = (Totale − Spese Anticipate) ÷ 1,22<br />
            2. Base = Imponibile − Spese Imponibili<br />
            3. Compenso = Base ÷ [(1 + 0,15) × (1 + 0,04)]<br />
            4. Compenso = Base ÷ 1,196
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Esempio: scorporo da Totale €1.718,12
        </h3>

        <LegalTable
          headers={["Passaggio", "Calcolo", "Risultato"]}
          rows={[
            ["Tolgo spese anticipate", "1.718,12 − 259,00", "1.459,12"],
            ["Tolgo IVA (÷ 1,22)", "1.459,12 ÷ 1,22", "1.196,00"],
            ["Tolgo spese imponibili", "1.196,00 − 0", "1.196,00"],
            ["Trovo compenso (÷ 1,196)", "1.196,00 ÷ 1,196", "1.000,00"],
          ]}
        />

        <p className="text-sm text-muted-foreground">
          Il calcolatore nella parte alta della pagina esegue automaticamente sia il calcolo diretto
          che l'inverso, anche partendo dal netto a pagare e con split payment attivo.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          REGIME FORFETTARIO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="regime-forfettario"
        icon={FileText}
        title="Fattura Avvocato in Regime Forfettario"
        subtitle="L. 190/2014, art. 1, commi 54-89"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>fattura avvocato regime forfettario</strong> è strutturalmente più semplice
          rispetto a quella in regime ordinario. L'avvocato in <strong>regime forfettario</strong> (
          <InlineNormLink
            text="L. 190/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190"
          />
          , art. 1, commi 54-89) emette fattura <strong>senza IVA</strong> e <strong>senza ritenuta
          d'acconto</strong>. Le voci della fattura sono:
        </p>

        <LegalTable
          headers={["Voce", "Importo (es. €1.000)"]}
          rows={[
            ["Compenso professionale", 1000],
            ["Spese forfettarie (15%)", 150],
            ["CPA (4% su 1.150)", 46],
            ["Marca da bollo (se > €77,47)", 2],
            ["TOTALE FATTURA = NETTO A PAGARE", 1198],
          ]}
        />

        <BulletList
          items={[
            "Non si addebita IVA (operazione esclusa art. 1, comma 58, L. 190/2014)",
            "Non si applica ritenuta d'acconto (art. 1, comma 67, L. 190/2014)",
            "La CPA 4% è comunque obbligatoria (art. 11 L. 247/2012)",
            "Marca da bollo di €2 se il totale supera €77,47 (DPR 642/72, art. 13)",
            "In fattura elettronica: codice natura N2.2, bollo virtuale SI",
          ]}
        />

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190">
          Art. 1, comma 58, L. 190/2014: «I contribuenti [forfettari] non addebitano l'imposta sul
          valore aggiunto a titolo di rivalsa e non hanno diritto alla detrazione dell'imposta sul
          valore aggiunto assolta, dovuta o addebitata sugli acquisti.»
        </NormativaQuote>

        <AlertBox variant="info">
          <p>
            La <strong>marca da bollo di €2</strong> può essere addebitata al cliente come voce in
            fattura. Per la fattura elettronica, il bollo è virtuale e si versa trimestralmente
            tramite il portale Fatture e Corrispettivi dell'Agenzia delle Entrate.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          REGIME ORDINARIO — ESEMPIO COMPLETO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="regime-ordinario"
        icon={FileText}
        title="Fattura Avvocato in Regime Ordinario"
        subtitle="Esempio completo con spese anticipate"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Vediamo un esempio completo di fattura in <strong>regime ordinario</strong> con compenso
          di €2.000 e spese anticipate (contributo unificato + marche) di €545:
        </p>

        <LegalTable
          headers={["Voce", "Importo"]}
          rows={[
            ["Compenso professionale", 2000],
            ["Spese forfettarie (15% di 2.000)", 300],
            ["CPA (4% di 2.300)", 92],
            ["Imponibile IVA (2.000 + 300 + 92)", 2392],
            ["IVA (22% di 2.392)", 526.24],
            ["Spese anticipate art. 15 (CU + bolli)", 545],
            ["TOTALE FATTURA", 3463.24],
            ["Ritenuta d'acconto (20% di 2.300)", -460],
            ["NETTO A PAGARE", 3003.24],
          ]}
        />

        <p className="text-base leading-relaxed">
          Il cliente versa <strong className="font-mono">€3.003,24</strong> all'avvocato (netto a pagare)
          e trattiene <strong className="font-mono">€460,00</strong> come ritenuta d'acconto da versare
          all'Erario con il modello F24 entro il 16 del mese successivo al pagamento (codice tributo 1040).
        </p>

        <AlertBox variant="info">
          <p>
            <strong>Spese anticipate art. 15:</strong> il contributo unificato, le marche da bollo,
            i diritti di copia e le spese di notifica sono esclusi dall'imponibile IVA in quanto
            anticipazioni in nome e per conto del cliente (
            <InlineNormLink
              text="art. 15 DPR 633/72"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633"
            />
            ).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SPLIT PAYMENT PA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="split-payment"
        icon={Building2}
        title="Split Payment PA"
        subtitle="Art. 17-ter DPR 633/72 — Scissione dei pagamenti"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Lo <strong>split payment</strong> (scissione dei pagamenti,{" "}
          <InlineNormLink
            text="art. 17-ter del DPR 633/72"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;633"
          />
          ) prevede che, per le forniture alla Pubblica Amministrazione, l'IVA non venga incassata
          dal fornitore ma versata direttamente dalla PA all'Erario.
        </p>

        <AlertBox variant="warning" title="Avvocati esclusi dallo split payment">
          <p>
            Dal <strong>1° luglio 2017</strong>, il{" "}
            <InlineNormLink
              text="D.L. 50/2017"
              url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2017-04-24;50"
            />{" "}
            (art. 1, comma 1) ha <strong>escluso dallo split payment</strong> tutti i professionisti
            i cui compensi sono già assoggettati a <strong>ritenuta d'acconto</strong> ai sensi
            dell'art. 25 DPR 600/73. Poiché i compensi degli avvocati sono soggetti a ritenuta del 20%,
            gli avvocati <strong>non applicano lo split payment</strong> nelle fatture verso la PA.
          </p>
        </AlertBox>

        <p className="text-base leading-relaxed">
          In pratica, l'avvocato che fattura a una Pubblica Amministrazione emette la fattura
          con le stesse modalità di un cliente privato sostituto d'imposta: l'IVA viene incassata
          normalmente e la PA trattiene solo la ritenuta d'acconto del 20%.
        </p>

        <AlertBox variant="info">
          <p>
            <strong>Eccezione:</strong> lo split payment si applica ancora ai professionisti che
            operano in regime forfettario (poiché non sono soggetti a ritenuta), ma in pratica
            l'effetto è nullo perché i forfettari non addebitano IVA.
          </p>
        </AlertBox>

        <p className="text-sm text-muted-foreground">
          Il calcolatore sopra include comunque l'opzione split payment a scopo didattico
          e per i rari casi in cui possa applicarsi (es. collaboratori non soggetti a ritenuta).
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MARCA DA BOLLO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="marca-bollo"
        icon={Stamp}
        title="Marca da Bollo sulla Fattura dell'Avvocato"
        subtitle="DPR 642/72 — Imposta di bollo €2"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>marca da bollo di €2</strong> è dovuta sulle fatture <strong>esenti da IVA</strong>{" "}
          il cui importo supera <strong>€77,47</strong>, come previsto dal{" "}
          <InlineNormLink
            text="DPR 642/72"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1972-10-26;642"
          />
          . Riguarda principalmente:
        </p>

        <BulletList
          items={[
            "Fatture di avvocati in regime forfettario (esenti IVA)",
            "Fatture per operazioni esenti art. 10 DPR 633/72",
            "Fatture per operazioni escluse art. 15 DPR 633/72 (se il totale delle sole anticipazioni supera €77,47)",
          ]}
        />

        <p className="text-base leading-relaxed">
          Per la <strong>fattura elettronica</strong>, la marca da bollo è virtuale: nel tracciato XML si
          compila il blocco «DatiBollo» con BolloVirtuale = SI e ImportoBollo = 2.00. Il versamento
          cumulativo avviene trimestralmente tramite il portale Fatture e Corrispettivi dell'Agenzia
          delle Entrate. L'importo del bollo può essere addebitato al cliente.
        </p>

        <AlertBox variant="info">
          <p>
            <strong>Avvocato in regime ordinario:</strong> la marca da bollo <strong>non è dovuta</strong>{" "}
            sulla fattura con IVA, poiché l'imposta di bollo è alternativa all'IVA.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FATTURA ELETTRONICA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fattura-elettronica"
        icon={Wifi}
        title="Fattura Elettronica dell'Avvocato"
        subtitle="Obbligo dal 2024 per tutti i regimi"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Dal <strong>1° gennaio 2024</strong>, l'obbligo di fatturazione elettronica si estende a
          tutti i soggetti IVA senza eccezioni, compresi gli avvocati in regime forfettario
          (precedentemente esentati sotto la soglia di €25.000 di ricavi). La fattura va trasmessa
          in formato XML al Sistema di Interscambio (SdI) entro 12 giorni dalla data dell'operazione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Codici natura IVA per avvocati
        </h3>

        <LegalTable
          headers={["Regime", "Codice Natura", "Descrizione"]}
          rows={[
            ["Ordinario", "—", "IVA esposta normalmente al 22%"],
            ["Forfettario", "N2.2", "Operazioni non soggette — altri casi"],
            ["Spese anticipate art. 15", "N1", "Escluse art. 15 DPR 633/72"],
            ["Split payment PA", "S", "Scissione pagamenti art. 17-ter"],
          ]}
        />

        <AlertBox variant="info">
          <p>
            <strong>Tipo documento:</strong> TD01 (fattura) o TD06 (parcella/notula). Il codice
            destinatario è il codice SdI del cliente (7 caratteri) oppure la PEC. Per privati
            senza PEC: codice 0000000 + codice fiscale.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FONTI E RIFERIMENTI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fonti"
        icon={Link2}
        title="Fonti e Riferimenti"
        subtitle="Fonti istituzionali utilizzate"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          Le informazioni contenute in questa guida sono tratte dalle seguenti fonti istituzionali:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Normattiva.it</strong> — Testi coordinati e vigenti di tutte le norme citate
              (DPR 633/72, DPR 600/73, DM 55/2014, L. 247/2012, L. 190/2014, DPR 642/72):{" "}
              <a href="https://www.normattiva.it" target="_blank" rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
                normattiva.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Agenzia delle Entrate</strong> — Circolari su split payment (15/E 2015),
              fattura elettronica, codici natura IVA:{" "}
              <a href="https://www.agenziaentrate.gov.it" target="_blank" rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
                agenziaentrate.gov.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Cassa Nazionale Forense</strong> — Regolamento contributo integrativo CPA 4%:{" "}
              <a href="https://www.cassaforense.it" target="_blank" rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
                cassaforense.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Consiglio Nazionale Forense</strong> — Codice deontologico, obbligo di preventivo:{" "}
              <a href="https://www.consiglionazionaleforense.it" target="_blank" rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
                consiglionazionaleforense.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Gazzetta Ufficiale</strong> — Pubblicazione originale di leggi e decreti:{" "}
              <a href="https://www.gazzettaufficiale.it" target="_blank" rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">
                gazzettaufficiale.it
              </a>
            </span>
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande Frequenti (FAQ)"
        subtitle="Risposte alle domande più comuni sulla fattura dell'avvocato"
      />
      <FAQ items={faqData} />

      {/* ═══════════════════════════════════════════════════════════
          NORMATIVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="normativa"
        icon={BookOpen}
        title="Normativa di Riferimento"
      />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}
