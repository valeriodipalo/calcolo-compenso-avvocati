"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Menu, X } from "lucide-react";
import { TOOLS } from "@/data/toolRegistry";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[oklch(0.22_0.04_250)] border-b border-[oklch(0.30_0.04_250)]">
      <div className="container flex items-center justify-between h-14">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-[oklch(0.75_0.10_85)] flex items-center justify-center" style={{ borderRadius: "0.375rem" }}>
            <Scale className="w-4 h-4 text-[oklch(0.22_0.04_250)]" />
          </div>
          <span className="font-serif text-lg text-white tracking-tight group-hover:text-[oklch(0.75_0.10_85)] transition-colors">
            Avvocatitools<span className="text-[oklch(0.75_0.10_85)]">.it</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {TOOLS.filter((t) => t.ready).map((tool) => {
            const Icon = tool.icon;
            const href = `/${tool.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={tool.slug}
                href={href}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "bg-[oklch(0.30_0.04_250)] text-[oklch(0.75_0.10_85)] font-semibold"
                    : "text-[oklch(0.80_0.02_250)] hover:text-white hover:bg-[oklch(0.28_0.04_250)]"
                }`}
                style={{ borderRadius: "0.375rem" }}
              >
                <Icon className="w-3.5 h-3.5" />
                {tool.navLabel}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[oklch(0.80_0.02_250)] hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[oklch(0.30_0.04_250)] pb-3">
          <div className="container flex flex-col gap-1 pt-2">
            {TOOLS.filter((t) => t.ready).map((tool) => {
              const Icon = tool.icon;
              const href = `/${tool.slug}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={tool.slug}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "bg-[oklch(0.30_0.04_250)] text-[oklch(0.75_0.10_85)] font-semibold"
                      : "text-[oklch(0.80_0.02_250)] hover:text-white hover:bg-[oklch(0.28_0.04_250)]"
                  }`}
                  style={{ borderRadius: "0.375rem" }}
                >
                  <Icon className="w-4 h-4" />
                  {tool.navLabel}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
