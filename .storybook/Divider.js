import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Divider } from '../src'

const description = '<hr /> with settings for padding, margin, width, and borderColor'

storiesOf('Divider', module)
  .add('Divider component', withInfo({
    text: description,
    inline: true
  })(() => (
    <Divider borderColor='lightGray' />
  )))
  .add('Margin', () => (
    <Divider m={3} borderColor='blue' />
  ))
  .add('Width', () => (
    <Divider
      p={3}
      width={1/2}
      borderColor='lightGray' />
  ))
  .add('Pixel Width', () => (
    <Divider
      width={256}
      borderColor='lightGray' />
  ))
  .add('VW Width', () => (
    <Divider
      width='50vw'
      borderColor='lightGray' />
  ))
  .add('Directional Margin', () => (
    <div>
      <Divider mt={3} borderColor='lightGray' />
      <Divider mr={3} borderColor='lightGray' />
      <Divider mb={3} borderColor='lightGray' />
      <Divider ml={3} borderColor='lightGray' />
      <Divider mx={3} borderColor='lightGray' />
      <Divider my={3} borderColor='lightGray' />
    </div>
  ))
