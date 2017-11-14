import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox, theme } from '..'
import { shallow, mount, render } from 'enzyme'

let checkActionFn
const name = 'random_check_box'
const value = 'priceline rules'

describe('Checkbox', () => {
  beforeEach(() => {
    checkActionFn = jest.fn(() => void 0)
  })

  test('renders without the theme passed specifically', () => {
    const component = <Checkbox name={name} checkAction={checkActionFn} />
    const json = renderer.create(component).toJSON()
    const wrapper = shallow(component)

    expect(json).toHaveStyleRule('display', 'inline-flex')
    expect(json).toHaveStyleRule(
      'border',
      '2px solid ' + theme.colors.borderGray
    )
    expect(wrapper.children().length).toEqual(1)
    expect(wrapper.find('input').length).toEqual(1)
    expect(wrapper.find('svg').length).toEqual(0)
    expect(json.props.onClick).toBeDefined()
    expect(json).toMatchSnapshot()
  })

  test('renders with the theme passed specifically', () => {
    const component = (
      <Checkbox name={name} checkAction={checkActionFn} theme={theme} />
    )
    const json = renderer.create(component).toJSON()
    const wrapper = shallow(component)

    expect(json).toHaveStyleRule('display', 'inline-flex')
    expect(json).toHaveStyleRule(
      'border',
      '2px solid ' + theme.colors.borderGray
    )
    expect(json).toMatchSnapshot()
  })

  test('renders checked when isChecked prop is passed as true', () => {
    const component = (
      <Checkbox name={name} isChecked={true} checkAction={checkActionFn} />
    )
    const wrapper = render(component)
    const json = renderer.create(component).toJSON()

    expect(json.children.length).toEqual(2)
    expect(wrapper.find('svg').length).toEqual(1)
    expect(json).toHaveStyleRule('background-color', theme.colors.blue)
    expect(json).toHaveStyleRule('border-color', theme.colors.blue)
    expect(json).toMatchSnapshot()
  })

  test('renders disabled when isDisabled props is passed as true', () => {
    const component = (
      <Checkbox name={name} isDisabled={true} checkAction={checkActionFn} />
    )
    const componentChecked = (
      <Checkbox
        name={name}
        isDisabled={true}
        isChecked={true}
        checkAction={checkActionFn}
      />
    )
    const wrapper = render(component)
    const wrapperChecked = render(componentChecked)
    const json = renderer.create(component).toJSON()
    const jsonChecked = renderer.create(componentChecked).toJSON()

    expect(json.children.length).toEqual(1)
    expect(wrapper.find('svg').length).toEqual(0)
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule(
      'border',
      '2px solid ' + theme.colors.borderGray
    )
    expect(json).toHaveStyleRule('opacity', '0.5')
    expect(json).toMatchSnapshot()

    expect(jsonChecked.children.length).toEqual(2)
    expect(wrapperChecked.find('svg').length).toEqual(1)
    expect(jsonChecked).toHaveStyleRule(
      'background-color',
      theme.colors.borderGray
    )
    expect(jsonChecked).toHaveStyleRule(
      'border',
      '2px solid ' + theme.colors.borderGray
    )
    expect(jsonChecked).toHaveStyleRule('opacity', '0.5')
    expect(jsonChecked).toMatchSnapshot()
  })

  test('updates and fires callback when clicked (when enabled)', () => {
    const component = <Checkbox name={name} checkAction={checkActionFn} />
    const wrapper = shallow(component)
    const json = renderer.create(component).toJSON()

    expect(json.children.length).toEqual(1)
    expect(wrapper.find('svg').length).toEqual(0)
    expect(json).toHaveStyleRule('background-color', theme.colors.white)
    expect(json).toHaveStyleRule(
      'border',
      '2px solid ' + theme.colors.borderGray
    )
    expect(json).toMatchSnapshot()

    wrapper.simulate('click')
    expect(checkActionFn).toHaveBeenCalled()
  })

  test('does not fire callback when clicked (when disabled)', () => {
    const component = (
      <Checkbox
        name={name}
        isDisabled={true}
        isChecked={false}
        checkAction={checkActionFn}
      />
    )
    const wrapper = shallow(component)

    wrapper.simulate('click')
    expect(checkActionFn).not.toHaveBeenCalled()
  })
})
