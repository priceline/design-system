import React from 'react'
import { RedButton, theme } from '../src'

describe('RedButton', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<RedButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('disabled prop sets', () => {
    const json = rendererCreateWithTheme(<RedButton disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', '#fbebeb')
  })

  test('without disabled prop sets', () => {
    const json = rendererCreateWithTheme(<RedButton />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.darkRed, {
      modifier: ':hover'
    })
  })
})
