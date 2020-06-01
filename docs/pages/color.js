import React from 'react'
import { Box, Flex, theme } from 'pcln-design-system'
import { PageTitle, Description } from '../src/components'
import ColorCard from '../src/ColorCard'

const colors = Object.keys(theme.colors)
  .filter((key) => !/[0-9]$/.test(key))
  .map((key) => ({
    name: key,
    value: theme.colors[key],
  }))
  .filter((color) => !Array.isArray(color.value))

const primaries = colors.filter(
  (color) => !/^(lightGray|gray|borderGray|darkGray)$/.test(color.name)
)
const grays = colors.filter((color) =>
  /^(lightGray|gray|borderGray|darkGray)$/.test(color.name)
)

const Column = (props) => (
  <Box {...props} width={[1 / 2, null, 1 / 3, 1 / 4, 1 / 6]} mb={4} px={2} />
)

const ColorList = (props) =>
  props.colors.map((color) => (
    <Column key={color.key}>
      <ColorCard {...color} />
    </Column>
  ))

const Color = () => (
  <Box>
    <PageTitle>Color</PageTitle>
    <Description>
      The design system includes a color palette of several primary colors,
      along with light and dark variations.
    </Description>
    <Flex wrap mx={-2} pt={4}>
      <ColorList colors={primaries} />
      <ColorList colors={grays} />
    </Flex>
  </Box>
)

export default Color
