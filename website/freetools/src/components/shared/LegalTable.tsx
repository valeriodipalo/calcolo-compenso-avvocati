interface LegalTableProps {
  headers: string[];
  rows: (string | number)[][];
  className?: string;
}

export function LegalTable({ headers, rows, className = "" }: LegalTableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="table-legal">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={
                    j > 0 && typeof cell === "string" && cell.startsWith("\u20AC")
                      ? "amount"
                      : ""
                  }
                >
                  {typeof cell === "number"
                    ? new Intl.NumberFormat("it-IT", {
                        style: "currency",
                        currency: "EUR",
                      }).format(cell)
                    : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
