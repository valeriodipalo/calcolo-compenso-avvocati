import type { Metadata } from "next";
import Script from "next/script";
import { DM_Serif_Display, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLd, websiteSchema } from "@/lib/schema";
import { Navbar } from "@/components/shared/Navbar";
import { SiteFooter } from "@/components/shared/SiteFooter";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.avvocatotools.it"),
  title: {
    default: "Strumenti Legali Gratuiti | Piattaforma Avvocati",
    template: "%s | Piattaforma Avvocati",
  },
  description:
    "Calcolatori e strumenti gratuiti per avvocati: contributo unificato, compenso professionale e altro.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Piattaforma Avvocati",
    title: "Strumenti Legali Gratuiti | Piattaforma Avvocati",
    description:
      "Calcolatori e strumenti gratuiti per avvocati: contributo unificato, compenso professionale e altro.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strumenti Legali Gratuiti | Piattaforma Avvocati",
    description:
      "Calcolatori e strumenti gratuiti per avvocati: contributo unificato, compenso professionale e altro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Site-wide: WebSite + Organization schema */}
        <JsonLd data={websiteSchema()} />
        {/* Iubenda Cookie Banner */}
        <Script
          src="https://embeds.iubenda.com/widgets/c663785b-616d-4328-b1f4-16465802fa62.js"
          strategy="beforeInteractive"
        />
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body
        className={`${dmSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
