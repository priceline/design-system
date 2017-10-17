
# `<Container />`

The `<Container />` component is used to align the app body at the center of screen.

If you'd like to add padding or margin, please use `<Box />` inside it.

```jsx
<Container maxWidth={786} >
  <Box width={1} m={2} px={3}>Flex</Box>
</Container>
```

If there is no `maxWidth` prop, `theme.maxContainerWidth` - `1280px` will be used as default

Prop | Type | Description
---|---|--- | ---
maxWidth | Number | sets `max-width`
