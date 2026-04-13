import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONA_TILES, LENS_DATA, STATS, type LensKey } from "@/lib/cherre-data";

export function HeroSection() {
  const [activeLens, setActiveLens] = useState<LensKey>("investment");
  const lens = LENS_DATA[activeLens];

  return (
    <section id="hero">
      {/* Persona selector */}
      <div className="border-b border-border bg-background">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {PERSONA_TILES.map((tile) => {
              const isActive = tile.key === activeLens;
              return (
                <button
                  key={tile.key}
                  onClick={() => setActiveLens(tile.key)}
                  className={`text-left px-6 py-6 border-b-2 transition-all cursor-pointer ${
                    isActive
                      ? "border-b-primary bg-background"
                      : "border-b-transparent bg-surface-alt hover:bg-muted"
                  }`}
                >
                  <span
                    className={`font-mono text-[9px] tracking-[0.18em] uppercase block mb-2 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {tile.role}
                  </span>
                  <div
                    className={`text-lg font-semibold mb-2 leading-tight ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {tile.title}
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${
                      isActive ? "text-muted-foreground" : "text-muted-foreground/60"
                    }`}
                  >
                    {tile.hook}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero body */}
      <div className="bg-background border-b border-border">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeLens + "-h1"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="text-3xl md:text-[42px] font-bold leading-[1.1] text-primary tracking-tight"
              >
                {lens.h1}
              </motion.h1>
            </AnimatePresence>
            <div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeLens + "-sub"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="text-base leading-[1.8] text-foreground mb-8"
                >
                  {lens.sub}
                </motion.p>
              </AnimatePresence>
              <a
                href="#why-fails"
                className="inline-flex items-center gap-2 border border-border text-muted-foreground px-5 py-3 text-xs font-medium tracking-[0.08em] uppercase rounded-sm hover:border-primary hover:text-foreground transition-colors"
              >
                See Why AI Fails ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="bg-surface-alt border-b border-border">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {STATS.map((stat, i) => (
              <div key={i} className="py-6 md:px-8 first:md:pl-0 last:md:pr-0">
                <div className="text-3xl font-bold text-primary mb-2">{stat.num}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.desc}
                </p>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50 mt-1 block">
                  {stat.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
