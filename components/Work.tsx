"use client";

import { useInView } from "@/hooks/useInView";

const caseStudies = [
  {
    tag: "01 / Production Case Study",
    title: "Faculty Research & Student Longitudinal Portal",
    client: "University Faculty Research Lab & Cohorts",
    problem:
      "A university professor needed to reliably collect, validate, and evaluate longitudinal study submissions from hundreds of students each term. The previous Google Forms setup created hours of manual data wrangling, duplicate submissions, and unverified file payloads.",
    architecture:
      "Engineered a full-stack Next.js application backed by a distributed Turso libSQL edge database. Implemented strict client-side and server-side Zod validation, role-based faculty dashboards with instant search filtering, and one-click sanitized CSV/JSON exports.",
    result:
      "Review and grading time dropped from ~4 hours per evaluation batch to under 20 minutes. Currently actively deployed in production and handling semester submissions with zero downtime.",
    specs: ["Next.js 16 Turbopack", "Turso libSQL", "TypeScript", "Zod Validation", "Edge Functions"],
  },
];

export default function Work() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="work" className="bg-[#0A0D14] py-28 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            Proven Deliverables
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Problems solved. Systems shipped.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            Every project is engineered to solve a specific operational bottleneck and deployed to live production.
          </p>
        </div>

        {/* Case Study Card */}
        <div className="space-y-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.title}
              className="bg-[#111622] rounded-xl border border-white/10 overflow-hidden shadow-xl"
            >
              {/* Window Header */}
              <div className="px-6 py-3.5 bg-[#0D111A] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    production-app &middot; {cs.client}
                  </span>
                </div>
                <span className="font-mono text-xs text-blue-400 font-semibold uppercase tracking-wider">
                  {cs.tag}
                </span>
              </div>

              {/* Body */}
              <div className="grid lg:grid-cols-[1.1fr_1.9fr] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                <div className="p-8 flex flex-col justify-between bg-[#0E131F]/60">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-3 tracking-tight">
                      {cs.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400 mb-6 uppercase tracking-wider">
                      Deployed &middot; Active Production
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Engineered for academic faculty and department operations to replace fragile form workflows.
                    </p>
                  </div>

                  {/* Tech Specs */}
                  <div>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Technical Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
                      {cs.specs.map((s) => (
                        <span
                          key={s}
                          className="bg-[#111622] border border-white/10 px-2.5 py-1 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      01 / The Operational Problem
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      02 / What Bracket Studio Engineered
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {cs.architecture}
                    </p>
                  </div>

                  <div className="bg-[#0D111A] p-4 rounded-lg border border-white/5">
                    <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1 font-semibold">
                      03 / Measured Operational Impact
                    </p>
                    <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                      {cs.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs font-mono text-slate-500">
          More commercial case studies currently being documented for public release.
        </p>
      </div>
    </section>
  );
}
