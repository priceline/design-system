import React from 'react'
import rendererCreateWithTheme from '../../test/rendererCreateWithTheme'

import { SrOnly } from '..'

describe('Absolute', () => {
  test('renders with approprite styles to display offscreen', () => {
    const json = rendererCreateWithTheme(<SrOnly />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
