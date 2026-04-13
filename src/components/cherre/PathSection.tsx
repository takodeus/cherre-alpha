import { ARCH_TIERS, STAGES } from "@/lib/cherre-data";

const TIER_COLORS: Record<string, string> = {
  plum: "border-l-primary",
  aqua: "border-l-aqua",
  "ai-blue": "border-l-ai-blue",
  "cherre-orange": "border-l-cherre-orange",
};

export function PathSection() {
  return (
    <section id="path" className="border-b border-border bg-surface-alt">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary block mb-3">
          From Audit-Ready to Agent-Ready
        </span>
        <div className="w-8 h-[2px] bg-primary mb-6" />
        <h2 className="text-2xl md:text-[28px] font-bold text-primary leading-snug mb-10 max-w-2xl">
          Every Client Starts at the Assessment. Every Path Leads to the Same Destination.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Architecture stack */}
          <div className="space-y-2">
            {ARCH_TIERS.map((tier, i) => (
              <div key={i}>
                <div
                  className={`border border-border bg-background rounded-sm overflow-hidden border-l-[3px] ${TIER_COLORS[tier.color] || "border-l-primary"}`}
                >
                  <div className="flex">
                    <div className="w-24 shrink-0 bg-surface-alt border-r border-border flex flex-col justify-center px-3 py-3">
                      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
                        {tier.label}
                      </span>
                      <span className="text-lg font-bold text-foreground leading-tight">
                        {tier.name}
                      </span>
                    </div>
                    <div className="px-4 py-3 flex-1">
                      <h4 className="text-base font-semibold text-foreground mb-1">
                        {tier.heading}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tier.desc}
                      </p>
                    </div>
                  </div>
                </div>
                {i < ARCH_TIERS.length - 1 && (
                  <div className="text-center text-primary/40 font-mono text-xs py-1">↓</div>
                )}
              </div>
            ))}

            {/* Destination */}
            <div className="bg-primary rounded-sm px-6 py-5">
              <div className="text-xl font-bold text-primary-foreground mb-1">
                Cherre AI Activation
              </div>
              <div className="text-sm text-primary-foreground/70 leading-relaxed">
                From Pilots to Platforms · From Agents to Operations · From Talk to Trust
              </div>
            </div>
          </div>

          {/* Stages */}
          <div className="space-y-3">
            {STAGES.map((stage, i) => (
              <div key={i} className="border border-border bg-background rounded-sm overflow-hidden">
                <div className="bg-surface-alt border-b-2 border-b-primary px-5 py-3 flex items-baseline gap-3">
                  <span className="font-mono text-[9px] tracking-[0.18em] text-primary shrink-0">
                    {stage.num}
                  </span>
                  <h4 className="text-base font-semibold text-foreground">
                    {stage.title}
                  </h4>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {stage.body}
                  </p>
                  <div className="bg-surface-alt rounded-sm px-3 py-2.5">
                    <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-primary block mb-1">
                      LEAVE-BEHIND
                    </span>
                    <p className="text-sm text-muted-foreground">{stage.leaveBehinds}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
