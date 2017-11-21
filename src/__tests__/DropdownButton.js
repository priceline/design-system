import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownButton } from '..'

describe('DropdownButton', () => {
  test('DropdownButton renders', () => {
    const json = renderer
      .create(<DropdownButton>Dropdown Button</DropdownButton>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
