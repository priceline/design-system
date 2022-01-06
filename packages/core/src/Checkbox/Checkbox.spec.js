import React from 'react'
import { render, fireEvent } from 'testing-library'

import { Checkbox } from '..'

describe('Checkbox', () => {
  const onChange = jest.fn()

  test('renders without the theme passed specifically', () => {
    const { asFragment } = render(<Checkbox id='check-box' onChange={onChange} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders checked when defaultChecked prop is passed as true', () => {
    const { getByRole } = render(<Checkbox id='check-box' defaultChecked onChange={onChange} />)
    const checkbox = getByRole('checkbox')
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
})
