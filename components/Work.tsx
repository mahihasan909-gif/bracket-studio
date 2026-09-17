// TODO: Replace placeholder case study with your real project details.
// Structure: problem → what you built → result

const caseStudies = [
  {
    tag: "Pilot project",
    title: "Faculty research portal",
    problem:
      "A university professor needed a way to collect and review student submissions for a longitudinal study — the existing Google Form setup was creating hours of manual data wrangling each semester.",
    built:
      "A Next.js web app with a Turso-backed submission database, an admin dashboard for the professor, and CSV export. Built in three weeks.",
    result:
      "Submission review time cut from ~4 hours per batch to under 20 minutes. Now used across two courses.",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-[var(--muted)]/25 max-w-5xl mx-auto px-6 py-20">
      <h2 className="font-display font-bold text-[var(--ink)] mb-12">
        <span className="text-[var(--blue)] mr-1">{"{"}</span>
        Recent work
        <span className="text-[var(--blue)] ml-1">{"}"}</span>
      </h2>

      <div className="space-y-16">
        {caseStudies.map((cs) => (
          <article key={cs.title} className="grid md:grid-cols-[1fr_2fr] gap-8">
            {/* Left: meta */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                {cs.tag}
              </span>
              <h3 className="font-display font-bold text-[var(--ink)] mt-2">
                {cs.title}
              </h3>
            </div>

            {/* Right: case study body */}
            <div className="space-y-4 text-[var(--ink)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                  Problem
                </p>
                <p className="max-w-[60ch]">{cs.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                  What we built
                </p>
                <p className="max-w-[60ch]">{cs.built}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-1">
                  Result
                </p>
                <p className="max-w-[60ch] font-semibold">{cs.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
