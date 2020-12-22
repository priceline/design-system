import React from 'react'
import { fireEvent, render, screen } from 'testing-library'
import MenuItem from './MenuItem'

describe('MenuItem', () => {
  it('renders not selected', () => {
    render(<MenuItem>Recommended</MenuItem>)

    const item = screen.getByRole('option')
    expect(item).toHaveStyleRule('color', '#001023')
    expect(item).toHaveStyleRule('background-color', '#fff')
  })

  it('renders selected', () => {
    render(<MenuItem selected>Recommended</MenuItem>)

    const item = screen.getByRole('option')
    expect(item).toHaveStyleRule('color', '#001023')
    expect(item).toHaveStyleRule('background-color', '#edf0f3')
    expect(screen.getAllByTitle('check')[0]).toBeInTheDocument()
  })

  it('renders with promoPrimary color', () => {
    render(
      <MenuItem selected color='promoPrimary'>
        Recommended
      </MenuItem>
    )

    const item = screen.getByRole('option')
    expect(item).toHaveStyleRule('color', '#001023')
    expect(item).toHaveStyleRule('background-color', '#edf0f3')
  })

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
