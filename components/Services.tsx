"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    bracket: "[01]",
    title: "Custom Software",
    desc: "Bespoke full-stack web applications and internal tools engineered to your exact operational workflows and scale.",
    image: "/services/custom-software.jpg",
    tech: ["Next.js", "PostgreSQL", "Node.js", "REST APIs"],
  },
  {
    bracket: "[02]",
    title: "Websites & Landing Pages",
    desc: "High-performance, beautifully designed marketing sites and digital platforms optimized to convert visitors into clients.",
    image: "/services/websites.jpg",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "SEO"],
  },
  {
    bracket: "[03]",
    title: "Agentic AI Systems",
    desc: "Autonomous LLM-powered workflows, multi-agent pipelines, and intelligent copilot tools built for production tasks.",
    image: "/services/agentic-ai.jpg",
    tech: ["Claude API", "OpenAI", "LangChain", "MCP Tools"],
  },
  {
    bracket: "[04]",
    title: "Mobile Applications",
    desc: "Cross-platform iOS and Android applications with native-grade performance, fluid animations, and offline support.",
    image: "/services/mobile-apps.jpg",
    tech: ["React Native", "Expo", "Supabase", "Mobile UI"],
  },
  {
    bracket: "[05]",
    title: "Research & Data Tools",
    desc: "Scientific portals, live analytics dashboards, and structured database tools built specifically for researchers and professors.",
    image: "/services/research-tools.jpg",
    tech: ["Python", "SQLite / Turso", "Charts", "Data Pipeline"],
  },
  {
    bracket: "[06]",
    title: "Automation & Integrations",
    desc: "Seamless webhook pipelines, automated notifications, payment flows, and synchronization between third-party SaaS tools.",
    image: "/services/automation.jpg",
    tech: ["Webhooks", "Stripe", "n8n", "Background Jobs"],
  },
];

function ServiceCard({ s, delay }: { s: typeof services[0]; delay: number }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`it-card overflow-hidden flex flex-col group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Topic Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-white/5">
        <Image
          src={s.image}
          alt={s.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle overlay for image clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Index badge */}
        <div className="absolute top-3 left-3 bg-[#0A0D14]/85 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-md text-xs font-mono font-bold text-blue-400 shadow-sm">
          {s.bracket}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <h3 className="font-display font-bold text-[#F8FAFC] text-xl group-hover:text-sky-300 transition-colors">
              {s.title}
            </h3>
            <span className="text-slate-500 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300 font-mono text-lg">
              &rarr;
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 font-body">
            {s.desc}
          </p>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
          {s.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-[#0E131F] border border-white/10 text-slate-300 px-2.5 py-1 rounded-md font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="bg-[#0A0D14] py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            [ WHAT WE BUILD ]
          </div>
          <h2 className="font-display font-bold text-[#F8FAFC] text-3xl md:text-5xl leading-tight">
            Comprehensive IT services,
            <br />
            <span className="gradient-headline">engineered with precision.</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base md:text-lg max-w-2xl font-body">
            From single-page web experiences to full agentic software suites and cloud databases, we cover every technical layer.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
