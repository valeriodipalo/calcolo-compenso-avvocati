import {
  Percent,
  BookOpen,
  HelpCircle,
  Calculator,
  Receipt,
  History,
  AlertTriangle,
  Sigma,
  Scale,
  ListChecks,
  FileSpreadsheet,
  Landmark,
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
import Calcolatore from "@/components/scorporo-iva/Calcolatore";
import {
  sections,
  normativaRiferimento,
  ESEMPI_22,
  ESEMPI_10,
  ESEMPI_5,
  ESEMPI_4,
  STORIA_ALIQUOTE,
  ALIQUOTE_IVA,
} from "@/data/scorporo-iva/scorporoIvaData";
import { faqData } from "@/data/scorporo-iva/faqData";
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
  title: "Scorporo IVA 2026 | Calcolatore Gratis (22% 10% 5% 4%)",
  description:
    "Scorporo IVA 2026: calcolatore gratuito multi-aliquota (22%, 10%, 5%, 4%). Formula, coefficienti, esempi pratici e calcolo IVA inverso. Normativa DPR 633/1972.",
  alternates: {
    canonical: "/scorporo-iva",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/scorporo-iva",
    title: "Scorporo IVA 2026 | Calcolatore Gratis (22% 10% 5% 4%)",
    description:
      "Scorporo IVA 2026: calcolatore gratuito multi-aliquota (22%, 10%, 5%, 4%). Formula, coefficienti, esempi pratici e calcolo IVA inverso. Normativa DPR 633/1972.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Scorporo IVA 2026 — Calcolatore gratuito multi-aliquota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scorporo IVA 2026 | Calcolatore Gratis Multi-Aliquota",
    description:
      "Scorporo e calcolo IVA multi-aliquota (22%, 10%, 5%, 4%) con formula, coefficienti, esempi pratici e normativa DPR 633/1972.",
  },
};

const toolConfig: ToolConfig = {
  slug: "scorporo-iva",
  title: "Scorporo IVA 2026",
  shortTitle: "Scorporo IVA",
  icon: Percent,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Calcolatore multi-aliquota e guida completa",
  heroTitle: "Scorporo IVA 2026 — Calcolatore Online",
  heroDescription:
    "Calcola lo scorporo IVA online per tutte le aliquote (22%, 10%, 5%, 4%). Formula, coefficienti, esempi pratici, scorporo in fattura e per parcelle avvocato, split payment, reverse charge. Guida completa con normativa DPR 633/1972.",
  heroReference:
    "DPR 633/1972 (Testo Unico IVA) — Art. 13 (base imponibile), Art. 16 (aliquote), Art. 21 (fatturazione)",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale né fiscale.",
    "Dati aggiornati alla normativa vigente al 2026. Per casi specifici consultare il proprio commercialista o un consulente fiscale abilitato.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    {
      label: "Agenzia delle Entrate",
      url: "https://www.agenziaentrate.gov.it",
    },
    {
      label: "Gazzetta Ufficiale",
      url: "https://www.gazzettaufficiale.it",
    },
    {
      label: "MEF — Dipartimento Finanze",
      url: "https://www.finanze.gov.it",
    },
  ],
};

