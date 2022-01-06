import React from 'react'
import { Box, Flex, Heading, Divider, createTheme } from 'pcln-design-system'
import { PageTitle, Description } from '../src/components'
import ColorCard from '../src/ColorCard'

const flattenObject = (obj) =>
  Object.keys(obj).map((key) => ({
    name: key,
    value: obj[key],
  }))

const Column = (props) => <Box {...props} width={[1 / 2, null, 1 / 3, 1 / 4, 1 / 5]} mb={4} px={2} />

const ColorList = (props) =>
  props.colors.map((color) => (
    <Column key={color.key}>
      <ColorCard {...color} />
    </Column>
  ))

export const SectionTitle = (props) => <Heading.h3 fontSize={[2, 3]} bold mt={[2, 4]} {...props} />

const defaultPalette = createTheme().palette

const rest = {}

const Palette = () => (
  <Box>
    <PageTitle>Palette</PageTitle>
    <Description>The design system includes a palette that can be used to theme components.</Description>
    {Object.keys(defaultPalette).map((key) => {
      if (typeof defaultPalette[key] === 'object') {
        return (
          <React.Fragment>
            <SectionTitle>{key}</SectionTitle>
            <Flex wrap mx={-2} pt={4}>
              <ColorList colors={flattenObject(defaultPalette[key])} />
            </Flex>
            <Divider />
          </React.Fragment>
        )
      } else {
        rest[key] = defaultPalette[key]
      }
    })}
    <Flex wrap mx={-2} pt={4}>
      <ColorList colors={flattenObject(rest)} />
    </Flex>
  </Box>
)

export default Palette
