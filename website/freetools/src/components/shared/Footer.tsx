interface FooterProps {
  disclaimerLines: string[];
  sources: { label: string; url: string }[];
}

export function Footer({ disclaimerLines, sources }: FooterProps) {
  return (
    <>
      <div className="gold-separator mt-12 mb-6" />
      <footer className="pb-12 text-center">
        {disclaimerLines.map((line, i) => (
          <p key={i} className="text-xs text-muted-foreground mt-1 first:mt-0">
            {line}
          </p>
        ))}
        {sources.length > 0 && (
          <p className="text-xs text-muted-foreground mt-1">
            Fonti:{" "}
            {sources.map((s, i) => (
              <span key={i}>
                {i > 0 && ", "}
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  {s.label}
                </a>
              </span>
            ))}
            .
          </p>
        )}
      </footer>
    </>
  );
}
