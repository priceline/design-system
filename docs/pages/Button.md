# Button

Buttons make common actions immediately visible and easy to perform with one click or tap. They can be used for any type of action, including navigation.

```.jsx
<Button>
  Hello
</Button>
```

```.jsx
<div>
  <Button size='large' mr={2}>
    Large
  </Button>
  <Button size='medium' mr={2}>
    Medium
  </Button>
  <Button size='small'>
    Small
  </Button>
</div>
```

## Props

| Prop      | Type                          | Description                                    |
| --------- | ----------------------------- | ---------------------------------------------- |
| `radius`  | string                        | Custom button radius in pixel                  |
| `size`    | string                        | Sets button size to small, medium or large     |
| `width`   | number, string, or array      | Sets button width                              |
| `variant` | `fill`, `outline`, `disabled` | The button variant                             |
| `color`   | string                        | The color of the button, defaults to `primary` |

## Variants

### fill (default)

```.jsx
<Button>Button</Button>
```

### outline

```.jsx
<Button variant="outline">Outline Button</Button>
```

### disabled

```.jsx
<Button variant="disabled">Disabled Button</Button>
```

## Color

You can choose any palette or theme color for `Button`.

```.jsx
<Button color="secondary">Button</Button>
```

Uses the color from `theme.palette.secondary.base`, and `theme.palette.secondary.dark` for hover.

```.jsx
<Button variant="outline" color="error">Button</Button>
```

Uses the color from `theme.palette.error.base`, and `theme.palette.error.dark` for hover.

```.jsx
<Button variant="disabled" color="purple">Button</Button>
```

Uses the color from `theme.colors.purple`.
