import React from 'react'
import { Tooltip } from '../src'

describe('Tooltip', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Tooltip>A Tooltip</Tooltip>).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('top left', () => {
    const json = rendererCreateWithTheme(
      <Tooltip bg="blue" color="white" top left>
        left tooltip
      </Tooltip>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('top center', () => {
    const json = rendererCreateWithTheme(
      <Tooltip bg="black" color="white" top center>
        centered tooltip
      </Tooltip>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('top right', () => {
    const json = rendererCreateWithTheme(
      <Tooltip bg="red" color="white" top right>
        right tooltip
      </Tooltip>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom left', () => {
    const json = rendererCreateWithTheme(
      <Tooltip bottom left>
        left tooltip
      </Tooltip>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom center', () => {
    const json = rendererCreateWithTheme(
      <Tooltip bottom center>
        centered tooltip
      </Tooltip>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom right', () => {
    const json = rendererCreateWithTheme(
      <Tooltip bottom right>
        right tooltip
      </Tooltip>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })
})
