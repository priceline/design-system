import React from 'react'
import { Cartesian } from '@compositor/kit'

import { Badge } from '..'

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
  background: 'background',
}

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Use the <Badge /> component to render a primitive badge.',
      },
    },
  },
}

export const BadgeComponent = () => <Badge bg='lightGray'>badge</Badge>

export const All = () => (
  <Cartesian
    component={Badge}
    color={Object.keys(colors)}
    size={Object.keys(sizes)}
    m={3}
  >
    Badge
  </Cartesian>
)

export const Default = () => <Badge>default</Badge>

Default.story = {
  name: 'default',
}

export const Blue = () => <Badge bg='blue'>blue</Badge>

Blue.story = {
  name: 'blue',
}

export const LightBlue = () => <Badge bg='lightBlue'>lightBlue</Badge>

LightBlue.story = {
  name: 'lightBlue',
}

export const Green = () => <Badge bg='green'>green</Badge>

Green.story = {
  name: 'green',
}

export const LightGreen = () => <Badge bg='lightGreen'>lightGreen</Badge>

LightGreen.story = {
  name: 'lightGreen',
}

export const Red = () => <Badge bg='red'>red</Badge>

Red.story = {
  name: 'red',
}

export const LightRed = () => <Badge bg='lightRed'>lightRed</Badge>

LightRed.story = {
  name: 'lightRed',
}

export const Orange = () => <Badge bg='orange'>orange</Badge>

Orange.story = {
  name: 'orange',
}

export const TextCustom = () => (
  <Badge bg='text' color='white'>
    text (custom)
  </Badge>
)

TextCustom.story = {
  name: 'text (custom)',
}

export const LightBlueAndTextCustom = () => (
  <Badge bg='lightBlue' color='text'>
    lightBlue and text (custom)
  </Badge>
)

LightBlueAndTextCustom.story = {
  name: 'lightBlue and text (custom)',
}
