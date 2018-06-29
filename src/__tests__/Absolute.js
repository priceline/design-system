import React from 'react'
import renderer from 'react-test-renderer'
import { Absolute, Flag, Icon, Text } from '..'

describe('Absolute', () => {
  test('renders with top, left and zIndex props', () => {
    const json = renderer
      .create(<Absolute top={10} left={0} zIndex={2} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('top', '10px')
    expect(json).toHaveStyleRule('left', '0px')
    expect(json).toHaveStyleRule('z-index', '2')
  })

  test('renders with flag and Child', () => {
    const json = renderer.create(
      <Absolute top={10} left={0}>
        <Flag>
          <Icon name="coupon" /> <Text.span>EXCLUSIVE</Text.span>
        </Flag>
      </Absolute>
    ).toJSON
    expect(json).toMatchSnapshot()
  })
})
