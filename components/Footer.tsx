import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Brand Logo */}
          <a href="/" className="flex items-center gap-2">
            <Logo className="w-7 h-7" />
          </a>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm font-medium text-slate-600">
            <a href="mailto:hello@bracketstudio.dev" className="hover:text-blue-600 transition-colors">
              hello@bracketstudio.dev
            </a>
            <a
              href="https://github.com/mahihasan909-gif/bracket-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a href="#services" className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            &copy; {year} Bracket Studio. Built for production.
          </p>
        </div>
      </div>
    </footer>
  );
}
