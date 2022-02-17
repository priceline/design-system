import React from 'react'
import { render, fireEvent } from '../__test__/testing-library'

import { Step } from '.'

describe('Step', () => {
  it('should render correctly with no props without throwing', () => {
    expect(() => {
      const { asFragment } = render(<Step>Step</Step>)

      expect(asFragment()).toMatchSnapshot()
    }).not.toThrow()
  })

  it('should render an active step correctly', () => {
    const { asFragment, container, getByTestId } = render(
      <Step active data-testid='Step'>
        Step
      </Step>
    )

    expect(asFragment()).toMatchSnapshot()

    expect(getByTestId('Step')).toHaveStyleRule('cursor', 'default')

    expect(container.querySelector('svg')).not.toBeInTheDocument()
  })

  it('should render a completed step correctly', () => {
    const { asFragment, container, getByTestId } = render(
      <Step completed data-testid='Step'>
        Step
      </Step>
    )

    expect(asFragment()).toMatchSnapshot()

    expect(getByTestId('Step')).toHaveStyleRule('cursor', 'default')

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should render a step that is "active" and "completed" correctly', () => {
    const { asFragment, container, getByTestId } = render(
      <Step active completed data-testid='Step'>
        Step
      </Step>
    )

    expect(asFragment()).toMatchSnapshot()

    expect(getByTestId('Step')).toHaveStyleRule('cursor', 'default')

    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('should handle onClick', () => {
    const handleClick = jest.fn()

    const { asFragment, getByTestId, getByText } = render(
      <Step active data-testid='Step' onClick={handleClick}>
        Step
      </Step>
    )

    expect(asFragment()).toMatchSnapshot()

    expect(getByTestId('Step')).toHaveStyleRule('cursor', 'pointer')

    fireEvent.click(getByText('Step'))
    expect(handleClick).toHaveBeenCalled()
  })
})
