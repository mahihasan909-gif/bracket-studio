"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--ink)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Wordmark */}
        <a href="/" className="flex items-center gap-1 group">
          <span className="text-[var(--blue)] font-mono text-xl font-bold transition-colors group-hover:text-[var(--blue-light)]">[</span>
          <span className="font-display font-bold text-[var(--paper)] text-lg tracking-tight">
            Bracket Studio
          </span>
          <span className="text-[var(--blue)] font-mono text-xl font-bold transition-colors group-hover:text-[var(--blue-light)]">]</span>
        </a>

        {/* Nav items */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--muted)]">
          <a href="#services" className="hover:text-[var(--paper)] transition-colors">Services</a>
          <a href="#work" className="hover:text-[var(--paper)] transition-colors">Work</a>
          <a href="#team" className="hover:text-[var(--paper)] transition-colors">Team</a>
        </nav>

        <a href="#contact" className="btn-primary text-sm">
          Start a project <span className="text-[var(--blue-light)]">→</span>
        </a>
      </div>
    </header>
  );
}
