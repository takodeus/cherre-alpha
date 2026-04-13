import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  num: string;
  title: string;
  tag?: string;
  body: string;
  bodyStrong: string;
  signal?: string;
}

interface AccordionSectionProps {
  id: string;
  eyebrow: string;
  heading: string;
  headingEm?: string;
  lead: string;
  items: AccordionItem[];
  variant?: "dark" | "light";
}

export function AccordionSection({ id, eyebrow, heading, headingEm, lead, items, variant = "dark" }: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${isDark ? "" : ""}`}
      style={{ background: isDark ? "#130220" : "#f7f4fc" }}
    >
      {isDark && <div className="particle-field opacity-40" />}
      <div className="relative z-10 max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <span className={`font-display text-[11px] font-bold tracking-[2.2px] uppercase block mb-4 ${
          isDark ? "text-luna-pink" : "text-luna-pink"
        }`}>
          {eyebrow}
        </span>

        <h2 className={`font-display text-[clamp(24px,3.6vw,42px)] font-extrabold leading-[1.12] mb-5 max-w-2xl ${
          isDark ? "text-white" : "text-[#160228]"
        }`}>
          {heading}
          {headingEm && (
            <>
              <br />
              <span className={isDark ? "text-luna-pink" : "text-luna-pink"}>{headingEm}</span>
            </>
          )}
        </h2>

        <p className={`text-base leading-[1.75] max-w-2xl mb-10 ${
          isDark ? "text-luna-muted" : "text-[#7a6895]"
        }`}>
          {lead}
        </p>

        <div className="space-y-2">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-lg transition-all ${
                  isDark
                    ? isOpen
                      ? "border-luna-pink/25 bg-white/[0.03]"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-luna-pink/15"
                    : isOpen
                      ? "border-[rgba(80,30,120,0.15)] bg-white shadow-lg shadow-purple-900/[0.04]"
                      : "border-[rgba(80,30,120,0.08)] bg-white hover:border-[rgba(80,30,120,0.15)]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className={`font-mono text-[10px] tracking-[0.16em] shrink-0 ${
                      isDark ? "text-luna-pink" : "text-luna-pink"
                    }`}>
                      {item.num}
                    </span>
                    <span className={`font-display text-base font-bold leading-tight ${
                      isDark ? "text-white" : "text-[#160228]"
                    }`}>
                      {item.title}
                    </span>
                    {item.tag && (
                      <span className={`hidden sm:inline-block font-display text-[8px] font-semibold tracking-[1.2px] uppercase px-2 py-1 rounded shrink-0 ${
                        isDark
                          ? "bg-luna-pink/10 text-luna-pink"
                          : "bg-luna-pink/10 text-luna-pink"
                      }`}>
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-luna-pink border-luna-pink"
                        : isDark
                          ? "border-luna-pink/30 group-hover:border-luna-pink/50"
                          : "border-luna-pink/30 group-hover:border-luna-pink/50"
                    }`}
                  >
                    <svg
                      viewBox="0 0 10 10"
                      className={`w-2.5 h-2.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      strokeWidth="2"
                      fill="none"
                    >
                      <line x1="5" y1="1" x2="5" y2="9" stroke={isOpen ? "white" : "#e040a0"} />
                      <line x1="1" y1="5" x2="9" y2="5" stroke={isOpen ? "white" : "#e040a0"} />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-14">
                        <p className={`text-[15px] leading-[1.8] mb-4 ${
                          isDark ? "text-luna-muted" : "text-[#7a6895]"
                        }`}>
                          {renderWithStrong(item.body, item.bodyStrong, isDark)}
                        </p>
                        {item.signal && (
                          <div className={`border-l-2 border-luna-pink pl-4 py-3 rounded-r-lg ${
                            isDark ? "bg-white/[0.03]" : "bg-[#f7f4fc]"
                          }`}>
                            <span className={`font-display text-[9px] font-bold tracking-[1.8px] uppercase block mb-1 ${
                              isDark ? "text-luna-teal" : "text-luna-pink"
                            }`}>
                              How This Shows Up
                            </span>
                            <p className={`text-sm leading-relaxed ${
                              isDark ? "text-luna-muted" : "text-[#7a6895]"
                            }`}>
                              {item.signal}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function renderWithStrong(text: string, strongPart: string, isDark: boolean) {
  const idx = text.indexOf(strongPart);
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const after = text.slice(idx + strongPart.length);
  return (
    <>
      {before}
      <strong className={`font-medium ${isDark ? "text-white/85" : "text-[#160228]"}`}>{strongPart}</strong>
      {after}
    </>
  );
}
