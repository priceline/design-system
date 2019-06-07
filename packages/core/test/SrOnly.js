import React from 'react'
import renderer from 'react-test-renderer'
import { SrOnly } from '../src'

describe('Absolute', () => {
  test('renders with approprite styles to display offscreen', () => {
    const json = renderer.create(<SrOnly />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
