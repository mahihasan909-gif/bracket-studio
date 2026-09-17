import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MessageRow from "./MessageRow";
import SignOutButton from "./SignOutButton";

export const dynamic = "force-dynamic";

export interface Message {
  id: number;
  name: string;
  email: string;
  project_type: string | null;
  message: string;
  created_at: string;
  replied: number;
}

async function getMessages(): Promise<Message[]> {
  const result = await db.execute(
    "SELECT id, name, email, project_type, message, created_at, replied FROM messages ORDER BY created_at DESC"
  );
  return result.rows as unknown as Message[];
}

export default async function DashboardPage() {
  const cookieStore = await cookies();
  if (!cookieStore.get("bs_session")) {
    redirect("/dashboard/login");
  }

  const messages = await getMessages();
  const total = messages.length;
  const unreplied = messages.filter((m) => !m.replied).length;

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Top bar */}
      <header className="border-b border-[var(--muted)]/25 px-8 py-4 flex items-center justify-between">
        <span className="font-display font-bold text-[var(--ink)]">
          <span className="text-[var(--blue)]">[</span>
          &nbsp;Dashboard&nbsp;
          <span className="text-[var(--blue)]">]</span>
        </span>
        <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
          <span>
            {total} total &middot;{" "}
            <strong className="text-[var(--ink)]">{unreplied} unreplied</strong>
          </span>
          <a href="/" className="hover:text-[var(--ink)] transition-colors">
            ← Site
          </a>
          <SignOutButton />
        </div>
      </header>

      {/* Messages */}
      <main className="max-w-5xl mx-auto px-8 py-10">
        {messages.length === 0 ? (
          <p className="text-[var(--muted)] text-lg">No messages yet.</p>
        ) : (
          <div className="divide-y divide-[var(--muted)]/20">
            {messages.map((msg) => (
              <MessageRow key={msg.id} msg={msg} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
