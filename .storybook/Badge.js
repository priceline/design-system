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
    })(() => <Badge bg="lightGray">INFORMATION</Badge>)
  )
  .add('blue', () => <Badge bg="blue">INFORMATION</Badge>)
  .add('lightBlue', () => <Badge bg="lightBlue">INFORMATION</Badge>)
  .add('green', () => <Badge bg="green">SUCCESS</Badge>)
  .add('lightGreen', () => <Badge bg="lightGreen">SUCCESS</Badge>)
  .add('red', () => <Badge bg="red">WARNING</Badge>)
  .add('lightRed', () => <Badge bg="lightRed">WARNING</Badge>)
  .add('orange', () => <Badge bg="orange">ATTENTION</Badge>)
  .add('lightOrange', () => <Badge bg="lightOrange">ATTENTION</Badge>)
