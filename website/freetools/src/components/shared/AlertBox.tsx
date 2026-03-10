import type { ReactNode } from "react";

const variants = {
  warning: {
    bg: "bg-[oklch(0.97_0.01_25)]",
    border: "border-l-3 border-[oklch(0.55_0.20_25)]",
    titleColor: "text-[oklch(0.40_0.15_25)]",
    radius: "0 0.375rem 0.375rem 0",
  },
  info: {
    bg: "bg-[oklch(0.97_0.005_85)]",
    border: "border border-border",
    titleColor: "text-foreground",
    radius: "0.375rem",
  },
  success: {
    bg: "bg-[oklch(0.97_0.005_155)]",
    border: "border border-[oklch(0.80_0.08_155)]",
    titleColor: "text-[oklch(0.35_0.10_155)]",
    radius: "0.375rem",
  },
} as const;

interface AlertBoxProps {
  variant: keyof typeof variants;
  title?: string;
  children: ReactNode;
}

export function AlertBox({ variant, title, children }: AlertBoxProps) {
  const v = variants[variant];
  return (
    <div
      className={`${v.bg} ${v.border} p-4 text-sm`}
      style={{ borderRadius: v.radius }}
    >
      {title && (
        <p className={`font-semibold ${v.titleColor} mb-1`}>{title}</p>
      )}
      {children}
    </div>
  );
}
