import React from 'react'
import { render, fireEvent } from 'testing-library'

import { CloseButton } from '..'

describe('CloseButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const { getByTitle } = render(<CloseButton onClick={handleClick} />)

    fireEvent.click(getByTitle('close'))
    expect(handleClick).toHaveBeenCalled()
  })

  test('renders without props', () => {
    const json = rendererCreateWithTheme(<CloseButton />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
