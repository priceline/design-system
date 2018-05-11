
# Flex

The `<Flex />` component is an extension of the `<Box />` component with `display: flex` and props for using flexbox.

```.jsx
<Flex>
  <Box width={1/2} p={2} m={2} bg='lightBlue'>Flex</Box>
  <Box width={1/2} p={2} m={2} bg='lightGreen'>Box</Box>
</Flex>
```

Flex uses the same props as the Box component, plus the following.

Prop | Type | Description
---|---|---
alignItems | string | sets `align-items`
justifyContent | string | sets `justify-content`
flexWrap | string | sets `flex-wrap`
flexDirection | string | sets `flex-direction` (either `row` or `column`)
