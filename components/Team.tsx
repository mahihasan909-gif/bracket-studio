"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const members = [
  {
    name: "Mahi Hasan",
    role: "Lead Systems Engineer & Founder",
    bio: "Passionate about building reliable web systems, data architectures, and practical AI integrations for local businesses and organizations.",
    image: "/team/mahi.jpg",
  },
  {
    name: "Rafid",
    role: "Backend & Database Engineer",
    bio: "Focuses on high-availability databases, server configurations, API security, and making sure systems never drop client data.",
    image: "/team/rafid.jpg",
  },
  {
    name: "Nabil",
    role: "Mobile & Frontend Developer",
    bio: "Specializes in smooth, responsive mobile apps and modern web interfaces that feel intuitive and fast on every screen size.",
    image: "/team/nabil.jpg",
  },
  {
    name: "Sadia",
    role: "UI/UX & Product Design",
    bio: "Translates complex business workflows into clear, clean user experiences so your customers and team can use software effortlessly.",
    image: "/team/sadia.jpg",
  },
];

export default function Team() {
  const { ref: headRef, inView: headIn } = useInView();

  return (
    <section id="team" className="bg-[#0A0D14] py-28 px-6 border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Meet The Developers
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Real people you can talk to directly.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            We are a student and alumni dev team based right here in Dhaka. When you work with Bracket Studio, you collaborate directly with the creators of your software.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="bg-[#111622] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-blue-500/40 hover:bg-[#141B2A] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Real Portrait Photo */}
                <div className="relative aspect-square w-full bg-slate-800 overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111622] via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {m.name}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 mb-3">
                    {m.role}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>Based in Dhaka</span>
                <span className="text-blue-400 font-semibold">Active &bull;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
