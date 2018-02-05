
# Select

The Select component is a styled `<select>` form element designed to match the look of the Input component.
Use this component in forms in place of the `<select>` element – it accepts all the same HTML attributes as the native element.

```jsx
<div>
  <Label>Greeting</Label>
  <Select
    name='greeting'
    value='Hello'
    onChange={handleChange}>
    <option>Hello</option>
    <option>Hi</option>
    <option>Good Morning</option>
  </Select>
</div>
```

