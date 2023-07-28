import { ToggleBadge } from '..'
import { render } from '../__test__/testing-library'

describe('ToggleBadge', () => {
  let consoleError: typeof console.error
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('selected ToggleBadge renders with default props', () => {
    const { asFragment } = render(<ToggleBadge selected />)
    expect(asFragment()).toMatchSnapshot()
  })
})
