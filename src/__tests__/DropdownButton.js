import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownButton } from '..'

describe('<DropdownButton /> tested by react-test-renderer', () => {
  test('renders without any prop', () => {
    const json = renderer
      .create(<DropdownButton>Dropdown Button</DropdownButton>)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '100%')
    expect(json).toHaveStyleRule('height', '100%')
    expect(json).toHaveStyleRule('min-height', '44px')
  })

  test('renders with "id" prop', () => {
    const json = renderer
      .create(
        <DropdownButton id="test">
          Dropdown Button With "id" Prop
        </DropdownButton>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with "ariaHaspopup" prop', () => {
    const json = renderer
      .create(
        <DropdownButton ariaHaspopup="true">
          Dropdown Button With "ariaHaspopup" Prop
        </DropdownButton>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with "ariaControls" prop', () => {
    const json = renderer
      .create(
        <DropdownButton ariaControls="test">
          Dropdown Button With "ariaControls" Prop
        </DropdownButton>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with "ariaExpanded" prop with valid value, e.g. "true" or "false"', () => {
    const json = renderer
      .create(
        <DropdownButton ariaExpanded="true">
          Dropdown Button With "ariaExpanded" Prop
        </DropdownButton>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with "ariaExpanded" prop with invalid value', () => {
    const json = renderer
      .create(
        <DropdownButton ariaExpanded="invalid">
          Dropdown Button With "ariaExpanded" Prop
        </DropdownButton>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with "cursor" prop', () => {
    const json = renderer
      .create(
        <DropdownButton cursor="wait">
          Dropdown Button With "cursor" Prop
        </DropdownButton>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('cursor', 'wait')
  })
})
