import React from 'react'
import { render, fireEvent } from 'testing-library'

import { IconButton } from '..'

describe('IconButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(
      <IconButton name='Key' onClick={handleClick} />
    )

    fireEvent.click(getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  test('renders without props', () => {
    const json = rendererCreateWithTheme(<IconButton name='Key' />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
