import React from 'react'
import { Container, Box, Flex } from '..'
import { argTypes } from './Container.stories.args'

export default {
  title: 'Container',
  component: Container,
  argTypes,
}

export const DefaultAlignWithThemeMaxWidth = () => (
  <Container>
    <Box p={4} bg='lightGray' style={{ height: `100vh` }}>
      Container Component
    </Box>
  </Container>
)

DefaultAlignWithThemeMaxWidth.story = {
  name: 'Default align with theme max width',
}

export const InputMaxWidth = () => (
  <Container maxWidth={500}>
    <Box p={4} bg='lightGray' style={{ height: `100vh` }}>
      Container Component
    </Box>
  </Container>
)

InputMaxWidth.story = {
  name: 'Input maxWidth',
}

const Template = (args) => (
  <Flex width='100%' color='primary'>
    <Container {...args} style={{ border: `1px solid` }}>
      <Box color='background.light' style={{ height: `100vh`, border: `1px solid` }}>
        Container Component
      </Box>
    </Container>
  </Flex>
)

export const SizeProp = Template.bind({})
SizeProp.args = {
  size: 'md',
}
