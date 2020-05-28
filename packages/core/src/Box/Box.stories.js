import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Box } from '..'

const description =
  'A low-level layout component for setting width, margin, padding, and color'

storiesOf('Box', module)
  .add(
    'Layout component',
    withInfo({
      text: description,
      inline: true,
    })(() => <Box p={3}>Hello</Box>)
  )
  .add('Padding', () => <Box p={3}>Hello</Box>)
  .add('Margin', () => <Box m={3}>Hello</Box>)
  .add('Color', () => (
    <Box p={3} color='blue'>
      Hello
    </Box>
  ))
  .add('Background Color', () => (
    <React.Fragment>
      <Box p={3} color='white' bg='blue'>
        Hello
      </Box>
      <Box p={3} mt={2} color='primary'>
        Hello
      </Box>
      <Box p={3} mt={2} color='error'>
        Hello
      </Box>
      <Box p={3} mt={2} color='warning'>
        Hello
      </Box>
    </React.Fragment>
  ))
  .add('Width', () => (
    <Box p={3} width={1 / 2} color='white' bg='blue'>
      Half Width
    </Box>
  ))
  .add('Pixel Width', () => (
    <Box p={3} width={256} color='white' bg='blue'>
      256px width
    </Box>
  ))
  .add('VW Width', () => (
    <Box p={3} width='50vw' color='white' bg='blue'>
      50vw width
    </Box>
  ))
  .add('Directional Padding', () => (
    <Box p={3}>
      <Box m={1} pt={3} color='white' bg='blue'>
        Padding Top
      </Box>
      <Box m={1} pr={3} color='white' bg='blue'>
        Padding Right
      </Box>
      <Box m={1} pb={3} color='white' bg='blue'>
        Padding Bottom
      </Box>
      <Box m={1} pl={3} color='white' bg='blue'>
        Padding Left
      </Box>
      <Box m={1} px={3} color='white' bg='blue'>
        Padding X-Axis
      </Box>
      <Box m={1} py={3} color='white' bg='blue'>
        Padding Y-Axis
      </Box>
    </Box>
  ))
  .add('Directional Margin', () => (
    <Box p={3}>
      <Box mt={3} color='white' bg='blue'>
        Margin Top
      </Box>
      <Box mr={3} color='white' bg='blue'>
        Margin Right
      </Box>
      <Box mb={3} color='white' bg='blue'>
        Margin Bottom
      </Box>
      <Box ml={3} color='white' bg='blue'>
        Margin Left
      </Box>
      <Box mx={3} color='white' bg='blue'>
        Margin X-Axis
      </Box>
      <Box my={3} color='white' bg='blue'>
        Margin Y-Axis
      </Box>
    </Box>
  ))
  .add('Theme user case: color=text', () => (
    <React.Fragment>
      <Box p={3}>
        <Box mt={3} color='text'>
          color="text" w/o bg prop: retains the original "text" color from
          original color set as backward compatible: expected style w. "text"
          color and white background
        </Box>
        <Box mt={3} color='purple'>
          color="purple" as none "text" color w/o bg prop
        </Box>
      </Box>
      <Box p={5}>
        <Box mt={3} color='text.lightest' bg='background.dark'>
          Theme 1: color="text.lightest" value & bg="background.dark"
        </Box>
        <Box mt={3} color='text' bg='background.lightest'>
          Theme 2: color="text" & "bg"="background.lightest"
        </Box>
      </Box>
    </React.Fragment>
  ))
