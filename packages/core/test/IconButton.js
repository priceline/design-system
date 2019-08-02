/* eslint-env jest */
import React from 'react'
import { fireEvent, cleanup } from 'react-testing-library'
import { IconButton } from '../src'

afterEach(cleanup)

describe('IconButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const { container } = renderWithTheme(<IconButton onClick={handleClick} />)
    fireEvent.click(container.firstChild)
    expect(handleClick).toBeCalled()
  })

  test('renders without props', () => {
    const json = rendererCreateWithTheme(<IconButton />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
