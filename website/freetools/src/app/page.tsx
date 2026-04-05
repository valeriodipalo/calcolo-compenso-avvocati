import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { JsonLd, webPageSchema } from "@/lib/schema";
import { TOOLS } from "@/data/toolRegistry";

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Structured data: WebPage */}
      <JsonLd
        data={webPageSchema({
          name: "Strumenti Legali Gratuiti | Piattaforma Avvocati",
          description:
            "Calcolatori e strumenti gratuiti per avvocati: contributo unificato, compenso professionale e altro.",
          path: "/",
          datePublished: "2025-06-01",
          dateModified: "2026-03-26",
        })}
      />

      {/* Hero */}
      <section className="bg-[oklch(0.25_0.04_250)] pb-16 pt-12">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-[oklch(0.75_0.10_85)] text-sm font-semibold uppercase tracking-widest mb-3">
              Avvocatotools.it
            </p>
            <h1 className="text-4xl md:text-5xl text-white leading-tight mb-4">
              Strumenti Legali Gratuiti
            </h1>
            <p className="text-[oklch(0.75_0.05_250)] text-lg leading-relaxed">
              Calcolatori e guide aggiornate per professionisti del diritto. Tutti gli strumenti sono gratuiti e non richiedono registrazione.
            </p>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            const cardContent = (
              <>
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-[oklch(0.25_0.04_250)] p-2.5" style={{ borderRadius: "0.375rem" }}>
                    <Icon className="w-5 h-5 text-[oklch(0.75_0.10_85)]" />
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 ${
                      tool.ready
                        ? "bg-[oklch(0.97_0.005_155)] text-[oklch(0.40_0.10_155)]"
                        : "bg-[oklch(0.95_0.005_85)] text-[oklch(0.50_0.02_250)]"
                    }`}
                    style={{ borderRadius: "0.25rem" }}
                  >
                    {tool.badge}
                  </span>
                </div>
                <h2 className="text-xl text-[oklch(0.25_0.04_250)] mb-2">{tool.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {tool.description}
                </p>
                {tool.ready && (
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[oklch(0.45_0.12_250)] group-hover:text-[oklch(0.35_0.15_250)] transition-colors">
                    Apri strumento <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </>
            );

            return tool.ready ? (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group bg-white border border-border p-6 transition-all hover:border-[oklch(0.75_0.10_85)] hover:shadow-md"
                style={{ borderRadius: "0.5rem" }}
              >
                {cardContent}
              </Link>
            ) : (
              <div
                key={tool.slug}
                className="bg-white border border-border p-6 opacity-60"
                style={{ borderRadius: "0.5rem" }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
