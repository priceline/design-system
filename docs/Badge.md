
# Badge

Use the `<Badge />` component to render a primitive badge.

```.jsx
<Badge bg='blue'>
  Hello
</Badge>
```

Prop | Type | Description
---|---|---
bg | string | sets background color - Note: `blue`, `lightBlue`, `green`, `lightGreen`, `red`, `lightRed`, `orange`, and `lightOrange` are presets that will also set `color`. Any bg color may be passed in, although `color` should be defined as well when not using one of the aforementioned presets.
color | string | sets text color
px | number, string, or array | Sets padding-left and padding-right
py | number, string, or array | Sets padding-top and padding-bottom
