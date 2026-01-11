import type { Meta, StoryObj } from '@storybook/react-vite'
import { Star } from 'pcln-icons'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex/Flex'
import { Text } from '../Text/Text'
import { colorSchemeNames } from '../storybook/args'
import type { BoxProps } from './Box'
import { Box } from './Box'
import { argTypes, defaultArgs } from './Box.stories.args'

const meta = {
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
} satisfies Meta<typeof Box>

export default meta

type Story = StoryObj<BoxProps>

const Template: Story = {
  args: defaultArgs,
  render: (args) => (
    <Box {...args}>
      <Text p={3}>Hello!</Text>
    </Box>
  ),
}

export const _Box: Story = {
  ...Template,
}

export const DisplayAndSize: Story = {
  ...Template,
  name: 'Display and Size',
  args: {
    ...Template.args,
    color: 'alert.base',
    display: ['none', null, 'block'],
    size: 250,
  },
}

export const Padding: Story = {
  ...Template,
  args: {
    ...Template.args,
    p: 4,
    color: 'background.base',
  },
}

export const Height: Story = {
  ...Template,
  args: {
    ...Template.args,
    color: 'warning.base',
    height: ['250px', '350px', '450px', '550px'],
    width: ['150px', '250px', '350px', '450px'],
  },
}

export const MaxAndMinValues: Story = {
  ...Template,
  name: 'Min and Max Values',
  args: {
    ...Template.args,
    color: 'priceSecondary.base',
    maxHeight: ['300px', null, '400px', null, '500px'],
    maxWidth: ['300px', null, '400px', null, '500px'],
    minHeight: ['100px', null, '200px', null, '300px'],
    minWidth: ['300px', null, '200px', null, '100px'],
  },
}

export const Margin: Story = {
  ...Template,
  args: {
    ...Template.args,
    m: 3,
    color: 'background.base',
  },
}

export const Color: Story = {
  ...Template,
  args: {
    ...Template.args,
    color: 'primary.base',
  },
}

export const BoxShadow: Story = {
  ...Template,
  args: {
    ...Template.args,
    boxShadowSize: 'overlay-lg',
  },
}

export const Size: Story = {
  ...Template,
  args: {
    ...Template.args,
    color: 'primary.base',
    size: 200,
  },
}

const DimsChildren = () => <Text color='text.lightest'>Box Dimensions</Text>

export const Width: Story = {
  ...Template,
  args: {
    ...Template.args,
    color: 'primary.base',
    width: 1 / 2,
    children: <DimsChildren />,
  },
}

export const PixelWidth: Story = {
  ...Template,
  args: {
    ...Template.args,
    color: 'primary.base',
    width: 256,
    children: <DimsChildren />,
  },
}

export const VwWidth: Story = {
  ...Template,
  name: 'Viewport Width unit',
  args: {
    ...Template.args,
    color: 'primary.base',
    width: '75vw',
    children: <DimsChildren />,
  },
}

export const DirectionalPadding: Story = {
  render: () => (
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
  ),
}

export const DirectionalMargin: Story = {
  render: () => (
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
  ),
}

export const Overflow: Story = {
  render: () => (
    <Box p={3}>
      <Box
        overflow='hidden'
        maxHeight='100px'
        maxWidth='100px'
        mb={3}
        color='background.darkest'
        bg='primary'
      >
        This is a box with hidden overflow. This is a box with hidden overflow.
      </Box>
      <Box overflow='clip' maxHeight='100px' maxWidth='100px' mb={3} color='background.darkest' bg='primary'>
        This is a box with clip overflow. This is a box with clip overflow.
      </Box>
      <Box
        overflow='scroll'
        maxHeight='100px'
        maxWidth='100px'
        mb={3}
        color='background.darkest'
        bg='primary'
      >
        This is a box with scroll overflow. This is a box with scroll overflow.
      </Box>
      <Box overflow='auto' maxHeight='100px' maxWidth='100px' mb={3} color='background.darkest' bg='primary'>
        This is a box with auto overflow. This is a box with auto overflow.
      </Box>
      <Box
        overflow='visible'
        maxHeight='100px'
        maxWidth='100px'
        mb={3}
        color='background.darkest'
        bg='primary'
      >
        This is a box with visible overflow. This is a box with visible overflow.
      </Box>
    </Box>
  ),
}

export const ThemeUserCaseColorText: Story = {
  name: 'Theme user case: color=text',
  render: () => (
    <React.Fragment>
      <Box p={3}>
        <Box mt={3} color='text'>
          color=&quot;text&quot; w/o bg prop: retains the original &quot;text&quot; color from original color
          set as backward compatible: expected style w. &quot;text&quot; color and white background
        </Box>
        <Box mt={3} color='purple'>
          color=&quot;purple&quot; as none &quot;text&quot; color w/o bg prop
        </Box>
      </Box>
      <Box p={5}>
        <Box mt={3} color='text.lightest' bg='background.dark'>
          Theme 1: color=&quot;text.lightest&quot; value & bg=&quot;background.dark&quot;
        </Box>
        <Box mt={3} color='text' bg='background.lightest'>
          Theme 2: color=&quot;text&quot; & bg=&quot;background.lightest&quot;
        </Box>
      </Box>
    </React.Fragment>
  ),
}

export const CustomColor: Story = {
  ...Template,
  args: {
    ...Template.args,
    color: 'magenta',
    bg: '#ebfa',
  },
}

const ColorSchemeWithAttrs = styled(Box).attrs(() => ({
  colorScheme: 'cautionLight',
}))``

export const ColorSchemes: Story = {
  render: () => (
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
  ),
}
