import React from 'react'

import { Card, theme } from '..'

describe('Card', () => {
  test('renders small box shadow with default border', () => {
    const json = rendererCreateWithTheme(<Card boxShadowSize='sm' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.sm)
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.borderGray}`)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders medium box shadow with default border', () => {
    const json = rendererCreateWithTheme(<Card boxShadowSize='md' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.md)
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.borderGray}`)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders large box shadow with default border', () => {
    const json = rendererCreateWithTheme(<Card boxShadowSize='lg' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.lg)
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.borderGray}`)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders xlarge box shadow with default border', () => {
    const json = rendererCreateWithTheme(<Card boxShadowSize='xl' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.xl)
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.borderGray}`)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
  })

  test('renders medium box shadow with specified borderWidth', () => {
    const json = rendererCreateWithTheme(<Card borderWidth={2} boxShadowSize='md' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border', `2px solid ${theme.colors.borderGray}`)
    expect(json).toHaveStyleRule('border-radius', theme.radius)
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.md)
  })

  test('renders medium box shadow with specified borderRadius', () => {
    const json = rendererCreateWithTheme(<Card borderRadius={0} boxShadowSize='md' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border', `1px solid ${theme.colors.borderGray}`)
    expect(json).toHaveStyleRule('border-radius', '0')
    expect(json).toHaveStyleRule('box-shadow', theme.shadows.md)
  })

  test('renders border 0 without warning', () => {
    console.error = jest.fn()
    const json = rendererCreateWithTheme(<Card borderWidth={0} />).toJSON()

    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border', '0')

    expect(
      console.error.mock.calls
        .toString()
        .indexOf(
          `Failed prop type: Invalid prop 'borderWidth' of value '0' supplied to 'Card', expected one of [1,2].`
        ) === -1
    )

    console.error.mockRestore()
  })
})
