import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, DropdownField } from '..'

describe('DropdownField', () => {
  test('renders', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownField>Test</DropdownField>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with isSelected prop', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownField isSelected>Test</DropdownField>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
