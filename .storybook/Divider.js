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
    <Divider />
  )))
  .add('Margin', () => (
    <Divider m={3} />
  ))
  .add('Width', () => (
    <Divider
      p={3}
      width={1/2} />
  ))
  .add('Pixel Width', () => (
    <Divider
      width={256} />
  ))
  .add('VW Width', () => (
    <Divider
      width='50vw' />
  ))
  .add('Border Color', () => (
    <Divider m={3} borderColor='blue' />
  ))
  .add('Directional Margin', () => (
    <div>
      <Divider mt={3} />
      <Divider mr={3} />
      <Divider mb={3} />
      <Divider ml={3} />
      <Divider mx={3} />
      <Divider my={3} />
    </div>
  ))
