import { version } from '../../package.json'
import Button from '../src/ButtonLink'

# Priceline One

<p>
  Priceline Design System <samp>v{version}</samp>
</p>

## Sketch Kit

<Button href='https://github.com/pricelinelabs/design-system-sketch/releases/latest'>
  Download Sketch Kit
</Button>


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
  render () {
    return (
      <ThemeProvider>
        <h1>Hello</h1>
      </ThemeProvider>
    )
  }
}
```

```jsx
// Example usage with styled-components
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
import { Box, Text } from 'pcln-design-system'

const SomeView = props => (
  <Box p={3}>
    <Text color='blue'>Hello</Text>
  </Box>
)
```
