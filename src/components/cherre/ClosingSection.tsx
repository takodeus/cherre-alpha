import { motion, AnimatePresence } from "framer-motion";
import { LENS_DATA } from "@/lib/cherre-data";
import { useLens } from "./LensProvider";

export function ClosingSection() {
  const { activeLens } = useLens();
  const lens = LENS_DATA[activeLens];

  return (
    <section id="contact" className="border-b border-border bg-background">
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary block mb-3">
          The Starting Point
        </span>
        <div className="w-8 h-[2px] bg-primary mx-auto mb-6" />

        <AnimatePresence mode="wait">
          <motion.h2
            key={activeLens + "-closing-h2"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-[28px] font-bold text-primary leading-snug max-w-2xl mx-auto mb-5"
          >
            {lens.ch2}
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeLens + "-closing-sub"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="text-base leading-[1.8] text-foreground max-w-xl mx-auto mb-12 italic"
          >
            {lens.cs}
          </motion.p>
        </AnimatePresence>

        <div className="flex flex-col items-center gap-3">
          <a
            href={lens.pdf}
            download={lens.dlname}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm font-medium tracking-[0.08em] uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            ↓ Download One-Pager
          </a>
          <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted-foreground">
            {lens.pdflabel}
          </span>
        </div>
      </div>
    </section>
  );
}
