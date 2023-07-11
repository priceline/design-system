# Contributing

- [Contributing](#contributing)
    - [Clone the repo](#clone-the-repo)
    - [Preparation](#preparation)
    - [Running tests](#running-tests)
    - [Linting and formatting](#linting-and-formatting)
    - [Creating new components](#creating-new-components)
    - [Storybook](#storybook)
    - [Publishing](#publishing)
    - [Static Docs Site](#static-docs-site)
    - [GitHub Flow](#github-flow)
    - [Pull Requests](#pull-requests)
 

If you'd like to contribute to the Design System, we'd love to have your help. As with any open-source project, we ask that you be kind, professional, and courteous toward others.

Contributing doesn't necessarily mean committing code; we also encourage you to:

- Open issues
- Join in on discussions on issues and PRs
- Help write documentation
- Use the Design System in your project and provide feedback
- Add yourself to our Contributors list using `npm run contributors:add` then enter your username and type of contribution.



### Clone the repo

```sh
git clone https://github.com/priceline/design-system.git
cd design-system
```

### Preparation

The Design System is a [Rush](https://rushjs.io/) Monorepo. Install `rush` globally:

```bash
npm i -g @microsoft/rush
```

Install dependencies and build all projects by running `rush prepare`: 

```sh
rush prepare

# This is equivalent to running `rush install` and `rush build`
```

To update the PNPM lockfile when you change dependencies in a `package.json`:

```sh
rush update
```

### Running tests

We use [Jest][jest] for testing. We intend for all tests to be migrated to [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

```sh
rush test:ci
```

To update snapshots while running tests:

```sh
rush test:snapshots
```

### Linting and formatting

Prettier is used for formatting and is run as a pre-commit hook. There is a prettier config file in the root of the repository so that IDE extensions for ESLint can read the configuration.

ESLint is used for static analysis and runs as a pre-commit hook and during CI.

```sh
rush lint
```

### Creating new components

We use [Plop](https://plopjs.com/) to scaffold new components rather than copying & pasting from a boilerplate.
The configuration allows you to create new core and package components.
Follow the steps below to create a new component:

1. Run `npm i -g plop` to install plop globally.
2. Run `rush create` and follow the prompts for `component` (components in `pcln-design-system` (`packages/core`)) or `package` (new project)
3. Run `rush update` to update dependencies
4. If creating a core component, add an import & an export for the new core component in `packages/core/src/index.ts`

Additional Guidance: [Creating Components](COMPONENT_GUIDANCE.md)

### Storybook

We use [Storybook][storybook] for isolated UI component development.

Storybook stories are in the `src` folder of each project, adjacent to the components they showcase.

```sh
rush storybook
```

### Publishing

To publish a new version of any Design System packages that have unreleased changes, run the [Rush publish to NPM]
GitHub Action workflow from the `main` branch. This will publish changed projects to NPM and create a GitHub release
for each package containing the changelogs for that release. Note that you'll need to request approval of your 
deployment before it will begin running.

### Static Docs Site

The NextJS doc site is located in `apps/docs`.

To run the static docs locally:

```sh
rush docsite
```

### GitHub Flow

We follow a loose version of [GitHub Flow][github-flow] where feature branches
are created from `main`, submitted as pull requests, given time for review and
discussion, then merged into `main``.

All merges into `main`` should be ready to be published. The Design System Working Group will batch releases as appropriate.

Generally, the workflow looks like this:

1. Pull the latest changes from `main``
1. Create a new feature branch with a name that clearly describes the change
1. Commit changes to your feature branch. We recommend keeping only one commit and amending it as you work to make rebasing easier.
1. Run `rush change` to document your changes
1. Push your branch to `origin`
1. Open a Pull Request with a clear description of the change (Answering _what_, _why_, and _how_ is a good place to start)
1. Allow for some time for discussion
1. (optional) If your PR has merge conflicts, pull the latest from `main`, then rebase your changes onto it
1. Merge the PR once you have at least two approvals and all CI checks pass

### Pull Requests

All changes to the code base must be submitted as a Pull Request (PR) and approved
by at least two members of the team before it can be merged to
main. This gives contributors and the team a chance to review and discuss
changes and helps create a record of the project's history.

If you're unsure about your change, feel free to open a PR for discussion or
make an RFC (request for comments) PR. PRs can also be in a Work In Progress
(WIP) state as long as they are marked clearly.

Generally, follow these rules for creating a PR:

- Keep it simple
- Keep changes as small as possible
- Write tests for changes & try to maintain or improve code coverage
- Write documentation for changes
- For new components and feature additions to existing components, add stories to the Storybook
- Announce your PR to the appropriate channels in Slack
- Allow enough time for everyone to review and discuss your PR
- Remember that not every PR will be merged, but that's okay

[docs site]: https://priceline.github.io/design-system/
[github-flow]: https://guides.github.com/introduction/flow/
[issue]: https://github.com/priceline/design-system/issues/new
[jest]: https://facebook.github.io/jest/
[semver]: http://semver.org
[snapshots]: https://facebook.github.io/jest/docs/en/snapshot-testing.html#content
[storybook]: https://storybook.js.org
