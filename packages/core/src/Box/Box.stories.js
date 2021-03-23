import React from 'react'
import { withInfo } from '@storybook/addon-info'

import { Box, Text } from '..'

const description =
  'A low-level layout component for setting color, display, height, margin, maxHeight, maxWidth, minHeight, minWidth, padding, size, textAlign, and width.'

export default {
  title: 'Box',
}

export const LayoutComponent = withInfo({
  text: description,
  inline: true,
})(() => <Box p={3}>Hello</Box>)

LayoutComponent.story = {
  name: 'Layout component',
  component: Box,
}

export const DisplayAndSize = () => (
  <Box color='alert.base' display={['none', null, 'block']} p={3} size={250}>
    Hello
  </Box>
)

DisplayAndSize.story = {
  name: 'Display and size',
}

export const Padding = () => <Box p={3}>Hello</Box>

export const Height = () => (
  <Box
    color='warning.base'
    height={[250, 350, 450, 550]}
    width={[150, 250, 350, 450]}
  />
)

export const MaxAndMinValues = () => (
  <Box
    color='priceSecondary.base'
    maxHeight={[300, null, 400, null, 500]}
    maxWidth={[300, null, 400, null, 500]}
    minHeight={[100, null, 200, null, 300]}
    minWidth={[300, null, 200, null, 100]}
  />
)

MaxAndMinValues.story = {
  name: 'Max and min values',
}

export const Margin = () => <Box m={3}>Hello</Box>

export const Color = () => (
  <Box p={3} color='primary.base'>
    Hello
  </Box>
)

export const BoxShadow = () => (
  <div>
    {['sm', 'md', 'lg', 'xl'].map((boxShadow) => (
      <Box
        p={2}
        mb={'42px'}
        color='primary'
        boxShadowSize={boxShadow}
        key={boxShadow}
      >
        box-shadow: <Text bold>{boxShadow}</Text>
      </Box>
    ))}
  </div>
)

BoxShadow.story = {
  name: 'Box shadow',
}

export const BackgroundColor = () => (
  <React.Fragment>
    <Box p={3} color='primary'>
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
)

export const Size = () => <Box p={3} color='secondary.base' size={200} />

export const Width = () => (
  <Box p={3} width={1 / 2} color='primary'>
    Half Width
  </Box>
)

export const PixelWidth = () => (
  <Box p={3} width={256} color='primary'>
    256px width
  </Box>
)

export const VwWidth = () => (
  <Box p={3} width='50vw' color='primary'>
    50vw width
  </Box>
)

VwWidth.story = {
  name: 'VW Width',
}

export const DirectionalPadding = () => (
  <Box p={3}>
    <Box m={1} pt={3} color='primary'>
      Padding Top
    </Box>
    <Box m={1} pr={3} color='primary'>
      Padding Right
    </Box>
    <Box m={1} pb={3} color='primary'>
      Padding Bottom
    </Box>
    <Box m={1} pl={3} color='primary'>
      Padding Left
    </Box>
    <Box m={1} px={3} color='primary'>
      Padding X-Axis
    </Box>
    <Box m={1} py={3} color='primary'>
      Padding Y-Axis
    </Box>
  </Box>
)

export const DirectionalMargin = () => (
  <Box p={3}>
    <Box mt={3} color='primary'>
      Margin Top
    </Box>
    <Box mr={3} color='primary'>
      Margin Right
    </Box>
    <Box mb={3} color='primary'>
      Margin Bottom
    </Box>
    <Box ml={3} color='primary'>
      Margin Left
    </Box>
    <Box mx={3} color='primary'>
      Margin X-Axis
    </Box>
    <Box my={3} color='primary'>
      Margin Y-Axis
    </Box>
  </Box>
)
