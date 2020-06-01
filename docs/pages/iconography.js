import React from 'react'
import { Box, Flex, Text, Icon, BlockLink } from 'pcln-design-system'
import * as icons from 'pcln-icons'
import { PageTitle, Description, Code } from '../src/components'

const iconNames = Object.keys(icons)

const Column = (props) => (
  <Box {...props} width={[1 / 3, null, 1 / 3, 1 / 5]} mb={3} px={2} />
)

const createDataURI = (svg) => `data:image/svg+xml;utf8,${svg}`
const createSVG = (path) =>
  createDataURI(`<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
  viewbox="0 0 24 24" width="24" height="24">
  <path d="${path}" />
</svg>`).replace('\n', ' ')

const IconList = (props) =>
  props.icons.map((icon) => (
    <Column key={icon} py={4} bg='lightGray'>
      <BlockLink
        href={createSVG(icons[icon].path)}
        download={`${icon}.svg`}
        title={`Download ${icon} as SVG`}
        hoverColor='blue'
      >
        <Flex mb={3} align='center' justify='center'>
          <Icon name={icon} size={48} />
        </Flex>
      </BlockLink>
      <Text align='center'>
        <Code fontSize={0} color='gray'>
          {icon}
        </Code>
      </Text>
    </Column>
  ))

const Iconography = () => (
  <Box>
    <PageTitle>Iconography</PageTitle>
    <Description>
      The design system includes icons based on Googles Material Design Icons.
    </Description>
    <Flex wrap pt={4}>
      <IconList icons={iconNames} />
    </Flex>
  </Box>
)

export default Iconography
