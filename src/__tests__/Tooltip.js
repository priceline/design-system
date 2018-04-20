import React from 'react'
import renderer from 'react-test-renderer'
import { Tooltip, theme } from '..'

describe('Tooltip', () => {
  test('renders', () => {
    const json = renderer
      .create(<Tooltip theme={theme}>A Tooltip</Tooltip>)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('top left', () => {
    const json = renderer
      .create(
        <Tooltip bg="blue" color="white" theme={theme} top left>
          left tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('top center', () => {
    const json = renderer
      .create(
        <Tooltip bg="black" color="white" theme={theme} top center>
          centered tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('top right', () => {
    const json = renderer
      .create(
        <Tooltip bg="red" color="white" theme={theme} top right>
          right tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom left', () => {
    const json = renderer
      .create(
        <Tooltip theme={theme} bottom left>
          left tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom center', () => {
    const json = renderer
      .create(
        <Tooltip theme={theme} bottom center>
          centered tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom right', () => {
    const json = renderer
      .create(
        <Tooltip theme={theme} bottom right>
          right tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
  test('bottom right including width', () => {
    const json = renderer
      .create(
        <Tooltip
          theme={theme}
          bottom
          right
          width={['100px', '200px', '300px', '400px']}
        >
          right tooltip
        </Tooltip>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
