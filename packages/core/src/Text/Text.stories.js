import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Text } from '..'

storiesOf('Text', module)
  .add(
    'Typography component',
    withInfo({
      inline: true,
      text:
        'A low-level component for setting font-size, typographic styles, margin, and color',
    })(() => <Text m={3}>Hello</Text>)
  )
  .add('fontSize', () => (
    <div>
      <Text fontSize={6}>Hello 6</Text>
      <Text fontSize={5}>Hello 5</Text>
      <Text fontSize={4}>Hello 4</Text>
      <Text fontSize={3}>Hello 3</Text>
      <Text fontSize={2}>Hello 2</Text>
      <Text fontSize={1}>Hello 1</Text>
      <Text fontSize={0}>Hello 0</Text>
    </div>
  ))
  .add('textAlign', () => (
    <div>
      <Text textAlign='left'>Hello Left</Text>
      <Text textAlign='center'>Hello Center</Text>
      <Text textAlign='right'>Hello Right</Text>
    </div>
  ))
  .add('regular', () => <Text regular>Hello Regular</Text>)
  .add('bold', () => <Text bold>Hello Bold</Text>)
  .add('caps', () => <Text caps>Hello Caps</Text>)
  .add('italic', () => <Text italic>Hello italic</Text>)
  .add('strikethrough', () => <Text.s>Hello Strikethrough</Text.s>)
  .add('margin', () => (
    <Text mt={4} mb={2}>
      Hello Margin
    </Text>
  ))
  .add('color', () => (
    <div>
      <Text color='blue'>Hello Blue</Text>
      <Text color='green'>Hello Green</Text>
    </div>
  ))
  .add('min/maxHeight', () => (
    <div>
      <Text color='blue' minHeight={200} minWidth={300} width={1}>
        Hello Blue
      </Text>
      <Text color='green' maxHeight={200} maxWidth={300}>
        Hello Green
      </Text>
    </div>
  ))
  .add('Hide on > lg breakpoints', () => (
    <div>
      <Text
        color='primary'
        display={[null, null, null, 'none']}
        fontSize={4}
        width={1}
      >
        Hidden text on larger screens
      </Text>
      <Text color='secondary' fontSize={4} width={1}>
        I am always show. But the text above, hides on larger screens.
      </Text>
    </div>
  ))
