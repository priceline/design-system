import React from 'react'
import rendererCreateWithTheme from '../../test/rendererCreateWithTheme'

import { RatingBadge } from '..'

describe('RatingBadge', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<RatingBadge />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
