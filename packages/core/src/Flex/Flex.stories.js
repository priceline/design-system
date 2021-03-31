import React from 'react'
import { Flex, Box } from '..'

export default {
  title: 'Flex',
  component: Flex,
}

export const Basic = () => (
  <Flex align='center'>
    <Box width={1 / 2} p={3} color='white' bg='blue'>
      Flex
    </Box>
    <Box width={1 / 2} p={1} color='white' bg='green'>
      Box
    </Box>
  </Flex>
)

export const Wrap = () => (
  <Flex wrap='wrap'>
    <Box width={[1, 1 / 2]} p={3} color='white' bg='blue'>
      Flex
    </Box>
    <Box width={[1, 1 / 2]} p={1} color='white' bg='green'>
      Wrap
    </Box>
  </Flex>
)

export const Justify = () => (
  <Flex justifyContent='space-around'>
    <Box width={1 / 3} p={2} color='white' bg='blue'>
      Flex
    </Box>
    <Box width={1 / 3} p={2} color='white' bg='green'>
      Justify
    </Box>
  </Flex>
)

export const DeprecatedBgShim = () => (
  <Flex bg='blue'>
    <Box width={1 / 2} p={3} color='white' bg='blue'>
      Flex
    </Box>
    <Box width={1 / 2} p={1} color='white' bg='green'>
      Box
    </Box>
  </Flex>
)

DeprecatedBgShim.story = {
  name: 'deprecated bg shim',
}
