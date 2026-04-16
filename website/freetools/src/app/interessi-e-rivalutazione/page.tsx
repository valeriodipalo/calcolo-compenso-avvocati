import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/lib/schema";
import { getToolsByCluster } from "@/data/toolRegistry";
import { NormativaRefTable } from "@/components/shared/NormativaRefTable";

export const metadata: Metadata = {
  title: "Interessi Legali, Moratori e Rivalutazione: Guida 2026",
  description:
    "Guida agli interessi legali, moratori e rivalutazione monetaria ISTAT. Differenze, normativa, tassi 2026 e calcolatori gratuiti.",
  alternates: {
    canonical: "https://www.avvocatotools.it/interessi-e-rivalutazione",
  },
  openGraph: {
    title: "Interessi Legali, Moratori e Rivalutazione: Guida 2026",
    description:
      "Guida agli interessi legali, moratori e rivalutazione ISTAT. Differenze, normativa e calcolatori gratuiti.",
    url: "https://www.avvocatotools.it/interessi-e-rivalutazione",
    locale: "it_IT",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interessi Legali, Moratori e Rivalutazione: Guida 2026",
    description:
      "Guida agli interessi legali, moratori e rivalutazione ISTAT. Differenze, normativa e calcolatori gratuiti.",
  },
};

