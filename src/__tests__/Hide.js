import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Hide, theme } from '..'

describe('Hide', () => {
  test('renders', () => {
    const json = renderer.create(<Hide />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
