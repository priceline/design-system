import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Button, theme } from '..'

describe('Button', () => {
  test('renders', () => {
    const json = renderer.create(<Button theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('size small sets height and font-size', () => {
    const json = renderer.create(<Button size='small' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '32px')
    expect(json).toHaveStyleRule('font-size', '12px')
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('size medium sets height and font-size', () => {
    const json = renderer.create(<Button size='medium' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '40px')
    expect(json).toHaveStyleRule('font-size', '14px')
  })

  test('size large sets height and font-size', () => {
    const json = renderer.create(<Button size='large' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '48px')
    expect(json).toHaveStyleRule('font-size', '16px')
  })

  test('fullWidth prop sets width to 100%', () => {
    const json = renderer.create(<Button fullWidth theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '100%')
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<Button disabled theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
  })
})
