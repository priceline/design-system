import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownMenu } from '..'

describe('DropdownMenu', () => {
  test('renders', () => {
    const json = renderer
      .create(<DropdownMenu>DropdownMenu Button 1</DropdownMenu>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders "height" prop', () => {
    const json = renderer
      .create(<DropdownMenu height={50}>DropdownMenu Button 2</DropdownMenu>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders "activeDescendantIndex" prop', () => {
    const json = renderer
      .create(
        <DropdownMenu activeDescendantIndex={1}>
          DropdownMenu Button 3
        </DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
