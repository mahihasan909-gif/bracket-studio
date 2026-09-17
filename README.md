# Bracket Studio

> **We build the last mile.**  
> Websites, apps, and tools — shipped, not just written.

Marketing site, contact pipeline, and message dashboard for Bracket Studio.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router, Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Typography**: Fraunces (display) + IBM Plex Sans (body)
- **Database**: [Turso](https://turso.tech) (libSQL / SQLite)
- **Validation**: [Zod](https://zod.dev)

---

## Getting Started

### 1. Clone & Install dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Fill in:
- `TURSO_DATABASE_URL` — from `turso db show <db-name> --url`
- `TURSO_AUTH_TOKEN` — from `turso db tokens create <db-name>`
- `DASHBOARD_PASSWORD` — password to access `/dashboard`

### 3. Initialize the Database Schema

Run the SQL script on your Turso database:

```bash
turso db shell <db-name> < scripts/seed.sql
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site, and [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to view incoming messages.

