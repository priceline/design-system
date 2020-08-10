import React from 'react'

import { RatingBadge } from '..'

describe('RatingBadge', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<RatingBadge />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
