jest.useFakeTimers()

import { Success } from 'pcln-icons'
import React from 'react'
import { fireEvent, render, screen } from '../__test__/testing-library'
import { Toast } from './Toast'

describe('Toast', () => {
  it('renders a success toast that closes after 2 seconds', () => {
    const mockRemoveClick = jest.fn()
    render(
      <Toast id={10} lifespan={2000} color='success' onRemoveClick={mockRemoveClick}>
        Success Message
      </Toast>
    )

    expect(screen.getByText('Success Message')).toBeInTheDocument()

    expect(mockRemoveClick).toHaveBeenCalledTimes(0)
    jest.runAllTimers()
    expect(mockRemoveClick).toHaveBeenCalledTimes(1)
    expect(mockRemoveClick).toHaveBeenCalledWith(10)
  })

  it('renders an error toast that needs to be closed manually', () => {
    const mockRemoveClick = jest.fn()
    render(
      <Toast id={10} color='error' onRemoveClick={mockRemoveClick}>
        Error Message
      </Toast>
    )

    expect(screen.getByText('Error Message')).toBeInTheDocument()

    expect(mockRemoveClick).toHaveBeenCalledTimes(0)
    jest.runAllTimers()
    expect(mockRemoveClick).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getByRole('button'))
    expect(mockRemoveClick).toHaveBeenCalledTimes(1)
    expect(mockRemoveClick).toHaveBeenCalledWith(10)
  })

  it('renders a default toast', () => {
    const mockRemoveClick = jest.fn()
    render(
      <Toast id={10} lifespan={2000} onRemoveClick={mockRemoveClick}>
        Information Message
      </Toast>
    )
    expect(screen.getByText('Information Message')).toBeInTheDocument()
  })

  it('renders a success border toast', () => {
    render(
      <Toast id={10} color='success' icon={<Success data-testid='success-icon' />} variation='border'>
        Success Border Message
      </Toast>
    )
    const toast = screen.getByText('Success Border Message')
    expect(toast).toBeInTheDocument()
    expect(toast.parentNode.parentNode).toHaveStyleRule('background-color', '#ecf7ec')
    expect(toast.parentNode.parentNode).toHaveStyleRule('color', '#001833')
    expect(toast.parentNode.parentNode).toHaveStyleRule('border-left', '4px solid #0a0')

    const icon = screen.getByTestId('success-icon')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveStyleRule('color', '#0a0')
  })
})
