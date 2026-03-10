import type { LucideIcon } from "lucide-react";

interface HeaderProps {
  title: string;
  icon: LucideIcon;
  updatedDate?: string;
}

export function Header({ title, icon: Icon, updatedDate }: HeaderProps) {
  return (
    <header className="bg-[oklch(0.25_0.04_250)] text-[oklch(0.90_0.01_85)]">
      <div className="container py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-[oklch(0.75_0.10_85)]" />
          <span className="font-sans text-sm font-semibold tracking-wider uppercase">
            {title}
          </span>
        </div>
        {updatedDate && (
          <span className="text-xs text-[oklch(0.60_0.05_250)]">{updatedDate}</span>
        )}
      </div>
    </header>
  );
}
