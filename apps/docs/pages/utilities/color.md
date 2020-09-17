# color

A utility function to apply text and background color to a component.

## Syntax

```js
color(props)
```

## Usage

```jsx
const Box = styled.div`
  ${color}
`
```

## Arguments

| Argument | Type   | Description                                                     |
| -------- | ------ | --------------------------------------------------------------- |
| `props`  | Object | The props passed to the component, must contain a `theme` prop. |

## Example

```jsx
import { color } from 'pcln-design-system'

const Box = styled.div`
  ${color}
`
```

You can add the utility to a component to add support for a text color and a background color.

```.jsx
<Box color="primary">Primary color</Box>
```

Adding a `color` prop to your component will set the background color to that color and set the text color to either `text.lightest` or `text.base` depending on the contrast ratio with the background color.

```.jsx
<Box color="primary" bg="background">Primary on background color</Box>
```

You can also supply a `bg` prop to force a specified text color and background color, ignoring the recommended text color.

**Note:** The `bg` prop is marked to be deprecated in `v3`.
