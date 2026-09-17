"use client";

import { useInView } from "@/hooks/useInView";

const metrics = [
  {
    value: "< 3 Weeks",
    label: "Pilot Delivery Speed",
    detail: "From initial technical spec to working staging deployment.",
  },
  {
    value: "32ms",
    label: "Edge Response Latency",
    detail: "Zero cold-starts using distributed libSQL architecture.",
  },
  {
    value: "100%",
    label: "Engineer Direct Access",
    detail: "Clear communication directly with core systems builders.",
  },
  {
    value: "99.98%",
    label: "Verified System Uptime",
    detail: "Production monitoring with automated error boundaries.",
  },
];

export default function Stats() {
  const { ref, inView } = useInView();

  return (
    <section className="border-y border-white/5 bg-[#0D111A] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-white mb-1.5 tracking-tight">
                {m.value}
              </div>
              <div className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider mb-2">
                {m.label}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                {m.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
