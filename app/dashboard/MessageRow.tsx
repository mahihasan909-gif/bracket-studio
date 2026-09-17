"use client";

import { useState } from "react";
import { Message } from "./page";

export default function MessageRow({ msg }: { msg: Message }) {
  const [expanded, setExpanded] = useState(false);
  const [replied, setReplied] = useState(!!msg.replied);
  const [saving, setSaving] = useState(false);

  async function toggleReplied() {
    setSaving(true);
    const next = !replied;
    const res = await fetch("/api/dashboard/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: msg.id, replied: next }),
    });
    if (res.ok) setReplied(next);
    setSaving(false);
  }

  const date = new Date(msg.created_at + "Z").toLocaleString("en-US", {
    month: "short", day: "numeric", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  return (
    <article
      className={`py-5 ${replied ? "opacity-50" : ""}`}
    >
      {/* Summary row */}
      <div className="flex items-start gap-4">
        <button
          onClick={toggleReplied}
          disabled={saving}
          title={replied ? "Mark as unreplied" : "Mark as replied"}
          className={`mt-0.5 w-5 h-5 shrink-0 border-2 flex items-center justify-center transition-colors ${
            replied
              ? "border-[var(--blue)] bg-[var(--blue)]"
              : "border-[var(--muted)]"
          }`}
        >
          {replied && (
            <svg className="w-3 h-3 text-[var(--paper)]" viewBox="0 0 12 12" fill="none">
              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex-1 text-left"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
            <span className="font-semibold text-[var(--ink)]">{msg.name}</span>
            <span className="text-[var(--muted)]">{msg.email}</span>
            {msg.project_type && (
              <span className="text-[var(--blue)] font-mono text-xs self-center">[{msg.project_type}]</span>
            )}
            <span className="text-[var(--muted)] text-xs self-center ml-auto">{date}</span>
          </div>
          <p className="text-[var(--ink)]/70 text-sm mt-1 line-clamp-2">
            {msg.message}
          </p>
        </button>
      </div>

      {/* Expanded message */}
      {expanded && (
        <div className="mt-4 ml-9 p-4 bg-[var(--ink)]/5 text-[var(--ink)] text-sm whitespace-pre-wrap leading-relaxed max-w-2xl">
          {msg.message}
          <div className="mt-4 pt-4 border-t border-[var(--muted)]/20">
            <a
              href={`mailto:${msg.email}?subject=Re: your message to Bracket Studio`}
              className="inline-block text-[var(--blue)] font-semibold hover:underline"
            >
              Reply via email →
            </a>
          </div>
        </div>
      )}
    </article>
  );
}
