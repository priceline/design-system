import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, DropdownItem } from '..'

describe('DropdownItem', () => {
  test('renders', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownItem itemIdenx={1}>Test</DropdownItem>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with isSelected prop', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownItem isSelected itemIdenx={1}>
            Test
          </DropdownItem>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
