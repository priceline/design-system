import { Absolute, Flag, Text } from '..'
import { Coupon as CouponIcon } from 'pcln-icons'

describe('Absolute', () => {
  test('renders with flag and Child', () => {
    const consoleError = console.error
    console.error = jest.fn()

    const json = rendererCreateWithTheme(
      <Absolute top={10} left={0}>
        <Flag>
          <CouponIcon /> <Text.span>EXCLUSIVE</Text.span>
        </Flag>
      </Absolute>
    ).toJSON
    expect(json).toMatchSnapshot()
    console.error = consoleError
  })
})
