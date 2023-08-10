import React from 'react'
import { fireEvent, render, screen } from 'testing-library'
import MenuItem from './MenuItem'

describe('MenuItem', () => {
  it('handles click', () => {
    const mockOnClick = jest.fn()
    const mockHandleClose = jest.fn()

    render(
      <MenuItem onClick={mockOnClick} handleClose={mockHandleClose}>
        Recommended
      </MenuItem>
    )

    expect(mockOnClick).toHaveBeenCalledTimes(0)
    expect(mockHandleClose).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('option'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockHandleClose).toHaveBeenCalledTimes(1)
  })
})
