import React from 'react'
import { render, screen, fireEvent } from 'testing-library'
import userEvent from '@testing-library/user-event'
import PasswordInput from './PasswordInput'

describe('PasswordInput', () => {
  it('test show/hide password options', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput hasProgressBar onChange={mockOnChange} />)
    const inputField = screen.getByTestId('input-field')
    const visibilityButton = screen.getByTitle('visibility-button')
    expect(inputField).toHaveAttribute('type', 'password')
    fireEvent.click(visibilityButton)
    fireEvent.change(inputField), { target: { value: 'Password1!' } }
    expect(inputField).toHaveAttribute('type', 'text')
    expect(mockOnChange).toHaveBeenCalledWith({
      isValid: true,
      value: 'Password1!',
    })
  })

  it('test with a strong password', () => {
    render(<PasswordInput hasProgressBar />)
    const inputField = screen.getByTestId('input-field')
    userEvent.type(inputField, 'GoodPassword1!')

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn.length).toBe(2)
    expect(checkIconOff.length).toBe(0)
    expect(checkIconOn[0]).toHaveStyleRule('color', '#0a0')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark.length).toBe(1)

    const progressBarFour = screen.getByTestId('test-id-3')
    expect(progressBarFour).toHaveStyleRule('background-color', '#0a0')
  })

  it('test with a no number or special character password', () => {
    render(<PasswordInput hasProgressBar />)
    const inputField = screen.getByTestId('input-field')
    userEvent.type(inputField, 'SamplePassword')

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn.length).toBe(1)
    expect(checkIconOff.length).toBe(1)
    expect(checkIconOn[0]).toHaveStyleRule('color', '#0a0')
    expect(checkIconOff[0]).toHaveStyleRule('color', '#4f6f8f')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark.length).toBe(0)

    const progressBarTwo = screen.getByTestId('test-id-1')
    const progressBarThree = screen.getByTestId('test-id-2')
    expect(progressBarTwo).toHaveStyleRule('background-color', '#fedc2a')
    expect(progressBarThree).toHaveStyleRule('background-color', '#f4f6f8')
  })

  it('test with a weak password', () => {
    render(<PasswordInput hasProgressBar />)
    const inputField = screen.getByTestId('input-field')
    userEvent.type(inputField, 'bad')

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn.length).toBe(0)
    expect(checkIconOff.length).toBe(2)
    expect(checkIconOff[0]).toHaveStyleRule('color', '#4f6f8f')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark.length).toBe(0)

    const progressBarOne = screen.getByTestId('test-id-0')
    const progressBarTwo = screen.getByTestId('test-id-1')
    expect(progressBarOne).toHaveStyleRule('background-color', '#c00')
    expect(progressBarTwo).toHaveStyleRule('background-color', '#f4f6f8')
  })
})
