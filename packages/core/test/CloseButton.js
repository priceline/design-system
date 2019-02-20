import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, cleanup } from 'react-testing-library'
import { CloseButton } from '../src'

afterEach(cleanup)

describe('CloseButton', () => {
  test('executes onClick prop on click', () => {
    const handleClick = jest.fn()
    const { container } = render(<CloseButton onClick={handleClick} />)
    fireEvent.click(container.firstChild)
    expect(handleClick).toBeCalled()
  })

  test('renders without props', () => {
    const json = renderer.create(<CloseButton />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
