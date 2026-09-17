import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const schema = z.object({
  name:         z.string().min(1).max(200),
  email:        z.string().email().max(320),
  project_type: z.string().max(100).optional().default(""),
  message:      z.string().min(10).max(5000),
});

// Simple in-memory rate limiter (resets on cold start — fine for low traffic)
const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS  = 60_000; // 1 minute
const MAX_HITS   = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > MAX_HITS;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json({ error: first.message }, { status: 400 });
  }

  const { name, email, project_type, message } = parsed.data;

  try {
    await db.execute({
      sql: `INSERT INTO messages (name, email, project_type, message)
            VALUES (?, ?, ?, ?)`,
      args: [name, email, project_type, message],
    });
  } catch (err) {
    console.error("[/api/contact] DB error:", err);
    return NextResponse.json(
      { error: "Could not save your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
