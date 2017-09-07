import React from 'react'
import { storiesOf } from '@storybook/react'
import { OutlineButton } from '../src'

storiesOf('OutlineButton', module)
  .add('default', () => (
    <OutlineButton>
      OutlineButton
    </OutlineButton>
  ))
