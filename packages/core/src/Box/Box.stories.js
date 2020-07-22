/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import { Box, Text } from '..'

const description =
  'A low-level layout component for setting color, display, height, margin, maxHeight, maxWidth, minHeight, minWidth, padding, size, textAlign, and width.'

storiesOf('Box', module)
  .add(
    'Layout component',
    withInfo({
      text: description,
      inline: true,
    })(() => <Box p={3}>Hello</Box>)
  )
  .add('Display and size', () => (
    <Box color='alert.base' display={['none', null, 'block']} p={3} size={250}>
      Hello
    </Box>
  ))
  .add('Padding', () => <Box p={3}>Hello</Box>)
  .add('Height', () => (
    <Box
      color='warning.base'
      height={[250, 350, 450, 550]}
      width={[150, 250, 350, 450]}
    />
  ))
  .add('Max and min values', () => (
    <Box
      color='priceSecondary.base'
      maxHeight={[300, null, 400, null, 500]}
      maxWidth={[300, null, 400, null, 500]}
      minHeight={[100, null, 200, null, 300]}
      minWidth={[300, null, 200, null, 100]}
    />
  ))
  .add('Margin', () => <Box m={3}>Hello</Box>)
  .add('Color', () => (
    <Box p={3} color='primary.base'>
      Hello
    </Box>
  ))
  .add('Box shadow', () => (
    <div>
      {['sm', 'md', 'lg', 'xl'].map((boxShadow) => (
        <Box
          p={2}
          mb={'42px'}
          color='blue'
          boxShadowSize={boxShadow}
          key={boxShadow}
        >
          box-shadow: <Text bold>{boxShadow}</Text>
        </Box>
      ))}
    </div>
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
  .add('Size', () => <Box p={3} color='secondary.base' size={200} />)
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
