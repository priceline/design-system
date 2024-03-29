import React from 'react'
import { Box } from '../Box/Box'
import { Flex } from './Flex'

export default {
  title: 'Flex',
  component: Flex,
}

export const Basic = () => (
  <Flex alignItems='center'>
    <Box width={1 / 2} p={3} color='white' bg='blue'>
      Flex
    </Box>
    <Box width={1 / 2} p={1} color='white' bg='green'>
      Box
    </Box>
  </Flex>
)

export const Wrap = () => (
  <Flex flexWrap='wrap'>
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
