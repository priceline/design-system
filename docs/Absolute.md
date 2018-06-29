
# Absolute

Use `<Absolute />` component to control position.
This component is an extension of the `<Box />` component.

```.jsx
<Card>
  <Absolute top={10} right={2} zIndex={2}>X</Absolute>
</Card>
```

Prop | Type | Description
---|---|---
top | number, string, or array | Sets top
bottom | number, string, or array | Sets bottom
left | number, string, or array | Sets left
right | number, string, or array | Sets right
zIndex | number or string | Sets z-index
