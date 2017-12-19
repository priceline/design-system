
# Slider

A single or multi-value range input based on [react-component-slider][rc-slider]

```jsx
<Slider
  value={[ 16, 32 ]}
  onChange={value => update({ value })}
/>
```

Prop | Type | Description
---|---|---
value | array | array of numbers to set the handle positions
onChange | function | triggered when value changes

For more props, see the [react-component-slider docs][rc-slider]

[rc-slider]: https://github.com/react-component/slider
