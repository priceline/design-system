import { Star } from 'pcln-icons'
import React from 'react'
import { Banner } from '../Banner/Banner'
import { Heading } from '../Heading/Heading'
import { Text } from '../Text/Text'
import { render, screen } from '../__test__/testing-library'
import { theme } from '../theme/theme'

describe('Banner', () => {
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  test('renders with no props other than theme', () => {
    const { asFragment } = render(<Banner />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with an icon', () => {
    const { asFragment } = render(<Banner icon={<Star />} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with text string', () => {
    const { asFragment } = render(<Banner header='Header' text='Text' icon={<Star />} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with text node', () => {
    const { asFragment } = render(<Banner header='Header' text={<Text>Text</Text>} icon={<Star />} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with blue bg', () => {
    render(<Banner bg='blue' data-testid='banner' />)
    const element = screen.getByTestId('banner')
    expect(element).toHaveStyleRule('background-color', theme.colors.blue)
    expect(element).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with green bg', () => {
    render(<Banner bg='green' data-testid='banner' />)
    const element = screen.getByTestId('banner')
    expect(element).toHaveStyleRule('background-color', theme.colors.green)
    expect(element).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with orange bg', () => {
    render(<Banner bg='orange' data-testid='banner' />)
    const element = screen.getByTestId('banner')
    expect(element).toHaveStyleRule('background-color', theme.colors.orange)
    expect(element).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with red bg', () => {
    render(<Banner bg='red' data-testid='banner' />)
    const element = screen.getByTestId('banner')
    expect(element).toHaveStyleRule('background-color', theme.colors.red)
    expect(element).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with lightBlue bg', () => {
    render(<Banner bg='lightBlue' data-testid='banner' />)
    const element = screen.getByTestId('banner')
    expect(element).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(element).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('renders with lightGreen bg', () => {
    render(<Banner bg='lightGreen' data-testid='banner' />)
    const element = screen.getByTestId('banner')
    expect(element).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(element).toHaveStyleRule('color', theme.colors.darkGreen)
  })

  test('renders with lightRed bg', () => {
    render(<Banner bg='lightRed' data-testid='banner' />)
    const element = screen.getByTestId('banner')
    expect(element).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(element).toHaveStyleRule('color', theme.colors.darkRed)
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
    render(<Banner bg='gray' data-testid='banner' />)
    const element = screen.getByTestId('banner')
    expect(element).toHaveStyleRule('background-color', theme.colors.gray)
  })

  test('renders content from children props', () => {
    const { asFragment } = render(
      <Banner>
        <span>123</span>
      </Banner>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with header node', () => {
    const { asFragment, getByText } = render(
      <Banner header={<Heading>Hello world</Heading>} text={<Text>Text</Text>} />
    )

    getByText(/Hello world/)
    expect(asFragment()).toMatchSnapshot()
  })
})
