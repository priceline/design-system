import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Text
} from 'pcln-design-system'

const Landing = props => (
  <Box p={4} color='white' bg='blue'>
    <Heading>
      Priceline One
    </Heading>
    <Text>
      v{props.pkg.version}
    </Text>
  </Box>
)

export default Landing
