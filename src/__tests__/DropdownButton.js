import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownButton, ThemeProvider } from '..'

describe('DropdownButton', () => {
  test('renders without any prop', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownButton>Dropdown Button</DropdownButton>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with "open" props', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <DropdownButton open>Dropdown Button</DropdownButton>
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
