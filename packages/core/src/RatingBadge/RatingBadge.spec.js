import React from 'react'
import { render } from 'testing-library'

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

  test('has correct background and text colors', () => {
    const text = "123"
    const color = 'secondary'

    const { getByText } = render(<RatingBadge color={color}>{text}</RatingBadge>)

    const badge = getByText(text)

    // Need to check the computed styles because .toHaveStyleRule(..) doesn't evaluate the functions
    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.color).toEqual('rgb(255, 255, 255)')
    expect(computedStyles.backgroundColor).toEqual('rgb(0, 170, 0)')
  })
})
