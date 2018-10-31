
# Contributing

If you'd like to contribute to the design system, we'd love to have your help.
As with any open source project, we ask that you be nice, professional, and courteous towards others.

Contributing doesn't necessarily mean commiting code, we also encourage you to:

- Open issues
- Join in on discussions in issues and PRs
- Help write documentation
- Use the Design System in your project and provide feedback


## Development

To contribute code to the Design System, first you'll need to set it up for local development.

### Clone the repo:

```sh
git clone https://github.com/pricelinelabs/design-system.git
cd design-system
```

### Lerna

This repository uses [Lerna][] and is set up as a monorepo, with multiple npm packages in the `packages/` folder.

[Lerna]: https://lernajs.io

### Install dependencies:

In the root directory, use the Lerna `bootstrap` command to install dependencies and `npm link` any cross dependencies.

```sh
npm install && npm run bootstrap
```

### Running tests

We use [Jest][jest] for testing, including unit tests for functionality and [snapshot testing][snapshots] for components.

```sh
npm test
```

To run tests in watch mode (useful for TDD):

```sh
npm test -- --watch
```

If you make intentional changes to an existing component, you will need to update its snapshot:

```sh
npm test -- -u
```

### Storybook

We use [Storybook][storybook] for isolated UI component development.
To run storybook locally from the root directory:

```sh
npm start
open http://localhost:8000/
```

- Storybook stories are in the following directories:
  - `packages/core/storybook`

### Publishing

To publish the packages to npm, you'll need to be added as an owner for the packages you're publishing. Use the #design-system Slack channel for more information.

These Lerna commands can be helpful when publishing:

- Run `npm run changed` to see which packages have changed since the last release.
- Run `npm run diff` to see a diff of all packages since the last release.
- Run `npm run publish` to publish the updated packages with Lerna.


### Static Docs Site

Markdown and source code for the [static docs site](https://pricelinelabs.github.io/design-system/) are located in `docs/`.

To run the static docs locally:

```sh
cd docs
npm install
npm start
```


### Troubleshooting

You may run into the following error `ERROR in ./icons.json` when running storybook. The problem occur when the icons.json is not built yet. Running `npm run prepare` should fix the problem.


### GitHub Flow

We follow a loose version of [GitHub Flow][github-flow] where feature branches are created
from master, submitted as pull requests, given time for review and discussion,
then merged into master.
All merges into master should be ready to be published to npm
and the person merging the PR should use `npm version` to bump the package's
version according to [Semantic Versioning][semver].

Generally the workflow looks like this:

1. Pull the latest changes from master
2. Create a new feature branch (pick a name that clearly describes the feature)
3. Commit changes to your feature branch (smaller commits with clear messages are best)
4. Push your branch to origin
5. Open a Pull Request with a clear description of the change (Answering *what*, *why*, and *how* is a good place to start)
6. Allow for some time for discussion
7. (optional) If your PR has merge conflicts, pull the latest from master, then merge those changes into your PR branch, resolving conflicts in the process
8. Once there is a general consensus on the change and all tests have passed, merge the PR into master
9. Use the npm CLI to appropriately version and publish the package
10. Push the git tags created with the npm CLI to GitHub with `git push --tags`


### Beta Version

As of the date this was written, the Design System is currently in a beta.
The package versioning reflects this with the version `1.0.0-x` convention.
Once the library is in a more stable and mature state, we will release a stable `1.0.0`
and strictly follow semantic versioning from that point on.


### Pull Requests

All changes to the code base should be reviewed in a PR before merging to master.
This gives contributors and the team a chance to review and discuss changes and helps create a record of the project's history.

If you're unsure about your change, feel free to open a PR for discussion or make an RFC (request for comments) PR.
PRs can also be in a work in progress (WIP) state as long as they are clearly marked.

Generally follow these rules for creating a PR:

- Keep it simple
- Keep changes as small as possible
- Write tests for changes & try to maintain 100% code coverage
- Write documentation for changes
- For new components, add stories to Storybook
- Announce your PR to the appropriate channels in Slack
- Allow for enough time for everyone to review and discuss your PR
- Remember that not every PR will be merged, but that's okay


[semver]: http://semver.org
[issue]: https://github.com/pricelinelabs/design-system/issues/new
[github-flow]: https://guides.github.com/introduction/flow/
[jest]: https://facebook.github.io/jest/
[snapshots]: https://facebook.github.io/jest/docs/en/snapshot-testing.html#content
[storybook]: https://storybook.js.org
