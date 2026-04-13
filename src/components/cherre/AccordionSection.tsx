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
  lead: string;
  items: AccordionItem[];
}

export function AccordionSection({ id, eyebrow, heading, lead, items }: AccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id={id} className="border-b border-border">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary block mb-3">
          {eyebrow}
        </span>
        <div className="w-8 h-[2px] bg-primary mb-6" />
        <h2 className="text-2xl md:text-[28px] font-bold text-primary leading-snug mb-5 max-w-2xl">
          {heading}
        </h2>
        <p className="text-base leading-[1.8] text-muted-foreground max-w-2xl mb-10">
          {lead}
        </p>

        <div className="space-y-1">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-sm transition-colors ${
                  isOpen ? "border-primary/20 bg-background" : "border-border bg-background hover:border-primary/15"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-primary shrink-0">
                      {item.num}
                    </span>
                    <span className="text-base font-semibold text-foreground leading-tight">
                      {item.title}
                    </span>
                    {item.tag && (
                      <span className="hidden sm:inline-block font-mono text-[8px] tracking-[0.12em] uppercase bg-plum-200/20 text-primary px-2 py-1 rounded-sm shrink-0">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                      isOpen
                        ? "bg-primary border-primary"
                        : "border-primary/30 group-hover:border-primary/50"
                    }`}
                  >
                    <svg
                      viewBox="0 0 10 10"
                      className={`w-2.5 h-2.5 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      stroke={isOpen ? "white" : "currentColor"}
                      strokeWidth="2"
                      fill="none"
                    >
                      <line x1="5" y1="1" x2="5" y2="9" className={isOpen ? "stroke-primary-foreground" : "stroke-primary"} />
                      <line x1="1" y1="5" x2="9" y2="5" className={isOpen ? "stroke-primary-foreground" : "stroke-primary"} />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-14">
                        <p className="text-[15px] leading-[1.8] text-muted-foreground mb-3">
                          {renderWithStrong(item.body, item.bodyStrong)}
                        </p>
                        {item.signal && (
                          <div className="border-l-2 border-primary bg-surface-alt pl-4 py-3 rounded-r-sm">
                            <span className="font-mono text-[8px] tracking-[0.18em] uppercase text-primary block mb-1">
                              SIGNAL
                            </span>
                            <p className="text-sm italic text-muted-foreground">
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

function renderWithStrong(text: string, strongPart: string) {
  const idx = text.indexOf(strongPart);
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const after = text.slice(idx + strongPart.length);
  return (
    <>
      {before}
      <strong className="text-foreground font-medium">{strongPart}</strong>
      {after}
    </>
  );
}
