import {
  Activity,
  BookOpen,
  HelpCircle,
  Table,
  AlertTriangle,
  TrendingUp,
  Users,
  Scale,
  FileText,
  Briefcase,
  Calendar,
  Receipt,
  Stethoscope,
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
import Calcolatore from "@/components/calcolo-risarcimento-inail/Calcolatore";
import {
  sections,
  normativaRiferimento,
  circolariMinisteriali,
  tabellaCoefficienti,
  prestazioniAccessorie2025,
  assegniContinuativi2025,
  menomazioniEsempi,
  esempiPuntiComuni,
  COSTANTI_2025,
} from "@/data/calcolo-risarcimento-inail/inailData";
import { faqData } from "@/data/calcolo-risarcimento-inail/faqData";
import { JsonLd, articleSchema, webApplicationSchema } from "@/lib/schema";
import { formatEur } from "@/lib/utils";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

export const metadata: Metadata = {
  title: "Calcolo Risarcimento INAIL 2026: Tabella e Rendita",
  description:
    "Calcola il risarcimento INAIL 2026: indennizzo capitale (6-15%), rendita vitalizia (16-100%), tabella danno biologico. Aggiornato DM 85/2025.",
  alternates: {
    canonical: "/calcolo-risarcimento-inail",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-risarcimento-inail",
    title: "Calcolo Risarcimento INAIL 2026: Tabella e Rendita",
    description:
      "Calcola il risarcimento INAIL 2026: indennizzo capitale (6-15%), rendita vitalizia (16-100%), tabella danno biologico. Aggiornato DM 85/2025.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Risarcimento INAIL 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Risarcimento INAIL 2026: Tabella e Rendita",
    description:
      "Indennizzo capitale 6-15%, rendita 16-100%, tabella danno biologico INAIL aggiornata 2026.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-risarcimento-inail",
  title: "Calcolo Risarcimento INAIL 2026",
  shortTitle: "Risarcimento INAIL",
  icon: Activity,
  updatedDate: "Aggiornato Maggio 2026",
  heroImage: HERO_IMG,
  heroImageAlt:
    "Calcolo Risarcimento INAIL 2026 — Tabella danno biologico, rendita vitalizia, indennizzo capitale",
  heroEyebrow: "Strumento Gratuito — Aggiornato Maggio 2026",
  heroTitle: "Calcolo Risarcimento INAIL",
  heroDescription:
    "Calcolatore online del risarcimento INAIL per infortunio sul lavoro e malattia professionale: indennizzo in capitale (6-15%), rendita vitalizia (16-100%), tabella danno biologico, quote integrative familiari art. 77 T.U., danno differenziale. Aggiornato a DM 85/2025 (+0,8%) e Circ. INAIL 45/2025.",
  heroReference: "T.U. 1124/1965 — D.Lgs. 38/2000 — DM 12/07/2000 — DM 45/2019 — DM 85/2025",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati a maggio 2026. Tabelle DM 12/07/2000 (eventi pre-2019, differenziate uomo/donna), DM 45/2019 (eventi dal 1/1/2019, unisex), rivalutazione +0,8% del DM 85/2025 e Circ. INAIL 45/2025. Solo l'INAIL è titolata a fornire calcoli ufficiali.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "INAIL", url: "https://www.inail.it" },
    { label: "Ministero del Lavoro", url: "https://www.lavoro.gov.it" },
  ],
};

export default function CalcoloRisarcimentoInailPage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}

      {/* Article */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Risarcimento INAIL 2026: Indennizzo Capitale, Rendita e Tabella Danno Biologico",
          description:
            "Guida completa al risarcimento INAIL per infortunio sul lavoro e malattia professionale: le tre soglie di invalidità, l'indennizzo in capitale 6-15% (tabella DM 45/2019 unisex), la rendita vitalizia 16-100%, la tabella dei coefficienti A-D, le quote integrative familiari, il danno differenziale, la rivalutazione 2025 (+0,8% DM 85/2025), i casi particolari (tunnel carpale, mesotelioma, autonomi, COVID).",
          path: "/calcolo-risarcimento-inail",
          datePublished: "2026-05-20",
          dateModified: "2026-05-20",
          image: HERO_IMG,
          sections: [
            "Le tre soglie di invalidità",
            "Inabilità temporanea",
            "Indennizzo in capitale 6-15%",
            "Indennizzo in rendita 16-100%",
            "Tabella coefficienti",
            "Quote integrative familiari",
            "Tabella menomazioni",
            "Rivalutazione 2026",
            "Prestazioni accessorie",
            "Danno differenziale",
            "Casi particolari",
            "Procedura",
            "Tassazione",
          ],
          keywords:
            "calcolo risarcimento inail, tabella danno biologico inail, rendita inail, indennizzo inail, tabella inail invalidità permanente, rivalutazione rendita inail 2026, quanti soldi sono N punti inail, danno differenziale inail",
        })}
      />

      {/* WebApplication */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Risarcimento INAIL 2026",
          description:
            "Calcolatore gratuito per stimare l'indennizzo in capitale (6-15%) o la rendita vitalizia (16-100%) erogati dall'INAIL per infortunio sul lavoro e malattia professionale. Applica tabelle DM 12/07/2000, DM 45/2019 unisex, rivalutazione DM 85/2025.",
          path: "/calcolo-risarcimento-inail",
          applicationCategory: "FinanceApplication",
          featureList: [
            "Calcolo indennizzo in capitale 6-15% per età e sesso",
            "Calcolo rendita vitalizia 16-100% con quota biologica e patrimoniale",
            "Applicazione tabella coefficienti A/B/C/D",
            "Quote integrative familiari art. 77 T.U.",
            "Rivalutazione DM 85/2025 +0,8%",
            "Selettore anno evento (pre-2019 vs unisex)",
          ],
        })}
      />

      {/* ===== Calcolatore (sopra il fold) ===== */}
      <Calcolatore />

      {/* ===== Cos'è il risarcimento INAIL ===== */}
      <SectionTitle
        id="soglie"
        icon={BookOpen}
        title="Le 3 soglie di invalidità INAIL"
        subtitle="Franchigia, capitale, rendita: come l'INAIL stratifica l'indennizzo per gravità della menomazione"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il sistema indennitario INAIL per infortunio sul lavoro e malattia professionale si fonda
          su <strong>tre soglie di invalidità permanente</strong>, introdotte dall’
          <InlineNormLink
            text="art. 13 del D.Lgs. 23 febbraio 2000, n. 38"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38"
          />
          , che ha integrato il sistema originario del{" "}
          <InlineNormLink
            text="D.P.R. 30 giugno 1965, n. 1124"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124"
          />
          {" "}(Testo Unico INAIL). La tripartizione si applica agli eventi verificatisi e alle
          malattie professionali denunciate dal 25 luglio 2000, data di entrata in vigore del
          {" "}<InlineNormLink
            text="D.M. 12 luglio 2000"
            url="https://www.gazzettaufficiale.it/eli/id/2000/07/25/000A9926/sg"
          />
          {" "}che ha approvato le tre tabelle fondamentali (menomazioni, indennizzo, coefficienti).
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38">
          Art. 13, c. 2 D.Lgs. 38/2000: «Le menomazioni conseguenti alle lesioni
          dell’integrità psicofisica di cui al comma 1 sono valutate in base a specifica
          tabella delle menomazioni […]. L’indennizzo delle menomazioni di grado pari o
          superiore al 6 per cento ed inferiore al 16 per cento è erogato in capitale, dal 16 per
          cento è erogato in rendita.»
        </NormativaQuote>

        <LegalTable
          headers={["Soglia invalidità", "Tipo prestazione", "Modalità erogazione", "Tassazione IRPEF"]}
          rows={[
            ["1% - 5%", "Nessun indennizzo (franchigia)", "—", "—"],
            ["6% - 15%", "Indennizzo in capitale", "Una tantum esente", "Esente"],
            ["16% - 100%", "Rendita vitalizia", "Mensile (12 mensilità/anno)", "Esente"],
          ]}
          className="mb-4"
        />

        <AlertBox variant="info" title="Ratio della tripartizione">
          <p>
            La franchigia 1-5% riflette una scelta di sostenibilità del sistema: i danni lievi non
            entrano nella copertura sociale (resta salva l’azione civile contro il datore ex
            art. 2087 c.c.). La soglia di 16 punti per la rendita è il punto in cui il legislatore
            presume che la menomazione incida significativamente sulla capacità di guadagno,
            giustificando la struttura bifasica della rendita (quota biologica + quota
            patrimoniale).
          </p>
        </AlertBox>
      </div>

      {/* ===== Inabilità temporanea ===== */}
      <SectionTitle
        id="inabilita-temporanea"
        icon={Calendar}
        title="Inabilità temporanea: 60% e 75% della retribuzione"
        subtitle="Indennità giornaliera durante il periodo di guarigione (art. 68 T.U. 1124/1965)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Durante il periodo in cui il lavoratore è completamente impossibilitato a svolgere
          l’attività lavorativa per infortunio o malattia professionale, l’INAIL eroga
          l’<strong>indennità giornaliera per inabilità temporanea assoluta</strong>,
          disciplinata dall’{" "}
          <InlineNormLink
            text="art. 68 del D.P.R. 1124/1965"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124"
          />
          .
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124">
          Art. 68 D.P.R. 1124/1965: «L’indennità giornaliera per l’inabilità
          temporanea assoluta è corrisposta nella misura del 60 per cento della retribuzione
          giornaliera, a decorrere dal quarto giorno successivo a quello dell’infortunio, fino
          al novantesimo giorno, e nella misura del 75 per cento per il periodo successivo.»
        </NormativaQuote>

        <LegalTable
          headers={["Periodo", "Percentuale retribuzione", "A carico di"]}
          rows={[
            ["Giorni 1-3 (carenza)", "100% (contrattuale)", "Datore di lavoro"],
            ["Giorni 4-90", "60%", "INAIL"],
            ["Dal 91° giorno alla guarigione", "75%", "INAIL"],
          ]}
          className="mb-4"
        />

        <p className="text-base leading-relaxed">
          La <strong>retribuzione media giornaliera</strong> si calcola dividendo la retribuzione
          complessiva percepita nei 15 giorni precedenti l’evento (compresi festivi) per 15.
          Sono inclusi elementi continuativi e non continuativi e le mensilità aggiuntive
          riproporzionate. L’indennità è soggetta a IRPEF (reddito sostitutivo della
          retribuzione), con ritenute operate direttamente dall’INAIL.
        </p>

        <AlertBox variant="info" title="Esempio pratico">
          <p>
            Retribuzione media giornaliera <span className="font-mono">€ 100</span>, infortunio
            120 giorni: giorni 1-3 (carenza) a carico datore; giorni 4-90 (87 giorni) ={" "}
            <span className="font-mono">87 × € 60 = € 5.220</span> INAIL; giorni 91-120 (30
            giorni) = <span className="font-mono">30 × € 75 = € 2.250</span> INAIL.{" "}
            <strong>Totale INAIL lordo: € 7.470</strong> (soggetto IRPEF).
          </p>
        </AlertBox>
      </div>

      {/* ===== Indennizzo in capitale ===== */}
      <SectionTitle
        id="indennizzo-capitale"
        icon={Receipt}
        title="Indennizzo in capitale: invalidità dal 6% al 15%"
        subtitle="Una tantum esente IRPEF basata su grado di menomazione ed età"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per menomazioni permanenti comprese tra il <strong>6% e il 15%</strong>, l’INAIL
          eroga un <strong>indennizzo in capitale una tantum</strong>, calcolato in funzione del
          grado di menomazione e dell’età dell’assicurato. L’età di riferimento è
          quella alla data di guarigione clinica (cessazione dell’inabilità temporanea
          assoluta); per le malattie professionali senza temporanea, l’età alla data della
          denuncia INAIL.
        </p>

        <AlertBox variant="success" title="Novità DM 45/2019: tabella unisex +40%">
          <p>
            Dal <strong>1° gennaio 2019</strong> (eventi e malattie professionali denunciate dopo
            tale data), si applica la nuova{" "}
            <InlineNormLink
              text="tabella unisex DM 45/2019"
              url="https://www.lavoro.gov.it/documenti-e-norme/normative/Documents/2019/DM-45-del-23042019"
            />
            , che ha <strong>eliminato la differenziazione per sesso</strong> e ha incrementato gli
            importi di circa il <strong>+40%</strong> rispetto alle tabelle precedenti
            (comprensive degli aumenti +8,68% del 2009 e +7,57% del 2014). Per gli eventi
            antecedenti restano applicabili le tabelle DM 12/07/2000 differenziate per genere.
          </p>
        </AlertBox>

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-6 mb-3">
          Tabella indennizzo in capitale — Uomini (eventi 2014-2018)
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          Estratto. Fonte: DM 12/07/2000 allegato 5 + rivalutazione DM 27/03/2009 (+8,68%) +
          rivalutazione DM 14/02/2014 (+7,57%).
        </p>
        <LegalTable
          headers={["Grado %", "≤20 anni", "26-30 anni", "36-40 anni", "46-50 anni", "56-60 anni", "66+ anni"]}
          rows={[
            ["6", "€ 5.796", "€ 5.217", "€ 4.637", "€ 4.057", "€ 3.478", "€ 2.898"],
            ["7", "€ 7.185", "€ 6.466", "€ 5.748", "€ 5.029", "€ 4.311", "€ 3.592"],
            ["8", "€ 8.694", "€ 7.825", "€ 6.955", "€ 6.086", "€ 5.217", "€ 4.347"],
            ["9", "€ 10.325", "€ 9.292", "€ 8.260", "€ 7.227", "€ 6.195", "€ 5.162"],
            ["10", "€ 12.075", "€ 10.868", "€ 9.660", "€ 8.453", "€ 7.245", "€ 6.038"],
            ["11", "€ 14.611", "€ 13.150", "€ 11.689", "€ 10.228", "€ 8.767", "€ 7.306"],
            ["12", "€ 17.389", "€ 15.650", "€ 13.911", "€ 12.172", "€ 10.433", "€ 8.694"],
            ["13", "€ 20.408", "€ 18.367", "€ 16.326", "€ 14.285", "€ 12.245", "€ 10.204"],
            ["14", "€ 23.668", "€ 21.301", "€ 18.934", "€ 16.568", "€ 14.201", "€ 11.834"],
            ["15", "€ 27.170", "€ 24.453", "€ 21.736", "€ 19.019", "€ 16.302", "€ 13.585"],
          ]}
          className="mb-4"
        />

        <AlertBox variant="info">
          <p>
            Per <strong>donne</strong> (eventi 2014-2018) gli importi sono leggermente più alti
            (es. grado 15% ≤20 anni: € 28.528 vs € 27.170 uomini), in considerazione della
            maggiore aspettativa di vita. Per <strong>eventi post 1/1/2019</strong> si applica la
            tabella unisex con importi mediamente +40% rispetto a quelli mostrati. Per il 2025 si
            aggiunge la rivalutazione +0,8% del DM 85/2025.
          </p>
        </AlertBox>
      </div>

      {/* ===== Indennizzo in rendita ===== */}
      <SectionTitle
        id="indennizzo-rendita"
        icon={TrendingUp}
        title="Indennizzo in rendita: invalidità dal 16% al 100%"
        subtitle="Rendita vitalizia mensile esente IRPEF: quota biologica + quota patrimoniale"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Per menomazioni di grado pari o superiore al <strong>16%</strong>, l’INAIL eroga
          una <strong>rendita vitalizia mensile esente da IRPEF</strong>, strutturata in due quote
          distinte ma erogate in un unico rateo:
        </p>

        <BulletList
          items={[
            "Quota per danno biologico: areddituale, dipende solo dal grado di menomazione (tabella DM 12/07/2000 allegato 5)",
            "Quota per danno patrimoniale: calcolata su retribuzione annua × grado × coefficiente A/B/C/D (allegato 6)",
          ]}
        />

        <p className="text-base leading-relaxed">
          La <strong>quota biologica</strong> è uguale per tutti i lavoratori a parità di grado
          (16-100%), indipendentemente da età, sesso e retribuzione. La{" "}
          <strong>quota patrimoniale</strong> tiene conto delle conseguenze della menomazione sulla
          capacità di produrre reddito, e si applica con la formula:
        </p>

        <div
          className="bg-[oklch(0.97_0.005_250)] p-4 font-mono text-sm border-l-4 border-[oklch(0.75_0.10_85)]"
          style={{ borderRadius: "0 0.375rem 0.375rem 0" }}
        >
          Quota patrimoniale annua = Retribuzione × (Grado / 100) × Coefficiente
        </div>

        <p className="text-base leading-relaxed">
          La <strong>retribuzione</strong> è quella effettiva dell’anno precedente l’evento,
          ma deve rispettare i limiti minimo e massimo fissati annualmente dalla Circ. INAIL. Per
          il 2025 (Circ. INAIL n. 37 del 20 giugno 2025), nel settore industria:
        </p>

        <LegalTable
          headers={["Voce", "Importo 2025"]}
          rows={[
            ["Retribuzione media giornaliera", formatEur(COSTANTI_2025.retribuzioneMediaGiornaliera)],
            ["Retribuzione annua MINIMA", formatEur(COSTANTI_2025.retribuzioneMinimaAnnua)],
            ["Retribuzione annua MASSIMA", formatEur(COSTANTI_2025.retribuzioneMassimaAnnua)],
            ["Coefficiente rivalutazione rendite 2025", "× 1,0084"],
          ]}
          className="mb-4"
        />

        <h3 className="text-xl font-semibold text-[oklch(0.25_0.04_250)] mt-6 mb-3">
          Tabella rendita annua (quota biologica) — gradi selezionati
        </h3>
        <p className="text-sm text-muted-foreground mb-2">
          Fonte: DM 12/07/2000 + DM 2009 (+8,68%) + DM 2014 (+7,57%) + DM 85/2025 (+0,8%).
        </p>
        <LegalTable
          headers={["Grado", "Rendita annua 2014", "Rendita annua 2025 (× 1,008)"]}
          rows={[
            ["16%", "€ 1.207,55", "€ 1.217,21"],
            ["20%", "€ 1.690,57", "€ 1.704,09"],
            ["25%", "€ 2.294,34", "€ 2.312,69"],
            ["30%", "€ 2.958,50", "€ 2.982,17"],
            ["40%", "€ 4.830,20", "€ 4.868,84"],
            ["50%", "€ 7.245,30", "€ 7.303,26"],
            ["60%", "€ 9.660,39", "€ 9.737,67"],
            ["70%", "€ 11.773,61", "€ 11.867,80"],
            ["80%", "€ 13.584,93", "€ 13.693,61"],
            ["90%", "€ 15.396,25", "€ 15.519,42"],
            ["100%", "€ 17.207,58", "€ 17.345,24"],
          ]}
          className="mb-4"
        />

        <AlertBox variant="info" title="Esempio: rendita per 20% con retribuzione € 30.000">
          <p>
            Quota biologica annua (20%, rivalutata 2025): <span className="font-mono">€ 1.704,09</span>.
            Quota patrimoniale: <span className="font-mono">€ 30.000 × 0,20 × 0,4 (coeff. A) = € 2.400/anno</span>.
            Totale annuo: <span className="font-mono">€ 4.104,09</span> → mensile{" "}
            <span className="font-mono">€ 342,01</span> esente IRPEF. Con coniuge + 1 figlio
            minore (2 familiari): + 10% sulla quota patrimoniale ={" "}
            <span className="font-mono">+€ 240/anno</span> →{" "}
            <span className="font-mono">€ 362,01/mese</span>.
          </p>
        </AlertBox>
      </div>

      {/* ===== Tabella coefficienti ===== */}
      <SectionTitle
        id="tabella-coefficienti"
        icon={Table}
        title="Tabella dei coefficienti A/B/C/D (DM 12/07/2000)"
        subtitle="Indicatore della riduzione della capacità lavorativa specifica per fascia di gravità"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>tabella dei coefficienti</strong> (allegato 6 del DM 12/07/2000) distingue
          quattro gradi di gravità della menomazione, associando a ciascuno un coefficiente
          moltiplicativo della retribuzione per il calcolo della quota patrimoniale della rendita.
        </p>

        <LegalTable
          headers={["Fascia menomazione", "Grado", "Coefficiente", "Descrizione"]}
          rows={tabellaCoefficienti.map((c) => [
            c.fasciaPercentuale,
            c.grado,
            c.coefficiente.toString().replace(".", ","),
            c.descrizione,
          ])}
          className="mb-4"
        />

        <AlertBox variant="info" title="Coefficiente di fascia superiore">
          <p>
            Il medico legale, in casi particolari (specializzazione professionale non più
            esercitabile, impossibilità di riconversione, condizioni del mercato del lavoro), può
            proporre un coefficiente al <strong>limite superiore della fascia</strong> (es. 0,5
            anziché 0,4 per un 20%). Non è invece possibile applicare un coefficiente di una
            fascia diversa da quella corrispondente al grado oggettivamente accertato.
          </p>
        </AlertBox>
      </div>

      {/* ===== Quote integrative ===== */}
      <SectionTitle
        id="quota-integrativa"
        icon={Users}
        title="Quote integrative per familiari (art. 77 T.U.)"
        subtitle="+5% sulla quota patrimoniale per ciascun familiare avente diritto"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          L’<InlineNormLink
            text="art. 77 del T.U. 1124/1965"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124"
          />{" "}
          prevede un’<strong>integrazione del 5%</strong> (un ventesimo) della{" "}
          <strong>sola quota patrimoniale</strong> della rendita per ciascun familiare a carico.
          Non si applica alla quota biologica.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124">
          Art. 77 T.U. 1124/1965: «Se l’infortunato ha moglie e figli, solo moglie o
          solo figli aventi i requisiti di cui ai numeri 1 e 2 dell’articolo 85, la rendita è
          aumentata di un ventesimo per la moglie e per ciascun figlio […]. Per i figli viventi a
          carico del lavoratore infortunato dette quote sono corrisposte fino al raggiungimento del
          ventunesimo anno di età, se studenti di scuola media o professionale, e per tutta la
          durata normale del corso, ma non oltre il ventiseiesimo anno di età, se studenti
          universitari.»
        </NormativaQuote>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Familiari aventi diritto
        </h3>
        <BulletList
          items={[
            "Coniuge o unito civilmente (anche se sposato dopo l'infortunio)",
            "Figli minorenni (sotto i 18 anni)",
            "Figli fino a 21 anni se studenti di scuola media superiore o professionale, a carico",
            "Figli fino a 26 anni se studenti universitari, a carico",
            "Figli inabili al lavoro, senza limiti di età, finché permane l'inabilità",
          ]}
        />

        <AlertBox variant="warning" title="Solo sulla quota patrimoniale">
          <p>
            Le quote integrative si applicano <strong>esclusivamente</strong> alla quota
            patrimoniale della rendita, non a quella biologica (Circ. INAIL n. 57/2000). Ciò
            riflette la natura economica della quota patrimoniale, legata al sostegno del nucleo
            familiare. Le quote cessano al venir meno del requisito (compimento maggiore età,
            cessazione studi, perdita inabilità).
          </p>
        </AlertBox>
      </div>

      {/* ===== Tabella menomazioni ===== */}
      <SectionTitle
        id="tabella-menomazioni"
        icon={Stethoscope}
        title="Tabella delle menomazioni INAIL (DM 12/07/2000)"
        subtitle="~400 voci con percentuali di danno biologico per organo o apparato"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>Tabella delle Menomazioni</strong> (allegato 4 del DM 12/07/2000) è lo
          strumento di valutazione medico-legale del danno biologico ai fini assicurativi. Contiene
          circa <strong>400 voci</strong> e attribuisce a ciascuna menomazione una percentuale dal
          1% al 100%, considerando sia gli aspetti anatomo-funzionali sia quelli
          dinamico-relazionali. Comprende menomazioni fisiche (amputazioni, fratture, danni
          uditivi/visivi, neurologici) e psichiche (disturbi correlati a patologie professionali
          da organizzazione del lavoro, aggiornate dal DM 10 giugno 2014).
        </p>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Esempi indicativi dalla tabella
        </h3>
        <LegalTable
          headers={["Categoria", "Menomazione", "Percentuale"]}
          rows={menomazioniEsempi.map((m) => [m.categoria, m.menomazione, m.percentuale])}
          className="mb-4"
        />

        <p className="text-sm text-muted-foreground">
          Tabella completa consultabile sul portale INAIL e nel testo originario del{" "}
          <InlineNormLink
            text="DM 12 luglio 2000"
            url="https://www.gazzettaufficiale.it/eli/id/2000/07/25/000A9926/sg"
          />
          {" "}(allegato 4, pubblicato in Suppl. ord. n. 119 alla G.U. n. 172 del 25 luglio 2000).
        </p>
      </div>

      {/* ===== Quanti soldi per N punti ===== */}
      <SectionTitle
        id="punti-comuni"
        icon={Receipt}
        title="Quanti soldi sono N punti di invalidità INAIL?"
        subtitle="Riferimenti rapidi per le percentuali più cercate (importi indicativi)"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Una delle domande più frequenti riguarda il valore economico dei punti di invalidità.
          Riportiamo qui i riferimenti per le percentuali più cercate, ricordando che il valore
          esatto dipende da età, sesso, anno dell’evento e tipo di prestazione (capitale o
          rendita). Per un calcolo personalizzato usa il{" "}
          <a href="#calcolatore" className="text-[oklch(0.45_0.12_250)] underline decoration-dotted">calcolatore</a>{" "}
          sopra.
        </p>

        <LegalTable
          headers={["Punti", "Tipo", "Importo esempio", "Note"]}
          rows={esempiPuntiComuni.map((e) => [
            `${e.punti}%`,
            e.tipo === "franchigia" ? "Franchigia" : e.tipo === "capitale" ? "Capitale" : "Rendita",
            e.tipo === "franchigia"
              ? "—"
              : e.tipo === "rendita"
                ? `€ ${e.importoEsempio.toLocaleString("it-IT", { minimumFractionDigits: 2 })}/anno (quota biologica)`
                : `€ ${e.importoEsempio.toLocaleString("it-IT", { minimumFractionDigits: 2 })}`,
            e.descrizione,
          ])}
          className="mb-4"
        />

        <AlertBox variant="info">
          <p>
            Per i gradi <strong>16-25%</strong> (fascia A coefficiente 0,4-0,5), la quota
            patrimoniale è relativamente bassa (fino al 10-12% della retribuzione). Per i gradi{" "}
            <strong>86-100%</strong> (fascia D coefficiente 1,0), la quota patrimoniale copre
            l’intera retribuzione ed è frequente l’APC (€ 672,72/mese).
          </p>
        </AlertBox>
      </div>

      {/* ===== Rivalutazione 2026 ===== */}
      <SectionTitle
        id="rivalutazione-2026"
        icon={TrendingUp}
        title="Rivalutazione INAIL 2026 e doppio binario"
        subtitle="Aumento +0,8% del DM 85/2025 sul danno biologico, coefficiente 1,0084 sul patrimoniale"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il sistema di rivalutazione INAIL si articola su un <strong>doppio binario</strong>: il
          danno patrimoniale è rivalutato annualmente (art. 11 D.Lgs. 38/2000) sulla base
          dell’indice ISTAT FOI; il danno biologico è rivalutato in modo automatico dal 2016
          (Legge di Stabilità 2016, art. 1 c. 303 L. 208/2015), con decreti ministeriali emanati
          ogni anno con decorrenza 1° luglio.
        </p>

        <AlertBox variant="success" title="DM 20 giugno 2025, n. 85: +0,8% danno biologico">
          <p>
            Il{" "}
            <InlineNormLink
              text="D.M. 20 giugno 2025, n. 85"
              url="https://www.lavoro.gov.it/media/90764"
            />
            {" "}ha disposto, con decorrenza <strong>1° luglio 2025</strong>, una rivalutazione del{" "}
            <strong>+0,8%</strong> degli indennizzi del danno biologico (capitale e quota biologica
            della rendita), basata sulla variazione media annua dell’indice ISTAT FOI
            2023-2024. La Circ. INAIL n. 45 del 1° agosto 2025 ha dato attuazione, con
            corresponsione degli arretrati nel rateo di novembre 2025. La rivalutazione resta in
            vigore anche per il 2026 fino a nuovo decreto.
          </p>
        </AlertBox>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Storia delle rivalutazioni del danno biologico
        </h3>
        <LegalTable
          headers={["Anno", "Provvedimento", "Aumento"]}
          rows={[
            ["2009", "DM 27 marzo 2009", "+8,68%"],
            ["2014", "DM 14 febbraio 2014", "+7,57% (cumulativo)"],
            ["2019", "DM 23 aprile 2019, n. 45", "+40% medio (nuova tabella unisex)"],
            ["2023", "DM 2 agosto 2023, n. 105", "+8,1%"],
            ["2024", "DM 16 luglio 2024, n. 119", "+5,4%"],
            ["2025", "DM 20 giugno 2025, n. 85", "+0,8% (vigente anche 2026)"],
          ]}
          className="mb-4"
        />
      </div>

      {/* ===== Prestazioni accessorie ===== */}
      <SectionTitle
        id="prestazioni-accessorie"
        icon={Briefcase}
        title="Prestazioni accessorie 2025-2026"
        subtitle="APC, assegno funerario, rendita ai superstiti, assegno di incollocabilità"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Oltre alla rendita per inabilità permanente, l’INAIL eroga numerose prestazioni
          accessorie, aggiornate annualmente dalla Circolare INAIL di rivalutazione (n. 37/2025
          per gli importi 2025).
        </p>

        <LegalTable
          headers={["Prestazione", "Importo 2025", "Periodicità", "Fonte"]}
          rows={prestazioniAccessorie2025.map((p) => [
            p.nome,
            formatEur(p.importo),
            p.unita,
            p.fonte,
          ])}
          className="mb-4"
        />

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Assegni continuativi mensili 2025 (settore industria)
        </h3>
        <LegalTable
          headers={["Fascia invalidità", "Importo mensile"]}
          rows={assegniContinuativi2025.map((a) => [a.fasciaInvalidita, formatEur(a.importo)])}
          className="mb-4"
        />

        <AlertBox variant="info" title="Novità 2026: assegno di incollocabilità fino a 67 anni">
          <p>
            La Circ. INAIL n. 55 dell’11 dicembre 2025 ha esteso, dal{" "}
            <strong>1° gennaio 2026</strong>, l’età massima per l’assegno di
            incollocabilità da 65 a <strong>67 anni</strong>, in coerenza con l’adeguamento
            dell’età pensionabile.
          </p>
        </AlertBox>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Rendita ai superstiti (% retribuzione annua del lavoratore deceduto)
        </h3>
        <LegalTable
          headers={["Beneficiario", "Percentuale"]}
          rows={[
            ["Coniuge o unito civilmente", "50%"],
            ["Ciascun figlio", "20%"],
            ["Figlio orfano di entrambi i genitori o inabile", "Fino a 40%"],
            ["Genitori (in mancanza di coniuge/figli) a carico", "20%"],
            ["Fratelli/sorelle a carico (in mancanza di altri)", "20%"],
          ]}
          className="mb-4"
        />
        <p className="text-sm text-muted-foreground">
          La somma delle quote non può superare il 100% della retribuzione; oltre tale tetto, le
          quote sono ridotte proporzionalmente. Le rendite ai superstiti sono esenti IRPEF.
        </p>
      </div>

      {/* ===== Danno differenziale ===== */}
      <SectionTitle
        id="danno-differenziale"
        icon={Scale}
        title="Danno differenziale: INAIL vs risarcimento civilistico"
        subtitle="L'eccedenza rispetto all'indennizzo INAIL nei casi di responsabilità datoriale"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>danno differenziale</strong> è la parte di danno civilisticamente risarcibile
          che <strong>eccede l’indennizzo INAIL</strong>. Disciplinato dall’{" "}
          <InlineNormLink
            text="art. 10 commi 6-7 del DPR 1124/1965"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124"
          />
          , spetta al lavoratore quando l’infortunio è dovuto a responsabilità del datore di
          lavoro (es. violazione art. 2087 c.c.) o di terzi.
        </p>

        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1965-06-30;1124">
          Art. 10 c. 7 T.U. 1124/1965: «Non si fa luogo a risarcimento qualora il giudice
          riconosca che questo non ascende a somma maggiore dell’indennità che, per effetto
          del presente decreto, è liquidata all’infortunato […]. Quando si faccia luogo a
          risarcimento, questo è dovuto solo per la parte che eccede le indennità liquidate a
          norma degli artt. 66 e seguenti.»
        </NormativaQuote>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Metodo delle poste omogenee (Cass. SU 12567/2018)
        </h3>
        <p className="text-base leading-relaxed">
          Le <strong>Sezioni Unite della Cassazione (sent. 12566 e 12567/2018)</strong>, ribadite
          dalla recente Cass. 30293/2023, hanno chiarito che dal risarcimento civilistico si
          sottrae <strong>solo la quota INAIL corrispondente alla stessa voce di danno</strong>:
        </p>

        <BulletList
          items={[
            "Dal danno biologico civilistico → si sottrae la quota biologica INAIL (capitale o rendita)",
            "Dal danno patrimoniale civilistico → si sottrae la quota patrimoniale della rendita",
            "Il danno morale resta integralmente al lavoratore (mai indennizzato INAIL)",
            "Il danno biologico temporaneo resta integralmente al lavoratore (mai indennizzato INAIL)",
          ]}
        />

        <AlertBox variant="info" title="Esempio numerico">
          <p>
            Lavoratore con menomazione 40%, danno non patrimoniale civilistico (Tabelle Milano
            2024): <span className="font-mono">€ 200.000</span>. INAIL: quota biologica annua{" "}
            <span className="font-mono">€ 6.000</span>, quota patrimoniale{" "}
            <span className="font-mono">€ 4.000</span>, percepita da 5 anni. Coefficiente
            capitalizzazione = 10 (Circ. INAIL 46/2025). Quota biologica scomputabile = (5 ×
            6.000) + (6.000 × 10) ={" "}
            <span className="font-mono">€ 90.000</span>. Danno differenziale ={" "}
            <span className="font-mono">€ 200.000 − € 90.000 = € 110.000</span>, richiedibile in
            sede civile (oltre al danno morale).
          </p>
        </AlertBox>
      </div>

      {/* ===== Casi particolari ===== */}
      <SectionTitle
        id="casi-particolari"
        icon={AlertTriangle}
        title="Casi particolari: autonomi, mesotelioma, COVID, in itinere, domestici"
      />
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-2 mb-2">
          Lavoratori autonomi
        </h3>
        <p className="text-base leading-relaxed">
          Per artigiani titolari, soci, coadiuvanti familiari, l’indennità temporanea è
          commisurata alla retribuzione giornaliera minima convenzionale (per il 2025 nel settore
          agricoltura: € 50,99/giorno per subordinati, minimale industria € 57,32/giorno per
          autonomi agricoli). Le percentuali sono le stesse (60% / 75%).
        </p>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Mesotelioma e patologie asbesto-correlate
        </h3>
        <p className="text-base leading-relaxed">
          Per il mesotelioma pleurico, peritoneale, pericardico o della tunica vaginale del
          testicolo, le menomazioni sono valutate in percentuali elevate (60-100%), con diritto
          alla rendita e, frequentemente, all’APC. Si applica inoltre il{" "}
          <strong>Fondo Vittime Amianto</strong>, con una prestazione aggiuntiva pari al 15%
          (innalzata al 17% dal 2023) della rendita INAIL. Per i casi di mesotelioma per
          esposizione familiare o ambientale non professionale, prestazione una tantum elevata a{" "}
          <span className="font-mono">€ 15.000</span> dal 2023.
        </p>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Tunnel carpale e patologie da movimenti ripetitivi
        </h3>
        <p className="text-base leading-relaxed">
          La sindrome del tunnel carpale (cod. 163 tabella menomazioni) è valutata fino a{" "}
          <strong>7 punti percentuali</strong>, variabile in base alla bilateralità. Rientra nella
          fascia 6-15%, quindi dà diritto all’indennizzo in capitale. Per il riconoscimento
          come malattia professionale serve la prova dell’esposizione a movimenti ripetitivi.
        </p>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          COVID-19 come infortunio sul lavoro
        </h3>
        <p className="text-base leading-relaxed">
          L’<InlineNormLink
            text="art. 42 c. 2 D.L. 18/2020"
            url="https://www.normattiva.it"
          />{" "}
          ha equiparato il contagio da SARS-CoV-2 in occasione di lavoro all’infortunio sul
          lavoro. L’INAIL eroga le prestazioni ordinarie e la copertura si estende anche ai
          periodi di isolamento fiduciario e quarantena (Circ. INAIL 13/2020).
        </p>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Infortunio in itinere
        </h3>
        <p className="text-base leading-relaxed">
          L’<InlineNormLink
            text="art. 12 D.Lgs. 38/2000"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38"
          />{" "}
          definisce l’infortunio in itinere: tragitto casa-lavoro, eventualmente con uso del
          mezzo proprio se necessitato (mancanza/inadeguatezza del trasporto pubblico).
          Interruzioni e deviazioni brevi e occasionali (es. accompagnamento figli a scuola) sono
          tollerate.
        </p>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Infortuni domestici (Legge 493/1999)
        </h3>
        <p className="text-base leading-relaxed">
          L’assicurazione obbligatoria INAIL per chi svolge attività di lavoro domestico in
          via esclusiva (18-67 anni) prevede: rendita per inabilità permanente ≥33% (calcolata sul
          minimale industria € 20.426,70); una tantum di <span className="font-mono">€ 395</span>{" "}
          per inabilità 6-15% (importo 2025).
        </p>
      </div>

      {/* ===== Procedura ===== */}
      <SectionTitle
        id="procedura"
        icon={FileText}
        title="Procedura: denuncia, riconoscimento, revisione"
      />
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-2 mb-2">
          Denuncia dell’infortunio
        </h3>
        <BulletList
          items={[
            "Lavoratore: comunicazione immediata al datore di lavoro dell'evento (con consegna del certificato medico)",
            "Datore di lavoro: invio telematico denuncia/comunicazione di infortunio (DCI) all'INAIL entro 2 giorni dal certificato medico (5 giorni se infortunio comporta assenza >3 giorni)",
            "Medico: trasmissione telematica del certificato medico INAIL entro 24 ore dalla visita",
          ]}
        />

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Riconoscimento e liquidazione
        </h3>
        <p className="text-base leading-relaxed">
          L’INAIL accerta la natura professionale dell’evento, la sussistenza
          dell’inabilità temporanea o permanente, l’eventuale grado di menomazione.
          La rendita decorre dal giorno successivo alla cessazione dell’inabilità temporanea
          (guarigione clinica). I tempi medi di liquidazione variano da 30 a 90 giorni.
        </p>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Revisione e aggravamento
        </h3>
        <p className="text-base leading-relaxed">
          La rendita INAIL è soggetta a revisione entro <strong>10 anni</strong> dall’infortunio
          e <strong>15 anni</strong> per le malattie professionali, dopodiché diventa definitiva.
          La revisione può essere richiesta su istanza dell’assicurato (aggravamento) o
          d’ufficio. Per l’indennizzo in capitale, l’aggravamento può essere
          richiesto <strong>una sola volta</strong>.
        </p>

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Ricorsi e tutela
        </h3>
        <p className="text-base leading-relaxed">
          Avverso i provvedimenti INAIL è ammesso ricorso amministrativo al Comitato Provinciale
          INAIL entro 60 giorni dalla notifica. Successivamente, ricorso al giudice del lavoro
          (Sez. Lavoro Tribunale territorialmente competente). Termine di prescrizione per
          l’azione: 3 anni dalla manifestazione della menomazione per le rendite, 10 anni
          per i ratei.
        </p>
      </div>

      {/* ===== Tassazione ===== */}
      <SectionTitle
        id="tassazione"
        icon={Receipt}
        title="Tassazione delle prestazioni INAIL"
      />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La disciplina fiscale delle prestazioni INAIL distingue nettamente:
        </p>

        <LegalTable
          headers={["Prestazione", "Tassazione IRPEF", "Riferimento normativo"]}
          rows={[
            ["Indennità temporanea assoluta", "SOGGETTA (reddito sostitutivo)", "Disciplina ordinaria"],
            ["Indennizzo in capitale 6-15%", "ESENTE", "Art. 6 DPR 601/1973"],
            ["Rendita per inabilità permanente", "ESENTE", "Art. 6 DPR 601/1973"],
            ["Rendita ai superstiti", "ESENTE", "Art. 6 DPR 601/1973"],
            ["APC, assegno funerario, incollocabilità", "ESENTE", "Art. 6 DPR 601/1973"],
            ["Quote integrative familiari", "ESENTE", "Art. 6 DPR 601/1973"],
          ]}
          className="mb-4"
        />

        <p className="text-sm text-muted-foreground">
          L’esenzione IRPEF è confermata dall’
          <InlineNormLink
            text="art. 6 D.P.R. 601/1973"
            url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:presidente.repubblica:decreto:1973-09-29;601~art6"
          />
          {" "}e dalla costante interpretazione dell’Agenzia delle Entrate. L’indennità
          temporanea è invece soggetta a ritenuta IRPEF operata direttamente dall’INAIL.
        </p>
      </div>

      {/* ===== Fonti e Riferimenti ===== */}
      <SectionTitle
        id="fonti"
        icon={BookOpen}
        title="Fonti e Riferimenti"
        subtitle="Trasparenza sulle fonti istituzionali utilizzate per questa pagina"
      />
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-2 mb-2">
          Fonti istituzionali
        </h3>
        <BulletList
          items={[
            "Normattiva.it — testi consolidati T.U. 1124/1965, D.Lgs. 38/2000, DPR 601/1973, L. 493/1999",
            "INAIL.it — sezione 'Prestazioni economiche', circolari operative, allegati tecnici",
            "Ministero del Lavoro — DM 12/07/2000, DM 45/2019, DM 85/2025, DM rivalutazione annuale",
            "Gazzetta Ufficiale — pubblicazione decreti e relative tabelle (Suppl. ord. n. 119, G.U. n. 172 del 25/07/2000 per DM 12/07/2000)",
          ]}
        />

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Fonti specialistiche
        </h3>
        <BulletList
          items={[
            "Consulenti del Lavoro — guida rivalutazione 2025 indennizzi danno biologico",
            "FiscoEtasse — tabella comparativa 2024-2025 (rivalutazione +0,8% DM 85/2025)",
            "Patronato Acli e INCA CGIL — guide divulgative su quote integrative, rendita, APC",
            "Olympus.uniurb.it — repository normativa Università di Urbino (DM 12/07/2000)",
            "Tribunale di Milano — Tabelle 2024 per liquidazione danno non patrimoniale (per danno differenziale)",
          ]}
        />

        <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-4 mb-2">
          Giurisprudenza chiave
        </h3>
        <BulletList
          items={[
            "Cass. Sez. Un. n. 12566 e 12567 del 22 maggio 2018 — principio delle poste omogenee per danno differenziale",
            "Cass. Sez. Lav. n. 30293 del 31 ottobre 2023 — scorporo della quota biologica dalla rendita per liquidazione civilistica",
            "Cass. Sez. Lav. n. 27444 del 14 ottobre 2025 — malattie tabellate, presunzione di nesso causale",
          ]}
        />
      </div>

      {/* ===== FAQ ===== */}
      <SectionTitle
        id="faq"
        icon={HelpCircle}
        title="Domande Frequenti (FAQ)"
        subtitle="25 risposte alle domande più cercate sul risarcimento INAIL"
      />
      <FAQ items={faqData} />

      {/* ===== Normativa ===== */}
      <SectionTitle
        id="normativa"
        icon={BookOpen}
        title="Normativa di Riferimento"
        subtitle="Leggi, decreti e circolari applicabili"
      />
      <NormativaRefTable items={normativaRiferimento} />

      <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mt-8 mb-3">
        Circolari INAIL e ministeriali
      </h3>
      <CircolariTable items={circolariMinisteriali} />
    </ToolLayout>
  );
}
