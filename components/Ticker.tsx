const items = [
  "Custom Software",
  "Web Applications",
  "Agentic AI Systems",
  "Mobile Apps",
  "Research & Data Tools",
  "Automation Pipelines",
  "Database Architecture",
  "API Development",
  "UI / UX Systems",
  "DevOps & Security",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-white/5 bg-[#0E131F]/90 py-3.5 overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 px-6 text-xs font-mono font-medium text-slate-400 whitespace-nowrap shrink-0"
          >
            <span className="text-blue-500 font-bold">[</span>
            <span className="text-slate-200">{item}</span>
            <span className="text-blue-500 font-bold">]</span>
          </span>
        ))}
      </div>
    </div>
  );
}
