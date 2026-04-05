"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale, Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { NAV_SECTIONS, type NavSection, type NavCluster, type NavTool } from "@/data/navData";
import { TOOLS } from "@/data/toolRegistry";

/* ────────────────────────────────────────────
   Helpers
   ──────────────────────────────────────────── */

const readySlugs = new Set(TOOLS.filter((t) => t.ready).map((t) => t.slug));

function toolHref(tool: NavTool): string | null {
  return tool.slug && readySlugs.has(tool.slug) ? `/${tool.slug}` : null;
}

/* ────────────────────────────────────────────
   Navbar (main export)
   ──────────────────────────────────────────── */

export function Navbar() {
  const pathname = usePathname();

  /* ── Desktop flyout state ── */
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setOpenSection(null);
      setActiveCluster(null);
    }, 200);
  }, [cancelClose]);

  const handleOpenSection = useCallback(
    (id: string, defaultCluster: string) => {
      cancelClose();
      setOpenSection(id);
      setActiveCluster(defaultCluster);
    },
    [cancelClose],
  );

  const handleCloseAll = useCallback(() => {
    cancelClose();
    setOpenSection(null);
    setActiveCluster(null);
  }, [cancelClose]);

  /* ── Mobile drawer state ── */
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [expandedClusters, setExpandedClusters] = useState<Set<string>>(new Set());

  const toggleMobileSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleMobileCluster = (id: string) => {
    setExpandedClusters((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  /* Close drawer on route change */
  useEffect(() => {
    setDrawerOpen(false);
    handleCloseAll();
  }, [pathname, handleCloseAll]);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  /* ESC key */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseAll();
        setDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [handleCloseAll]);

  /* ── Resolve active section data ── */
  const activeSectionData = NAV_SECTIONS.find((s) => s.id === openSection) ?? null;
  const activeClusterData = activeSectionData?.clusters.find((c) => c.id === activeCluster) ?? null;

  return (
    <>
      {/* ━━━ NAVBAR BAR ━━━ */}
      <nav className="sticky top-0 z-50 h-14 bg-[oklch(0.22_0.04_250)] border-b border-[oklch(0.30_0.04_250)]">
        <div className="container flex items-center justify-between h-full">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div
              className="w-8 h-8 bg-[oklch(0.75_0.10_85)] flex items-center justify-center"
              style={{ borderRadius: "0.375rem" }}
            >
              <Scale className="w-4 h-4 text-[oklch(0.22_0.04_250)]" />
            </div>
            <span className="font-serif text-lg text-white tracking-tight group-hover:text-[oklch(0.75_0.10_85)] transition-colors">
              Avvocatotools<span className="text-[oklch(0.75_0.10_85)]">.it</span>
            </span>
          </Link>

          {/* Desktop nav buttons */}
          <div className="hidden lg:flex items-center h-full ml-8">
            {NAV_SECTIONS.map((section) => {
              const isOpen = openSection === section.id;
              return (
                <button
                  key={section.id}
                  className={`flex items-center gap-1.5 h-full px-4 text-[13.5px] font-medium transition-colors border-b-2 ${
                    isOpen
                      ? "text-[oklch(0.75_0.10_85)] border-[oklch(0.75_0.10_85)]"
                      : "text-[oklch(0.75_0.03_250)] border-transparent hover:text-white"
                  }`}
                  onMouseEnter={() => handleOpenSection(section.id, section.clusters[0].id)}
                  onClick={() =>
                    isOpen ? handleCloseAll() : handleOpenSection(section.id, section.clusters[0].id)
                  }
                >
                  {section.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              );
            })}
            <Link
              href="/"
              className="flex items-center h-full px-4 text-[13.5px] font-medium text-[oklch(0.75_0.03_250)] border-b-2 border-transparent hover:text-white transition-colors"
              onMouseEnter={handleCloseAll}
            >
              Tutti gli strumenti
            </Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Search pill (desktop) */}
            <button
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-[13px] text-[oklch(0.60_0.03_250)] bg-[oklch(0.28_0.04_250)] border border-[oklch(0.35_0.04_250)] hover:border-[oklch(0.45_0.04_250)] transition-colors"
              style={{ borderRadius: "1.25rem" }}
              onClick={() => {/* future command palette */}}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Cerca...</span>
            </button>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-9 h-9 text-[oklch(0.80_0.02_250)] hover:text-white transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Apri menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* ━━━ DESKTOP FLYOUT ━━━ */}
      {activeSectionData && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-14 z-40 bg-black/5"
            onClick={handleCloseAll}
          />

          {/* Panel */}
          <div
            className="fixed top-14 left-0 right-0 z-40 bg-white border-b border-[oklch(0.88_0.01_85)] shadow-lg"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="max-w-[920px] mx-auto flex min-h-[200px]">
              {/* Cluster sidebar */}
              <div className="w-[240px] shrink-0 border-r border-[oklch(0.92_0.005_85)] py-2">
                {activeSectionData.clusters.map((cluster) => {
                  const Icon = cluster.icon;
                  const isActive = activeCluster === cluster.id;
                  return (
                    <button
                      key={cluster.id}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                        isActive ? "bg-[oklch(0.96_0.005_85)]" : "hover:bg-[oklch(0.98_0.003_85)]"
                      }`}
                      onMouseEnter={() => setActiveCluster(cluster.id)}
                    >
                      <div
                        className={`w-9 h-9 shrink-0 flex items-center justify-center ${cluster.iconBg}`}
                        style={{ borderRadius: "0.5rem" }}
                      >
                        <Icon className={`w-[18px] h-[18px] ${cluster.iconFg}`} />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[13px] font-semibold text-[oklch(0.20_0.02_250)]">
                          {cluster.name}
                        </span>
                        <span className="block text-[11px] text-[oklch(0.55_0.02_250)] leading-tight">
                          {cluster.description}
                        </span>
                      </div>
                      <ChevronRight className="w-3 h-3 ml-auto shrink-0 text-[oklch(0.72_0.02_250)]" />
                    </button>
                  );
                })}
              </div>

              {/* Tools grid */}
              {activeClusterData && (
                <div className="flex-1 p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[13px] font-semibold text-[oklch(0.20_0.02_250)]">
                      {activeClusterData.name}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                    {activeClusterData.tools.map((tool) => {
                      const href = toolHref(tool);
                      const inner = (
                        <>
                          <span
                            className={`w-1.5 h-1.5 shrink-0 transition-colors ${
                              href
                                ? "bg-[oklch(0.75_0.10_85)] group-hover:bg-[oklch(0.22_0.04_250)]"
                                : "bg-[oklch(0.88_0.01_85)]"
                            }`}
                            style={{ borderRadius: "50%" }}
                          />
                          <span className={href ? "" : "opacity-50"}>{tool.label}</span>
                          {tool.badge && (
                            <span className="ml-auto text-[10px] font-semibold bg-[oklch(0.95_0.005_85)] text-[oklch(0.45_0.02_250)] px-1.5 py-0.5 shrink-0" style={{ borderRadius: "0.625rem" }}>
                              {tool.badge}
                            </span>
                          )}
                          {!href && !tool.badge && (
                            <span className="ml-auto text-[10px] text-[oklch(0.65_0.02_250)] italic shrink-0">
                              prossimamente
                            </span>
                          )}
                        </>
                      );

                      return href ? (
                        <Link
                          key={tool.label}
                          href={href}
                          className="group flex items-center gap-2.5 px-2.5 py-2 text-[13px] text-[oklch(0.40_0.02_250)] hover:bg-[oklch(0.97_0.005_85)] hover:text-[oklch(0.20_0.02_250)] transition-colors"
                          style={{ borderRadius: "0.375rem" }}
                        >
                          {inner}
                        </Link>
                      ) : (
                        <span
                          key={tool.label}
                          className="group flex items-center gap-2.5 px-2.5 py-2 text-[13px] text-[oklch(0.55_0.02_250)] cursor-default"
                        >
                          {inner}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* ━━━ MOBILE DRAWER ━━━ */}
      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[200] bg-black/40 transition-opacity ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-[201] w-[320px] max-w-[90vw] bg-white flex flex-col border-r border-[oklch(0.88_0.01_85)] transition-transform duration-300 ease-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[oklch(0.92_0.005_85)] shrink-0">
          <Link href="/" className="flex items-center gap-2" onClick={() => setDrawerOpen(false)}>
            <div
              className="w-6 h-6 bg-[oklch(0.22_0.04_250)] flex items-center justify-center"
              style={{ borderRadius: "0.375rem" }}
            >
              <Scale className="w-3 h-3 text-[oklch(0.75_0.10_85)]" />
            </div>
            <span className="text-[13px] font-semibold text-[oklch(0.20_0.02_250)]">
              avvocatotools
            </span>
          </Link>
          <button
            className="w-8 h-8 flex items-center justify-center border border-[oklch(0.88_0.01_85)] text-[oklch(0.45_0.02_250)] hover:text-[oklch(0.20_0.02_250)] transition-colors"
            style={{ borderRadius: "0.375rem" }}
            onClick={() => setDrawerOpen(false)}
            aria-label="Chiudi menu"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Search placeholder */}
        <div className="flex items-center gap-2 mx-4 my-3 px-3 py-2.5 border border-[oklch(0.88_0.01_85)] text-[13px] text-[oklch(0.60_0.02_250)] shrink-0" style={{ borderRadius: "0.5rem" }}>
          <Search className="w-3.5 h-3.5 text-[oklch(0.65_0.02_250)]" />
          Cerca uno strumento...
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">
          {NAV_SECTIONS.map((section) => (
            <div key={section.id} className="border-b border-[oklch(0.92_0.005_85)]">
              {/* Section trigger */}
              <button
                className="w-full flex items-center justify-between px-4 py-3.5 text-[13.5px] font-medium text-[oklch(0.20_0.02_250)] text-left"
                onClick={() => toggleMobileSection(section.id)}
              >
                {section.label}
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[oklch(0.55_0.02_250)] transition-transform ${
                    expandedSections.has(section.id) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Section content — clusters */}
              {expandedSections.has(section.id) && (
                <div className="pb-2">
                  {section.clusters.map((cluster) => {
                    const Icon = cluster.icon;
                    const isClusterOpen = expandedClusters.has(cluster.id);
                    return (
                      <div key={cluster.id}>
                        {/* Cluster trigger */}
                        <button
                          className="w-full flex items-center gap-2.5 px-4 py-2.5 border-t border-[oklch(0.95_0.003_85)] text-left"
                          onClick={() => toggleMobileCluster(cluster.id)}
                        >
                          <div
                            className={`w-7 h-7 shrink-0 flex items-center justify-center ${cluster.iconBg}`}
                            style={{ borderRadius: "0.375rem" }}
                          >
                            <Icon className={`w-3.5 h-3.5 ${cluster.iconFg}`} />
                          </div>
                          <span className="text-[13px] font-medium text-[oklch(0.25_0.02_250)]">
                            {cluster.name}
                          </span>
                          <ChevronDown
                            className={`w-3 h-3 ml-auto text-[oklch(0.55_0.02_250)] transition-transform ${
                              isClusterOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Cluster tools */}
                        {isClusterOpen && (
                          <div className="ml-4 pl-3 border-l border-[oklch(0.90_0.005_85)] pb-2">
                            {cluster.tools.map((tool) => {
                              const href = toolHref(tool);
                              const inner = (
                                <span className="flex items-center gap-2">
                                  <span
                                    className={`w-3 h-px shrink-0 ${
                                      href
                                        ? "bg-[oklch(0.75_0.10_85)]"
                                        : "bg-[oklch(0.88_0.01_85)]"
                                    }`}
                                  />
                                  <span className={href ? "" : "opacity-50"}>
                                    {tool.label}
                                  </span>
                                </span>
                              );

                              return href ? (
                                <Link
                                  key={tool.label}
                                  href={href}
                                  className="block py-2 text-[13px] text-[oklch(0.40_0.02_250)] hover:text-[oklch(0.20_0.02_250)] transition-colors"
                                  onClick={() => setDrawerOpen(false)}
                                >
                                  {inner}
                                </Link>
                              ) : (
                                <span
                                  key={tool.label}
                                  className="block py-2 text-[13px] text-[oklch(0.60_0.02_250)]"
                                >
                                  {inner}
                                </span>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Direct link */}
          <Link
            href="/"
            className="flex items-center h-11 px-4 border-b border-[oklch(0.92_0.005_85)] text-[13.5px] font-medium text-[oklch(0.40_0.02_250)] hover:text-[oklch(0.20_0.02_250)] transition-colors"
            onClick={() => setDrawerOpen(false)}
          >
            Tutti gli strumenti
          </Link>
        </div>
      </div>
    </>
  );
}
