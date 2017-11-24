import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownMenu } from '..'

describe('DropdownMenu', () => {
  test('renders', () => {
    const json = renderer
      .create(<DropdownMenu>DropdownMenu</DropdownMenu>)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('-moz-padding-start', '0')
    expect(json).toHaveStyleRule('-webkit-padding-start', '0')
  })

  test('renders with "id" prop', () => {
    const json = renderer
      .create(
        <DropdownMenu id="test">Dropdown Menu With "id" Prop</DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('-moz-padding-start', '0')
    expect(json).toHaveStyleRule('-webkit-padding-start', '0')
  })

  test('renders with "role" prop', () => {
    const json = renderer
      .create(
        <DropdownMenu role="menu">Dropdown Menu With "role" Prop</DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('-moz-padding-start', '0')
    expect(json).toHaveStyleRule('-webkit-padding-start', '0')
  })

  test('renders with "tabIndex" prop', () => {
    const json = renderer
      .create(
        <DropdownMenu tabIndex={0}>
          Dropdown Menu With "tabIndex" Prop
        </DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('-moz-padding-start', '0')
    expect(json).toHaveStyleRule('-webkit-padding-start', '0')
  })

  test('renders with "ariaLabelledBy" prop with valid value, e.g. "true" or "false"', () => {
    const json = renderer
      .create(
        <DropdownMenu ariaLabelledBy="test">
          Dropdown Menu With "ariaLabelledBy" Prop
        </DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('-moz-padding-start', '0')
    expect(json).toHaveStyleRule('-webkit-padding-start', '0')
  })

  test('renders with "ariaActiveDescendantIndex" prop with invalid value', () => {
    const json = renderer
      .create(
        <DropdownMenu ariaActiveDescendantIndex={5}>
          Dropdown Button With "ariaActiveDescendantIndex" Prop
        </DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('-moz-padding-start', '0')
    expect(json).toHaveStyleRule('-webkit-padding-start', '0')
  })

  test('renders with "overflow" prop', () => {
    const json = renderer
      .create(
        <DropdownMenu overflow="hidden">
          Dropdown Button With Cursor
        </DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('-moz-padding-start', '0')
    expect(json).toHaveStyleRule('-webkit-padding-start', '0')
    expect(json).toHaveStyleRule('overflow', 'hidden')
    expect(json).toHaveStyleRule('-webkit-overflow-scrolling', 'hidden')
  })

  test('renders with "height" prop', () => {
    const json = renderer
      .create(
        <DropdownMenu height="88em">Dropdown Button With Cursor</DropdownMenu>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('-moz-padding-start', '0')
    expect(json).toHaveStyleRule('-webkit-padding-start', '0')
    expect(json).toHaveStyleRule('height', '88em')
  })
})
