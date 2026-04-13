export function CherreFooter() {
  return (
    <footer className="border-t border-white/[0.05]" style={{ background: "#0a0810" }}>
      <div className="max-w-[1120px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-luna-very-muted">
          &copy; 2026 Cherre, Inc. &mdash; Governed Data for Enterprise AI
        </p>
        <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-luna-very-muted">
          cherre.com &middot; info@cherre.com
        </p>
      </div>
    </footer>
  );
}
