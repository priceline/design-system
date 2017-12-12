
# Text

Use the `<Text />` component to control font size, weight, alignment, and color.

**Note:** To use the `Montserrat` font-family in you project, don't forget to include the following code inside your html `<head>`

```html
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet">
```

```.jsx
// Font size 4 on the typographic scale
<Text fontSize={4}>
  Text
</Text>
```

```.jsx
// Center aligned
<Text align='center'>
  Centered Text
</Text>
```

```.jsx
// Bold weight
<Text bold>
  Bold Text
</Text>
```

```.jsx
// All-caps
<Text caps>
  Caps Text
</Text>
```

```.jsx
// Blue text from the color palette
<Text color='blue'>
  Blue Text
</Text>
```

Prop | Type | Description
---|---|---
fontSize | number or string | Sets font size based on the typographic scale
align | string | Sets the `text-align` property
regular | boolean | Sets `font-weight: props.theme.regular`
bold | boolean | Sets `font-weight: props.theme.bold`
caps | boolean | Sets styles for all-caps type treatments
color | string | Sets color based on the theme's color palette
m | number, string, or array | Sets margin based on the `theme.space` scale
mt | number, string, or array | Sets margin-top
mr | number, string, or array | Sets margin-right
mb | number, string, or array | Sets margin-bottom
ml | number, string, or array | Sets margin-left
mx | number, string, or array | Sets margin-left and margin-right
my | number, string, or array | Sets margin-top and margin-bottom

By default, the `<Text />` component renders a `<div>` element.
To use a `<span>` or `<p>` element, use the following:

```.jsx
<Text.span>This is a span element</Text.span>
<Text.p>This is a p element</Text.p>
<Text.s>This is an s element</Text.s>
```
