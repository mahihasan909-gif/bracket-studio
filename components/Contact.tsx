"use client";

import { useState, FormEvent } from "react";
import { useInView } from "@/hooks/useInView";

const projectTypes = [
  "Custom Web Application / Internal Tool",
  "Agentic AI Pipeline / Copilot",
  "Mobile Application (iOS / Android)",
  "Research & Faculty Data Portal",
  "API Integration & Webhook Automation",
  "Other Engineering Project",
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
      setErrorMsg("Please complete all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setStatus("error");
      setErrorMsg("Please provide a valid email address.");
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
        throw new Error(json.error ?? "Failed to submit message.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const fieldClass =
    "w-full bg-[#0D111A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all text-sm font-sans shadow-inner";

  return (
    <section id="contact" className="relative bg-[#0A0D14] py-28 px-6 overflow-hidden">
      {/* Subtle Ambient Radial Lighting */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/40 text-blue-300 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase mb-4">
              Project Initiation
            </div>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 leading-tight">
              Start a project discussion.
            </h2>
            <p className="text-slate-400 max-w-[44ch] leading-relaxed mb-8 text-base">
              Even a rough problem statement or a one-page spec is enough. We review every submission and respond with a technical assessment within 24 hours.
            </p>

            <div className="space-y-4 text-sm text-slate-300 font-sans">
              <div className="bg-[#111622] border border-white/10 rounded-xl p-4 max-w-md flex items-center gap-4">
                <span className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-800/50 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
                  @
                </span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">DIRECT CONTACT</p>
                  <a
                    href="mailto:hello@bracketstudio.dev"
                    className="text-white font-semibold hover:text-blue-400 transition-colors"
                  >
                    hello@bracketstudio.dev
                  </a>
                </div>
              </div>

              <div className="bg-[#111622] border border-white/10 rounded-xl p-4 max-w-md flex items-center gap-4">
                <span className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs">
                  HQ
                </span>
                <div>
                  <p className="text-xs text-slate-500 font-mono">LOCATION</p>
                  <p className="text-white font-semibold">Dhaka, Bangladesh &middot; Serving Global Clients</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div
            className={`bg-[#111622] border border-white/10 rounded-2xl p-8 shadow-2xl transition-all duration-700 delay-150 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-white text-xl font-bold mb-1">
              Direct Technical Brief
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Our core engineers read this directly. No middle managers.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono uppercase">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Alex Rahman"
                    required
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono uppercase">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="alex@organization.com"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono uppercase">
                  Project Domain (Optional)
                </label>
                <select name="project_type" className={fieldClass}>
                  <option value="">Select a domain</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-[#111622] text-white">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono uppercase">
                  Project Requirements *
                </label>
                <textarea
                  name="message"
                  placeholder="Describe what needs to be built, any technical constraints, timeline or existing stack..."
                  required
                  rows={4}
                  className={fieldClass + " resize-none"}
                />
              </div>

              {status === "error" && (
                <div className="bg-rose-950/60 border border-rose-800/60 text-rose-300 px-4 py-2.5 rounded-lg text-xs font-mono">
                  {errorMsg}
                </div>
              )}
              {status === "success" && (
                <div className="bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 px-4 py-3 rounded-lg text-xs font-mono flex items-center gap-2">
                  <span>✓</span>
                  <span>Brief received. An engineer will follow up via email within 24 hours.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-primary w-full py-3.5 text-sm shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Submitting Brief..." : "Send Project Brief →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
