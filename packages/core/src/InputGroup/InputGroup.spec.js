import React from 'react'

import { InputGroup } from '..'

describe('InputGroup', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<InputGroup />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
