import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { GreenButton, theme } from '..'

describe('GreenButton', () => {
  test('renders', () => {
    const json = renderer.create(<GreenButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('disabled prop sets', () => {
    const json = renderer
      .create(<GreenButton disabled theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
  })

  test('without disabled prop sets', () => {
    const json = renderer.create(<GreenButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.darkGreen, {
      modifier: ':hover'
    })
  })
})
