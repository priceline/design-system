import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { OutlineButton, theme } from '..'

describe('OutlineButton', () => {
  test('renders', () => {
    const json = renderer.create(<OutlineButton theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
