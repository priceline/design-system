# Slider

A single or multi-value range input based on [react-component-slider][rc-slider]

```.jsx
<Slider
  min={0} max={100} defaultValue={[8, 64]}
  onChange={value => update({value})}
/>
```

## Props

| Prop           | Type     | Description                     |
| -------------- | -------- | ------------------------------- |
| `min`          | number   | The minimum value of the slider |
| `max`          | number   | The maximum value of the slider |
| `defaultValue` | array    | Set initial value of slider     |
| `value`        | array    | Set current value of slider     |
| `onChange`     | function | triggered when value changes    |

For more props, see the [react-component-slider docs][rc-slider]

[rc-slider]: https://github.com/react-component/slider
