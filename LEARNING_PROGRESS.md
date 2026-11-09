# Learning Progress — GitHub Actions CI/CD (3 days)

Rule: concepts are ticked only after the student explains them back;
implementations only after a real, green run on GitHub.

## Day 1 — App, fundamentals, first CI

### Implementation
- [x] Counter app generated (React 19, TS 6, Vite 8, Vitest 5, RTL, ESLint 10)
- [x] lint / typecheck / test (5) / build pass locally
- [x] Verified lint + typecheck actually fail on bad code
- [x] Git initialized, first commit
- [x] Pushed to GitHub
- [x] First CI workflow designed (student decisions recorded below)
- [x] First CI workflow delegated, run green on GitHub

### Concepts (ticked when explained back)
- [x] Why: what CI/CD solves
- [x] How: workflow → event → job → step → runner
- [x] When: triggers, and the CI-before-deploy rule
- [x] Why YAML: declarative, versioned automation

## Day 2 — Quality checks & PR automation
- [x] Branch protection + required status checks
- [x] PR workflow validated via a real PR
- [x] Debug exercise 1: CI failure (diagnosed by student first)

## Day 3 — Deployment, debugging, security
- [x] Deployment platform chosen
- [x] Deploy only from main after CI passes
- [x] Public URL + smoke test
- [x] Least-privilege GITHUB_TOKEN permissions
- [x] Third-party action risks (pinning)
- [x] Debug exercise 2: workflow config failure
- [x] Independence challenge (new repo)
- [x] Competency assessment (6 Q / 3 scenarios / 2 exercises)

## Decisions log
- TypeScript pinned to 6.0: typescript-eslint does not yet support TS 7.

## Knowledge gaps
- (none recorded yet)
