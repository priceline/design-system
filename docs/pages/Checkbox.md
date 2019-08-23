# Checkbox

Use the `Checkbox` component as a styled version of the HTML `<input type='checkbox'>`
Wrap the `Checkbox` component with the `Label` component to create a form control.

```.jsx
<Label fontSize={1}>
  <Checkbox id='one' />
  {' '}
  One
</Label>
<Label fontSize={1}>
  <Checkbox
    id='two'
    checked
  />
  {' '}
  Two
</Label>
<Label fontSize={1}>
  <Checkbox
    id='three'
    disabled
  />
  {' '}
  Three
</Label>
```

## Props

| Prop    | Type   | Description                                      |
| ------- | ------ | ------------------------------------------------ |
| `color` | string | The color of the checkbox, defaults to `primary` |

## Color

You can choose any palette or theme color for `Checkbox`.

```.jsx
<Label fontSize={1}>
  <Checkbox id='one' color='secondary' /> One
</Label>
<Label fontSize={1}>
  <Checkbox id='two' checked color='secondary'/> Two
</Label>
<Label fontSize={1}>
  <Checkbox id='three' disabled color='secondary'/> Three
</Label>
```

Uses the color from `theme.palette.secondary.base`.

```.jsx
<Label fontSize={1}>
  <Checkbox id='one' color='error' /> One
</Label>
<Label fontSize={1}>
  <Checkbox id='two' checked color='error'/> Two
</Label>
<Label fontSize={1}>
  <Checkbox id='three' disabled color='error'/> Three
</Label>
```

Uses the color from `theme.palette.error.base`.

```.jsx
<Label fontSize={1}>
  <Checkbox id='one' color='warning' /> One
</Label>
<Label fontSize={1}>
  <Checkbox id='two' checked color='warning'/> Two
</Label>
<Label fontSize={1}>
  <Checkbox id='three' disabled color='warning'/> Three
</Label>
```

Uses the color from `theme.palette.warning.base`.
