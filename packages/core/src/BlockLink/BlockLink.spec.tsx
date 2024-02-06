import React from 'react'
import { BlockLink } from './BlockLink'

describe('BlockLink', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<BlockLink>raw text</BlockLink>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
