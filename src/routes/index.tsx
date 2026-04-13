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

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cherre Alpha, AI Activation in a Box" },
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
        <div className="min-h-screen bg-background text-foreground transition-colors">
          <CherreNav />
          <main>
            <HeroSection />
            <AccordionSection
              id="why-fails"
              eyebrow="How to Escape Pilot Purgatory"
              heading="The Four Ways AI Fails Across Alternative Assets."
              lead="The failure modes are consistent across real estate, private equity, private credit, and infrastructure. The systems are different. The root cause is always the same."
              items={FAILURE_MODES}
            />
            <AccordionSection
              id="why-alpha"
              eyebrow="Why Cherre Alpha Exists"
              heading="We Kept Seeing the Same Failure. We Decided to Fix It."
              lead="Cherre Alpha is the formalization of what we learned deploying AI across the most complex data environments in alternative assets. The data is what makes the agent work. We own the data."
              items={WHY_ALPHA}
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
