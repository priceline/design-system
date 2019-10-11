/* eslint-env jest */
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { IconButton } from '../src'

describe('IconButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const { container } = renderWithTheme(
      <IconButton name="Key" onClick={handleClick} />
    )
    fireEvent.click(container.firstChild)
    expect(handleClick).toBeCalled()
  })

  test('renders without props', () => {
    const json = rendererCreateWithTheme(<IconButton name="Key" />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
