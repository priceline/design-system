import React from 'react'
import renderer from 'react-test-renderer'
import { Tag, theme } from '..'

describe('Tag', () => {
  test('renders', () => {
    const json = renderer.create(<Tag />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('color gray sets color', () => {
    const json = renderer.create(<Tag color="gray" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGray)
    expect(json).toHaveStyleRule('color', theme.colors.gray)
  })

  test('color blue sets color', () => {
    const json = renderer.create(<Tag color="blue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGray)
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('color green sets color', () => {
    const json = renderer.create(<Tag color="green" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGray)
    expect(json).toHaveStyleRule('color', theme.colors.green)
  })

  test('color red sets color', () => {
    const json = renderer.create(<Tag color="red" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGray)
    expect(json).toHaveStyleRule('color', theme.colors.red)
  })

  test('color orange sets color', () => {
    const json = renderer.create(<Tag color="orange" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGray)
    expect(json).toHaveStyleRule('color', theme.colors.orange)
  })

  test('color purple sets color', () => {
    const json = renderer.create(<Tag color="purple" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGray)
    expect(json).toHaveStyleRule('color', theme.colors.purple)
  })
})
