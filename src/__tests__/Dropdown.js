import React from 'react'
import renderer from 'react-test-renderer'
import { Dropdown } from '..'

describe('Dropdown', () => {
  test('renders', () => {
    const json = renderer.create(<Dropdown>Test</Dropdown>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with icon', () => {
    const json = renderer
      .create(<Dropdown withIcon={false}>Test</Dropdown>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with isExpanded prop', () => {
    const json = renderer
      .create(<Dropdown open>Test with isExpanded</Dropdown>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
