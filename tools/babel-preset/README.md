# @pcln/babel-preset-react-component

This package facilitates transpiling and building React components at Priceline. It provides 2 primary benefits to users:

1. Provides a Babel preset that applications and component repositories can use to enable commonly used ES Next features.
2. Provides a build script that enables CommonJS (CJS) and ES Modules (ESM) of React component projects.

## Preset

The preset includes several commonly requested Babel plugins to enable convenient syntax in source code and integrate with other key parts of our ecosystem, like `styled-components`:

- `babel-plugin-styled-components`
- `@babel/plugin-proposal-class-properties`
- `@babel/plugin-proposal-optional-chaining`
- `@babel/plugin-syntax-dynamic-import`

Importantly, it also configures the plugins for each relevant `NODE_ENV`, like `test` - so that unit tests can run without any additional effort.

### Using the preset

Only a few steps are required to use the preset:

1.  Using the package manager used by your project, install the following devDependencies:

    1. `@pcln/babel-preset-react-component`
    2. `@babel/cli`

       ```bash
         npm i -D @pcln/babel-preset-react-component @babel/cli
       ```

2.  Make sure the `peerDependencies` of the preset are satisfied. At the time of this writing, they are:

        ```json
          "peerDependencies": {
            "@babel/cli": "^7.7.4",
            "@babel/core": "^7.7.4",
            "cross-env": "^6.0.3",
            "react": ">=16.3.0",
            "react-dom": ">=16.3.0",
            "styled-components": ">=2"
          },
        ```

3.  Make sure your project is using `babel.config.js` instead of `.babelrc`
4.  In `babel.config.js`, include the preset. You can include additional configuration/plugins as well. However, if you need additional plugins then a PR to add them to this preset might be desirable.

```javascript
module.exports = {
  presets: ['@pcln/babel-preset-react-component'],
}
```

## Build Script

This package provides a binary called `build-react-component`, to streamline the creation of CJS and ESM versions of a build.

### Using the build script

Assuming that `@pcln/babel-preset-react-component` in installed, configure the `build` script in `package.json` to be:

```json
  "build": "build-react-component",
  "build:watch": "build-react-component --watch",
```

This provides a one-time build for git hooks, CI and other processes, and a watch mode for use during development.

Include the following additional configuration:

```json
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "sideEffects": false,
  "files": [
    "dist/"
  ],
```

The `main` and `module` fields point to the CJS and ESM versions of the build. The `main` field is important for Server Side Rendering (SSR) and unit testing - because those processes run in Node.js and not in the browser, they need the CJS code. The `module` and `sideEffects` fields are important to enable tree-shaking (also known as "dead code elimination") for the bundler of the application.

### Configuring the build script

#### --inputPath ('./src')

Indicates the input file or folder passed to `@babel/cli`, relative to your project's root directory. Default is `./src`.

```json
  "build": "build-react-component --inputPath=./src/index.js",
  "build": "build-react-component --inputPath=./source",
```

#### --outputPath ('./dist')

Indicates the output directory passed as `--out-dir` to `@babel/cli`, relative to your project's root directory. Default is `'./dist'`. **NOTE** Changing this will require changes to the `package.json` settings for `main`, `module`, and `files`.

```json
  "build": "build-react-component --outputPath=./lib",
```

#### --outputFormats ('cjs,es,esm')

Indicates a comma delimited list of format specifiers, passed to `@babel/cli` as the `BABEL_ENV` environment variable. Default is `cjs,es,esm`. These are also used to name subfolders in the `outputPath`.

```json
  "build": "build-react-component --outputFormats=cjs",
```

#### --ignoreGlobs ('**/\*.spec.js','**/_.test.js','\*\*/_.story.js','\*_/_.stories.js')

Indicates a comma delimited list of glob patterns to ignore, passed to `@babel/cli` as `--ignore`. Default is `'**/*.spec.js','**/*.test.js','**/*.story.js','**/*.stories.js'`. Pass `false` to transpile all files in `inputPath`.

```json
  "build": "build-react-component --ignoreGlobs=false",
  "build": "build-react-component --ignoreGlobs= '**/*.spec.js','**/*.test.js','**/*.story.js','**/*.stories.js'",
```

### Tree-shaking

Most JavaScript projects can take advantage of tree-shaking. Tree-shaking is an optimization performed by a bundler (like [Webpack](https://webpack.js.org/)) to eliminate dead or unused code at build time. It is done by statically analyzing the source code and looking for exports in included packages that are not imported by the application. From the documentation of [Webpack: Tree-Shaking](https://webpack.js.org/guides/tree-shaking/#root):

> Tree-shaking is a term commonly used in the JavaScript context for dead-code elimination. It relies on the static structure of ES2015 module syntax, indicated by keywords like `import` and `export`. The name and concept were popularized by the ES2015 module bundler [Rollup](https://rollupjs.org/guide/en/).

Modern bundling tools like [Webpack](https://webpack.js.org/) and [Parcel](https://parceljs.org/) can perform tree-shaking on ES Modules exports.

## Changelogs

Changelogs are generated automatically by [Rush](https://rushjs.io/). They are available in the following formats:

- Markdown [CHANGELOG.md](CHANGELOG.md)
- JSON [CHANGELOG.json](CHANGELOG.json)

## Support and Feature Requests

Please see [UX Platform Support and Feature Requests](../../SUPPORT_AND_FEATURE_REQUESTS.md)
