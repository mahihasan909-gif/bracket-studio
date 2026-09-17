"use client";

import { useInView } from "@/hooks/useInView";

// TODO: Replace with real team members and optionally add photo paths
const members = [
  { initials: "RA", name: "Rafid", skill: "Full-stack engineering & system design", color: "#2B4C7E" },
  { initials: "NI", name: "Nabil", skill: "Frontend & mobile (React Native)", color: "#3D5A80" },
  { initials: "SA", name: "Sadia", skill: "UI/UX design & Figma prototyping", color: "#293241" },
  { initials: "TH", name: "Tahsin", skill: "Backend, databases & deployment", color: "#1B2A3B" },
];

export default function Team() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="team" className="bg-[var(--ink)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-14 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[var(--blue)] font-mono text-sm mb-3 tracking-widest">[ THE TEAM ]</p>
          <h2 className="font-display font-bold text-[var(--paper)]">
            Small team,
            <span className="gradient-text"> serious craft.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {members.map((m, i) => {
            const { ref, inView } = useInView({ threshold: 0.1 });
            return (
              <div
                key={m.name}
                ref={ref as React.RefObject<HTMLDivElement>}
                className={`border border-[var(--border)] p-6 group hover:border-[var(--blue)]/50 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg text-[var(--paper)] mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: m.color }}
                >
                  {m.initials}
                </div>
                <p className="font-semibold text-[var(--paper)] mb-1 group-hover:text-[var(--blue-light)] transition-colors">
                  {m.name}
                </p>
                <p className="text-sm text-[var(--muted)] leading-snug">{m.skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
