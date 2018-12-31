import React from 'react'
import renderer from 'react-test-renderer'
import {
  Dropdown,
  DropdownButton,
  DropdownList,
  DropdownItem,
  DropdownLink
} from '../src'

describe('Dropdown', () => {
  test('renders', () => {
    const json = renderer
      .create(
        <Dropdown identifier="test-dropdown">
          <DropdownButton>Uncontrolled Dropdown</DropdownButton>
          <DropdownList>
            <DropdownLink>Test Link</DropdownLink>
            <DropdownItem>One</DropdownItem>
            <DropdownItem>Two</DropdownItem>
            <DropdownItem>Three</DropdownItem>
          </DropdownList>
        </Dropdown>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
