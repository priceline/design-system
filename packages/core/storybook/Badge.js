import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Cartesian } from '@compositor/kit'

import { Badge } from '../src'

const sizes = { small: 'small', medium: 'medium' }
const colors = {
  primary: 'primary',
  secondary: 'secondary',
  text: 'text',
  success: 'success',
  error: 'error',
  warning: 'warning',
  alert: 'alert',
  caution: 'caution',
  notify: 'notify',
  pricePrimary: 'pricePrimary',
  priceSecondary: 'priceSecondary',
  promoPrimary: 'promoPrimary',
  promoSecondary: 'promoSecondary',
  border: 'border',
  background: 'background'
}

storiesOf('Badge', module)
  .add(
    'Badge component',
    withInfo({
      inline: true,
      text: 'Use the <Badge /> component to render a primitive badge.'
    })(() => <Badge bg="lightGray">badge</Badge>)
  )
  .add('All', () => (
    <Cartesian
      component={Badge}
      color={Object.keys(colors)}
      size={Object.keys(sizes)}
      m={3}
    >
      Badge
    </Cartesian>
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
