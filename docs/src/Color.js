import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Heading, Text, theme } from 'pcln-design-system'
import PageTitle from './PageTitle'
import Description from './Description'
import Code from './Code'
import CopyButton from './CopyButton'

const colors = Object.keys(theme.colors)
  .filter(key => !/[0-9]$/.test(key))
  .filter(key => !/^(text|black|white|borderGray)$/.test(key))
  .map(key => ({
    name: key,
    value: theme.colors[key]
  }))
  .filter(color => !Array.isArray(color.value))

const primaries = colors.filter(color => !/^(light|dark)/.test(color.name))
const darks = colors.filter(color => /^dark/.test(color.name))
const lights = colors.filter(color => /^light/.test(color.name))

const ColorChip = styled(Box)`
  height: 0;
  padding-bottom: 75%;
`

const HexButton = styled.button`
  display: inline-block;
  font-family: inherit;
  font-size: 10px;
  margin: 0;
  padding: 0;
  color: inherit;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  appearance: none;
  opacity: 0.75;
  transition-property: opacity;
  transition-duration: 0.125s;
  transition-timing-function: ease-out;

  &:active {
    color: ${props => props.theme.colors.blue};
  }

  & > span {
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.125s;
    transition-timing-function: ease-out;
  }

  &:hover > span {
    opacity: 1;
  }
`

const ColorCard = ({ name, value }) => (
  <Box>
    <ColorChip bg={value} mb={1} />
    <Text fontSize={0}>{name}</Text>
    <CopyButton text={value}>
      <HexButton>
        <Code fontSize="inherit" color="inherit">
          {value}
        </Code>{' '}
        <span>
          <b>Copy</b>
        </span>
      </HexButton>
    </CopyButton>
  </Box>
)

const Column = props => (
  <Box {...props} width={[1 / 3, null, null, 1 / 6]} mb={3} px={2} />
)

const ColorList = props =>
  props.colors.map(color => (
    <Column key={color.key}>
      <ColorCard {...color} />
    </Column>
  ))

const Color = props => (
  <Box px={3} py={4}>
    <PageTitle>Color</PageTitle>
    <Description>
      The design system includes a color palette of several primary colors,
      along with light and dark variations.
    </Description>
    <Flex wrap mx={-2} py={4}>
      <ColorList colors={primaries} />
      <ColorList colors={lights} />
      <ColorList colors={darks} />
    </Flex>
  </Box>
)

export default Color
