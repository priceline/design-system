# Text

Use the `Text` component to control font size, weight, alignment, and color.

```.jsx
<Text fontSize={4}>
  Text
</Text>
```

```.jsx
<Text textAlign='center'>
  Centered Text
</Text>
```

```.jsx
<Text bold>
  Bold Text
</Text>
```

```.jsx
<Text caps>
  Caps Text
</Text>
```

```.jsx
<Text color='primary'>
  Blue Text
</Text>
```

## HTML Elements

By default, the `<Text />` component renders a `<div>` element.
To use a `<span>` or `<p>` element, use the following:

```.jsx
<Text.span>This is a span element</Text.span>
<Text.p>This is a p element</Text.p>
<Text.s>This is an s element</Text.s>
```

## Props

| Prop         | Type                     | Description                                                 |
| ------------ | ------------------------ | ----------------------------------------------------------- |
| `align`      | string                   | Sets the `text-align` property (deprecated - use textAlign) |
| `bold`       | boolean                  | Sets `font-weight: props.theme.bold`                        |
| `caps`       | boolean                  | Sets styles for all-caps type treatments                    |
| `color`      | string                   | Sets color based on the theme's color palette               |
| `display`    | string                   | Sets css display value, eg. none, inline, etc               |
| `fontSize`   | number or string         | Sets font size based on the typographic scale               |
| `fontWeight` | number or string         | Sets font size based on the typographic scale               |
| `height`     | number, string, or array | Sets height                                                 |
| `italic`     | boolean                  | Sets styles for italic type treatments                      |
| `maxHeight`  | number, string, or array | Sets max-height                                             |
| `maxWidth`   | number, string, or array | Sets max-width                                              |
| `minHeight`  | number, string, or array | Sets min-height                                             |
| `minWidth`   | number, string, or array | Sets min-width                                              |
| `m`          | number, string, or array | Sets margin based on the `theme.space` scale                |
| `mb`         | number, string, or array | Sets margin-bottom                                          |
| `ml`         | number, string, or array | Sets margin-left                                            |
| `mr`         | number, string, or array | Sets margin-right                                           |
| `mt`         | number, string, or array | Sets margin-top                                             |
| `mx`         | number, string, or array | Sets margin-left and margin-right                           |
| `my`         | number, string, or array | Sets margin-top and margin-bottom                           |
| `overflow`   | string                   | Sets the ccs overflow value                                 |
| `overflowX`  | string                   | Sets the ccs overflowX value                                |
| `overflowY`  | string                   | Sets the ccs overflowY value                                |
| `p`          | number, string, or array | Sets padding based on the `theme.space` scale               |
| `pb`         | number, string, or array | Sets padding-bottom                                         |
| `pl`         | number, string, or array | Sets padding-left                                           |
| `pr`         | number, string, or array | Sets padding-right                                          |
| `pt`         | number, string, or array | Sets padding-top                                            |
| `px`         | number, string, or array | Sets padding-left and padding-right                         |
| `regular`    | boolean                  | Sets `font-weight: props.theme.regular`                     |
| `textAlign`  | string, array            | Sets the `text-align` property                              |
| `width`      | number, string, or array | Sets the width of the element                               |
