import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box, Card, Flag } from '../src'

storiesOf('Flag', module)
  .add('Default', () => (
    <Box p={3}>
      <Card py={0}>
        <Flag mt={2}>Hello Flag</Flag>
        <Box p={3}>Hello</Box>
      </Card>
    </Box>
  ))
  .add('Colors', () => (
    <Box p={3}>
      <Card pb={3}>
        <Flag width={192} mt={2} bg="orange">
          <b>Hello</b> Orange
        </Flag>
        <Flag mt={3} bg="blue">
          Hello Blue
        </Flag>
        <Flag mt={3} bg="purple">
          Hello Purple
        </Flag>
      </Card>
    </Box>
  ))
