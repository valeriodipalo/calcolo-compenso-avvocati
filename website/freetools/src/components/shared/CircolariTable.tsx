import { ExternalLink } from "lucide-react";

interface CircolariTableProps {
  items: { circolare: string; descrizione: string; url: string }[];
}

export function CircolariTable({ items }: CircolariTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table-legal">
        <thead>
          <tr>
            <th>Circolare</th>
            <th>Oggetto</th>
            <th className="w-10"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((c, i) => (
            <tr key={i}>
              <td className="font-semibold whitespace-nowrap">{c.circolare}</td>
              <td>{c.descrizione}</td>
              <td>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] transition-colors" title="Consulta la circolare">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
