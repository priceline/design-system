import { render } from '../__test__/testing-library'

import { Banner, Text, Heading, theme } from '..'

describe('Banner', () => {
  let consoleError: typeof console.error
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders with no props other than theme', () => {
    const json = rendererCreateWithTheme(<Banner />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with custom iconName and size', () => {
    const json = rendererCreateWithTheme(<Banner iconName='star' iconSize={20} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text string', () => {
    const json = rendererCreateWithTheme(
      <Banner header='Header' text='Text' iconName='star' iconSize={20} theme={theme} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text node', () => {
    const json = rendererCreateWithTheme(
      <Banner header='Header' text={<Text>Text</Text>} iconName='star' iconSize={20} theme={theme} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders close button if onClose func is provided', () => {
    function noop() {}
    const { container } = render(<Banner onClose={noop} />)
    const closeButton = container.querySelector('button')
    expect(closeButton).toBeTruthy()
  })

  test('does render blue left-hand icon by default', () => {
    const { container } = render(<Banner bg='blue' />)
    const icon = container.querySelector('svg')
    // todo: check svg path/attrs for correct icon
    expect(icon).toBeTruthy()
  })

  test('does not render blue left-hand icon if showIcon is false', () => {
    const { container } = render(<Banner bg='blue' showIcon={false} />)
    const icon = container.querySelector('svg')
    expect(icon).toBeFalsy()
  })

  test('renders content from children props', () => {
    const json = rendererCreateWithTheme(
      <Banner>
        <span>123</span>
      </Banner>
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with header node', () => {
    const { asFragment, getByText } = render(
      <Banner header={<Heading>Hello world</Heading>} text={<Text>Text</Text>} />
    )

    getByText(/Hello world/)
    expect(asFragment()).toMatchSnapshot()
  })
})
