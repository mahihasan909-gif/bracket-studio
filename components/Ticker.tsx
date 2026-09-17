const items = [
  "Custom Software",
  "Web Applications",
  "Agentic AI Systems",
  "Mobile Apps",
  "Research Tools",
  "Automation Pipelines",
  "Database Architecture",
  "API Development",
  "UI / UX Design",
  "Deployment & DevOps",
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-[var(--border)] bg-[var(--ink)] py-4 overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6 text-sm text-[var(--muted)] whitespace-nowrap shrink-0">
            <span className="text-[var(--blue)] font-mono">[</span>
            {item}
            <span className="text-[var(--blue)] font-mono">]</span>
          </span>
        ))}
      </div>
    </div>
  );
}
