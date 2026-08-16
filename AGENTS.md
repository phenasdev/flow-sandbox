# AGENTS.md

Conventions for any agent working in this repository. `/flow` reads this file; it
never writes it.

## What this repo is

A deliberately trivial test bed: a handful of pure functions and their tests. It
exists so the `/flow` orchestration loop can be exercised end to end. Keep it
small and keep it fast — every second the test suite spends running is a second
added to every `/flow` iteration someone is debugging.

## Branching

`feature/*` → `develop` → `release/vX.Y` → `main`. Only `feature/*` branches are
directly editable. Never push to `develop`, `release/*` or `main`; open a pull
request against `develop` and let a human merge it.

## Verification

```bash
pnpm typecheck && pnpm test
```

Both must pass before a branch is pushed. The suite should stay under two
seconds.

## Testing

Test-driven, red before green: write the failing test first, then only enough
code to pass it. One vertical slice per cycle — one test, one implementation,
repeat. Tests live in `tests/` and exercise the public interface exported from
`src/`, never internals.

Expected values come from an independent source of truth — a worked example or
the ticket's acceptance criteria — never recomputed the way the implementation
computes them.

## Code

- TypeScript, ES modules, `strict` on.
- Pure functions. No I/O, no globals, no framework.
- One exported function per file, named after the file.
- Throw `RangeError` for out-of-domain input; do not return sentinel values.

## Commits

Conventional Commits (`feat:`, `fix:`, `test:`, `chore:`). Reference the ticket:
`Refs #12`. Commit locally as you work; push only when verification is green.
