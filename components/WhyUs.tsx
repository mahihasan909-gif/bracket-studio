"use client";

import { useInView } from "@/hooks/useInView";

const points = [
  {
    icon: "⚙",
    title: "We actually ship",
    desc: "No months of planning. We move fast, deliver working software, then iterate.",
  },
  {
    icon: "🔒",
    title: "Production-ready",
    desc: "Auth, error handling, backups, monitoring — all the boring critical stuff done right.",
  },
  {
    icon: "📞",
    title: "Someone to call",
    desc: "When something breaks at 2am, we fix it. Not a ticket system — a real conversation.",
  },
  {
    icon: "💡",
    title: "AI as leverage, not magic",
    desc: "We use tools like Claude to build faster. You still get a maintained, secure system.",
  },
];

function PointCard({ p, delay }: { p: typeof points[0]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border border-[var(--border)] p-5 transition-all duration-700 hover:border-[var(--blue)]/50 group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-2xl mb-3 block">{p.icon}</span>
      <h4 className="font-display font-bold text-[var(--paper)] mb-1 group-hover:text-[var(--blue-light)] transition-colors">
        {p.title}
      </h4>
      <p className="text-[var(--muted)] text-sm leading-relaxed">{p.desc}</p>
    </div>
  );
}

export default function WhyUs() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: quoteRef, inView: quoteIn } = useInView({ threshold: 0.2 });

  return (
    <section className="relative bg-[var(--ink)] py-28 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--blue)]/5 via-transparent to-transparent" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--blue)]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[var(--red)] font-mono text-sm mb-3 tracking-widest">[ WHY BRACKET STUDIO ]</p>
          <h2 className="font-display font-bold text-[var(--paper)] max-w-2xl">
            Tools like Claude can write code.
            <br />
            <span className="text-[var(--muted)]">We turn that into a product.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Quote */}
          <div
            ref={quoteRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${quoteIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <blockquote className="relative border-l-2 border-[var(--red)] pl-8">
              <p className="text-[var(--paper)]/85 text-lg leading-relaxed">
                Deploying it, securing it, connecting it to a database or payment system, and keeping it running after launch is the part that{" "}
                <span className="text-[var(--paper)] font-semibold">
                  doesn&rsquo;t show up in a chat window.
                </span>{" "}
                You get a finished system and someone to call when it breaks — not a code snippet to debug yourself.
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-8 h-px bg-[var(--border)]" />
                <span className="text-[var(--muted)] text-sm">Bracket Studio team</span>
              </footer>
            </blockquote>
          </div>

          {/* Points grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <PointCard key={p.title} p={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
