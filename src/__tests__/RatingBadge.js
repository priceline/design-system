import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { RatingBadge, theme } from '..'

describe('RatingBadge', () => {
  test('renders', () => {
    const json = renderer.create(<RatingBadge />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
