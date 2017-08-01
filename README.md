
# pcln-ds

Priceline Design System

```sh
npm i pcln-ds
```


## Motivation

In order to create a consistently great experience for our users,
the design system is meant to be the single source of truth for user interface standards
for both designers and developers.

Build off of the work of previous efforts, this project intends
to consolidate those ideas into a living, well-documented, and growing system.


## Goals

The core goals of this project are to:

- Speed up design and development velocity
- Help create consistent, beautiful, and usable UI in our applications
- Promote best practices for accessibility, internationalization, and responsive web design

We hope to accomplish these goals by:

- Reducing the number of decisions needed when iterating on UI
- Reducing the amount of code duplication in our apps
- Serving as the standard for Priceline.com's visual language
- Providing easy-to-use and extensible components for anyone to consume

## Theme

The theme style constants should be used wherever font sizes, margin, padding, media queries, and colors are needed.

```js
import {
  theme,
} from 'pcln-ds'

// or
import {
  colors,
  mediaQueries,
  fontSizes,
  space
} from 'pcln-ds'
```

## ThemeProvider

To use the design system in a React app, wrap the root component with the ThemeProvider.
This will set typographic defaults and pass the theme as context, which allows styled-components to consume the theme.

```jsx
import { ThemeProvider } from 'pcln-ds'

const App = props => (
  <ThemeProvider>
    <h1>Hello</h1>
  </ThemeProvider>
)
```

```jsx
// Usage in a styled component
import styled from 'styled-components'

const Section = styled.section`
  background-color: ${props => props.theme.blue};
`
```

## Primitive UI Components

The preferred way of using the design system in a React application is with UI primitives.
With effective use of the UI primitives, you can avoid writing custom CSS in your application altogether.

### `<Text />`

Use the `<Text />` component to control font size, weight, alignment, and color.

```jsx
// Font size 4 on the typographic scale
<Text fontSize={4} />

// Center aligned
<Text align='center' />

// Bold weight
<Text bold />

// All-caps
<Text caps />

// Blue text from the color palette
<Text color='blue' />

// With a <p> HTML tag
<Text is='p' />
```

Prop | Type | Description
---|---|---
fontSize | number or string | Sets font size based on the typographic scale
align | string | Sets the `text-align` property
bold | boolean | Sets `font-weight: props.theme.bold`
caps | boolean | Sets styles for all-caps type treatments
color | string | Sets color based on the theme's color palette
is | string or element | Changes the underlying HTML element


### Colors

```js
import { colors } from 'pcln-ds'

colors.blue // '#0a84c1'
```


### Font Sizes

```js
import { fontSizes } from 'pcln-ds'

fontSizes[2] // 16
```

The theme includes a typographic scale as the `fontSizes` array.
Use these values whenever declaring a font-size in CSS.

### Spacing Scale

The `space` array should be used whenever declaring margin or padding values.

```js
import { space } from 'pcln-ds'

space[0] // 0
space[1] // 4
space[2] // 8
space[3] // 16
space[4] // 32
space[5] // 64
space[6] // 128
```

MIT License
