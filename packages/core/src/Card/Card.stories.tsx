import React from 'react'
import { Box, Card } from '..'
import { userEvent, within } from '@storybook/testing-library'

export default {
  title: 'Card',
  component: Card,
}

export const BoxShadowsWithDefaultBorder = () => (
  <Box>
    <Card
      borderRadius={6}
      boxShadowSize='sm'
      m={4}
      p={4}
      width={1 / 2}
      color='black'
      bg='white'
      borderWidth={1}
    >
      Small Shadow
    </Card>
    <Card boxShadowSize='md' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={1}>
      Medium Shadow
    </Card>
    <Card boxShadowSize='lg' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={1}>
      Large Shadow
    </Card>
    <Card boxShadowSize='xl' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={1}>
      XLarge Shadow
    </Card>
  </Box>
)

BoxShadowsWithDefaultBorder.story = {
  name: 'Box Shadows with default border',
}

export const BoxShadowsWithCustomBorderSize = () => (
  <Box>
    <Card
      boxShadowSize='md'
      borderRadius='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      bg='white'
      borderWidth={0}
    >
      0px border
    </Card>
    <Card
      boxShadowSize='md'
      borderRadius='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      bg='white'
      borderWidth={1}
    >
      1px border
    </Card>
    <Card
      boxShadowSize='md'
      borderRadius='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      bg='white'
      borderWidth={2}
    >
      2px border
    </Card>
    <Card
      boxShadowSize='md'
      borderRadius='xl'
      m={4}
      p={4}
      width={1 / 2}
      color='text'
      bg='white'
      borderWidth="4"
    >
      4px border
    </Card>
  </Box>
)

export const BoxShadowsWithVaryingBorderRadii = () => (
  <Box>
    <Card boxShadowSize='sm' m={4} p={4} width={1 / 2} color='black' bg='white' borderRadius='xsm'>
      xsm (2px)
    </Card>
    <Card boxShadowSize='md' m={4} p={4} width={1 / 2} color='black' bg='white' borderRadius='md'>
      md (8px)
    </Card>
    <Card boxShadowSize='lg' m={4} p={4} width={1 / 2} color='black' bg='white' borderRadius='xl'>
      xl (16px)
    </Card>
    <Card boxShadowSize='xl' m={4} p={4} width={1 / 2} color='black' bg='white' borderRadius='3xl'>
      3xl (32px)
    </Card>
  </Box>
)

BoxShadowsWithVaryingBorderRadii.story = {
  name: 'Box Shadows with varying border radii',
}

const asButtonText = 'This card should look like a button'
export const AsButton = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const card = canvas.getByText(asButtonText)
    await userEvent.hover(card)
  },
  render: () => (
    <Card as='button' bg='white' height='200px' width='200px'>
      {asButtonText}
    </Card>
  ),
}
