import React from 'react'
import { theme } from '../theme/theme'
import { Card } from './Card'

function assertBorderGray(json, borderWidth = 1) {
  expect(json).toHaveStyleRule('border-style', `solid`)
  expect(json).toHaveStyleRule('border-width', `${borderWidth}px`)
  expect(json).toHaveStyleRule('border-color', theme.colors.borderGray)
}

describe('Card', () => {
  test('renders small box shadow with default border', () => {
    const json = rendererCreateWithTheme(<Card boxShadowSize='sm' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.sm)
    assertBorderGray(json)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders medium box shadow with default border', () => {
    const json = rendererCreateWithTheme(<Card boxShadowSize='md' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.md)
    assertBorderGray(json)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders large box shadow with default border', () => {
    const json = rendererCreateWithTheme(<Card boxShadowSize='lg' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.lg)
    assertBorderGray(json)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders xlarge box shadow with default border', () => {
    const json = rendererCreateWithTheme(<Card boxShadowSize='xl' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.xl)
    assertBorderGray(json)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders medium box shadow with specified borderWidth', () => {
    const json = rendererCreateWithTheme(<Card borderWidth={2} boxShadowSize='md' />).toJSON()
    expect(json).toMatchSnapshot()
    assertBorderGray(json, 2)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.md)
  })

  test('renders medium box shadow with specified borderRadius', () => {
    const json = rendererCreateWithTheme(<Card borderRadius={0} boxShadowSize='md' />).toJSON()
    expect(json).toMatchSnapshot()
    assertBorderGray(json)
    expect(json).toHaveStyleRule('border-radius', '0')
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.md)
  })

  test('renders with as button', () => {
    const json = rendererCreateWithTheme(<Card as='button' />).toJSON()
    expect(json).toMatchSnapshot()
    assertBorderGray(json)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
    expect(json).toHaveStyleRule('box-shadow', undefined)
  })

  test('renders border 0 without warning', () => {
    console.error = jest.fn()
    const json = rendererCreateWithTheme(<Card borderWidth={0} />).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-width', '0')

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
