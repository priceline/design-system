import React from 'react'
import { storiesOf } from '@storybook/react'
import { RawButton } from '../src'

storiesOf('RawButton', module).add('default', () => (
  <RawButton>This is a button</RawButton>
))
