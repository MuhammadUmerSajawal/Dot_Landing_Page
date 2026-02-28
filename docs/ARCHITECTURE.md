# Architecture

## Goal

Keep the `.dot` landing page fast, maintainable, and safe to ship continuously.

## Runtime Stack

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- Framer Motion + GSAP

## Source Layout

```text
src/
  app/
    api/contact/route.ts      # Contact submission endpoint
    layout.tsx                # Global metadata and shell
    page.tsx                  # Main page composition
    robots.ts                 # robots.txt
    sitemap.ts                # sitemap.xml
    sections/                 # Page-level sections
  components/
    animation/                # Reusable animation primitives
    layout/                   # Layout/navigation components
    shared/                   # Shared page components
    ui/                       # Low-level UI primitives
  config/
    site.ts                   # Single source of site content/config
  lib/
    utils.ts                  # Shared utility helpers
  types/
    index.ts                  # Shared TypeScript contracts
```

## Architectural Rules

- Keep static content in `src/config/site.ts` (not spread across components)
- Keep sections presentational; extract reusable concerns into `components/*`
- Keep integration boundaries in `app/api/*`
- Avoid dead modules and unused hooks
- Prefer small, typed interfaces over `any`

## Contact Flow

1. `ContactForm` posts JSON to `/api/contact`
2. API route validates payload server-side
3. Route returns `202` on acceptance
4. Future provider integration can be added in `app/api/contact/route.ts`

## Release Gates

- Lint must pass
- Typecheck must pass
- Production build must pass
- PR must target the correct branch for the current stage
