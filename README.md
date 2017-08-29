
# Priceline Design System

[![Build Status][travis-badge]][travis]
[![Coverage][coverage-badge]][coverage]

[travis-badge]: https://img.shields.io/travis/pricelinelabs/design-system/master.svg?style=flat-square
[travis]: https://travis-ci.org/pricelinelabs/design-system
[coverage-badge]: https://img.shields.io/codecov/c/github/pricelinelabs/design-system.svg?style=flat-square
[coverage]: https://codecov.io/github/pricelinelabs/design-system

https://pricelinelabs.github.io/design-system/

```sh
npm i pcln-design-system
```


## Motivation

In order to create a consistently great experience for our users,
the design system is meant to be the single source of truth for user interface standards
for both designers and developers.

Built off of the work of previous efforts, this project intends
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


## ThemeProvider

To use the design system in a React app, wrap the root component with the ThemeProvider.
This will set typographic defaults and pass the theme as context, which allows styled-components to consume the theme.

```jsx
import { ThemeProvider } from 'pcln-design-system'

const App = props => (
  <ThemeProvider>
    <h1>Hello</h1>
  </ThemeProvider>
)
```

```jsx
// Usage with styled-components
import styled from 'styled-components'

const Section = styled.section`
  background-color: ${props => props.theme.blue};
`
```


## Primitive UI Components

The preferred way of using the design system in a React application is with UI primitives.
With effective use of the UI primitives, you can reduce the need to write custom CSS in your application.

```jsx
import React from 'react'
import { ThemeProvider, Box, Text } from 'pcln-design-system'

const App = props => (
  <ThemeProvider>
    <Box p={3}>
      <Text>Hello</Text>
    </Box>
  </ThemeProvider>
)
```

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
```

Prop | Type | Description
---|---|---
fontSize | number or string | Sets font size based on the typographic scale
align | string | Sets the `text-align` property
bold | boolean | Sets `font-weight: props.theme.bold`
caps | boolean | Sets styles for all-caps type treatments
color | string | Sets color based on the theme's color palette
m | number, string, or array | Sets margin based on the `theme.space` scale
mt | number, string, or array | Sets margin-top
mr | number, string, or array | Sets margin-right
mb | number, string, or array | Sets margin-bottom
ml | number, string, or array | Sets margin-left
mx | number, string, or array | Sets margin-left and margin-right
my | number, string, or array | Sets margin-top and margin-bottom

By default, the `<Text />` component renders a `<div>` element.
To use a `<span>` or `<p>` element, use the following:

```jsx
<Text.span>This is a span element</Text.span>
<Text.p>This is a p element</Text.p>
```

### `<Heading />`

Use the `<Heading />` component to use HTML heading h1-h6 element, with all the `<Text>` props.

```jsx
// Heading with default h3 element and style
<Heading>Hello</Heading>

// Heading with h1 element
<Heading.h1>Hello</Heading.h1>

// Heading with <Text> properties
<Heading.h5 m={3} bold>Hello</Heading.h5>
```

Prop | Type | Description
---|---|---
fontSize | number or string | Sets heading font size based on the typographic scale
... // with support for all Text properties

By default, the `<Heading />` component renders a `<h3>` element with default font size 24px.
To use h1-h5 element, use the following:

```jsx
<Heading.h1>This is a h1 element</Heading.h1>
<Heading.h2>This is a h2 element</Heading.h2>
<Heading.h3>This is a h3 element</Heading.h3>
<Heading.h4>This is a h4 element</Heading.h4>
<Heading.h5>This is a h5 element</Heading.h5>
<Heading.h6>This is a h6 element</Heading.h6>
```

All the `<Text>` component properties are supported. For example:
```jsx
<Heading.h2 color='purple'>Purple</Heading.h2>
```

### `<Box />`

Use the `<Box />` component to control width, margin, padding, and color.

```jsx
// 50% width
<Box width={1/2} />

// Padding of `theme.space[3]` (16px)
<Box p={3} />

// Margin of `theme.space[2]` (8px)
<Box m={2} />

// Color blue from the theme's color palette
<Box color='blue' />

// Background color green from the theme's color palette
<Box bg='green' />
```

Prop | Type | Description
---|---|---
width | number, string, or array | Sets the width of the element
color | string | Sets color based on the theme's color palette
bg | string | Sets background-color based on the theme's color palette
m | number, string, or array | Sets margin based on the `theme.space` scale
mt | number, string, or array | Sets margin-top
mr | number, string, or array | Sets margin-right
mb | number, string, or array | Sets margin-bottom
ml | number, string, or array | Sets margin-left
mx | number, string, or array | Sets margin-left and margin-right
my | number, string, or array | Sets margin-top and margin-bottom
p | number, string, or array | Sets padding based on the `theme.space` scale
pt | number, string, or array | Sets padding-top
pr | number, string, or array | Sets padding-right
pb | number, string, or array | Sets padding-bottom
pl | number, string, or array | Sets padding-left
px | number, string, or array | Sets padding-left and padding-right
py | number, string, or array | Sets padding-top and padding-bottom

#### Responsive Widths

The `width` prop accepts an array value to set different widths at different breakpoints with a mobile-first approach.

```jsx
<Box
  width={[
    1,    // Sets width 100% at the smallest breakpoint
    1/2,  // Sets width 50% at the next breakpoint
    1/4,  // Sets width 25% at the next breakpoint
  ]}
/>
```


### `<Flex />`

The `<Flex />` component is an extension of the `<Box />` component with `display: flex` and props for using flexbox.

```jsx
<Flex>
  <Box width={1/2}>Flex</Box>
  <Box width={1/2}>Box</Box>
</Flex>
```

Prop | Type | Description
---|---|---
align | string | sets `align-items`
justify | string | sets `justify-content`
wrap | boolean | sets `flex-wrap: wrap`


### `<Image />`

Use the `<Image />` component to render a primitive image that saves the aspect ratio.

```jsx
<Image src='https://priceline.com/myimage.png' />

// Adding fixed width
<Image src='https://priceline.com/myimage.png' width='300' height='200' alt='My Image'/>
```


### `<BackgroundImage />`

Use the `<BackgroundImage />` component to set a background image.

```jsx
<BackgroundImage
  image='hello.png'>
  Hello
</BackgroundImage>
```


### `<Icon />`

Use the `<Icon />` component for SVG icons.

```jsx
<Icon
  name='circlePlus'
  size={48}
  color='blue'
/>
```

Prop | Type | Description
---|---|---
name | string | icon key name
size | number | width and height in pixels
color | string | a color key from `theme.colors`


## Theme

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

[site]: https://pricelinelabs.github.io/design-system/

MIT License
