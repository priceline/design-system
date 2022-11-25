import React from 'react'
import { Swatch } from '.'
import { render, fireEvent } from '../__test__/testing-library'

const mockColors = ['red', 'green', 'blue']

describe('Swatch', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Swatch colors={mockColors} />)

    mockColors.map((color, idx) => {
      expect(getByTestId(`${idx}-${color}`)).toHaveStyle(`background-color: ${color}`)
      expect(getByTestId(`${idx}-${color}`)).toHaveStyle(`border: 1px solid #c0cad5}`)
    })
  })

  it('should call onClick callback with selected color value', () => {
    const mockOnClick = jest.fn()

    const { getByTestId } = render(<Swatch colors={mockColors} onClick={mockOnClick} />)

    mockColors.map((color, idx) => {
      expect(getByTestId(`${idx}-${color}`)).toHaveStyle('cursor: pointer')

      fireEvent.click(getByTestId(`${idx}-${color}`))
      expect(mockOnClick).toHaveBeenLastCalledWith(color)
    })
  })

  it('does not crash when onClick callback is not provided', () => {
    const mockOnClick = jest.fn()

    const { getByTestId } = render(<Swatch colors={mockColors} />)

    mockColors.map((color, idx) => {
      expect(getByTestId(`${idx}-${color}`)).toHaveStyle('cursor: default')

      fireEvent.click(getByTestId(`${idx}-${color}`))
      expect(mockOnClick).toHaveBeenCalledTimes(0)
    })
  })
})
