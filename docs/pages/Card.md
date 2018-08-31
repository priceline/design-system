
# Card

Use `Card` component to control box-shadow.
This component is an extension of the `Box` component.

```.jsx
<Card p={4}>
  <Heading>Card</Heading>
</Card>
```

```.jsx
<Card
  boxShadowSize='xl'
  borderWidth={0}
  borderRadius={6}
  p={4}>
  With box shadow
</Card>
```

Prop | Type | Description
---|---|---
`boxShadowSize` | string | Sets box shadow to sm, md, lg or xl
`borderRadius` | number or string | Sets border-radius
`borderWidth` | number | Sets border with 1px (default) or 2px
