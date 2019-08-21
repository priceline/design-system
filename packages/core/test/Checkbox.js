import React from 'react'
import renderer from 'react-test-renderer'
import { Checkbox, theme } from '../src'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from 'react-testing-library'

afterEach(cleanup)

describe('Checkbox', () => {
  test('renders without the theme passed specifically', () => {
    const onChange = jest.fn()
    const { asFragment } = render(
      <Checkbox id="check-box" onChange={onChange} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with the theme passed specifically', () => {
    const { asFragment } = render(<Checkbox id="check-box" theme={theme} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders checked when defaultChecked prop is passed as true', () => {
    const { getByRole } = render(<Checkbox id="check-box" defaultChecked />)
    const checkbox = getByRole('checkbox')
    expect(checkbox.checked).toBe(true)
  })

  test('renders disabled with disabled prop', () => {
    const onChange = jest.fn()
    const { asFragment } = render(
      <Checkbox id="check-box" disabled={true} onChange={onChange} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders disabled with defaultChecked', () => {
    const onChange = jest.fn()
    const json = renderer
      .create(
        <Checkbox
          id="check-box"
          disabled={true}
          defaultChecked={true}
          onChange={onChange}
        />
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('calls onChange when clicked', () => {
    const onChange = jest.fn()
    const { container } = render(
      <Checkbox id="check-box" onChange={onChange} />
    )
    const checkbox = container.querySelector('[type=checkbox]')
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })
})
