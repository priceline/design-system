import React from 'react'
import renderer from 'react-test-renderer'
import { render, cleanup } from 'react-testing-library'
import { Banner, Text, theme } from '../src'

afterEach(cleanup)

describe('Banner', () => {
  test('renders with no props other than theme', () => {
    const json = renderer.create(<Banner />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with custom iconName and size', () => {
    const json = renderer
      .create(<Banner iconName="star" iconSize={20} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text string', () => {
    const json = renderer
      .create(
        <Banner
          header="Header"
          text="Text"
          iconName="star"
          iconSize={20}
          theme={theme}
        />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text node', () => {
    const json = renderer
      .create(
        <Banner
          header="Header"
          text={<Text>Text</Text>}
          iconName="star"
          iconSize={20}
          theme={theme}
        />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with blue bg', () => {
    const json = renderer.create(<Banner bg="blue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with green bg', () => {
    const json = renderer.create(<Banner bg="green" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with orange bg', () => {
    const json = renderer.create(<Banner bg="orange" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.orange)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with red bg', () => {
    const json = renderer.create(<Banner bg="red" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.red)
    expect(json).toHaveStyleRule('color', theme.colors.white)
  })

  test('renders with lightBlue bg', () => {
    const json = renderer.create(<Banner bg="lightBlue" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightBlue)
    expect(json).toHaveStyleRule('color', theme.colors.darkBlue)
  })

  test('renders with lightGreen bg', () => {
    const json = renderer.create(<Banner bg="lightGreen" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGreen)
    expect(json).toHaveStyleRule('color', theme.colors.darkGreen)
  })

  test('renders with lightRed bg', () => {
    const json = renderer.create(<Banner bg="lightRed" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(json).toHaveStyleRule('color', theme.colors.darkRed)
  })

  test('renders close button if onClose func is provided', () => {
    const { container } = render(<Banner onClose={() => {}} />)
    const closeButton = container.querySelector('button')
    expect(closeButton).toBeTruthy()
  })

  test('does render blue left-hand icon by default', () => {
    const { container } = render(<Banner bg="blue" />)
    const icon = container.querySelector('svg')
    // todo: check svg path/attrs for correct icon
    expect(icon).toBeTruthy()
  })

  // these won't be needed if Banner is changed to a more composable API
  test.skip('does render green left-hand icon by default', () => {
    const { container } = render(<Banner bg="green" />)
    const icon = container.querySelector('svg')
    // name=success
    expect(icon).toBeTruthy()
  })

  test.skip('does render orange left-hand icon by default', () => {
    const { container } = render(<Banner bg="orange" />)
    const icon = container.querySelector('svg')
    // name=attention
    expect(icon).toBeTruthy()
  })

  test.skip('does render red left-hand icon by default', () => {
    const { container } = render(<Banner bg="red" />)
    const icon = container.querySelector('svg')
    // name=warning
    expect(icon).toBeTruthy()
  })

  test('does not render blue left-hand icon if showIcon is false', () => {
    const { container } = render(<Banner bg="blue" showIcon={false} />)
    const icon = container.querySelector('svg')
    expect(icon).toBeFalsy()
  })

  test('accepts non-preset colors', () => {
    const json = renderer.create(<Banner bg="gray" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.gray)
  })

  test('renders content from children props', () => {
    const json = renderer
      .create(
        <Banner>
          <span>123</span>
        </Banner>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
