import React from 'react'
import renderer from 'react-test-renderer'
import { Select } from '..'

describe('Select', () => {
  test('renders', () => {
    const json = renderer.create(<Select>Test</Select>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with isExpanded prop', () => {
    const json = renderer
      .create(<Select isExpanded>Test with isExpanded</Select>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
