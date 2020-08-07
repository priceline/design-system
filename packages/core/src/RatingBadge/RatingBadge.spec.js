import React from 'react'

import { RatingBadge } from '..'

describe('RatingBadge', () => {
  const consoleError = console.error
  console.error = jest.fn()
  afterAll(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<RatingBadge />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
