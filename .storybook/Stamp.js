import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Stamp, Icon } from '../src'

storiesOf('Stamp', module)
  .add(
    'Default Stamp',
    withInfo({
      inline: true,
      text: 'Use the <Stamp /> component to render a primitive Stamp.'
    })(() => <Stamp color="gray">default stamp</Stamp>)
  )
  .add('All Colors', () => (
    <div>
      <Stamp color="gray" mr={2}>
        default stamp
      </Stamp>
      <Stamp color="blue" mr={2}>
        <Icon name="pin" size={16} mr={1} /> top location
      </Stamp>
      <Stamp color="green" mr={2}>
        <Icon name="discount" size={16} mr={1} /> free cancellation
      </Stamp>
      <Stamp color="red" mr={2}>
        <Icon name="clock" size={16} mr={1} /> just booked
      </Stamp>
      <Stamp color="orange" mr={2}>
        <Icon name="earlyBird" size={16} mr={1} /> early bird flight
      </Stamp>
      <Stamp color="purple" mr={2}>
        <Icon name="trendingUp" size={16} mr={1} /> top booked hotel
      </Stamp>
    </div>
  ))
  .add('gray', () => <Stamp color="gray">blue</Stamp>)
  .add('blue', () => <Stamp color="blue">blue</Stamp>)
  .add('green', () => <Stamp color="green">green</Stamp>)
  .add('red', () => <Stamp color="red">red</Stamp>)
  .add('orange', () => <Stamp color="orange">orange</Stamp>)
  .add('purple', () => <Stamp color="purple">lightOrange</Stamp>)