export default function InteressiERivalutazionePage() {
  const tools = getToolsByCluster("interessi");

  return (
    <div className="bg-background">
      {/* JSON-LD */}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Interessi e Rivalutazione", path: "/interessi-e-rivalutazione" },
        ])}
      />
      <JsonLd
        data={articleSchema({
          headline: "Interessi Legali, Moratori e Rivalutazione Monetaria: Guida Completa 2026",
          description:
            "Guida completa a interessi legali, moratori e rivalutazione monetaria ISTAT per professionisti del diritto.",
          path: "/interessi-e-rivalutazione",
          datePublished: "2026-04-06",
          dateModified: "2026-04-06",
          image: "https://www.avvocatotools.it/apple-icon.png",
          sections: [
            "Strumenti di Calcolo",
            "Cosa sono gli interessi legali",
            "Cosa sono gli interessi moratori",
            "Cos'è la rivalutazione monetaria",
            "Tabella storica dei tassi",
            "Differenze tra interessi legali, moratori e rivalutazione",
            "Quando si applicano nella pratica forense",
            "Normativa di riferimento",
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
              <Link href="/" className="hover:text-[oklch(0.25_0.04_250)] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li className="text-[oklch(0.35_0.04_250)] font-medium">
              Interessi e Rivalutazione
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
              Interessi Legali, Moratori e Rivalutazione Monetaria
            </h1>
            <p className="text-[oklch(0.75_0.05_250)] text-lg leading-relaxed">
              Cosa sono, quando si applicano, come si calcolano e quali sono le differenze.
              Normativa aggiornata al 2026 con strumenti di calcolo gratuiti.
            </p>
            <p className="text-[oklch(0.55_0.03_250)] text-xs mt-4">
              Ultimo aggiornamento: 6 aprile 2026 · Redazione AvvocatoTools
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
              Calcolatori gratuiti aggiornati al 2026. Seleziona lo strumento più adatto al tuo caso.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

          {/* Interessi Legali */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Interessi legali: definizione e tasso 2026
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Gli interessi legali sono il rendimento che la legge riconosce al creditore per l'utilizzo
              di un capitale altrui. Disciplinati dall'<strong>art. 1284 del Codice Civile</strong>, hanno
              natura <strong>corrispettiva</strong>: compensano il creditore per il mancato godimento della
              somma dovuta, indipendentemente da qualsiasi colpa del debitore. Si applicano a risarcimenti,
              restituzioni, crediti da lavoro, successioni e espropriazioni.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Per il 2026 il tasso è fissato all'<strong>1,60% annuo</strong> (D.M. 10 dicembre 2025,
              G.U. n. 291). Per la tabella storica completa dei tassi dal 1942, la formula di calcolo,
              le regole sull'anatocismo e gli esempi pratici, consulta il nostro{" "}
              <Link
                href="/calcolo-interessi-legali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore degli interessi legali
              </Link>.
            </p>
          </section>

          {/* Interessi Moratori */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Interessi moratori: definizione e quando si applicano
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Gli interessi moratori sono il risarcimento forfettario dovuto dal debitore in ritardo
              nel pagamento. A differenza degli interessi legali, hanno funzione <strong>sanzionatoria</strong>:
              puniscono l'inadempimento. La fonte principale è il <strong>D.Lgs. 231/2002</strong> (Direttiva UE
              2011/7/UE). Il tasso per il primo semestre 2026 è del <strong>10,15%</strong> annuo (BCE 2,15% + 8%).
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Si applicano automaticamente nelle transazioni commerciali (B2B e B2PA), senza necessità
              di messa in mora. Tra privati serve invece la costituzione in mora ex art. 1219 c.c.
              Per la guida completa su decorrenza, forfettario 40 euro, usura e calcolo, utilizza il nostro{" "}
              <Link
                href="/calcolo-interessi-moratori"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore degli interessi moratori
              </Link>.
            </p>
          </section>

          {/* Rivalutazione Monetaria */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Rivalutazione monetaria ISTAT: cos'è e quando spetta
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              La rivalutazione monetaria adegua il valore di una somma all'inflazione, compensando
              la perdita di potere d'acquisto. Si basa sugli indici ISTAT FOI (Famiglie di Operai e
              Impiegati, base 2015 = 100) ed è fondamentale per i <strong>debiti di valore</strong>:
              risarcimenti danni, crediti da lavoro, indennità. Per i debiti di valuta (somme
              nominalmente determinate) serve invece la prova del danno ulteriore ex art. 1224,
              comma 2, c.c.
            </p>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Per la formula di calcolo, gli indici FOI aggiornati, la distinzione tra debiti di valore
              e di valuta, e gli errori comuni, utilizza il nostro{" "}
              <Link
                href="/calcolo-rivalutazione-monetaria"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore della rivalutazione monetaria
              </Link>.
            </p>
          </section>

          {/* Tabella storica dei tassi */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Confronto tassi legali e moratori 2020-2026
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-6">
              Il confronto tra tassi legali e moratori degli ultimi anni mostra andamenti divergenti:
              il tasso legale segue le politiche monetarie della BCE, mentre il moratorio incorpora
              la maggiorazione fissa dell'8%. Ecco l'evoluzione recente a confronto:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-border" style={{ borderRadius: "0.375rem" }}>
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Anno</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Tasso legale</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Decreto</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Tasso moratorio (I sem.)</th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  {[
                    { anno: "2026", legale: "1,60%", decreto: "D.M. 10/12/2025", moratorio: "10,15%" },
                    { anno: "2025", legale: "2,00%", decreto: "D.M. 10/12/2024", moratorio: "11,50%" },
                    { anno: "2024", legale: "2,50%", decreto: "D.M. 11/12/2023", moratorio: "12,50%" },
                    { anno: "2023", legale: "5,00%", decreto: "D.M. 13/12/2022", moratorio: "10,50%" },
                    { anno: "2022", legale: "1,25%", decreto: "D.M. 13/12/2021", moratorio: "8,00%" },
                    { anno: "2021", legale: "0,01%", decreto: "D.M. 11/12/2020", moratorio: "8,00%" },
                    { anno: "2020", legale: "0,05%", decreto: "D.M. 12/12/2019", moratorio: "8,00%" },
                  ].map((row) => (
                    <tr key={row.anno}>
                      <td className="p-3 border-b border-border font-medium">{row.anno}</td>
                      <td className="p-3 border-b border-border">{row.legale}</td>
                      <td className="p-3 border-b border-border">{row.decreto}</td>
                      <td className="p-3 border-b border-border">{row.moratorio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">
              Il tasso moratorio indicato si riferisce al primo semestre di ogni anno ed è calcolato come tasso BCE + 8%.
              Per la tabella storica completa dei tassi legali dal 1942, consulta il nostro{" "}
              <Link
                href="/calcolo-interessi-legali"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore degli interessi legali
              </Link>.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Differenze tra interessi legali, moratori e rivalutazione
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-6">
              La distinzione tra questi tre istituti è fondamentale nella pratica forense, perché
              determinano importi, tassi e presupposti diversi. L'errore più comune nella pratica
              è confondere la cumulabilità: interessi legali e moratori non si cumulano mai sullo
              stesso periodo (i moratori assorbono i legali), mentre rivalutazione e interessi legali
              sono cumulabili sui debiti di valore. Ecco un confronto dettagliato:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-border" style={{ borderRadius: "0.375rem" }}>
                <thead>
                  <tr className="bg-[oklch(0.97_0.005_250)]">
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Caratteristica</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Interessi legali</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Interessi moratori</th>
                    <th className="text-left p-3 border-b border-border font-semibold text-[oklch(0.25_0.04_250)]">Rivalutazione monetaria</th>
                  </tr>
                </thead>
                <tbody className="text-[oklch(0.30_0.04_250)]">
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Funzione</td>
                    <td className="p-3 border-b border-border">Corrispettiva (compenso per uso del capitale)</td>
                    <td className="p-3 border-b border-border">Sanzionatoria (penale per ritardo nel pagamento)</td>
                    <td className="p-3 border-b border-border">Restitutoria (adeguamento all'inflazione)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Normativa</td>
                    <td className="p-3 border-b border-border">Art. 1284 c.c.</td>
                    <td className="p-3 border-b border-border">D.Lgs. 231/2002, art. 1224 c.c.</td>
                    <td className="p-3 border-b border-border">Art. 1224 co. 2 c.c., indici ISTAT</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Tasso 2026</td>
                    <td className="p-3 border-b border-border">1,60% annuo</td>
                    <td className="p-3 border-b border-border">10,15% annuo (BCE + 8%)</td>
                    <td className="p-3 border-b border-border">Variabile (indice FOI ISTAT)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Si applica a</td>
                    <td className="p-3 border-b border-border">Ogni obbligazione pecuniaria</td>
                    <td className="p-3 border-b border-border">Transazioni commerciali, ritardi</td>
                    <td className="p-3 border-b border-border">Debiti di valore (danni, lavoro)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Presupposto</td>
                    <td className="p-3 border-b border-border">Esistenza del credito</td>
                    <td className="p-3 border-b border-border">Ritardo nel pagamento (mora)</td>
                    <td className="p-3 border-b border-border">Perdita di potere d'acquisto</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-border font-medium">Decorrenza</td>
                    <td className="p-3 border-b border-border">Dalla scadenza del credito</td>
                    <td className="p-3 border-b border-border">Dal giorno dopo la scadenza (B2B) o dalla messa in mora (privati)</td>
                    <td className="p-3 border-b border-border">Dalla data dell'evento lesivo</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Cumulabilità</td>
                    <td className="p-3">Non cumulabile con i moratori sullo stesso periodo</td>
                    <td className="p-3">Assorbe gli interessi legali</td>
                    <td className="p-3">Cumulabile con interessi legali sui debiti di valore</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Quando si applicano */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Quando si applicano nella pratica forense
            </h2>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nella pratica quotidiana dell'avvocato, la scelta tra interessi legali, moratori e
              rivalutazione dipende dalla natura del credito e dal contesto del rapporto obbligatorio.
              Di seguito i casi più frequenti.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Risarcimento danni (debiti di valore)
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nel risarcimento del danno extracontrattuale (art. 2043 c.c.) il giudice applica
              la <strong>rivalutazione monetaria</strong> dalla data dell'illecito alla sentenza,
              più gli <strong>interessi legali</strong> calcolati sulla somma via via rivalutata
              (metodo della Cassazione, Sez. Un. 1712/1995). I due istituti sono cumulabili
              perché rispondono a funzioni diverse: la rivalutazione ripristina il valore reale,
              gli interessi compensano il mancato godimento. Per quantificare il risarcimento
              complessivo puoi combinare il nostro{" "}
              <Link
                href="/calcolo-danno-biologico"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                calcolatore del danno biologico
              </Link>
              {" "}con il calcolatore della rivalutazione e degli interessi.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Transazioni commerciali (fatture, forniture)
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nelle transazioni tra imprese soggette al D.Lgs. 231/2002, il ritardo nel
              pagamento fa scattare automaticamente gli <strong>interessi moratori</strong>
              al tasso BCE + 8%, senza bisogno di diffida. Il creditore ha anche diritto
              al risarcimento forfettario di 40 euro per i costi di recupero. I termini di
              pagamento standard sono 30 giorni dalla ricezione della fattura (60 giorni per
              la PA), salvo diversa pattuizione che non sia gravemente iniqua per il creditore.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Decreto ingiuntivo
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              Nel ricorso per decreto ingiuntivo è prassi chiedere la condanna al pagamento
              degli interessi legali (o moratori, se applicabili) dalla data di scadenza
              dell'obbligazione al saldo. Se il credito deriva da una transazione commerciale,
              si chiederanno gli interessi moratori ex D.Lgs. 231/2002. Ricorda che per il
              deposito del ricorso è necessario versare il{" "}
              <Link
                href="/contributo-unificato"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                contributo unificato
              </Link>
              , calcolabile con il nostro strumento dedicato.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Crediti da lavoro
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed mb-4">
              I crediti retributivi sono debiti di valore: il lavoratore ha diritto alla
              rivalutazione monetaria ex art. 429, comma 3, c.p.c. più gli interessi legali
              sulla somma rivalutata. Anche in questo caso rivalutazione e interessi sono cumulabili.
              La Cassazione (Sez. Lav. 12941/2012) ha confermato che il cumulo opera automaticamente
              senza necessità di specifica domanda.
            </p>

            <h3 className="text-lg font-semibold text-[oklch(0.25_0.04_250)] mb-2 mt-6">
              Danno non patrimoniale
            </h3>
            <p className="text-base text-[oklch(0.30_0.04_250)] leading-relaxed">
              Anche il{" "}
              <Link
                href="/calcolo-danno-non-patrimoniale"
                className="font-semibold text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline underline-offset-2 transition-colors"
              >
                danno non patrimoniale
              </Link>
              {" "}(danno morale, esistenziale, parentale) è un debito di valore soggetto a rivalutazione
              e interessi. Le Tabelle di Milano, utilizzate come riferimento dalla giurisprudenza di
              legittimità, esprimono valori già rivalutati: gli interessi legali vanno calcolati
              dalla data dell'evento alla sentenza sulla somma progressivamente rivalutata.
            </p>
          </section>

          {/* Normativa */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Normativa di riferimento
            </h2>
            <NormativaRefTable
              items={[
                {
                  norma: "Art. 1284 c.c.",
                  descrizione: "Tasso di interesse legale e sua determinazione annuale",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1284",
                },
                {
                  norma: "Art. 1224 c.c.",
                  descrizione: "Danni nelle obbligazioni pecuniarie (interessi moratori tra privati)",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1224",
                },
                {
                  norma: "Art. 1283 c.c.",
                  descrizione: "Anatocismo — divieto di capitalizzazione degli interessi",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1283",
                },
                {
                  norma: "Art. 1219 c.c.",
                  descrizione: "Costituzione in mora del debitore",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art1219",
                },
                {
                  norma: "D.Lgs. 231/2002",
                  descrizione: "Lotta contro i ritardi di pagamento nelle transazioni commerciali",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2002-10-09;231",
                },
                {
                  norma: "Direttiva 2011/7/UE",
                  descrizione: "Direttiva europea sui ritardi di pagamento (recepita dal D.Lgs. 231/2002)",
                  url: "https://eur-lex.europa.eu/legal-content/IT/TXT/?uri=CELEX:32011L0007",
                },
                {
                  norma: "Art. 429, co. 3, c.p.c.",
                  descrizione: "Rivalutazione e interessi sui crediti da lavoro",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1940-10-28;1443~art429",
                },
                {
                  norma: "Art. 2043 c.c.",
                  descrizione: "Risarcimento del danno extracontrattuale",
                  url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262~art2043",
                },
                {
                  norma: "D.M. Economia 10 dicembre 2025",
                  descrizione: "Fissazione del tasso legale 2026 all'1,60%",
                  url: "https://www.gazzettaufficiale.it/eli/id/2025/12/13/25A06705/sg",
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
                  q: "Qual è la differenza tra interessi legali e moratori?",
                  a: "Gli interessi legali (art. 1284 c.c.) compensano il creditore per l'uso del suo capitale e si applicano a qualsiasi obbligazione pecuniaria al tasso dell'1,60% nel 2026. Gli interessi moratori (D.Lgs. 231/2002) hanno funzione sanzionatoria e si applicano in caso di ritardo nel pagamento, al tasso del 10,15% nel 2026. I moratori assorbono i legali: non si cumulano sullo stesso periodo.",
                },
                {
                  q: "Quando si applicano gli interessi moratori?",
                  a: "Nelle transazioni commerciali (tra imprese o tra imprese e PA) gli interessi moratori decorrono automaticamente dal giorno successivo alla scadenza del termine di pagamento, senza necessità di costituzione in mora. Nei rapporti tra privati, è invece necessaria una formale messa in mora ai sensi dell'art. 1219 c.c.",
                },
                {
                  q: "Interessi legali e rivalutazione monetaria sono cumulabili?",
                  a: "Sì, ma solo per i debiti di valore (risarcimento danni, crediti da lavoro). In questi casi il giudice rivaluta il capitale all'inflazione ISTAT e poi calcola gli interessi legali sulla somma rivalutata. Per i debiti di valuta (somme nominalmente determinate), la rivalutazione non si applica automaticamente: il creditore deve provare un danno maggiore ai sensi dell'art. 1224, comma 2, c.c.",
                },
                {
                  q: "Qual è il tasso degli interessi legali per il 2026?",
                  a: "Il tasso di interesse legale per il 2026 è dell'1,60% annuo, stabilito con D.M. 10 dicembre 2025 (G.U. n. 291 del 13 dicembre 2025). Il tasso precedente (2025) era del 2,00%. Il tasso legale è calato progressivamente dal picco del 5,00% del 2023, seguendo la discesa dei tassi BCE.",
                },
                {
                  q: "Cosa sono gli interessi compensativi?",
                  a: "Gli interessi compensativi sono dovuti per compensare il creditore del mancato godimento di una somma già spettante (es. prezzo di un bene consegnato ma non ancora pagato, art. 1499 c.c.). Si distinguono dai moratori perché prescindono dalla mora del debitore e dai legali perché hanno una base giuridica specifica.",
                },
                {
                  q: "Come si calcola la rivalutazione monetaria ISTAT?",
                  a: "La rivalutazione si calcola applicando al capitale originario la variazione percentuale dell'indice FOI (Famiglie di Operai e Impiegati) pubblicato dall'ISTAT. La formula è: Capitale Rivalutato = Capitale × (Indice FOI data finale / Indice FOI data iniziale). L'indice viene aggiornato mensilmente dall'ISTAT con base 2015 = 100.",
                },
                {
                  q: "Quando non sono dovuti gli interessi moratori?",
                  a: "Gli interessi moratori non sono dovuti quando il ritardo nel pagamento non è imputabile al debitore, ad esempio in caso di forza maggiore o di contestazione legittima del debito. Inoltre, quando il tasso moratorio supera la soglia di usura al momento della stipula del contratto, gli interessi moratori non sono dovuti e, se pagati, devono essere restituiti (Cass. Sez. Un. 19597/2020).",
                },
                {
                  q: "Gli interessi moratori si applicano tra privati?",
                  a: "Il D.Lgs. 231/2002 si applica solo alle transazioni commerciali (B2B e B2PA). Tra privati, il creditore può chiedere gli interessi moratori al tasso legale (art. 1224, comma 1, c.c.) dalla data della costituzione in mora. Se dimostra un danno maggiore, può ottenere anche il risarcimento supplementare ex art. 1224, comma 2, c.c.",
                },
                {
                  q: "Cos'è il forfettario di 40 euro per i costi di recupero?",
                  a: "L'art. 6 del D.Lgs. 231/2002 prevede che il creditore abbia diritto a un importo forfettario di 40 euro a titolo di risarcimento dei costi di recupero del credito, senza dover fornire alcuna prova del danno subito. Questo importo è dovuto automaticamente ed è cumulabile con gli interessi moratori e con l'eventuale risarcimento del danno ulteriore.",
                },
                {
                  q: "Come si calcolano gli interessi su un credito che attraversa più anni?",
                  a: "Quando il periodo di calcolo attraversa più annualità, si devono applicare i diversi tassi legali vigenti in ciascun anno. Il calcolo va frazionato per ogni periodo con tasso omogeneo. Ad esempio, per un credito dal 1° marzo 2025 al 30 giugno 2026: dal 1/3/2025 al 31/12/2025 si applica il 2,00%, dal 1/1/2026 al 30/6/2026 si applica l'1,60%. Il nostro calcolatore gestisce automaticamente questa suddivisione.",
                },
                {
                  q: "Qual è la differenza tra debito di valore e debito di valuta?",
                  a: "Il debito di valore ha ad oggetto una prestazione che al momento del sorgere dell'obbligazione non è determinata in denaro ma va tradotta in denaro al momento della liquidazione (es. risarcimento danni). Il debito di valuta ha invece ad oggetto fin dall'origine una somma di denaro determinata (es. prezzo di vendita, canone di locazione). La distinzione è cruciale perché solo i debiti di valore beneficiano automaticamente della rivalutazione monetaria.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group border border-border bg-white"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <summary className="cursor-pointer p-4 text-sm font-semibold text-[oklch(0.25_0.04_250)] list-none flex items-center justify-between">
                    {item.q}
                    <span className="text-[oklch(0.50_0.02_250)] group-open:rotate-180 transition-transform ml-2">
                      ▾
                    </span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-[oklch(0.35_0.04_250)] leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Cross-cluster tools */}
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-lg font-serif text-[oklch(0.25_0.04_250)] mb-4">
              Potrebbe servirti anche
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { slug: "calcolo-danno-biologico", title: "Calcolo Danno Biologico" },
                { slug: "calcolo-danno-non-patrimoniale", title: "Calcolo Danno Non Patrimoniale" },
                { slug: "calcolo-compenso", title: "Calcolo Compenso Avvocato" },
                { slug: "contributo-unificato", title: "Contributo Unificato" },
              ].map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  className="group flex items-center gap-3 p-3 bg-[oklch(0.98_0.005_250)] hover:bg-[oklch(0.96_0.01_85)] border border-border transition-colors"
                  style={{ borderRadius: "0.375rem" }}
                >
                  <p className="text-sm font-semibold text-[oklch(0.25_0.04_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors">
                    {tool.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-10 pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Le informazioni contenute in questa pagina hanno carattere meramente informativo e non
              costituiscono parere legale. I tassi, gli importi e i riferimenti normativi sono aggiornati
              alla data di ultima modifica indicata. Per questioni specifiche si consiglia di rivolgersi
              a un professionista abilitato.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
