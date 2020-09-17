import React from 'react'
import { render } from 'testing-library'

import { Modal } from './index'

describe('Modal', () => {
  test('renders when close', () => {
    const { queryByText } = render(
      <Modal ariaLabel='Test Modal.' width={['100px', '200px', '500px']}>
        <div data-content>Content</div>
      </Modal>
    )
    expect(queryByText('Content')).toBeFalsy()
  })
  test('renders when open', () => {
    const { getByText, container } = render(
      <Modal width={['100px', '200px', '500px']} isOpen ariaLabel='Test Modal.'>
        <div data-content>Content</div>
      </Modal>
    )
    expect(getByText('Content')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
  test('renders when enable overflow and disable close button', () => {
    const { getByText, getByTestId, container } = render(
      <Modal
        ariaLabel='Test Modal.'
        width={['100px', '200px', '500px']}
        isOpen
        enableOverflow
        imgMode
      >
        <div data-content>Content</div>
      </Modal>
    )
    expect(getByText('Content')).toBeTruthy()
    expect(getByTestId('pcln-modal-close')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
  test('renders when enable header close button', () => {
    const { getByText } = render(
      <Modal
        ariaLabel='Test Modal.'
        width={['100px', '200px', '500px']}
        isOpen
        header={<div>header</div>}
      >
        <div data-content>Content</div>
      </Modal>
    )
    expect(getByText('header')).toBeTruthy()
  })
  test('renders with top alignment', () => {
    const { asFragment, getByText, getByTestId } = render(
      <Modal
        ariaLabel='Test Modal.'
        isOpen
        enableOverflow
        verticalAlignment='top'
      >
        <div data-content>Content</div>
      </Modal>
    )
    expect(getByText('Content')).toBeTruthy()
    expect(getByTestId('pcln-modal-close')).toBeTruthy()
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders with custom animation', () => {
    const { getByText, getByTestId, container } = render(
      <Modal
        ariaLabel='Test Modal.'
        isOpen
        enableOverflow
        overlayAnimation={(transitionstate) =>
          `${transitionstate === 'entering' ? `transform: scale(0.5);` : ''}`
        }
      >
        <div data-content>Content</div>
      </Modal>
    )
    expect(getByText('Content')).toBeTruthy()
    expect(getByTestId('pcln-modal-close')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('uses fullScreen styles', () => {
    const { getByText, getByTestId } = render(
      <Modal ariaLabel='Test Modal.' isOpen fullScreen>
        <div data-content>Content</div>
      </Modal>
    )
    const dialogContent = getByTestId('dialog-content')

    expect(getByText('Content')).toBeTruthy()
    expect(dialogContent).toHaveStyle(`
      height: 100vh;
      width: 100vw;
    `)
    expect(dialogContent).not.toHaveStyle(`
      max-height: 100vh;
      max-width: calc(100vw - 32px);
    `)
  })
})
