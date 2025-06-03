import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme/theme'
import { Divider } from './Divider'

describe('Divider', () => {
  test('renders', () => {
    const { asFragment } = render(<Divider />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('width prop sets width', () => {
    render(<Divider width={1 / 2} data-testid='divider' />)
    const element = screen.getByTestId('divider')
    expect(element).toHaveStyleRule('width', '50%')
  })

  test('m prop sets margin', () => {
    render(<Divider m={2} data-testid='divider' />)
    const element = screen.getByTestId('divider')
    expect(element).toHaveStyleRule('margin', theme.space[2])
  })

  test('borderColor prop sets borderColor', () => {
    render(<Divider borderColor='blue' data-testid='divider' />)
    const element = screen.getByTestId('divider')
    expect(element).toHaveStyleRule('border-color', theme.colors.blue)
  })

  test('override default margin left and right', () => {
    render(<Divider mx={2} data-testid='divider' />)

    expect(screen.getByTestId('divider')).toHaveStyleRule('margin-left', theme.space[2])
    expect(screen.getByTestId('divider')).toHaveStyleRule('margin-right', theme.space[2])
  })
})
