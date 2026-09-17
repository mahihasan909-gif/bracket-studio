"use client";

import { useInView } from "@/hooks/useInView";

const services = [
  {
    bracket: "[01]",
    title: "Custom Software",
    desc: "Bespoke web apps built to your exact requirements — from internal tools to full SaaS products.",
    tech: ["Next.js", "PostgreSQL", "APIs"],
  },
  {
    bracket: "[02]",
    title: "Websites & Landing Pages",
    desc: "Fast, beautiful marketing sites and landing pages that convert visitors into customers.",
    tech: ["Next.js", "Tailwind", "CMS"],
  },
  {
    bracket: "[03]",
    title: "Agentic AI Systems",
    desc: "LLM-powered agents and automation pipelines that work autonomously on your behalf.",
    tech: ["Claude API", "LangChain", "MCP"],
  },
  {
    bracket: "[04]",
    title: "Mobile Applications",
    desc: "Cross-platform iOS and Android apps with native-feeling performance.",
    tech: ["React Native", "Expo", "Supabase"],
  },
  {
    bracket: "[05]",
    title: "Research & Data Tools",
    desc: "Custom dashboards, data pipelines, and analysis tools for academic and business research.",
    tech: ["Python", "SQLite", "Turso"],
  },
  {
    bracket: "[06]",
    title: "Automation & Integrations",
    desc: "Connect your existing tools, automate repetitive workflows, save hours every week.",
    tech: ["Webhooks", "REST APIs", "n8n"],
  },
];

function ServiceCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glow-card bg-[var(--ink)] p-7 group cursor-default transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-[var(--blue)] tracking-widest">{s.bracket}</span>
        <span className="text-[var(--border)] font-mono text-lg group-hover:text-[var(--blue)] transition-colors duration-300">
          →
        </span>
      </div>
      <h3 className="font-display font-bold text-[var(--paper)] text-xl mb-3 group-hover:text-[var(--blue-light)] transition-colors duration-300">
        {s.title}
      </h3>
      <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">{s.desc}</p>
      <div className="flex flex-wrap gap-2">
        {s.tech.map((t) => (
          <span
            key={t}
            className="text-xs border border-[var(--border)] text-[var(--muted)] px-2 py-0.5 group-hover:border-[var(--blue)] group-hover:text-[var(--blue-light)] transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="bg-[var(--ink)] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[var(--blue)] font-mono text-sm mb-3 tracking-widest">[ WHAT WE BUILD ]</p>
          <h2 className="font-display font-bold text-[var(--paper)]">
            End-to-end solutions,
            <br />
            <span className="gradient-text">shipped and running.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
