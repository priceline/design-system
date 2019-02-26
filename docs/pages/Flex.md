# Flex

The `Flex` component is an extension of the `Box` component with `display: flex` and props for using flexbox.

**Extends: [Box](/Box)**

```.jsx
<Flex>
  <Box width={1/2} p={2} m={2} bg='lightBlue'>Flex</Box>
  <Box width={1/2} p={2} m={2} bg='lightGreen'>Box</Box>
</Flex>
```

## Props

| Prop             | Type    | Description                                      |
| ---------------- | ------- | ------------------------------------------------ |
| `alignItems`     | string  | Sets `align-items`                               |
| `justifyContent` | string  | Sets `justify-content`                           |
| `flexWrap`       | boolean | Sets `flex-wrap: wrap`                           |
| `flexDirection`  | string  | Sets `flex-direction` (either `row` or `column`) |
