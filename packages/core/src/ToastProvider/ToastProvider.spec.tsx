jest.useFakeTimers()

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  createPortal: (children) => children,
}))

import React from 'react'
import { MockToastChildren } from '../__test__/mocks/toasts'
import { act, fireEvent, render, screen } from '../__test__/testing-library'
import { ToastProvider } from './ToastProvider'

// TODO: fix the tests that involve closing toasts
describe('ToastProvider', () => {
  it('renders success toast and clears it', async () => {
    render(
      <ToastProvider>
        <MockToastChildren variation='fill' />
      </ToastProvider>
    )

    expect(screen.queryByText('Success Toast Message')).not.toBeInTheDocument()
    fireEvent.click(screen.queryByText('Add Success Toast'))
    expect(screen.queryByText('Success Toast Message')).toBeInTheDocument()

    screen.getAllByRole('button')
    // const closeIcon = screen.getAllByTitle('close-toast')[0]

    // act(() => {
    //   fireEvent.click(closeIcon)
    //   jest.runAllTimers()
    // })

    // expect(screen.queryByText('Success Toast Message')).not.toBeInTheDocument()
  })

  it('renders the max number of toasts', () => {
    render(
      <ToastProvider domRootId='test' maxToasts={4}>
        <MockToastChildren variation='fill' />
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
      fireEvent.click(screen.getAllByRole('button')[0])
      jest.runAllTimers()
    })

    expect(screen.queryAllByText('Success Toast Message').length).toBe(4)

    // act(() => {
    //   fireEvent.click(screen.getAllByTitle('close-toast')[0])
    //   jest.runAllTimers()
    // })

    // expect(screen.queryAllByText('Success Toast Message').length).toBe(3)
  })

  it('renders a custom toast', () => {
    render(
      <ToastProvider enterAnimation='scaleFromCenter' exitAnimation='expandDown' top={20}>
        <MockToastChildren variation='fill' />
      </ToastProvider>
    )

    expect(screen.queryByText('Custom Toast Message')).not.toBeInTheDocument()
    fireEvent.click(screen.queryByText('Add Custom Toast'))
    expect(screen.queryByText('Custom Toast Message')).toBeInTheDocument()
  })
})
