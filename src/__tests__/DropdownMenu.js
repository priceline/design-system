import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownMenu } from '..'

describe('DropdownMenu', () => {
  test('renders', () => {
    const json = renderer
      .create(<DropdownMenu>DropdownMenu Button</DropdownMenu>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders "activeDescendantIndex" prop', () => {
    const json = renderer
      .create(
        <DropdownMenu activeDescendantIndex={1}>
          DropdownMenu Button
        </DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
