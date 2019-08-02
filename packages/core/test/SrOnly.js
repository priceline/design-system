import React from 'react'
import { SrOnly } from '../src'

describe('Absolute', () => {
  test('renders with approprite styles to display offscreen', () => {
    const json = rendererCreateWithTheme(<SrOnly />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
