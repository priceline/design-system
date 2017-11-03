import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { IconButton } from '../src'

storiesOf('IconButton', module).add('Index', () => (
  <IconButton name="closeLight" onClick={action('clicked')} />
))
