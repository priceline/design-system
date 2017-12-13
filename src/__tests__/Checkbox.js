import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox, Icon, theme } from '..'
import { shallow, mount, render } from 'enzyme'

const fakeEvent = { target: { checked: true } }
let onChangeFn = jest.fn()
const name = 'random_check_box'
const checkBoxSelector = `#${name}`

describe('Checkbox', () => {
  beforeEach(() => {
    onChangeFn.mockReset()
  })

  test('renders without the theme passed specifically', () => {
    const component = <Checkbox id={name} onChange={onChangeFn} />
    const wrapper = mount(component)
    const json = renderer.create(component).toJSON()

    expect(json).toMatchSnapshot()
  })

  test('renders with the theme passed specifically', () => {
    const component = <Checkbox id={name} onChange={onChangeFn} theme={theme} />
    const wrapper = shallow(component)
    const json = renderer.create(component).toJSON()

    expect(json).toMatchSnapshot()
  })

  test('renders checked when defaultChecked prop is passed as true', () => {
    const component = (
      <Checkbox id={name} defaultChecked onChange={onChangeFn} />
    )
    const wrapper = shallow(component)
    const input = wrapper.find(checkBoxSelector)
    const json = renderer.create(component).toJSON()

    expect(input.prop('defaultChecked')).toBe(true)
    expect(json).toMatchSnapshot()
  })

  test('renders disabled when disabled props is passed as true', () => {
    const component = (
      <Checkbox id={name} disabled={true} onChange={onChangeFn} />
    )
    const componentChecked = (
      <Checkbox
        id={name}
        disabled={true}
        defaultChecked={true}
        onChange={onChangeFn}
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
    const component = <Checkbox id={name} onChange={onChangeFn} />
    const wrapper = shallow(component)
    const json = renderer.create(component).toJSON()

    wrapper.find(checkBoxSelector).simulate('change', fakeEvent)
    expect(onChangeFn).toHaveBeenCalled()
    expect(json).toMatchSnapshot()
  })
})
