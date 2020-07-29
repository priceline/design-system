# pcln-icons

Priceline React icons based on Material Design Icons

```sh
npm i pcln-icons
```

## Usage

```js
import React from 'react'
import { Flights as FlightsIcon } from 'pcln-icons'

export default (props) => <FlightsIcon mr={2} />
```

For a complete list of all icons, see: [the iconography docs](https://priceline.github.io/design-system/iconography)

**BREAKING CHANGE:** The `Icon` component has been removed from `core` (`pcln-design-system`) in v3.0.0. The optimal
approach is to use named imports from `pcln-icons`. If you need an `<Icon>` component that supports a `name`
prop, you can use:

```js
import React from 'react'
import { Icon } from 'pcln-icons'

export default (props) => <Icon name={iconName} mr={2} />
```

_Note: Exports from `pcln-icons` rely on values from `theme`, so they must be descendents of `<ThemeProvider>` in order to work properly. Otherwise, you might experience errors like this:_

```
Uncaught TypeError: Cannot read property '3' of undefined
```

## Development

Custom icon SVGs are included in the `svg/` directory.

To build the icons locally, run:

```sh
npm run prepare
```

Run tests:

```sh
npm test
```

### Directory Structure

```sh
svg/        Source for custom SVG icons
src/        Source for wrapper Icon component
components/ React components for icons
test/       Unit tests
```
