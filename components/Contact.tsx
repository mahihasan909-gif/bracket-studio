"use client";

import { useState, FormEvent } from "react";

const projectTypes = [
  "Website / landing page",
  "Web application",
  "Mobile app",
  "Research / data tool",
  "Automation / integration",
  "Other / not sure yet",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      project_type: (form.elements.namedItem("project_type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    // Basic client-side validation
    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const fieldClass =
    "w-full border border-[var(--muted)]/50 bg-transparent px-4 py-3 text-[var(--ink)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--blue)] transition-colors";

  return (
    <section
      id="contact"
      className="border-t border-[var(--muted)]/25 max-w-5xl mx-auto px-6 py-20"
    >
      <div className="grid md:grid-cols-2 gap-12">
        {/* Label column */}
        <div>
          <h2 className="font-display font-bold text-[var(--ink)] mb-4">
            <span className="text-[var(--blue)] mr-1">{"{"}</span>
            Get in touch
            <span className="text-[var(--blue)] ml-1">{"}"}</span>
          </h2>
          <p className="text-[var(--muted)] max-w-[38ch]">
            Tell us about your project — even a rough idea is enough to start a
            conversation.
          </p>
        </div>

        {/* Form column */}
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your name *"
            required
            className={fieldClass}
          />
          <input
            name="email"
            type="email"
            placeholder="Email address *"
            required
            className={fieldClass}
          />
          <select name="project_type" className={fieldClass}>
            <option value="">Project type (optional)</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your project *"
            required
            rows={5}
            className={fieldClass + " resize-none"}
          />

          {status === "error" && (
            <p className="text-[var(--red)] text-sm">{errorMsg}</p>
          )}
          {status === "success" && (
            <p className="text-[var(--blue)] text-sm font-semibold">
              Message sent — we&rsquo;ll be in touch soon.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-[var(--blue)] text-[var(--paper)] font-semibold px-6 py-3 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
