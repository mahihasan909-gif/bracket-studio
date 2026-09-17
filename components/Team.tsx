"use client";

import { useInView } from "@/hooks/useInView";

// Team member profiles
const members = [
  { initials: "MH", name: "Mahi Hasan", role: "Founder & Lead Architect", skill: "Full-stack systems, Next.js, Cloud architecture", color: "#2563EB" },
  { initials: "RA", name: "Rafid", role: "Software Engineer", skill: "System design, distributed APIs, databases", color: "#3B82F6" },
  { initials: "NI", name: "Nabil", role: "Frontend & Mobile", skill: "React Native, UI animation, state management", color: "#0EA5E9" },
  { initials: "SA", name: "Sadia", role: "Product & UI/UX", skill: "Design systems, user flows, Figma prototyping", color: "#6366F1" },
];

export default function Team() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="team" className="bg-white py-24 px-6 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            [ THE TEAM ]
          </div>
          <h2 className="font-display font-bold text-slate-900 text-3xl md:text-5xl leading-tight">
            Small focused team,
            <br />
            <span className="gradient-text">serious technical craft.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => {
            const { ref, inView } = useInView({ threshold: 0.1 });
            return (
              <div
                key={m.name}
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`bg-slate-50 border border-slate-200/80 rounded-2xl p-6 group hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg text-white mb-5 shadow-xs transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </div>
                <p className="font-display font-bold text-slate-900 text-lg mb-0.5 group-hover:text-blue-600 transition-colors">
                  {m.name}
                </p>
                <p className="text-xs font-mono text-blue-600 font-medium mb-3">
                  {m.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {m.skill}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
