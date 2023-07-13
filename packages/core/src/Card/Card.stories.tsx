import React from 'react'
import { Box, Card } from '..'
import styled from 'styled-components'

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

const StyledCard = styled(Card)`
  &:hover {
    border-color: red;
    box-shadow: rgba(0, 0, 0, 0.03) 0px -1px 0px 0px, rgba(0, 0, 0, 0.16) 0px 2px 8px 0px, rgba(0, 0, 0, 0.16) 0px 10px 8px -5px, rgba(0, 0, 0, 0.16) 0px 12px 32px -2px;
  }
  &:focus{
    border-color: red;
  }
`

export const CardAsButtonCanTabAndFocus = () => (
  <Box>
    <StyledCard tabIndex={0} boxShadowSize='sm' mx={4} my={3} p={4} width={1 / 2} color='text' bg='white'>
      Small Shadow
    </StyledCard>
    <Card as='button' boxShadowSize='md' mx={4} my={3} p={4} width={1 / 2} color='text' bg='white'>
      Medium Shadow
    </Card>
    <Card as='button' boxShadowSize='lg' mx={4} my={3} p={4} width={1 / 2} color='text' bg='white'>
      Large Shadow
    </Card>
    <Card as='button' boxShadowSize='xl' mx={4} my={3} p={4} width={1 / 2} color='text' bg='white'>
      XLarge Shadow
    </Card>
  </Box>
)
CardAsButtonCanTabAndFocus.parameters = {
  pseudo: { rootSelector: "body" },
}

CardAsButtonCanTabAndFocus.story = {
  name: 'Card As Button Can Tab and Focus',
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

export const Default = () => (
  <a id='PABLO' href='www.priceline.com'>
    Pablo
  </a>
)
Default.parameters = {
  pseudo: {rootSelector: "PABLO" },
}

export const Hover = () => (
  <Box>
  <StyledCard id='PABLO' boxShadowSize='sm'>
    Card Text
  </StyledCard>
  </Box>
)
Hover.parameters = {
  pseudo: { rootSelector: "body" },
}


BoxShadowsWithVaryingBorderRadii.story = {
  name: 'Box Shadows with varying border radii',
}
