import React from 'react'
import { OutlineButton, theme } from '../src'
import styled from 'styled-components'

describe('OutlineButton', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<OutlineButton />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('disabled prop sets', () => {
    const json = rendererCreateWithTheme(<OutlineButton disabled />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', '#e8f2ff')
  })

  test('without disabled prop sets', () => {
    const json = rendererCreateWithTheme(<OutlineButton />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue, {
      modifier: ':hover'
    })
  })

  test('renders with nested style', () => {
    const Component = styled.div`
      ${OutlineButton} {
        color: red;
      }
    `
    const wrapper = rendererCreateWithTheme(
      <Component>
        <OutlineButton />
      </Component>
    ).toJSON()
    expect(wrapper).toMatchSnapshot()
  })
})
