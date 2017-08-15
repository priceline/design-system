import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex, Box } from '../src'

storiesOf('Flex', module)
  .add('Basic', () => (
    <Flex align='center'>
      <Box width={1/2} p={3} color='white' bg='blue'>Flex</Box>
      <Box width={1/2} p={1} color='white' bg='green'>Box</Box>
    </Flex>
  ))
  .add('Wrap', () => (
    <Flex wrap>
      <Box width={[ 1, 1/2 ]} p={3} color='white' bg='blue'>Flex</Box>
      <Box width={[ 1, 1/2 ]} p={1} color='white' bg='green'>Wrap</Box>
    </Flex>
  ))
  .add('Justify', () => (
    <Flex justify='space-around'>
      <Box width={1/3} p={2} color='white' bg='blue'>Flex</Box>
      <Box width={1/3} p={2} color='white' bg='green'>Justify</Box>
    </Flex>
  ))
