import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownItem, theme } from '..'

describe('DropdownItem', () => {
  test('renders with itemIdenx prop', () => {
    const json = renderer
      .create(
        <DropdownItem itemIndex={1} isSelected>
          Test 1
        </DropdownItem>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with itemIndex prop', () => {
    const json = renderer
      .create(<DropdownItem itemIndex={8}>Test 2</DropdownItem>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with role prop', () => {
    const json = renderer
      .create(<DropdownItem role="menuitem">Test 2</DropdownItem>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with tabIndex prop', () => {
    const json = renderer
      .create(<DropdownItem tabIndex={-1}>Test 2</DropdownItem>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with isSelected prop', () => {
    const json = renderer
      .create(<DropdownItem isSelected>Test 2</DropdownItem>)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors['blue'])
    expect(json).toHaveStyleRule('color', theme.colors['white'])
  })
})
