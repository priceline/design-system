import { render, screen } from '../__test__/testing-library'
import { Stamp } from '../Stamp/Stamp'
import { theme } from '../theme/theme'

describe('Stamp', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const { asFragment } = render(<Stamp />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders small size', () => {
    const { asFragment } = render(<Stamp size='small' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders medium fill', () => {
    const { asFragment } = render(<Stamp variation='fill' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders small fill', () => {
    const { asFragment } = render(<Stamp size='small' variation='fill' />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('color gray sets text and icon color', () => {
    render(
      <Stamp color='gray' data-testid='stamp'>
        Stamp
      </Stamp>
    )
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('color', theme.colors.gray)
  })

  test('color blue sets text and icon color', () => {
    render(
      <Stamp color='blue' data-testid='stamp'>
        Stamp
      </Stamp>
    )
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('color', theme.colors.blue)
  })

  test('color green sets text and icon color', () => {
    render(
      <Stamp color='green' data-testid='stamp'>
        Stamp
      </Stamp>
    )
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('color', theme.colors.green)
  })

  test('color red sets text and icon color', () => {
    render(
      <Stamp color='red' data-testid='stamp'>
        Stamp
      </Stamp>
    )
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('color', theme.colors.red)
  })

  test('color orange sets text and icon color', () => {
    render(
      <Stamp color='orange' data-testid='stamp'>
        Stamp
      </Stamp>
    )
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('color', theme.colors.orange)
  })

  test('color purple sets text and icon color', () => {
    render(
      <Stamp color='purple' data-testid='stamp'>
        Stamp
      </Stamp>
    )
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('color', theme.colors.purple)
  })

  test('bg blue sets background color', () => {
    render(
      <Stamp bg='blue' data-testid='stamp'>
        Stamp
      </Stamp>
    )
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('background-color', theme.colors.blue)
  })

  test('borderColor green sets border color', () => {
    render(
      <Stamp borderColor='green' data-testid='stamp'>
        Stamp
      </Stamp>
    )
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('border-color', theme.colors.green)
  })

  test('has default borderGray border color', () => {
    render(<Stamp data-testid='stamp'>Stamp</Stamp>)
    const element = screen.getByTestId('stamp')
    expect(element).toHaveStyleRule('border-color', theme.colors.borderGray)
  })
})
