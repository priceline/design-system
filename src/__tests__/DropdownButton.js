import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownButton } from '..'

describe('DropdownButton', () => {
  test('renders without any prop', () => {
    const json = renderer
      .create(<DropdownButton>Dropdown Button</DropdownButton>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with "open" props', () => {
    const json = renderer
      .create(<DropdownButton open>Dropdown Button</DropdownButton>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
