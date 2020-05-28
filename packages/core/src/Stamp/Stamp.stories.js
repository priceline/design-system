import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Cartesian } from '@compositor/kit'

import { Stamp, Icon, Text } from '..'

const sizes = { small: 'small', medium: 'medium' }
const variations = { outline: 'outline', fill: 'fill' }
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

storiesOf('Stamp', module)
  .add(
    'Default Stamp',
    withInfo({
      inline: true,
      text:
        'Use the <Stamp /> component to subtly display attributes alongside listing cells and on product detail pages. Use it in conjunction with an <Icon /> component to give it more context. An Icon placed within a Stamp will inherit the assigned Stamp color.',
    })(() => <Stamp>default stamp</Stamp>)
  )
  .add('All', () => (
    <Cartesian
      component={Stamp}
      color={Object.keys(colors)}
      variation={Object.keys(variations)}
      size={Object.keys(sizes)}
      m={3}
    >
      <>
        <Icon name='Pin' mr={1} /> top location
      </>
    </Cartesian>
  ))
  .add('Custom Background and Border Color', () => (
    <div>
      <Stamp
        color='background.lightest'
        bg='primary'
        borderColor='primary'
        mr={2}
      >
        custom border and background
      </Stamp>
      <Stamp
        color='error'
        bg='background.lightest'
        borderColor='primary'
        mr={2}
      >
        custom border and background
      </Stamp>
    </div>
  ))
  .add('Custom Text Size', () => (
    <div>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={0}>Yorkie</Text>
      </Stamp>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={1}>Jack Russell</Text>
      </Stamp>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={2}>Golden Retriever</Text>
      </Stamp>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={3}>Doberman</Text>
      </Stamp>
      <Stamp color='white' bg='blue' borderColor='blue' mr={2}>
        <Text fontSize={4}>Malamute</Text>
      </Stamp>
    </div>
  ))
