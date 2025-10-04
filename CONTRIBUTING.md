# Contributing to VGenX

Thank you for your interest in contributing to **v-genx** 🎉!
This document describes the guidelines for contributing to the project.

### Getting Started

Fork the repository, or clone it:

```bash
git clone https://github.com/edgonzalez24/v-genx
```

Install dependencies using [bun](https://bun.com/)

```bash
bun install
```

### Folder Structure

As you can see we have:


- `dist`: Contains the unminified and the minified build of the repository.
- `bin/cli.js`: CLI main entry
- `src` Contains the working code for the repository:
  - `cli`: Available commands and options
  - `commands`: File generation commands
  - `templates`: Templates (vue2 / vue3)
  - `utils/extensions`: Contains the helper to determine file extensions
  - `utils/path`: Contains the helper to determine the type of file to generate
- `types`: TypeScript definitions (types/interfaces)

### Issues

When creating issues, please provide as much details as possible. A clear explanation on the issue and a reliable production example can help us greatly in improving this project. Your issue may get closed if it cannot be easily reproduced so please provide a working example. Your example should only focus on the issue, minimal and clearly produces the issue.

If your issue gets closed for not providing enough info or not responding to the maintainers' comments, do not consider it a hostile action. There are probably other issues that the maintainers are working on and must give priority to issues that are well investigated, you can always revisit the issue and address the reasons that it was closed and we will be happy to re-open it and address it properly. Sometimes a commit will close your issue without a response from the maintainers so make sure you read the issue timeline to prevent any misunderstandings.

### Commit Style

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) specification.

### Pull Requests

- Make sure you fill the PR template provided.
- PRs should have titles that are clear as possible.
- Make sure that your PR is up to date with the branch you are targeting, use `git rebase` for this.
- Unfinished/In-Progress PRs should have `[WIP]` prefix to them, and preferably a checklist for ongoing todos.
- Make sure to mention which issues are being fixed by the PR so they can be closed properly.
- Make sure to preview all pending PRs to make sure your work won't conflict with other ongoing pull-request.
- Coordinate with ongoing conflicting PRs' authors to make it easier to merge both your PRs.


### Building

Use this command to build all project bundles and localization files:

```bash
bun run build
```