import { Breadcrumb } from "./Breadcrumb";
import { HeroSection } from "./HeroSection";
import { SideNav } from "./SideNav";
import { Footer } from "./Footer";
import { RelatedTools } from "./RelatedTools";
import type { ToolConfig } from "@/types/tool";

interface ToolLayoutProps {
  config: ToolConfig;
  children: React.ReactNode;
}

export function ToolLayout({ config, children }: ToolLayoutProps) {
  return (
    <div className="bg-background">
      <Breadcrumb slug={config.slug} />
      <HeroSection
        image={config.heroImage}
        eyebrow={config.heroEyebrow}
        title={config.heroTitle}
        description={config.heroDescription}
        reference={config.heroReference}
      />

      <div className="container py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-56 shrink-0">
            <SideNav sections={config.sections} />
          </aside>
          {/* Mobile nav */}
          <div className="lg:hidden">
            <SideNav sections={config.sections} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 max-w-4xl">
            {children}

            <Footer
              disclaimerLines={config.disclaimerLines}
              sources={config.sources}
            />

            <RelatedTools slug={config.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
