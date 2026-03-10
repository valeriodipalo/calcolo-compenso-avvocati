import { ExternalLink } from "lucide-react";

interface InlineNormLinkProps {
  text: string;
  url: string;
}

export function InlineNormLink({ text, url }: InlineNormLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] underline decoration-dotted underline-offset-2 transition-colors"
    >
      {text}
      <ExternalLink className="w-3 h-3 ml-0.5" />
    </a>
  );
}
