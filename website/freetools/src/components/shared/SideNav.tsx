"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import type { ToolSection } from "@/types/tool";

interface SideNavProps {
  sections: ToolSection[];
}

export function SideNav({ sections }: SideNavProps) {
  const activeSection = useScrollSpy(sections);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-[oklch(0.25_0.04_250)] text-white p-3 shadow-xl"
        style={{ borderRadius: "50%" }}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Nav */}
      <nav
        className={`
          fixed z-40 bg-white border-r border-border
          lg:sticky lg:top-6 lg:h-fit lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto
          lg:border lg:shadow-sm
          ${mobileOpen ? "inset-y-0 left-0 w-72 shadow-2xl" : "hidden lg:block"}
        `}
        style={{ borderRadius: "0 0 0.5rem 0" }}
      >
        <div className="p-4 border-b border-border lg:border-b">
          <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.50_0.02_250)]">
            Indice
          </p>
        </div>
        <ul className="py-2">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`
                  w-full text-left px-4 py-2 text-sm transition-all
                  ${
                    activeSection === s.id
                      ? "bg-[oklch(0.97_0.005_85)] text-[oklch(0.25_0.04_250)] font-semibold border-l-3 border-[oklch(0.75_0.10_85)]"
                      : "text-[oklch(0.45_0.02_250)] hover:bg-[oklch(0.98_0.005_85)] hover:text-[oklch(0.25_0.04_250)] border-l-3 border-transparent"
                  }
                `}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
