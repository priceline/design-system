import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  theme,
  icons
} from 'pcln-design-system'
import PageTitle from './PageTitle'
import Description from './Description'
import Code from './Code'

const iconNames = Object.keys(icons).filter(key => key !== 'legacy')

const Column = props => (
  <Box {...props} width={[1 / 2, null, 1 / 3, 1 / 5]} mb={3} px={2} />
)

const IconList = props =>
  props.icons.map(icon => (
    <Column key={icon}>
      <Flex p={3} align="center" justify="center">
        <Icon name={icon} size={48} />
      </Flex>
      <Text align="center">
        <Code fontSize={10} align="center" color="text">
          {icon}
        </Code>
      </Text>
    </Column>
  ))

const Iconography = props => (
  <Box px={3} py={4}>
    <PageTitle>Iconography</PageTitle>
    <Description>
      The design system includes icons based on Google's Material Design Icons.
    </Description>
    <Flex wrap mx={-2} py={4}>
      <IconList icons={iconNames} />
    </Flex>
  </Box>
)

export default Iconography
