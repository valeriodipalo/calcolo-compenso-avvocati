import type { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ id, icon: Icon, title, subtitle }: SectionTitleProps) {
  return (
    <div id={id} className="scroll-mt-24 pt-10 pb-4">
      <div className="gold-separator mb-6" />
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 text-[oklch(0.75_0.10_85)] mt-1 shrink-0" />
        <div>
          <h2 className="text-2xl md:text-3xl text-[oklch(0.25_0.04_250)]">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
