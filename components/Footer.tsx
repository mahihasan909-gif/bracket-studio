import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--ink)] px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-2">
            <Logo className="w-7 h-7" />
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
