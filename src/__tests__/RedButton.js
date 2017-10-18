import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { RedButton, theme } from '..'

describe('RedButton', () => {
  test('renders', () => {
    const json = renderer.create(<RedButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
  
  test('disabled prop sets', () => {
    const json = renderer.create(<RedButton disabled theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
  })

  test('without disabled prop sets', () => {
    const json = renderer.create(<RedButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.darkRed, {
      modifier: ':hover',
    })
  })

})
