import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Tag } from '../src'
import { Icon } from '../src'

storiesOf('Tag', module)
  .add(
    'Tag component',
    withInfo({
      inline: true,
      text: 'Use the <Tag /> component to render a primitive Tag.'
    })(() => <Tag color="gray">tag</Tag>)
  )
  .add('All colors', () => (
    <div>
      <Tag color="gray" mr={2}>
        <Icon name="flame" size="16px" style={{ verticalAlign: 'top' }} /> gray
      </Tag>
      <Tag color="blue" mr={2}>
        <Icon name="flame" size="16px" style={{ verticalAlign: 'top' }} /> blue
      </Tag>
      <Tag color="green" mr={2}>
        <Icon name="flame" size="16px" style={{ verticalAlign: 'top' }} /> green
      </Tag>
      <Tag color="red" mr={2}>
        <Icon name="flame" size="16px" style={{ verticalAlign: 'top' }} /> red
      </Tag>
      <Tag color="orange" mr={2}>
        <Icon name="flame" size="16px" style={{ verticalAlign: 'top' }} />{' '}
        orange
      </Tag>
      <Tag color="purple" mr={2}>
        <Icon name="flame" size="16px" style={{ verticalAlign: 'top' }} />{' '}
        purple
      </Tag>
    </div>
  ))
  .add('gray', () => <Tag color="gray">blue</Tag>)
  .add('blue', () => <Tag color="blue">blue</Tag>)
  .add('green', () => <Tag color="green">green</Tag>)
  .add('red', () => <Tag color="red">red</Tag>)
  .add('orange', () => <Tag color="orange">orange</Tag>)
  .add('purple', () => <Tag color="purple">lightOrange</Tag>)
