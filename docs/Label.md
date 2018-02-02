# Label

Styled form `<label>` element.

```jsx
<Label htmlFor='email'>Email</Label>
<Input
  id='email'
  name='email'
/>
```

```jsx
// Use Label.hidden to visually hide a label
// NOTE: this WILL cause accessibility and usability issues
<Label.hidden htmlFor='email'>Email</Label.hidden>
<Input
  id='email'
  name='email'
/>
```

```jsx
<Label.nowrap>
  <Radio />
  This label will not wrap
</Label.nowrap>
```
