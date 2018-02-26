import React from 'react'
import renderer from 'react-test-renderer'
import { InputGroup } from '..'

describe('InputGroup', () => {
  test('renders', () => {
    const json = renderer.create(<InputGroup />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
