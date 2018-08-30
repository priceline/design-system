# Tooltip

Use `<Tooltip />` component to create a tooltip positioned around any element.

```.jsx
<Tooltip bg='black' color='white' bottom right>
  Hello Tooltip
</Tooltip>
```

## Usage Notes

- Blank tooltips will not work—there must be content in between the tags (see `children` prop).
- `top` and `bottom` are styles, not positions. `top` will have the arrow pointing down, `bottom` will have the arrow pointing up. The physical position of the tooltip is dependent on its place in the code. Put it directly before the element to go on top, after it to go on bottom.


### Props
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
