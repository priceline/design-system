import React from 'react'

import { Truncate } from '..'

describe('Truncate', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Truncate>renders</Truncate>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('generates styles', () => {
    const json = rendererCreateWithTheme(<Truncate>generates styles</Truncate>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('overflow', 'hidden')
    expect(json).toHaveStyleRule('white-space', 'nowrap')
    expect(json).toHaveStyleRule('text-overflow', 'ellipsis')
  })
})
