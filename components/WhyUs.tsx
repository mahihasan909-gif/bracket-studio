"use client";

import { useInView } from "@/hooks/useInView";

const points = [
  {
    icon: "⚡",
    title: "We actually ship",
    desc: "No endless discovery phases or slide decks. We move fast, deliver working prototypes, and iterate with real feedback.",
  },
  {
    icon: "🛡️",
    title: "Production-ready systems",
    desc: "Authentication, database transactions, error handling, automated backups, and uptime checks — done right from day one.",
  },
  {
    icon: "🤝",
    title: "Someone to call",
    desc: "When an edge case happens or an API changes, we resolve it. You get direct engineer access, not an opaque ticket queue.",
  },
  {
    icon: "🧠",
    title: "AI as leverage, not magic",
    desc: "We use modern LLMs to write code 5x faster, but we take full responsibility for testing, security, and architecture.",
  },
];

function PointCard({ p, delay }: { p: typeof points[0]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white border border-slate-200/90 rounded-xl p-6 transition-all duration-700 hover:border-blue-300 hover:shadow-md group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-2xl mb-3 block">{p.icon}</span>
      <h4 className="font-display font-bold text-slate-900 mb-1.5 text-lg group-hover:text-blue-600 transition-colors">
        {p.title}
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
    </div>
  );
}

export default function WhyUs() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: quoteRef, inView: quoteIn } = useInView({ threshold: 0.2 });

  return (
    <section id="why-us" className="relative bg-white py-28 px-6 overflow-hidden border-b border-slate-200/80">
      <div className="relative max-w-6xl mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            [ WHY BRACKET STUDIO ]
          </div>
          <h2 className="font-display font-bold text-slate-900 text-3xl md:text-5xl leading-tight max-w-3xl">
            Tools like Claude can write code.
            <br />
            <span className="text-blue-600">We turn that into a finished product.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Quote Block */}
          <div
            ref={quoteRef as React.RefObject<HTMLDivElement>}
            className={`bg-slate-50 border border-slate-200/80 rounded-2xl p-8 transition-all duration-700 ${
              quoteIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <blockquote className="relative border-l-3 border-rose-600 pl-6">
              <p className="text-slate-800 text-lg md:text-xl leading-relaxed font-body">
                Deploying it, securing it, connecting it to a database or payment system, and keeping it running after launch is the part that{" "}
                <strong className="text-slate-950 font-semibold">
                  doesn&rsquo;t show up in a chat window.
                </strong>{" "}
                You get a finished system and someone to call when it breaks&thinsp;—&thinsp;not a code snippet to debug yourself.
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-8 h-px bg-slate-300" />
                <span className="text-slate-500 text-sm font-medium">The Bracket Studio Principle</span>
              </footer>
            </blockquote>
          </div>

          {/* Points Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <PointCard key={p.title} p={p} delay={i * 90} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
