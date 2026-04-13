import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/cherre/ThemeProvider";
import { LensProvider } from "@/components/cherre/LensProvider";
import { CherreNav } from "@/components/cherre/CherreNav";
import { HeroSection } from "@/components/cherre/HeroSection";
import { AccordionSection } from "@/components/cherre/AccordionSection";
import { PathSection } from "@/components/cherre/PathSection";
import { ClosingSection } from "@/components/cherre/ClosingSection";
import { CherreFooter } from "@/components/cherre/CherreFooter";
import { FAILURE_MODES, WHY_ALPHA } from "@/lib/cherre-data";

export const Route = createFileRoute("/")(  {
  component: Index,
  head: () => ({
    meta: [
      { title: "Cherre Alpha — The Governed Data Layer for Enterprise AI" },
      {
        name: "description",
        content:
          "Cherre Alpha connects, resolves, and governs your data so AI agents can reason with trust, traceability, and context.",
      },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <LensProvider>
        <div className="min-h-screen" style={{ background: "#0d0117", color: "#ffffff" }}>
          <CherreNav />
          <main>
            <HeroSection />
            <AccordionSection
              id="why-fails"
              eyebrow="What Keeps AI from Production"
              heading="The Four Gaps Between Pilot and"
              headingEm="Production."
              lead="The patterns are consistent across real estate, private equity, private credit, and infrastructure. The systems differ. The production gaps do not."
              items={FAILURE_MODES}
              variant="dark"
            />
            <AccordionSection
              id="why-alpha"
              eyebrow="What Cherre Alpha Changes"
              heading="How Cherre Moves AI into"
              headingEm="Production."
              lead="Cherre Alpha is how enterprises move from connected data to governed, agent-ready data. It formalizes the missing layer between data access and production AI: resolved entities, traceable context, and readiness you verify before the quarter starts."
              items={WHY_ALPHA}
              variant="light"
            />
            <PathSection />
            <ClosingSection />
          </main>
          <CherreFooter />
        </div>
      </LensProvider>
    </ThemeProvider>
  );
}
