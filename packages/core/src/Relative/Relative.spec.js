import React from 'react'

import { Absolute, Text, Relative } from '..'
import { Coupon as CouponIcon } from 'pcln-icons'

describe('Relative', () => {
  test('renders with top, left and zIndex props', () => {
    const json = rendererCreateWithTheme(
      <Relative top={10} left={0} zIndex={2} />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('position', 'relative')
    expect(json).toHaveStyleRule('top', '10px')
    expect(json).toHaveStyleRule('left', '0')
    expect(json).toHaveStyleRule('z-index', '2')
  })

  test('renders with flag and Child', () => {
    const json = rendererCreateWithTheme(
      <Relative top={10} left={0}>
        <Absolute top={10} right={0} zIndex={2}>
          <CouponIcon />
          <Text.span>EXCLUSIVE</Text.span>
        </Absolute>
      </Relative>
    ).toJSON
    expect(json).toMatchSnapshot()
  })
})
