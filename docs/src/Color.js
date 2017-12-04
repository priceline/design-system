import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Heading, Text, Divider, theme } from 'pcln-design-system'
import PageTitle from './PageTitle'
import Description from './Description'
import Code from './Code'
import CopyButton from './CopyButton'
import Pagination from './Pagination'

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
  height: 100px;
  width: 125px;
  border-radius: 4px;
  transition: all 0.1s ease;
`

const HexButton = styled.button`
  display: inline-block;
  font-family: inherit;
  font-size: 12px;
  margin: 0;
  padding: 0;
  color: inherit;
  text-align: left;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  appearance: none;
  transition-property: opacity;
  transition-duration: 0.125s;
  transition-timing-function: ease-out;

  &:active {
    color: ${props => props.theme.colors.blue};
  }

  &:active > ${ColorChip} {
    transform: scale(0.9);
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
    <CopyButton text={value}>
      <HexButton>
        <ColorChip bg={value} mb={1} />
        <Text fontSize={1} align="left" color="text">
          {name}
        </Text>
        <Code fontSize={1} align="left" color="gray">
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
  <Box px={3} pt={4} pb={6}>
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
    <Pagination {...props} />
  </Box>
)

export default Color
