"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { TOOLS, CLUSTERS } from "@/data/toolRegistry";

const readyTools = TOOLS.filter((t) => t.ready);

/** Group ready tools by cluster, preserving cluster order */
const groupedTools = CLUSTERS.map((cluster) => ({
  cluster,
  tools: readyTools.filter((t) => t.cluster === cluster.id),
})).filter((g) => g.tools.length > 0);

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchCommand({ open, onOpenChange }: SearchCommandProps) {
  const router = useRouter();

  /* Cmd+K / Ctrl+K shortcut */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  const handleSelect = useCallback(
    (slug: string) => {
      onOpenChange(false);
      router.push(`/${slug}`);
    },
    [router, onOpenChange],
  );

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Cerca strumenti"
      description="Cerca tra tutti gli strumenti disponibili su avvocatotools.it"
    >
      <CommandInput placeholder="Cerca uno strumento..." />
      <CommandList>
        <CommandEmpty>Nessun risultato trovato.</CommandEmpty>
        {groupedTools.map(({ cluster, tools }) => {
          return (
            <CommandGroup
              key={cluster.id}
              heading={cluster.label}
            >
              {tools.map((tool) => {
                const ToolIcon = tool.icon;
                return (
                  <CommandItem
                    key={tool.slug}
                    value={`${tool.title} ${tool.navLabel} ${cluster.label}`}
                    onSelect={() => handleSelect(tool.slug)}
                  >
                    <ToolIcon className="w-4 h-4 shrink-0 text-[oklch(0.50_0.03_250)]" />
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-medium truncate">{tool.title}</span>
                      <span className="text-xs text-muted-foreground truncate">
                        {tool.description.slice(0, 80)}...
                      </span>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          );
        })}
      </CommandList>
    </CommandDialog>
  );
}
