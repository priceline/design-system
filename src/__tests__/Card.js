import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Card, theme } from '..'

describe('Card', () => {
  test('renders small box shadow', () => {
    const json = renderer.create(<Card boxShadowSize='sm' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', '0 0 4px 0 rgba(0,0,0,0.08)')
  })

  test('renders medium box shadow', () => {
    const json = renderer.create(<Card boxShadowSize='md' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', '0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08)')
  })

  test('renders large box shadow', () => {
    const json = renderer.create(<Card boxShadowSize='lg' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', '0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08)')
  })

  test('renders xlarge box shadow', () => {
    const json = renderer.create(<Card boxShadowSize='xl' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', '0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08),0 32px 32px 0 rgba(0,0,0,0.08)')
  })
})