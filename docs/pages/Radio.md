# Radio

The `Radio` component is a styled `<input type='radio'>` element.
Wrap the `Radio` component with the `Label` component to create a form control.

```.jsx
<Label fontSize={1}>
  <Radio
    defaultChecked
  />
  {' '}
  One
</Label>
<Label fontSize={1}>
  <Radio />
  {' '}
  Two
</Label>
<Label fontSize={1}>
  <Radio disabled />
  {' '}
  Disabled
</Label>
```

Note: `defaultChecked` is used in the example as an uncontrolled component.

