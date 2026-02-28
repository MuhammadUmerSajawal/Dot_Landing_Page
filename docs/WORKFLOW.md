# Git Workflow

This repository follows a production-first branching model.

## Branches

- `main`: production-ready code only
- `staging`: pre-production integration branch
- `develop`: daily integration branch

## Supporting Branch Types

- `feature/<ticket-or-scope>`: new features from `develop`
- `fix/<ticket-or-scope>`: non-urgent fixes from `develop`
- `hotfix/<ticket-or-scope>`: urgent production fixes from `main`
- `release/<version>`: release hardening from `develop` into `staging` and `main`

## Pull Request Rules

- Never commit directly to `main`
- Keep PRs focused and small enough to review in one sitting
- Require passing CI before merge
- Require at least one approval for `staging` and `main`

## Merge Flow

1. `feature/*` -> `develop`
2. `develop` -> `staging`
3. `staging` -> `main`
4. Tag release on `main` (for example `v1.2.0`)

## Emergency Fix Flow

1. Create `hotfix/*` from `main`
2. Merge `hotfix/*` into `main`
3. Cherry-pick or merge the same fix back into `develop` and `staging`
