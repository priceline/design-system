import { render } from '../__test__/testing-library'
import { Flag, theme } from '..'

describe('Flag', () => {
  let consoleError: typeof console.error

  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const { asFragment } = render(<Flag />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with width prop', () => {
    const { asFragment, getByTestId } = render(<Flag width={256} />)
    expect(asFragment()).toMatchSnapshot()
    expect(getByTestId('flag')).toHaveStyleRule('width', '256px')
  })

  test('renders with theme color as bg color', () => {
    const { asFragment, getByTestId } = render(<Flag width={256} bg='purple' />)
    expect(asFragment()).toMatchSnapshot()
    expect(getByTestId('flag-body')).toHaveStyleRule('background-color', theme.colors.purple)
  })
})
