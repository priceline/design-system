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
<Label nowrap>
  <Radio />
  This label will not wrap
</Label>
```

To hide a form label but still allow screen readers to announce the element, use the `hidden` prop.

This **can still cause accessiblity issues** if there isn't an alternative, visible label for people to read visually.
The `placeholder` attribute **is not** a replacement for a label.

See the following for more info:

- [How-to: Use Placeholder Attributes](https://a11yproject.com/posts/placeholder-input-elements/)
- [How-to: Hide Content](https://a11yproject.com/posts/how-to-hide-content/)

```.jsx
<Label hidden htmlFor='email'>Email</Label>
<Input
  id='email'
  name='email'
/>
```
