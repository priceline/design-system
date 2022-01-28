import React from 'react'
import { Box, Text } from '..'
import { defaultArgs, argTypes } from './Text.stories.args'
import { textStylesValues } from '../utils'

export default {
  title: 'Typography / Text',
  component: Text,

  args: defaultArgs,
  argTypes,

  parameters: {
    docs: {
      description: {
        component: 'A low-level component for setting font-size, typographic styles, margin, and color',
      },
    },
  },
}

const Template = (args) => (
  <Box>
    <Text m={3} {...args}>
      Hello there.
    </Text>
    <Text m={3} {...args}>
      The quick brown fox jumps over the lazy dog to discover new deals every day.
    </Text>
  </Box>
)

export const Typography = Template.bind({})

export const ResponsiveTypography = Template.bind({})
ResponsiveTypography.args = {
  textStyle: ['heading6', 'heading5', 'heading4', 'heading3', 'heading2', 'heading1'],
}

export const TypographyScale = () => (
  <Box>
    {textStylesValues.map((textStyle) => (
      <Box mb={5} key={textStyle}>
        <Text textStyle={textStyle}>
          The quick brown fox jumps over the lazy dog to discover new deals every day.
        </Text>
        <Text my={2} color='text.tint' textStyle='subheading5'>
          {textStyle}
        </Text>
      </Box>
    ))}
  </Box>
)

export const FontSize = () => (
  <div>
    <Text fontSize={6}>Hello 6</Text>
    <Text fontSize={5}>Hello 5</Text>
    <Text fontSize={4}>Hello 4</Text>
    <Text fontSize={3}>Hello 3</Text>
    <Text fontSize={2}>Hello 2</Text>
    <Text fontSize={1}>Hello 1</Text>
    <Text fontSize={0}>Hello 0</Text>
  </div>
)

export const FontStyle = () => (
  <div>
    <Text fontStyle='italic'>Hello Italic</Text>
    <Text fontStyle='oblique'>Hello Oblique</Text>
  </div>
)
export const TextAlign = () => (
  <div>
    <Text textAlign='left'>Hello Left</Text>
    <Text textAlign='center'>Hello Center</Text>
    <Text textAlign='right'>Hello Right</Text>
  </div>
)

export const TextDecoration = () => (
  <div>
    <Text textDecoration='overline'>Hello Overline</Text>
    <Text textDecoration='line-through'>Hello Line-Through</Text>
    <Text textDecoration='underline'>Hello Underline</Text>
  </div>
)

export const Regular = () => <Text regular>Hello Regular</Text>

export const Bold = () => <Text bold>Hello Bold</Text>

export const Caps = () => <Text caps>Hello Caps</Text>

export const Italic = () => <Text italic>Hello italic</Text>

export const Strikethrough = () => <Text.s>Hello Strikethrough</Text.s>

export const Margin = () => (
  <Text mt={4} mb={2}>
    Hello Margin
  </Text>
)

export const Color = () => (
  <div>
    <Text color='blue'>Hello Blue</Text>
    <Text color='green'>Hello Green</Text>
  </div>
)

export const MinMaxHeight = () => (
  <div>
    <Text color='blue' minHeight={200} minWidth={300} width={1}>
      Hello Blue
    </Text>
    <Text color='green' maxHeight={200} maxWidth={300}>
      Hello Green
    </Text>
  </div>
)

export const HideOnLgBreakpoints = () => (
  <div>
    <Text color='primary' display={[null, null, null, 'none']} fontSize={4} width={1}>
      Hidden text on larger screens
    </Text>
    <Text color='secondary' fontSize={4} width={1}>
      I am always show. But the text above, hides on larger screens.
    </Text>
  </div>
)

export const Span = () => (
  <Text>
    Just some text <Text.span bold>Some span text</Text.span> Just some more text
  </Text>
)

export const Paragraph = () => (
  <Text.p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.
  </Text.p>
)
