
# `<Icon />`

Use the `<Icon />` component for SVG icons.

```jsx
<Icon
  name='circlePlus'
  size={48}
  color='blue'
/>
```

By default, the Icon component will look for an icon based on its name,
first in the legacy icon set, then in the new icon set.
To force the component to prefer using new icons, set the `legacy` prop to `false`.

```jsx
<Icon legacy={false} name='chevronDown' />
```

Prop | Type | Description
---|---|---
name | string | icon key name
size | number | width and height in pixels
color | string | a color key from `theme.colors`
legacy | boolean | force component to prefer using icons from the legacy set
