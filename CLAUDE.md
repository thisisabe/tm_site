# CLAUDE.md

This file provides guidance for AI assistants (Claude and others) working in this repository.

## Project Overview

**Repository:** `thisisabe/tm_site`
**Status:** New project — no source files, dependencies, or configuration have been committed yet.

This file will be updated as the project structure evolves. When adding features or establishing patterns, update this file to reflect the new conventions.

---

## Repository State

As of the initial creation of this file, the repository contains only:
- `.git/` — standard Git internals
- `CLAUDE.md` — this file

There is no framework, language, or toolchain chosen yet. The sections below document conventions that should be followed once the project is initialized.

---

## Development Workflow

### Branching

- **Main branch:** `main` (or `master` — confirm once the project is initialized)
- **Feature branches:** use descriptive names, e.g., `feature/user-auth`, `fix/login-redirect`
- **Claude-managed branches:** always start with `claude/` and include the session ID suffix
- Never push directly to `main` without a pull request

### Commits

- Write commit messages in the imperative mood: `Add login page`, not `Added login page`
- Keep the subject line under 72 characters
- Reference issue numbers when applicable: `Fix #42: resolve redirect loop`
- Group related changes into a single commit; avoid mixing unrelated concerns

### Pull Requests

- Every PR should have a clear description of what changed and why
- Link to any related issues
- Ensure all tests and linters pass before requesting review

---

## AI Assistant Conventions

### Before Making Changes

1. **Read before editing** — always read the relevant files before proposing or applying changes
2. **Understand the context** — look at how existing code is structured before adding new code
3. **Minimal diffs** — only change what is necessary; avoid reformatting unrelated code
4. **No speculative abstractions** — don't add helpers, utilities, or abstractions unless they are needed by the current task

### Code Style (to be filled in once a stack is chosen)

When a language and framework are selected, document the style conventions here, including:
- Linter and formatter configuration (e.g., ESLint + Prettier for JS/TS, Black for Python)
- Naming conventions (files, variables, functions, classes)
- Import ordering rules
- File and directory naming conventions

### Testing

When tests are introduced, document here:
- Test framework and runner (e.g., Jest, pytest, RSpec)
- How to run the full test suite
- Where unit, integration, and end-to-end tests live
- Whether tests are required for every PR

### Environment

When environment configuration is introduced, document here:
- Required environment variables
- How to set up a local development environment (`.env.example` or equivalent)
- How to run the project locally

---

## Commands (placeholder — update when project is initialized)

Once a tech stack is chosen, fill in the standard commands used in this project:

```bash
# Install dependencies
<command here>

# Run development server
<command here>

# Run tests
<command here>

# Run linter
<command here>

# Build for production
<command here>
```

---

## Project Structure (placeholder — update as directories are created)

Once source files exist, document the directory layout here. Example:

```
tm_site/
├── src/          # Application source code
├── tests/        # Test files
├── public/       # Static assets
├── docs/         # Documentation
└── CLAUDE.md     # This file
```

---

## Notes for AI Assistants

- This CLAUDE.md should be updated whenever a significant new pattern, convention, or directory is introduced
- When in doubt about a convention, check existing code for precedent before inventing a new pattern
- Do not add dependencies, configuration files, or boilerplate unless explicitly requested
- Security: avoid committing secrets, credentials, or environment-specific values; use environment variables
- When pushing changes, always use the correct branch and verify the push succeeded
