import { Absolute, Text, Relative } from '..'
import { Coupon as CouponIcon } from 'pcln-icons'

describe('Relative', () => {
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
