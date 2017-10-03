import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Badge } from '../src'
import { YelowBadge } from '../src'

storiesOf('Badge', module)
  .add('Badge component', withInfo({
    inline: true,
    text: 'Use the <Badge /> component to render a primitive badge.'
  })(() => (
    <Badge bg='blue'>
      INFORMATION
    </Badge>
  )))
  .add('blue', () => (
    <Badge bg='blue'>
      INFORMATION
    </Badge>
  ))
  .add('blue-light', () => (
    <Badge bg='blue-light'>
      INFORMATION
    </Badge>
  ))
  .add('green', () => (
    <Badge bg='green'>
      SUCCESS
    </Badge>
  ))
  .add('green-light', () => (
    <Badge bg='green-light'>
      SUCCESS
    </Badge>
  ))
  .add('red', () => (
    <Badge bg='red'>
      WARNING
    </Badge>
  ))
  .add('red-light', () => (
    <Badge bg='red-light'>
      WARNING
    </Badge>
  ))
  .add('orange', () => (
    <Badge bg='orange'>
      ATTENTION
    </Badge>
  ))
  .add('orange-light', () => (
    <Badge bg='orange-light'>
      ATTENTION 
    </Badge>
  ))