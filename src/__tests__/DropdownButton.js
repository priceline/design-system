import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownButton } from '..'

describe('DropdownButton', () => {
  test('DropdownButton without any prop renders', () => {
    const json = renderer
      .create(<DropdownButton>Dropdown Button</DropdownButton>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('DropdownButton with "open" renders', () => {
    const json = renderer
      .create(<DropdownButton open>Dropdown Button</DropdownButton>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
