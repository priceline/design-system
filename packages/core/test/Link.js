import React from 'react'
import { Link } from '../src'

describe('Link', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Link>Dummy</Link>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
