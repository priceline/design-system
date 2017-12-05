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
  .add('blue', () => <Badge bg="blue">blue</Badge>)
  .add('lightBlue', () => <Badge bg="lightBlue">lightBlue</Badge>)
  .add('green', () => <Badge bg="green">green</Badge>)
  .add('lightGreen', () => <Badge bg="lightGreen">lightGreen</Badge>)
  .add('red', () => <Badge bg="red">red</Badge>)
  .add('lightRed', () => <Badge bg="lightRed">lightRed</Badge>)
  .add('orange', () => <Badge bg="orange">orange</Badge>)
  .add('lightOrange', () => <Badge bg="lightOrange">lightOrange</Badge>)
