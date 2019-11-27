# getPaletteColor

A utility function to get the shade of a palette color.

## Syntax

```js
getPaletteColor(colorShade)(props)
getPaletteColor(color, shade)(props)
getPaletteColor(shade)(props)
```

## Usage

```jsx
const Component = styled.div`
  color: ${getPaletteColor('primary.base')};
`
```

## Arguments

| Argument     | Type   | Description                                                                         |
| ------------ | ------ | ----------------------------------------------------------------------------------- |
| `colorShade` | String | The full palette color and shade expressed in dot notation, example `primary.base`. |
| `color`      | String | The palette color, example `primary`.                                               |
| `shade`      | String | The shade of the palette color, example `base`.                                     |
| `props`      | Object | The props passed to the component, must contain a `theme` prop.                     |

## Examples

### Full palette color and shade

```jsx
const StaticDemo = styled.div`
  color: ${getPaletteColor('primary.base')};
`
```

```.jsx
<StaticDemo>Static color</StaticDemo>
```

Pass a full palette color and shade to return a color that isn't influenced by props. Accepts dot notation or a color and shade argument `getPaletteColor('primary', 'base')`.

### Palette color driven from color prop

```jsx
const ShadeDemo = styled.div`
  color: ${getPaletteColor('base')};
`
```

```.jsx
<ShadeDemo color="primary">Primary</ShadeDemo>
<ShadeDemo color="primary.dark">Primary dark</ShadeDemo>
<ShadeDemo color="orange">Legacy orange</ShadeDemo>
<ShadeDemo color="#007aff">Hex color</ShadeDemo>
```

If you only pass a shade to the function it assumes that a palette color will be passed in through a `color` prop. This is useful for components who's color will be driven by a parent consumer. If the value of the `color` prop happens to be a legacy color (for example `color="orange"`), the legacy color will be returned. If the value of the `color` prop is anything else it will also be returned.

### Palette color driven from other prop

```jsx
const ShadeOtherDemo = styled.div`
  background-color: ${props => getPaletteColor(props.bgColor, 'base')(props)};
`
```

```.jsx
<ShadeOtherDemo bgColor="primary">Primary</ShadeOtherDemo>
<ShadeOtherDemo bgColor="primary.dark">Primary dark</ShadeOtherDemo>
<ShadeOtherDemo bgColor="orange">Legacy orange</ShadeOtherDemo>
<ShadeOtherDemo bgColor="#007aff">Hex color</ShadeOtherDemo>
```

You can also apply the utility to use a different prop to drive `color`, or in the above example, `background-color`.
