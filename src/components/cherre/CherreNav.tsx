export function CherreNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] backdrop-blur-md" style={{ background: "rgba(13,1,23,0.92)" }}>
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 h-14">
        <a href="#hero" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/cherre-logo.png"
            alt="Cherre"
            className="h-7 sm:h-9 w-auto brightness-0 invert"
          />
        </a>

        <span className="hidden lg:block font-mono text-[10px] tracking-[0.18em] uppercase text-luna-muted">
          The Governed Data Layer for Enterprise AI
        </span>

        <a
          href="#contact"
          className="border border-luna-pink/40 text-white px-3 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium tracking-[0.08em] uppercase rounded-full hover:bg-luna-pink/15 transition-all shrink-0"
          style={{ background: "rgba(224,64,160,0.08)" }}
        >
          Assess Your AI Readiness
        </a>
      </div>
    </header>
  );
}
