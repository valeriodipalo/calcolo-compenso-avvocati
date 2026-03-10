import { ExternalLink } from "lucide-react";

interface NormativaRefTableProps {
  items: { norma: string; descrizione: string; url: string }[];
}

export function NormativaRefTable({ items }: NormativaRefTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="table-legal">
        <thead>
          <tr>
            <th>Norma</th>
            <th>Descrizione</th>
            <th className="w-10"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((n, i) => (
            <tr key={i}>
              <td className="font-semibold">{n.norma}</td>
              <td>{n.descrizione}</td>
              <td>
                <a href={n.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[oklch(0.45_0.12_250)] hover:text-[oklch(0.35_0.15_250)] transition-colors" title="Consulta su Normattiva">
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
