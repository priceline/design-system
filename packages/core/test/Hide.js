import React from 'react'
import { Hide } from '../src'

describe('Hide', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Hide />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with xs prop', () => {
    const json = rendererCreateWithTheme(<Hide xs />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with sm prop', () => {
    const json = rendererCreateWithTheme(<Hide sm />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with md prop', () => {
    const json = rendererCreateWithTheme(<Hide md />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with lg prop', () => {
    const json = rendererCreateWithTheme(<Hide lg />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with xl prop', () => {
    const json = rendererCreateWithTheme(<Hide xl />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with print prop', () => {
    const json = rendererCreateWithTheme(<Hide print />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
