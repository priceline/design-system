import React from 'react'
import { Button, theme } from '../src'

describe('Button', () => {
  test('renders', () => {
    const json = renderWithTheme(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('size small sets height and font-size', () => {
    const json = renderWithTheme(<Button size="small" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '12px')
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('size medium sets height and font-size', () => {
    const json = renderWithTheme(<Button size="medium" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '14px')
  })

  test('size large sets height and font-size', () => {
    const json = renderWithTheme(<Button size="large" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '16px')
  })

  test('width prop sets width to 100%', () => {
    const json = renderWithTheme(<Button width={1} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '100%')
  })

  test('disabled prop sets', () => {
    const json = renderWithTheme(<Button disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
  })

  test('without disabled prop sets', () => {
    const json = renderWithTheme(<Button />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.darkBlue, {
      modifier: ':hover'
    })
  })

  describe('variations', () => {
    test('', () => {})
  })

  describe('deprecated props', () => {
    test('shims deprecated fullWidth prop', () => {
      const json = renderWithTheme(<Button fullWidth />).toJSON()
      expect(json).toHaveStyleRule('width', '100%')
    })
  })
})
