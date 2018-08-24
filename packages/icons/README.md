
# pcln-icons

Priceline React icons based on Material Design Icons

```sh
npm i pcln-icons
```

## Usage

```js
import React from 'react'
import ACUnitIcon from 'pcln-icons/lib/AcUnit'
```

For a complete list of all icons, see:

TK

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

[material-design-icons]: https://github.com/google/material-design-icons
[pixo]: https://github.com/c8r/pixo

### Directory Structure

```sh
icons/      Custom icon SVGs
src/        React components for icons
svg/        SVGs from material-design-icons
test/       Unit tests
lib/        Icon components compiled to commonjs format
```
