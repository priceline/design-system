import React from 'react'
import renderer from 'react-test-renderer'
import { Stamp, theme } from '..'

describe('Stamp', () => {
  test('renders', () => {
    const json = renderer.create(<Stamp />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('color gray sets text and icon color', () => {
    const json = renderer.create(<Stamp color="gray" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.gray)
  })

  test('color blue sets text and icon color', () => {
    const json = renderer.create(<Stamp color="blue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('color green sets text and icon color', () => {
    const json = renderer.create(<Stamp color="green" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.green)
  })

  test('color red sets text and icon color', () => {
    const json = renderer.create(<Stamp color="red" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.red)
  })

  test('color orange sets text and icon color', () => {
    const json = renderer.create(<Stamp color="orange" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.orange)
  })

  test('color purple sets text and icon color', () => {
    const json = renderer.create(<Stamp color="purple" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.purple)
  })
})
