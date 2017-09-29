import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Badge, theme } from '..'

describe('Badge', () => {
  test('renders', () => {
    const json = renderer.create(<Badge theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('type success sets background-color and color', () => {
    const json = renderer.create(<Badge type='success' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('type success-light sets background-color and color', () => {
    const json = renderer.create(<Badge type='success-light' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })

  test('type warning sets background-color and color', () => {
    const json = renderer.create(<Badge type='warning' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('type warning-light sets background-color and color', () => {
    const json = renderer.create(<Badge type='warning-light' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })
  
  test('type attention sets background-color and color', () => {
    const json = renderer.create(<Badge type='attention' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('type attention-light sets background-color and color', () => {
    const json = renderer.create(<Badge type='attention-light' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })

  test('type information sets background-color and color', () => {
    const json = renderer.create(<Badge type='information' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('type information-light sets background-color and color', () => {
    const json = renderer.create(<Badge type='information-light' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })
})
