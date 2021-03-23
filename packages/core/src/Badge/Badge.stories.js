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

export const BadgeComponent = () => <Badge color='background.light'>badge</Badge>

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

export const Primary = () => <Badge color='primary'>primary</Badge>

Primary.story = {
  name: 'blue',
}

export const PrimaryLight= () => <Badge color='primary.light'>primary.light</Badge>

PrimaryLight.story = {
  name: 'primary.light',
}

export const Secondary = () => <Badge color='secondary'>secondary</Badge>

Secondary.story = {
  name: 'secondary',
}

export const SecondaryLight = () => <Badge color='secondary.light'>secondary.light</Badge>

SecondaryLight.story = {
  name: 'secondary.light',
}

export const Error = () => <Badge color='error'>error</Badge>

Error.story = {
  name: 'error',
}

export const ErrorLight = () => <Badge color='error.light'>error.light</Badge>

ErrorLight.story = {
  name: 'error.light',
}

export const Alert = () => <Badge color='alert'>alert</Badge>

Alert.story = {
  name: 'alert',
}
