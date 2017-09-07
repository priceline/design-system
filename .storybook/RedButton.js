import React from 'react'
import { storiesOf } from '@storybook/react'
import { RedButton } from '../src'

storiesOf('RedButton', module)
  .add('default', () => (
    <RedButton>
      RedButton
    </RedButton>
  ))
