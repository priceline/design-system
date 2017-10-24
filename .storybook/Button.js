import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Button, GreenButton, RedButton, OutlineButton } from '../src'

storiesOf('Button', module)
  .add('Button component', withInfo({
    inline: true,
    text: 'Use the <Button />,  <GreenButton />, <RedButton />,  <OutlineButton/ > components to render a primitive button.'
  })(() => (
    <Button size='large'>
      Button
    </Button>
  )))
  .add('color', () => (
    <div>
      <Button mr={2}>
        Button
      </Button>
      <GreenButton mr={2}>
        GreenButton
      </GreenButton>
      <RedButton mr={2}>
        RedButton
      </RedButton>
      <OutlineButton mr={2}>
        OutlineButton
      </OutlineButton>
    </div>
  ))
  .add('sizes', () => (
    <div>
      <Button size='large' mr={2}>Large</Button>
      <Button size='medium' mr={2}>Medium</Button>
      <Button size='small' mr={2}>Small</Button>
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
