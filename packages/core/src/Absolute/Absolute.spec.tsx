import { Coupon as CouponIcon } from 'pcln-icons'
import React from 'react'
import { Flag } from '../Flag/Flag'
import { Text } from '../Text/Text'
import { render } from '../__test__/testing-library'
import { Absolute } from './Absolute'

describe('Absolute', () => {
  test('renders with top, left and zIndex props', () => {
    const { asFragment } = render(
      <Absolute top={10} left={0}>
        <Flag>
          <CouponIcon /> <Text>EXCLUSIVE</Text>
        </Flag>
      </Absolute>
    )
    expect(asFragment()).toMatchInlineSnapshot()
  })

  test('renders with flag and Child', () => {
    const { asFragment } = render(
      <Absolute top={10} left={0}>
        <Flag>
          <CouponIcon /> <Text>EXCLUSIVE</Text>
        </Flag>
      </Absolute>
    )
    expect(asFragment()).toMatchInlineSnapshot()
  })
})
