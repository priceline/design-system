import React from 'react'
import { Checkbox, theme } from '../src'
import { fireEvent, cleanup } from 'react-testing-library'

afterEach(cleanup)

describe('Checkbox', () => {
  test('renders without the theme passed specifically', () => {
    const onChange = jest.fn()
    const json = rendererCreateWithTheme(
      <Checkbox id="check-box" onChange={onChange} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders with the theme passed specifically', () => {
    const json = rendererCreateWithTheme(
      <Checkbox id="check-box" theme={theme} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders checked when defaultChecked prop is passed as true', () => {
    const json = rendererCreateWithTheme(
      <Checkbox id="check-box" defaultChecked />
    ).toJSON()
    const [input] = json.children
    expect(input.props.defaultChecked).toBe(true)
  })

  test('renders disabled with disabled prop', () => {
    const onChange = jest.fn()
    const json = rendererCreateWithTheme(
      <Checkbox id="check-box" disabled={true} onChange={onChange} />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('renders disabled with defaultChecked', () => {
    const onChange = jest.fn()
    const json = rendererCreateWithTheme(
      <Checkbox
        id="check-box"
        disabled={true}
        defaultChecked={true}
        onChange={onChange}
      />
    ).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('calls onChange when clicked', () => {
    const onChange = jest.fn()
    const { container } = renderWithTheme(
      <Checkbox id="check-box" onChange={onChange} />
    )
    const checkbox = container.querySelector('[type=checkbox]')
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })
})
