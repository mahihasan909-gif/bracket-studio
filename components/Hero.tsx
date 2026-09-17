"use client";

import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"arch" | "code" | "agent">("arch");

  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#0A0D14] pt-24 pb-16 overflow-hidden border-b border-white/5">
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-500/8 blur-[120px] rounded-full" />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left: Value Proposition */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-800/40 text-blue-300 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              Bracket Studio &middot; Dhaka, Bangladesh
            </div>

            {/* Headline */}
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] mb-5">
              We engineer and ship{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">
                production software
              </span>{" "}
              for real-world operations.
            </h1>

            {/* Subhead (under 20 words) */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-[50ch] mb-8 font-normal">
              Bespoke web applications, autonomous agentic AI pipelines, and mobile apps built by a dedicated engineering team.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#contact" className="btn-primary">
                Start a project &rarr;
              </a>
              <a href="#work" className="btn-secondary">
                View case studies
              </a>
            </div>

            {/* Technical Highlights */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-y-2 gap-x-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">01</span> Next.js 16 &middot; TypeScript
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">02</span> Distributed Edge Databases
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">03</span> Autonomous Tool Calling
              </div>
            </div>
          </div>

          {/* Right: Live Interactive Technical Console */}
          <div className="bg-[#111622] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            {/* Console Header Bar */}
            <div className="bg-[#0D111A] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-400">bracket-engine v2.4</span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-black/30 p-1 rounded-md">
                <button
                  type="button"
                  onClick={() => setActiveTab("arch")}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                    activeTab === "arch"
                      ? "bg-blue-600 text-white font-medium"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  system
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("agent")}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                    activeTab === "agent"
                      ? "bg-blue-600 text-white font-medium"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  agentic
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                    activeTab === "code"
                      ? "bg-blue-600 text-white font-medium"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  schema
                </button>
              </div>
            </div>

            {/* Console Body */}
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed min-h-[300px]">
              {activeTab === "arch" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-slate-400">Core Runtime:</span>
                    <span className="text-emerald-400 font-semibold">Next.js 16 Turbopack (Active)</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-slate-400">Database Engine:</span>
                    <span className="text-sky-300">Turso libSQL / Edge Distributed</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-slate-400">Avg Response Latency:</span>
                    <span className="text-blue-300">32ms global edge</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-slate-400">Production Auth:</span>
                    <span className="text-slate-200">Zero-Trust HttpOnly Sessions</span>
                  </div>
                  <div className="pt-2 flex items-center gap-2 text-slate-400 text-xs">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Monitoring 6 production services across Dhaka and global deployments</span>
                  </div>
                </div>
              )}

              {activeTab === "agent" && (
                <div className="space-y-3 text-xs">
                  <div className="text-slate-400 flex items-center gap-2">
                    <span className="text-blue-400">&rarr;</span>
                    <span>Multi-Agent Task Orchestrator</span>
                  </div>
                  <div className="bg-[#0A0D14] p-3 rounded border border-white/5 text-slate-300">
                    <span className="text-sky-400">agent.plan</span>({`{\n  task: "Parse unverified student records",\n  target: "libsql_db",\n  validation: "zod_strict_schema"\n}`})
                  </div>
                  <div className="text-emerald-400 flex items-center gap-2">
                    <span>✓</span>
                    <span>Tool execution completed in 184ms with 0 token waste</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Autonomous tool-calling pipeline with human confirmation guards.
                  </div>
                </div>
              )}

              {activeTab === "code" && (
                <div className="text-slate-300 text-xs overflow-x-auto space-y-1">
                  <p><span className="text-purple-400">export async function</span> <span className="text-blue-400">fetchSubmissions</span>() &#123;</p>
                  <p className="pl-4 text-slate-400">// Zero cold-start distributed edge query</p>
                  <p className="pl-4"><span className="text-purple-400">const</span> client = <span className="text-sky-300">getDb</span>();</p>
                  <p className="pl-4"><span className="text-purple-400">return await</span> client.<span className="text-blue-400">execute</span>(&#123;</p>
                  <p className="pl-8"><span className="text-emerald-300">sql</span>: <span className="text-amber-300">&quot;SELECT * FROM records ORDER BY created_at DESC&quot;</span>,</p>
                  <p className="pl-8"><span className="text-emerald-300">args</span>: []</p>
                  <p className="pl-4">&#125;);</p>
                  <p>&#125;</p>
                </div>
              )}
            </div>

            {/* Console Footer */}
            <div className="bg-[#0D111A] px-4 py-2.5 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>status: operational</span>
              <span className="text-blue-400">branch: main (verified)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
