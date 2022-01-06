import React from 'react'
import { render, screen, fireEvent } from 'testing-library'
import PasswordInput from './PasswordInput'

const sampleRegexChecks = [
  { label: '1 Uppercase Letter', regex: /(?=.*[A-Z])/ },
  { label: '1 Lowercase Letter', regex: /(?=.*[a-z])/ },
]

describe('PasswordInput', () => {
  it('test show/hide password options', () => {
    render(<PasswordInput hasProgressBar />)
    const inputField = screen.getByTestId('input-field')
    const visibilityButton = screen.getByTitle('visibility-button')
    expect(inputField).toHaveAttribute('type', 'password')
    fireEvent.click(visibilityButton)
    expect(inputField).toHaveAttribute('type', 'text')
  })

  it('test with a strong password', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput hasProgressBar onChange={mockOnChange} />)
    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'GoodPassword1!' } })

    expect(mockOnChange).toHaveBeenLastCalledWith({
      isValid: true,
      value: 'GoodPassword1!',
    })

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn).toHaveLength(5)
    expect(checkIconOff).toHaveLength(0)
    expect(checkIconOn[0]).toHaveStyleRule('color', '#0a0')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark).toHaveLength(1)
  })

  it('test with a no number and special character password', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput hasProgressBar onChange={mockOnChange} />)
    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'SamplePassword' } })

    expect(mockOnChange).toHaveBeenLastCalledWith({
      isValid: false,
      value: 'SamplePassword',
    })

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn).toHaveLength(3)
    expect(checkIconOff).toHaveLength(2)
    expect(checkIconOn[0]).toHaveStyleRule('color', '#0a0')
    expect(checkIconOff[0]).toHaveStyleRule('color', '#4f6f8f')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark).toHaveLength(0)
  })

  it('test with a weak password', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput hasProgressBar onChange={mockOnChange} />)
    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'bad' } })

    expect(mockOnChange).toHaveBeenLastCalledWith({
      isValid: false,
      value: 'bad',
    })

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn).toHaveLength(1)
    expect(checkIconOff).toHaveLength(4)
    expect(checkIconOff[0]).toHaveStyleRule('color', '#4f6f8f')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark).toHaveLength(0)
  })

  it('test with a manual regex checks', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput hasProgressBar regexChecks={sampleRegexChecks} onChange={mockOnChange} />)
    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'Password' } })

    expect(mockOnChange).toHaveBeenLastCalledWith({
      isValid: true,
      value: 'Password',
    })

    const checkIconOn = screen.queryAllByTestId('check-icon-on')
    const checkIconOff = screen.queryAllByTestId('check-icon-off')
    expect(checkIconOn).toHaveLength(2)
    expect(checkIconOff).toHaveLength(0)
    expect(checkIconOn[0]).toHaveStyleRule('color', '#0a0')

    const checkMark = screen.queryAllByTestId('check-mark-icon')
    expect(checkMark).toHaveLength(1)
  })

  it('ignores regex checks and returns valid if no progress bar', () => {
    const mockOnChange = jest.fn()
    render(<PasswordInput label='Password' onChange={mockOnChange} />)

    const inputField = screen.getByTestId('input-field')
    fireEvent.change(inputField, { target: { value: 'test' } })
    expect(mockOnChange).toHaveBeenCalledWith({ isValid: true, value: 'test' })
  })
})
