"use client";

import { useInView } from "@/hooks/useInView";
import { useEffect, useState, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView({ once: true });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1500;
    const steps = 60;
    const step = to / steps;
    let cur = 0;
    const interval = setInterval(() => {
      cur += step;
      if (cur >= to) { setCount(to); clearInterval(interval); }
      else setCount(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, to]);

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 5,  suffix: "+",  label: "Projects delivered" },
  { value: 3,  suffix: "x",  label: "Faster than agencies" },
  { value: 0,  suffix: "$",  label: "Hidden fees" },
  { value: 24, suffix: "/7", label: "Support availability" },
];

export default function Stats() {
  const { ref, inView } = useInView();

  return (
    <section className="border-y border-[var(--border)] bg-[var(--ink)]/80 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              ref={i === 0 ? ref as React.RefObject<HTMLDivElement> : undefined}
              className={`text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display font-black text-5xl text-[var(--paper)] mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-[var(--muted)] text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
