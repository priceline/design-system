import React from 'react'
import { Radio, ThemeProvider } from '../src'

describe('Radio', () => {
  test('Selected, rendering', () => {
    const json = rendererCreateWithTheme(
      <ThemeProvider>
        <Radio checked />
      </ThemeProvider>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Not Selected, rendering', () => {
    const json = rendererCreateWithTheme(
      <ThemeProvider>
        <Radio />
      </ThemeProvider>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Disabled, rendering', () => {
    const json = rendererCreateWithTheme(
      <ThemeProvider>
        <Radio disabled />
      </ThemeProvider>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
