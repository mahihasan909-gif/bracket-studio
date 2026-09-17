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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 h-16 flex items-center ${
        scrolled
          ? "bg-[#0A0D14]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-[#0A0D14]/80 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-white transition-colors">
            Case Studies
          </a>
          <a href="#why-us" className="hover:text-white transition-colors">
            Why Us
          </a>
          <a href="#team" className="hover:text-white transition-colors">
            Team
          </a>
        </nav>

        {/* Right Status & CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for projects</span>
          </div>

          <a href="#contact" className="btn-primary text-sm">
            Start a project &rarr;
          </a>
        </div>
      </div>
    </header>
  );
}
