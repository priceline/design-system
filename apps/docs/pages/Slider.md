# Slider

A single handle slider based on [react-component-slider][rc-slider]

```.jsx
<Slider
  min={0}
  max={100}
  defaultValue={8}
/>
```

## Props

| Prop                              | Type     | Description                                                      |
| --------------------------------- | -------- | ---------------------------------------------------------------- |
| `min`                             | number   | The minimum value of the slider                                  |
| `max`                             | number   | The maximum value of the slider                                  |
| `defaultValue`                    | number   | Set initial value of slider                                      |
| `value`                           | number   | Set current value of slider                                      |
| `onChange`                        | function | triggered when value changes                                     |
| `ariaLabelForHandle`              | string   | Set aria-label for handle                                        |
| `ariaLabelledByForHandle`         | string   | Set aria-labelledby for handle                                   |
| `ariaValueTextFormatterForHandle` | function | Pass a function to handle to calculate aria-valuetext from value |

For more props, see the [react-component-slider docs][rc-slider]

[rc-slider]: https://github.com/react-component/slider
