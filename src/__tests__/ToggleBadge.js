import React from 'react'
import renderer from 'react-test-renderer'
import { ToggleBadge, theme } from '..'

describe('ToggleBadge', () => {
  test('selected one has light blue background-color', () => {
    const json = renderer.create(<ToggleBadge selected />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.light)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('unselected one has white background-color and hover state', () => {
    const json = renderer.create(<ToggleBadge />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })
})
