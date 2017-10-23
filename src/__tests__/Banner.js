import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import { Banner, theme } from '..'

describe('Banner', () => {
  test('renders with no props other than theme', () => {
    const json = renderer.create(<Banner theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.lightGray)
    expect(json).toHaveStyleRule('color', theme.colors.text)
  })

  test('renders with default palette', () => {
    const json = renderer.create(<Banner palette='default' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.default.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.default.color)
  })

  test('renders with information palette', () => {
    const json = renderer.create(<Banner palette='information' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.information.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.information.color)
  })

  test('renders with success palette', () => {
    const json = renderer.create(<Banner palette='success' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.success.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.success.color)
  })

  test('renders with attention palette', () => {
    const json = renderer.create(<Banner palette='attention' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.attention.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.attention.color)
  })

  test('renders with warning palette', () => {
    const json = renderer.create(<Banner palette='warning' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.warning.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.warning.color)
  })

  test('renders with informationLight palette', () => {
    const json = renderer.create(<Banner palette='informationLight' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.informationLight.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.informationLight.color)
  })

  test('renders with successLight palette', () => {
    const json = renderer.create(<Banner palette='successLight' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.successLight.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.successLight.color)
  })

  test('renders with attentionLight palette', () => {
    const json = renderer.create(<Banner palette='attentionLight' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.attentionLight.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.attentionLight.color)
  })

  test('renders with warningLight palette', () => {
    const json = renderer.create(<Banner palette='warningLight' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.warningLight.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.warningLight.color)
  })

  test('renders with default palette alias', () => {
    const json = renderer.create(<Banner palette='lightGray' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.default.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.default.color)
  })

  test('renders with information palette alias', () => {
    const json = renderer.create(<Banner palette='blue' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.information.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.information.color)
  })

  test('renders with success palette alias', () => {
    const json = renderer.create(<Banner palette='green' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.success.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.success.color)
  })

  test('renders with attention palette alias', () => {
    const json = renderer.create(<Banner palette='orange' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.attention.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.attention.color)
  })

  test('renders with warning palette alias', () => {
    const json = renderer.create(<Banner palette='red' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.warning.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.warning.color)
  })

  test('renders with informationLight palette alias', () => {
    const json = renderer.create(<Banner palette='lightBlue' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.informationLight.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.informationLight.color)
  })

  test('renders with successLight palette alias', () => {
    const json = renderer.create(<Banner palette='lightGreen' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.successLight.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.successLight.color)
  })

  test('renders with attentionLight palette alias', () => {
    const json = renderer.create(<Banner palette='lightOrange' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.attentionLight.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.attentionLight.color)
  })

  test('renders with warningLight palette alias', () => {
    const json = renderer.create(<Banner palette='lightRed' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.palette.warningLight.backgroundColor)
    expect(json).toHaveStyleRule('color', theme.palette.warningLight.color)
  })

  test('renders close button if onClose func is provided', () => {
    const wrapper = shallow(<Banner onClose={() => {}} theme={theme} />)
    const close = wrapper.find('[name="closeLight"]')
    expect(close).toHaveLength(1)
  })

  test('does render left-hand icon by default', () => {
    const wrapper = shallow(<Banner palette='information' theme={theme} />)
    const icon = wrapper.find('[name="information"]')
    expect(icon).toHaveLength(1)
  })

  test('does render left-hand icon by default', () => {
    const wrapper = shallow(<Banner palette='success' theme={theme} />)
    const icon = wrapper.find('[name="success"]')
    expect(icon).toHaveLength(1)
  })

  test('does render left-hand icon by default', () => {
    const wrapper = shallow(<Banner palette='attention' theme={theme} />)
    const icon = wrapper.find('[name="attention"]')
    expect(icon).toHaveLength(1)
  })

  test('does render left-hand icon by default', () => {
    const wrapper = shallow(<Banner palette='warning' theme={theme} />)
    const icon = wrapper.find('[name="warning"]')
    expect(icon).toHaveLength(1)
  })

  test('does not render left-hand icon if showIcon is false', () => {
    const wrapper = shallow(<Banner palette='information' showIcon={false} theme={theme} />)
    const icon = wrapper.find('[name="information"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render left-hand icon if showIcon is false', () => {
    const wrapper = shallow(<Banner palette='success' showIcon={false} theme={theme} />)
    const icon = wrapper.find('[name="success"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render left-hand icon if showIcon is false', () => {
    const wrapper = shallow(<Banner palette='attention' showIcon={false} theme={theme} />)
    const icon = wrapper.find('[name="attention"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render left-hand icon if showIcon is false', () => {
    const wrapper = shallow(<Banner palette='warning' showIcon={false} theme={theme} />)
    const icon = wrapper.find('[name="warning"]')
    expect(icon).toHaveLength(0)
  })
})