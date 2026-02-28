# .dot Landing Page

Production-ready landing page for `.dot`, built with Next.js App Router, TypeScript, and
Tailwind CSS.

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

App runs on `http://localhost:3000`.

## Scripts

```bash
npm run dev           # Local development server
npm run build         # Production build
npm run start         # Run production build locally
npm run lint          # ESLint checks
npm run typecheck     # TypeScript checks
npm run format        # Format files with Prettier
npm run format:check  # Check formatting
```

## Architecture

- `src/config/site.ts`: single source for copy, nav, links, and company metadata
- `src/app/sections/*`: landing page sections
- `src/components/*`: reusable UI/layout/animation components
- `src/app/api/contact/route.ts`: server-side contact intake endpoint
- `src/app/sitemap.ts` and `src/app/robots.ts`: SEO metadata routes

See [Architecture](docs/ARCHITECTURE.md) for full details.

## Git Flow

- Long-lived branches: `main`, `staging`, `develop`
- Work on short-lived branches (`feature/*`, `fix/*`, `hotfix/*`)
- Open PRs through environment flow:
  - `feature/*` -> `develop`
  - `develop` -> `staging`
  - `staging` -> `main`

Branch bootstrap:

```bash
./scripts/setup-branches.sh
```

See [Workflow](docs/WORKFLOW.md) and [Contributing](CONTRIBUTING.md).

## CI

GitHub Actions runs on PRs and verifies:

1. Lint
2. Typecheck
3. Production build
