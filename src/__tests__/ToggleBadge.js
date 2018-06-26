import React from 'react'
import renderer from 'react-test-renderer'
import { ToggleBadge, theme } from '..'

describe('ToggleBadge', () => {
  test('selected ToggleBadge renders with default props', () => {
    const json = renderer.create(<ToggleBadge selected />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('unselected ToggleBadge renders with default props', () => {
    const json = renderer.create(<ToggleBadge />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('selected one with background-color and text color passed as props hover state', () => {
    const json = renderer
      .create(<ToggleBadge selected bg="green" color="red" />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.red)
  })
})
