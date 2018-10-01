
# pcln-icons

Priceline React icons based on Material Design Icons

```sh
npm i pcln-icons
```

## Usage

```js
import React from 'react'
import ACIcon from 'pcln-icons/lib/AcUnit'

export default props =>
  <ACUnitIcon
    mr={2}
    color='blue'
  />
```

For a complete list of all icons, see:

[ICONS.md](ICONS.md)

## Development

Most of the icons are generated from [material-design-icons][]
and converted to React components with [pixo][].
Custom icon SVGs are included in the `icons/` directory.

To build the icons locally, run:

```sh
npm run build
```

Run tests:

```sh
npm test
```

To build for publishing:

```sh
npm run prepare
```

### Directory Structure

```sh
svg/      Source for custom SVG icons
icons/    SVG files including custom pcln icons and icons copied from MD
src/      React components for icons
test/     Unit tests
lib/      Icon components compiled to commonjs format
names.js  List of custom and material design icons
build.js  Build script to copy MD icons to the icons/ directory
```

- [ ] Add IconButton component

[material-design-icons]: https://github.com/google/material-design-icons
[pixo]: https://github.com/c8r/pixo

