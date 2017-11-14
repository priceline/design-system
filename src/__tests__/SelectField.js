import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, SelectField } from '..'

describe('SelectField', () => {
  test('renders', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <SelectField>Test</SelectField>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with isSelected prop', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <SelectField isSelected>Test</SelectField>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
