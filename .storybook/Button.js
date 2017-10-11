import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button } from '../src'

storiesOf('Button', module)
  .add('Button component', withInfo({
    inline: true,
    text: 'Use the <Button /> component to render a primitive button.'
  })(() => (
    <Button size='large'>
      Button
    </Button>
  )))
  .add('default', () => (
    <Button>
      Button
    </Button>
  ))
  .add('sizes', () => (
    <div>
      <Button size='large'>Large</Button>
      <Button size='medium'>Medium</Button>
      <Button size='small'>Small</Button>
    </div>
  ))
  .add('fullWidth', () => (
    <Button fullWidth>Full Width</Button>
  ))
  .add('disabled', () => (
    <Button disabled>
      Disabled
    </Button>
  ))
