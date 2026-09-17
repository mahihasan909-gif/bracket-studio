"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#0A0D14] pt-28 pb-20 px-6 border-b border-white/10 overflow-hidden">
      {/* Subtle ambient warm blue glow */}
      <div className="pointer-events-none absolute top-12 left-1/3 w-[600px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left Column: Human Value Proposition */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              Dhaka, Bangladesh &middot; Available for new projects
            </div>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-5">
              Real software, built by{" "}
              <span className="text-blue-400">real developers</span> who understand your needs.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-[52ch]">
              We build custom software, web platforms, and mobile apps for professors, campus organizations, and growing businesses. You talk directly with the engineers building your product&thinsp;—&thinsp;not account managers.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a href="#contact" className="btn-primary text-base">
                Start a conversation &rarr;
              </a>
              <a href="#work" className="btn-secondary text-base">
                See our recent work
              </a>
            </div>

            {/* Human Trust Points */}
            <div className="pt-6 border-t border-white/10 grid sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">Direct Access</p>
                <p>Work 1-on-1 with developers</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">Fast Delivery</p>
                <p>Shipped in weeks, not months</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-0.5">Real Support</p>
                <p>On-call help after launch</p>
              </div>
            </div>
          </div>

          {/* Right Column: Real Team Photography */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/team-hero.jpg"
                alt="Bracket Studio developers collaborating on a software project"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Human Studio Badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-[#111622]/95 backdrop-blur-md border border-white/15 p-4 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500 shrink-0" />
                <div>
                  <p className="text-white font-semibold text-xs">Bracket Studio</p>
                  <p className="text-slate-400 text-[11px]">Collaborative engineering team in Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
