import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Label } from '..'

describe('Label', () => {
  test('it renders', () => {
    const json = renderer.create(<Label />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
