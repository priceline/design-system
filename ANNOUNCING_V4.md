# Announcing pcln-design-system v4 and Looking Forward

> Upgrading to Styled Components v4 for performance enhancements 🚀 and React 16.10+ for hooks 🎣

The Design System Working Group proudly presents the next major version of the Priceline Design System, scheduled for release in early November 2020. Here's a quick overview of what's included in the release:

- **Raise minimum required version of React to 16.10**
- **Upgrade to Styled Components v4** for [several enhancements](https://medium.com/styled-components/styled-components-v4-new-final-finalest-for-real-final-final-psd-fa4d83398a77)
  - Smaller and much, _much_ faster
  - A refreshed `createGlobalStyle` API, replacing the old `injectGlobal`
  - Support for the `"as"` prop, a dynamic alternative to `.withComponent`
  - Removal of Comp.extend in favor of unifying styled(Comp)
  - Full `StrictMode` compliance for React v16
  - Native support for `ref` on any styled component

## Benefits of upgrading

### Performance ⚡️

Styled Components v4 and v5 boast massive performance improvements over the now two-year-old Styled Components v3. Seriously, we're talking **big** improvements:

> ## 50% faster server-side rendering, 22% faster client-side rendering, 31% smaller bundle size

Don't take our word for it though; visit the [Styled Components release blog](https://medium.com/styled-components/announcing-styled-components-v5-beast-mode-389747abd987) for more details on the benefits of upgrading. You'll also be pleasantly surprised that, according to the authors, there are **no breaking changes\***; as long as your app is running the latest version of React, styled-components v5 should _just work_. ✨

\* Note that you need to be on a react version that supports hooks, e.g.
`react@^16.8 react-dom@^16.8 react-is@^16.8`

### React Hooks 🎣

In v16.8, React introduced a powerful new feature called [Hooks](https://reactjs.org/docs/hooks-intro.html) that allows you to use state without writing a class. This has important implications for the Design System, as it currently consists primarily of function components. This will help us maintain the codebase over time as React continues to move toward functions as the preferred means of creating components.

### New Content (_coming soon_) 🚧🏗

By raising the minimum allowed peer dependency of React to a version that supports hooks, we can introduce modern components that already exist in the Priceline ecosystem to future minor versions of the Design System. Some components we already have planned for onboarding include:

- [accordion](https://github.com/priceline/design-system/issues/205)
- [chip](https://github.com/priceline/design-system/issues/646)
- [media-query-match](https://github.com/priceline/design-system/issues/774)

## Prepare to upgrade

Prior to the initial DSv4 release, developers can take a few steps to prepare their apps to make upgrading `pcln-design-system` seamless:

- Upgrade to Styled Components v4 by following the [migration guide](https://styled-components.com/docs/faqs#what-do-i-need-to-do-to-migrate-to-v4). The [official codemods](https://github.com/styled-components/styled-components-codemods) should handle most of the heavy lifting.
- Upgrade to a supported version of React (i.e. `^16.10`)

## Looking forward

Following the initial release of v4, we'll begin adding new components and continue making technical improvements. Design System v5 will likely see an initial release in Q1 of 2021.

At a high level, here's the current roadmap planned for v5:

- **Under the hood** ⚙️
  - Remove all props that were marked deprecated as of `pcln-design-system@^3`
  - Upgrade to `styled-components@^5` for added performance benefits
  - Upgrade all packages to `styled-system@^5`, which provides better support for TypeScript
  - Remove non-palette color exports from `theme`
- **Features** 🎡
  - Support for responsive `boxShadows`
- **Fixes** 🐛
  - Make the value of `size` prop passed to `Button` components consistent ([#821](https://github.com/priceline/design-system/issues/821)

---

From the Design System Working Group, we hope that you enjoy PCLN Design System and the exciting new developments coming soon!
