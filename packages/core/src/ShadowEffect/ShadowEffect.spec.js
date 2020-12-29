import React from 'react'
import { fireEvent, render, screen } from 'testing-library'
import ShadowEffect from './ShadowEffect'
import { Input } from '../Input'

describe('ShadowEffect', () => {
  it('opens when clicked', () => {
    const mockOnOpen = jest.fn()
    const mockOnClick = jest.fn()
    render(
      <ShadowEffect onOpen={mockOnOpen} data-testid='overlay'>
        <Input onClick={mockOnClick} id='input' data-testid='input' />
      </ShadowEffect>
    )

    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    expect(mockOnOpen).toHaveBeenCalledTimes(0)
    expect(mockOnClick).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByTestId('input'))
    expect(mockOnOpen).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('overlay')).toBeInTheDocument()
  })

  it('closes if overlay clicked', () => {
    const mockOnClose = jest.fn()
    render(
      <ShadowEffect onClose={mockOnClose} data-testid='overlay'>
        <Input id='input' data-testid='input' />
      </ShadowEffect>
    )

    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId('input'))
    expect(screen.queryByTestId('overlay')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('overlay'))
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
  })

  it('opens when focused', () => {
    const mockOnOpen = jest.fn()
    const mockOnFocus = jest.fn()
    render(
      <ShadowEffect shouldOpenOnFocus onOpen={mockOnOpen} data-testid='overlay'>
        <Input id='input' onFocus={mockOnFocus} data-testid='input' />
      </ShadowEffect>
    )

    expect(mockOnOpen).toHaveBeenCalledTimes(0)
    expect(mockOnFocus).toHaveBeenCalledTimes(0)
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    screen.getByTestId('input').focus()
    expect(mockOnOpen).toHaveBeenCalledTimes(1)
    expect(mockOnFocus).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('overlay')).toBeInTheDocument()
  })

  it('does not open on focus if not set', () => {
    const mockOnOpen = jest.fn()
    const mockOnFocus = jest.fn()
    render(
      <ShadowEffect onOpen={mockOnOpen} data-testid='overlay'>
        <Input onFocus={mockOnFocus} id='input' data-testid='input' />
      </ShadowEffect>
    )

    expect(mockOnOpen).toHaveBeenCalledTimes(0)
    expect(mockOnFocus).toHaveBeenCalledTimes(0)
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    screen.getByTestId('input').focus()
    expect(mockOnOpen).toHaveBeenCalledTimes(0)
    expect(mockOnFocus).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
  })

  it('closes when blurred', () => {
    const mockOnClose = jest.fn()
    const mockOnBlur = jest.fn()
    render(
      <ShadowEffect
        shouldOpenOnFocus
        shouldCloseOnBlur
        onClose={mockOnClose}
        data-testid='overlay'
      >
        <Input id='input' onBlur={mockOnBlur} data-testid='input' />
      </ShadowEffect>
    )

    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    screen.getByTestId('input').focus()
    expect(screen.queryByTestId('overlay')).toBeInTheDocument()
    expect(mockOnClose).toHaveBeenCalledTimes(0)
    expect(mockOnBlur).toHaveBeenCalledTimes(0)
    screen.getByTestId('input').blur()
    expect(mockOnClose).toHaveBeenCalledTimes(1)
    expect(mockOnBlur).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
  })

  it('does not close when blurred if not set', () => {
    const mockOnClose = jest.fn()
    const mockOnBlur = jest.fn()
    render(
      <ShadowEffect
        shouldOpenOnFocus
        onClose={mockOnClose}
        data-testid='overlay'
      >
        <Input id='input' onBlur={mockOnBlur} data-testid='input' />
      </ShadowEffect>
    )

    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    screen.getByTestId('input').focus()
    expect(screen.queryByTestId('overlay')).toBeInTheDocument()
    expect(mockOnClose).toHaveBeenCalledTimes(0)
    expect(mockOnBlur).toHaveBeenCalledTimes(0)
    screen.getByTestId('input').blur()
    expect(mockOnClose).toHaveBeenCalledTimes(0)
    expect(mockOnBlur).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('overlay')).toBeInTheDocument()
  })

  it('closes when escape is pressed', () => {
    const mockOnKeyDown = jest.fn()
    render(
      <ShadowEffect data-testid='overlay'>
        <Input id='input' onKeyDown={mockOnKeyDown} data-testid='input' />
      </ShadowEffect>
    )

    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId('input'))
    expect(screen.queryByTestId('overlay')).toBeInTheDocument()

    expect(mockOnKeyDown).toHaveBeenCalledTimes(0)
    fireEvent.keyDown(screen.getByTestId('input'), { key: 'Escape' })
    expect(mockOnKeyDown).toHaveBeenCalledTimes(1)

    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
  })

  it('does not close for other key presses', () => {
    const mockOnKeyDown = jest.fn()
    render(
      <ShadowEffect data-testid='overlay'>
        <Input id='input' onKeyDown={mockOnKeyDown} data-testid='input' />
      </ShadowEffect>
    )

    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument()
    fireEvent.click(screen.getByTestId('input'))
    expect(screen.queryByTestId('overlay')).toBeInTheDocument()

    expect(mockOnKeyDown).toHaveBeenCalledTimes(0)
    fireEvent.keyDown(screen.getByTestId('input'), { key: 'Enter' })
    expect(mockOnKeyDown).toHaveBeenCalledTimes(1)

    expect(screen.queryByTestId('overlay')).toBeInTheDocument()
  })

  it('errors if provided multiple children', () => {
    expect(() => {
      render(
        <ShadowEffect>
          <Input id='input' />
          <Input id='input2' />
        </ShadowEffect>
      )
    }).toThrow()
  })
})
