# `<Tooltip />`

Use `<Tooltip />` component to create a tooltip positioned around any element.

```jsx
<Tooltip top right isVisible>
  Lorem ipsum
</Tooltip>
```

## Usage Notes
* Blank tooltips will not work—there must be content in between the tags (see `children` prop).
* `top` and `bottom` are styles, not positions. `top` will have the arrow pointing down, `bottom` will have the arrow pointing up. The physical position of the tooltip is dependent on its place in the code. Put it directly before the element to go on top, after it to go on bottom.


### Props
Prop | Type | Description
---|---|---
children | any (Required) | anything you put inside the tags to render
bg | string | background color
color | string | font color
bottom | bool | tooltip is below content
top | bool | tooltip is above content
center | bool | centered horizontally
left | bool | towards the left above/below content
right | bool | towards the right above/below content
isVisible | bool | show/hide
