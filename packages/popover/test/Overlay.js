import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import Overlay from '../src/Overlay'

const overlayProps = {
  overlayOpacity: 0.3,
  zIndex: 200
}

afterEach(cleanup)

describe('Background Overlay', () => {
  test('Active overlay', () => {
    const { container } = render(
      <Overlay {...overlayProps} popoverOpen={true} />
    )
    expect(container).toMatchSnapshot()
  })

  test('Inactive overlay', () => {
    const { container } = render(
      <Overlay {...overlayProps} popoverOpen={false} />
    )
    expect(container).toMatchSnapshot()
  })

  test('Handle click event', () => {
    const onClick = jest.fn()
    const { container } = render(
      <Overlay {...overlayProps} popoverOpen={true} handleClick={onClick} />
    )
    fireEvent.click(container.firstChild)
    expect(onClick).toHaveBeenCalled()
  })
})
