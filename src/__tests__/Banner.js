import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Banner, theme } from '..'

describe('Banner', () => {
  test('renders with no props other than theme', () => {
    const json = renderer.create(<Banner theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGray)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test('renders with default palette', () => {
    const json = renderer.create(<Banner palette='default' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.default.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.default.color)
  })

  test('renders with information palette', () => {
    const json = renderer.create(<Banner palette='information' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.information.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.information.color)
  })

  test('renders with success palette', () => {
    const json = renderer.create(<Banner palette='success' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.success.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.success.color)
  })

  test('renders with attention palette', () => {
    const json = renderer.create(<Banner palette='attention' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.attention.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.attention.color)
  })

  test('renders with warning palette', () => {
    const json = renderer.create(<Banner palette='warning' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.warning.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.warning.color)
  })

  test('renders with default palette alias', () => {
    const json = renderer.create(<Banner palette='gray' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.default.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.default.color)
  })

  test('renders with information palette alias', () => {
    const json = renderer.create(<Banner palette='blue' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.information.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.information.color)
  })

  test('renders with success palette alias', () => {
    const json = renderer.create(<Banner palette='green' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.success.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.success.color)
  })

  test('renders with attention palette alias', () => {
    const json = renderer.create(<Banner palette='orange' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.attention.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.attention.color)
  })

  test('renders with warning palette alias', () => {
    const json = renderer.create(<Banner palette='red' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.warning.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.warning.color)
  })
})