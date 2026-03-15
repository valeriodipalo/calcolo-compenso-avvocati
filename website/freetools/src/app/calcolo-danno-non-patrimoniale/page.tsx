import { Scale, BookOpen, HelpCircle, Table, Calculator, AlertTriangle, FileText, Users, Shield, Gavel, Sparkles, List } from "lucide-react";
import { ToolLayout } from "@/components/shared/ToolLayout";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { LegalTable } from "@/components/shared/LegalTable";
import { NormativaQuote } from "@/components/shared/NormativaQuote";
import { InlineNormLink } from "@/components/shared/InlineNormLink";
import { FAQ } from "@/components/shared/FAQ";
import { AlertBox } from "@/components/shared/AlertBox";
import { BulletList } from "@/components/shared/BulletList";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";
import Calcolatore from "@/components/calcolo-danno-non-patrimoniale/Calcolatore";
import {
  sections,
  normativaRiferimento,
  tabelleMilano2024,
  micropermanentiData,
  milanoData,
  tunData,
  perditaParentaleMilano,
  perditaParentaleRoma,
} from "@/data/calcolo-danno-non-patrimoniale/dannoData";
import { faqData } from "@/data/calcolo-danno-non-patrimoniale/faqData";
import { JsonLd, breadcrumbSchema, faqPageSchema, articleSchema, webApplicationSchema } from "@/lib/schema";
import type { ToolConfig } from "@/types/tool";
import type { Metadata } from "next";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028236822/PYXMaFM79E4yk2cWCNDAbj/hero-banner-MQeTtdfMiZ3YzxFgU6R99M.webp";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(n);

