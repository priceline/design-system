import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Star from 'pcln-icons/lib/Star'
import { Banner, Text, theme } from '../src'

describe('Banner', () => {
  test('renders', () => {
    const json = renderer.create(<Banner />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with custom icon', () => {
    const json = renderer.create(<Banner icon={<Star size={20} />} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text string', () => {
    const json = renderer
      .create(<Banner header="Header" text="Text" icon={<Star size={20} />} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with text node', () => {
    const json = renderer
      .create(
        <Banner
          header="Header"
          text={<Text>Text</Text>}
          icon={<Star size={20} />}
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
    const wrapper = shallow(<Banner onClose={() => {}} />)
    const closeButton = wrapper.find('CloseButton')
    expect(closeButton).toHaveLength(1)
  })

  test.skip('renders blue left-hand icon with bg=blue', () => {
    const wrapper = shallow(<Banner bg="blue" />)
    const icon = wrapper.find('svg')
    expect(icon).toHaveLength(1)
  })

  test.skip('renders green left-hand icon by default', () => {
    const wrapper = shallow(<Banner bg="green" />)
    const icon = wrapper.find('svg')
    expect(icon).toHaveLength(1)
  })

  test.skip('renders orange left-hand icon by default', () => {
    const wrapper = shallow(<Banner bg="orange" />)
    const icon = wrapper.find('svg')
    expect(icon).toHaveLength(1)
  })

  test.skip('renders red left-hand icon by default', () => {
    const wrapper = shallow(<Banner bg="red" />)
    const icon = wrapper.find('svg')
    expect(icon).toHaveLength(1)
  })

  test('accepts non-preset colors', () => {
    const json = renderer.create(<Banner bg={'gray'} />).toJSON()
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
