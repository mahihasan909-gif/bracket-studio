"use client";

import { useInView } from "@/hooks/useInView";

const caseStudies = [
  {
    tag: "01 / Web Application & Portal",
    title: "Faculty Research & Student Portal",
    problem:
      "A university professor needed to reliably collect, validate, and review longitudinal study submissions from hundreds of students. The prior Google Forms setup created hours of manual data wrangling and unverified inputs each semester.",
    built:
      "A full-stack Next.js web application featuring a Turso-backed submission database, student authentication, real-time submission review dashboard for faculty, and one-click CSV/JSON export. Built and shipped in under three weeks.",
    result:
      "Batch evaluation and submission review time reduced from ~4 hours per cycle to under 20 minutes. Currently deployed and in active use across multiple department cohorts.",
    tags: ["Next.js", "Turso libSQL", "Tailwind CSS", "TypeScript", "Vercel"],
  },
];

function CaseStudyCard({ cs, delay }: { cs: typeof caseStudies[0]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.08 });
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-[#111622] rounded-2xl border border-white/10 shadow-lg overflow-hidden group transition-all duration-700 hover:border-blue-500/50 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top Window Bar */}
      <div className="px-6 py-3.5 bg-[#0A0D14] border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 font-mono text-xs text-slate-400 font-medium">
            case-study / portal.production.app
          </span>
        </div>
        <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider">
          {cs.tag}
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] divide-y md:divide-y-0 md:divide-x divide-white/5">
        <div className="p-8 flex flex-col justify-between bg-[#0E131F]/50">
          <div>
            <h3 className="font-display font-bold text-[#F8FAFC] text-2xl mb-4 group-hover:text-sky-300 transition-colors">
              {cs.title}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-body">
              Real pilot project built for academic faculty and department operations.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-6">
            {cs.tags.map((t) => (
              <span
                key={t}
                className="text-xs bg-[#111622] border border-white/10 text-slate-300 px-2.5 py-1 rounded-md font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 space-y-6">
          {[
            { label: "The Challenge", text: cs.problem, highlight: false },
            { label: "What We Engineered", text: cs.built, highlight: false },
            { label: "Result & Impact", text: cs.result, highlight: true },
          ].map(({ label, text, highlight }) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5 font-mono">
                {label}
              </p>
              <p
                className={`text-sm md:text-base leading-relaxed font-body ${
                  highlight ? "text-white font-semibold" : "text-slate-300"
                }`}
              >
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
    <section id="work" className="bg-[#0E131F] py-24 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            [ RECENT WORK ]
          </div>
          <h2 className="font-display font-bold text-[#F8FAFC] text-3xl md:text-5xl leading-tight">
            Problems solved,
            <br />
            <span className="gradient-headline">systems shipped.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.title} cs={cs} delay={i * 120} />
          ))}
        </div>

        <p className="mt-10 text-center text-slate-400 text-sm font-medium">
          More case studies coming soon &mdash; currently packaging new commercial deliverables.
        </p>
      </div>
    </section>
  );
}
