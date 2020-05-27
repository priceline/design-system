import React from 'react'
import { storiesOf } from '@storybook/react'
import { RatingBadge } from '..'

storiesOf('RatingBadge', module).add('default', () => (
  <RatingBadge>9.0</RatingBadge>
))
