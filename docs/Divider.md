
# Divider

`<Divider />` is a styled `<hr />`.

```.jsx
<Divider />
```

```.jsx
// Half width
<Divider width={1 / 2} />
```

```.jsx
// Margin of `theme.space[2]` (8px)
<Divider m={2} />
```

```.jsx
// Divider will be colored blue from the theme's color palette
<Divider borderColor='blue' />
```

Prop | Type | Description
---|---|---
width | number, string, or array | Sets the width of the element
borderColor | string | Sets color of Divider based on the theme's color palette
m | number, string, or array | Sets margin based on the `theme.space` scale
mt | number, string, or array | Sets margin-top
mr | number, string, or array | Sets margin-right
mb | number, string, or array | Sets margin-bottom
ml | number, string, or array | Sets margin-left
mx | number, string, or array | Sets margin-left and margin-right
my | number, string, or array | Sets margin-top and margin-bottom
