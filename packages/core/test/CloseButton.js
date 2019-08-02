import React from 'react'
import { fireEvent, cleanup } from 'react-testing-library'
import { CloseButton } from '../src'

afterEach(cleanup)

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
