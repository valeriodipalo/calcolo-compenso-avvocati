import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avvocato Tools — Strumenti Legali Gratuiti",
    short_name: "AvvocatoTools",
    description:
      "Calcolatori e strumenti gratuiti per avvocati: contributo unificato, compenso professionale e altro.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1C2C",
    theme_color: "#0B1C2C",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
