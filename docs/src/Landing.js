import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Divider,
  Icon
} from 'pcln-design-system'
import Pre from './Pre'

const Btn = Button.withComponent('a')

const Landing = props => (
  <Box p={[2, 4]}>
    <Heading.h1 bold mt={[2, 4]} mb={3} fontSize={[3, 4, 6]}>
      Priceline One
    </Heading.h1>
    <Text fontSize={3} mb={2}>
      {props.pkg.description}
    </Text>
    <Text fontSize={0}>v{props.pkg && props.pkg.version}</Text>
    <Flex align="center" justify="space-around" color="blue" py={5}>
      <Icon name="hotelOutline" size={64} />
      <Icon name="planeOutlineEngine" size={64} />
      <Icon name="carLine" size={64} />
    </Flex>
    <Divider my={4} />
    <Flex align="center" py={3}>
      <Pre mr={3}>npm install pcln-design-system</Pre>
      <Btn
        href="https://github.com/pricelinelabs/design-system-sketch/releases/latest"
        children="Sketch Download"
      />
    </Flex>
  </Box>
)

export default Landing
