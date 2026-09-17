export default function WhyUs() {
  return (
    <section className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-display font-bold text-[var(--paper)] mb-8 text-[1.9375rem]">
          <span className="text-[var(--red)] mr-1">{"{"}</span>
          Why Bracket Studio
          <span className="text-[var(--red)] ml-1">{"}"}</span>
        </h2>

        <blockquote className="border-l-2 border-[var(--red)] pl-6 max-w-[65ch]">
          <p className="text-[1.125rem] leading-relaxed text-[var(--paper)]/90 font-body">
            <strong className="text-[var(--paper)] font-semibold">
              Tools like Claude can write code. We turn that into a product.
            </strong>
            {" "}Deploying it, securing it, connecting it to a database or payment
            system, and keeping it running after launch is the part that
            doesn&rsquo;t show up in a chat window. You get a finished system
            and someone to call when it breaks — not a code snippet to debug
            yourself.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
