import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import { BannerRow, Icon, CloseButton, theme } from '..'

const bannerRow = (
  <BannerRow
    showIcon
    showCloseButton
    icon={<Icon theme={theme} />}
    text="text"
    closeButton={<CloseButton theme={theme} />}
    textAlign="left"
    theme={theme}
  />
)

describe('BannerRow', () => {
  test('renders with no props other than theme', () => {
    const tree = renderer.create(<BannerRow theme={theme} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders with props', () => {
    const tree = renderer.create(bannerRow).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('icon does render if showIcon is true', () => {
    const wrapper = shallow(bannerRow)
    const icon = wrapper.find('Icon')
    expect(icon).toHaveLength(1)
  })

  test('icon does not render if showIcon is false', () => {
    const wrapper = shallow(bannerRow)
    wrapper.setProps({ showIcon: false })
    const icon = wrapper.find('Icon')
    expect(icon).toHaveLength(0)
  })

  test('closeButton does render if showCloseButton is true', () => {
    const wrapper = shallow(bannerRow)
    const closeButton = wrapper.find('CloseButton')
    expect(closeButton).toHaveLength(1)
  })

  test('closeButton does not render if showCloseButton is false', () => {
    const wrapper = shallow(bannerRow)
    wrapper.setProps({ showCloseButton: false })
    const closeButton = wrapper.find('CloseButton')
    expect(closeButton).toHaveLength(0)
  })
})
