"use client";

import { useInView } from "@/hooks/useInView";

const members = [
  {
    initials: "MH",
    name: "Mahi Hasan",
    role: "Lead Systems Architect & Founder",
    focus: "Full-stack architectures, Next.js, distributed databases, cloud deployments",
    color: "#2563EB",
  },
  {
    initials: "RA",
    name: "Rafid",
    role: "Backend & Systems Engineer",
    focus: "Distributed APIs, database schemas, performance profiling, backend pipelines",
    color: "#0284C7",
  },
  {
    initials: "NI",
    name: "Nabil",
    role: "Mobile & Frontend Engineer",
    focus: "React Native, Expo, offline-first mobile apps, accessible UI interactions",
    color: "#0D9488",
  },
  {
    initials: "SA",
    name: "Sadia",
    role: "UI/UX & Product Architect",
    focus: "Information architecture, design tokens, interaction states, Figma systems",
    color: "#4F46E5",
  },
];

export default function Team() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="team" className="bg-[#0A0D14] py-28 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            Engineering Team
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            A small team with serious craft.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            We are a tight-knit developer team based in Dhaka, building real software for professors, campus organizations, and scaling businesses.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-[#111622] border border-white/10 rounded-xl p-6 hover:border-blue-500/40 hover:bg-[#151C2C] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Avatar Badge */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-sm text-white mb-5 shadow-md"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </div>
                <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors">
                  {m.name}
                </h4>
                <p className="text-xs font-mono text-blue-400 font-medium mb-4">
                  {m.role}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {m.focus}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Dhaka, BD</span>
                <span className="text-slate-400 group-hover:text-white transition-colors">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
