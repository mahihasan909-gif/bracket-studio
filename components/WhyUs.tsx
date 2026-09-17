"use client";

import { useInView } from "@/hooks/useInView";

const pillars = [
  {
    num: "01",
    title: "System Architecture over Code Snippets",
    desc: "LLMs generate isolated functions. We architect end-to-end applications: data relational models, edge routing, caching, and failover resilience.",
  },
  {
    num: "02",
    title: "Production Security & Zero-Trust Auth",
    desc: "Strict session verification, CSRF mitigation, parameter sanitization, rate limiting, and environment isolation. Never hardcoded keys.",
  },
  {
    num: "03",
    title: "Direct Founder Engineering Access",
    desc: "You talk directly to the engineers building your software in Dhaka. No account executives, no ticket queues, no bureaucratic delay.",
  },
  {
    num: "04",
    title: "Accountability After Launch",
    desc: "When a third-party API deprecates an endpoint or a database index needs tuning under real load, we diagnose and fix it immediately.",
  },
];

export default function WhyUs() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="why-us" className="relative bg-[#0A0D14] py-28 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            The Engineering Difference
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            AI can generate code.
            <br />
            <span className="text-blue-400">We build and maintain the product.</span>
          </h2>
        </div>

        {/* Feature Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Quote Block (5 cols) */}
          <div className="lg:col-span-5 bg-[#111622] border border-white/10 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
            <p className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-4">
              The Reality of Production
            </p>
            <blockquote className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              &ldquo;Deploying software, securing it, connecting it to a database or payment system, and keeping it running after launch is the part that{" "}
              <strong className="text-white font-semibold">
                doesn&rsquo;t show up in a chat window.
              </strong>{" "}
              You get a finished, resilient system and someone to call when it breaks&thinsp;—&thinsp;not a code snippet you have to debug alone.&rdquo;
            </blockquote>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Bracket Studio Philosophy</span>
              <span className="text-emerald-400 font-semibold">Shipped &middot; Verified</span>
            </div>
          </div>

          {/* 4 Technical Pillars (7 cols) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-[#111622] border border-white/10 rounded-xl p-6 hover:border-blue-500/40 transition-all group"
              >
                <span className="font-mono text-xs font-bold text-blue-400 block mb-2">
                  {p.num}
                </span>
                <h4 className="text-white font-bold text-base mb-2 group-hover:text-blue-300 transition-colors">
                  {p.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
