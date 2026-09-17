"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white/70 backdrop-blur-sm border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
        </a>

        {/* Nav items */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#work" className="hover:text-slate-900 transition-colors">Work</a>
          <a href="#team" className="hover:text-slate-900 transition-colors">Team</a>
          <a href="#why-us" className="hover:text-slate-900 transition-colors">Why Us</a>
        </nav>

        <a href="#contact" className="btn-primary text-sm">
          Start a project <span className="opacity-80">→</span>
        </a>
      </div>
    </header>
  );
}
