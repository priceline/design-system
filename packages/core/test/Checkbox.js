import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox, Icon, theme } from '../src'
import { shallow, mount, render } from 'enzyme'

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
    const json = renderer
      .create(<Checkbox id={name} defaultChecked onChange={onChangeFn} />)
      .toJSON()
    const [input] = json.children

    expect(input.props.defaultChecked).toBe(true)
  })

  test('renders disabled with disabled prop', () => {
    const json = renderer
      .create(<Checkbox id={name} disabled={true} onChange={onChangeFn} />)
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders disabled with defaultChecked', () => {
    const json = renderer
      .create(
        <Checkbox
          id={name}
          disabled={true}
          defaultChecked={true}
          onChange={onChangeFn}
        />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  /** Not Testing wrapper.simulate('click) because enzyme won't pass it through to the checkbox
   * We have to test the actual element receiving the event and the label 'click' causes a 'change'
   * for the nested input. This also means we cannot accurately test that disabled checkboxes ignore clicks.
   */
  test('updates and fires callback when clicked (when enabled)', () => {
    const component = <Checkbox id={name} onChange={onChangeFn} />
    const wrapper = shallow(component)
    const json = renderer.create(component).toJSON()
    wrapper.find('[type="checkbox"]').simulate('change', {
      target: {
        checked: true
      }
    })
    expect(onChangeFn).toHaveBeenCalled()
  })
})
