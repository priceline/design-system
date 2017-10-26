import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { GuestRating, theme } from '..'

describe('GuestRating', () => {
  test('renders', () => {
    const json = renderer.create(<GuestRating />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
