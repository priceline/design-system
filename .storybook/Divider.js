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
    <Divider borderColor='lighterGray' />
  )))
  .add('Padding', () => (
    <Divider p={3} borderColor='blue' />
  ))
  .add('Margin', () => (
    <Divider m={3} borderColor='blue' />
  ))
  .add('Width', () => (
    <Divider
      p={3}
      width={1/2}
      borderColor='lighterGray' />
  ))
  .add('Pixel Width', () => (
    <Divider
      p={3}
      width={256}
      borderColor='lighterGray' />
  ))
  .add('VW Width', () => (
    <Divider
      p={3}
      width='50vw'
      borderColor='lighterGray' />
  ))
  .add('Directional Padding', () => (
    <div>
      <Divider m={1} pt={3} borderColor='lighterGray' />
      <Divider m={1} pr={3} borderColor='lighterGray' />
      <Divider m={1} pb={3} borderColor='lighterGray' />
      <Divider m={1} pl={3} borderColor='lighterGray' />
      <Divider m={1} px={3} borderColor='lighterGray' />
      <Divider m={1} py={3} borderColor='lighterGray' />
    </div>
  ))
  .add('Directional Margin', () => (
    <div>
      <Divider mt={3} borderColor='lighterGray' />
      <Divider mr={3} borderColor='lighterGray' />
      <Divider mb={3} borderColor='lighterGray' />
      <Divider ml={3} borderColor='lighterGray' />
      <Divider mx={3} borderColor='lighterGray' />
      <Divider my={3} borderColor='lighterGray' />
    </div>
  ))
