import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Link } from '..'

describe('Link', () => {
  test('renders', () => {
    const json = renderer.create(<Link>Dummy</Link>).toJSON()
    expect(json).toMatchSnapshot()
  })
})
