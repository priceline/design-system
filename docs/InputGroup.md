
# InputGroup

Use the `<InputGroup />` component to wrap multiple Input or InputField components with only a single border style around child elements.
This can be used for date range inputs that look like a single input.

```jsx
<InputGroup>
  <InputField>
    <Label>Where from?</Label>
    <Input
      placeholder='Where from?'
    />
  </InputField>
  <InputField>
    <Label>Where to?</Label>
    <Input
      placeholder='Where to?'
    />
  </InputField>
</InputGroup>
```

**Note:** Focus and validation states will need to pass a value to the `borderColor` prop

Prop | Type | Description
---|---|---
borderColor | string | Override the default border color
