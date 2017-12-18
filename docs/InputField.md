# InputField

Use `<InputField />` component to combine `<Input />`, `<Label />`, and `<Icon />` components into a flexible input field that matches the style guide.

```.jsx
<InputField onChange={() => {}}>
  <Label>Email address</Label>
  <Icon name='email' size='20' />
  <Input id='form-field-3' defaultValue='oliver@example.com' placeholder='Please enter an email address' />
  <Icon name='warning' color='red' size='20' />
</InputField>
```

## Usage Notes
This component accepts up to 4 components as children. Up to two of them can be `<Icon />`s, one can be an `<Input />`, and one can be a `<Label />`.

### `<Input />`
Make sure to provide an `id` prop to this component, otherwise you will run into accessibility issues.

### `<Icon />`
One `<Icon />` can go _before_, and one `<Icon />` can go _after_ the `<Input />` component. Anything else will result in a prop-type warning.

### Legacy Support
This component can also be used in the form:
```jsx
  <InputField icon='email' label='Email Address' id='email-address-field'/>
```

This will throw a prop-types warning, though, since you should really be using the compound version of the component.

### Props
Prop | Type | Description
---|---|---
children | array of components | Up to 4 components, two of which can be `<Icon/>`'s, one of which can be an `<Input />`, and one of which can be a `<Label />`. No other elements are supported.
onChange | function | change handler that is passed into the `<Input />` component. This needs to be passed in explicitly into `<InputField/>` so that the label can update when the user interacts with the '<Input />` component.
