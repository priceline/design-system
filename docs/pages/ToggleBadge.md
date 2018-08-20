
# ToggleBadge

Use the `<ToggleBadge />` component to render a primitive badge.

```.jsx
<ToggleBadge selected>
  Selected
</ToggleBadge>

<ToggleBadge>
  Unselected
</ToggleBadge>
```

Prop | Type | Description
---|---|---
selected | boolean | gives different background color
unSelectedBg | string | background color for unselected toggle, transparent by default
color | string | text color
bg | string | background color of the toggle badge
fontSize | number or array | text font size
