import {
  FileSpreadsheet,
  BookOpen,
  HelpCircle,
  Calculator,
  Briefcase,
  ShieldCheck,
  Code2,
  Tags,
  CreditCard,
  Landmark,
  Scale,
  Globe2,
  FileText,
  RefreshCcw,
  Send,
  Archive,
  AlertTriangle,
  CalendarClock,
  XCircle,
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
import Calcolatore from "@/components/fattura-elettronica-avvocati/Calcolatore";
import {
  sections,
  normativaRiferimento,
  codiciTD,
  codiciN,
  codiciMP,
} from "@/data/fattura-elettronica-avvocati/fatturaElettronicaData";
import { faqData } from "@/data/fattura-elettronica-avvocati/faqData";
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
  title: {
    absolute: "Fattura Elettronica Avvocati 2026 — Calcolatore Gratis",
  },
  description:
    "Fattura elettronica avvocati 2026: calcolatore parcella, anteprima XML SDI, codici TD/N/MP, regime forfettario e gratuito patrocinio. Guida completa.",
  alternates: {
    canonical: "/fattura-elettronica-avvocati",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/fattura-elettronica-avvocati",
    title: "Fattura Elettronica Avvocati 2026 — Calcolatore Gratis",
    description:
      "Calcolatore parcella avvocato + anteprima XML SDI, codici TD/N/MP, regime forfettario, gratuito patrocinio. Aggiornato tracciato 1.9.1.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Fattura Elettronica Avvocati 2026 — calcolatore e guida completa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fattura Elettronica Avvocati 2026 — Calcolatore Gratis",
    description:
      "Calcolatore parcella + anteprima XML SDI, codici TD/N/MP, regime forfettario, gratuito patrocinio. Tracciato 1.9.1.",
  },
};

const toolConfig: ToolConfig = {
  slug: "fattura-elettronica-avvocati",
  title: "Fattura Elettronica Avvocati 2026",
  shortTitle: "Fattura Elettronica",
  icon: FileSpreadsheet,
  updatedDate: "Aggiornato al 2026",
  heroImage: HERO_IMG,
  heroImageAlt:
    "Fattura Elettronica Avvocati 2026 — guida completa con calcolatore parcella, anteprima XML SDI e codici TD/N/MP",
  heroEyebrow: "Guida Completa + Calcolatore Parcella",
  heroTitle: "Fattura Elettronica Avvocati 2026",
  heroDescription:
    "Guida completa alla fattura elettronica per avvocati: calcolatore parcella con anteprima dei campi XML SDI, codici TD/N/MP, regime forfettario, gratuito patrocinio e novità del tracciato 1.9.1 in vigore dal 15 maggio 2026.",
  heroReference:
    "DPR 633/72 (IVA) — D.Lgs. 127/2015 (FE tra privati) — L. 247/2012 art. 13 (spese gen. 15%) — L. 576/1980 art. 11 (CPA 4%) — D.Lgs. 87/2024 (sanzioni)",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale né fiscale.",
    "Per casi specifici (gratuito patrocinio, fatturazione estera, casi particolari di reverse charge) consultare il proprio commercialista o l'Ordine degli Avvocati di appartenenza.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Agenzia delle Entrate — Portale FE", url: "https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica" },
    { label: "Cassa Forense", url: "https://www.cassaforense.it" },
    { label: "Consiglio Nazionale Forense", url: "https://www.consiglionazionaleforense.it" },
    { label: "IndicePA", url: "https://www.indicepa.gov.it" },
  ],
};

export default function FatturaElettronicaAvvocatiPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* JSON-LD: Article */}
      <JsonLd
        data={articleSchema({
          headline:
            "Fattura Elettronica Avvocati 2026: Guida Completa con Calcolatore Parcella e Anteprima XML SDI",
          description:
            "Guida completa alla fattura elettronica per avvocati nel 2026: obbligo per ordinari e forfettari, struttura tracciato XML 1.9.1, codici TD/N/MP, gratuito patrocinio, sanzioni post-D.Lgs. 87/2024.",
          path: "/fattura-elettronica-avvocati",
          datePublished: "2026-05-22",
          dateModified: "2026-05-22",
          image: HERO_IMG,
          sections: [
            "Calcolatore Parcella",
            "Obbligo e Soggetti",
            "Regime Forfettario",
            "Come si Compila",
            "Codici Tipo Documento (TD)",
            "Codici Natura IVA (N)",
            "Codici Modalità Pagamento (MP)",
            "Fatturazione alla PA",
            "Gratuito Patrocinio",
            "Cliente Estero",
            "Pro-forma e Avviso di Parcella",
            "Nota di Credito",
            "Trasmissione tramite SDI",
            "Conservazione",
            "Sanzioni",
            "Aggiornamenti 2026",
            "Errori Comuni",
            "FAQ",
            "Normativa",
          ],
        })}
      />

      {/* JSON-LD: WebApplication */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Fattura Elettronica Avvocato 2026",
          description:
            "Calcolatore parcella avvocato con anteprima XML SDI: regime ordinario e forfettario, codici TD/N/MP, CPA, IVA, ritenuta, bollo.",
          path: "/fattura-elettronica-avvocati",
          applicationCategory: "FinanceApplication",
          featureList: [
            "Calcolo parcella regime ordinario e forfettario",
            "Anteprima campi XML SDI",
            "Suggerimenti automatici TD, N, MP",
            "Diciture obbligatorie generate automaticamente",
            "Aggiornato al tracciato 1.9.1 (15/05/2026)",
          ],
        })}
      />

      {/* ═══════════════════════════════════════════════════════════
          CALCOLATORE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="calcolatore"
        icon={Calculator}
        title="Calcolatore Parcella → Fattura Elettronica"
        subtitle="Calcolo importi, anteprima XML SDI e diciture"
      />
      <Calcolatore />

      {/* ═══════════════════════════════════════════════════════════
          OBBLIGO E SOGGETTI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="obbligo"
        icon={Briefcase}
        title="Obbligo di Fattura Elettronica per Avvocati"
        subtitle="Chi deve emettere, evoluzione 2014-2026"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Nel 2026 l'<strong>obbligo di fattura elettronica</strong> riguarda <strong>tutti gli avvocati</strong>{" "}
          titolari di partita IVA stabiliti in Italia, indipendentemente dal regime fiscale adottato. Gli avvocati
          in regime ordinario sono soggetti all'obbligo dal 1° gennaio 2019 (
          <InlineNormLink
            text="art. 1 c. 909 L. 205/2017"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-12-27;205"
          />), mentre per gli avvocati in regime forfettario l'estensione è stata graduale: dal 1° luglio 2022
          per chi aveva superato 25.000 € di compensi nel 2021, e dal 1° gennaio 2024 in modo generalizzato per
          tutti i forfettari ai sensi dell'
          <InlineNormLink
            text="art. 18 D.L. 36/2022"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2022-04-30;36"
          />.
        </p>
        <p className="text-base leading-relaxed">
          L'obbligo riguarda ogni tipologia di cliente: imprese (B2B), Pubbliche Amministrazioni
          (Ministero della Giustizia, INPS, INAIL, Comuni, ASL), privati cittadini (B2C) e soggetti esteri.
          La fattura va emessa esclusivamente in formato <strong>XML</strong> e trasmessa al{" "}
          <strong>Sistema di Interscambio (SDI)</strong> gestito dall'Agenzia delle Entrate tramite Sogei.
          Le fatture cartacee non hanno alcuna rilevanza fiscale e il committente non può detrarre l'IVA
          su una fattura non emessa elettronicamente.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633">
          Art. 21 c. 4 DPR 633/72: «La fattura è emessa entro dodici giorni dall'effettuazione
          dell'operazione determinata ai sensi dell'articolo 6.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">Evoluzione storica dell'obbligo</h3>
        <LegalTable
          headers={["Data", "Soggetti coinvolti", "Norma"]}
          rows={[
            ["6 giugno 2014", "FE obbligatoria verso Ministeri, Agenzie fiscali, enti previdenziali nazionali", "D.L. 66/2014"],
            ["31 marzo 2015", "FE estesa a tutte le amministrazioni centrali e locali", "D.L. 66/2014 art. 25"],
            ["1° gennaio 2019", "FE obbligatoria per tutti i soggetti IVA (avvocati in regime ordinario)", "L. 205/2017 art. 1 c. 909"],
            ["14 luglio 2018", "Split payment abolito per professionisti soggetti a ritenuta", "D.L. 87/2018 art. 12"],
            ["1° luglio 2022", "FE estesa ai forfettari con compensi 2021 > 25.000 €", "D.L. 36/2022 art. 18"],
            ["1° gennaio 2024", "FE estesa a TUTTI i forfettari (anche sotto 25.000 €)", "D.L. 36/2022 art. 18"],
            ["1° settembre 2024", "Nuovo sistema sanzionatorio: riduzione al 70% imposta (era 90-180%)", "D.Lgs. 87/2024"],
            ["15 maggio 2026", "Obbligatorio tracciato XML versione 1.9.1", "Provv. AdE 89757/2018"],
          ]}
        />

        <AlertBox variant="info" title="Esoneri residuali">
          <p className="text-sm">
            Restano esonerati dall'obbligo di fatturazione elettronica soltanto i contribuenti in
            regime di vantaggio ex art. 27 cc. 1 e 2 D.L. 98/2011 (regime ormai marginale) e alcuni
            soggetti che trasmettono dati al Sistema Tessera Sanitaria per tutela della privacy.
            Per l'avvocato non esiste praticamente alcun esonero.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          REGIME FORFETTARIO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="forfettario"
        icon={ShieldCheck}
        title="Avvocati in Regime Forfettario"
        subtitle="Fattura senza IVA, senza ritenuta, codice N2.2"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il regime forfettario per gli avvocati è disciplinato dall'
          <InlineNormLink
            text="art. 1, commi 54-89, L. 190/2014"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-27;190"
          />. Dal 1° gennaio 2024 l'obbligo di fatturazione elettronica è esteso a tutti i forfettari,
          indipendentemente dall'ammontare dei compensi percepiti nell'anno precedente. Le fatture
          dell'avvocato forfettario presentano peculiarità importanti rispetto al regime ordinario.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Caratteristiche della fattura forfettario</h3>
        <BulletList
          items={[
            "NESSUNA IVA: l'aliquota IVA non si applica, in fattura va indicato il codice natura N2.2 (operazioni non soggette - altri casi)",
            "NESSUNA RITENUTA: il cliente non applica la ritenuta d'acconto del 20% (art. 1 c. 67 L. 190/2014). L'avvocato deve indicare in fattura la dicitura di esonero",
            "SI CPA 4%: il contributo integrativo Cassa Forense si applica normalmente (volume d'affari IVA include anche le operazioni non soggette)",
            "SI Spese Generali 15%: si calcolano sul compenso, come nel regime ordinario (art. 13 c. 10 L. 247/2012)",
            "SI Marca da bollo €2: se la fattura supera €77,47 senza IVA si applica l'imposta di bollo virtuale (art. 13 Tariffa DPR 642/72)",
            "Dicitura obbligatoria: «Operazione non soggetta a IVA ex art. 1, commi 54-89, L. 190/2014 - Regime forfettario»",
          ]}
        />

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2014-12-27;190">
          Art. 1 c. 67 L. 190/2014: «I ricavi e i compensi percepiti dai contribuenti che applicano
          il regime forfetario non sono assoggettati a ritenuta d'acconto da parte del sostituto
          d'imposta. A tale fine, i contribuenti rilasciano un'apposita dichiarazione dal quale
          risulti che il reddito cui le somme afferiscono è soggetto ad imposta sostitutiva.»
        </NormativaQuote>

        <AlertBox variant="warning" title="Attenzione al bollo riaddebitato">
          <p className="text-sm">
            Secondo la <strong>Risposta dell'Agenzia delle Entrate n. 428/2022</strong>, il bollo
            riaddebitato al cliente dall'avvocato forfettario è considerato <strong>ricavo</strong> che
            concorre alla determinazione del reddito imponibile e al rispetto del limite di
            85.000 € per la permanenza nel regime. Su tale importo si applica il coefficiente di redditività
            del 78% (per gli avvocati) e la CPA del 4%. Conviene quindi valutare se non riaddebitare il bollo.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          COME SI COMPILA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="compilazione"
        icon={Code2}
        title="Come si Compila la Fattura Elettronica"
        subtitle="Struttura XML 1.9.1, sezioni e campi obbligatori"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La fattura elettronica è un documento in formato XML che rispetta uno schema definito dall'Agenzia
          delle Entrate nel <InlineNormLink text="Provvedimento n. 89757 del 30 aprile 2018" url="https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica" />{" "}
          e successivi aggiornamenti. Dal 15 maggio 2026 è obbligatorio il <strong>tracciato versione 1.9.1</strong>:
          il SDI scarta automaticamente le fatture predisposte con tracciato precedente.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Struttura del file XML</h3>
        <p className="text-base leading-relaxed">
          Il file XML è composto da un elemento radice <code className="bg-gray-100 px-1.5 py-0.5 text-xs font-mono">FatturaElettronica</code> che contiene:
        </p>
        <BulletList
          items={[
            "FatturaElettronicaHeader: dati anagrafici e di trasmissione (DatiTrasmissione, CedentePrestatore, CessionarioCommittente)",
            "FatturaElettronicaBody: dati economici (DatiGenerali, DatiBeniServizi, DatiCassaPrevidenziale, DatiRitenuta, DatiBollo, DatiPagamento)",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Campi DatiTrasmissione</h3>
        <p className="text-base leading-relaxed">
          La sezione DatiTrasmissione contiene le informazioni necessarie al SDI per identificare mittente e
          destinatario:
        </p>
        <LegalTable
          headers={["Campo XML", "Descrizione", "Esempio"]}
          rows={[
            ["IdTrasmittente", "Codice fiscale/P.IVA di chi trasmette (avvocato o intermediario)", "IT12345678901"],
            ["ProgressivoInvio", "Identificativo univoco del file trasmesso (max 5 caratteri)", "00001"],
            ["FormatoTrasmissione", "FPR12 per fatture ordinarie", "FPR12"],
            ["CodiceDestinatario", "Codice SDI a 7 caratteri o 0000000/XXXXXXX", "M5UXCR1"],
            ["PECDestinatario", "Indirizzo PEC alternativo (se CodiceDestinatario = 0000000)", "studio@pec.it"],
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">Campi DatiBeniServizi (parcella)</h3>
        <p className="text-base leading-relaxed">
          La sezione DatiBeniServizi contiene le voci della parcella: descrizione della prestazione, quantità,
          prezzo unitario, aliquota IVA o codice natura. Per l'avvocato si inseriscono le seguenti voci come
          righe DettaglioLinee separate:
        </p>
        <BulletList
          items={[
            "Riga 1: Compenso professionale (descrizione + importo + aliquota IVA 22% o natura N2.2)",
            "Riga 2: Spese generali forfettarie 15% ex art. 13 c. 10 L. 247/2012 (stessa aliquota IVA)",
            "Riga 3: Spese imponibili IVA (es. trasferte documentate, perizie - stessa aliquota IVA)",
            "Riga 4: Anticipazioni ex art. 15 DPR 633/72 con codice natura N1 (contributo unificato, marche, diritti copia)",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">Campo DatiCassaPrevidenziale</h3>
        <p className="text-base leading-relaxed">
          Per l'avvocato il TipoCassa è <strong>TC02</strong> (Cassa Nazionale Previdenza e Assistenza Forense),
          l'AlCassa è 4,00, e l'ImportoContributoCassa è il 4% sull'imponibile previdenziale (compenso +
          spese generali + spese imponibili). Il flag ContributoCassaInvariato indica se il contributo concorre
          all'imponibile IVA: <strong>per gli avvocati va sempre incluso</strong>, perché la CPA fa parte della
          base imponibile IVA.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CODICI TIPO DOCUMENTO (TD)
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="tipi-documento"
        icon={Tags}
        title="Codici Tipo Documento (TD) per l'Avvocato"
        subtitle="Tabella completa TD01-TD28 con uso pratico"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il campo <code className="bg-gray-100 px-1.5 py-0.5 text-xs font-mono">TipoDocumento</code> nel
          tracciato XML identifica la natura del documento trasmesso al SDI. Per l'avvocato, il codice più
          rilevante è <strong>TD01 — Fattura</strong>, oggi raccomandato per tutte le prestazioni professionali.
          Il codice <strong>TD06 — Parcella</strong>, storicamente utilizzato dai professionisti, è ancora ammesso
          ma di uso decrescente nella prassi (ai fini fiscali è equivalente).
        </p>

        <div className="bg-white border border-border overflow-hidden" style={{ borderRadius: "0.375rem" }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[oklch(0.25_0.04_250)] text-white">
                <th className="px-4 py-3 text-left font-medium">Codice</th>
                <th className="px-4 py-3 text-left font-medium">Descrizione</th>
                <th className="px-4 py-3 text-left font-medium">Uso per l'avvocato</th>
              </tr>
            </thead>
            <tbody>
              {codiciTD.map((td) => (
                <tr key={td.codice} className={`border-b border-gray-100 last:border-0 ${td.rilevanza === "alta" ? "bg-[oklch(0.75_0.10_85)]/8" : ""}`}>
                  <td className="px-4 py-2.5 font-mono font-semibold text-[oklch(0.25_0.04_250)]">{td.codice}</td>
                  <td className="px-4 py-2.5 text-[oklch(0.25_0.04_250)]">{td.descrizione}</td>
                  <td className="px-4 py-2.5 text-sm text-gray-700">{td.usoAvvocato}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <AlertBox variant="info" title="TD01 vs TD06">
          <p className="text-sm">
            Entrambi i codici sono accettati dal Sistema di Interscambio per le prestazioni professionali
            dell'avvocato. Nella prassi <strong>contemporanea</strong>, TD01 è il codice raccomandato per
            uniformità con il resto del sistema, mentre TD06 mantiene una valenza più "storica" legata
            alla figura del libero professionista. Ai fini fiscali sono equivalenti; verifica le impostazioni
            del tuo gestionale.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CODICI NATURA IVA (N)
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="natura-iva"
        icon={Scale}
        title="Codici Natura IVA (N) per l'Avvocato"
        subtitle="Quando applicare N1, N2.2, N6.9, N7"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il campo <code className="bg-gray-100 px-1.5 py-0.5 text-xs font-mono">Natura</code> identifica la
          motivazione per la quale non è stata applicata l'IVA nella fattura. Per l'avvocato i codici più
          rilevanti sono <strong>N1</strong> (anticipazioni in nome e per conto del cliente),{" "}
          <strong>N2.2</strong> (regime forfettario) e <strong>N6.9</strong> (reverse charge per cliente UE B2B).
          L'errato utilizzo può comportare contestazioni e sanzioni ridotte al 5% dei corrispettivi non
          documentati (D.Lgs. 87/2024).
        </p>

        <div className="bg-white border border-border overflow-hidden" style={{ borderRadius: "0.375rem" }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[oklch(0.25_0.04_250)] text-white">
                <th className="px-4 py-3 text-left font-medium">Codice</th>
                <th className="px-4 py-3 text-left font-medium">Descrizione</th>
                <th className="px-4 py-3 text-left font-medium">Uso per l'avvocato</th>
              </tr>
            </thead>
            <tbody>
              {codiciN.map((n) => (
                <tr key={n.codice} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-2.5 font-mono font-semibold text-[oklch(0.25_0.04_250)]">{n.codice}</td>
                  <td className="px-4 py-2.5 text-[oklch(0.25_0.04_250)]">
                    {n.descrizione}
                    <div className="text-xs text-gray-500 mt-0.5">{n.riferimentoNormativo}</div>
                  </td>
                  <td className="px-4 py-2.5 text-sm text-gray-700">{n.usoAvvocato}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-6">Il codice N1 per le anticipazioni</h3>
        <p className="text-base leading-relaxed">
          Le anticipazioni in nome e per conto del cliente — contributo unificato, marche da bollo per CU,
          diritti di copia, spese di notifica — sono escluse dalla base imponibile IVA ai sensi dell'
          <InlineNormLink
            text="art. 15, comma 1, n. 3, DPR 633/72"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633"
          />. Per fruire dell'esclusione devono ricorrere tre condizioni cumulative:
        </p>
        <BulletList
          items={[
            "Le spese devono essere anticipate IN NOME del cliente (ricevute intestate al cliente)",
            "Le spese devono essere anticipate PER CONTO del cliente (collegate alla prestazione)",
            "Le spese devono essere DOCUMENTATE con ricevute, fatture o quietanze",
          ]}
        />
        <p className="text-base leading-relaxed">
          La <strong>Corte di Cassazione</strong>, con la sentenza n. 1985/2025, ha chiarito che le spese di
          viaggio sostenute dall'avvocato per recarsi in sede giudiziaria, se non espressamente richieste dal
          cliente, NON sono anticipazioni ex art. 15 ma rientrano nelle <em>spese generali</em> del
          professionista, soggette quindi a IVA, CPA e ritenuta.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CODICI MODALITÀ PAGAMENTO (MP)
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="modalita-pagamento"
        icon={CreditCard}
        title="Codici Modalità Pagamento (MP)"
        subtitle="MP05 bonifico, MP23 PagoPA, MP08 carta"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il campo <code className="bg-gray-100 px-1.5 py-0.5 text-xs font-mono">ModalitaPagamento</code> nel
          blocco DatiPagamento identifica la modalità con cui avviene il pagamento. Per l'avvocato i codici
          più frequenti sono <strong>MP05 — Bonifico</strong> (il più utilizzato per parcelle professionali),
          <strong> MP08 — Carta di pagamento</strong> e <strong>MP23 — PagoPA</strong> (obbligatorio per i
          pagamenti dalla Pubblica Amministrazione, gratuito patrocinio).
        </p>

        <div className="bg-white border border-border overflow-hidden" style={{ borderRadius: "0.375rem" }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[oklch(0.25_0.04_250)] text-white">
                <th className="px-4 py-3 text-left font-medium">Codice</th>
                <th className="px-4 py-3 text-left font-medium">Descrizione</th>
                <th className="px-4 py-3 text-left font-medium">Uso per l'avvocato</th>
              </tr>
            </thead>
            <tbody>
              {codiciMP.map((mp) => (
                <tr key={mp.codice} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-2.5 font-mono font-semibold text-[oklch(0.25_0.04_250)]">{mp.codice}</td>
                  <td className="px-4 py-2.5 text-[oklch(0.25_0.04_250)]">{mp.descrizione}</td>
                  <td className="px-4 py-2.5 text-sm text-gray-700">{mp.usoAvvocato}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FATTURAZIONE ALLA PA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fatturazione-pa"
        icon={Landmark}
        title="Fatturazione alla Pubblica Amministrazione"
        subtitle="Split payment ABOLITO dal 14/07/2018"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Una delle <strong>novità più importanti</strong> per gli avvocati è la <strong>completa abolizione
          dello split payment</strong> per i compensi professionali assoggettati a ritenuta. La modifica è in
          vigore dal <strong>14 luglio 2018</strong>: l'
          <InlineNormLink
            text="art. 12 del D.L. 87/2018"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2018-07-12;87"
          />{" "}
          (Decreto Dignità) ha introdotto il comma 1-sexies all'art. 17-ter DPR 633/72.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633">
          Art. 17-ter, c. 1-sexies, DPR 633/72: «Le disposizioni del presente articolo non si applicano ai
          compensi per prestazioni di servizi assoggettati a ritenute alla fonte a titolo di imposta sul
          reddito o a titolo di acconto.»
        </NormativaQuote>

        <p className="text-base leading-relaxed">
          Nel 2026 quindi l'avvocato che fattura a Ministeri (compreso il <strong>Ministero della
          Giustizia</strong> per il gratuito patrocinio), INPS, INAIL, Comuni, ASL, Università statali, società
          controllate dalla PA o quotate FTSE MIB applica <strong>IVA 22% ordinaria</strong> che incassa
          direttamente. Il meccanismo della scissione dei pagamenti NON si applica.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Compilazione della fattura PA</h3>
        <BulletList
          items={[
            "TipoDocumento: TD01 (Fattura)",
            "CodiceDestinatario: codice IPA dell'ufficio specifico (reperibile su indicepa.gov.it)",
            "TipoCassa: TC02 (Cassa Nazionale Previdenza e Assistenza Forense)",
            "EsigibilitaIVA: 'I' (immediata) o 'D' (differita) — MAI 'S' (scissione dei pagamenti)",
            "DatiRitenuta: TipoRitenuta RT02, aliquota 20% (PA è sostituto d'imposta)",
            "ModalitaPagamento: MP05 (bonifico) o MP23 (PagoPA) secondo procedura dell'ente",
            "Dicitura facoltativa ma raccomandata: «Operazione non soggetta a scissione dei pagamenti ex art. 17-ter c. 1-sexies DPR 633/72»",
          ]}
        />

        <AlertBox variant="success" title="Vantaggio operativo dell'abolizione split payment">
          <p className="text-sm">
            Prima del 14/07/2018, l'avvocato che fatturava alla PA emetteva la fattura con IVA esposta ma
            non la incassava (la PA versava direttamente all'Erario). Oggi l'IVA viene incassata
            direttamente, migliorando il cash flow dello studio. La PA continua però ad applicare la ritenuta
            d'acconto del 20% (codice tributo F24 1040).
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          GRATUITO PATROCINIO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="gratuito-patrocinio"
        icon={Scale}
        title="Fatturazione del Gratuito Patrocinio"
        subtitle="DPR 115/2002 artt. 82-83, riduzione 50% solo nel penale"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>patrocinio a spese dello Stato</strong> è disciplinato dal{" "}
          <InlineNormLink
            text="D.P.R. 30 maggio 2002, n. 115"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115"
          />{" "}
          (Testo Unico Spese di Giustizia). L'art. 82 disciplina la liquidazione del compenso, l'art. 83 il
          decreto di pagamento (titolo esecutivo) e l'art. 130 la riduzione del 50% prevista esclusivamente
          per il processo penale.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:2002-05-30;115">
          Art. 130 DPR 115/2002: «L'onorario e le spese spettanti al difensore della parte ammessa al
          patrocinio a spese dello Stato nel processo penale sono ridotti della metà.»
        </NormativaQuote>

        <AlertBox variant="info" title="La riduzione 50% si applica SOLO nel penale">
          <p className="text-sm">
            Nel processo civile, amministrativo e tributario il compenso al difensore di parte ammessa al
            patrocinio è liquidato <strong>integralmente</strong> secondo i parametri forensi del D.M. 147/2022,
            con la sola modulazione discrezionale del giudice tra minimi e massimi. La riduzione del 50% è
            norma speciale di stretta interpretazione (consolidata in giurisprudenza).
          </p>
        </AlertBox>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Procedura operativa di fatturazione</h3>
        <BulletList
          items={[
            "Decreto di liquidazione del giudice (art. 83 DPR 115/2002) — è titolo esecutivo contro l'erario",
            "Il Ministero della Giustizia comunica l'avvio della procedura di pagamento (può richiedere mesi/anni)",
            "L'avvocato emette fattura elettronica TD01 al momento dell'incasso (art. 6 c. 3 DPR 633/72)",
            "IVA 22% (lo Stato non è esente), CPA 4%, spese generali 15% se liquidate",
            "Ritenuta d'acconto 20% applicata dal Ministero (codice tributo F24 1040)",
            "Il Ministero rilascia annualmente la Certificazione Unica (CU)",
            "Possibile fattura anticipata alla data del decreto, ma anticipa l'esigibilità IVA prima dell'incasso (sconsigliato)",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Interessi legali per ritardato pagamento</h3>
        <p className="text-base leading-relaxed">
          Sui pagamenti tardivi del Ministero maturano <strong>interessi legali</strong> ex{" "}
          <InlineNormLink
            text="art. 1284 c.c."
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:codice.civile:1942-03-16;262"
          />, generalmente decorrenti dalla messa in mora (diffida) o dalla scadenza del termine indicato nel
          decreto. Il tasso legale 2026 va verificato sul decreto ministeriale pubblicato in Gazzetta Ufficiale.
          Il decreto di liquidazione è titolo esecutivo per iscrizione a ruolo contro l'erario (art. 83 c. 3).
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CLIENTE ESTERO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="cliente-estero"
        icon={Globe2}
        title="Fatturazione a Cliente Estero"
        subtitle="Reverse charge UE, OSS, codici N2.1 e N6.9"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per le prestazioni rese a clienti esteri si applicano regole specifiche di territorialità ex{" "}
          <InlineNormLink
            text="art. 7-ter DPR 633/72"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633"
          />, secondo cui le prestazioni di servizi B2B si considerano effettuate nello Stato del committente,
          non in quello del prestatore.
        </p>

        <LegalTable
          headers={["Tipo Cliente", "Trattamento IVA", "Codice Natura", "CodiceDestinatario"]}
          rows={[
            ["UE - soggetto IVA (B2B)", "Non imponibile art. 7-ter (reverse charge cliente)", "N6.9", "XXXXXXX"],
            ["UE - consumatore (B2C) < 10.000€", "IVA italiana 22%", "—", "0000000"],
            ["UE - consumatore (B2C) > 10.000€/anno", "IVA paese cliente via regime OSS", "N7", "0000000"],
            ["Extra-UE - soggetto IVA (B2B)", "Non imponibile art. 7-ter", "N2.1", "XXXXXXX"],
            ["Extra-UE - consumatore (B2C)", "Operazione fuori campo IVA art. 7-ter", "N2.1", "XXXXXXX"],
          ]}
        />

        <AlertBox variant="warning" title="Iscrizione al VIES">
          <p className="text-sm">
            Per effettuare operazioni intracomunitarie B2B (verso clienti UE) l'avvocato deve essere iscritto
            al VIES (Sistema di scambio informazioni IVA). L'iscrizione si effettua presso l'Agenzia delle
            Entrate (modello AA7/12 o opzione in dichiarazione di inizio attività). Senza VIES l'avvocato è
            tenuto ad applicare IVA italiana anche verso clienti UE.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PRO-FORMA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="pro-forma"
        icon={FileText}
        title="Pro-forma e Avviso di Parcella"
        subtitle="Documento non fiscale, fatturazione all'incasso"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>pro-forma</strong> (o "avviso di parcella", "nota informale", "progetto di parcella") è un
          documento <strong>non fiscale</strong> che riproduce il contenuto della futura fattura elettronica.
          Il suo uso è radicato nella prassi forense ed è coerente con l'
          <InlineNormLink
            text="art. 13 c. 2 L. 247/2012"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2012-12-31;247"
          />{" "}
          che prevede la pattuizione scritta del compenso.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633">
          Art. 6 c. 3 DPR 633/72: «Per le prestazioni di servizi, diverse da quelle indicate al quarto comma,
          il momento di effettuazione dell'operazione si verifica all'atto del pagamento del corrispettivo.»
        </NormativaQuote>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Caratteristiche della pro-forma</h3>
        <BulletList
          items={[
            "Non è fattura ai sensi dell'art. 21 DPR 633/72",
            "Non va trasmessa al Sistema di Interscambio",
            "Non si registra nei registri IVA",
            "Non genera obbligo IVA per l'avvocato né detrazione per il cliente",
            "Non richiede marca da bollo (è un mero preventivo/avviso, non una ricevuta)",
            "Può essere inviata via PEC o email ordinaria",
            "Deve contenere la dicitura «Documento non valido ai fini fiscali»",
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Sequenza tipica</h3>
        <BulletList
          items={[
            "1. L'avvocato predispone la pro-forma con tutti i dati che andranno in fattura",
            "2. La pro-forma viene inviata al cliente con indicazione «documento non valido ai fini fiscali»",
            "3. Il cliente effettua il pagamento (bonifico, ecc.)",
            "4. Entro 12 giorni dall'incasso (art. 21 c. 4 DPR 633/72) l'avvocato emette fattura elettronica TD01",
            "5. La fattura definitiva contiene gli stessi dati della pro-forma + assolvimento bollo virtuale se dovuto",
          ]}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════
          NOTA DI CREDITO
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="nota-credito"
        icon={RefreshCcw}
        title="Nota di Credito Elettronica (TD04)"
        subtitle="Termini ex art. 26 DPR 633/72"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>nota di credito TD04</strong> si emette per stornare totalmente o parzialmente una fattura
          precedente, in caso di errore di calcolo, sconto successivo, abbuono, restituzione o annullamento del
          contratto. È disciplinata dall'
          <InlineNormLink
            text="art. 26 DPR 633/72"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633"
          />.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Termini per l'emissione</h3>
        <LegalTable
          headers={["Motivo della variazione", "Termine emissione"]}
          rows={[
            ["Nullità, annullamento, revoca, risoluzione contratto", "Senza limite di tempo"],
            ["Errore di calcolo o di registrazione", "Senza limite di tempo"],
            ["Sconto o abbuono concordati tra le parti", "Entro 1 anno dall'effettuazione dell'operazione"],
            ["Procedure concorsuali infruttuose", "Dopo accertamento giudiziale infruttuosità"],
          ]}
        />

        <p className="text-base leading-relaxed">
          La nota di credito deve contenere il riferimento alla fattura originaria nel campo{" "}
          <code className="bg-gray-100 px-1.5 py-0.5 text-xs font-mono">DatiFattureCollegate</code>, indicando
          numero e data della fattura stornata. L'IVA viene recuperata, e la ritenuta d'acconto deve essere
          coordinata con quella applicata sulla fattura originaria.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          TRASMISSIONE SDI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="trasmissione-sdi"
        icon={Send}
        title="Trasmissione tramite Sistema di Interscambio"
        subtitle="Canali, codici destinatario, esiti SDI"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>Sistema di Interscambio (SDI)</strong>, gestito dall'Agenzia delle Entrate tramite Sogei,
          è il nodo tecnologico attraverso cui transitano tutte le fatture elettroniche. La trasmissione può
          avvenire tramite portale Fatture e Corrispettivi dell'AdE, software dedicato dell'AdE, software di
          terze parti o canale PEC.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Codice destinatario</h3>
        <p className="text-base leading-relaxed">
          Il <strong>Codice Destinatario</strong> è una stringa alfanumerica a 7 caratteri che identifica il
          canale di ricezione del cliente nel SDI:
        </p>
        <LegalTable
          headers={["Codice", "Quando si usa"]}
          rows={[
            ["XXXXXXX (7 X)", "Fatture verso clienti esteri (non transitano in SDI per recapito ma vengono comunque trasmesse)"],
            ["0000000 (7 zeri)", "Privati cittadini senza partita IVA o clienti che non hanno comunicato codice SDI/PEC"],
            ["7 caratteri alfanumerici", "Cliente che ha un canale telematico accreditato (gestionale o intermediario)"],
            ["Codice IPA", "Pubbliche Amministrazioni (reperibile su indicepa.gov.it)"],
          ]}
        />

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Esiti SDI</h3>
        <p className="text-base leading-relaxed">
          Dopo la trasmissione, il SDI invia all'avvocato uno dei seguenti esiti entro 5 giorni:
        </p>
        <BulletList
          items={[
            "Ricevuta consegna (RC): la fattura è stata consegnata al destinatario",
            "Mancata consegna (MC): il SDI ha tentato senza riuscirvi; il documento è disponibile nel cassetto fiscale del destinatario, che va informato manualmente",
            "Scarto (NS): la fattura è stata rigettata per errori formali; va corretta e ri-emessa entro 5 giorni",
            "Decorrenza termini (DT): per fatture verso PA, indica che la PA non ha gestito la fattura entro 15 giorni",
          ]}
        />

        <AlertBox variant="warning" title="Termini di emissione: 12 giorni">
          <p className="text-sm">
            L'<InlineNormLink text="art. 21 c. 4 DPR 633/72" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.del.presidente.della.repubblica:1972-10-26;633" />{" "}
            stabilisce che la fattura deve essere emessa entro 12 giorni dall'effettuazione dell'operazione. Per
            i professionisti l'effettuazione coincide con il pagamento (art. 6 c. 3 DPR 633/72), quindi i 12
            giorni decorrono dall'incasso. La data del documento può essere quella dell'effettuazione o
            successiva, purché entro i 12 giorni.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          CONSERVAZIONE
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="conservazione"
        icon={Archive}
        title="Conservazione a Norma di Legge"
        subtitle="10 anni, D.M. 17 giugno 2014, servizio gratuito AdE"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le fatture elettroniche devono essere conservate in modalità digitale per{" "}
          <strong>10 anni</strong> (art. 2220 c.c. + art. 39 DPR 633/72), secondo le regole del{" "}
          <InlineNormLink
            text="D.M. 17 giugno 2014"
            url="https://www.gazzettaufficiale.it/eli/id/2014/06/26/14A04778/sg"
          />{" "}
          e del D.P.C.M. 3 dicembre 2013 (regole tecniche). La conservazione deve garantire i requisiti di{" "}
          <strong>autenticità, integrità, leggibilità e reperibilità</strong> nel tempo.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">Modalità di conservazione</h3>
        <BulletList
          items={[
            "Servizio gratuito Agenzia delle Entrate (portale Fatture e Corrispettivi) — conservazione per 15 anni, richiede adesione esplicita",
            "Conservatore privato accreditato presso AgID — servizio a pagamento, conservazione 'sostitutiva' pienamente conforme",
            "Conservazione in proprio (deprecata per i professionisti) — richiede protocollo informatico e firma digitale",
          ]}
        />

        <p className="text-base leading-relaxed">
          Il processo di conservazione deve essere completato entro il <strong>terzo mese successivo</strong>{" "}
          al termine di presentazione della dichiarazione dei redditi (Risoluzione AdE 46/2017). La
          responsabilità ultima dell'adempimento resta sempre in capo all'avvocato, anche se utilizza il
          servizio gratuito dell'AdE.
        </p>

        <AlertBox variant="info" title="Copia di cortesia in PDF">
          <p className="text-sm">
            Il file XML è il documento giuridicamente rilevante; la copia cartacea o PDF ha solo valore di
            "copia di cortesia" informativa. L'avvocato non è obbligato a conservare il PDF, ma è
            buona prassi mantenerlo per facilità di consultazione dello studio.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SANZIONI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="sanzioni"
        icon={AlertTriangle}
        title="Sanzioni per Omessa o Irregolare Fatturazione"
        subtitle="Riforma D.Lgs. 87/2024 dal 1° settembre 2024"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il{" "}
          <InlineNormLink
            text="D.Lgs. 14 giugno 2024, n. 87"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-06-14;87"
          />{" "}
          (Revisione del sistema sanzionatorio tributario) ha riformato profondamente le sanzioni per le
          violazioni connesse alla fattura elettronica. Le nuove sanzioni si applicano alle violazioni commesse
          dal <strong>1° settembre 2024</strong>.
        </p>

        <LegalTable
          headers={["Tipo violazione", "Sanzione pre-riforma", "Sanzione post-riforma (dal 1/9/2024)"]}
          rows={[
            ["Omessa/tardiva fatturazione che incide sull'IVA", "90% - 180% dell'imposta", "70% dell'imposta (min €300)"],
            ["Errori formali che non incidono sull'IVA", "varie", "Sanzione fissa €250 - €2.000"],
            ["Operazioni esenti/non imponibili/reverse charge non documentate", "5% - 10% corrispettivi", "5% dei corrispettivi (min €300)"],
            ["Omessa trasmissione dati fatture", "fino al 200% imposta", "€2 per fattura (max mensile)"],
            ["Mancata conservazione", "€1.000 - €8.000", "€1.000 - €8.000 (art. 9 D.Lgs. 471/97)"],
          ]}
        />

        <p className="text-base leading-relaxed">
          Resta sempre applicabile il <strong>ravvedimento operoso</strong> (art. 13 D.Lgs. 472/97) con
          riduzione delle sanzioni proporzionale al tempo di regolarizzazione: 1/10 entro 30 giorni, 1/9 entro
          90 giorni, 1/8 entro 1 anno, 1/7 entro 2 anni, 1/6 dopo 2 anni, 1/5 dopo notifica accertamento. Si
          rinvia al nostro <a href="/ravvedimento-operoso" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">calcolatore ravvedimento operoso</a>{" "}
          per il calcolo esatto.
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          AGGIORNAMENTI 2026
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="aggiornamenti-2026"
        icon={CalendarClock}
        title="Aggiornamenti Normativi 2025-2026"
        subtitle="Tracciato 1.9.1, D.Lgs. 1/2024, D.Lgs. 13/2024"
      />
      <div className="space-y-4">
        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)]">Tracciato XML versione 1.9.1 — obbligatorio dal 15/05/2026</h3>
        <p className="text-base leading-relaxed">
          Dal <strong>15 maggio 2026</strong> è obbligatorio l'utilizzo del tracciato XML versione 1.9.1
          delle specifiche tecniche della fattura elettronica. Da quella data il Sistema di Interscambio
          scarta automaticamente le fatture predisposte con tracciato precedente. Tutti i gestionali di studio
          e i software di fatturazione devono essere aggiornati alla nuova versione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">D.Lgs. 1/2024 — Riforma adempimenti tributari</h3>
        <p className="text-base leading-relaxed">
          Il{" "}
          <InlineNormLink
            text="D.Lgs. 8 gennaio 2024, n. 1"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-01-08;1"
          />{" "}
          consente, dal 2025, la presentazione delle dichiarazioni dei redditi dal 1° aprile dell'anno
          successivo. Questo incide sui termini di conservazione delle fatture, poiché il termine di 3 mesi
          per la conclusione del processo di conservazione decorre dal termine di presentazione della
          dichiarazione.
        </p>

        <h3 className="text-xl font-serif text-[oklch(0.25_0.04_250)] mt-4">D.Lgs. 13/2024 — Accertamento e concordato</h3>
        <p className="text-base leading-relaxed">
          Il{" "}
          <InlineNormLink
            text="D.Lgs. 12 febbraio 2024, n. 13"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2024-02-12;13"
          />{" "}
          valorizza i dati delle fatture elettroniche ai fini dell'analisi del rischio e della
          predisposizione di proposte di concordato preventivo biennale. Per l'avvocato, ciò significa che
          la qualità e completezza dei dati XML (codici natura corretti, indicazione clienti, distinzione
          imponibile/non imponibile) diventa sempre più rilevante.
        </p>

        <AlertBox variant="success" title="Cosa fare entro il 15 maggio 2026">
          <p className="text-sm">
            Verifica con il fornitore del tuo gestionale che il software sia aggiornato al tracciato 1.9.1.
            I principali software (TeamSystem, Namirial, Aruba, FattureInCloud, Kleos) hanno già rilasciato
            le versioni compatibili. Se utilizzi il portale gratuito dell'AdE, l'aggiornamento è automatico.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          ERRORI COMUNI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="errori-comuni"
        icon={XCircle}
        title="Errori Comuni nella Fattura Elettronica dell'Avvocato"
        subtitle="Pitfalls da evitare per non rischiare sanzioni"
      />
      <div className="space-y-3">
        <AlertBox variant="warning" title="1. CPA esclusa dall'imponibile IVA">
          <p className="text-sm">
            La <strong>CPA Cassa Forense rientra nella base imponibile IVA</strong>. Escluderla è un errore
            sostanziale che riduce indebitamente l'IVA dovuta. Calcolo corretto: imponibile IVA = compenso
            + spese generali + spese imponibili + CPA.
          </p>
        </AlertBox>

        <AlertBox variant="warning" title="2. Anticipazioni art. 15 in imponibile IVA">
          <p className="text-sm">
            Le anticipazioni in nome e per conto del cliente (contributo unificato, marche, diritti copia)
            <strong> NON entrano</strong> nell'imponibile IVA, CPA o ritenuta. Vanno indicate con codice
            natura N1 in una linea separata. Includerle è un errore frequente.
          </p>
        </AlertBox>

        <AlertBox variant="warning" title="3. Spese generali 15% sull'importo sbagliato">
          <p className="text-sm">
            Le spese generali si calcolano sul <strong>compenso netto</strong>, non sul totale fattura.
            Per €2.000 di compenso = €300 di spese generali (2.000 × 15%), non €342 (2.282 × 15%).
          </p>
        </AlertBox>

        <AlertBox variant="warning" title="4. Dicitura forfettario mancante">
          <p className="text-sm">
            Senza la dicitura «Operazione non soggetta a IVA ex art. 1 cc. 54-89 L. 190/2014 - Regime
            forfettario» e «Non soggetta a ritenuta d'acconto ex art. 1 c. 67 L. 190/2014», l'avvocato
            forfettario rischia che il cliente applichi indebitamente la ritenuta + sanzioni formali post-D.Lgs. 87/2024.
          </p>
        </AlertBox>

        <AlertBox variant="warning" title="5. EsigibilitaIVA 'S' verso PA">
          <p className="text-sm">
            Lo <strong>split payment è abolito per i professionisti</strong> dal 14/07/2018. Indicare
            EsigibilitaIVA = "S" (scissione dei pagamenti) verso PA è un errore: usare "I" (immediata) o
            "D" (differita).
          </p>
        </AlertBox>

        <AlertBox variant="warning" title="6. Bollo riaddebitato non considerato compenso (forfettario)">
          <p className="text-sm">
            Per l'avvocato in regime forfettario, il bollo €2 riaddebitato al cliente è <strong>ricavo</strong>{" "}
            che concorre al limite di €85.000 (Risposta AdE 428/2022). Spesso erroneamente trattato come
            partita di giro.
          </p>
        </AlertBox>

        <AlertBox variant="warning" title="7. Codice IPA errato per PA">
          <p className="text-sm">
            Ogni ufficio giudiziario (Tribunale di Milano, Corte d'Appello di Roma, ecc.) ha il proprio{" "}
            <strong>codice IPA univoco</strong>. Non esiste un codice unico per il Ministero della Giustizia.
            Verificare sempre su <a href="https://www.indicepa.gov.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">indicepa.gov.it</a>.
          </p>
        </AlertBox>

        <AlertBox variant="warning" title="8. Mancato aggiornamento tracciato 1.9.1">
          <p className="text-sm">
            Dal <strong>15 maggio 2026</strong> il SDI scarta automaticamente fatture con tracciato precedente.
            Verificare l'aggiornamento del gestionale entro tale data per evitare blocco operativo dello studio.
          </p>
        </AlertBox>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande Frequenti (FAQ)"
        subtitle="Risposte alle domande più comuni con fonti istituzionali"
      />
      <FAQ items={faqData} />

      {/* ═══════════════════════════════════════════════════════════
          FONTI E RIFERIMENTI
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="fonti"
        icon={Link2}
        title="Fonti e Riferimenti Istituzionali"
        subtitle="Norme, prassi e portali consultati"
      />
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          Questa pagina è basata su fonti istituzionali italiane verificate. Per consultazioni dirette:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[oklch(0.75_0.10_85)] mt-1">•</span>
            <span>
              <strong>Normattiva</strong>: testi normativi consolidati in vigore —{" "}
              <a href="https://www.normattiva.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">normattiva.it</a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[oklch(0.75_0.10_85)] mt-1">•</span>
            <span>
              <strong>Agenzia delle Entrate — Portale Fatturazione Elettronica</strong>: specifiche tecniche, FAQ,
              guide ufficiali —{" "}
              <a href="https://www.agenziaentrate.gov.it/portale/web/guest/aree-tematiche/fatturazione-elettronica" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">agenziaentrate.gov.it</a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[oklch(0.75_0.10_85)] mt-1">•</span>
            <span>
              <strong>Cassa Forense</strong>: Regolamento Unico Previdenza Forense, vademecum fiscalità —{" "}
              <a href="https://www.cassaforense.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">cassaforense.it</a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[oklch(0.75_0.10_85)] mt-1">•</span>
            <span>
              <strong>Consiglio Nazionale Forense</strong>: utilità per la professione, FAQ fatturazione elettronica
              —{" "}
              <a href="https://www.consiglionazionaleforense.it/web/cnf/fatturazione-elettronica" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">consiglionazionaleforense.it</a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[oklch(0.75_0.10_85)] mt-1">•</span>
            <span>
              <strong>IndicePA</strong>: catalogo dei codici IPA per la fatturazione elettronica verso PA —{" "}
              <a href="https://www.indicepa.gov.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">indicepa.gov.it</a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[oklch(0.75_0.10_85)] mt-1">•</span>
            <span>
              <strong>Gazzetta Ufficiale</strong>: testi originali di leggi e decreti —{" "}
              <a href="https://www.gazzettaufficiale.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">gazzettaufficiale.it</a>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[oklch(0.75_0.10_85)] mt-1">•</span>
            <span>
              <strong>Ministero della Giustizia</strong>: gratuito patrocinio, procedure di liquidazione —{" "}
              <a href="https://www.giustizia.it" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted underline-offset-2 hover:text-[oklch(0.35_0.15_250)]">giustizia.it</a>
            </span>
          </li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          NORMATIVA
          ═══════════════════════════════════════════════════════════ */}
      <SectionTitle
        id="normativa"
        icon={BookOpen}
        title="Normativa di Riferimento"
        subtitle="Leggi, decreti e provvedimenti applicabili"
      />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}
