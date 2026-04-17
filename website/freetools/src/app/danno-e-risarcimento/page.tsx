import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { getToolsByCluster } from "@/data/toolRegistry";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";

export const metadata: Metadata = {
  title: "Danno Non Patrimoniale: Guida 2026 al Risarcimento",
  description:
    "Guida al danno non patrimoniale 2026: biologico, morale, parentale. Tabelle Milano vs TUN, art. 139 CdA, casi pratici e calcolatori gratuiti.",
  alternates: {
    canonical: "https://www.avvocatotools.it/danno-e-risarcimento",
  },
  openGraph: {
    title: "Danno Non Patrimoniale: Guida 2026 al Risarcimento",
    description:
      "Danno biologico, morale e parentale: differenze, tabelle Milano vs TUN e calcolatori gratuiti.",
    url: "https://www.avvocatotools.it/danno-e-risarcimento",
    locale: "it_IT",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danno Non Patrimoniale: Guida 2026 al Risarcimento",
    description:
      "Danno biologico, morale e parentale: differenze, tabelle Milano vs TUN e calcolatori gratuiti.",
  },
};

export default function DannoERisarcimentoPage() {
  const tools = getToolsByCluster("danno");

  return (
    <div className="bg-background">
      {/* JSON-LD */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Danno e Risarcimento", path: "/danno-e-risarcimento" },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline:
            "Danno e Risarcimento: Guida 2026 al Danno Non Patrimoniale — Biologico, Morale, Parentale",
          description:
            "Guida completa al danno non patrimoniale: categorie (biologico, morale, esistenziale, parentale), sistemi di liquidazione (Tabelle Milano, TUN, art. 139 CdA) e strumenti di calcolo gratuiti.",
          path: "/danno-e-risarcimento",
          datePublished: "2026-04-17",
          dateModified: "2026-04-17",
          image: "https://www.avvocatotools.it/apple-icon.png",
          sections: [
            "Strumenti di Calcolo",
            "Il danno non patrimoniale in sintesi",
            "Il danno biologico in sintesi",
            "Danno morale, esistenziale e parentale",
            "Tabelle Milano, TUN e art. 139 CdA a confronto",
            "Quando si applica il risarcimento del danno",
            "Quadro normativo di riferimento",
            "Domande frequenti",
          ],
        })}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[oklch(0.97_0.005_250)] border-b border-border"
      >
        <div className="container py-2">
          <ol className="flex items-center gap-1.5 text-xs text-[oklch(0.50_0.02_250)]">
            <li>
              <Link
                href="/"
                className="hover:text-[oklch(0.25_0.04_250)] transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">
              ›
            </li>
            <li className="text-[oklch(0.35_0.04_250)] font-medium">
              Danno e Risarcimento
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[oklch(0.25_0.04_250)] pb-14 pt-10">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-[oklch(0.75_0.10_85)] text-sm font-semibold uppercase tracking-widest mb-3">
              Guida Completa
            </p>
            <h1 className="text-3xl md:text-4xl text-white leading-tight mb-4">
              Danno e Risarcimento: Guida al Danno Non Patrimoniale
            </h1>
            <p className="text-[oklch(0.75_0.05_250)] text-lg leading-relaxed">
              Cos'è il danno non patrimoniale, come si distinguono danno
              biologico, morale e parentale, qual è la differenza tra Tabelle
              Milano e TUN e quando si applica l'art. 139 CdA. Guida con
              calcolatori gratuiti aggiornata al 2026.
            </p>
            <p className="text-[oklch(0.55_0.03_250)] text-xs mt-4">
              Ultimo aggiornamento: 17 aprile 2026 · Redazione AvvocatoTools
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">

          {/* Tool Cards */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-2">
              Strumenti di Calcolo
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Calcolatori gratuiti aggiornati al 2026. Seleziona lo strumento
              più adatto al tuo caso.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="group bg-white border border-border p-5 transition-all hover:border-[oklch(0.75_0.10_85)] hover:shadow-md"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    <div
                      className="bg-[oklch(0.25_0.04_250)] p-2 w-fit mb-3"
                      style={{ borderRadius: "0.375rem" }}
                    >
                      <Icon className="w-5 h-5 text-[oklch(0.75_0.10_85)]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {tool.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[oklch(0.45_0.12_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors">
                      Vai al calcolatore <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Il danno non patrimoniale */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Il danno non patrimoniale: definizione e categorie in sintesi
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il <strong>danno non patrimoniale</strong> è il pregiudizio che
              colpisce la sfera personale del soggetto senza incidere
              direttamente sul patrimonio. È disciplinato dall'
              <strong>art. 2059 del Codice Civile</strong>, che ne limita il
              risarcimento ai casi previsti dalla legge. Con le sentenze
              gemelle delle Sezioni Unite del 2008 (Cass. S.U. n. 26972-26975)
              la Corte di Cassazione ha ricondotto a unità le precedenti
              categorie frammentate, affermando che il danno non patrimoniale è
              un concetto unitario che si articola in diverse{" "}
              <strong>componenti descrittive</strong>: danno biologico (lesione
              dell'integrità psicofisica), danno morale (sofferenza interiore),
              danno esistenziale (compromissione delle attività realizzatrici)
              e danno parentale (perdita del rapporto affettivo con un
              congiunto).
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Il risarcimento del danno non patrimoniale presuppone un fatto
              illecito (art. 2043 c.c.), un danno ingiusto e un nesso di
              causalità. L'onere della prova grava sul danneggiato, ma la
              giurisprudenza ammette il ricorso a presunzioni semplici per le
              componenti morali e parentali. La liquidazione avviene in via
              equitativa, con l'ausilio di tabelle — le{" "}
              <strong>Tabelle del Tribunale di Milano</strong> (edizione 2024),
              la <strong>Tabella Unica Nazionale</strong> (TUN, D.P.R.
              12/2025) per le micropermanenti, e i criteri dell'
              <strong>art. 139 del Codice delle Assicurazioni</strong>. Per
              simulare la liquidazione con tutti e tre i sistemi, utilizza il
              nostro{" "}
              <Link
                href="/calcolo-danno-non-patrimoniale"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del danno non patrimoniale
              </Link>
              .
            </p>
          </section>

          {/* Il danno biologico */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Il danno biologico: cos'è e quando spetta il risarcimento
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il <strong>danno biologico</strong> è la lesione dell'integrità
              psicofisica della persona, accertata medicalmente, che incide
              sulle attività quotidiane indipendentemente dalla capacità di
              produrre reddito. La definizione legislativa è contenuta
              nell'<strong>art. 138 del D.Lgs. 209/2005</strong> (Codice delle
              Assicurazioni): il danno biologico comprende sia la componente{" "}
              <strong>permanente</strong> (invalidità residua espressa in punti
              percentuali) sia quella <strong>temporanea</strong> (periodo di
              inabilità totale o parziale). Le lesioni si distinguono in{" "}
              <strong>micropermanenti</strong> (1-9% di invalidità, art. 139
              CdA) e <strong>macropermanenti</strong> (10-100%), con sistemi di
              liquidazione differenti.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Per le micropermanenti il risarcimento è calcolato secondo una
              formula matematica fissata per legge (art. 139 CdA, aggiornato
              annualmente con decreto MISE/MIMIT), mentre per le
              macropermanenti si applicano le Tabelle del Tribunale di Milano
              o, dal marzo 2025, la Tabella Unica Nazionale (TUN, D.P.R.
              12/2025). Il danno biologico temporaneo (ITT e ITP) è risarcito
              con importi giornalieri che variano a seconda del grado di
              inabilità. Per simulare il calcolo esatto — con micropermanenti,
              macropermanenti, ITT e ITP — utilizza il nostro{" "}
              <Link
                href="/calcolo-danno-biologico"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del danno biologico
              </Link>
              .
            </p>
          </section>

          {/* Danno morale, esistenziale e parentale */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Danno morale, esistenziale e parentale: come si distinguono
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Oltre al danno biologico, il danno non patrimoniale comprende
              componenti prive di un substrato medico-legale oggettivo. Il{" "}
              <strong>danno morale</strong> (o <em>pretium doloris</em>)
              consiste nella sofferenza interiore, nel patema d'animo, nel
              turbamento psicologico causato dall'illecito. Non richiede una
              diagnosi medica ma si prova tramite presunzioni: gravità del
              fatto, circostanze del caso, condotta dell'offensore. Le Tabelle
              di Milano 2024 lo liquidano come percentuale incrementale del
              danno biologico (dal 25% al 50% del biologico, a seconda della
              gravità), mentre la TUN lo incorpora direttamente nel valore-punto.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Il <strong>danno esistenziale</strong> riguarda la
              compromissione delle attività realizzatrici della persona: la
              rinuncia forzata ad abitudini di vita, hobby, relazioni sociali
              causata dall'evento lesivo. Dopo le Sezioni Unite del 2008, non
              costituisce una voce autonoma di danno ma una componente
              descrittiva che il giudice valuta nella personalizzazione del
              risarcimento.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Il <strong>danno parentale</strong> (<em>danno da perdita del
              rapporto parentale</em>) è il pregiudizio subìto dai familiari
              della vittima deceduta o gravemente lesa. Le Tabelle di Milano
              prevedono forchette di valore per ogni rapporto parentale
              (coniuge, figlio, genitore, fratello), con importi che variano in
              base all'età della vittima e del superstite, alla convivenza e
              alla composizione del nucleo familiare. Per il calcolo del danno
              parentale utilizza il nostro{" "}
              <Link
                href="/calcolo-danno-non-patrimoniale"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del danno non patrimoniale
              </Link>
              .
            </p>
          </section>

          {/* Comparison table — HUB EXCLUSIVE */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Tabelle Milano, TUN e art. 139 CdA: i sistemi di liquidazione a confronto
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              In Italia coesistono tre sistemi di liquidazione del danno non
              patrimoniale. La tabella che segue ne sintetizza ambito, fonte e
              caratteristiche principali.
            </p>
            <div className="overflow-x-auto">
              <table
                className="w-full text-sm border border-border"
                style={{ borderRadius: "0.375rem" }}
              >
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Sistema
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Ambito
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Fonte
                    </th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">
                      Caratteristica chiave
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Art. 139 CdA
                    </td>
                    <td className="p-3 border-b border-border">
                      Micropermanenti (1-9%) da sinistro stradale e
                      responsabilità sanitaria
                    </td>
                    <td className="p-3 border-b border-border">
                      Legge (D.Lgs. 209/2005)
                    </td>
                    <td className="p-3 border-b border-border">
                      Formula matematica con coefficiente distruttivo;
                      aggiornamento annuale MIMIT; vincolante per il giudice
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      Tabelle Milano 2024
                    </td>
                    <td className="p-3 border-b border-border">
                      Macropermanenti (10-100%), danno morale, parentale,
                      ITT/ITP — tutti gli illeciti
                    </td>
                    <td className="p-3 border-b border-border">
                      Giurisprudenziale (Tribunale di Milano)
                    </td>
                    <td className="p-3 border-b border-border">
                      Valore-punto per età e grado di invalidità; morale come
                      incremento percentuale; non vincolanti ma adottate dalla
                      quasi totalità dei tribunali
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      TUN (D.P.R. 12/2025)
                    </td>
                    <td className="p-3 border-b border-border">
                      Micropermanenti (1-9%) — in vigore dal 5 marzo 2025
                    </td>
                    <td className="p-3 border-b border-border">
                      Regolamentare (ex art. 138 CdA)
                    </td>
                    <td className="p-3 border-b border-border">
                      Tabella Unica Nazionale con valore-punto inclusivo di
                      morale; valori generalmente superiori all'art. 139;
                      vincolante; applicabile alle micropermanenti
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">
                      INAIL
                    </td>
                    <td className="p-3 border-b border-border">
                      Infortuni sul lavoro e malattie professionali (invalidità
                      ≥ 6%)
                    </td>
                    <td className="p-3 border-b border-border">
                      Regolamentare (D.Lgs. 38/2000)
                    </td>
                    <td className="p-3 border-b border-border">
                      Indennizzo in rendita (≥ 16%) o capitale (6-15%); non è
                      risarcimento del danno ma indennizzo; scorporabile dal
                      risarcimento civile
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Casi pratici — HUB EXCLUSIVE */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quando si applica il risarcimento del danno: i casi pratici
            </h2>
            <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
              Sinistro stradale con micropermanenti
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              In un incidente stradale con lesioni di lieve entità (1-9% di
              invalidità permanente), il risarcimento del danno biologico è
              calcolato applicando la formula dell'art. 139 CdA (o, dal marzo
              2025, la TUN se il giudice la ritiene applicabile). Il danneggiato
              ha diritto al risarcimento del danno biologico permanente,
              dell'inabilità temporanea (ITT e ITP) e del danno morale. La
              personalizzazione del risarcimento può aumentare il valore tabellare
              fino a un terzo, in presenza di circostanze eccezionali. Per
              simulare questo scenario utilizza il{" "}
              <Link
                href="/calcolo-danno-biologico"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del danno biologico
              </Link>
              .
            </p>

            <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
              Responsabilità medica con macropermanenti
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Un errore medico che causa un'invalidità del 25% è liquidato con
              le Tabelle di Milano 2024 (macropermanenti). Il risarcimento
              comprende: danno biologico permanente (valore-punto per età e
              grado), danno biologico temporaneo (ITT + ITP per i giorni di
              malattia), componente morale (incremento dal 25% al 50% del
              biologico a seconda della gravità delle circostanze). Il
              danneggiato può inoltre chiedere il risarcimento del danno
              patrimoniale per le spese mediche sostenute e il lucro cessante.
              Per il calcolo complessivo utilizza il nostro{" "}
              <Link
                href="/calcolo-danno-non-patrimoniale"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del danno non patrimoniale
              </Link>
              .
            </p>

            <h3 className="text-xl text-[oklch(0.25_0.04_250)] mt-6 mb-3">
              Decesso del congiunto — danno parentale
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              In caso di morte della vittima, i familiari superstiti hanno
              diritto al <strong>risarcimento del danno parentale</strong> in
              via autonoma (<em>iure proprio</em>). Le Tabelle di Milano
              prevedono forchette di valore per rapporto parentale: ad esempio,
              per il coniuge superstite gli importi vanno da circa 168.000 a
              340.000 euro (edizione 2024), variabili in base a convivenza, età,
              composizione del nucleo familiare. A questo si aggiunge il danno
              catastrofale (<em>danno terminale</em>) se la vittima ha
              attraversato un apprezzabile lasso di tempo tra l'evento lesivo
              e la morte, periodo durante il quale ha sofferto consapevolmente.
              Per il calcolo del danno parentale con le tabelle aggiornate
              utilizza il{" "}
              <Link
                href="/calcolo-danno-non-patrimoniale"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del danno non patrimoniale
              </Link>
              .
            </p>
          </section>

          {/* Normativa */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quadro normativo di riferimento
            </h2>
            <NormativaRefTable
              items={[
                {
                  norma: "Art. 2043 c.c.",
                  descrizione:
                    "Risarcimento per fatto illecito — obbligo di risarcire il danno ingiusto causato con dolo o colpa",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2043",
                },
                {
                  norma: "Art. 2059 c.c.",
                  descrizione:
                    "Danni non patrimoniali — il danno non patrimoniale deve essere risarcito solo nei casi determinati dalla legge (interpretazione costituzionalmente orientata)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2059",
                },
                {
                  norma: "Art. 138 D.Lgs. 7 settembre 2005, n. 209",
                  descrizione:
                    "Codice delle Assicurazioni — definizione di danno biologico e previsione della Tabella Unica Nazionale per le lesioni di non lieve entità",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209~art138",
                },
                {
                  norma: "Art. 139 D.Lgs. 209/2005",
                  descrizione:
                    "Risarcimento micropermanenti (1-9%) — formula di calcolo per danno biologico da sinistro stradale e responsabilità sanitaria, con aggiornamento annuale MIMIT",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2005-09-07;209~art139",
                },
                {
                  norma: "D.P.R. 13 gennaio 2025, n. 12",
                  descrizione:
                    "Tabella Unica Nazionale (TUN) — tabelle per le micropermanenti ex art. 138 CdA; in vigore dal 5 marzo 2025; valori-punto inclusivi di componente morale",
                  url: "https://www.gazzettaufficiale.it/eli/id/2025/02/18/25G00020/sg",
                },
                {
                  norma: "D.Lgs. 23 febbraio 2000, n. 38",
                  descrizione:
                    "Riforma del sistema INAIL — indennizzo del danno biologico per infortuni sul lavoro e malattie professionali (invalidità ≥ 6%)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2000-02-23;38",
                },
                {
                  norma: "Art. 32 Costituzione",
                  descrizione:
                    "Tutela della salute come diritto fondamentale dell'individuo — fondamento costituzionale del danno biologico",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:costituzione:1947-12-27;1~art32",
                },
                {
                  norma: "Cass. S.U. n. 26972-26975/2008",
                  descrizione:
                    "Sentenze gemelle delle Sezioni Unite — unitarietà del danno non patrimoniale; biologico, morale ed esistenziale come componenti descrittive",
                  url: "https://www.giustizia.it",
                },
              ]}
            />
          </section>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-6">
              Domande frequenti
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Qual è la differenza tra danno biologico e danno non patrimoniale?",
                  a: "Il danno biologico è una componente del danno non patrimoniale. Il danno non patrimoniale è la categoria generale (art. 2059 c.c.) che comprende tutto il pregiudizio alla sfera personale: danno biologico (lesione psicofisica accertata medicalmente), danno morale (sofferenza interiore), danno esistenziale (compromissione delle attività di vita) e danno parentale (perdita del rapporto affettivo). Il danno biologico, quindi, non è un concetto alternativo ma una sotto-voce del danno non patrimoniale.",
                },
                {
                  q: "Il danno biologico è un danno patrimoniale?",
                  a: "No, il danno biologico è una componente del danno non patrimoniale. Tutela l'integrità psicofisica (art. 32 Cost.) indipendentemente dalla capacità di produrre reddito. Il danno patrimoniale, invece, riguarda le perdite economiche: danno emergente (spese mediche, costi sostenuti) e lucro cessante (mancato guadagno). Biologico e patrimoniale possono coesistere: un infortunio che causa invalidità dà diritto sia al risarcimento del danno biologico sia al risarcimento delle spese mediche e del reddito perso.",
                },
                {
                  q: "Che differenza c'è tra Tabelle Milano e Tabella Unica Nazionale?",
                  a: "Le Tabelle di Milano sono criteri giurisprudenziali elaborati dal Tribunale di Milano (edizione 2024) per liquidare il danno non patrimoniale in tutte le sue componenti, dalle micropermanenti alle macropermanenti al danno parentale. Non sono vincolanti ma sono adottate dalla quasi totalità dei tribunali italiani. La TUN (D.P.R. 12/2025) è una tabella regolamentare vincolante, emanata in attuazione dell'art. 138 CdA, che si applica alle micropermanenti (1-9%). I valori-punto della TUN sono generalmente superiori a quelli dell'art. 139 CdA perché includono la componente morale.",
                },
                {
                  q: "Cos'è il danno morale e come si calcola?",
                  a: "Il danno morale (pretium doloris) è la sofferenza interiore causata dall'illecito. Non ha una formula matematica propria: le Tabelle di Milano lo liquidano come incremento percentuale del danno biologico (dal 25% al 50% circa, a seconda della gravità e delle circostanze). La TUN, per le micropermanenti, lo incorpora direttamente nel valore-punto. La prova del danno morale può avvenire anche per presunzioni.",
                },
                {
                  q: "Cos'è il danno parentale e quanto vale?",
                  a: "Il danno parentale (o danno da perdita del rapporto parentale) è il risarcimento spettante ai familiari della vittima deceduta o gravemente lesa, a titolo di danno proprio (iure proprio). Le Tabelle di Milano 2024 prevedono forchette di valore per rapporto: coniuge (168.000-340.000 euro circa), figlio (168.000-340.000), genitore (168.000-340.000), fratello (25.000-148.000). L'importo varia per convivenza, età, composizione del nucleo familiare.",
                },
                {
                  q: "Cos'è il danno catastrofale?",
                  a: "Il danno catastrofale (o danno terminale) è il pregiudizio subìto dalla vittima che, a seguito dell'evento lesivo, ha attraversato un apprezzabile lasso di tempo di lucida consapevolezza dell'imminenza della propria morte. È risarcibile iure hereditatis (trasmissibile agli eredi) e viene liquidato equitativamente dal giudice, spesso con riferimento ai parametri del danno biologico temporaneo rapportato al massimo grado di inabilità.",
                },
                {
                  q: "Quanto vale un punto di invalidità?",
                  a: "Il valore del punto varia a seconda del sistema utilizzato e dell'età del danneggiato. Con l'art. 139 CdA il valore-punto base per le micropermanenti è di circa 957 euro (aggiornamento 2025), decrescente con l'età del danneggiato (coefficiente distruttivo). Con le Tabelle Milano 2024 il valore-punto per le macropermanenti varia da circa 1.500 a oltre 13.000 euro in base al grado di invalidità e all'età. La TUN (D.P.R. 12/2025) prevede valori-punto inclusivi di morale generalmente superiori all'art. 139.",
                },
                {
                  q: "L'indennizzo INAIL esclude il risarcimento civile del danno biologico?",
                  a: "No, l'indennizzo INAIL (D.Lgs. 38/2000) e il risarcimento civile del danno biologico coesistono, ma l'importo corrisposto dall'INAIL viene scorporato dal risarcimento complessivo per evitare la doppia liquidazione. Il datore di lavoro (o il suo assicuratore) risarcisce la differenza tra il danno biologico calcolato civilisticamente (Tabelle Milano) e l'indennizzo INAIL già percepito.",
                },
                {
                  q: "Quando si riconosce il danno non patrimoniale?",
                  a: "Il danno non patrimoniale è risarcibile nei casi previsti dalla legge (art. 2059 c.c.): responsabilità da fatto illecito con lesione di diritti inviolabili della persona (salute, libertà, famiglia), reati (art. 185 c.p.), responsabilità contrattuale che violi diritti fondamentali. La giurisprudenza ha esteso il risarcimento a tutti i casi di lesione di diritti costituzionalmente protetti, purché il pregiudizio sia serio e non consista in meri disagi.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-white border border-border overflow-hidden transition-colors hover:border-[oklch(0.75_0.10_85)]"
                  style={{ borderRadius: "0.5rem" }}
                >
                  <summary className="cursor-pointer p-4 font-semibold text-[oklch(0.25_0.04_250)] list-none flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-[oklch(0.75_0.10_85)] group-open:rotate-45 transition-transform text-2xl font-light">
                      +
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-[oklch(0.30_0.04_250)] leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Cross-cluster */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Potrebbe servirti anche
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/calcolo-interessi-legali"
                className="group bg-white border border-border p-4 transition-all hover:border-[oklch(0.75_0.10_85)]"
                style={{ borderRadius: "0.5rem" }}
              >
                <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                  Calcolo Interessi Legali
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Per il calcolo degli interessi legali sulla somma risarcita,
                  al tasso 2026 dell'1,60%.
                </p>
              </Link>
              <Link
                href="/calcolo-rivalutazione-monetaria"
                className="group bg-white border border-border p-4 transition-all hover:border-[oklch(0.75_0.10_85)]"
                style={{ borderRadius: "0.5rem" }}
              >
                <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                  Rivalutazione Monetaria
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Per la rivalutazione ISTAT della somma risarcita dalla data
                  del sinistro alla liquidazione.
                </p>
              </Link>
              <Link
                href="/calcolo-compenso"
                className="group bg-white border border-border p-4 transition-all hover:border-[oklch(0.75_0.10_85)]"
                style={{ borderRadius: "0.5rem" }}
              >
                <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                  Calcolo Compenso Avvocato
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Per la liquidazione giudiziale dei compensi forensi nella
                  causa di risarcimento danni.
                </p>
              </Link>
              <Link
                href="/contributo-unificato"
                className="group bg-white border border-border p-4 transition-all hover:border-[oklch(0.75_0.10_85)]"
                style={{ borderRadius: "0.5rem" }}
              >
                <h3 className="text-sm font-semibold text-[oklch(0.25_0.04_250)] mb-1">
                  Contributo Unificato
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Per il calcolo del contributo unificato nel giudizio di
                  risarcimento danni.
                </p>
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="border-t border-border pt-6 mt-10">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong>Disclaimer</strong> — Le informazioni fornite in questa
              guida hanno finalità informativa e non costituiscono consulenza
              legale. Le tabelle di liquidazione sono soggette ad aggiornamenti
              periodici e a interpretazioni giurisprudenziali; per casi
              concreti si raccomanda di consultare un avvocato specializzato in
              responsabilità civile. Gli strumenti di calcolo non sostituiscono
              il giudizio professionale.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
