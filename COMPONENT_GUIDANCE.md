# Where to add a new component

Problem: You want to add a new component to the Design System.
The decision you have to make is where to add the component to the project.

- [Where to add a new component](#where-to-add-a-new-component)
  - [Options](#options)
  - [Considerations](#considerations)
    - [Expected Usage](#expected-usage)
    - [Bundle Size](#bundle-size)
    - [Design System Upgrade Process](#design-system-upgrade-process)
  - [Recommendations](#recommendations)
  - [Naming](#naming)

## Options

There are two places a component could be added to the Design System. The first one is `/packages/core`.

The other option is to create a new package, `/packages/my-new-component`

## Considerations

- expected usage / nature of component
- bundle size
- DS upgrade process

### Expected Usage

In general, all of the components in `/packages/core` are primitives, they are building blocks to be used in constructing more complex UI. Packages that exist outside of `/packages/core`, like `/packages/autocomplete`, `/packages/modal` and `/packages/slider` are more complex units of user interface.

### Bundle Size

Most JavaScript projects are able to take advantage of tree-shaking. Tree-shaking is an optimization performed by a bundler (like webpack) to eliminate dead or unused code at build time. It is done by statically analyzing the source code and looking for exports in included packages that are not imported by the application. From the documentation of [Webpack: Tree-Shaking](https://webpack.js.org/guides/tree-shaking/#root):

> Tree shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES2015 module syntax, i.e. import and export. The name and concept have been popularized by the ES2015 module bundler rollup.

Each package in the monorepo is built with [Rollup](https://rollupjs.org/guide/en/), with exports of `dist/index.cjs.js` for CommonJS and `dist/index.esm.js` for ES Modules. Modern bundling tools like [Webpack](https://webpack.js.org/) and [Parcel](https://parceljs.org/) are able to perform tree-shaking on ES Modules exports.

One of the commands available at the repository level is `npm run bundle:audit`. This command performs the production build for each package, and then uses [rollup-plugin-analyzer](https://github.com/doesdev/rollup-plugin-analyzer) and [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) to provide the developer and understanding of what is bundled with the packages.

### Design System Upgrade Process

There is an advantage to using a discrete package for a new component. While migrating between major releases of Design System, packages can be used along side supported versions of Design System. Developers should be able to use components immediately, without being blocked my needing to perform a semver major upgrade first.

## Recommendations

In most cases, new components should be added to the Design System as discrete packages. Only design primitives will be added to `/packages/core` (published as `pcln-design-system`). Components that compose primitives into units of interface should be created in their own packages. Some examples of such components are modals, form controls, date pickers and other combinations of primitive components.

## Naming

Naming is one of the hardest things a developer does daily. Props and components should have expressive, descriptive names.
