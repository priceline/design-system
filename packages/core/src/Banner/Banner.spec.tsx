import { Star } from 'pcln-icons'
import React from 'react'
import { Banner } from '../Banner/Banner'
import { Heading } from '../Heading/Heading'
import { Text } from '../Text/Text'
import { render } from '../__test__/testing-library'
import { theme } from '../theme/theme'

describe('Banner', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders with no props other than theme', () => {
    const json = rendererCreateWithTheme(<Banner />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with an icon', () => {
    const json = rendererCreateWithTheme(<Banner icon={<Star />} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text string', () => {
    const { asFragment } = render(<Banner header='Header' text='Text' icon={<Star />} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with text node', () => {
    const json = rendererCreateWithTheme(
      <Banner header='Header' text={<Text>Text</Text>} icon={<Star />} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with blue bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='blue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with green bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='green' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with orange bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='orange' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with red bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='red' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with lightBlue bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='lightBlue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('renders with lightGreen bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='lightGreen' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test('renders with lightRed bg', () => {
    const json = rendererCreateWithTheme(<Banner bg='lightRed' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(json).toHaveStyleRule('color', theme.colors.darkRed)
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

  test('accepts non-preset colors', () => {
    const json = rendererCreateWithTheme(<Banner bg='gray' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.gray)
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
