import { render, screen } from '../__test__/testing-library'
import { ToggleBadge } from '../ToggleBadge/ToggleBadge'
import { createTheme } from '../utils/createTheme'

describe('ToggleBadge', () => {
  let consoleError
  let theme
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
    theme = createTheme()
  })
  afterEach(() => (console.error = consoleError))

  test('selected ToggleBadge renders with default props', () => {
    render(<ToggleBadge selected data-testid='toggle-badge' />)
    const element = screen.getByTestId('toggle-badge')
    expect(element).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(element).toHaveStyleRule('color', theme.colors.blue)
  })

  test('unselected ToggleBadge renders with default props', () => {
    render(<ToggleBadge data-testid='toggle-badge' />)
    const element = screen.getByTestId('toggle-badge')
    expect(element).toHaveStyleRule('color', theme.colors.blue)
  })

  test('selected one with background-color and text color passed as props hover state', () => {
    render(<ToggleBadge selected bg='secondary' color='error' fontSize={1} data-testid='toggle-badge' />)
    const element = screen.getByTestId('toggle-badge')
    expect(element).toHaveStyleRule('background-color', theme.palette.secondary.light)
    expect(element).toHaveStyleRule('color', theme.palette.error.base)
  })
})
