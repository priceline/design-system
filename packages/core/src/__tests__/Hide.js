import React from 'react'
import renderer from 'react-test-renderer'
import { Hide } from '..'

describe('Hide', () => {
  test('renders', () => {
    const json = renderer.create(<Hide />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with xs prop', () => {
    const json = renderer.create(<Hide xs />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with sm prop', () => {
    const json = renderer.create(<Hide sm />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with md prop', () => {
    const json = renderer.create(<Hide md />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with lg prop', () => {
    const json = renderer.create(<Hide lg />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with xl prop', () => {
    const json = renderer.create(<Hide xl />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
