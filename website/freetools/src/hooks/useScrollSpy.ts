"use client";

import { useState, useEffect } from "react";
import type { ToolSection } from "@/types/tool";

export function useScrollSpy(sections: ToolSection[], defaultId?: string) {
  const [activeSection, setActiveSection] = useState(defaultId ?? sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}
