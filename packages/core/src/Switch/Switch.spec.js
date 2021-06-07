import React from 'react'
import { render, screen, fireEvent } from 'testing-library'
import { Switch } from '..'

describe('Switch', () => {
  test('is checked when clicked', () => {
    render(<Switch />)
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
  })
})
