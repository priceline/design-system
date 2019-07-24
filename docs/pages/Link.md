# Link

The `Link` component is a styled `<a>` element.
Use it as you would use any other link.

```.jsx
<Link href='https://www.priceline.com/home/'>
  Priceline Home
</Link>
```

## Props

| Prop      | Type        | Description      |
| --------- | ----------- | ---------------- |
| `variant` | `underline` | The link variant |
| `color`   | string      | The link color   |

## Variants

### underline (default)

```.jsx
<Link>Underline Link</Link>
```

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
