import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-[#0A0D14] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-2">
            <Logo className="w-7 h-7" />
          </a>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm font-medium text-slate-400">
            <a href="mailto:hello@bracketstudio.dev" className="hover:text-white transition-colors">
              hello@bracketstudio.dev
            </a>
            <a
              href="https://github.com/mahihasan909-gif/bracket-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <p className="text-xs text-slate-500 font-mono">
            &copy; {year} Bracket Studio. Built for production.
          </p>
        </div>
      </div>
    </footer>
  );
}
