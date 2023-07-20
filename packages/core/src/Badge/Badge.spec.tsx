import { Badge } from '..'

describe('Badge', () => {
  let consoleError: typeof console.error
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<Badge />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
