import React from 'react'
import { render, fireEvent, wait, getByRole } from 'react-testing-library'
import Popover from '../src'
import { Box, Button } from 'pcln-design-system'

const InnerContent = ({ handleClose }) => (
  <Box>
    <p>Hello there!</p>
    <button onClick={handleClose}>Click me to close button!</button>
  </Box>
)

const popoverProps = {
  renderContent: InnerContent,
  ariaLabel: 'Top PopOver',
  placement: 'top',
  idx: 1,
  width: 400
}

const triggerButtonText = 'Trigger Button'

const { rerender, getByText, queryByText, container, debug, unmount } = render(
  <Popover {...popoverProps}>
    <Button>{triggerButtonText}</Button>
  </Popover>
)

describe('Popover', () => {
  describe('Trigger Element', () => {
    test('Renders trigger element and appends action props', () => {
      rerender(
        <Popover {...popoverProps}>
          <Button>{triggerButtonText}</Button>
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

    test('toggle popover from trigger element', () => {
      rerender(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      fireEvent.click(getByText(triggerButtonText))
      expect(queryByText('Hello there!')).toBeFalsy()
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

    test('pressing ESC key, closes popover', () => {
      rerender(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      fireEvent.keyUp(document.body, {
        key: 'Escape',
        keyCode: 27,
        which: 27
      })
      expect(queryByText('Hello there!')).toBeFalsy()
      unmount()
    })

    test('pressing any other key, does not close popover', () => {
      rerender(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      fireEvent.keyUp(document.body, {
        key: 'Enter',
        keyCode: 13,
        which: 13
      })
      expect(getByText('Hello there!')).toBeTruthy()
      unmount()
    })
  })

  describe('UI Positioning', () => {
    test('Bottom', async () => {
      rerender(
        <Popover {...popoverProps} placement="bottom">
          <button>{triggerButtonText}</button>
        </Popover>
      )
      await wait(() => fireEvent.click(getByText(triggerButtonText)))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
      unmount()
    })

    test('Bottom End', async () => {
      rerender(
        <Popover {...popoverProps} placement="bottom-end">
          <button>{triggerButtonText}</button>
        </Popover>
      )
      await wait(() => fireEvent.click(getByText(triggerButtonText)))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
      unmount()
    })

    test('Bottom Start', async () => {
      rerender(
        <Popover {...popoverProps} placement="bottom-start">
          <button>{triggerButtonText}</button>
        </Popover>
      )
      await wait(() => fireEvent.click(getByText(triggerButtonText)))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
      unmount()
    })
  })
})
