"use client";

import { useInView } from "@/hooks/useInView";

const caseStudies = [
  {
    tag: "01 / Web Application",
    title: "Faculty Research Portal",
    problem: "A university professor needed to collect and review student submissions for a longitudinal study. The existing Google Form setup created hours of manual data work each semester.",
    built: "A Next.js web app with a Turso-backed submission database, admin dashboard with filtering, and one-click CSV export. Delivered in 3 weeks.",
    result: "Review time cut from ~4 hours per batch to under 20 minutes. Now used across two courses.",
    tags: ["Next.js", "Turso", "Auth"],
  },
  // TODO: Add your real projects here
];

function CaseStudyCard({ cs, delay }: { cs: typeof caseStudies[0]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.08 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`border border-[var(--border)] overflow-hidden group transition-all duration-700 hover:border-[var(--blue)]/50 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top bar */}
      <div className="px-8 py-4 border-b border-[var(--border)] flex items-center justify-between">
        <span className="font-mono text-xs text-[var(--muted)] tracking-widest">{cs.tag}</span>
        <div className="flex gap-1.5">
          {["#3D3D3D", "#555", "#777"].map((c, j) => (
            <div key={j} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] divide-x divide-[var(--border)]">
        <div className="p-8 flex flex-col justify-between">
          <h3 className="font-display font-bold text-[var(--paper)] text-2xl mb-6 group-hover:text-[var(--blue-light)] transition-colors">
            {cs.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <span key={t} className="text-xs border border-[var(--border)] text-[var(--muted)] px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 space-y-5">
          {[
            { label: "Problem", text: cs.problem },
            { label: "What we built", text: cs.built },
            { label: "Result", text: cs.result, highlight: true },
          ].map(({ label, text, highlight }) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">{label}</p>
              <p className={`text-sm leading-relaxed ${highlight ? "text-[var(--paper)] font-semibold" : "text-[var(--paper)]/70"}`}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="work" className="bg-[var(--ink)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[var(--blue)] font-mono text-sm mb-3 tracking-widest">[ RECENT WORK ]</p>
          <h2 className="font-display font-bold text-[var(--paper)]">
            Problems solved,
            <br />
            <span className="gradient-text">systems shipped.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.title} cs={cs} delay={i * 150} />
          ))}
        </div>

        <p className="mt-8 text-center text-[var(--muted)] text-sm">
          More case studies coming soon — we&rsquo;re documenting active projects.
        </p>
      </div>
    </section>
  );
}
