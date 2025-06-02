import React from 'react'
import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme/theme'
import { Card } from './Card'

function assertBorderGray(element, borderWidth = 1) {
  expect(element).toHaveStyleRule('border-style', `solid`)
  expect(element).toHaveStyleRule('border-width', `${borderWidth}px`)
  expect(element).toHaveStyleRule('border-color', theme.colors.borderGray)
}

describe('Card', () => {
  test('renders small box shadow with default border', () => {
    render(<Card boxShadowSize='sm' data-testid='card' />)
    const element = screen.getByTestId('card')
    expect(element).toHaveStyleRule('box-shadow', theme.shadows.sm)
    assertBorderGray(element)
    expect(element).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders medium box shadow with default border', () => {
    render(<Card boxShadowSize='md' data-testid='card' />)
    const element = screen.getByTestId('card')
    expect(element).toHaveStyleRule('box-shadow', theme.shadows.md)
    assertBorderGray(element)
    expect(element).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders large box shadow with default border', () => {
    render(<Card boxShadowSize='lg' data-testid='card' />)
    const element = screen.getByTestId('card')
    expect(element).toHaveStyleRule('box-shadow', theme.shadows.lg)
    assertBorderGray(element)
    expect(element).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders xlarge box shadow with default border', () => {
    render(<Card boxShadowSize='xl' data-testid='card' />)
    const element = screen.getByTestId('card')
    expect(element).toHaveStyleRule('box-shadow', theme.shadows.xl)
    assertBorderGray(element)
    expect(element).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders medium box shadow with specified borderWidth', () => {
    render(<Card borderWidth={2} boxShadowSize='md' data-testid='card' />)
    const element = screen.getByTestId('card')
    assertBorderGray(element, 2)
    expect(element).toHaveStyleRule('border-radius', theme.radius)
    expect(element).toHaveStyleRule('box-shadow', theme.shadows.md)
  })

  test('renders medium box shadow with specified borderRadius', () => {
    render(<Card borderRadius={0} boxShadowSize='md' data-testid='card' />)
    const element = screen.getByTestId('card')
    assertBorderGray(element)
    expect(element).toHaveStyleRule('border-radius', '0')
    expect(element).toHaveStyleRule('box-shadow', theme.shadows.md)
  })

  test('renders with as button', () => {
    render(<Card as='button' data-testid='card' />)
    const element = screen.getByTestId('card')
    assertBorderGray(element)
    expect(element).toHaveStyleRule('border-radius', theme.radius)
    expect(element).toHaveStyleRule('box-shadow', undefined)
  })

  test('renders border 0 without warning', () => {
    console.error = jest.fn()
    render(<Card borderWidth={0} data-testid='card' />)
    const element = screen.getByTestId('card')

    expect(element).toHaveStyleRule('border-width', '0')

    expect(
      (console.error as jest.Mock).mock.calls
        .toString()
        .indexOf(
          `Failed prop type: Invalid prop 'borderWidth' of value '0' supplied to 'Card', expected one of [1,2].`
        ) === -1
    )
    ;(console.error as jest.Mock).mockRestore()
  })
})
