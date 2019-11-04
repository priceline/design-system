# Priceline Design System Docs

https://priceline.github.io/design-system/

This project was built with [mdx-docs][] and [Next.js][]

## Getting Started

```sh
npm install
```

### Run in development mode

```sh
npm start
```

### Export static site

```sh
npm run build
```

## Automatic deploys

The docs site is automatically built with Travis CI on all merges into master.

## Adding Routes & Navigation

Each file in the `pages/` directory will create a route.
To update the navigation in the sidebar and pagination,
edit the [`src/navigation.js`](src/navigation.js) module.

To create a new doc for a component, use the [template](pages/template.md) as a starting point.

For more information on how Next.js works, see the [Next.js Docs][next.js].

## Editing Pages

Most pages are written in markdown and support live code previews of components in the design system.
When running in development mode, changes should live update in the browser.

To add a live code preview, use the `.jsx` language attribute in a fenced code block:

````md
This will render as a live code example:

```.jsx
<Box>Hello</Box>
```
````

[mdx-docs]: https://github.com/jxnblk/mdx-docs
[next.js]: https://github.com/zeit/next.js/
[docs-components]: https://github.com/jxnblk/mdx-docs/blob/master/docs/components.md
[docs-theming]: https://github.com/jxnblk/mdx-docs/blob/master/docs/theming.md
