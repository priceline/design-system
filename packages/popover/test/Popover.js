import React from 'react'
import { fireEvent, wait, getByRole } from '@testing-library/react'
import Popover from '../src'
import { Box, Button } from 'pcln-design-system'

// eslint-disable-next-line react/prop-types
const InnerContent = ({ handleClose }) => (
  <Box>
    <p>Hello there!</p>
    <button onClick={handleClose}>Click me to close button!</button>
  </Box>
)

const popoverProps = {
  renderContent: InnerContent,
  ariaLabel: 'Top Popover',
  placement: 'top',
  idx: 1,
  width: 400,
}

const triggerButtonText = 'Trigger Button'

describe('Popover', () => {
  describe('Trigger Element', () => {
    test('Renders trigger element and appends action props', () => {
      const { container } = renderWithTheme(
        <Popover {...popoverProps}>
          <Button>{triggerButtonText}</Button>
        </Popover>
      )
      expect(container.firstChild).toMatchSnapshot()
    })

    test('toggle popover from trigger element', () => {
      const { getByText, getByLabelText, queryByText } = renderWithTheme(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )

      expect(getByLabelText(popoverProps.ariaLabel)).toBeTruthy()

      const button = getByText(triggerButtonText)
      fireEvent.click(button)
      expect(getByText('Hello there!')).toBeTruthy()
      fireEvent.click(button)
      expect(queryByText('Hello there!')).toBeFalsy()
    })

    test('renders with FocusLock', () => {
      const { getByText, asFragment } = renderWithTheme(
        <Popover {...popoverProps} trapFocus>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      expect(getByText('Hello there!')).toBeTruthy()
      expect(asFragment()).toMatchSnapshot()
    })

    test('clicking on close element inside popover, closes popover', () => {
      const { getByText, queryByText } = renderWithTheme(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      fireEvent.click(getByText('Click me to close button!'))
      expect(queryByText('Hello there!')).toBeFalsy()
    })

    test('pressing ESC key, closes popover', () => {
      const { getByText, queryByText } = renderWithTheme(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      fireEvent.keyUp(document.body, {
        key: 'Escape',
        keyCode: 27,
        which: 27,
      })
      expect(queryByText('Hello there!')).toBeFalsy()
    })

    test('pressing any other key, does not close popover', () => {
      const { getByText } = renderWithTheme(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      fireEvent.keyUp(document.body, {
        key: 'Enter',
        keyCode: 13,
        which: 13,
      })
      expect(getByText('Hello there!')).toBeTruthy()
    })
  })

  describe('UI Positioning', () => {
    test('Bottom', async () => {
      const { getByText } = renderWithTheme(
        <Popover {...popoverProps} placement='bottom'>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      await wait(() => fireEvent.click(getByText(triggerButtonText)))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
    })

    test('Bottom End', async () => {
      const { getByText } = renderWithTheme(
        <Popover {...popoverProps} placement='bottom-end'>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      await wait(() => fireEvent.click(getByText(triggerButtonText)))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
    })

    test('Bottom Start', async () => {
      const { getByText } = renderWithTheme(
        <Popover {...popoverProps} placement='bottom-start'>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      await wait(() => fireEvent.click(getByText(triggerButtonText)))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
    })
  })
})
