"use client";

import { useEffect, useState } from "react";

const words = ["Custom Software.", "Websites.", "Agentic AI.", "Mobile Apps."];

export default function Hero() {
  const [animated, setAnimated] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* Typewriter effect */
  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--ink)]">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--paper) 1px, transparent 1px), linear-gradient(90deg, var(--paper) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--blue)] opacity-[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--blue-light)] opacity-[0.05] blur-[100px]" />

      {/* Floating brackets decorations */}
      <span
        className="pointer-events-none absolute top-32 right-24 font-mono text-[8rem] leading-none text-[var(--blue)] opacity-[0.06] float-bracket select-none"
        style={{ animationDelay: "0s" }}
      >
        {"{"}
      </span>
      <span
        className="pointer-events-none absolute bottom-32 left-16 font-mono text-[6rem] leading-none text-[var(--blue)] opacity-[0.06] float-bracket select-none"
        style={{ animationDelay: "2s" }}
      >
        {"["}
      </span>
      <span
        className="pointer-events-none absolute bottom-48 right-48 font-mono text-[5rem] leading-none text-[var(--blue)] opacity-[0.04] float-bracket select-none"
        style={{ animationDelay: "4s" }}
      >
        {"]"}
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* Eyebrow tag */}
        <div
          className={`inline-flex items-center gap-2 border border-[var(--border)] px-4 py-1.5 mb-8 text-sm text-[var(--muted)] opacity-0 ${
            animated ? "anim-fade-up" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] inline-block animate-pulse" />
          Dhaka-based student dev team · Available for projects
        </div>

        {/* Main headline with brackets */}
        <div className="flex items-start gap-4 mb-4">
          <span
            className={`font-display font-black text-[var(--blue)] select-none opacity-0 ${
              animated ? "bracket-left" : ""
            }`}
            style={{ fontSize: "clamp(3rem,8vw,6rem)", lineHeight: 1 }}
          >
            {"{"}
          </span>

          <div className="flex-1 min-w-0">
            <h1 className="font-display font-black text-[var(--paper)] leading-tight mb-2">
              We build the
              <br />
              <span className="gradient-text">last mile.</span>
            </h1>
          </div>

          <span
            className={`font-display font-black text-[var(--blue)] self-end select-none opacity-0 ${
              animated ? "bracket-right" : ""
            }`}
            style={{ fontSize: "clamp(3rem,8vw,6rem)", lineHeight: 1 }}
          >
            {"}"}
          </span>
        </div>

        {/* Typewriter sub-line */}
        <div
          className={`ml-0 md:ml-4 mb-8 opacity-0 ${animated ? "anim-fade-up delay-300" : ""}`}
        >
          <p className="text-[var(--muted)] text-xl md:text-2xl font-body">
            We ship{" "}
            <span className="text-[var(--paper)] font-semibold">
              {displayed}
              <span className="inline-block w-[2px] h-[1.2em] bg-[var(--blue)] ml-0.5 align-middle animate-pulse" />
            </span>
          </p>
          <p className="text-[var(--muted)] mt-2 max-w-[55ch] text-lg">
            Real software for professors, campus orgs, and businesses — deployed, secured, and maintained.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-wrap gap-4 opacity-0 ${animated ? "anim-fade-up delay-500" : ""}`}
        >
          <a href="#contact" className="btn-primary">
            Start a project
          </a>
          <a href="#work" className="btn-ghost">
            See our work
          </a>
        </div>

        {/* Scroll cue */}
        <div
          className={`mt-16 flex items-center gap-3 text-[var(--muted)] text-sm opacity-0 ${
            animated ? "anim-fade-in delay-700" : ""
          }`}
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
