import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import { Banner, Text, theme } from '..'

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

  test('renders with lightOrange bg', () => {
    const json = renderer.create(<Banner bg="lightOrange" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightOrange)
    expect(json).toHaveStyleRule('color', theme.colors.darkOrange)
  })

  test('renders with lightRed bg', () => {
    const json = renderer.create(<Banner bg="lightRed" />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightRed)
    expect(json).toHaveStyleRule('color', theme.colors.darkRed)
  })

  test('renders close button if onClose func is provided', () => {
    const wrapper = shallow(<Banner onClose={() => {}} />)
    const closeButton = wrapper.find('CloseButton')
    expect(closeButton).toHaveLength(1)
  })

  test('does render blue left-hand icon by default', () => {
    const wrapper = shallow(<Banner bg="blue" />)
    const icon = wrapper.find('[name="information"]')
    expect(icon).toHaveLength(1)
  })

  test('does render green left-hand icon by default', () => {
    const wrapper = shallow(<Banner bg="green" />)
    const icon = wrapper.find('[name="success"]')
    expect(icon).toHaveLength(1)
  })

  test('does render orange left-hand icon by default', () => {
    const wrapper = shallow(<Banner bg="orange" />)
    const icon = wrapper.find('[name="attention"]')
    expect(icon).toHaveLength(1)
  })

  test('does render red left-hand icon by default', () => {
    const wrapper = shallow(<Banner bg="red" />)
    const icon = wrapper.find('[name="warning"]')
    expect(icon).toHaveLength(1)
  })

  test('does not render blue left-hand icon if showIcon is false', () => {
    const wrapper = shallow(<Banner bg="blue" showIcon={false} />)
    const icon = wrapper.find('[name="information"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render green left-hand icon if showIcon is false', () => {
    const wrapper = shallow(<Banner bg="green" showIcon={false} />)
    const icon = wrapper.find('[name="success"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render orange left-hand icon if showIcon is false', () => {
    const wrapper = shallow(<Banner bg="orange" showIcon={false} />)
    const icon = wrapper.find('[name="attention"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render red left-hand icon if showIcon is false', () => {
    const wrapper = shallow(<Banner bg="red" showIcon={false} />)
    const icon = wrapper.find('[name="warning"]')
    expect(icon).toHaveLength(0)
  })

  test('only accepts preset colors', () => {
    const json = renderer.create(<Banner bg={'gray'} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).not.toHaveStyleRule('background-color', theme.colors.gray)
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
