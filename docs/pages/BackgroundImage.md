
# BackgroundImage

Use the `BackgroundImage` component to set a background image.

```.jsx
<BackgroundImage
  image='https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1024&q=20'>
  <Box p={4}>
    <Heading
      fontSize={6}
      align='center'
      color='white'>
      Hello
    </Heading>
  </Box>
</BackgroundImage>
```

Prop | Type | Description
---|---|---
`image` | string | URI for background image
`height` | string | CSS value for height
