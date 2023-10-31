import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { CloseButton } from '..'

describe('CloseButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    render(<CloseButton onClick={handleClick} />)

    const button = screen.getByTitle('close')

    fireEvent.click(button)
    fireEvent.mouseEnter(button)
    fireEvent.mouseLeave(button)

    expect(handleClick).toHaveBeenCalled()
  })
})
