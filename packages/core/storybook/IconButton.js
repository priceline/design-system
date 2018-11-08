import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { IconButton } from '../src'
import CalendarIcon from 'pcln-icons/lib/Calendar'

storiesOf('IconButton', module)
  .add('default', () => (
    <IconButton title="Choose date">
      <CalendarIcon />
    </IconButton>
  ))
  .add('with color', () => (
    <IconButton title="Choose date">
      <CalendarIcon color="blue" />
    </IconButton>
  ))
  .add('with size', () => (
    <IconButton title="Choose date">
      <CalendarIcon size={64} />
    </IconButton>
  ))
