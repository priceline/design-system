# `<IconButton />`

This component extends the `<Icon />` component, by allowing an `onClick` handler to be passed in as a prop. Hovering over the `<IconButton />` changes the cursor to a pointer.

```jsx
<IconButton
  name='closeLight'
  size={14}
  color='blue'
  onClick={() => {}}
/>
```

Prop | Type | Description
---|---|---
onClick | function | sets a function to execute on click
