import React from 'react'
import { render, fireEvent, getByRole } from 'testing-library'
import { Box, Button, Text, ThemeProvider } from 'pcln-design-system'

import Popover from './Popover'

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
  let consoleError
  beforeEach(() => {
    consoleError = console.error
    console.error = jest.fn()
  })
  afterEach(() => (console.error = consoleError))

  describe('Trigger Element', () => {
    it('Renders trigger element and appends action props', () => {
      const { container } = render(
        <Popover {...popoverProps}>
          <Button>{triggerButtonText}</Button>
        </Popover>
      )
      expect(container.firstChild).toMatchSnapshot()
    })

    it('toggle popover from trigger element', () => {
      const { getByText, getByLabelText, queryByText } = render(
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

    it('renders with FocusLock', () => {
      const { getByText, asFragment } = render(
        <Popover {...popoverProps} trapFocus>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      expect(getByText('Hello there!')).toBeTruthy()
      expect(asFragment()).toMatchSnapshot()
    })

    it('renders content with nested ThemeProviders', () => {
      const expectedColor = 'red'
      const { getByText } = render(
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                base: expectedColor,
              },
            },
          }}
        >
          <Popover
            {...popoverProps}
            renderContent={() => <Text color='primary.base'>hello world</Text>}
          >
            <button>{triggerButtonText}</button>
          </Popover>
        </ThemeProvider>
      )
      fireEvent.click(getByText(triggerButtonText))
      expect(getByText('hello world')).toHaveStyleRule('color', 'red')
    })

    it('clicking on close element inside popover, closes popover', () => {
      const { getByText, queryByText } = render(
        <Popover {...popoverProps}>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      fireEvent.click(getByText('Click me to close button!'))
      expect(queryByText('Hello there!')).toBeFalsy()
    })

    it('pressing ESC key, closes popover', () => {
      const { getByText, queryByText } = render(
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

    it('pressing any other key, does not close popover', () => {
      const { getByText } = render(
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

    it('onOpen event', () => {
      const mockOnOpen = jest.fn()
      const { getByText } = render(
        <Popover {...popoverProps} onOpen={mockOnOpen}>
          <button>{triggerButtonText}</button>
        </Popover>
      )

      expect(mockOnOpen).toHaveBeenCalledTimes(0)
      fireEvent.click(getByText(triggerButtonText))
      expect(mockOnOpen).toHaveBeenCalledTimes(1)
      expect(mockOnOpen).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'click' })
      )
    })

    it('onClose event', () => {
      const mockOnClose = jest.fn()
      const { getByText } = render(
        <Popover {...popoverProps} onClose={mockOnClose}>
          <button>{triggerButtonText}</button>
        </Popover>
      )

      fireEvent.click(getByText(triggerButtonText))
      expect(mockOnClose).toHaveBeenCalledTimes(0)
      fireEvent.keyUp(document.body, {
        key: 'Escape',
        keyCode: 27,
        which: 27,
      })
      expect(mockOnClose).toHaveBeenCalledTimes(1)
      expect(mockOnClose).toHaveBeenCalledWith(expect.any(Object))
    })
  })

  describe('UI Positioning', () => {
    it('Bottom', () => {
      const { getByText } = render(
        <Popover {...popoverProps} placement='bottom'>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
    })

    it('Bottom End', () => {
      const { getByText } = render(
        <Popover {...popoverProps} placement='bottom-end'>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
    })

    it('Bottom Start', () => {
      const { getByText } = render(
        <Popover {...popoverProps} placement='bottom-start'>
          <button>{triggerButtonText}</button>
        </Popover>
      )
      fireEvent.click(getByText(triggerButtonText))
      expect(getByRole(document.body, 'dialog')).toMatchSnapshot()
    })
  })

  describe('colors', () => {
    it('renders with background.lightest color as default', () => {
      const { getByText, getByTestId } = render(
        <Popover {...popoverProps}>
          <Button>{triggerButtonText}</Button>
        </Popover>
      )

      fireEvent.click(getByText(triggerButtonText))
      expect(getByTestId('dialog-content')).toHaveStyle({
        'background-color': '#FFF',
      })
    })

    it('renders with error color as default', () => {
      const { getByText, getByTestId } = render(
        <Popover {...popoverProps} color='error'>
          <Button>{triggerButtonText}</Button>
        </Popover>
      )

      fireEvent.click(getByText(triggerButtonText))
      expect(getByTestId('dialog-content')).toHaveStyle({
        'background-color': '#C00',
      })
    })
  })
})
