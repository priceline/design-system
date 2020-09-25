# Contributing

- [Contributing](#contributing)

  - [Local Development](#local-development)
  - [Clone the repo](#clone-the-repo)
  - [Lerna](#lerna)
  - [Install dependencies](#install-dependencies)
  - [Running tests](#running-tests)
  - [Storybook](#storybook)
  - [Publishing](#publishing)
  - [Static Docs Site](#static-docs-site)
  - [Troubleshooting](#troubleshooting)
  - [GitHub Flow](#github-flow)
  - [Beta Version](#beta-version)
  - [Pull Requests](#pull-requests)

  - [Creating Components](COMPONENT_GUIDANCE.md)

If you'd like to contribute to the Design System, we'd love to have your help. As with any open source project, we ask that you be kind, professional, and courteous towards others.

Contributing doesn't necessarily mean committing code; we also encourage you to:

- Open issues
- Join in on discussions in issues and PRs
- Help write documentation
- Use the Design System in your project and provide feedback
- Add yourself to our Contributors list using `npm run contributors:add` then enter your username and type of contribution.

## Local Development

The Design System is a [Rush](https://rushjs.io/) Monorepo. Install `rush` globally:

```bash
npm i -g @microsoft/rush
```

### Clone the repo

```sh
git clone https://github.com/priceline/design-system.git
cd design-system
```

### Preparation

To install dependencies:

```sh
rush install
```

To build the projects:

```sh
rush build
```

As a convenience, `rush prepare` will run `install` and `build`

```sh
rush prepare
```

To update the lockfile when you change dependencies in a `package.json`:

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
rush test:ci:update
```

### Linting and formatting

Prettier is used for formatting and is run as a pre-commit hook. There is a prettier config file in the root of the repository so that IDE extensions for ESLint can read the configuration.

ESLint is used for static analysis, and is part of the CI process.

```sh
rush lint
```

### Creating new components

We use [Plop](https://plopjs.com/) to scaffold new components rather than copying & pasting from a boilerplate.
The configuration allows you to create new core and package components.
Follow the steps below to create a new component:

1. Run `rush create` and follow the prompts for `component` (component in `pcln-design-system` (`packages/core`)) or `package` (new project)
2. Run `rush update` to update dependencies
3. If creating a core component, add an import & an export for the new core component in `packages/core/src/index.js` file

### Storybook

We use [Storybook][storybook] for isolated UI component development.

Storybook stories are in the `src` folder of each project, adjacent to the components they showcase.

```sh
rush storybook
open http://localhost:8000/
```

### Publishing

An updated publishing process will be documented in detail at the time of the next publish.

To publish the packages to npm, you have to be an owner of the packages you're publishing on the NPM registry. Priceline employees should use the `#design-system` Slack channel for more information.

#### Before Publishing:

- Publishing is very easy once you have access to the NPM package. **Please Be Careful** 🤗
- Use `npm login` to authenticate against the public NPM registry. If your local environment requires multiple NPM registries, the [npmrc](https://www.npmjs.com/package/npmrc) tool is useful to toggle between registries.
- After publishing please [document your release](https://github.com/priceline/design-system/releases/new)

### Static Docs Site

The NextJS docsite is located in `apps/docs`.

To run the static docs locally:

```sh
rush docsite
```

### GitHub Flow

We follow a loose version of [GitHub Flow][github-flow] where feature branches
are created from master, submitted as pull requests, given time for review and
discussion, then merged into master.

All merges into master should be ready to be published. The Design System Working Group will batch releases as appropriate.

Generally, the workflow looks like this:

1. Pull the latest changes from master
1. Create a new feature branch (pick a name that clearly describes the feature)
1. Commit changes to your feature branch (smaller commits with clear messages are best)
1. Run `rush change` to document your changes
1. Push your branch to origin
1. Open a Pull Request with a clear description of the change (Answering _what_, _why_, and _how_ is a good place to start)
1. Allow for some time for discussion
1. (optional) If your PR has merge conflicts, pull the latest from master, then merge those changes into your PR branch, resolving conflicts in the process
1. Once there is consensus on the changes and all tests have passed, merge the PR into master

### Pull Requests

All changes to the code base must be submitted as a Pull Request (PR) and approved
by at least two members of the team before it can be merged to
master. This gives contributors and the team a chance to review and discuss
changes and helps create a record of the project's history.

If you're unsure about your change, feel free to open a PR for discussion or
make an RFC (request for comments) PR. PRs can also be in a Work In Progress
(WIP) state as long as they are marked clearly.

Generally, follow these rules for creating a PR:

- Keep it simple
- Keep changes as small as possible
- Write tests for changes & try to maintain 100% code coverage
- Write documentation for changes
- For new components, add stories to Storybook
- Announce your PR to the appropriate channels in Slack
- Allow for enough time for everyone to review and discuss your PR
- Remember that not every PR will be merged, but that's okay

[docs site]: https://priceline.github.io/design-system/
[github-flow]: https://guides.github.com/introduction/flow/
[issue]: https://github.com/priceline/design-system/issues/new
[jest]: https://facebook.github.io/jest/
[semver]: http://semver.org
[snapshots]: https://facebook.github.io/jest/docs/en/snapshot-testing.html#content
[storybook]: https://storybook.js.org
