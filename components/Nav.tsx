export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--muted)]/20 bg-[var(--paper)]/95 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-[var(--ink)] text-lg tracking-tight">
          <span className="text-[var(--blue)]">[</span>
          Bracket Studio
          <span className="text-[var(--blue)]">]</span>
        </span>
        <a
          href="#contact"
          className="text-sm font-semibold text-[var(--blue)] border border-[var(--blue)] px-4 py-1.5 hover:bg-[var(--blue)] hover:text-[var(--paper)] transition-colors duration-150"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
