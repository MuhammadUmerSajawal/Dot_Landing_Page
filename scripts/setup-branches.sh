#!/usr/bin/env bash

set -euo pipefail

default_branch="${1:-main}"

if ! git rev-parse --verify "$default_branch" >/dev/null 2>&1; then
  echo "Branch '$default_branch' does not exist locally."
  exit 1
fi

for branch in develop staging; do
  if git rev-parse --verify "$branch" >/dev/null 2>&1; then
    echo "Branch '$branch' already exists."
    continue
  fi

  git branch "$branch" "$default_branch"
  echo "Created '$branch' from '$default_branch'."
done

echo "Done. Push with:"
echo "  git push -u origin develop"
echo "  git push -u origin staging"

