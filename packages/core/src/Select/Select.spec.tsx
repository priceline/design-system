import React from 'react'

import { Select } from '..'

describe('Select', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Select />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
