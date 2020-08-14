import React from 'react'
import { fireEvent } from '@testing-library/react'
import Overlay from '../src/Overlay'

const overlayProps = {
  overlayOpacity: 0.3,
  zIndex: 200,
}

describe('Background Overlay', () => {
  test('Active overlay', () => {
    const { container } = renderWithTheme(
      <Overlay {...overlayProps} popoverOpen={true} />
    )
    expect(container).toMatchSnapshot()
  })

  test('Inactive overlay', () => {
    const { container } = renderWithTheme(
      <Overlay {...overlayProps} popoverOpen={false} />
    )
    expect(container).toMatchSnapshot()
  })

  test('Handle click event', () => {
    const onClick = jest.fn()
    const { container } = renderWithTheme(
      <Overlay {...overlayProps} popoverOpen={true} handleClick={onClick} />
    )
    fireEvent.click(container.firstChild)
    expect(onClick).toHaveBeenCalled()
  })
})
