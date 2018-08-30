
# Priceline Design System Docs

https://pricelinelabs.github.io/design-system/

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

For more information on how Next.js works, see the [Next.js Docs][Next.js].


[mdx-docs]: https://github.com/jxnblk/mdx-docs
[Next.js]: https://github.com/zeit/next.js/
[docs-components]: https://github.com/jxnblk/mdx-docs/blob/master/docs/components.md
[docs-theming]: https://github.com/jxnblk/mdx-docs/blob/master/docs/theming.md
