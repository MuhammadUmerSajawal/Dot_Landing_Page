# Contributing

## Local Setup

```bash
npm install
npm run dev
```

## Branch Naming

- `feature/<short-scope>`
- `fix/<short-scope>`
- `hotfix/<short-scope>`
- `chore/<short-scope>`

## Daily Flow

1. Pull latest `develop`
2. Create your branch from `develop`
3. Implement changes with tests/checks
4. Open a PR to `develop`
5. Squash merge after approval and CI pass

## Required Checks Before PR

```bash
npm run lint
npm run typecheck
npm run build
```

## Commit Messages

Use Conventional Commits where possible:

- `feat: ...`
- `fix: ...`
- `chore: ...`
- `docs: ...`
- `refactor: ...`
