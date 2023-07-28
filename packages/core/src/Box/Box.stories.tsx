/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Star } from 'pcln-icons'
import styled from 'styled-components'
import { Box, Flex, Text } from '..'
import { argTypes, defaultArgs } from './Box.stories.args'
import { colorNames, colorSchemeNames, shadows } from '../storybook/args'
import { DeprecatedColorsNote } from '../storybook/utils/DeprecatedColorsNote'

export default {
  title: 'core / Box',
  component: Box,
  args: defaultArgs,
  argTypes,

  parameters: {
    docs: {
      description: {
        component: `A low-level layout component for setting color, display, height, margin, maxHeight, maxWidth, minHeight, minWidth, padding, size, textAlign, and width.`,
      },
    },
  },
}

const Template = (args) => (
  <Box {...args}>
    <Text p={3}>{args.children || 'Hello!'}</Text>
  </Box>
)

export const _Box = Template.bind({})

export const DisplayAndSize = Template.bind({})
DisplayAndSize.storyName = 'Display and Size'
DisplayAndSize.args = {
  color: 'alert.base',
  display: ['none', null, 'block'],
  size: 250,
}

export const Padding = Template.bind({})
Padding.args = {
  p: 4,
  color: 'background.base',
  children: 'This box should have 32px of padding',
}

export const Height = Template.bind({})
Height.args = {
  color: 'warning.base',
  height: ['250px', '350px', '450px', '550px'],
  width: ['150px', '250px', '350px', '450px'],
}

export const MaxAndMinValues = Template.bind({})
MaxAndMinValues.storyName = 'Min and Max Values'
MaxAndMinValues.args = {
  color: 'priceSecondary.base',
  maxHeight: ['300px', null, '400px', null, '500px'],
  maxWidth: ['300px', null, '400px', null, '500px'],
  minHeight: ['100px', null, '200px', null, '300px'],
  minWidth: ['300px', null, '200px', null, '100px'],
  height: 600,
  width: 700,
  children: 'This box should have a height and width of <= 500px',
}

export const Margin = Template.bind({})
Margin.args = {
  m: 3,
  color: 'background.base',
}

export const Color = Template.bind({})
Color.args = {
  color: 'primary.base',
}

export const RawColorNameProp = () => (
  <>
    <DeprecatedColorsNote />
    {colorNames.map((color) => (
      <Box color={color} m={2} key={color}>
        <Text>{color}</Text>
      </Box>
    ))}
  </>
)

export const BoxShadowSizeProp = () => (
  <>
    {shadows.map((shadowSize) => (
      <Box boxShadowSize={shadowSize} m={5} key={shadowSize}>
        {shadowSize}
      </Box>
    ))}
  </>
)

export const BoxShadow = Template.bind({})
BoxShadow.args = {
  boxShadowSize: 'overlay-lg',
}

export const Size = Template.bind({})
Size.args = {
  color: 'primary.base',
  size: 200,
}

const DimsChildren = () => <Text color='text.lightest'>Box Dimensions</Text>

export const Width = Template.bind({})
Width.args = {
  color: 'primary.base',
  width: 1 / 2,
  children: <DimsChildren />,
}

export const PixelWidth = Template.bind({})
PixelWidth.args = {
  color: 'primary.base',
  width: 256,
  children: <DimsChildren />,
}

export const VwWidth = Template.bind({})
VwWidth.storyName = 'Viewport Width unit'
VwWidth.args = {
  color: 'primary.base',
  width: '75vw',
  children: <DimsChildren />,
}

export const DirectionalPadding = () => (
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
)

export const DirectionalMargin = () => (
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
)

export const Overflow = () => (
  <Box p={3}>
    <Box overflow='hidden' maxHeight='100px' maxWidth='100px' mb={3} color='background.darkest' bg='primary'>
      This is a box with hidden overflow. This is a box with hidden overflow.
    </Box>
    <Box overflow='clip' maxHeight='100px' maxWidth='100px' mb={3} color='background.darkest' bg='primary'>
      This is a box with clip overflow. This is a box with clip overflow.
    </Box>
    <Box overflow='scroll' maxHeight='100px' maxWidth='100px' mb={3} color='background.darkest' bg='primary'>
      This is a box with scroll overflow. This is a box with scroll overflow.
    </Box>
    <Box overflow='auto' maxHeight='100px' maxWidth='100px' mb={3} color='background.darkest' bg='primary'>
      This is a box with auto overflow. This is a box with auto overflow.
    </Box>
    <Box overflow='visible' maxHeight='100px' maxWidth='100px' mb={3} color='background.darkest' bg='primary'>
      This is a box with visible overflow. This is a box with visible overflow.
    </Box>
  </Box>
)

export const ThemeUserCaseColorText = () => (
  <React.Fragment>
    <Box p={3}>
      <Box mt={3} color='text'>
        color="text" w/o bg prop: retains the original "text" color from original color set as backward
        compatible: expected style w. "text" color and white background
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
)
ThemeUserCaseColorText.storyName = 'Theme user case: color=text'

export const CustomColor = Template.bind({})
CustomColor.args = {
  color: 'magenta',
  bg: '#ebfa',
}

const ColorSchemeWithAttrs = styled(Box).attrs(() => ({
  colorScheme: 'cautionLight',
}))``

const ColorSchemesTemplate = () => {
  return (
    <React.Fragment>
      {colorSchemeNames.map((colorScheme) => (
        <Box m={3} p={3} colorScheme={colorScheme} key={colorScheme}>
          <Flex flexDirection='column'>
            <Text textStyle='heading1' mb={2}>
              {colorScheme}
            </Text>
            <Flex alignItems='center'>
              <Text>Children inherit colors from the color scheme by default</Text>
              <Star />
            </Flex>

            <Flex alignItems='center'>
              <Text color='text'>Custom text and icon colors override the color scheme</Text>
              <Star color='alert' />
            </Flex>
          </Flex>
        </Box>
      ))}
      <ColorSchemeWithAttrs m={3} p={3}>
        <Text>Using attrs and colorScheme</Text>
      </ColorSchemeWithAttrs>
    </React.Fragment>
  )
}
export const ColorSchemes = ColorSchemesTemplate.bind({})
ColorSchemesTemplate.args = {}
