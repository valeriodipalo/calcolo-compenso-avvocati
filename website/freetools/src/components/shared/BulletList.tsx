interface BulletListProps {
  items: string[];
}

export function BulletList({ items }: BulletListProps) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 bg-[oklch(0.75_0.10_85)] mt-2 shrink-0" style={{ borderRadius: "50%" }} />
          <p className="text-sm">{item}</p>
        </div>
      ))}
    </div>
  );
}
