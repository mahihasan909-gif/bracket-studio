"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Small delay so the animation is visible after page paint
    const t = setTimeout(() => setAnimated(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
      <div className="max-w-3xl">
        {/* Bracket framing the headline */}
        <div className="flex items-start gap-4 mb-6">
          <span
            className={`text-[var(--blue)] font-display font-black text-[4rem] leading-none select-none opacity-0 ${
              animated ? "bracket-left" : ""
            }`}
          >
            {"{"}
          </span>

          <div className="pt-1 flex-1">
            <h1 className="font-display font-black text-[var(--ink)] mb-4">
              We build the&nbsp;last&nbsp;mile.
            </h1>
            <p className="text-[1.25rem] text-[var(--muted)] max-w-[55ch] leading-relaxed">
              Websites, apps, and tools&thinsp;—&thinsp;shipped, not just written.
              Real software for professors, campus orgs, and small businesses.
            </p>
          </div>

          <span
            className={`text-[var(--blue)] font-display font-black text-[4rem] leading-none self-end select-none opacity-0 ${
              animated ? "bracket-right" : ""
            }`}
          >
            {"}"}
          </span>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-block bg-[var(--blue)] text-[var(--paper)] font-semibold px-6 py-3 hover:opacity-90 transition-opacity duration-150"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-block text-[var(--ink)] border border-[var(--muted)] px-6 py-3 hover:border-[var(--ink)] transition-colors duration-150"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
