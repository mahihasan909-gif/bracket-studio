"use client";

import { useState, FormEvent } from "react";
import { useInView } from "@/hooks/useInView";

const projectTypes = [
  "Custom Software",
  "Website / Landing Page",
  "Agentic AI System",
  "Mobile App",
  "Research / Data Tool",
  "Automation / Integration",
  "Other / Not sure yet",
];

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { ref, inView } = useInView({ threshold: 0.1 });

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

    if (!data.name || !data.email || !data.message) {
      setStatus("error"); setErrorMsg("Please fill in all required fields."); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus("error"); setErrorMsg("Please enter a valid email address."); return;
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
    "w-full bg-transparent border border-[var(--border)] px-4 py-3 text-[var(--paper)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--blue)] transition-colors duration-200 text-sm font-body";

  return (
    <section id="contact" className="relative bg-[var(--ink)] py-28 px-6 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--blue)] opacity-[0.05] blur-[100px]" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--blue)]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-[var(--blue)] font-mono text-sm mb-3 tracking-widest">[ GET IN TOUCH ]</p>
            <h2 className="font-display font-bold text-[var(--paper)] mb-6">
              Let&rsquo;s build
              <br />
              <span className="gradient-text">something real.</span>
            </h2>
            <p className="text-[var(--muted)] max-w-[38ch] leading-relaxed mb-8">
              Tell us about your project — even a rough idea is enough to start a conversation.
              We typically respond within 24 hours.
            </p>

            <div className="space-y-3 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-3">
                <span className="text-[var(--blue)] font-mono">[</span>
                <a href="mailto:hello@bracketstudio.dev" className="hover:text-[var(--paper)] transition-colors">
                  hello@bracketstudio.dev
                </a>
                <span className="text-[var(--blue)] font-mono">]</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--blue)] font-mono">[</span>
                <span>Based in Dhaka, Bangladesh</span>
                <span className="text-[var(--blue)] font-mono">]</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className={`space-y-4 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Your name *" required className={fieldClass} />
              <input name="email" type="email" placeholder="Email address *" required className={fieldClass} />
            </div>
            <select name="project_type" className={fieldClass}>
              <option value="">Project type (optional)</option>
              {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your project *"
              required
              rows={5}
              className={fieldClass + " resize-none"}
            />

            {status === "error" && <p className="text-[var(--red)] text-sm">{errorMsg}</p>}
            {status === "success" && (
              <p className="text-[var(--blue-light)] text-sm font-semibold">
                ✓ Message sent — we&rsquo;ll be in touch soon.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
