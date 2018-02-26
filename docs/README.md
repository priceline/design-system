
# Documentation Site

The docs site is its own package contained in this folder.
It uses the markdown files in this folder to generate docs for each component.

## Development Mode

In the `docs/` folder, run:

```sh
npm install && npm start
```

This will run a webpack-dev-server on port 8000 by default.

To change the port, pass a custom argument to the `npm start` script:

```sh
npm start -- --port 9000
```

### Static Build

Generally, you shouldn't need to build the static site locally, but this can be useful for debugging.

To build the docs site for production, run:

```sh
npm run build
```

This will generate a static site in the `site/` folder.

To build the site for testing locally, run:

```sh
npm run dev-build
```

Then run a local server in the `docs/` folder.
The site should be available at `http://localhost:8000/site`, where `8000` is the port for your local server.

## Developing

The source code for the docs site is located in the `docs/src/` folder.
The `App.js` component is the main export and is where pages can be added, removed, or reordered.

The site makes use of the following libraries:

- [x0](https://github.com/c8r/x0) for React static site generation with webpack
- [react-router](https://github.com/ReactTraining/react-router) for routing
- [remark](https://github.com/remarkjs/remark) for markdown parsing
- [remark-react](https://github.com/mapbox/remark-react) for converting markdown to React elements
- [react-live](https://github.com/FormidableLabs/react-live) for live-editable code examples
- [gray-matter][gray-matter] for front matter parsing
- [react-loadable](https://github.com/jamiebuilds/react-loadable) for code splitting components

### Adding a new page

First create a markdown file in the `docs/` folder.

Example `NewPage.md` file

```md
# My New Page
```

Next add the page name to the relevant section in the `pages` array in the App component module.

```js
const pages = [
  // { ...Foundations }
  {
    name: 'Components',
    pages: [
      'Box',
      'NewPage',
      // ...otherPageNames
    ]
  }
]
```

Start or restart the dev server to see the new page.

### Adding a live code example

The Markdown component will check the language attribute of markdown code fences.
For normal language attributes, it will render a `<pre>` tag.

To make a code fence render as a live code example, use the `.jsx` language attribute (note the `.` prefix).
All design system components will be in scope, but be sure not to use any `import` statements,
and make sure the example is a valid JSX React element.

````md
```.jsx
<Box>Hello</Box>
```
````

[gray-matter]: https://github.com/jonschlinkert/gray-matter
