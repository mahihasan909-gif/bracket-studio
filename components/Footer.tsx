export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--ink)] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Wordmark */}
          <a href="/" className="flex items-center gap-1 group">
            <span className="text-[var(--blue)] font-mono font-bold group-hover:text-[var(--blue-light)] transition-colors">[</span>
            <span className="font-display font-bold text-[var(--paper)]">Bracket Studio</span>
            <span className="text-[var(--blue)] font-mono font-bold group-hover:text-[var(--blue-light)] transition-colors">]</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm text-[var(--muted)]">
            <a href="mailto:hello@bracketstudio.dev" className="hover:text-[var(--paper)] transition-colors">
              hello@bracketstudio.dev
            </a>
            <a href="https://github.com/mahihasan909-gif/bracket-studio" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--paper)] transition-colors">
              GitHub
            </a>
            <a href="#contact" className="hover:text-[var(--paper)] transition-colors">
              Contact
            </a>
          </div>

          <p className="text-xs text-[var(--muted)]/60">&copy; {year} Bracket Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
