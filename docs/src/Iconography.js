import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Divider,
  theme,
  icons
} from 'pcln-design-system'
import PageTitle from './PageTitle'
import Description from './Description'
import Code from './Code'
import BlockLink from './BlockLink'
import Pagination from './Pagination'

const iconNames = Object.keys(icons).filter(key => key !== 'legacy')

const Column = props => (
  <Box {...props} width={[1 / 2, null, 1 / 3, 1 / 5]} mb={3} px={2} />
)

const createDataURI = svg => `data:image/svg+xml;utf8,${svg}`
const createSVG = path =>
  createDataURI(`<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
  viewbox="0 0 24 24" width="24" height="24">
  <path d="${path}" />
</svg>`).replace('\n', ' ')

const IconList = props =>
  props.icons.map(icon => (
    <Column key={icon}>
      <BlockLink
        href={createSVG(icons[icon].path)}
        download={`${icon}.svg`}
        title={`Download ${icon} as SVG`}
        hoverColor="blue"
      >
        <Flex mb={2} align="center" justify="center">
          <Icon name={icon} legacy={false} size={48} />
        </Flex>
      </BlockLink>
      <Text align="center">
        <Code fontSize={10} align="center" color="text">
          {icon}
        </Code>
      </Text>
    </Column>
  ))

const Iconography = props => (
  <Box px={3} pt={4} pb={6}>
    <PageTitle>Iconography</PageTitle>
    <Description>
      The design system includes icons based on Googles Material Design Icons.
    </Description>
    <Flex wrap mx={-2} py={4}>
      <IconList icons={iconNames} />
    </Flex>
    <Divider my={4} />
    <Pagination {...props} />
  </Box>
)

export default Iconography
