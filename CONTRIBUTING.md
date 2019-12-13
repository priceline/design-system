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

If you'd like to contribute to the Design System, we'd love to have your help.
As with any open source project, we ask that you be kind, professional, and
courteous towards others.

Contributing doesn't necessarily mean committing code; we also encourage you to:

- Open issues
- Join in on discussions in issues and PRs
- Help write documentation
- Use the Design System in your project and provide feedback
- Add yourself to our Contributors list using `npm run contributors:add` then enter your username and type of contribution.

## Local Development

To contribute code to the Design System, first, you'll need to set it up for
local development.

### Clone the repo

```sh
git clone https://github.com/priceline/design-system.git
cd design-system
```

### Lerna

This repository uses [Lerna](https://lernajs.io) and is set up as a monorepo, with
multiple npm packages in the `packages/` folder.

### Install dependencies

In the root directory, use `npm install` command to install dependencies.

```sh
npm install
```

Please be mindful that any deletion, or edit, of `package-lock.json`
can cause issues in dependencies of packages within the design system.

### Running tests

We use [Jest][jest] for testing, including unit tests for functionality and
[snapshot testing][snapshots] for components.

```sh
npm test
```

To run tests in watch mode (useful for TDD):

```sh
npm test -- --watch
```

If you make intentional changes to an existing component, you will need to
update its snapshot:

```sh
npm test -- -u
```

### Creating new components

We use [Plop](https://plopjs.com/) to scaffold new components rather than copying & pasting from a boilerplate.
The configuration allows you to create new core and package components.
Follow the steps below to create a new component:

1. Run `npm run create-component` and follow the prompts
2. Run `npm run prepare` to tell Lerna to bootstrap your new component folder
3. If creating a core component, add an import & an export for the new core component in `packages/core/src/index.js` file

### Storybook

We use [Storybook][storybook] for isolated UI component development.
To run storybook locally from the root directory:

```sh
npm start
open http://localhost:8000/
```

- Storybook stories are in the following directories:
  - `packages/core/storybook`
  - `packages/slider/storybook`

### Publishing

To publish the packages to npm, you have to be an owner of the
packages you're publishing. Use the `#design-system` Slack channel for more
information.

Before Publishing:

- Publishing is very easy once you have access to the NPM package. **Please Be Careful** 🤗
- As of v2, Node.js v8+ is required
- Use `npm login` to authenticate against the public NPM registry. If your local environment requires multiple NPM registries, the [npmrc](https://www.npmjs.com/package/npmrc) tool is useful to toggle between registries.

These Lerna commands can be helpful when publishing:

- Run `npm run changed` to see which packages have changed since the last
  release.
- Run `npm run diff` to see a diff of all packages since the last release.
- Run `npm run publish` to publish the updated packages with Lerna.

The following process is recommended for publishing packages individually:

1. `npmrc public` - This command may differ based on your setup, but essentially you want to ensure that you are pointing to a public NPM registry
2. `npm login`
3. cd into packages/package-you-want-to-update
4. `npm version patch`
5. `cd ../..` - cd back to root directory
6. `NPM_CONFIG_OTP=XXXXXX npm run publish from-package` - XXXXXX will be a 6-digit number from your authenticator app. If publishing fails, ensure that you are a collaborator on the subpackges you are trying to publish. (Have a maintainer run `npm owner add {your username} {package name (such as pcln-icons)}` on your behalf.)
7. commit and push your changes to master (Note: you need to be an admin of the design-system GitHub repository to do this).

After publishing please [document your release](https://github.com/priceline/design-system/releases/new)

### Static Docs Site

Markdown and source code for the [docs site][] are
located in `docs/`.

To run the static docs locally:

```sh
cd docs
npm install
npm start
```

### Troubleshooting

You may run into the following error `ERROR in ./icons.json` when running
storybook. The problem occur when the icons.json is not built yet. Running
`npm run prepare` should fix the problem.

### GitHub Flow

We follow a loose version of [GitHub Flow][github-flow] where feature branches
are created from master, submitted as pull requests, given time for review and
discussion, then merged into master.

All merges into master should be ready to be published to npm and the person
merging the PR should use `npm version` to bump the package's version according
to [Semantic Versioning][semver].

Generally, the workflow looks like this:

1. Pull the latest changes from master
2. Create a new feature branch (pick a name that clearly describes the feature)
3. Commit changes to your feature branch (smaller commits with clear messages
   are best)
4. Push your branch to origin
5. Open a Pull Request with a clear description of the change (Answering
   _what_, _why_, and _how_ is a good place to start)
6. Allow for some time for discussion
7. (optional) If your PR has merge conflicts, pull the latest from master, then
   merge those changes into your PR branch, resolving conflicts in the process
8. Once there is consensus on the changes and all tests have passed,
   merge the PR into master
9. Use the npm CLI to appropriately version and publish the package
10. Push the git tags created with the npm CLI to GitHub with `git push --tags`

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
