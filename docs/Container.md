
# `<Container />`

The `<Container />` component is used to align the whole app body. With `maxWidth` prop, the Container will align at left, right or center of the screen

If you'd like to add padding or margin, please use `<Box />` inside it.

```jsx
<Container align='right' maxWidth={1280} >
  <Box width={1} m={2} px={3}>Flex</Box>
</Container>
```

`<Container align='left' />` will align the container to the left. 

If there is no align prop, Container is placed at the center as default

Prop | Type | Description
---|---|--- | ---
align | string | sets `margin-left` and `margin-right`
maxWidth | Int | sets `max-width`
