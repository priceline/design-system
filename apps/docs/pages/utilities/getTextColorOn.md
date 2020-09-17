# getTextColorOn

A utility function to get the text color that belongs on a background color.

## Syntax

```js
getTextColorOn(colorShade)(props)
```

## Usage

```jsx
const Component = styled.div`
  color: ${getTextColorOn('primary.base')};
`
```

## Arguments

| Argument     | Type   | Description                                                                         |
| ------------ | ------ | ----------------------------------------------------------------------------------- |
| `colorShade` | String | The full palette color and shade expressed in dot notation, example `primary.base`. |
| `props`      | Object | The props passed to the component, must contain a `theme` prop.                     |

## Example

```jsx
const TextDemo = styled.div`
  color: ${getTextColorOn('primary.base')};
  background-color ${getPaletteColor('primary.base')};
`
```

```.jsx
<TextDemo>Lightest text color</TextDemo>
```

Pass a full palette color and shade to return the text color that belongs on that color. The above example would return `text.lightest` while `getTextColorOn('primary.light')` would return `text.base`.
