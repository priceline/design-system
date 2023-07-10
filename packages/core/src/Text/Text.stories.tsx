import React from 'react'
import styled from 'styled-components'
import { Box, Divider, Text } from '..'
import { defaultArgs, argTypes } from './Text.stories.args'
import { getTextColorOn, textStylesValues } from '../utils'

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

export const TextStyle = Template.bind({})

export const TextStyleGallery = () => (
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

export const TextStyleResponsive = Template.bind({})
TextStyleResponsive.args = {
  textStyle: ['heading6', 'heading5', 'heading4', 'heading3', 'heading2', 'heading1'],
}

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

const ReactiveText = styled(Text)`
  color: ${(props) => getTextColorOn(props.backgroundColor, props.lightColor, props.darkColor)(props)};
`

const ReactiveColorTemplate = (args) => (
  <>
    <Text mb={2}>
      Uses the <code>getTextColorOn</code> utility
    </Text>
    <Box color={args.backgroundColor} p={2} width={300}>
      <ReactiveText {...args}>{args.children}</ReactiveText>
    </Box>
    <Box color='primary.light' p={2} width={300}>
      <ReactiveText {...args} backgroundColor='background.lightest'>
        {args.children}
      </ReactiveText>
    </Box>
  </>
)

export const ReactiveColor = ReactiveColorTemplate.bind({})
ReactiveColor.args = {
  children: 'Hello There',
  backgroundColor: 'primary.base',
  lightColor: 'text.lightest',
  darkColor: 'text.base',
}

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

export const ResponsiveTypographyVsFontSize = () => (
  <>
    <Text>Actual (heading):</Text>
    <Text textStyle={['heading2', null, null, 'heading1']}>Words and stuff heading textStyle</Text>
    <Text>Expected (heading):</Text>
    <Text bold fontSize={['5', null, null, '6']}>
      Words and stuff heading fontSize
    </Text>

    <Divider />

    <Text>Actual (subheading):</Text>
    <Text textStyle={['subheading4', null, null, 'subheading3']}>Words and stuff subheading textStyle</Text>
    <Text>Expected (subheading):</Text>
    <Text fontSize={['3', null, null, '4']}>Words and stuff subheading</Text>
  </>
)
