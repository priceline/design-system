import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Badge, theme } from '..'

describe('Badge', () => {
  test('renders', () => {
    const json = renderer.create(<Badge theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('bg green sets background-color and color', () => {
    const json = renderer.create(<Badge bg='green' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg green-light sets background-color and color', () => {
    const json = renderer.create(<Badge bg='green-light' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })

  test('bg red sets background-color and color', () => {
    const json = renderer.create(<Badge bg='red' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg red-light sets background-color and color', () => {
    const json = renderer.create(<Badge bg='red-light' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })
  
  test('bg orange sets background-color and color', () => {
    const json = renderer.create(<Badge bg='orange' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg orange-light sets background-color and color', () => {
    const json = renderer.create(<Badge bg='orange-light' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })

  test('bg blue sets background-color and color', () => {
    const json = renderer.create(<Badge bg='blue' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg blue-light sets background-color and color', () => {
    const json = renderer.create(<Badge bg='blue-light' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })
})
