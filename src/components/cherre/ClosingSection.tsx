import { motion, AnimatePresence } from "framer-motion";
import { LENS_DATA } from "@/lib/cherre-data";
import { useLens } from "./LensProvider";

export function ClosingSection() {
  const { activeLens } = useLens();
  const lens = LENS_DATA[activeLens];

  return (
    <section id="contact" className="border-t border-white/[0.05]" style={{ background: "#0d0117" }}>
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-28 text-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeLens + "-closing-h2"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="font-display text-[24px] sm:text-[clamp(26px,4.2vw,52px)] font-black leading-[1.1] text-white mb-4 sm:mb-6"
          >
            {lens.ch2}
            <br />
            <span className="text-luna-pink">{lens.ch2Em}</span>
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeLens + "-closing-sub"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="text-[14px] sm:text-[17px] leading-[1.75] text-luna-muted max-w-[560px] mx-auto mb-8 sm:mb-12"
          >
            {lens.cs}
          </motion.p>
        </AnimatePresence>

        <div className="flex flex-col items-center gap-4">
          <a
            href={lens.pdf}
            download={lens.dlname}
            className="inline-flex items-center gap-2 border-[1.5px] border-luna-pink rounded-full px-6 sm:px-9 py-3 sm:py-3.5 text-white font-display text-[13px] sm:text-sm font-bold tracking-wide hover:bg-luna-pink/20 transition-all"
            style={{ background: "rgba(224,64,160,0.10)" }}
          >
            &darr;&nbsp; Download Readiness Brief
          </a>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-luna-very-muted">
            {lens.pdflabel}
          </span>
        </div>
      </div>
    </section>
  );
}
