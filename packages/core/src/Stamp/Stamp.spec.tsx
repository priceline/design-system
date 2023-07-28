import { Stamp } from '..'

describe('Stamp', () => {
  let consoleError: typeof console.error

  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders', () => {
    const json = rendererCreateWithTheme(<Stamp />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
