import React from 'react'
import { storiesOf } from '@storybook/react'
import { GreenButton } from '../src'

storiesOf('GreenButton', module)
  .add('default', () => (
    <GreenButton>
      GreenButton
    </GreenButton>
  ))
