// @ts-nocheck
jest.useFakeTimers()

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (children) => children,
}))

import React from 'react'
import { act, fireEvent, render, screen } from '../__test__/testing-library'
import { ToastProvider } from '..'
import { MockToastChildren } from '../__test__/mocks/toasts'

describe('ToastProvider', () => {
  it('renders success toast and clears it', async () => {
    render(
      <ToastProvider>
        <MockToastChildren />
      </ToastProvider>
    )

    expect(screen.queryByText('Success Toast Message')).not.toBeInTheDocument()
    fireEvent.click(screen.queryByText('Add Success Toast'))
    expect(screen.queryByText('Success Toast Message')).toBeInTheDocument()

    const closeIcon = screen.getAllByTitle('close-toast')[0]

    act(() => {
      fireEvent.click(closeIcon)
      jest.runAllTimers()
    })

    expect(screen.queryByText('Success Toast Message')).not.toBeInTheDocument()
  })

  it('renders the max number of toasts', () => {
    render(
      <ToastProvider domRootId='test' maxToasts={4}>
        <MockToastChildren />
      </ToastProvider>
    )

    expect(screen.queryByText('Success Toast')).not.toBeInTheDocument()
    fireEvent.click(screen.queryByText('Add Success Toast'))
    fireEvent.click(screen.queryByText('Add Success Toast'))
    fireEvent.click(screen.queryByText('Add Success Toast'))
    fireEvent.click(screen.queryByText('Add Success Toast'))
    fireEvent.click(screen.queryByText('Add Success Toast'))
    expect(screen.queryAllByText('Success Toast Message').length).toBe(4)

    act(() => {
      fireEvent.click(screen.getAllByTitle('close-toast')[0])
      jest.runAllTimers()
    })

    expect(screen.queryAllByText('Success Toast Message').length).toBe(4)

    act(() => {
      fireEvent.click(screen.getAllByTitle('close-toast')[0])
      jest.runAllTimers()
    })

    expect(screen.queryAllByText('Success Toast Message').length).toBe(3)
  })

  it('renders a custom toast', () => {
    render(
      <ToastProvider enterAnimation='scaleFromCenter' exitAnimation='expandDown'>
        <MockToastChildren />
      </ToastProvider>
    )

    expect(screen.queryByText('Custom Toast Message')).not.toBeInTheDocument()
    fireEvent.click(screen.queryByText('Add Custom Toast'))
    expect(screen.queryByText('Custom Toast Message')).toBeInTheDocument()
  })
})
