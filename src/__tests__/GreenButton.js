import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { GreenButton, theme } from '..'

describe('GreenButton', () => {
  test('renders', () => {
    const json = renderer.create(<GreenButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
