# `<Banner />`

Use `<Banner />` component to create a box with a optional header, text, optional left-hand icon, optional right-hand close button, and palette color scheme.
Comprised of <BannerRow /> components within <Box />

```jsx
<Banner
  bg='green'
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
bg | string | Sets background-color and color. Accepts `blue`, `green`, `orange`, `red`, `lightBlue`, `lightGreen`, `lightOrange`, `lightRed`
header | string | Sets header content
iconName | string | Sets left-hand svg icon name
iconSize | number | Sets left-hand svg icon size
onClose | function | passes onClick functionality to close button / shows close button if provided
showIcon | boolean | Renders left-hand icon (true by default)
text | string | Sets text content
textAlign | string | Sets text alignment for text only (icons not affected)