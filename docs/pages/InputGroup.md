
# InputGroup

Use the `InputGroup` component to wrap multiple `Input` or `FormField` components with only a single border style around child elements.
This can be used for date range inputs that look like a single input.

```.jsx
<InputGroup>
  <FormField>
    <Label>Where from?</Label>
    <Input
      placeholder='Where from?'
    />
  </FormField>
  <FormField>
    <Label>Where to?</Label>
    <Input
      placeholder='Where to?'
    />
  </FormField>
</InputGroup>
```

**Note:** Focus and validation states will need to pass a value to the `borderColor` prop

## Props

Prop | Type | Description
---|---|---
`borderColor` | string | Override the default border color