export const metadata: Metadata = {
  title: "Calcolo Danno Non Patrimoniale 2026 | Tabelle e TUN",
  description:
    "Calcola online il danno non patrimoniale con Tabelle Milano 2024, Tabella Unica Nazionale 2025 e art. 139 CdA. Guida completa con FAQ e normativa.",
  alternates: {
    canonical: "/calcolo-danno-non-patrimoniale",
  },
  openGraph: {
    type: "article",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    url: "/calcolo-danno-non-patrimoniale",
    title: "Calcolo Danno Non Patrimoniale 2026 | Tabelle e TUN",
    description:
      "Calcola online il danno non patrimoniale con Tabelle Milano 2024, Tabella Unica Nazionale 2025 e art. 139 CdA. Guida completa con FAQ e normativa.",
    images: [
      {
        url: HERO_IMG,
        width: 1920,
        height: 1072,
        alt: "Calcolo Danno Non Patrimoniale 2025 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calcolo Danno Non Patrimoniale 2026 | Tabelle e TUN",
    description:
      "Calcola online il danno non patrimoniale con Tabelle Milano 2024, Tabella Unica Nazionale 2025 e art. 139 CdA. Guida completa con FAQ e normativa.",
  },
};

const toolConfig: ToolConfig = {
  slug: "calcolo-danno-non-patrimoniale",
  title: "Calcolo Danno Non Patrimoniale 2025 2026",
  shortTitle: "Danno Non Patrimoniale",
  icon: Scale,
  updatedDate: "Aggiornato Marzo 2026",
  heroImage: HERO_IMG,
  heroEyebrow: "Strumento Gratuito — Aggiornato Marzo 2026",
  heroTitle: "Calcolo Danno Non Patrimoniale",
  heroDescription:
    "Calcolatore online gratuito per il risarcimento del danno non patrimoniale: micropermanenti (art. 139 CdA), macropermanenti con Tabelle Milano 2024 e Tabella Unica Nazionale 2025 (D.P.R. 12/2025).",
  heroReference:
    "Artt. 138-139 D.Lgs. 209/2005 — D.P.R. 12/2025",
  sections,
  disclaimerLines: [
    "Le informazioni contenute in questa pagina hanno carattere meramente informativo e non costituiscono parere legale.",
    "Dati aggiornati a marzo 2026. Tabelle Milano ed. 2024, TUN D.P.R. 12/2025, micropermanenti punto base 2026.",
  ],
  sources: [
    { label: "Normattiva.it", url: "https://www.normattiva.it" },
    { label: "Gazzetta Ufficiale", url: "https://www.gazzettaufficiale.it" },
    { label: "Tribunale di Milano", url: "https://tribunale-milano.giustizia.it" },
  ],
};

export default function CalcoloDannoNonPatrimonialePage() {
  return (
    <ToolLayout config={toolConfig}>
      {/* ===== Structured Data ===== */}

      {/* 1. BreadcrumbList */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Strumenti Legali Gratuiti", path: "/" },
          { name: "Calcolo Danno Non Patrimoniale", path: "/calcolo-danno-non-patrimoniale" },
        ])}
      />

      {/* 2. Article */}
      <JsonLd
        data={articleSchema({
          headline: "Calcolo Danno Non Patrimoniale 2025 2026: Tabelle Milano, TUN e Art. 139 CdA",
          description:
            "Guida completa al calcolo del danno non patrimoniale: micropermanenti art. 139, macropermanenti con Tabelle Milano 2024 e Tabella Unica Nazionale 2025, perdita parentale, personalizzazione e normativa.",
          path: "/calcolo-danno-non-patrimoniale",
          datePublished: "2026-03-15",
          dateModified: "2026-03-15",
          image: HERO_IMG,
          sections: [
            "Cos'è il Danno Non Patrimoniale",
            "Tipologie di Danno Non Patrimoniale",
            "Tabelle Milano 2024",
            "Tabella Unica Nazionale 2025",
            "Micropermanenti Art. 139",
            "Come si Calcola il Danno Non Patrimoniale",
            "Personalizzazione del Danno",
            "Danno da Perdita Parentale",
            "Prova del Danno Non Patrimoniale",
            "Novità Normative 2025-2026",
            "Domande Frequenti (FAQ)",
            "Normativa di Riferimento",
          ],
        })}
      />

      {/* 3. FAQPage */}
      <JsonLd data={faqPageSchema(faqData)} />

      {/* 4. WebApplication */}
      <JsonLd
        data={webApplicationSchema({
          name: "Calcolatore Danno Non Patrimoniale",
          description: "Calcola online il risarcimento del danno non patrimoniale con Tabelle Milano 2024, TUN 2025 e art. 139 CdA.",
          path: "/calcolo-danno-non-patrimoniale",
          applicationCategory: "Legal Calculator",
        })}
      />

      {/* ===== Calcolatore ===== */}
      <Calcolatore />

      {/* ===== Definizione ===== */}
      <SectionTitle id="definizione" icon={Scale} title="Cos'è il Danno Non Patrimoniale" subtitle="Art. 2059 c.c. e interpretazione costituzionale" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>danno non patrimoniale</strong> è il pregiudizio che colpisce interessi della persona privi di valore economico diretto, quali la salute, la dignità, la vita di relazione e gli affetti familiari. La sua disciplina trova fondamento nell'<InlineNormLink text="art. 2059 del Codice Civile" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" />, il quale prevede che il danno non patrimoniale sia risarcibile «solo nei casi determinati dalla legge».
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059">
          Art. 2059 cod. civ.: "Il danno non patrimoniale deve essere risarcito solo nei casi determinati dalla legge."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          Con le celebri <strong>sentenze gemelle</strong> del novembre 2008 (Cass. SS.UU. nn. 26972, 26973, 26974, 26975/2008), le Sezioni Unite della Cassazione hanno rivoluzionato l'interpretazione della norma, affermando che il danno non patrimoniale costituisce una <strong>categoria unitaria</strong> e non è scomponibile in sotto-voci autonomamente risarcibili. Le denominazioni «danno biologico», «danno morale» e «danno esistenziale» hanno funzione meramente descrittiva. Il risarcimento è ammesso non solo quando la legge lo prevede espressamente (come l'<InlineNormLink text="art. 185 c.p." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1930-10-19;1398~art185" /> per i danni da reato), ma anche quando il fatto illecito leda un <strong>diritto inviolabile della persona</strong> costituzionalmente garantito, secondo un'interpretazione costituzionalmente orientata dell'art. 2059 c.c.
        </p>
        <p className="text-base leading-relaxed">
          La lesione deve essere grave e il danno deve superare la soglia di tollerabilità imposta dai doveri di solidarietà sociale (<InlineNormLink text="art. 2 Cost." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione~art2" />). In ambito assicurativo, gli <InlineNormLink text="artt. 138 e 139 del Codice delle Assicurazioni" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" /> (D.Lgs. 209/2005) forniscono il quadro normativo specifico per la liquidazione del danno biologico da sinistro stradale, distinguendo tra lesioni di <strong>non lieve entità</strong> (macropermanenti, art. 138) e di <strong>lieve entità</strong> (micropermanenti, art. 139).
        </p>
      </div>

      {/* ===== Tipologie ===== */}
      <SectionTitle id="tipologie" icon={List} title="Tipologie di Danno Non Patrimoniale" subtitle="Biologico, morale, esistenziale, parentale e catastrofale" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Pur trattandosi di una categoria unitaria, la giurisprudenza e la dottrina individuano diverse <strong>componenti descrittive</strong> del danno non patrimoniale, ciascuna con proprie caratteristiche ai fini della prova e della liquidazione. Conoscerle è essenziale per impostare correttamente la domanda risarcitoria.
        </p>
        <LegalTable
          headers={["Componente", "Definizione", "Accertamento"]}
          rows={[
            ["Danno biologico", "Lesione dell'integrità psicofisica suscettibile di accertamento medico-legale (art. 138-139 CdA)", "CTU medico-legale"],
            ["Danno morale", "Sofferenza interiore soggettiva, patema d'animo, turbamento psichico", "Presunzioni, testimonianze, perizia psicologica"],
            ["Danno esistenziale", "Alterazione peggiorativa delle abitudini di vita e della sfera relazionale", "Allegazione specifica + prova"],
            ["Danno parentale", "Pregiudizio iure proprio dei familiari per la morte di un congiunto", "Presunzioni, prova del vincolo affettivo"],
            ["Danno catastrofale", "Sofferenza della vittima cosciente nel periodo tra lesione e morte", "Documentazione sanitaria, testimonianze"],
            ["Danno tanatologico", "Danno da morte in sé — NON risarcibile (Cass. SS.UU. 15350/2015)", "Non autonomamente risarcibile"],
          ]}
        />
        <AlertBox variant="warning" title="Danno tanatologico">
          <p className="leading-relaxed">
            Le Sezioni Unite della Cassazione (sent. 15350/2015) hanno escluso la risarcibilità del <strong>danno tanatologico</strong> (danno da morte in sé), confermando che il diritto alla vita non si trasmette agli eredi iure hereditatis. Restano invece trasmissibili il danno catastrofale (sofferenza ante mortem) e il danno biologico terminale (lesione dell'integrità psicofisica nel periodo di sopravvivenza).
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Il <strong>danno catastrofale</strong>, riconosciuto dalla Cassazione con la sentenza n. 35228/2022, si configura quando la vittima ha avuto consapevolezza dell'approssimarsi della propria morte. L'importo viene liquidato in via equitativa tenendo conto dell'intensità della sofferenza e della durata dell'agonia cosciente. Il credito risarcitorio entra nel patrimonio del defunto ed è trasmissibile <em>iure hereditatis</em> agli eredi.
        </p>
      </div>

      {/* ===== Tabelle Milano 2024 ===== */}
      <SectionTitle id="tabelle-milano" icon={Table} title="Tabelle Milano 2024" subtitle="Criteri orientativi del Tribunale di Milano — Prot. P.7646_24" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le <strong>Tabelle di Milano</strong> sono elaborate dall'Osservatorio sulla Giustizia Civile del Tribunale di Milano e costituiscono il principale riferimento per la liquidazione equitativa del danno non patrimoniale in Italia. La <InlineNormLink text="Cassazione (sent. 12408/2011)" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059" /> le ha elevate a <strong>parametro para-normativo</strong>, stabilendo che il giudice di merito che se ne discosti deve adeguatamente motivare la scelta.
        </p>
        <p className="text-base leading-relaxed">
          L'edizione 2024 incorpora una rivalutazione ISTAT del <strong className="font-mono">16,2268%</strong> rispetto al 2021 e prevede un sistema a doppio binario: il <strong>punto biologico</strong> ({formatCurrency(milanoData.puntoBiologico)}) e l'<strong>incremento per sofferenza</strong> ({formatCurrency(milanoData.incrementoSofferenza)}) per un valore totale per punto di {formatCurrency(milanoData.totalePunto)}. La personalizzazione è ammessa fino al <strong className="font-mono">50%</strong> per adeguare il risarcimento alle peculiarità del caso concreto.
        </p>
        <LegalTable
          headers={["Punti IP", "Biologico", "Sofferenza", "Totale"]}
          rows={tabelleMilano2024.map((r) => [
            `${r.punti}%`,
            formatCurrency(r.biologico),
            formatCurrency(r.sofferenza),
            formatCurrency(r.totale),
          ])}
        />
        <p className="text-sm text-muted-foreground mt-2">
          Valori base senza demoltiplicatore per età. Fonte: Tabelle Milano 2024, Prot. P.7646_24.
        </p>
        <AlertBox variant="info" title="ITT con Tabelle Milano">
          <p className="leading-relaxed">
            L'inabilità temporanea totale (ITT) viene liquidata a <strong className="font-mono">{formatCurrency(milanoData.ittGiornaliero100)}</strong> al giorno, comprensivi di {formatCurrency(milanoData.ittBiologico)} per danno biologico temporaneo e {formatCurrency(milanoData.ittSofferenza)} per sofferenza. Per l'ITP, l'importo si riduce in proporzione alla percentuale di incapacità (es. ITP al 50% = {formatCurrency(milanoData.ittGiornaliero100 * 0.5)}/giorno).
          </p>
        </AlertBox>
      </div>

      {/* ===== TUN 2025 ===== */}
      <SectionTitle id="tabella-unica-nazionale" icon={Gavel} title="Tabella Unica Nazionale 2025" subtitle="D.P.R. 13 gennaio 2025, n. 12 — In vigore dal 5 marzo 2025" />
      <div className="space-y-4">
        <AlertBox variant="success" title="Novità: Tabella Unica Nazionale in vigore">
          <p className="leading-relaxed">
            Dal <strong>5 marzo 2025</strong> è in vigore la Tabella Unica Nazionale per il risarcimento del danno non patrimoniale da macropermanenti, introdotta dal <InlineNormLink text="D.P.R. 13 gennaio 2025, n. 12" url="https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" /> in attuazione dell'<InlineNormLink text="art. 138 del Codice delle Assicurazioni Private" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" />. Si tratta della prima tabella con valore <strong>normativo vincolante</strong> per tutti i giudici.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          La TUN si applica obbligatoriamente alla liquidazione del danno biologico per lesioni di <strong>non lieve entità</strong> (invalidità permanente dal 10% al 100%) derivanti da sinistri stradali e da responsabilità sanitaria (<InlineNormLink text="art. 7 L. 24/2017 — Legge Gelli-Bianco" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2017-03-08;24" />). Per gli illeciti di diversa natura (infortuni sul lavoro, cadute, ecc.) resta applicabile il criterio equitativo delle Tabelle di Milano.
        </p>
        <LegalTable
          headers={["Parametro", "Valore TUN 2025", "Confronto Milano 2024"]}
          rows={[
            ["Valore base punto", formatCurrency(tunData.valoreBasePunto), formatCurrency(milanoData.totalePunto)],
            ["ITT giornaliero", formatCurrency(tunData.ittGiornaliero), formatCurrency(milanoData.ittGiornaliero100)],
            ["Personalizzazione max", `${tunData.personalizzazioneMax}%`, `${milanoData.personalizzazioneMax}%`],
            ["Natura", "Normativa vincolante", "Giurisprudenziale (para-normativa)"],
            ["In vigore dal", "5 marzo 2025", "Aggiornate periodicamente"],
            ["Ambito", "Sinistri stradali + resp. medica", "Tutti gli illeciti civili"],
          ]}
        />
        <p className="text-base leading-relaxed">
          La differenza nei valori è significativa: il punto base TUN ({formatCurrency(tunData.valoreBasePunto)}) è inferiore di quasi il 46% rispetto al punto Milano ({formatCurrency(milanoData.totalePunto)}). Tuttavia, la TUN incorpora già la componente morale/sofferenza nel valore base, mentre Milano la scinde in biologico e incremento per sofferenza. Il dibattito giurisprudenziale sulla congruità dei valori TUN è ancora in corso.
        </p>
        <AlertBox variant="warning" title="Applicabilità retroattiva">
          <p className="leading-relaxed">
            La TUN si applica ai sinistri verificatisi dal 5 marzo 2025 in poi. Per i sinistri anteriori, la Cassazione (sent. 11319/2025) ha ammesso l'utilizzo della TUN in via equitativa come parametro di riferimento, senza obbligo vincolante. Il giudice conserva la facoltà di applicare le Tabelle di Milano se ritenute più congrue.
          </p>
        </AlertBox>
      </div>

      {/* ===== Micropermanenti ===== */}
      <SectionTitle id="micropermanenti" icon={Shield} title="Micropermanenti (Art. 139 CdA)" subtitle="Lesioni di lieve entità — 1-9% di invalidità permanente" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Le <strong>micropermanenti</strong> sono le lesioni di lieve entità con invalidità permanente compresa tra l'1% e il 9%. La loro liquidazione è disciplinata dall'<InlineNormLink text="art. 139 del Codice delle Assicurazioni Private" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" /> (D.Lgs. 209/2005), che prevede una formula matematica per il calcolo del risarcimento.
        </p>
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209">
          Art. 139, c. 1, D.Lgs. 209/2005: "Il risarcimento del danno biologico per lesioni di lieve entità [...] è effettuato secondo i criteri e le misure seguenti [...] a titolo di danno biologico permanente, è liquidato [...] un importo crescente in misura più che proporzionale in relazione ad ogni punto percentuale di invalidità."
        </NormativaQuote>
        <div className="bg-[oklch(0.97_0.005_250)] border border-[oklch(0.90_0.02_250)] p-5 text-center" style={{ borderRadius: "0.375rem" }}>
          <p className="text-lg font-mono font-bold text-[oklch(0.25_0.04_250)]">
            Danno = PuntoBase × PuntiIP × (1 − Età × 0,005)
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            PuntoBase 2026 = {formatCurrency(micropermanentiData.puntoBase2026)} • ITT = {formatCurrency(micropermanentiData.ittGiornaliero)}/giorno • Personalizzazione max = {micropermanentiData.personalizzazioneMax}%
          </p>
        </div>
        <LegalTable
          headers={["Parametro", "Valore 2025", "Valore 2026"]}
          rows={[
            ["Punto base", formatCurrency(micropermanentiData.puntoBase2025), formatCurrency(micropermanentiData.puntoBase2026)],
            ["ITT giornaliero", formatCurrency(micropermanentiData.ittGiornaliero), formatCurrency(micropermanentiData.ittGiornaliero)],
            ["Personalizzazione max", `${micropermanentiData.personalizzazioneMax}%`, `${micropermanentiData.personalizzazioneMax}%`],
            ["Rivalutazione ISTAT", "—", "+1,7% (stima)"],
          ]}
        />
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Esempio: 5 punti, età 35 anni</h3>
        <p className="text-base leading-relaxed">
          Con 5 punti di invalidità e 35 anni di età, il demoltiplicatore è 1 − (35 × 0,005) = <strong className="font-mono">0,825</strong>. Il danno biologico è {formatCurrency(micropermanentiData.puntoBase2026)} × 5 × 0,825 = <strong className="font-mono">{formatCurrency(micropermanentiData.puntoBase2026 * 5 * 0.825)}</strong>. Aggiungendo 30 giorni di ITT ({formatCurrency(micropermanentiData.ittGiornaliero * 30)}), il totale base è di circa <strong className="font-mono">{formatCurrency(micropermanentiData.puntoBase2026 * 5 * 0.825 + micropermanentiData.ittGiornaliero * 30)}</strong> prima della personalizzazione.
        </p>
      </div>

      {/* ===== Come si Calcola ===== */}
      <SectionTitle id="come-si-calcola" icon={Calculator} title="Come si Calcola il Danno Non Patrimoniale" subtitle="Guida passo-passo alla liquidazione" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il calcolo del <strong>danno non patrimoniale</strong> segue un percorso articolato in più fasi, dalla qualificazione medico-legale della lesione fino alla determinazione dell'importo finale. Il procedimento varia in base alla gravità della lesione e alla tabella applicabile.
        </p>
        <FeatureGrid items={[
          { title: "1. CTU medico-legale", desc: "Il consulente tecnico d'ufficio accerta la percentuale di invalidità permanente, i giorni di ITT e ITP, e le eventuali peculiarità soggettive della lesione." },
          { title: "2. Scelta della tabella", desc: "Micropermanenti (1-9%): art. 139 CdA. Macropermanenti da sinistro/resp. medica: TUN 2025. Altri illeciti: Tabelle Milano 2024." },
          { title: "3. Calcolo base", desc: "Punto base × punti IP × demoltiplicatore per età. Più il danneggiato è giovane, maggiore è il risarcimento." },
          { title: "4. Inabilità temporanea", desc: "ITT (100%) + ITP (percentuale ridotta) × giorni × importo giornaliero della tabella utilizzata." },
          { title: "5. Personalizzazione", desc: "Aumento percentuale del risarcimento base in relazione alle circostanze specifiche del caso (max 20-50% a seconda della tabella)." },
          { title: "6. Verifica e confronto", desc: "Confrontare il risultato con i valori tabellari, verificare la congruità e, in caso di contenzioso, predisporre la documentazione a supporto." },
        ]} />
        <AlertBox variant="info" title="Demoltiplicatore per età">
          <p className="leading-relaxed">
            Il <strong>demoltiplicatore per età</strong> riduce il valore del punto in ragione dell'età del danneggiato: più il soggetto è giovane, maggiore è il danno riconosciuto (perché convivrà più a lungo con l'invalidità). Il coefficiente si calcola come 1 − (età × 0,5%). Per un soggetto di 20 anni il demoltiplicatore è 0,90; a 50 anni scende a 0,75; a 80 anni è 0,60.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          &Egrave; importante sottolineare che le tabelle forniscono un <strong>parametro di riferimento</strong>, non un importo fisso e immutabile. Il giudice conserva sempre il potere di adeguare la liquidazione al caso concreto, sia in aumento (personalizzazione) sia motivando un eventuale scostamento dai valori tabellari. La giurisprudenza della Cassazione richiede comunque una motivazione adeguata per ogni scostamento significativo dalle tabelle (Cass. 12408/2011).
        </p>
      </div>

      {/* ===== Personalizzazione ===== */}
      <SectionTitle id="personalizzazione" icon={Sparkles} title="Personalizzazione del Danno" subtitle="Criteri e limiti per l'aumento del risarcimento tabellare" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La <strong>personalizzazione</strong> è lo strumento attraverso il quale il giudice adegua il risarcimento tabellare alle specificità del caso concreto. Non si tratta di un «bonus» automatico, ma di un aumento che deve essere allegato e provato dalla parte che lo richiede.
        </p>
        <LegalTable
          headers={["Tabella", "Personalizzazione max", "Criteri principali"]}
          rows={[
            ["Micropermanenti (art. 139)", `${micropermanentiData.personalizzazioneMax}%`, "Condizioni soggettive del danneggiato"],
            ["TUN 2025 (D.P.R. 12/2025)", `${tunData.personalizzazioneMax}%`, "Sofferenza, impatto sulla vita, peculiarità soggettive"],
            ["Tabelle Milano 2024", `${milanoData.personalizzazioneMax}%`, "Età, professione, hobby, vita di relazione, intensità sofferenza"],
          ]}
        />
        <p className="text-base leading-relaxed">
          I criteri di personalizzazione più frequentemente riconosciuti dalla giurisprudenza includono: l'età particolarmente giovane del danneggiato, l'incidenza della lesione sulla professione svolta (es. invalidià alle mani per un musicista), la compromissione di attività sportive o ludiche praticate con costanza, l'impatto sulla vita sessuale e di relazione, la sofferenza morale di particolare intensità documentata o desumibile dalle circostanze del caso.
        </p>
        <AlertBox variant="info" title="Onere della prova">
          <p className="leading-relaxed">
            L'onere di allegare e provare le circostanze che giustificano la personalizzazione grava sul danneggiato. Non è sufficiente la mera richiesta generica: occorre indicare specificamente le ragioni per le quali il caso concreto si discosta dalla media e fornire elementi di prova a supporto (documenti, testimonianze, perizie). Il giudice non può procedere d'ufficio alla personalizzazione.
          </p>
        </AlertBox>
      </div>

      {/* ===== Perdita Parentale ===== */}
      <SectionTitle id="perdita-parentale" icon={Users} title="Danno da Perdita Parentale" subtitle="Risarcimento iure proprio ai familiari superstiti" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il <strong>danno da perdita parentale</strong> (o danno da lutto) è il pregiudizio sofferto <em>iure proprio</em> dai familiari superstiti in conseguenza della morte di un congiunto. Non si tratta di un diritto ereditato dal defunto, ma di un danno direttamente subito dal familiare per la perdita del rapporto affettivo. Le Tabelle di Milano 2024 adottano un <strong>sistema a punti</strong> che tiene conto della relazione parentale, dell'età, della convivenza, della composizione del nucleo familiare e della qualità del rapporto.
        </p>
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Tabelle Milano 2024</h3>
        <LegalTable
          headers={["Relazione", "Minimo", "Massimo", "Punti max", "Valore punto"]}
          rows={perditaParentaleMilano.map((r) => [
            r.relazione,
            formatCurrency(r.min),
            formatCurrency(r.max),
            r.puntiMax?.toString() ?? "—",
            r.valorePunto ? formatCurrency(r.valorePunto) : "—",
          ])}
        />
        <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-4 mb-3">Tabelle Roma 2025</h3>
        <LegalTable
          headers={["Relazione", "Minimo", "Massimo"]}
          rows={perditaParentaleRoma.map((r) => [
            r.relazione,
            formatCurrency(r.min),
            formatCurrency(r.max),
          ])}
        />
        <p className="text-base leading-relaxed">
          Le Tabelle di Roma prevedono importi generalmente inferiori rispetto a Milano. La scelta della tabella da applicare dipende dalla giurisdizione e dall'orientamento del giudice. La Cassazione ha ribadito che le Tabelle di Milano costituiscono il parametro di riferimento anche per i tribunali di altre sedi giudiziarie (Cass. 12408/2011), ma il giudice può motivatamente discostarsene.
        </p>
        <AlertBox variant="warning" title="Legittimati attivi">
          <p className="leading-relaxed">
            Sono legittimati a richiedere il danno da perdita parentale il <strong>coniuge</strong> (o convivente more uxorio), i <strong>genitori</strong>, i <strong>figli</strong>, i <strong>fratelli e sorelle</strong> e, in casi particolari, anche i <strong>nonni e nipoti</strong>. La prova del vincolo affettivo è presunta per i congiunti più stretti, ma deve essere specificamente provata per i parenti più lontani.
          </p>
        </AlertBox>
      </div>

      {/* ===== Prova del Danno ===== */}
      <SectionTitle id="prova-del-danno" icon={FileText} title="Prova del Danno Non Patrimoniale" subtitle="Onere di allegazione, presunzioni e CTU" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          La prova del danno non patrimoniale segue regole specifiche che si differenziano per ciascuna componente descrittiva. Il principio generale è quello dell'<strong>allegazione</strong>: il danneggiato deve indicare specificamente i pregiudizi subiti e fornire elementi per la loro dimostrazione, anche se la liquidazione avverrà in via equitativa.
        </p>
        <BulletList items={[
          "Danno biologico: si prova con la CTU medico-legale che accerta la percentuale di invalidità permanente e i giorni di ITT/ITP. La relazione medico-legale è il fondamento della liquidazione tabellare.",
          "Danno morale: può essere provato anche per presunzioni semplici (art. 2729 c.c.). La sofferenza è presunta in re ipsa per le lesioni più gravi, mentre per quelle lievi occorre una specifica allegazione.",
          "Personalizzazione: richiede la prova specifica delle circostanze soggettive che giustificano l'aumento (documenti, testimonianze, perizie psicologiche).",
          "Danno parentale: il vincolo affettivo è presunto per i congiunti più stretti (coniuge, genitori, figli); per i parenti meno prossimi occorre provare l'effettiva convivenza e la qualità del rapporto.",
        ]} />
        <NormativaQuote url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2729">
          Art. 2729 cod. civ.: "Le presunzioni non stabilite dalla legge sono lasciate alla prudenza del giudice, il quale non deve ammettere che presunzioni gravi, precise e concordanti."
        </NormativaQuote>
        <p className="text-base leading-relaxed">
          La giurisprudenza ammette un ampio ventaglio di mezzi di prova: documentazione sanitaria, referti di pronto soccorso, certificati medici, perizie psicologiche, testimonianze di familiari e conoscenti, fotografie che documentino le condizioni fisiche, dichiarazioni del medico curante. Per la prova del danno morale, la Cassazione ha chiarito che è sufficiente dimostrare la gravità della lesione per far presumere la sofferenza (Cass. 901/2018).
        </p>
      </div>

      {/* ===== Novita 2025-2026 ===== */}
      <SectionTitle id="novita-2025" icon={Sparkles} title="Novità Normative 2025-2026" subtitle="TUN, aggiornamenti ISTAT e giurisprudenza recente" />
      <div className="space-y-4">
        <p className="text-base leading-relaxed">
          Il biennio 2025-2026 segna un punto di svolta nella liquidazione del danno non patrimoniale in Italia, con l'entrata in vigore della Tabella Unica Nazionale e le prime pronunce giurisprudenziali sulla sua applicazione.
        </p>
        <FeatureGrid items={[
          { title: "TUN in vigore dal 5/3/2025", desc: "D.P.R. 12/2025: prima tabella normativa vincolante per macropermanenti. Punto base € 947,30, personalizzazione 30%." },
          { title: "Cass. 11319/2025", desc: "La Cassazione ammette l'uso equitativo della TUN anche per sinistri anteriori al 5 marzo 2025, senza obbligo vincolante." },
          { title: "ISTAT 2026: +1,7%", desc: "Rivalutazione del punto micropermanenti da € 957,07 a € 963,40. L'ITT giornaliero resta a € 56,18." },
          { title: "Legge Gelli e TUN", desc: "Art. 7 L. 24/2017: la TUN si applica anche alla responsabilità medica, unificando i criteri con i sinistri stradali." },
        ]} />
        <AlertBox variant="success" title="Aggiornamento ISTAT micropermanenti 2026">
          <p className="leading-relaxed">
            Il punto base delle micropermanenti (<InlineNormLink text="art. 139 CdA" url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209" />) è stato aggiornato per il 2026 con la rivalutazione ISTAT dell'1,7%, passando da {formatCurrency(micropermanentiData.puntoBase2025)} a <strong className="font-mono">{formatCurrency(micropermanentiData.puntoBase2026)}</strong>. L'aggiornamento si applica alle liquidazioni effettuate dal 1° gennaio 2026.
          </p>
        </AlertBox>
        <p className="text-base leading-relaxed">
          Sul piano giurisprudenziale, si registrano le prime tensioni tra i valori della TUN e quelli delle Tabelle di Milano. Diversi tribunali di merito hanno sollevato dubbi sulla congruità dei valori TUN, significativamente inferiori a quelli milanesi. La Cassazione sarà chiamata a pronunciarsi sulla questione della possibile incostituzionalità dei valori della TUN, in relazione al principio di integrale riparazione del danno e al diritto alla salute (<InlineNormLink text="art. 32 Cost." url="https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione~art32" />).
        </p>
        <p className="text-base leading-relaxed">
          Per quanto riguarda la TUN, il <InlineNormLink text="D.P.R. 12/2025" url="https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00019/SG" /> prevede un meccanismo di aggiornamento periodico dei valori, ma non ha ancora stabilito una tempistica precisa. Le Tabelle di Milano continueranno ad essere aggiornate dall'Osservatorio sulla Giustizia Civile e resteranno il riferimento prevalente per gli illeciti non rientranti nell'ambito di applicazione della TUN.
        </p>
      </div>

      {/* ===== FAQ ===== */}
      <SectionTitle id="faq" icon={HelpCircle} title="Domande Frequenti (FAQ)" subtitle="Le risposte ai dubbi più comuni sul danno non patrimoniale" />
      <FAQ items={faqData} />

      {/* ===== Normativa ===== */}
      <SectionTitle id="normativa" icon={BookOpen} title="Normativa di Riferimento" />
      <NormativaRefTable items={normativaRiferimento} />
    </ToolLayout>
  );
}
