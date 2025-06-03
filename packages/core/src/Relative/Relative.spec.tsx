import { Coupon as CouponIcon } from 'pcln-icons'
import { render, screen } from '../__test__/testing-library'
import { Absolute } from '../Absolute/Absolute'
import { Relative } from '../Relative/Relative'
import { Text } from '../Text/Text'

describe('Relative', () => {
  test('renders with top, left and zIndex props', () => {
    render(<Relative top={10} left={0} zIndex={2} data-testid='relative' />)
    const element = screen.getByTestId('relative')
    expect(element).toHaveStyleRule('position', 'relative')
    expect(element).toHaveStyleRule('top', '10px')
    expect(element).toHaveStyleRule('left', '0px')
    expect(element).toHaveStyleRule('z-index', '2')
  })

  test('renders with flag and Child', () => {
    const { asFragment } = render(
      <Relative top={10} left={0}>
        <Absolute top={10} right={0} zIndex={2}>
          <CouponIcon />
          <Text.span>EXCLUSIVE</Text.span>
        </Absolute>
      </Relative>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
