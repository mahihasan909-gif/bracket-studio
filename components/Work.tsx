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
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group transition-all duration-700 hover:border-blue-300 hover:shadow-xl ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top Window Bar */}
      <div className="px-6 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="ml-3 font-mono text-xs text-slate-500 font-medium">
            case-study / portal.production.app
          </span>
        </div>
        <span className="font-mono text-xs text-blue-600 font-semibold uppercase tracking-wider">
          {cs.tag}
        </span>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] divide-y md:divide-y-0 md:divide-x divide-slate-100">
        <div className="p-8 flex flex-col justify-between bg-slate-50/50">
          <div>
            <h3 className="font-display font-bold text-slate-900 text-2xl mb-4 group-hover:text-blue-600 transition-colors">
              {cs.title}
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Real pilot project built for academic faculty and department operations.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-6">
            {cs.tags.map((t) => (
              <span
                key={t}
                className="text-xs bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-md font-mono"
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
            { label: "Business & Academic Result", text: cs.result, highlight: true },
          ].map(({ label, text, highlight }) => (
            <div key={label}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5 font-mono">
                {label}
              </p>
              <p
                className={`text-sm md:text-base leading-relaxed ${
                  highlight ? "text-slate-900 font-semibold" : "text-slate-600"
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
    <section id="work" className="bg-slate-50 py-24 px-6 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            [ RECENT WORK ]
          </div>
          <h2 className="font-display font-bold text-slate-900 text-3xl md:text-5xl leading-tight">
            Problems solved,
            <br />
            <span className="gradient-text">systems shipped.</span>
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
