import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Overlay from '../src/overlay'

const overlayProps = {
  overlayOpacity: 0.3,
  'z-index': 200
}

const { rerender, container, debug, unmount } = render(
  <Overlay popoverOpen opacity={0.3} />
)

describe('Background Overlay', () => {
  test('Active overlay', () => {
    rerender(<Overlay {...overlayProps} popoverOpen={true} />)
    expect(container).toMatchSnapshot()
    unmount()
  })

  test('Inactive overlay', () => {
    rerender(<Overlay {...overlayProps} popoverOpen={false} />)
    expect(container).toMatchSnapshot()
    unmount()
  })

  test('Handle click envent', () => {
    const onClick = jest.fn()

    rerender(
      <Overlay {...overlayProps} popoverOpen={false} handleClick={onClick} />
    )
    fireEvent.click(container.firstChild)
    expect(onClick).toHaveBeenCalled()
    unmount()
  })
})
