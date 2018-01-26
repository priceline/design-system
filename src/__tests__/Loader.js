import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Loader } from '..'

describe('Loader', () => {
  test('renders', () => {
    const json = renderer.create(<Loader />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
