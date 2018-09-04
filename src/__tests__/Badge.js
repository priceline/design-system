import React from 'react'
import renderer from 'react-test-renderer'
import { Badge, theme } from '..'

describe('Badge', () => {
  test('renders', () => {
    const json = renderer.create(<Badge />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('bg green sets background-color and color', () => {
    const json = renderer.create(<Badge bg="green" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightGreen sets background-color and color', () => {
    const json = renderer.create(<Badge bg="lightGreen" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(json).toHaveStyleRule('color', theme.colors.darkGreen)
  })

  test('bg red sets background-color and color', () => {
    const json = renderer.create(<Badge bg="red" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg orange sets background-color and color', () => {
    const json = renderer.create(<Badge bg="orange" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test('bg blue sets background-color and color', () => {
    const json = renderer.create(<Badge bg="blue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightBlue sets background-color and color', () => {
    const json = renderer.create(<Badge bg="lightBlue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('non-preset: bg text sets background-color and color white sets color', () => {
    const json = renderer.create(<Badge bg="text" color="white" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.text)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('can escape preset: bg lightBlue sets background-color and color text sets color', () => {
    const json = renderer.create(<Badge bg="lightBlue" color="text" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })
})
