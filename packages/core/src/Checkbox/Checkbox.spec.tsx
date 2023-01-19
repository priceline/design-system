import React from 'react'
import { render, fireEvent } from '../__test__/testing-library'

import { Checkbox } from '..'

describe('Checkbox', () => {
  const onChange = jest.fn()

  test('renders without the theme passed specifically', () => {
    const { asFragment } = render(<Checkbox id='check-box' onChange={onChange} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders checked when defaultChecked prop is passed as true', () => {
    const { getByRole } = render(<Checkbox id='check-box' defaultChecked onChange={onChange} />)
    const checkbox = getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  test('renders disabled with disabled prop', () => {
    const { asFragment } = render(<Checkbox id='check-box' disabled onChange={onChange} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders disabled with defaultChecked', () => {
    const { asFragment } = render(
      <Checkbox id='check-box' disabled={true} defaultChecked={true} onChange={onChange} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('calls onChange when clicked', () => {
    const { container } = render(<Checkbox id='check-box' onChange={onChange} />)
    const checkbox = container.querySelector('[type=checkbox]')
    fireEvent.click(checkbox)
    expect(onChange).toHaveBeenCalled()
  })

  it('renders an indeterminate checkbox that can be clicked to set checked to true', () => {
    const { getByRole } = render(<Checkbox id='check-box' indeterminate onChange={onChange} />)
    const checkbox = getByRole('checkbox') as HTMLInputElement

    expect(checkbox.checked).toBe(false)
    // expect(checkbox.indeterminate).toBe(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
    // expect(checkbox.indeterminate).toBe(false)
  })
  it('renders an indeterminate checkbox that can be clicked to set checked to false', () => {
    const { getByRole } = render(<Checkbox id='check-box' indeterminate defaultChecked onChange={onChange} />)
    const checkbox = getByRole('checkbox') as HTMLInputElement

    expect(checkbox.checked).toBe(true)
    // expect(checkbox.indeterminate).toBe(true)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(false)
    // expect(checkbox.indeterminate).toBe(false)
  })
  it('correctly passes in the ref so that the underlying input element can be modified by the parent component if needed', () => {
    const ref = React.createRef()
    const { getByRole } = render(
      <Checkbox id='check-box' ref={ref} indeterminate defaultChecked onChange={onChange} />
    )
    const checkbox = getByRole('checkbox') as HTMLInputElement

    // @ts-ignore
    expect(ref.current.id).toBe(checkbox.id)
  })
})
