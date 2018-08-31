# FormField

Use the `FormField` component to combine `Input` or `Select`, `Label`, and `Icon` components into a single input field.

```.jsx
<FormField>
  <Label htmlFor='email'>Email address</Label>
  <Icon name='email' size='20' />
  <Input
    id='email'
    name='email'
    defaultValue='oliver@example.com'
    placeholder='hello@example.com'
  />
</FormField>
```

```.jsx
<FormField>
  <Label htmlFor='options'>Select One</Label>
  <Icon name='key' size='20' />
  <Select
    id='options'
    name='options'>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </Select>
</FormField>
```

## Usage

This component accepts up to 4 components as children.
Up to two of them can be `Icon`s, one `Input` or `Select`, and one `Label`.

### `Input` or `Select`

Make sure to provide an `id` prop to this component, otherwise you will run into accessibility issues.

### `Icon`

One `Icon` can go _before_, and one `Icon` can go _after_ the `Input` component.
Anything else will result in a prop-type warning.

## Error Messages

Error messages can be displayed using the [`Tooltip`](/Tooltip) component.

```.jsx
<FormField>
  <Input
    value='hello@example'
  />
  <Icon name='warning' color='red' />
</FormField>
<Tooltip
  bottom
  right
  color='white'
  bg='red'>
  Invalid Email Address
</Tooltip>
```

## Props

Prop | Type | Description
---|---|---
`children` | React elements | Up to 4 components, two of which can be `<Icon/>`'s, one of which can be an `<Input />`, and one of which can be a `<Label />`. No other elements are supported.
`alwaysShowLabel` | boolean | Determines whether or not the label shows up statically

