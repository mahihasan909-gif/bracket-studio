const items = [
  "Custom Software",
  "Web Applications",
  "Agentic AI Systems",
  "Mobile Apps",
  "Research & Data Tools",
  "Automation Pipelines",
  "Database Architecture",
  "API Development",
  "UI / UX Design",
  "DevOps & Deployment",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-slate-200/80 bg-white/70 backdrop-blur-xs py-3.5 overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 px-6 text-sm font-medium text-slate-600 whitespace-nowrap shrink-0">
            <span className="text-blue-600 font-mono font-semibold">[</span>
            {item}
            <span className="text-blue-600 font-mono font-semibold">]</span>
          </span>
        ))}
      </div>
    </div>
  );
}
