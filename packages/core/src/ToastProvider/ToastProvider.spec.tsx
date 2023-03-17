// @ts-nocheck
jest.useFakeTimers()

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (children) => children,
}))

import React from 'react'
import { fireEvent, render, screen } from '../__test__/testing-library'
import { ToastProvider, useToast } from '..'
import { Button, Flex } from '..'

const Children = () => {
  const { addToast } = useToast()

  return (
    <Flex>
      <Button color='error' onClick={() => addToast('Error Toast', 'error')}>
        Add Error Toast
      </Button>
      <Button onClick={() => addToast('Information Toast', 'information')} mx={3}>
        Add Information Toast
      </Button>
      <Button color='success' onClick={() => addToast('Success Toast', 'success')}>
        Add Success Toast
      </Button>
    </Flex>
  )
}

describe('ToastProvider', () => {
  it('renders success toast and clears it', async () => {
    render(
      <ToastProvider>
        <Children />
      </ToastProvider>
    )

    expect(screen.queryByText('Success Toast')).not.toBeInTheDocument()
    fireEvent.click(screen.queryByText('Add Success Toast'))
    expect(screen.queryByText('Success Toast')).toBeInTheDocument()

    const closeIcon = screen.getAllByTitle('close-toast')[0]
    fireEvent.click(closeIcon)
    jest.runAllTimers()

    expect(screen.queryByText('Success Toast')).not.toBeInTheDocument()
  })

  it('renders the max number of toasts', () => {
    render(
      <ToastProvider domRootId='test' maxToasts={4}>
        <Children />
      </ToastProvider>
    )

    expect(screen.queryByText('Success Toast')).not.toBeInTheDocument()
    fireEvent.click(screen.queryByText('Add Success Toast'))
    fireEvent.click(screen.queryByText('Add Success Toast'))
    fireEvent.click(screen.queryByText('Add Success Toast'))
    fireEvent.click(screen.queryByText('Add Success Toast'))
    fireEvent.click(screen.queryByText('Add Success Toast'))
    expect(screen.queryAllByText('Success Toast').length).toBe(4)

    fireEvent.click(screen.getAllByTitle('close-toast')[0])
    jest.runAllTimers()
    expect(screen.queryAllByText('Success Toast').length).toBe(4)

    fireEvent.click(screen.getAllByTitle('close-toast')[0])
    jest.runAllTimers()
    expect(screen.queryAllByText('Success Toast').length).toBe(3)
  })
})
