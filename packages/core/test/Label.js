import React from 'react'
import { Label } from '../src'

describe('Label', () => {
  test('it renders', () => {
    const json = rendererCreateWithTheme(<Label />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Label hidden renders', () => {
    const json = rendererCreateWithTheme(<Label hidden />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Label nowrap renders', () => {
    const json = rendererCreateWithTheme(<Label nowrap />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
