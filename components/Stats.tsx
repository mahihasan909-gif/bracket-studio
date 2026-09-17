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
    const duration = 1400;
    const steps = 50;
    const step = to / steps;
    let cur = 0;
    const interval = setInterval(() => {
      cur += step;
      if (cur >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(cur));
      }
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
  { value: 5,  suffix: "+",  label: "Projects & pilots shipped" },
  { value: 3,  suffix: "x",  label: "Faster delivery than standard agencies" },
  { value: 100, suffix: "%", label: "Direct founder engineer communication" },
  { value: 24, suffix: "/7", label: "Ongoing system monitoring & support" },
];

export default function Stats() {
  const { ref, inView } = useInView();

  return (
    <section className="border-y border-slate-200/80 bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              ref={i === 0 ? (ref as React.RefObject<HTMLDivElement>) : undefined}
              className={`text-center transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="font-display font-black text-4xl md:text-5xl text-blue-600 mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-slate-600 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
