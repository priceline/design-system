# BlockLink

`<BlockLink />` can be used as an anchor link element (`<a>`) as a wrapping parent to compose its block-level children components (supported by HTML 5). `<BlockLink />` is a styled-components wrapper of `<Link />` component to remove text-decoration and colors styles and sets display as block.

```.jsx
<BlockLink href="https://www.priceline.com" target="_blank">
  <BackgroundImage image={image} width="640px">
    <Box p={4}>
      <Text align="center">Click to open priceline.com in new tab!</Text>
    </Box>
  </BackgroundImage>
</BlockLink>
```
