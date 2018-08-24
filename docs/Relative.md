# Relative

Use `<Relative />` component to control position and to act as a
parent/ancestor to an `<Absolute>` element.

This component is an extension of the
[`<Box />`](https://pricelinelabs.github.io/design-system/Box) component.
It inherits `<Box />` props.

```.jsx
<Card>
  <Relative p={2}>
    <Absolute top={10} right={2} zIndex={2}>X</Absolute>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  </Relative>
</Card>
```

Prop | Type | Description
---|---|---
top | number, string, or array | Sets top
bottom | number, string, or array | Sets bottom
left | number, string, or array | Sets left
right | number, string, or array | Sets right
zIndex | number or string | Sets z-index