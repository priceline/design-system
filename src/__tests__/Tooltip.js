import React from 'react'
import renderer from 'react-test-renderer'
import { Tooltip, theme } from '..'

describe('Tooltip', () => {
  test('renders', () => {
    const json = renderer
      .create(
        <Tooltip isVisible theme={theme}>
          A Tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('returns null if not visible', () => {
    const json = renderer
      .create(<Tooltip theme={theme}>Tooltip?</Tooltip>)
      .toJSON()
    expect(json).toBe(null)
  })

  test('top left', () => {
    const json = renderer
      .create(
        <Tooltip bg="blue" color="white" theme={theme} isVisible top left>
          left tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('top center', () => {
    const json = renderer
      .create(
        <Tooltip bg="black" color="white" theme={theme} isVisible top center>
          centered tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('top right', () => {
    const json = renderer
      .create(
        <Tooltip bg="red" color="white" theme={theme} isVisible top right>
          right tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom left', () => {
    const json = renderer
      .create(
        <Tooltip theme={theme} isVisible bottom left>
          left tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom center', () => {
    const json = renderer
      .create(
        <Tooltip theme={theme} isVisible bottom center>
          centered tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom right', () => {
    const json = renderer
      .create(
        <Tooltip theme={theme} isVisible bottom right>
          right tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
