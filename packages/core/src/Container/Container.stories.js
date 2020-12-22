import React from 'react'
import { Container, Box } from '..'

export default {
  title: 'Container',
  component: Container,
}

export const DefaultAlignWithThemeMaxWidth = () => (
  <Container>
    <Box p={4} bg='lightGray' style={{ height: `100vh` }}>
      Container Compnent
    </Box>
  </Container>
)

DefaultAlignWithThemeMaxWidth.story = {
  name: 'Default align with theme max width',
}

export const InputMaxWidth = () => (
  <Container maxWidth={500}>
    <Box p={4} bg='lightGray' style={{ height: `100vh` }}>
      Container Compnent
    </Box>
  </Container>
)

InputMaxWidth.story = {
  name: 'Input maxWidth',
}
