import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Tag, Icon } from '../src'

storiesOf('Tag', module)
  .add(
    'Tag component',
    withInfo({
      inline: true,
      text: 'Use the <Tag /> component to render a primitive Tag.'
    })(() => (
      <Tag color="gray">
        <Icon name="flame" size={20} /> gray
      </Tag>
    ))
  )
  .add('All colors', () => (
    <div>
      <Tag color="gray" mr={2}>
        default tag
      </Tag>
      <Tag color="blue" mr={2}>
        <Icon name="pin" size={16} mr={1} /> top location
      </Tag>
      <Tag color="green" mr={2}>
        <Icon name="discount" size={16} mr={1} /> free cancellation
      </Tag>
      <Tag color="red" mr={2}>
        <Icon name="clock" size={16} mr={1} /> just booked
      </Tag>
      <Tag color="orange" mr={2}>
        <Icon name="earlyBird" size={16} mr={1} /> early bird flight
      </Tag>
      <Tag color="purple" mr={2}>
        <Icon name="trendingUp" size={16} mr={1} /> top booked hotel
      </Tag>
    </div>
  ))
  .add('gray', () => <Tag color="gray">blue</Tag>)
  .add('blue', () => <Tag color="blue">blue</Tag>)
  .add('green', () => <Tag color="green">green</Tag>)
  .add('red', () => <Tag color="red">red</Tag>)
  .add('orange', () => <Tag color="orange">orange</Tag>)
  .add('purple', () => <Tag color="purple">lightOrange</Tag>)
