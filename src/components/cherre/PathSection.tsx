import { ARCH_TIERS, STAGES } from "@/lib/cherre-data";

const TIER_BORDER: Record<string, string> = {
  pink: "border-l-luna-pink",
  bronze: "border-l-[#B8864A]",
  silver: "border-l-[#8AAABF]",
  gold: "border-l-[#E8B84B]",
};

export function PathSection() {
  return (
    <section id="path" className="section-gradient relative overflow-hidden">
      <div className="particle-field opacity-50" />
      <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <span className="font-display text-[11px] font-bold tracking-[2.2px] uppercase text-luna-teal block mb-4 text-center">
          From Audit-Ready to Agent-Ready
        </span>

        <h2 className="font-display text-[clamp(24px,3.6vw,42px)] font-extrabold leading-[1.12] text-white mb-12 max-w-[700px] mx-auto text-center">
          Every Path Leads to
          <br />
          Governed, <span className="text-luna-pink">Agent-Ready Data.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Architecture stack */}
          <div className="space-y-2">
            {ARCH_TIERS.map((tier, i) => (
              <div key={i}>
                <div
                  className={`border border-white/[0.08] bg-white/[0.03] rounded-lg overflow-hidden border-l-[3px] ${TIER_BORDER[tier.color] || "border-l-luna-pink"}`}
                >
                  <div className="flex">
                    <div className="w-24 shrink-0 bg-white/[0.03] border-r border-white/[0.06] flex flex-col justify-center px-3 py-3">
                      <span className="font-display text-[10px] font-bold tracking-[1.4px] uppercase text-luna-very-muted">
                        {tier.label}
                      </span>
                      <span className="font-display text-lg font-bold text-white leading-tight">
                        {tier.name}
                      </span>
                    </div>
                    <div className="px-4 py-3 flex-1">
                      <h4 className="font-display text-base font-bold text-white mb-1">
                        {tier.heading}
                      </h4>
                      <p className="text-sm text-luna-muted leading-relaxed">
                        {tier.desc}
                      </p>
                    </div>
                  </div>
                </div>
                {i < ARCH_TIERS.length - 1 && (
                  <div className="text-center text-luna-pink/40 font-mono text-xs py-1">&darr;</div>
                )}
              </div>
            ))}

            {/* Destination */}
            <div className="bg-luna-pink rounded-lg px-6 py-5">
              <div className="font-display text-xl font-bold text-white mb-1">
                Cherre Alpha
              </div>
              <div className="text-sm text-white/70 leading-relaxed">
                Governed data for enterprise AI &middot; From reporting-ready to reasoning-ready
              </div>
            </div>
          </div>

          {/* Stages */}
          <div className="space-y-3">
            {STAGES.map((stage, i) => (
              <div key={i} className="border border-white/[0.08] bg-white/[0.03] rounded-lg overflow-hidden">
                <div className="bg-white/[0.04] border-b-2 border-b-luna-pink px-5 py-3 flex items-baseline gap-3">
                  <span className="font-display text-[9px] font-bold tracking-[1.8px] text-luna-pink shrink-0">
                    {stage.num}
                  </span>
                  <h4 className="font-display text-base font-bold text-white">
                    {stage.title}
                  </h4>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-luna-muted leading-relaxed mb-3">
                    {stage.body}
                  </p>
                  <div className="bg-white/[0.04] rounded-lg px-3 py-2.5">
                    <span className="font-display text-[9px] font-bold tracking-[1.4px] uppercase text-luna-teal block mb-1">
                      Leave-Behind
                    </span>
                    <p className="text-sm text-luna-muted">{stage.leaveBehinds}</p>
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
