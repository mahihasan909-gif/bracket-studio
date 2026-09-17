import { createClient, type Client, type InStatement, type InArgs, type ResultSet } from "@libsql/client";

let _db: Client | null = null;

/**
 * Returns a Turso libSQL client.
 * Lazy-initialized so the module can be imported at build time without
 * requiring env vars to be present (they are only needed at request time).
 */
export function getDb(): Client {
  if (_db) return _db;

  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url) throw new Error("Missing env var: TURSO_DATABASE_URL");
  if (!authToken) throw new Error("Missing env var: TURSO_AUTH_TOKEN");

  _db = createClient({ url, authToken });
  return _db;
}

/** Convenience re-export with overloaded execute support */
export const db = {
  execute(stmt: InStatement | string, args?: InArgs): Promise<ResultSet> {
    if (typeof stmt === "string" && args !== undefined) {
      return getDb().execute(stmt, args);
    }
    return getDb().execute(stmt as InStatement);
  },
  batch: (...args: Parameters<Client["batch"]>) => getDb().batch(...args),
};
