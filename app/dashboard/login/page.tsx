"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;

    const res = await fetch("/api/dashboard/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      const json = await res.json().catch(() => ({}));
      setError(json.error ?? "Login failed.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--ink)] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center justify-between">
          <Logo className="w-10 h-10" />
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] border border-[var(--border)] px-2 py-1">
            Dashboard
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            autoFocus
            className="w-full border border-[var(--muted)]/40 bg-transparent px-4 py-3 text-[var(--paper)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--blue)] transition-colors font-body"
          />

          {error && <p className="text-[var(--red)] text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--blue)] text-[var(--paper)] font-semibold py-3 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
