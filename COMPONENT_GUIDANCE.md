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

In general, all of the components in the `core` package are primitives, they are building blocks to be used in constructing more complex UI. Packages that exists outside of `core`, like autocomplete, modal and slider are more complex units of user interface.

### Bundle Size

In the current front-end development enviroment, most projects are able to take advantage of tree-shaking. Tree-shaking is an optimization performed by a bundler (like webpack) to eliminate dead or unused code at build time. It is done by statically analyzing the source code and looking for exports in included packages that are not imported by the application.

### Design System Upgrade Process

There is an advantage to using a subpackage for a new component during the ongoing migration efforts from Design System v1 to v2. Subpackages can be used along side DSv1, like `icons` and `modal`. This means that the DS upgrade process need not block us from using awesome new components.

## Recommendations

Most new components added to the Design System should be subpackages. This allows users to use just what they need, which is a boon to performance. Consumers can start using the package when needed. The only exceptions might be derivatives of existing core components, or other new primitives.

## Naming

Naming is one of the hardest things a developer does daily. Props and components should have concise, descriptive names.
