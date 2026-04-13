import { useTheme } from "./ThemeProvider";

export function CherreNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-colors">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between px-6 md:px-10 h-14">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/images/cherre-logo.png"
            alt="Cherre"
            className="h-9 w-auto"
          />
        </a>

        <span className="hidden md:block font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">
          AI Activation in a Box
        </span>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="hidden md:flex items-center gap-2 cursor-pointer"
            aria-label="Toggle dark/light mode"
          >
            <div className="w-9 h-5 rounded-full border border-border bg-muted relative transition-colors">
              <div
                className="w-[14px] h-[14px] rounded-full bg-primary absolute top-[2px] transition-transform duration-300"
                style={{
                  transform: theme === "dark" ? "translateX(17px)" : "translateX(2px)",
                }}
              />
            </div>
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground min-w-[36px]">
              {theme === "dark" ? "DARK" : "LIGHT"}
            </span>
          </button>

          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2 text-xs font-medium tracking-[0.08em] uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Request Assessment
          </a>
        </div>
      </div>
    </header>
  );
}
