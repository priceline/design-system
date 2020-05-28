import React from 'react'
import { fireEvent } from '@testing-library/react'

import { CloseButton } from '..'

describe('CloseButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const { container } = renderWithTheme(<CloseButton onClick={handleClick} />)
    fireEvent.click(container.firstChild)
    expect(handleClick).toBeCalled()
  })

  test('renders without props', () => {
    const json = rendererCreateWithTheme(<CloseButton />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
