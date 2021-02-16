# Link

The `Link` component is a styled `<a>` element.
Use it as you would use any other link.

```.jsx
<Link href='https://www.priceline.com/home/'>
  Priceline Home
</Link>
```

## Props

| Prop    | Type   | Description    |
| ------- | ------ | -------------- |
| `color` | string | The link color |
| `variation` | `fill`, `outline`, `link` | Used to alter the appearance of the link. `fill` and `outline` make the link look like a button. `link` is the default value. |

## Color

You can choose any palette or theme color for `Link`.

```.jsx
<Link color="secondary">Secondary Link</Link>
```

Uses the color from `theme.palette.secondary.base`.

```.jsx
<Link color="error">Error Link</Link>
```

Uses the color from `theme.palette.error.base`.

```.jsx
<Link color="purple">Purple Link</Link>
```

Uses the color from `theme.colors.purple`.

## Variations

### link

```.jsx
<Link variation='link'>Link Variant</Link>
```

### outline

```.jsx
<Link variation='outline'>Outline Variant</Link>
```

### fill

```.jsx
<Link variation='fill'>Fill Variant</Link>
```
