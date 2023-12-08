import { Coupon as CouponIcon } from 'pcln-icons'
import React from 'react'
import { Flag } from '../Flag'
import { Text } from '../Text'
import { render } from '../__test__/testing-library'
import { Absolute } from './Absolute'

describe('Absolute', () => {
  test('renders with top, left and zIndex props', () => {
    const { asFragment } = render(
      <Absolute top={10} left={0}>
        <Flag>
          <CouponIcon /> <Text.span>EXCLUSIVE</Text.span>
        </Flag>
      </Absolute>
    )
    expect(asFragment).toMatchInlineSnapshot(`[Function]`)
  })

  test('renders with flag and Child', () => {
    const { asFragment } = render(
      <Absolute top={10} left={0}>
        <Flag>
          <CouponIcon /> <Text.span>EXCLUSIVE</Text.span>
        </Flag>
      </Absolute>
    )
    expect(asFragment).toMatchInlineSnapshot(`[Function]`)
  })
})
