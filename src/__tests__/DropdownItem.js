import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, DropdownItem } from '..'

describe('DropdownItem', () => {
  test('renders', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownItem>Test</DropdownItem>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with isSelected prop', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownItem isSelected>Test</DropdownItem>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
