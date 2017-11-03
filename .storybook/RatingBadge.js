import React from 'react'
import { storiesOf } from '@storybook/react'
import { RatingBadge } from '../src'

storiesOf('RatingBadge', module).add('default', () => (
  <RatingBadge>9.0</RatingBadge>
))
