import React from 'react'
import renderer from 'react-test-renderer'
import { RedButton, theme } from '../src'

describe('RedButton', () => {
  test('renders', () => {
    const json = renderer.create(<RedButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('disabled prop sets', () => {
    const json = renderer.create(<RedButton disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
  })

  test('without disabled prop sets', () => {
    const json = renderer.create(<RedButton />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.darkRed, {
      modifier: ':hover'
    })
  })
})
