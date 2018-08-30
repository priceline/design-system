
# Banner

Use `<Banner />` component to create a box with a optional header, text, optional left-hand icon, optional right-hand close button, and palette color scheme.

```.jsx
<Banner
  bg='lightBlue'
  onClose={() => {}}
  p={2}>
  <Icon name='flame' />
  Are Your Dates Correct?
  Remember to double check the calendar because availability may change depending on your dates.
</Banner>
```

```.jsx
<Banner p={2} showIcon={false}>
  This banner is rendering children instead of the text prop
</Banner>
```

Prop | Type | Description
---|---|---
bg | string | Sets background-color and color. Accepts `blue`, `green`, `orange`, `red`, `lightBlue`, `lightGreen`, `lightOrange`, `lightRed`
header | string | Sets header content
iconName | string | Sets left-hand svg icon name
onClose | function | Passes onClick functionality to close button / shows close button if provided
showIcon | boolean | Renders left-hand icon (true by default)
text | string | Sets text content
textAlign | string | Sets text alignment for text only (icons not affected)
