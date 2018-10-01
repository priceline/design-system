import React from 'react'
import renderer from 'react-test-renderer'
import { Label } from '../src'

describe('Label', () => {
  test('it renders', () => {
    const json = renderer.create(<Label />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Label hidden renders', () => {
    const json = renderer.create(<Label hidden />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Label nowrap renders', () => {
    const json = renderer.create(<Label nowrap />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
