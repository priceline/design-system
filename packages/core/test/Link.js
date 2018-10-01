import React from 'react'
import renderer from 'react-test-renderer'
import { Link } from '../src'

describe('Link', () => {
  test('renders', () => {
    const json = renderer.create(<Link>Dummy</Link>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
