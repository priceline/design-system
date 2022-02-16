import React from 'react'
import { render } from '../__test__/testing-library'

import { RatingBadge } from '..'

const text = '123'

describe('RatingBadge', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const { asFragment } = render(<RatingBadge>5</RatingBadge>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('has correct background and text colors', () => {
    const color = 'secondary'

    const { getByText } = render(<RatingBadge color={color}>{text}</RatingBadge>)

    const badge = getByText(text)

    // Need to check the computed styles because .toHaveStyleRule(..) doesn't evaluate the functions
    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.color).toBe('rgb(255, 255, 255)')
    expect(computedStyles.backgroundColor).toBe('rgb(0, 170, 0)')
  })

  test('renders with bg and color', () => {
    const color = 'secondary'
    const bg = 'primary'

    const { getByText } = render(
      <RatingBadge bg={bg} color={color}>
        {text}
      </RatingBadge>
    )

    const badge = getByText(text)

    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.color).toBe('rgb(0, 170, 0)')
    expect(computedStyles.backgroundColor).toBe('rgb(0, 104, 239)')
  })

  test('renders bg and no color', () => {
    const bg = 'secondary'

    const { getByText } = render(<RatingBadge bg={bg}>{text}</RatingBadge>)

    const badge = getByText(text)

    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.backgroundColor).toBe('rgb(0, 170, 0)')
    expect(computedStyles.color).toBe('rgb(255, 255, 255)')
  })

  test('renders with no bg and color', () => {
    const color = 'secondary'

    const { getByText } = render(<RatingBadge color={color}>{text}</RatingBadge>)

    const badge = getByText(text)

    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.backgroundColor).toBe('rgb(0, 170, 0)')
    expect(computedStyles.color).toBe('rgb(255, 255, 255)')
  })

  test('renders default color with no props', () => {
    const { getByText } = render(<RatingBadge>{text}</RatingBadge>)

    const badge = getByText(text)

    const computedStyles = window.getComputedStyle(badge)
    expect(computedStyles.color).toBe('rgb(255, 255, 255)')
    expect(computedStyles.backgroundColor).toBe('rgb(246, 128, 19)')
  })
})
