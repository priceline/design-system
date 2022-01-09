import React from 'react'
import { Box, Card } from '..'

export default {
  title: 'Card',
  component: Card,
}

export const BoxShadowsWithDefaultBorder = () => (
  <Box>
    <Card boxShadowSize='sm' m={4} p={4} width={1 / 2} color='black' bg='white' borderWidth={1}>
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

export const BoxShadowsWithFocused2PxBorder = () => (
  <Box>
    <Card boxShadowSize='sm' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={2}>
      Small Shadow
    </Card>
    <Card boxShadowSize='md' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={2}>
      Medium Shadow
    </Card>
    <Card boxShadowSize='lg' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={2}>
      Large Shadow
    </Card>
    <Card boxShadowSize='xl' m={4} p={4} width={1 / 2} color='text' bg='white' borderWidth={2}>
      XLarge Shadow
    </Card>
  </Box>
)

BoxShadowsWithFocused2PxBorder.story = {
  name: 'Box Shadows with focused 2px border',
}

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
