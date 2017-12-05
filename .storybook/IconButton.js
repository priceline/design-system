import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { IconButton } from '../src'

storiesOf('IconButton', module)
  .add('Close Button', () => (
    <IconButton name="closeLight" onClick={action('clicked')} />
  ))
  .add('Disabled Close Button', () => (
    <IconButton disabled name="closeLight" onClick={action('clicked')} />
  ))
