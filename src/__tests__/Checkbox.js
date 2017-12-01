import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox, theme } from '..'
import { shallow, mount, render } from 'enzyme'

const fakeEvent = { target: { checked: true } }
let onClickFn = jest.fn()
const name = 'random_check_box'
const value = 'priceline rules'
const facadeSelector = '[data-test="checkbox-facade"]'
const checkboxSelector = 'input[type="checkbox"]'

describe('Checkbox', () => {
  beforeEach(() => {
    onClickFn.mockReset()
  })

  test('renders without the theme passed specifically', () => {
    const component = <Checkbox name={name} onClick={onClickFn} />
    const wrapper = shallow(component)
    const facade = wrapper.find(facadeSelector)
    const input = wrapper.find(checkboxSelector)
    const json = renderer.create(component).toJSON()

    expect(json.type).toBe('label')
    expect(input.prop('style')).toEqual({
      opacity: 0,
      zIndex: -1,
      position: 'absolute'
    })
    expect(wrapper.children().length).toBe(2)
    expect(facade.children().length).toBe(1)
    expect(json).toMatchSnapshot()
  })

  test('renders with the theme passed specifically', () => {
    const component = <Checkbox name={name} onClick={onClickFn} theme={theme} />
    const wrapper = shallow(component)
    const facade = wrapper.find(facadeSelector)
    const input = wrapper.find(checkboxSelector)
    const json = renderer.create(component).toJSON()

    expect(json.type).toBe('label')
    expect(input.prop('style')).toEqual({
      opacity: 0,
      zIndex: -1,
      position: 'absolute'
    })
    expect(wrapper.children().length).toBe(2)
    expect(facade.children().length).toBe(1)
    expect(json).toMatchSnapshot()
  })

  test('renders checked when defaultChecked prop is passed as true', () => {
    const component = (
      <Checkbox name={name} defaultChecked={true} onClick={onClickFn} />
    )
    const wrapper = shallow(component)
    const input = wrapper.find(checkboxSelector)
    const json = renderer.create(component).toJSON()

    expect(input.prop('defaultChecked')).toBe(true)
    expect(json).toMatchSnapshot()
  })

  test('renders disabled when disabled props is passed as true', () => {
    const component = (
      <Checkbox name={name} disabled={true} onClick={onClickFn} />
    )
    const componentChecked = (
      <Checkbox
        name={name}
        disabled={true}
        defaultChecked={true}
        onClick={onClickFn}
      />
    )

    const json = renderer.create(component).toJSON()
    const jsonChecked = renderer.create(componentChecked).toJSON()

    expect(json).toMatchSnapshot()
    expect(jsonChecked).toMatchSnapshot()
  })

  /** Not Testing wrapper.simulate('click) because enzyme won't pass it through to the checkbox
   * We have to test the actual element receiving the event and the label 'click' causes a 'change'
   * for the nested input. This also means we cannot accurately test that disabled checkboxes ignore clicks.
   */
  test('updates and fires callback when clicked (when enabled)', () => {
    const component = <Checkbox name={name} onClick={onClickFn} />
    const wrapper = shallow(component)
    const json = renderer.create(component).toJSON()

    wrapper.find('input').simulate('change', fakeEvent)
    expect(onClickFn).toHaveBeenCalled()
    expect(json).toMatchSnapshot()
  })
})
