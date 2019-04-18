import React from 'react'
import { render, fireEvent, wait, getByRole } from 'react-testing-library'
import Popover from '../src/popover'

const InnerContent = ({ handleClose }) => (
  <div>
    <p>Hello there!</p>
    <button onClick={handleClose}>Click me to close button!</button>
  </div>
)

const popoverProps = {
  renderContent: InnerContent,
  ariaLabel: 'Top PopOver',
  placement: 'auto',
  idx: 1,
  width: 400
}

const triggerButtonText = 'Trigger Button'

const { rerender, getByText, queryByText, container, debug, unmount } = render(
  <Popover {...popoverProps}>
    <button>{triggerButtonText}</button>
  </Popover>
)

describe('Popover', () => {
  describe('Trigger Element', () => {
    test('Renders trigger element and appends action props', () => {
      rerender(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      expect(container.firstChild).toMatchSnapshot()
      unmount()
    })

    test('clicking on trigger element, opens popover', () => {
      rerender(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      expect(getByText('Hello there!')).toBeTruthy()
      unmount()
    })

    test('clicking on close element inside popover, closes popover', () => {
      rerender(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      fireEvent.click(getByText('Click me to close button!'))
      expect(queryByText('Hello there!')).toBeFalsy()
      unmount()
    })
  })

  describe('UI Positioning', () => {
    test('Content is rendered according to placement prop', async () => {
      rerender(
        <Popover {...popoverProps} placement="bottom">
          <button>{triggerButtonText}</button>
        </Popover>
      )
      await wait(() => fireEvent.click(getByText(triggerButtonText)))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
    })
  })
})
