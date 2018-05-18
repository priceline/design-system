import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { CloseButton } from '../src'

storiesOf('CloseButton', module).add('with click handler', () => (
  <CloseButton color="black" onClick={action('clicked')} />
))
