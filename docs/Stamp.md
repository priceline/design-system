# Stamp

Use the `<Stamp> </Stamp>` component to render a primitive text Stamp.

```jsx
<Stamp>
  Default Stamp
</Stamp>
```

Use the `<Stamp> </Stamp>` component in conjunction with an `<Icon />` component to render a Stamp with an Icon. An Icon placed within a Stamp will inherit the assigned Stamp color.

```jsx
<Stamp color='green'>
  <Icon name='discount' size={16} mr={1} /> Free Cancellation
</Stamp>
```

Prop | Type | Description
---|---|---
color | string | sets text and icon color of Stamp
px | number, string, or array | Sets padding-left and padding-right
py | number, string, or array | Sets padding-top and padding-bottom
mx | number, string, or array | Sets margin-left and margin-right
my | number, string, or array | Sets margin-top and margin-bottom
