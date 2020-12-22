import React from 'react'
import { RatingBadge } from '..'

export default {
  title: 'RatingBadge',
  component: RatingBadge,
}

export const Default = () => <RatingBadge>9.0</RatingBadge>

Default.story = {
  name: 'default',
}
