import React from 'react'
import renderer from 'react-test-renderer'
import { Button, theme } from '..'

describe('Button', () => {
  test('renders', () => {
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('size small sets height and font-size', () => {
    const json = renderer.create(<Button size="small" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '12px')
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('size medium sets height and font-size', () => {
    const json = renderer.create(<Button size="medium" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '14px')
  })

  test('size large sets height and font-size', () => {
    const json = renderer.create(<Button size="large" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('font-size', '16px')
  })

  test('fullWidth prop sets width to 100%', () => {
    const json = renderer.create(<Button fullWidth />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '100%')
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<Button disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
  })

  test('without disabled prop sets', () => {
    const json = renderer.create(<Button />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.darkBlue, {
      modifier: ':hover'
    })
  })
})
