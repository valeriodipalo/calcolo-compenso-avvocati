interface FeatureGridProps {
  items: { title: string; desc: string }[];
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div key={i} className="bg-white border border-border p-4" style={{ borderRadius: "0.375rem" }}>
          <p className="font-semibold text-sm">{item.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
