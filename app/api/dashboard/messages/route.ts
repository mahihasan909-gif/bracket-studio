import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const patchSchema = z.object({
  id:      z.number().int().positive(),
  replied: z.boolean(),
});

// PATCH /api/dashboard/messages  { id, replied }
export async function PATCH(req: NextRequest) {
  // Auth check — middleware handles /dashboard/* pages, but protect the API too
  const cookie = req.cookies.get("bs_session");
  if (!cookie) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = patchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  const { id, replied } = parsed.data;

  try {
    await db.execute({
      sql: `UPDATE messages SET replied = ? WHERE id = ?`,
      args: [replied ? 1 : 0, id],
    });
  } catch (err) {
    console.error("[PATCH /api/dashboard/messages] DB error:", err);
    return NextResponse.json({ error: "Database error." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
