import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { CloseButton } from '../src'

storiesOf('CloseButton', module)
  .add('with click handler', () => (
    <CloseButton onClick={action('clicked')} />
  ))
