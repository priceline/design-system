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

