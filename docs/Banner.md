# `<Banner />`

Use `<Banner />` component to create a box with a optional header, text, optional left-hand icon, optional right-hand close button, and palette color scheme.

```jsx
<Banner
  palette='success'
  header='Banner'
  iconName='star'
  iconSize={20}
  text='This is a banner'
  onClose={() => {}}
  showIcon='false'
  textAlign='right'
/>
```

Prop | Type | Description
---|---|---
palette | string | Sets background-color and color. Accepts `default`, `information`, `success`, `attention`, `warning`, `gray`, `blue`, `green`, `orange`, `red`
header | string | Sets header content
iconName | string | Sets left-hand svg icon name
iconSize | number | Sets left-hand svg icon size
onClose | function | passes onClick functionality to close button / shows close button if provided
showIcon | boolean | Renders left-hand icon (true by default)
text | string | Sets text content
textAlign | string | Sets text alignment for text only (icons not affected)