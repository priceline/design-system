# Box

Use the `Box` component to control width, margin, padding, and color.

50% width

```.jsx
<Box width={1/2} color='primary.base'>
  Box
</Box>
```

Padding of `theme.space[3]` (16px)

```.jsx
<Box p={3} color='secondary.base'>
  Box
</Box>
```

Margin of `theme.space[2]` (8px)

```.jsx
<Box m={2} color='primary.light'>
  Box
</Box>
```

Color blue from the theme's color palette

```.jsx
<Box color='blue'>
  Box
</Box>
```

Background color green from the theme's color palette

```.jsx
<Box bg='green'>
  Box
</Box>
```

## Responsive Heights and Widths

The `height` and `width` props accept an array value to set heights and widths at different breakpoints with a mobile-first approach.

```.jsx
<Box
  height={[
    '100%', // Sets height 100% at the smallest breakpoint
    '50%', // Sets height 50% at the next breakpoint
    '25%' // Sets height 25% at the next breakpoint
  ]}
  width={[
    1,    // Sets width 100% at the smallest breakpoint
    1/2,  // Sets width 50% at the next breakpoint
    1/4,  // Sets width 25% at the next breakpoint
  ]}
  color='gray'>
  Hello
</Box>
```

See [styled-system](https://github.com/jxnblk/styled-system) for more documentation.

## Props

| Prop        | Type                     | Description                                                                       |
| ----------- | ------------------------ | --------------------------------------------------------------------------------- |
| `bg`        | string                   | Sets background-color based on the theme's color palette (deprecated - use color) |
| `color`     | string                   | Sets color based on the theme's color palette                                     |
| `display`   | string, array            | Sets the display value (e.g. block, inline-block,none, etc.)                      |
| `height`    | number, string, or array | Sets height                                                                       |
| `maxHeight` | number, string, or array | Sets max-height                                                                   |
| `maxWidth`  | number, string, or array | Sets max-width                                                                    |
| `minHeight` | number, string, or array | Sets min-height                                                                   |
| `minWidth`  | number, string, or array | Sets min-width                                                                    |
| `m`         | number, string, or array | Sets margin based on the `theme.space` scale                                      |
| `mt`        | number, string, or array | Sets margin-top                                                                   |
| `mr`        | number, string, or array | Sets margin-right                                                                 |
| `mb`        | number, string, or array | Sets margin-bottom                                                                |
| `ml`        | number, string, or array | Sets margin-left                                                                  |
| `mx`        | number, string, or array | Sets margin-left and margin-right                                                 |
| `my`        | number, string, or array | Sets margin-top and margin-bottom                                                 |
| `p`         | number, string, or array | Sets padding based on the `theme.space` scale                                     |
| `pt`        | number, string, or array | Sets padding-top                                                                  |
| `pr`        | number, string, or array | Sets padding-right                                                                |
| `pb`        | number, string, or array | Sets padding-bottom                                                               |
| `pl`        | number, string, or array | Sets padding-left                                                                 |
| `px`        | number, string, or array | Sets padding-left and padding-right                                               |
| `py`        | number, string, or array | Sets padding-top and padding-bottom                                               |
| `size`      | number, string, or array | Sets the height and width simultaneously                                          |
| `width`     | number, string, or array | Sets the width of the element                                                     |
