"use client";

import { useEffect, useState } from "react";

const words = [
  "Custom Software.",
  "Websites & Web Apps.",
  "Agentic AI Systems.",
  "Mobile Applications.",
];

export default function Hero() {
  const [animated, setAnimated] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 60);
    return () => clearTimeout(t);
  }, []);

  /* Typewriter effect */
  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 28);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden bg-[#0A0D14] pt-28 pb-20">
      {/* Deep Executive Blue Ambient Glows */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[480px] rounded-full bg-blue-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-12 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />

      {/* Subtle Architectural Code Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient background brackets */}
      <span
        className="pointer-events-none absolute top-28 right-20 font-mono text-[9rem] leading-none text-blue-500/5 float-bracket select-none"
        style={{ animationDelay: "0s" }}
      >
        {"{"}
      </span>
      <span
        className="pointer-events-none absolute bottom-24 left-16 font-mono text-[8rem] leading-none text-blue-500/5 float-bracket select-none"
        style={{ animationDelay: "3s" }}
      >
        {"}"}
      </span>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Status pill */}
        <div
          className={`inline-flex items-center gap-2.5 bg-blue-950/50 border border-blue-800/40 text-blue-300 px-4 py-1.5 rounded-full mb-8 text-xs font-mono font-medium tracking-wide shadow-xs opacity-0 ${
            animated ? "anim-fade-up" : ""
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
          Dhaka Engineering Studio &middot; Available for Pilots &amp; Systems
        </div>

        {/* Headline with Integrated Architectural Brackets */}
        <div className="max-w-4xl mb-6">
          <h1 className="font-display font-bold text-[#F8FAFC] tracking-tight leading-[1.08] mb-4">
            <span className="text-blue-500 font-mono font-normal inline-block mr-2 opacity-85">{"{"}</span>
            We build the{" "}
            <span className="gradient-headline">last mile.</span>
            <span className="text-blue-500 font-mono font-normal inline-block ml-2 opacity-85">{"}"}</span>
          </h1>

          {/* Typewriter text */}
          <div className="text-xl md:text-2xl font-body text-slate-300 min-h-[2.5rem] flex items-center">
            <span>We deliver&nbsp;</span>
            <span className="text-sky-400 font-semibold">
              {displayed}
              <span className="inline-block w-[2px] h-[1.15em] bg-sky-400 ml-0.5 align-middle animate-pulse" />
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-slate-400 text-base md:text-lg max-w-[62ch] leading-relaxed mb-10">
          Engineered software for professors, campus organizations, and growing businesses&thinsp;—&thinsp;shipped, secured, and supported.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap items-center gap-4 opacity-0 ${
            animated ? "anim-fade-up delay-300" : ""
          }`}
        >
          <a href="#contact" className="btn-primary text-base">
            Start a project &rarr;
          </a>
          <a href="#services" className="btn-secondary text-base">
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}
