import { ExternalLink } from "lucide-react";

interface NormativaQuoteProps {
  children: React.ReactNode;
  url?: string;
}

export function NormativaQuote({ children, url }: NormativaQuoteProps) {
  return (
    <div className="normativa-quote my-4">
      {children}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-[oklch(0.50_0.15_250)] hover:text-[oklch(0.40_0.18_250)] mt-2 transition-colors"
        >
          <ExternalLink className="w-3 h-3" /> Consulta il testo su Normattiva
        </a>
      )}
    </div>
  );
}
