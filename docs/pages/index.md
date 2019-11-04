import { version } from '../../package.json'
import {
ButtonLink,
Code,
Description
} from '../src/components'

# Priceline One

<Description>
  Priceline Design System <Code>v{version}</Code>
</Description>

## Sketch Kit

<ButtonLink href='https://github.com/priceline/design-system-sketch/releases/latest'>
  Download Sketch Kit
</ButtonLink>

## Getting Started

Install the Design System in your application

```sh
npm install pcln-design-system
```

## ThemeProvider

Wrap the root of your application with the `ThemeProvider` component,
which adds the Design System theme to context for use in styled-components
and sets typographic defaults.
This should only be included once in your application.

The ThemeProvider is a wrapper around styled-components' [ThemeProvider][sc-theme].

[sc-theme]: https://www.styled-components.com/docs/advanced#theming

```jsx
import React from 'react'
import { ThemeProvider } from 'pcln-design-system'
import SomeView from './SomeView'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <h1>Hello</h1>
      </ThemeProvider>
    )
  }
}
```

## Montserrat font

To use the Montserrat font-family in you project, be sure to include a link in your document `<head>`.

```html
<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,600"
  rel="stylesheet"
/>
```

## Primitive UI Components

Import and use the design system UI components in your application.

```jsx
import React from 'react'
import { Box, Text } from 'pcln-design-system'

const SomeView = props => (
  <Box p={3}>
    <Text color="blue">Hello</Text>
  </Box>
)
```
