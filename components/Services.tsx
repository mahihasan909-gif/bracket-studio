"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    title: "Custom Software & Internal Tools",
    subtitle: "Built to fit your exact business process",
    desc: "We build tailored web applications and management systems that replace messy spreadsheets, automate repetitive tasks, and keep your business data organized in one secure place.",
    image: "/services/custom-software.jpg",
    deliverables: ["Custom admin dashboards", "Role-based access & permissions", "Secure database storage"],
  },
  {
    title: "Websites & Web Platforms",
    subtitle: "Modern, fast, and designed to convert",
    desc: "From company websites to interactive portals, we design and code clean, responsive web experiences that look sharp on any phone or desktop and load instantly.",
    image: "/services/websites.jpg",
    deliverables: ["Mobile-first responsive design", "Search engine optimization (SEO)", "Fast global performance"],
  },
  {
    title: "Agentic AI & Smart Automation",
    subtitle: "Pragmatic AI that solves real work",
    desc: "We help organizations integrate AI models into their actual day-to-day operations — like automated document processing, customer inquiry helpers, and intelligent research assistants.",
    image: "/services/agentic-ai.jpg",
    deliverables: ["Automated document extraction", "Custom company chatbots", "Intelligent workflow routing"],
  },
  {
    title: "Mobile Applications",
    subtitle: "iOS and Android apps from one codebase",
    desc: "We design and build mobile apps that your customers or employees will enjoy using, complete with smooth animations, push notifications, and offline data sync.",
    image: "/services/mobile-apps.jpg",
    deliverables: ["Cross-platform iOS & Android", "Push notification integration", "Smooth native gestures"],
  },
  {
    title: "Research & Academic Data Tools",
    subtitle: "Specialized portals for university faculty",
    desc: "Having built systems for campus labs and university professors, we understand academic research needs: clean submission portals, participant tracking, and one-click data exports.",
    image: "/services/research-tools.jpg",
    deliverables: ["Longitudinal study tracking", "Clean CSV / Excel data export", "Student submission review"],
  },
  {
    title: "Workflow Automation & Integrations",
    subtitle: "Connecting your existing tools together",
    desc: "We connect the software you already use — like payment processors, email providers, Google Workspace, and accounting systems — so data moves automatically without manual copying.",
    image: "/services/automation.jpg",
    deliverables: ["Stripe / bKash payment flows", "Automated email notifications", "Zero manual data re-entry"],
  },
];

export default function Services() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="services" className="bg-[#0A0D14] py-28 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            What We Build
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Services designed around your actual outcomes.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Whether you need a full software system from scratch or an upgrade to existing workflows, we handle the design, code, and deployment from start to finish.
          </p>
        </div>

        {/* Services Cards with Real Photos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#111622] rounded-2xl border border-white/10 overflow-hidden shadow-lg flex flex-col justify-between hover:border-blue-500/40 hover:bg-[#141B2A] transition-all duration-300"
            >
              <div>
                {/* Real Photo */}
                <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="text-xs font-semibold text-blue-400 mb-1">
                    {s.subtitle}
                  </p>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {s.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-2 border-t border-white/10 pt-5 text-xs text-slate-300">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="text-blue-400 font-bold">&check;</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-blue-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  Discuss this service &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
