# `<Banner />`

Use `<Banner />` component to create a box with a border-radius and palette color scheme.
This component is an extension of the `<Box />` component.

```jsx
<Banner palette='success' />
```

Prop | Type | Description
---|---|---
bold | boolean | Sets all text to bold
palette | string | Sets background-color and color. Accepts `default`, `information`, `success`, `attention`, `warning`, `gray`, `blue`, `green`, `orange`, `red`
title | string | Sets title text content (in color)
subtitle | string | Sets subtitle text content (in secondaryColor)