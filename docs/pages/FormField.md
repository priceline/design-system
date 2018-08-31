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
    <Option>A</Option>
    <Option>B</Option>
    <Option>C</Option>
  </Select>
</FormField>
```

## Usage Notes

This component accepts up to 4 components as children.
Up to two of them can be `Icon`s, one `Input` or `Select`, and one `Label`.

### `Input` or `Select`

Make sure to provide an `id` prop to this component, otherwise you will run into accessibility issues.

### `Icon`

One `Icon` can go _before_, and one `Icon` can go _after_ the `Input` component.
Anything else will result in a prop-type warning.

## Error Handling

All error handling should be performed by the parent component.
An example of how one might accomplish this is below.

```jsx
<Box width={1/2} bg='white'>
  <FormField>
    <Icon name='search' color='blue' size={18} />
    <Input
      id='some-input'
      autoComplete='off'
      color={this.props.errorMessage ? 'red' : null}
      placeholder='Placeholder text'
      label='Some Input Field'
      hasError={!!this.props.errorMessage}
      aria-describedby={
        this.props.errorMessage && this.props.isUsingErrorMessage
          ? 'some-input-error'
          : null
      }
      aria-invalid={!!this.props.errorMessage}
      maxLength={60}
      value={this.state.typeAheadContent}
      onChange={this.handleInputChange}
      onKeyDown={this.handleInputKeyDown}
      onClick={this.handleInputClick}
    />
    {this.props.errorMessage && <Icon name='warning' color='red' size={20} />}
  </FormField>
  {this.props.errorMessage &&
    <Tooltip
      id='some-input-error'
      bottom
      right
      color='white'
      bg='red'
    >
      {this.props.errorMessage}
    </Tooltip>
  }
</Box>
```

## Props

Prop | Type | Description
---|---|---
`children` | array of components | Up to 4 components, two of which can be `<Icon/>`'s, one of which can be an `<Input />`, and one of which can be a `<Label />`. No other elements are supported.
`alwaysShowLabel` | boolean | Determines whether or not the label shows up statically

