import React from 'react'
import { SrOnly } from './SrOnly'

describe('Absolute', () => {
  test('renders with approprite styles to display offscreen', () => {
    const json = rendererCreateWithTheme(<SrOnly />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
