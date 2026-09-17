"use client";

import { useInView } from "@/hooks/useInView";

const members = [
  {
    initials: "MH",
    name: "Mahi Hasan",
    role: "Founder & Lead Architect",
    skill: "Full-stack systems, Next.js, Cloud architecture",
    color: "#2563EB",
  },
  {
    initials: "RA",
    name: "Rafid",
    role: "Systems Engineer",
    skill: "Distributed APIs, database optimization, backend scaling",
    color: "#0284C7",
  },
  {
    initials: "NI",
    name: "Nabil",
    role: "Frontend & Mobile Lead",
    skill: "React Native, cross-platform apps, responsive UI",
    color: "#0D9488",
  },
  {
    initials: "SA",
    name: "Sadia",
    role: "Product & UI/UX",
    skill: "Design systems, user flows, Figma prototyping",
    color: "#4F46E5",
  },
];

export default function Team() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="team" className="bg-[#0A0D14] py-24 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            [ THE TEAM ]
          </div>
          <h2 className="font-display font-bold text-[#F8FAFC] text-3xl md:text-5xl leading-tight">
            Small focused team,
            <br />
            <span className="gradient-headline">serious technical craft.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => {
            const { ref, inView } = useInView({ threshold: 0.1 });
            return (
              <div
                key={m.name}
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`bg-[#111622] border border-white/10 rounded-2xl p-6 group hover:border-blue-500/50 hover:bg-[#151C2C] transition-all duration-500 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg text-white mb-5 shadow-md transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: m.color }}
                >
                  {m.initials}
                </div>
                <p className="font-display font-bold text-[#F8FAFC] text-lg mb-0.5 group-hover:text-sky-300 transition-colors">
                  {m.name}
                </p>
                <p className="text-xs font-mono text-sky-400 font-medium mb-3">
                  {m.role}
                </p>
                <p className="text-sm text-slate-400 leading-relaxed font-body">
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
