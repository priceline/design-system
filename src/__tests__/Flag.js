import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Flag, theme } from '..'

describe('Flag', () => {
  test('renders', () => {
    const json = renderer.create(<Flag theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with width prop', () => {
    const json = renderer.create(<Flag width={256} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
