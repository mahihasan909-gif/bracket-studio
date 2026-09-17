// TODO: Replace with real team members, names, and skills.
// To use photos: add images to /public/team/ and replace the <InitialsAvatar>
// with <Image src="/team/name.jpg" ... />

const members = [
  { initials: "RA", name: "Rafid", skill: "Full-stack engineering, system design" },
  { initials: "NI", name: "Nabil", skill: "Frontend & mobile (React Native)" },
  { initials: "SA", name: "Sadia", skill: "UI/UX design & Figma prototyping" },
  { initials: "TH", name: "Tahsin", skill: "Backend, databases & deployment" },
];

function InitialsAvatar({ initials }: { initials: string }) {
  return (
    <div className="w-14 h-14 rounded-full bg-[var(--blue)] text-[var(--paper)] flex items-center justify-center font-display font-bold text-lg select-none">
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section className="border-t border-[var(--muted)]/25 max-w-5xl mx-auto px-6 py-20">
      <h2 className="font-display font-bold text-[var(--ink)] mb-12">
        <span className="text-[var(--blue)] mr-1">{"{"}</span>
        The team
        <span className="text-[var(--blue)] ml-1">{"}"}</span>
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((m) => (
          <div key={m.name} className="flex flex-col gap-3">
            <InitialsAvatar initials={m.initials} />
            <div>
              <p className="font-semibold text-[var(--ink)]">{m.name}</p>
              <p className="text-sm text-[var(--muted)] leading-snug">{m.skill}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
