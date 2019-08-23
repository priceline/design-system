import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Badge } from '../src'

storiesOf('Badge', module)
  .add(
    'Badge component',
    withInfo({
      inline: true,
      text: 'Use the <Badge /> component to render a primitive badge.'
    })(() => <Badge bg="lightGray">badge</Badge>)
  )
  .add('All colors', () => (
    <div>
      <Badge bg="blue">blue</Badge>
      <Badge bg="lightBlue">lightBlue</Badge>
      <Badge bg="green">green</Badge>
      <Badge bg="lightGreen">lightGreen</Badge>
      <Badge bg="red">red</Badge>
      <Badge bg="lightRed">lightRed</Badge>
      <Badge bg="orange">orange</Badge>
      <Badge bg="text" color="white">
        text (custom)
      </Badge>
      <Badge color="primary">primary</Badge>
      <Badge color="secondary">secondary</Badge>
      <Badge color="warning">warning</Badge>
    </div>
  ))
  .add('default', () => <Badge>default</Badge>)
  .add('blue', () => <Badge bg="blue">blue</Badge>)
  .add('lightBlue', () => <Badge bg="lightBlue">lightBlue</Badge>)
  .add('green', () => <Badge bg="green">green</Badge>)
  .add('lightGreen', () => <Badge bg="lightGreen">lightGreen</Badge>)
  .add('red', () => <Badge bg="red">red</Badge>)
  .add('lightRed', () => <Badge bg="lightRed">lightRed</Badge>)
  .add('orange', () => <Badge bg="orange">orange</Badge>)
  .add('text (custom)', () => (
    <Badge bg="text" color="white">
      text (custom)
    </Badge>
  ))
  .add('lightBlue and text (custom)', () => (
    <Badge bg="lightBlue" color="text">
      lightBlue and text (custom)
    </Badge>
  ))
