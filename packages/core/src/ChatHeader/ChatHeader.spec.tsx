import React from 'react'
import { render, screen, fireEvent } from '../__test__/testing-library'
import { ChatHeader } from './ChatHeader'

describe('ChatHeader', () => {
  test('renders children', () => {
    render(<ChatHeader onClose={jest.fn()}>Header Content</ChatHeader>)

    expect(screen.getByText('Header Content')).toBeInTheDocument()
  })

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn()
    render(<ChatHeader onClose={onClose}>Header Content</ChatHeader>)
    // Minimize button shouldn't be present if we haven't provided a function to call when clicked
    const minimizeButton = screen.queryByTestId('chat-header-minimize-button')
    expect(minimizeButton).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId('chat-header-close-button'))
    expect(onClose).toHaveBeenCalled()
  })

  test('calls onMinimize when minimize button is clicked', () => {
    const onMinimize = jest.fn()
    render(
      <ChatHeader onMinimize={onMinimize} onClose={jest.fn()}>
        Header Content
      </ChatHeader>
    )

    fireEvent.click(screen.getByTestId('chat-header-minimize-button'))

    expect(onMinimize).toHaveBeenCalled()
  })
})
