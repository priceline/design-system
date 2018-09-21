import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { IconButton } from '../src'

storiesOf('IconButton', module)
  .add('default', () => <IconButton name="calendar" title="Choose date" />)
  .add('with color', () => (
    <IconButton name="calendar" color="blue" title="Choose date" />
  ))
  .add('with size', () => (
    <IconButton name="calendar" size={64} title="Choose date" />
  ))
  .add('with other elements', () => (
    <IconButton name="calendar" size={64} title="Choose date" />
  ))
