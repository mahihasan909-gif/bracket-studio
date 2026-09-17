"use client";

import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await fetch("/api/dashboard/login", { method: "DELETE" });
    router.push("/dashboard/login");
  }

  return (
    <button
      onClick={handleSignOut}
      className="hover:text-[var(--red)] transition-colors"
    >
      Sign out
    </button>
  );
}
