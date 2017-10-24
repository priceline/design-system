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

  test('renders with custom iconName and size', () => {
    const json = renderer
      .create(<Banner iconName="star" iconSize={20} theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with lightGray palette', () => {
    const json = renderer
      .create(<Banner palette="lightGray" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.lightGray.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.lightGray.color)
  })

  test('renders with blue palette', () => {
    const json = renderer
      .create(<Banner palette="blue" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.blue.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.blue.color)
  })

  test('renders with green palette', () => {
    const json = renderer
      .create(<Banner palette="green" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.green.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.green.color)
  })

  test('renders with orange palette', () => {
    const json = renderer
      .create(<Banner palette="orange" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.orange.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.orange.color)
  })

  test('renders with red palette', () => {
    const json = renderer
      .create(<Banner palette="red" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.red.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.red.color)
  })

  test('renders with lightBlue palette', () => {
    const json = renderer
      .create(<Banner palette="lightBlue" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.lightBlue.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.lightBlue.color)
  })

  test('renders with lightGreen palette', () => {
    const json = renderer
      .create(<Banner palette="lightGreen" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.lightGreen.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.lightGreen.color)
  })

  test('renders with lightOrange palette', () => {
    const json = renderer
      .create(<Banner palette="lightOrange" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.lightOrange.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.lightOrange.color)
  })

  test('renders with lightRed palette', () => {
    const json = renderer
      .create(<Banner palette="lightRed" theme={theme} />)
      .toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule(
      'background-color',
      theme.palette.lightRed.backgroundColor
    )
    expect(json).toHaveStyleRule('color', theme.palette.lightRed.color)
  })

  test('renders close button if onClose func is provided', () => {
    const wrapper = shallow(<Banner onClose={() => {}} theme={theme} />)
    const close = wrapper.find('CloseButton')
    expect(close).toHaveLength(1)
  })

  test('does render blue left-hand icon by default', () => {
    const wrapper = shallow(<Banner palette="blue" theme={theme} />)
    const icon = wrapper.find('[name="information"]')
    expect(icon).toHaveLength(1)
  })

  test('does render green left-hand icon by default', () => {
    const wrapper = shallow(<Banner palette="green" theme={theme} />)
    const icon = wrapper.find('[name="success"]')
    expect(icon).toHaveLength(1)
  })

  test('does render orange left-hand icon by default', () => {
    const wrapper = shallow(<Banner palette="orange" theme={theme} />)
    const icon = wrapper.find('[name="attention"]')
    expect(icon).toHaveLength(1)
  })

  test('does render red left-hand icon by default', () => {
    const wrapper = shallow(<Banner palette="red" theme={theme} />)
    const icon = wrapper.find('[name="warning"]')
    expect(icon).toHaveLength(1)
  })

  test('does not render blue left-hand icon if showIcon is false', () => {
    const wrapper = shallow(
      <Banner palette="blue" showIcon={false} theme={theme} />
    )
    const icon = wrapper.find('[name="information"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render green left-hand icon if showIcon is false', () => {
    const wrapper = shallow(
      <Banner palette="green" showIcon={false} theme={theme} />
    )
    const icon = wrapper.find('[name="success"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render orange left-hand icon if showIcon is false', () => {
    const wrapper = shallow(
      <Banner palette="orange" showIcon={false} theme={theme} />
    )
    const icon = wrapper.find('[name="attention"]')
    expect(icon).toHaveLength(0)
  })

  test('does not render red left-hand icon if showIcon is false', () => {
    const wrapper = shallow(
      <Banner palette="red" showIcon={false} theme={theme} />
    )
    const icon = wrapper.find('[name="warning"]')
    expect(icon).toHaveLength(0)
  })
})
