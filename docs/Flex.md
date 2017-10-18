
# Flex

The `<Flex />` component is an extension of the `<Box />` component with `display: flex` and props for using flexbox.

```.jsx
<Flex>
  <Box width={1/2}>Flex</Box>
  <Box width={1/2}>Box</Box>
</Flex>
```

Prop | Type | Description
---|---|---
align | string | sets `align-items`
justify | string | sets `justify-content`
wrap | boolean | sets `flex-wrap: wrap`

