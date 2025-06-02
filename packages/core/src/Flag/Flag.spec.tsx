import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme/theme'
import { Flag } from './Flag'

describe('Flag', () => {
  let consoleError
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
    render(<Flag width={256} data-testid='flag' />)
    const element = screen.getByTestId('flag')
    expect(element).toHaveStyleRule('width', '256px')
  })

  test('renders with theme color as bg color', () => {
    render(<Flag width={256} bg='purple' data-testid='flag' />)
    const element = screen.getByTestId('flag')
    const bgElement = element.children[1] as HTMLElement
    expect(bgElement).toHaveStyleRule('background-color', theme.colors.purple)
  })
})
