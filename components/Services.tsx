"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Services() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="services" className="bg-[#0A0D14] py-28 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            Capabilities &amp; Architecture
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Engineering services, structured for scale.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl font-normal">
            We don&rsquo;t deliver static wireframes or isolated scripts. Every project is shipped as an operational, tested system.
          </p>
        </div>

        {/* Bento Grid Layout (Asymmetric, Human-Crafted) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Large Featured — Custom Software (Spans 2 columns on lg) */}
          <div className="bento-card lg:col-span-2 flex flex-col justify-between group">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">
                  01 / Flagship Engineering
                </span>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded">
                  Full-Stack Architecture
                </span>
              </div>
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                Custom Web Applications &amp; Internal Tools
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                Bespoke software engineered to replace manual spreadsheets and fragmented SaaS stacks. Built with Next.js 16, TypeScript, distributed edge databases, and strict zero-trust authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-slate-300">
                <span className="bg-[#0E131F] border border-white/10 px-2.5 py-1 rounded">Next.js 16</span>
                <span className="bg-[#0E131F] border border-white/10 px-2.5 py-1 rounded">TypeScript</span>
                <span className="bg-[#0E131F] border border-white/10 px-2.5 py-1 rounded">Turso libSQL</span>
                <span className="bg-[#0E131F] border border-white/10 px-2.5 py-1 rounded">PostgreSQL</span>
                <span className="bg-[#0E131F] border border-white/10 px-2.5 py-1 rounded">Docker</span>
              </div>
            </div>

            {/* Architecture Preview Image */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full bg-slate-900 border-t border-white/10 overflow-hidden">
              <Image
                src="/services/custom-software.jpg"
                alt="Custom Software Architecture"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Card 2: Featured — Agentic AI Systems */}
          <div className="bento-card flex flex-col justify-between group">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                  02 / Autonomous Systems
                </span>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded">
                  Multi-Agent
                </span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 group-hover:text-sky-300 transition-colors">
                Agentic AI Pipelines &amp; Autonomous Copilots
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Purpose-built AI agents with structured tool-calling, document ingestion, and validation safeguards that automate real workflows without hallucinations.
              </p>
              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs text-slate-300">
                <span className="bg-[#0E131F] border border-white/10 px-2 py-1 rounded">Claude API</span>
                <span className="bg-[#0E131F] border border-white/10 px-2 py-1 rounded">LangChain</span>
                <span className="bg-[#0E131F] border border-white/10 px-2 py-1 rounded">MCP Protocols</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full bg-slate-900 border-t border-white/10 overflow-hidden">
              <Image
                src="/services/agentic-ai.jpg"
                alt="Agentic AI Node Pipeline"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Card 3: Mobile Applications */}
          <div className="bento-card flex flex-col justify-between group">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">
                  03 / Cross-Platform
                </span>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded">
                  iOS &middot; Android
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                Mobile Applications
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Native-feeling cross-platform applications built with React Native and Expo, featuring offline synchronization and biometric auth.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-xs text-slate-300">
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">React Native</span>
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">Expo EAS</span>
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">Supabase</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full bg-slate-900 border-t border-white/10 overflow-hidden">
              <Image
                src="/services/mobile-apps.jpg"
                alt="Mobile Application UI"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Card 4: Research & Faculty Portals */}
          <div className="bento-card flex flex-col justify-between group">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">
                  04 / Academic &amp; Research
                </span>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded">
                  Data Portals
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                Research &amp; Data Tools
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Custom collection portals, longitudinal cohort analyzers, and automated CSV/JSON pipelines for academic professors and labs.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-xs text-slate-300">
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">Python</span>
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">Turso Edge</span>
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">Data Analytics</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full bg-slate-900 border-t border-white/10 overflow-hidden">
              <Image
                src="/services/research-tools.jpg"
                alt="Research Analytics Dashboard"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Card 5: Automation & Integrations */}
          <div className="bento-card flex flex-col justify-between group">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">
                  05 / Operational Glue
                </span>
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded">
                  Integrations
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                Automation &amp; Webhooks
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                End-to-end webhook pipelines, automated client alerts, billing webhooks, and synchronization across external services.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5 font-mono text-xs text-slate-300">
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">REST APIs</span>
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">Webhooks</span>
                <span className="bg-[#0E131F] border border-white/10 px-2 py-0.5 rounded">Stripe / n8n</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full bg-slate-900 border-t border-white/10 overflow-hidden">
              <Image
                src="/services/automation.jpg"
                alt="Automation Pipeline Diagram"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
