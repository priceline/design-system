import React from 'react'
import renderer from 'react-test-renderer'
import { Absolute, Icon, Text, Relative } from '../src'

describe('Relative', () => {
  test('renders with top, left and zIndex props', () => {
    const json = renderer
      .create(<Relative top={10} left={0} zIndex={2} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('position', 'relative')
    expect(json).toHaveStyleRule('top', '10px')
    expect(json).toHaveStyleRule('left', '0px')
    expect(json).toHaveStyleRule('z-index', '2')
  })

  test('renders with flag and Child', () => {
    const json = renderer.create(
      <Relative top={10} left={0}>
        <Absolute top={10} right={0} zIndex={2}>
          <Icon name="coupon" />
          <Text.span>EXCLUSIVE</Text.span>
        </Absolute>
      </Relative>
    ).toJSON
    expect(json).toMatchSnapshot()
  })
})
