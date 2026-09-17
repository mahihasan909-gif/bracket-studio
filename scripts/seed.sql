-- Run this once on your Turso database to create the messages table.
-- Using Turso CLI: turso db shell bracket-studio < scripts/seed.sql

CREATE TABLE IF NOT EXISTS messages (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  name         TEXT NOT NULL,
  email        TEXT NOT NULL,
  project_type TEXT,
  message      TEXT NOT NULL,
  created_at   TEXT DEFAULT (datetime('now')),
  replied      INTEGER DEFAULT 0
);
