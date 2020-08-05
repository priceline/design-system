import React from 'react'
import * as icons from 'pcln-icons'
import { Box, Flex, Text } from 'pcln-design-system'
import { Code, Description, PageTitle } from '../src/components'

const iconNames = Object.keys(icons).filter((icon) => icon !== 'Icon')

const Column = (props) => (
  <Box {...props} width={[1 / 3, null, 1 / 3, 1 / 5]} mb={3} px={2} />
)

const IconList = (props) =>
  props.icons.map((icon) => {
    const Component = icons[icon]

    return (
      <Column key={icon} py={4} color='background.light'>
        <Flex mb={3} alignItems='center' justifyContent='center'>
          <Component size={48} />
        </Flex>
        <Text textAlign='center'>
          <Code fontSize={0} color='text'>
            {icon}
          </Code>
        </Text>
      </Column>
    )
  })

const Iconography = () => (
  <Box>
    <PageTitle>Iconography</PageTitle>
    <Description>
      The design system includes icons based on Googles Material Design Icons.
    </Description>
    <Flex flexWrap='wrap' pt={4}>
      <IconList icons={iconNames} />
    </Flex>
  </Box>
)

export default Iconography
