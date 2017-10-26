import React from 'react'
import { storiesOf } from '@storybook/react'
import { GuestRating } from '../src'

storiesOf('GuestRating', module).add('default', () => (
  <GuestRating>9.0</GuestRating>
))
