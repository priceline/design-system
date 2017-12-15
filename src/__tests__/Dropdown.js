import React from 'react'
import renderer from 'react-test-renderer'
import { Dropdown } from '..'

describe('Dropdown', () => {
  test('renders', () => {
    const json = renderer.create(<Dropdown>Dropdown</Dropdown>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with "flexDirection" prop', () => {
    const json = renderer
      .create(<Dropdown flexDirection="column">Flex Column Dropdown</Dropdown>)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('flex-direction', 'column')
  })
})
