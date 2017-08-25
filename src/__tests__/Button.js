import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Button, GreenButton, RedButton, OutlineButton, theme } from '..'

describe('Button', () => {
  test('renders', () => {
    const json = renderer.create(<Button theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders a button with text', () => {
    const json = renderer.create(<Button theme={theme}>Hello</Button>).toJSON()
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

  test('renders GreenButton', () => {
    const json = renderer.create(<GreenButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders RedButton', () => {
    const json = renderer.create(<RedButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders OutlineButton', () => {
    const json = renderer.create(<OutlineButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('renders OutlineButton with custom color', () => {
    const json = renderer.create(<OutlineButton color='purple' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule('color', 'purple')
  })

  test('radius prop sets a custom button radius', () => {
    const json = renderer.create(<Button radius='5px' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-radius', '5px')
  })
})
