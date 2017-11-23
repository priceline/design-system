import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownItem, ThemeProvider } from '..'

describe('DropdownItem', () => {
  test('renders with itemIdenx prop', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownItem itemIndex={1} isSelected>
            Test 1
          </DropdownItem>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with isSelected prop', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownItem isSelected>Test 2</DropdownItem>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders without any prop', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownItem>Test 3</DropdownItem>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
