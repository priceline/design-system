# Select

The `Select` component is a styled `<select>` form element designed to match the look of the `Input` component.
Use this component in forms in place of the `<select>` element – it accepts all the same HTML attributes as the native element.

```.jsx
<Label htmlFor="cabinClass">Cabin Class</Label>
<Select id="cabinClass" name="cabinClass" defaultValue="Premium Economy">
  <option>Economy</option>
  <option>Premium Economy</option>
  <option>Business</option>
  <option>First Class</option>
  <option>
    With a super long label that doesn't get clobbered by the chevron
  </option>
</Select>
```
