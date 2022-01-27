import React from 'react'
import { Badge, theme } from '..'

describe('Badge', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<Badge />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders small', () => {
    const json = rendererCreateWithTheme(<Badge size='small' />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('bg green sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='green' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightGreen sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='lightGreen' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(json).toHaveStyleRule('color', theme.colors.darkGreen)
  })

  test('bg red sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='red' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightRed sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='lightRed' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(json).toHaveStyleRule('color', theme.colors.darkRed)
  })

  test('bg orange sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='orange' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test('bg blue sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='blue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightBlue sets background-color and color', () => {
    const json = rendererCreateWithTheme(<Badge bg='lightBlue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('non-preset: bg text sets background-color and color white sets color', () => {
    const json = rendererCreateWithTheme(<Badge bg='text' color='white' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.text)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('can escape preset: bg lightBlue sets background-color and color text sets color', () => {
    const json = rendererCreateWithTheme(<Badge bg='lightBlue' color='text' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })
})
