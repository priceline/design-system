import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { Box } from '../Box/Box'
import { Flex } from '../Flex/Flex'
import { Container, type ContainerProps } from './Container'
import { argTypes } from './Container.stories.args'

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  argTypes,
  args: {
    children: (
      <Box p={4} bg='lightGray' height='100vh'>
        Container Component
      </Box>
    ),
  },
}

export default meta

type Story = StoryObj<ContainerProps>

export const DefaultAlignWithThemeMaxWidth: Story = {}

export const InputMaxWidth: Story = {
  args: { maxWidth: 500 },
}

export const SizeProp: Story = {
  args: { size: 'md' },
  render: (args) => (
    <Flex width='100%' color='primary'>
      <Container {...args} style={{ border: '1px solid' }}>
        <Box color='background.light' height='100vh' style={{ border: '1px solid' }}>
          Container Component
        </Box>
      </Container>
    </Flex>
  ),
}
