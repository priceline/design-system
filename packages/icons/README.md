# pcln-icons

Priceline React icons based on Material Design Icons

```sh
npm i pcln-icons
```

## Usage

```js
import React from 'react'
import { Flights as FlightsIcon } from 'pcln-icons'

export default props => <FlightsIcon mr={2} />
```

// TODO: revisit this
For a complete list of all icons, see: [the iconography docs](https://priceline.github.io/design-system/iconography)

For backwards compatibility, the `Icon` component can be used in the same way as in the Design System v1.

**Note:** The `Icon` component will be deprecated. Prefer using individual imports as shown above.

```js
import React from 'react'
import Icon from 'pcln-icons'

export default props => <Icon name="Flights" />
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
