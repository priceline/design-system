import React from 'react'

import { BlockLink } from '..'

describe('BlockLink', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(
      <BlockLink>raw text</BlockLink>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
