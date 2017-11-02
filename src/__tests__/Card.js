import React from 'react'
import renderer from 'react-test-renderer'
import { Card, theme } from '..'

describe('Card', () => {
  test('renders small box shadow with default border', () => {
    const json = renderer
      .create(<Card boxShadowSize="sm" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', '0 0 4px 0 rgba(0,0,0,0.08)')
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
  })

  test('renders medium box shadow with default border', () => {
    const json = renderer
      .create(<Card boxShadowSize="md" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08)'
    )
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
  })

  test('renders large box shadow with default border', () => {
    const json = renderer
      .create(<Card boxShadowSize="lg" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08)'
    )
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
  })

  test('renders xlarge box shadow with default border', () => {
    const json = renderer
      .create(<Card boxShadowSize="xl" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08),0 16px 16px 0 rgba(0,0,0,0.08),0 32px 32px 0 rgba(0,0,0,0.08)'
    )
    expect(json).toHaveStyleRule(
      'border',
      `1px solid ${theme.colors.borderGray}`
    )
  })

  test('renders medium box shadow with specified borderWidth', () => {
    const json = renderer
      .create(<Card borderWidth={2} boxShadowSize="md" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'border',
      `2px solid ${theme.colors.borderGray}`
    )
    expect(json).toHaveStyleRule(
      'box-shadow',
      '0 0 4px 0 rgba(0,0,0,0.08),0 8px 8px 0 rgba(0,0,0,0.08)'
    )
  })
})
