import React from 'react'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { Container } from './Container'
import { argTypes } from './Container.stories.args'

export default {
  title: 'Container',
  component: Container,
  argTypes,
}

export const DefaultAlignWithThemeMaxWidth = () => (
  <Container>
    <Box p={4} bg='lightGray' height='100vh'>
      Container Component
    </Box>
  </Container>
)

export const InputMaxWidth = () => (
  <Container maxWidth={500}>
    <Box p={4} bg='lightGray' height='100vh'>
      Container Component
    </Box>
  </Container>
)

const Template = (args) => (
  <Flex width='100%' color='primary'>
    {/*  @ts-ignore */}
    <Container {...args} style={{ border: '1px solid' }}>
      {/*  @ts-ignore */}
      <Box color='background.light' height='100vh' style={{ border: '1px solid' }}>
        Container Component
      </Box>
    </Container>
  </Flex>
)

export const SizeProp = Template.bind({})
SizeProp.args = {
  size: 'md',
}
