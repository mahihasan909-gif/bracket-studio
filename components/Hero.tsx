"use client";

import { useEffect, useState } from "react";

const words = ["Custom Software.", "Websites & Web Apps.", "Agentic AI Systems.", "Mobile Applications."];

export default function Hero() {
  const [animated, setAnimated] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Typewriter effect */
  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-slate-50/80 to-white pt-24 pb-16">
      {/* Soft Ambient Radial Glows */}
      <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-indigo-500/8 blur-[120px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating brackets decorations */}
      <span
        className="pointer-events-none absolute top-28 right-16 font-mono text-[9rem] leading-none text-blue-200/40 float-bracket select-none"
        style={{ animationDelay: "0s" }}
      >
        {"{"}
      </span>
      <span
        className="pointer-events-none absolute bottom-24 left-12 font-mono text-[7rem] leading-none text-slate-200/60 float-bracket select-none"
        style={{ animationDelay: "2.5s" }}
      >
        {"["}
      </span>
      <span
        className="pointer-events-none absolute bottom-36 right-36 font-mono text-[6rem] leading-none text-blue-200/30 float-bracket select-none"
        style={{ animationDelay: "5s" }}
      >
        {"]"}
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Eyebrow tag */}
        <div
          className={`inline-flex items-center gap-2 bg-blue-50/80 border border-blue-200/80 text-blue-700 px-4 py-1.5 rounded-full mb-8 text-sm font-medium shadow-xs opacity-0 ${
            animated ? "anim-fade-up" : ""
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 inline-block animate-pulse" />
          Dhaka-based engineering team &middot; Available for pilots & projects
        </div>

        {/* Main headline with architectural brackets */}
        <div className="flex items-start gap-3 md:gap-5 mb-4">
          <span
            className={`font-display font-black text-blue-600 select-none opacity-0 ${
              animated ? "bracket-left" : ""
            }`}
            style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", lineHeight: 1 }}
          >
            {"{"}
          </span>

          <div className="flex-1 min-w-0">
            <h1 className="font-display font-black text-slate-900 leading-[1.08] mb-3">
              We build the
              <br />
              <span className="gradient-text">last mile.</span>
            </h1>
          </div>

          <span
            className={`font-display font-black text-blue-600 self-end select-none opacity-0 ${
              animated ? "bracket-right" : ""
            }`}
            style={{ fontSize: "clamp(3.5rem, 8vw, 6.5rem)", lineHeight: 1 }}
          >
            {"}"}
          </span>
        </div>

        {/* Typewriter sub-line */}
        <div
          className={`mb-8 opacity-0 ${animated ? "anim-fade-up delay-300" : ""}`}
        >
          <p className="text-slate-600 text-xl md:text-2xl font-body">
            We deliver{" "}
            <span className="text-blue-600 font-semibold">
              {displayed}
              <span className="inline-block w-[2px] h-[1.15em] bg-blue-600 ml-0.5 align-middle animate-pulse" />
            </span>
          </p>
          <p className="text-slate-500 mt-3 max-w-[58ch] text-base md:text-lg leading-relaxed">
            Engineered software for professors, campus organizations, and growing businesses&thinsp;—&thinsp;shipped, secured, and supported.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 opacity-0 ${animated ? "anim-fade-up delay-500" : ""}`}
        >
          <a href="#contact" className="btn-primary text-base">
            Start a project &rarr;
          </a>
          <a href="#services" className="btn-ghost text-base">
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}
