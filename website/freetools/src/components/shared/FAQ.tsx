"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

export interface FAQFonte {
  label: string;
  url: string;
}

export interface FAQItem {
  domanda: string;
  risposta: string;
  categoria: string;
  fonti?: FAQFonte[];
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [filtroCategoria, setFiltroCategoria] = useState<string>("Tutte");

  const categorie = Array.from(new Set(items.map((f) => f.categoria)));

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqFiltrate =
    filtroCategoria === "Tutte"
      ? items
      : items.filter((f) => f.categoria === filtroCategoria);

  return (
    <div>
      {/* Filtro per categoria */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["Tutte", ...categorie].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFiltroCategoria(cat);
              setOpenIndex(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
              filtroCategoria === cat
                ? "bg-[oklch(0.25_0.04_250)] text-[oklch(0.90_0.01_85)]"
                : "bg-[oklch(0.95_0.005_85)] text-[oklch(0.40_0.02_250)] hover:bg-[oklch(0.90_0.01_85)]"
            }`}
            style={{ borderRadius: "0.25rem" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-2">
        {faqFiltrate.map((faq, idx) => {
          const globalIdx = items.indexOf(faq);
          const isOpen = openIndex === globalIdx;

          return (
            <div
              key={globalIdx}
              className={`border transition-all ${
                isOpen
                  ? "border-[oklch(0.75_0.10_85)] bg-[oklch(0.98_0.005_85)]"
                  : "border-border bg-white hover:border-[oklch(0.80_0.08_85)]"
              }`}
              style={{ borderRadius: "0.375rem" }}
            >
              <button
                onClick={() => toggle(globalIdx)}
                className="w-full flex items-start gap-3 p-4 text-left"
              >
                <span
                  className={`shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 text-xs font-bold ${
                    isOpen
                      ? "bg-[oklch(0.75_0.10_85)] text-[oklch(0.25_0.04_250)]"
                      : "bg-[oklch(0.92_0.005_85)] text-[oklch(0.45_0.02_250)]"
                  }`}
                  style={{ borderRadius: "50%" }}
                >
                  {items.indexOf(faq) + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-semibold leading-snug ${
                      isOpen ? "text-[oklch(0.25_0.04_250)]" : "text-[oklch(0.30_0.03_250)]"
                    }`}
                  >
                    {faq.domanda}
                  </p>
                  <span className="inline-block mt-1 text-[10px] uppercase tracking-wider text-[oklch(0.55_0.05_85)] font-semibold">
                    {faq.categoria}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 mt-1 text-[oklch(0.50_0.02_250)] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 pl-[3.25rem]">
                  <div className="border-t border-[oklch(0.90_0.01_85)] pt-3">
                    <p className="text-sm leading-relaxed text-[oklch(0.35_0.02_250)]">
                      {faq.risposta}
                    </p>
                    {faq.fonti && faq.fonti.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3 pt-2 border-t border-dashed border-[oklch(0.88_0.01_85)]">
                        <span className="text-[10px] uppercase tracking-wider text-[oklch(0.55_0.03_250)] font-semibold self-center">
                          Fonti:
                        </span>
                        {faq.fonti.map((fonte, fi) => (
                          <a
                            key={fi}
                            href={fonte.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline decoration-dotted underline-offset-2 transition-colors"
                          >
                            {fonte.label}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Conteggio */}
      <p className="text-xs text-muted-foreground mt-4 text-right">
        {faqFiltrate.length} domande{" "}
        {filtroCategoria !== "Tutte"
          ? `nella categoria "${filtroCategoria}"`
          : "totali"}{" "}
        su {items.length}
      </p>
    </div>
  );
}
