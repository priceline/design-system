# borders

A utility function to apply borders to a component.

## Syntax

```js
borders(props)
```

## Usage

```jsx
const Input = styled.input`
  ${borders}
`
```

## Arguments

| Argument | Type   | Description                                                     |
| -------- | ------ | --------------------------------------------------------------- |
| `props`  | Object | The props passed to the component, must contain a `theme` prop. |

## Example

```jsx
import { borders } from 'pcln-design-system'

const Input = styled.input`
  ${borders}
`
```

Add the utility to a styled-component to apply a border and a focus border color.

```.jsx
<Input placeholder="default color" />
```

Without a `color` prop the border color will default to use `border.base` and the focus color will be `primary.base`.

```.jsx
<Input color="primary" placeholder="primary color" />
```

Adding a `color` prop to your component will change both the border and focus color to the passed in color. You can pass a base palette color (`color="primary"`) or a palette color with a shade (`color="primary.dark"`).
