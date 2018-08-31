# Label

Styled form `<label>` element.

```.jsx
<Label htmlFor='email'>Email</Label>
<Input
  id='email'
  name='email'
/>
```

```.jsx
<Label fontSize={1} nowrap>
  <Radio />
  {' '}
  This label will not wrap
</Label>
```

## Accessibility

HTML `<label>` elements are **always required** with form elements.
Use the `htmlFor` attribute to link a label with its related form control's `id`.

Using placeholders in place of a label **is not** acceptable.
See [How-to: Use Placeholder Attributes][placeholder] for more.

### Hidden Prop

To hide a form label but still allow screen readers to announce the element, use the `hidden` prop.

This **can still cause accessiblity issues** if there isn't an alternative, visible label for people to read visually.
The `placeholder` attribute **is not** a replacement for a label.

See the following for more info:

- [How-to: Use Placeholder Attributes][placeholder]
- [How-to: Hide Content](https://a11yproject.com/posts/how-to-hide-content/)

```.jsx
<Label hidden htmlFor='email'>Email</Label>
<Input
  id='email'
  name='email'
/>
```

[placeholder]: https://a11yproject.com/posts/placeholder-input-elements/

## Props

Prop | Type | Description
---|---|---
`hidden` | boolean | Visually hide the label

