// Schema.org JSON-LD structured data generators
// All schemas use https://schema.org context and JSON-LD format
// Validated against Google's supported rich result types (March 2026)

import type { FAQItem } from "@/components/shared/FAQ";

// ============================================================
// SITE-WIDE: IMPORTANT -- use the production domain when deploying.
// During development this is localhost; replace before go-live.
// ============================================================
const SITE_URL = "https://www.avvocatotools.it";
const SITE_NAME = "Piattaforma Avvocati";
const SITE_DESCRIPTION =
  "Calcolatori e strumenti gratuiti per avvocati: contributo unificato, compenso professionale e altro.";

// ============================================================
// WebSite schema  (site-wide, placed in layout.tsx)
// Enables sitelinks and identifies the website to crawlers.
// ============================================================
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: "Strumenti Legali Gratuiti",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "it-IT",
    publisher: organizationSchema(),
  };
}

// ============================================================
// Organization schema  (site-wide)
// ============================================================
export function organizationSchema() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    // Add logo URL when available:
    // logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  };
}

// ============================================================
// WebPage schema  (generic page)
// ============================================================
export function webPageSchema(opts: {
  name: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: "it-IT",
    isPartOf: { "@type": "WebSite", url: SITE_URL },
    ...(opts.datePublished && { datePublished: opts.datePublished }),
    ...(opts.dateModified && { dateModified: opts.dateModified }),
    publisher: organizationSchema(),
  };
}

// ============================================================
// BreadcrumbList schema
// Accepts an array of { name, path } items from root to current.
// ============================================================
export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

// ============================================================
// FAQPage schema
// Converts FAQItem[] (from faqData.ts) into FAQPage markup.
// WARNING: Since August 2023, Google restricts FAQ rich results
// to government and healthcare authority sites ONLY. Private
// sites (including legal tools) will NOT get rich results from
// this schema. Keep the function for potential future use but
// do NOT include it in page JSON-LD blocks.
// ============================================================
export function faqPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.domanda,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.risposta,
      },
    })),
  };
}

// ============================================================
// Article schema  (legal guide / comprehensive reference page)
// Uses the "Article" type which Google supports for rich results.
// ============================================================
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  sections?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: "it-IT",
    ...(opts.image && {
      image: {
        "@type": "ImageObject",
        url: opts.image,
        width: 1920,
        height: 1072,
      },
    }),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: organizationSchema(),
    publisher: organizationSchema(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${opts.path}`,
    },
    ...(opts.sections && {
      articleSection: opts.sections,
    }),
  };
}

// ============================================================
// HowTo schema — DEPRECATED
// Google removed HowTo rich results in September 2023.
// This function is kept for reference only. Do NOT use in pages.
// ============================================================

// ============================================================
// WebApplication schema  (interactive calculator tools)
// Signals to Google that the page contains an interactive tool.
// Can trigger Software App rich results with rating display.
// ============================================================
export function webApplicationSchema(opts: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    applicationCategory: opts.applicationCategory || "FinanceApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    inLanguage: "it-IT",
    publisher: organizationSchema(),
  };
}

// ============================================================
// Utility: renders a schema object as a <script> tag string
// for use inside Next.js page components.
// ============================================================
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
