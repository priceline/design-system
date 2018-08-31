# Tooltip

Use `Tooltip` component to create a tooltip positioned around any element.

```.jsx
<Tooltip bg='black' color='white' bottom right>
  Hello Tooltip
</Tooltip>
```

## Usage

The `top` and `bottom` props are *not* CSS positions.
Setting the `top` prop will render the arrow pointing down,
and setting `bottom` will render the arrow pointing up.

The physical position of the tooltip is dependent on its place in the code.
Put it directly before the element to go on top, after it to go on bottom.

## Props

Prop | Type | Description
---|---|---
`bg` | string | Background color
`color` | string | Font color
`bottom` | bool | Tooltip is below content
`top` | bool | Tooltip is above content
`center` | bool | Centered horizontally
`left` | bool | Towards the left above/below content
`right` | bool | Towards the right above/below content
`zIndex` | number or String | (default `auto`)
