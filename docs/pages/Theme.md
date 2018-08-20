
# Theme

The theme style constants should be used whenever low-level access to font sizes, margin, padding, media queries, and colors are needed.

```js
import {
  theme,
} from 'pcln-design-system'

// or
import {
  colors,
  mediaQueries,
  fontSizes,
  space
} from 'pcln-design-system'
```

### Colors

```js
import { colors } from 'pcln-design-system'

colors.blue // '#0a84c1'
```


### Font Sizes

```js
import { fontSizes } from 'pcln-design-system'

fontSizes[2] // 16
```

The theme includes a typographic scale as the `fontSizes` array.
Use these values whenever declaring a font-size in CSS.

### Spacing Scale

The `space` array should be used whenever declaring margin or padding values.

```js
import { space } from 'pcln-design-system'

space[0] // 0
space[1] // 4
space[2] // 8
space[3] // 16
space[4] // 32
space[5] // 64
space[6] // 128
```

### Media Queries

The `mediaQueries` array can be used to add styles targeted for different screen sizes. The design system is built for mobile-first design, so all media queries use min-width.

```js
import { mediaQueries } from 'pcln-design-system'

mediaQueries[0] // @media screen and (min-width:32em)   - approximately phone-sized
mediaQueries[1] // @media screen and (min-width:40em)   - approximately tablet-sized
mediaQueries[2] // @media screen and (min-width:48em)   - approximately laptop-sized
mediaQueries[3] // @media screen and (min-width:64em)   - approximately desktop-sized

mediaQueries.sm // alias for mediaQueries[0]
mediaQueries.md // alias for mediaQueries[1]
mediaQueries.lg // alias for mediaQueries[2]
mediaQueries.xl // alias for mediaQueries[3]
```
