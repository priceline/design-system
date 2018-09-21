import React from 'react'
import renderer from 'react-test-renderer'
import { Truncate } from '..'

describe('Truncate', () => {
  test('renders', () => {
    const json = renderer.create(<Truncate>renders</Truncate>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('generates styles', () => {
    const json = renderer.create(<Truncate>generates styles</Truncate>).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('overflow', 'hidden')
    expect(json).toHaveStyleRule('white-space', 'nowrap')
    expect(json).toHaveStyleRule('text-overflow', 'ellipsis')
  })
})
