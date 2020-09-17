# ToggleBadge

Use the `ToggleBadge` component to render a primitive badge.

```.jsx
<ToggleBadge selected>
  Selected
</ToggleBadge>
<ToggleBadge>
  Unselected
</ToggleBadge>
```

## Props

| Prop           | Type            | Description                                                    |
| -------------- | --------------- | -------------------------------------------------------------- |
| `selected`     | boolean         | Gives different background color                               |
| `unSelectedBg` | string          | Background color for unselected toggle, transparent by default |
| `color`        | string          | Text color                                                     |
| `bg`           | string          | Background color of the toggle badge                           |
| `fontSize`     | number or array | Text font size                                                 |
