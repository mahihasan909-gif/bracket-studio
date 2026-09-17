export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--muted)]/25 max-w-5xl mx-auto px-6 py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <span>
          <span className="text-[var(--blue)] font-mono">[</span>
          &nbsp;Bracket Studio&nbsp;
          <span className="text-[var(--blue)] font-mono">]</span>
          &ensp;&copy; {year}
        </span>

        <div className="flex gap-6">
          {/* TODO: Replace with real links */}
          <a
            href="mailto:hello@bracketstudio.dev"
            className="hover:text-[var(--ink)] transition-colors"
          >
            hello@bracketstudio.dev
          </a>
          <a
            href="https://github.com/bracket-studio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--ink)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
