const services = [
  "Websites & landing pages",
  "Web applications",
  "Mobile apps",
  "Research & data tools",
  "Automation & integrations",
];

export default function Services() {
  return (
    <section className="border-t border-[var(--muted)]/25 max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Label */}
        <div>
          <h2 className="font-display font-bold text-[var(--ink)] mb-2">
            <span className="text-[var(--blue)] mr-1">{"{"}</span>
            What we build
            <span className="text-[var(--blue)] ml-1">{"}"}</span>
          </h2>
          <p className="text-[var(--muted)] max-w-[40ch]">
            We take projects from spec to shipped — no half-measures.
          </p>
        </div>

        {/* List */}
        <ul className="space-y-3 pt-1">
          {services.map((s) => (
            <li key={s} className="flex items-baseline gap-3 group">
              <span className="text-[var(--blue)] font-mono text-sm shrink-0 group-hover:text-[var(--ink)] transition-colors">
                [
              </span>
              <span className="text-[var(--ink)] text-lg group-hover:text-[var(--blue)] transition-colors">
                {s}
              </span>
              <span className="text-[var(--blue)] font-mono text-sm shrink-0 group-hover:text-[var(--ink)] transition-colors">
                ]
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
