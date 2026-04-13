import { motion, AnimatePresence } from "framer-motion";
import { PERSONA_TILES, LENS_DATA, STATS } from "@/lib/cherre-data";
import { useLens } from "./LensProvider";

export function HeroSection() {
  const { activeLens, setActiveLens } = useLens();
  const lens = LENS_DATA[activeLens];

  return (
    <section id="hero">
      {/* Hero with gradient + particles — compact on mobile to fit with persona tiles in one screen */}
      <div className="hero-gradient relative flex flex-col justify-center">
        <div className="particle-field" />

        <div className="relative z-10 max-w-[880px] mx-auto px-4 sm:px-6 md:px-10 py-8 sm:py-16 md:py-28 text-center">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 border border-luna-teal/30 rounded-full px-3 sm:px-5 py-1 sm:py-1.5 mb-4 sm:mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-luna-teal" />
            <span className="font-display text-[8px] sm:text-[11px] font-bold tracking-[1.6px] sm:tracking-[2.5px] uppercase text-luna-teal">
              The Governed Data Layer for Enterprise AI
            </span>
          </div>

          {/* Headline */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeLens + "-h1"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[22px] sm:text-[36px] md:text-[clamp(40px,5.2vw,64px)] font-extrabold leading-[1.15] tracking-tight text-white mb-3 sm:mb-7"
            >
              {lens.h1}
              <br />
              <span className="gradient-text">{lens.h1Em}</span>
            </motion.h1>
          </AnimatePresence>

          {/* Subtitle */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeLens + "-sub"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[12px] sm:text-[16px] md:text-[18px] leading-[1.6] sm:leading-[1.7] text-luna-muted max-w-[660px] mx-auto"
            >
              {lens.sub}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Persona tiles — compact horizontal tabs on mobile, full cards on desktop */}
      <div style={{ background: "#130220" }} className="border-t border-white/[0.04]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 md:px-10">
          {/* Mobile: horizontal compact tabs */}
          <div className="flex sm:hidden gap-1 py-2">
            {PERSONA_TILES.map((tile) => {
              const isActive = tile.key === activeLens;
              return (
                <button
                  key={tile.key}
                  onClick={() => setActiveLens(tile.key)}
                  className={`flex-1 text-center px-2 py-2.5 rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? "bg-luna-pink/[0.12] border border-luna-pink/30"
                      : "border border-transparent hover:bg-white/[0.03] opacity-60 hover:opacity-80"
                  }`}
                >
                  <span
                    className={`font-display text-[8px] font-bold tracking-[1.2px] uppercase block mb-1 ${
                      isActive ? "text-luna-pink" : "text-luna-very-muted"
                    }`}
                  >
                    {tile.role}
                  </span>
                  <div
                    className={`font-display text-[11px] font-bold leading-tight ${
                      isActive ? "text-white" : "text-luna-muted"
                    }`}
                  >
                    {tile.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Desktop: full card tiles */}
          <div className="hidden sm:grid grid-cols-3 gap-0">
            {PERSONA_TILES.map((tile) => {
              const isActive = tile.key === activeLens;
              return (
                <button
                  key={tile.key}
                  onClick={() => setActiveLens(tile.key)}
                  className={`text-left px-4 sm:px-6 py-5 sm:py-6 border-b-2 transition-all cursor-pointer ${
                    isActive
                      ? "border-b-luna-pink bg-luna-pink/[0.08]"
                      : "border-b-transparent hover:bg-white/[0.03] opacity-60 hover:opacity-80"
                  }`}
                >
                  <span
                    className={`font-display text-[10px] font-bold tracking-[1.8px] uppercase block mb-2 ${
                      isActive ? "text-luna-pink" : "text-luna-very-muted"
                    }`}
                  >
                    {tile.role}
                  </span>
                  <div
                    className={`font-display text-lg font-bold mb-2 leading-tight ${
                      isActive ? "text-white" : "text-luna-muted"
                    }`}
                  >
                    {tile.title}
                  </div>
                  <p className="text-sm leading-relaxed text-luna-muted">
                    {tile.hook}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div style={{ background: "#0d0117" }} className="border-t border-white/[0.04]">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 md:px-10 py-2">
          <div className="flex flex-col sm:flex-row border border-white/[0.07] rounded-2xl overflow-hidden">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className={`flex-1 py-6 sm:py-8 px-4 sm:px-6 text-center ${
                  i < STATS.length - 1 ? "sm:border-r border-b sm:border-b-0 border-white/[0.07]" : ""
                }`}
              >
                <div className="font-display text-[36px] sm:text-[46px] font-black text-white leading-none tracking-tight mb-2">
                  {stat.num.includes("+") ? (
                    <>
                      {stat.num.replace("+", "")}
                      <span className="text-luna-pink">+</span>
                    </>
                  ) : (
                    stat.num
                  )}
                </div>
                <p className="text-[11px] sm:text-[12.5px] text-luna-muted leading-relaxed max-w-[200px] sm:max-w-[160px] mx-auto">
                  {stat.desc}
                </p>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-luna-very-muted mt-2 block">
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
