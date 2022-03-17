import React from 'react'
import { Toggle } from '.'
import { render, fireEvent } from '../__test__/testing-library'
import { colors } from '../theme'

describe('Toggle', () => {
  test('renders correctly when off', () => {
    const { getByRole } = render(<Toggle label='Total price toggle' />)
    const container = getByRole('switch').parentNode
    expect(container).toHaveStyleRule('background-color', colors.gray)
  })

  test('renders correctly when on', () => {
    const { getByRole } = render(<Toggle isOn label='Total price toggle' />)
    const container = getByRole('switch').parentNode
    expect(container).toHaveStyleRule('background-color', colors.blue)
  })

  test('renders correctly when disabled', () => {
    const { getByRole } = render(<Toggle label='Total price toggle' disabled />)
    const container = getByRole('switch').parentNode
    expect(container).toHaveStyleRule('background-color', colors.lightGray)
  })

  test('calls callback', () => {
    const cb = jest.fn()

    const { getByLabelText } = render(<Toggle label='Total price toggle' onToggle={cb} />)
    const input = getByLabelText('Total price toggle')
    fireEvent.click(input)
    expect(cb).toHaveBeenCalled()
  })
})
