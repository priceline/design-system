import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hide, Flex } from '../src'

storiesOf('Hide', module).add('Hide', () => (
  <Flex justify="space-between">
    <Hide xs p={2} bg="red">
      Hide xs
    </Hide>
    <Hide sm p={2} bg="orange">
      Hide sm
    </Hide>
    <Hide md p={2} bg="green">
      Hide md
    </Hide>
    <Hide lg p={2} bg="blue">
      Hide lg
    </Hide>
    <Hide xl p={2} bg="purple">
      Hide xl
    </Hide>
  </Flex>
))
