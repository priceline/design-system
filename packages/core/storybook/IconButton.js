import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { IconButton } from '../src'

storiesOf('IconButton', module)
  .add('default', () => <IconButton name="Calendar" title="Choose date" />)
  .add('with color', () => (
    <IconButton name="Calendar" color="blue" title="Choose date" />
  ))
  .add('with size', () => (
    <IconButton name="Calendar" size={64} title="Choose date" />
  ))
  .add('with other elements', () => (
    <IconButton name="Calendar" size={64} title="Choose date" />
  ))