export default function ScorporoIvaPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ── JSON-LD: Article ── */}
      <JsonLd
        data={articleSchema({
          headline:
            "Scorporo IVA 2026: Guida Completa con Calcolatore Online Multi-Aliquota",
          description:
            "Guida completa allo scorporo IVA in Italia aggiornata al 2026: formula, coefficienti, aliquote 22/10/5/4%, esempi pratici, fattura, parcella avvocato, split payment, reverse charge, normativa DPR 633/1972.",
          path: "/scorporo-iva",
          datePublished: "2026-04-23",
          dateModified: "2026-04-23",
          image: HERO_IMG,
          sections: [
            "Calcolatore Scorporo IVA",
            "Cos'è lo Scorporo IVA",
            "Formula e Metodi di Calcolo",
            "Aliquote IVA 2026",
            "Scorporo IVA al 22%",
            "Scorporo IVA al 10%",
            "Scorporo IVA al 5%",
            "Scorporo IVA al 4%",
            "Scorporo in Fattura",
            "Scorporo Parcella Avvocato",
            "Casi Particolari (Split Payment, Reverse Charge, Forfettario)",
            "Scorporo IVA con Excel",
            "Storia delle Aliquote IVA",
            "Errori Comuni",
            "FAQ",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* ── JSON-LD: WebApplication ── */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Scorporo IVA 2026",
          description:
            "Calcolatore online gratuito per lo scorporo IVA: tutte le aliquote (22%, 10%, 5%, 4%) e calcolo inverso (aggiungi IVA). Multi-aliquota, formula automatica, risultato immediato.",
          path: "/scorporo-iva",
          applicationCategory: "FinanceApplication",
        })}
      />

      {/* ═══════════════════════════════════════════════════════════
          CALCOLATORE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="calcolatore"
        icon={Calculator}
        title="Calcolatore Scorporo IVA"
        subtitle="Tutte le aliquote IVA 2026 (22%, 10%, 5%, 4%) — scorporo e applicazione IVA"
      />
      <Calcolatore />

      {/* ═══════════════════════════════════════════════════════════
          COS'E LO SCORPORO IVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cose-scorporo-iva"
        icon={BookOpen}
        title="Cos'è lo Scorporo IVA"
        subtitle="Definizione, utilità pratica e sinonimi"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Lo <strong>scorporo dell'IVA</strong> — detto anche <strong>calcolo IVA
          inverso</strong> o <strong>calcolo IVA al contrario</strong> — è l'operazione
          aritmetica mediante la quale, partendo da un <strong>prezzo lordo</strong>{" "}
          (comprensivo di IVA), si estrae separatamente l'imponibile (base imponibile netta)
          e l'imposta sul valore aggiunto. È l'opposto del <em>calcolo IVA diretto</em>, in
          cui si parte dal netto per ottenere il totale con IVA. La disciplina dell'IVA è
          contenuta nel{" "}
          <InlineNormLink
            text="DPR 26 ottobre 1972, n. 633"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633"
          />{" "}
          (Testo Unico IVA), entrato in vigore il 1° gennaio 1973 in attuazione della{" "}
          <a
            href="https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32006L0112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
          >
            Direttiva 2006/112/CE
          </a>{" "}
          che armonizza il sistema IVA a livello europeo.
        </p>

        <p className="text-base leading-relaxed">
          L'articolo base per lo scorporo è l'
          <InlineNormLink
            text="art. 13 DPR 633/1972"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art13"
          />
          , che individua nella <strong>base imponibile</strong> il valore sul quale si
          applica l'imposta. Quando un importo è pattuito o indicato al lordo (ad esempio un
          prezzo al pubblico, un totale di scontrino, un corrispettivo concordato "tutto
          compreso"), lo scorporo permette di risalire alla base imponibile e all'importo
          esatto dell'IVA da indicare in fattura, come prescrive l'
          <InlineNormLink
            text="art. 21 DPR 633/1972"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art21"
          />
          .
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          A cosa serve lo scorporo IVA
        </h3>
        <BulletList
          items={[
            "Emettere una fattura a partire da uno scontrino elettronico (il cliente chiede fattura)",
            "Registrare correttamente gli acquisti nei registri IVA (imponibile e imposta separati)",
            "Verificare la correttezza di una fattura ricevuta",
            "Calcolare il compenso netto di un professionista a partire da un totale ivato",
            "Determinare la quota IVA per il versamento periodico (mensile o trimestrale)",
            "Calcolare il pro-rata di detraibilita in situazioni con operazioni esenti e imponibili",
            "Risalire al prezzo base in situazioni commerciali 'prezzo pieno IVA inclusa'",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Sinonimi e terminologia
        </h3>
        <p className="text-base leading-relaxed">
          Lo scorporo IVA è talvolta indicato con locuzioni equivalenti:{" "}
          <strong>storno IVA</strong>, <strong>IVA inversa</strong>, <strong>calcolo IVA
          al contrario</strong>, <strong>scorporo dell'imposta</strong>. Tecnicamente
          l'operazione è sempre la stessa: dividere il lordo per (1 + aliquota/100) per
          ottenere l'imponibile. Non va confuso con la <em>rivalsa IVA</em> (art. 18 DPR
          633/1972), che è l'obbligo di addebitare l'imposta al cessionario/committente,
          né con la <em>detrazione IVA</em> (art. 19), che consiste nel portare in
          detrazione l'IVA assolta sugli acquisti.
        </p>

        <AlertBox variant="info">
          <p>
            <strong>Operazione inversa dello scorporo:</strong> l'{" "}
            <strong>applicazione</strong> (o "aggiungere IVA") parte dal netto e calcola
            il lordo moltiplicando per (1 + aliquota/100). Il nostro calcolatore supporta
            entrambe le modalità.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FORMULA E METODI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="formula"
        icon={Sigma}
        title="Formula dello Scorporo IVA"
        subtitle="Tre metodi matematicamente equivalenti"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La formula generale dello scorporo IVA deriva direttamente dall'{" "}
          <InlineNormLink
            text="art. 13 DPR 633/1972"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art13"
          />
          : se chiamiamo <em>I</em> l'imponibile, <em>L</em> il lordo e <em>a</em>{" "}
          l'aliquota IVA in forma percentuale, vale la relazione L = I × (1 + a/100). Da
          questa si ricavano tre metodi di calcolo equivalenti.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Metodo 1 — Divisione semplificata (raccomandato)
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Imponibile = Lordo / (1 + Aliquota/100)
            <br />
            IVA = Lordo − Imponibile
          </p>
        </div>
        <p className="text-base leading-relaxed">
          È il metodo più rapido e usato nella pratica contabile. Si divide direttamente il
          lordo per il <strong>coefficiente</strong> (1 + aliquota decimale): 1,22 per il
          22%, 1,10 per il 10%, 1,05 per il 5%, 1,04 per il 4%. L'IVA si ottiene per
          differenza.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Metodo 2 — Proporzione centesimale
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            100 : (100 + Aliquota) = Imponibile : Lordo
            <br />
            Imponibile = (Lordo × 100) / (100 + Aliquota)
          </p>
        </div>
        <p className="text-base leading-relaxed">
          È il metodo matematicamente più rigoroso, equivalente al primo. Utile in contesti
          didattici e quando si lavora senza calcolatrice: ad esempio per IVA 22% si imposta
          la proporzione 100 : 122 = imponibile : lordo, che restituisce imponibile = lordo
          × 100 / 122, identica a lordo / 1,22.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Metodo 3 — Calcolo diretto dell'IVA
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            IVA = (Lordo × Aliquota) / (100 + Aliquota)
          </p>
        </div>
        <p className="text-base leading-relaxed">
          Esempio: con lordo 1.220 € e aliquota 22%, IVA = (1.220 × 22) / 122 = 26.840 /
          122 = <span className="font-mono">220 €</span>. L'imponibile si ottiene come
          differenza. Questo metodo è particolarmente usato nei software di ventilazione IVA
          per commercianti al dettaglio (art. 24 DPR 633/1972).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">
          Tabella coefficienti rapidi
        </h3>
        <LegalTable
          headers={[
            "Aliquota",
            "Coefficiente (divisore)",
            "Formula rapida imponibile",
            "Esempio (lordo 100 €)",
          ]}
          rows={ALIQUOTE_IVA.map((a) => [
            `${a.valore}%`,
            a.divisore.toFixed(2),
            `Lordo / ${a.divisore.toFixed(2)}`,
            `100 / ${a.divisore.toFixed(2)} = ${(100 / a.divisore).toFixed(2)} €`,
          ])}
        />

        <AlertBox variant="warning" title="Attenzione all'errore più comune">
          <p>
            Il divisore è <strong>1,22</strong> (uno virgola ventidue), NON 22 o 1,2.
            Dividere per 22 produce un risultato privo di senso (1.220 / 22 = 55,45 €).
            Il divisore corretto è sempre "1 più l'aliquota decimale".
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ALIQUOTE IVA 2026
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="aliquote-iva"
        icon={Percent}
        title="Aliquote IVA 2026"
        subtitle="Le quattro aliquote vigenti e le categorie merceologiche"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il sistema IVA italiano del 2026 prevede <strong>quattro aliquote</strong>{" "}
          ordinarie, stabilite dall'
          <InlineNormLink
            text="art. 16 DPR 633/1972"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art16"
          />{" "}
          e dalla <strong>Tabella A</strong> allegata al medesimo decreto. L'aliquota
          applicabile al singolo bene o servizio si determina in base alla categoria
          merceologica: per scorporare correttamente occorre prima identificare l'aliquota
          giusta. La stabilita del sistema delle aliquote, inalterato dal 2016 ad oggi, è
          un elemento di certezza importante per la gestione tributaria d'impresa.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art16">
          Art. 16 DPR 633/1972: «L'aliquota dell'imposta è stabilita nella misura del
          ventidue per cento della base imponibile. Essa è ridotta al quattro, al cinque e
          al dieci per cento per le operazioni che hanno per oggetto i beni e i servizi
          elencati nell'allegata tabella A.»
        </NormativaQuote>

        <LegalTable
          headers={[
            "Aliquota",
            "Tipo",
            "Tabella A",
            "Divisore",
            "Principali categorie",
          ]}
          rows={ALIQUOTE_IVA.map((a) => [
            `${a.valore}%`,
            a.tipo,
            a.tabella,
            a.divisore.toFixed(2),
            a.categorieTipiche.slice(0, 3).join("; ") + "…",
          ])}
        />

        <AlertBox variant="info">
          <p>
            Oltre alle quattro aliquote principali esistono <strong>aliquote
            speciali</strong> (2% per specifici servizi di trasporto urbano di rilevanza
            sociale; 9% per determinati beni alimentari agricoli) e le operazioni{" "}
            <strong>esenti</strong> (art. 10 DPR 633/1972) o <strong>non imponibili</strong>{" "}
            (artt. 8, 8-bis, 9), per le quali lo scorporo non si applica.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCORPORO 22%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="scorporo-22"
        icon={Percent}
        title="Scorporo IVA al 22%"
        subtitle="Aliquota ordinaria — divisore 1,22"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>aliquota ordinaria del 22%</strong> è l'aliquota residuale che si
          applica a tutti i beni e servizi non espressamente inclusi nelle aliquote
          agevolate della Tabella A. È vigente dal <strong>1° ottobre 2013</strong> per
          effetto della{" "}
          <InlineNormLink
            text="Legge di Stabilita 2013 (L. 228/2012)"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-24;228"
          />
          , che ha aumentato di un punto percentuale l'aliquota precedente del 21%
          (introdotta dal DL 138/2011 il 17 settembre 2011).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Formula scorporo 22%
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Imponibile = Lordo / 1,22
            <br />
            IVA = Lordo − Imponibile
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Esempi numerici verificati
        </h3>
        <LegalTable
          headers={["Totale lordo", "Imponibile netto", "IVA", "Verifica (Imp × 1,22)"]}
          rows={ESEMPI_22.map((e) => [
            e.lordo,
            e.imponibile,
            e.iva,
            `${(e.imponibile * 1.22).toFixed(2)} ✓`,
          ])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Quando si applica il 22%
        </h3>
        <BulletList items={ALIQUOTE_IVA[0].categorieTipiche} />

        <AlertBox variant="success">
          <p>
            <strong>Scorporo rapido 1.000 € al 22%:</strong> 1.000 / 1,22 ={" "}
            <span className="font-mono">819,67 € imponibile</span> + IVA{" "}
            <span className="font-mono">180,33 €</span>.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCORPORO 10%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="scorporo-10"
        icon={Percent}
        title="Scorporo IVA al 10%"
        subtitle="Aliquota ridotta — divisore 1,10"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>aliquota ridotta del 10%</strong> è disciplinata dall'art. 16 c.2 DPR
          633/1972 e dalla <strong>Tabella A Parte III</strong>. È stabile nel sistema
          tributario italiano da decenni e si applica a un ampio elenco di beni e servizi di
          rilevanza sociale: energia domestica, trasporti, medicinali da banco, ricettivita
          turistica, ristorazione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Formula scorporo 10%
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Imponibile = Lordo / 1,10
            <br />
            IVA = Lordo − Imponibile
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Esempi numerici
        </h3>
        <LegalTable
          headers={["Totale lordo", "Imponibile netto", "IVA"]}
          rows={ESEMPI_10.map((e) => [e.lordo, e.imponibile, e.iva])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Categorie tipiche (Tabella A Parte III)
        </h3>
        <BulletList items={ALIQUOTE_IVA[1].categorieTipiche} />

        <AlertBox variant="info">
          <p>
            Nel <strong>settore edilizio</strong> l'aliquota 10% si applica alle
            ristrutturazioni e manutenzioni ordinarie/straordinarie su immobili
            residenziali (n. 127-terdecies Tabella A Parte III), mentre per le nuove
            costruzioni si distinguono prima casa (4%), seconda casa non di lusso (10%) e
            altri immobili (22%).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCORPORO 5%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="scorporo-5"
        icon={Percent}
        title="Scorporo IVA al 5%"
        subtitle="Aliquota super-ridotta — divisore 1,05 (introdotta 2020)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>aliquota super-ridotta del 5%</strong> è la più recente del sistema
          italiano: è stata introdotta temporaneamente con il{" "}
          <InlineNormLink
            text="DL 34/2020"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2020-05-19;34"
          />{" "}
          durante l'emergenza sanitaria Covid-19 per dispositivi medici e DPI, poi resa{" "}
          <strong>strutturale</strong> dalla{" "}
          <InlineNormLink
            text="Legge di Bilancio 2021 (L. 178/2020, art. 1 c. 452-453)"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2020-12-30;178"
          />
          . Si trova elencata nella <strong>Tabella A Parte II-bis</strong> del DPR
          633/1972.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Formula scorporo 5%
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Imponibile = Lordo / 1,05
            <br />
            IVA = Lordo − Imponibile
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">Esempi numerici</h3>
        <LegalTable
          headers={["Totale lordo", "Imponibile netto", "IVA"]}
          rows={ESEMPI_5.map((e) => [e.lordo, e.imponibile, e.iva])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Categorie tipiche (Tabella A Parte II-bis)
        </h3>
        <BulletList items={ALIQUOTE_IVA[2].categorieTipiche} />

        <AlertBox variant="success" title="Conferma Agenzia delle Entrate 2025">
          <p>
            Con <strong>Risposta a Interpello n. 141 del 23 maggio 2025</strong>,
            l'Agenzia delle Entrate ha confermato che l'aliquota 5% per dispositivi medici e
            DPI continua ad applicarsi anche dopo la fine dell'emergenza sanitaria, purche
            sussistano i requisiti oggettivi di finalità sanitaria e la corretta
            classificazione merceologica (CND per i dispositivi medici).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCORPORO 4%
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="scorporo-4"
        icon={Percent}
        title="Scorporo IVA al 4%"
        subtitle="Aliquota minima — divisore 1,04"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<strong>aliquota minima del 4%</strong> è riservata ai beni di prima necessità
          elencati nella <strong>Tabella A Parte II</strong> del DPR 633/1972. È
          storicamente stabile e tutela il consumo di beni essenziali: alimentari di base,
          libri e periodici cartacei, giornali, ausili per disabili.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Formula scorporo 4%
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Imponibile = Lordo / 1,04
            <br />
            IVA = Lordo − Imponibile
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">Esempi numerici</h3>
        <LegalTable
          headers={["Totale lordo", "Imponibile netto", "IVA"]}
          rows={ESEMPI_4.map((e) => [e.lordo, e.imponibile, e.iva])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Categorie tipiche (Tabella A Parte II)
        </h3>
        <BulletList items={ALIQUOTE_IVA[3].categorieTipiche} />

        <AlertBox variant="info">
          <p>
            L'aliquota 4% si applica anche alla <strong>cessione di prima casa</strong>{" "}
            (non di lusso), purché l'acquirente dichiari la destinazione abitativa e rispetti
            i requisiti dei benefici "prima casa" (Tabella A Parte II n. 21). Per la
            seconda casa si applica il 10% e per gli immobili di lusso il 22%.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCORPORO IN FATTURA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="scorporo-fattura"
        icon={Receipt}
        title="Scorporo IVA in Fattura"
        subtitle="Fattura singola e multi-aliquota, arrotondamenti, scontrini"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'<InlineNormLink
            text="art. 21 DPR 633/1972"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art21"
          />{" "}
          impone che la fattura contenga, per ciascuna operazione imponibile,
          l'indicazione separata di <strong>imponibile</strong>, <strong>aliquota
          applicata</strong> e <strong>importo dell'imposta</strong>, con arrotondamento
          al centesimo di euro. Lo scorporo è quindi l'operazione necessaria ogni volta che
          si parte da un importo totale pattuito al lordo.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art21">
          Art. 21, c. 2 DPR 633/1972: «La fattura deve contenere [...] corrispettivi ed
          altri dati necessari per la determinazione della base imponibile, [...]
          aliquota, ammontare dell'imposta e dell'imponibile con arrotondamento al centesimo
          di euro.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Fattura a singola aliquota
        </h3>
        <p className="text-base leading-relaxed">
          È il caso più semplice: tutte le righe della fattura sono soggette alla medesima
          aliquota. Si scorpora il totale lordo con il divisore corrispondente e si indicano
          separatamente imponibile e IVA. Esempio: fattura lorda 1.220 € al 22% → imponibile
          1.000 €, IVA 220 €, totale 1.220 €.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Fattura multi-aliquota: scorporo riga per riga
        </h3>
        <p className="text-base leading-relaxed">
          Quando una fattura contiene beni/servizi soggetti ad aliquote diverse (es.
          ristoranti con somministrazione al 10% e bibite al 22%, cartolibreria con libri
          al 4% e cartoleria al 22%), lo scorporo <strong>deve essere effettuato riga per
          riga</strong>: ogni riga con la propria aliquota. Gli imponibili e le IVA si
          sommano separatamente. Esempio:
        </p>

        <LegalTable
          headers={["Riga", "Lordo", "Aliquota", "Divisore", "Imponibile", "IVA"]}
          rows={[
            ["Servizio al 22%", 800, "22%", "1,22", 655.74, 144.26],
            ["Bene al 10%", 200, "10%", "1,10", 181.82, 18.18],
            ["TOTALE", 1000, "—", "—", 837.56, 162.44],
          ]}
        />

        <AlertBox variant="warning" title="Arrotondamenti (centesimi ballerini)">
          <p>
            Gli arrotondamenti di ciascuna riga possono generare una discrepanza di ±0,01 €
            tra imponibile + IVA e totale. In questo caso si inserisce una{" "}
            <strong>riga di arrotondamento</strong> qualificata come non imponibile,
            ovvero una riga di sconto/abbuono di 0,01 €, per garantire la quadratura della
            fattura. È la prassi richiesta dall'art. 21 DPR 633/1972.
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Scontrino elettronico e fattura su corrispettivo
        </h3>
        <p className="text-base leading-relaxed">
          Dal 2020 il <strong>documento commerciale</strong> emesso da registratore
          telematico ha sostituito lo scontrino cartaceo. Non espone separatamente l'IVA.
          Se il cliente richiede fattura (c.d. "fattura su corrispettivo", tipo documento
          TD01), il commerciante deve scorporare l'IVA dal totale dello scontrino applicando
          l'aliquota pertinente al bene venduto. Le richieste devono essere soddisfatte
          entro 12 giorni dalla data dell'operazione, in linea con l'art. 21 DPR 633/1972.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCORPORO AVVOCATI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="scorporo-avvocati"
        icon={Scale}
        title="Scorporo IVA per Avvocati e Professionisti"
        subtitle="Parcella con CPA 4%, spese generali 15%, IVA 22%, ritenuta 20%"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>parcella dell'avvocato</strong> presenta una struttura complessa che
          richiede uno scorporo a più strati. Le voci obbligatorie sono: <strong>compenso
          professionale</strong> (base del calcolo), <strong>spese generali
          forfettarie 15%</strong> (
          <InlineNormLink
            text="art. 2 DM 55/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:ministero.giustizia:decreto:2014-03-10;55"
          />
          ), <strong>CPA 4%</strong> (
          <InlineNormLink
            text="art. 11 L. 576/1980"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:1980-09-20;576"
          />
          ), <strong>IVA 22%</strong> sulla somma (Compenso + Spese + CPA) e{" "}
          <strong>ritenuta d'acconto 20%</strong> su (Compenso + Spese), sottratta dal
          netto a pagare (
          <InlineNormLink
            text="art. 25 DPR 600/1973"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1973-09-29;600~art25"
          />
          ).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Formula composizione (netto → lordo)
        </h3>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Base IVA = Compenso × (1 + 0,15 + 0,04) = Compenso × 1,19
            <br />
            Totale ivato = Base IVA × 1,22 = Compenso × 1,4518
            <br />
            Ritenuta = (Compenso + Spese) × 0,20 = Compenso × 0,23
            <br />
            Netto a pagare = Totale ivato − Ritenuta = Compenso × 1,2218
          </p>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Scorporo inverso: dalla parcella al compenso
        </h3>
        <p className="text-base leading-relaxed">
          Per risalire al compenso base a partire da un totale ivato (senza ritenuta) si
          divide per <strong>1,4518</strong>. Se invece si parte dal netto a pagare
          (dopo ritenuta detratta), il divisore è <strong>1,2218</strong>.
        </p>

        <LegalTable
          headers={["Voce", "Formula", "Esempio su totale 2.440 €"]}
          rows={[
            ["Compenso", "Totale / 1,4518", "2.440 / 1,4518 = 1.680,67"],
            ["Spese generali (15%)", "Compenso × 0,15", "1.680,67 × 0,15 = 252,10"],
            ["CPA (4%)", "Compenso × 0,04", "1.680,67 × 0,04 = 67,23"],
            ["Base imponibile IVA", "Compenso + Spese + CPA", "2.000,00"],
            ["IVA (22%)", "Base × 0,22", "2.000,00 × 0,22 = 440,00"],
            ["Totale fattura", "Base + IVA", "2.440,00 ✓"],
          ]}
        />

        <AlertBox variant="info">
          <p>
            Per un calcolatore specifico di parcelle con regime forfettario, split payment
            PA e marca da bollo, vedi il nostro{" "}
            <a
              href="/calcolo-fattura-avvocato"
              className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
            >
              Calcolatore Fattura Avvocato
            </a>
            , che gestisce tutti i casi d'uso tipici delle fatture forensi incluso lo
            scorporo inverso avanzato.
          </p>
        </AlertBox>

        <AlertBox variant="warning">
          <p>
            <strong>Attenzione:</strong> la CPA 4% concorre alla base imponibile IVA (art.
            11 L. 576/1980), ma NON concorre alla base della ritenuta d'acconto. La ritenuta
            si calcola solo su Compenso + Spese Generali 15%.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CASI PARTICOLARI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="casi-particolari"
        icon={ListChecks}
        title="Casi Particolari"
        subtitle="Split payment, reverse charge, regime forfettario, ventilazione, operazioni esenti"
      />
      <div className="space-y-4">
        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Regime forfettario — lo scorporo non si applica
        </h3>
        <p className="text-base leading-relaxed">
          I contribuenti in <strong>regime forfettario</strong> (
          <InlineNormLink
            text="art. 1 c. 54-89 L. 190/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-23;190"
          />
          ) non sono soggetti IVA: non la addebitano in fattura né la detraggono sugli
          acquisti. Per loro lo scorporo IVA non si applica. Se ricevono una fattura da un
          fornitore IVA ordinario, registrano il costo al lordo e applicano il coefficiente
          di redditività previsto per la propria attività.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Split payment (scissione pagamenti) — art. 17-ter DPR 633/1972
        </h3>
        <p className="text-base leading-relaxed">
          Lo <strong>split payment</strong> si applica alle fatture emesse alla Pubblica
          Amministrazione (
          <InlineNormLink
            text="art. 17-ter DPR 633/1972"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art17ter"
          />
          ). Il fornitore emette fattura regolarmente con IVA esposta (procedura di
          scorporo identica a quella ordinaria), ma l'ente pubblico paga al fornitore solo
          l'imponibile e versa direttamente all'Erario l'IVA indicata. Gli avvocati e i
          professionisti soggetti a ritenuta d'acconto 20% sono esclusi dallo split payment
          dal 1° luglio 2017 (DL 50/2017, art. 1 c. 1).
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Reverse charge (inversione contabile) — art. 17 c. 5-7 DPR 633/1972
        </h3>
        <p className="text-base leading-relaxed">
          Nel <strong>reverse charge</strong> il cedente emette fattura{" "}
          <strong>senza IVA</strong>, indicando l'annotazione "inversione contabile".
          L'acquirente integra la fattura calcolando autonomamente l'imposta secondo
          l'aliquota applicabile e la registra sia fra le fatture emesse (attive, per il
          versamento) sia fra quelle ricevute (passive, per la detrazione). Settori tipici:
          edilizia (subappalti), cessione rottami, prestazioni di pulizia, servizi telematici
          intra-UE.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Ventilazione IVA (art. 24 c.3 DPR 633/1972)
        </h3>
        <p className="text-base leading-relaxed">
          La <strong>ventilazione</strong> è un metodo semplificato concesso a specifici
          commercianti al minuto (settori alimentare, tessile, igienico-personale)
          autorizzati a registrare i corrispettivi giornalieri in blocco e ripartirli a
          posteriori fra le aliquote in proporzione agli acquisti effettuati. Non è un
          classico scorporo riga-per-riga ma una ripartizione proporzionale, disciplinata
          dal DM 24 febbraio 1973.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Operazioni esenti e non imponibili
        </h3>
        <p className="text-base leading-relaxed">
          Per le <InlineNormLink
            text="operazioni esenti (art. 10 DPR 633/1972)"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633~art10"
          />{" "}
          — servizi finanziari, assicurativi, prestazioni sanitarie da soggetti autorizzati,
          operazioni immobiliari — e le <strong>operazioni non imponibili</strong> (artt.
          8, 8-bis, 9: esportazioni, servizi internazionali, naviglio e aviazione
          internazionali) lo scorporo non si applica perché l'IVA non è dovuta. Resta
          comunque obbligo di fatturazione con indicazione chiara della causale e del
          riferimento normativo dell'esenzione/non imponibilita.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Acquisti intracomunitari
        </h3>
        <p className="text-base leading-relaxed">
          Per gli <strong>acquisti intracomunitari di beni</strong> (art. 38 DL 331/1993) il
          cedente UE emette fattura senza IVA. L'acquirente italiano integra il documento
          calcolando autonomamente l'IVA italiana secondo l'aliquota applicabile alla
          categoria del bene. Lo scorporo classico non si applica; si tratta di
          "applicazione" dell'IVA a cura dell'acquirente.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SCORPORO IVA CON EXCEL
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="scorporo-excel"
        icon={FileSpreadsheet}
        title="Scorporo IVA con Excel"
        subtitle="Formule per foglio di calcolo (Excel, Google Sheets, LibreOffice)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          In Excel (o Google Sheets, o LibreOffice Calc) lo scorporo IVA si realizza con
          poche formule dirette. Assumiamo che la cella <code>A1</code> contenga il totale
          lordo:
        </p>

        <LegalTable
          headers={["Aliquota", "Formula Excel imponibile", "Formula Excel IVA"]}
          rows={[
            ["22%", "=A1/1,22", "=A1-A1/1,22"],
            ["10%", "=A1/1,10", "=A1-A1/1,10"],
            ["5%", "=A1/1,05", "=A1-A1/1,05"],
            ["4%", "=A1/1,04", "=A1-A1/1,04"],
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Formula generica (con aliquota variabile)
        </h3>
        <p className="text-base leading-relaxed">
          Se si vuole gestire l'aliquota come parametro (cella <code>B1</code>, espressa come
          numero, es. 22, 10, 5, 4):
        </p>
        <div
          className="bg-[oklch(0.98_0.005_85)] border border-border p-5"
          style={{ borderRadius: "0.375rem" }}
        >
          <p className="font-mono text-sm leading-loose text-[oklch(0.25_0.04_250)]">
            Imponibile: =A1/(1+B1/100)
            <br />
            IVA: =A1-A1/(1+B1/100)
            <br />
            IVA (formula diretta): =A1*B1/(100+B1)
          </p>
        </div>

        <AlertBox variant="info">
          <p>
            <strong>Nota decimali:</strong> nelle versioni italiane di Excel si usa la
            virgola come separatore decimale (<code>1,22</code>), nelle versioni
            internazionali il punto (<code>1.22</code>). Adattare in base alla propria
            impostazione regionale. Per arrotondare al centesimo:{" "}
            <code>=ARROTONDA(A1/1,22; 2)</code>.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          STORIA ALIQUOTE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="storia-aliquote"
        icon={History}
        title="Storia delle Aliquote IVA in Italia (1973-2026)"
        subtitle="Evoluzione dell'aliquota ordinaria dalla introduzione ad oggi"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L'IVA è stata introdotta in Italia il <strong>1° gennaio 1973</strong> con
          l'entrata in vigore del DPR 633/1972, in sostituzione della previgente imposta
          generale sulle vendite. L'aliquota ordinaria iniziale era del <strong>12%</strong>,
          assai inferiore a quella attuale del 22%. La storia successiva dell'aliquota
          ordinaria riflette i cicli economici italiani e le politiche fiscali di
          stabilizzazione del bilancio pubblico.
        </p>

        <LegalTable
          headers={["Anno", "Aliquota ordinaria", "Variazione", "Norma di riferimento"]}
          rows={STORIA_ALIQUOTE.map((s) => [
            s.anno,
            s.aliquotaOrdinaria,
            s.variazione,
            s.norma,
          ])}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Le clausole di salvaguardia
        </h3>
        <p className="text-base leading-relaxed">
          Fra il 2013 e il 2016 erano previste <strong>clausole di salvaguardia</strong>{" "}
          che avrebbero fatto scattare aumenti automatici dell'IVA ordinaria negli
          esercizi successivi, portandola al 24% nel 2017 e al 25% nel 2018. Le successive
          leggi di bilancio hanno <strong>disattivato periodicamente</strong> tali clausole
          e dal 2016 le hanno definitivamente abrogate, stabilizzando l'aliquota ordinaria al
          22% fino ad oggi.
        </p>

        <AlertBox variant="success">
          <p>
            L'aliquota ordinaria IVA italiana è stabile al <strong>22% dal 1° ottobre
            2013</strong>, cioè da oltre dodici anni. È uno dei più lunghi periodi di
            stabilita dell'aliquota nella storia dell'IVA italiana.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ERRORI COMUNI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="errori-comuni"
        icon={AlertTriangle}
        title="Errori Comuni nello Scorporo IVA"
        subtitle="Gli sbagli tipici e come evitarli"
      />
      <div className="space-y-4">
        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 1 — Dividere per l'aliquota invece che per il coefficiente
        </h3>
        <p className="text-base leading-relaxed">
          Tentare di scorporare 1.220 € dividendo per 22 produce 55,45 €, un risultato
          privo di senso fiscale. Il divisore corretto per l'aliquota 22% è{" "}
          <strong>1,22</strong> (uno più l'aliquota decimale), non 22.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 2 — Sottrarre direttamente la percentuale
        </h3>
        <p className="text-base leading-relaxed">
          Calcolare 1.000 − 22% = 780 € è un errore. L'IVA è calcolata sulla base
          imponibile, non sul lordo. Lo scorporo corretto di 1.000 € al 22% restituisce
          imponibile <strong>819,67 €</strong> + IVA <strong>180,33 €</strong>, e la somma
          fa 1.000 esatti.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 3 — Moltiplicare il lordo per 1,22 (IVA su IVA)
        </h3>
        <p className="text-base leading-relaxed">
          Moltiplicare un importo già comprensivo di IVA per 1,22 è un errore: si applica
          una seconda IVA su un lordo. L'applicazione di IVA (moltiplicare per 1,22) si fa
          solo al netto.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 4 — Dimenticare gli arrotondamenti in fattura multi-aliquota
        </h3>
        <p className="text-base leading-relaxed">
          Nelle fatture con più aliquote, gli arrotondamenti al centesimo di ciascuna riga
          possono provocare una differenza di ±0,01 € fra (imponibile + IVA) e il totale
          atteso. Occorre inserire una riga di arrotondamento non imponibile per quadrare
          il documento.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">
          Errore 5 — Applicare lo scorporo al regime forfettario
        </h3>
        <p className="text-base leading-relaxed">
          I forfettari non sono soggetti IVA: non la addebitano né la scorporano. Applicare
          lo scorporo a un importo pagato a un forfettario è un errore di registrazione
          contabile.
        </p>
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
          Le informazioni contenute in questa guida sono tratte esclusivamente dalle
          seguenti fonti istituzionali italiane ed europee:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Normattiva.it</strong> — Testo consolidato e vigente di DPR 633/1972,
              DPR 600/1973, DM 55/2014, L. 247/2012, L. 190/2014, L. 576/1980, L. 178/2020,
              L. 228/2012, DL 138/2011, DL 34/2020:{" "}
              <a
                href="https://www.normattiva.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                normattiva.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Agenzia delle Entrate</strong> — Circolari, risposte a interpelli
              (in particolare n. 141/2025 su aliquota 5%), documento commerciale e
              fatturazione elettronica:{" "}
              <a
                href="https://www.agenziaentrate.gov.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                agenziaentrate.gov.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Gazzetta Ufficiale</strong> — Pubblicazione originale delle leggi e
              dei decreti citati:{" "}
              <a
                href="https://www.gazzettaufficiale.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                gazzettaufficiale.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Ministero dell'Economia e delle Finanze (MEF)</strong> — Dipartimento
              delle Finanze, documenti di prassi:{" "}
              <a
                href="https://www.finanze.gov.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                finanze.gov.it
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>EUR-Lex</strong> — Direttiva 2006/112/CE (sistema IVA UE) e Direttiva
              2022/542/UE (aggiornamento aliquote ridotte):{" "}
              <a
                href="https://eur-lex.europa.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                eur-lex.europa.eu
              </a>
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-[oklch(0.75_0.10_85)]">•</span>
            <span>
              <strong>Cassa Nazionale Forense</strong> — Regolamento contributo integrativo
              CPA 4% per avvocati:{" "}
              <a
                href="https://www.cassaforense.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]"
              >
                cassaforense.it
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
        subtitle="Risposte alle domande più comuni sullo scorporo IVA"
      />
      <FAQ items={faqData} />

      {/* ═══════════════════════════════════════════════════════════
          NORMATIVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="normativa"
        icon={Landmark}
        title="Normativa di Riferimento"
        subtitle="Riferimenti normativi nazionali ed europei"
      />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}
