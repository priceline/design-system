jest.useFakeTimers()

import React from 'react'
import { fireEvent, render, screen } from '../__test__/testing-library'
import { Toast } from '../Toast'

describe('Toast', () => {
  it('renders a success toast that closes after 2 seconds', () => {
    const mockRemoveClick = jest.fn()
    render(
      <Toast
        id={10}
        lifespan={2000}
        text='Success Message'
        variant='success'
        onRemoveClick={mockRemoveClick}
      />
    )

    expect(screen.getByText('Success Message')).toBeInTheDocument()

    expect(mockRemoveClick).toHaveBeenCalledTimes(0)
    jest.runAllTimers()
    expect(mockRemoveClick).toHaveBeenCalledTimes(1)
    expect(mockRemoveClick).toHaveBeenCalledWith(10)
  })

  it('renders an error toast that needs to be closed manually', () => {
    const mockRemoveClick = jest.fn()
    render(<Toast id={10} text='Error Message' variant='error' onRemoveClick={mockRemoveClick} />)

    expect(screen.getByText('Error Message')).toBeInTheDocument()

    expect(mockRemoveClick).toHaveBeenCalledTimes(0)
    jest.runAllTimers()
    expect(mockRemoveClick).toHaveBeenCalledTimes(0)

    fireEvent.click(screen.getAllByTitle('close-toast')[0])
    expect(mockRemoveClick).toHaveBeenCalledTimes(1)
    expect(mockRemoveClick).toHaveBeenCalledWith(10)
  })

  it('renders an information toast', () => {
    const mockRemoveClick = jest.fn()
    render(
      <Toast
        id={10}
        lifespan={2000}
        text='Information Message'
        variant='information'
        onRemoveClick={mockRemoveClick}
      />
    )
    expect(screen.getByText('Information Message')).toBeInTheDocument()
  })
})
