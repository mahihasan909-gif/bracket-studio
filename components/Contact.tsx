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
    "w-full bg-[#0E131F] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm font-body shadow-inner";

  return (
    <section id="contact" className="relative bg-[#0A0D14] py-28 px-6 overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/10 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              [ GET IN TOUCH ]
            </div>
            <h2 className="font-display font-bold text-[#F8FAFC] text-3xl md:text-5xl leading-tight mb-6">
              Let&rsquo;s build
              <br />
              <span className="gradient-headline">your next project.</span>
            </h2>
            <p className="text-slate-400 max-w-[42ch] leading-relaxed mb-8 text-base md:text-lg font-body">
              Tell us what you want to build&thinsp;—&thinsp;even a rough idea or a one-page spec is enough to start. We review every submission and reply directly within 24 hours.
            </p>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3 bg-[#111622] border border-white/10 rounded-xl p-4 shadow-sm max-w-md">
                <span className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800/50 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                  @
                </span>
                <div>
                  <p className="text-xs text-slate-400 font-mono">DIRECT INQUIRY</p>
                  <a
                    href="mailto:hello@bracketstudio.dev"
                    className="text-[#F8FAFC] font-semibold hover:text-blue-400 transition-colors"
                  >
                    hello@bracketstudio.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#111622] border border-white/10 rounded-xl p-4 shadow-sm max-w-md">
                <span className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                  BD
                </span>
                <div>
                  <p className="text-xs text-slate-400 font-mono">LOCATION</p>
                  <p className="text-[#F8FAFC] font-semibold">Dhaka, Bangladesh &middot; Serving Global Teams</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div
            className={`bg-[#111622] border border-white/10 rounded-2xl p-8 shadow-xl shadow-black/40 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="font-display font-bold text-[#F8FAFC] text-xl mb-1">
              Start a project discussion
            </h3>
            <p className="text-slate-400 text-sm mb-6 font-body">
              Submit your project details below for a prompt architectural review.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono uppercase">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="e.g. Alex Rahman"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono uppercase">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono uppercase">
                  Project Type (Optional)
                </label>
                <select name="project_type" className={fieldClass}>
                  <option value="">Select project type</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#111622] text-[#F8FAFC]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 font-mono uppercase">
                  Project Scope &amp; Details *
                </label>
                <textarea
                  name="message"
                  placeholder="Describe your technical requirements, goals, timeline or budget..."
                  required
                  rows={4}
                  className={fieldClass + " resize-none"}
                />
              </div>

              {status === "error" && (
                <div className="bg-rose-950/60 border border-rose-800/60 text-rose-300 px-4 py-2.5 rounded-lg text-sm">
                  {errorMsg}
                </div>
              )}
              {status === "success" && (
                <div className="bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 px-4 py-3 rounded-lg text-sm font-semibold flex items-center gap-2">
                  <span>✓</span>
                  <span>Message sent successfully! We will review and reply to your email.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-primary w-full justify-center py-3.5 text-base shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
