import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, theme, Flex, Box } from '../src'

storiesOf('Button', module)
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
