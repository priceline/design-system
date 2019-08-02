import React from 'react'
import { BlockLink } from '../src'

describe('BlockLink', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(
      <BlockLink>raw text</BlockLink>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
