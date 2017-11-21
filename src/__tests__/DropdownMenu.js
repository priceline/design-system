import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownMenu } from '..'

describe('DropdownMenu', () => {
  test('DropdownMenu renders', () => {
    const json = renderer
      .create(<DropdownMenu>DropdownMenu Button</DropdownMenu>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
