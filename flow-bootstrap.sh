#!/usr/bin/env bash
# Run by /flow after `git worktree add`, before any agent starts. A fresh
# worktree has no node_modules; pnpm's content-addressed store keeps this to
# seconds by hard-linking rather than downloading.
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"

pnpm install --frozen-lockfile --prefer-offline

echo "flow-bootstrap: dependencies ready in $PWD"
