import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Flag } from '..'

describe('Flag', () => {
  test('renders', () => {
    const json = renderer.create(<Flag />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with width prop', () => {
    const json = renderer.create(<Flag width={256} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
