import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { RedButton, theme } from '..'

describe('RedButton', () => {
  test('renders', () => {
    const json = renderer.create(<RedButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
