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
    expect(json).toHaveStyleRule('background-color', theme.colors.green0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })

  test('bg red sets background-color and color', () => {
    const json = renderer.create(<Badge bg="red" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightRed sets background-color and color', () => {
    const json = renderer.create(<Badge bg="lightRed" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })

  test('bg orange sets background-color and color', () => {
    const json = renderer.create(<Badge bg="orange" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('bg lightOrange sets background-color and color', () => {
    const json = renderer.create(<Badge bg="lightOrange" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
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
    expect(json).toHaveStyleRule('background-color', theme.colors.blue0)
    expect(json).toHaveStyleRule('color', theme.colors.black)
  })
})
