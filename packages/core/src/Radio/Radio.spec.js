import React from 'react'
import { Radio, ThemeProvider } from '..'

describe('Radio', () => {
  test('Selected, rendering', () => {
    const json = rendererCreateWithTheme(<Radio checked />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Not Selected, rendering', () => {
    const json = rendererCreateWithTheme(<Radio />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Disabled, rendering', () => {
    const json = rendererCreateWithTheme(<Radio disabled />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
