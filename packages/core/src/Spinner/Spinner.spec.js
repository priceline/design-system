import React from 'react'
import { render, screen } from 'testing-library'
import { Hotels } from 'pcln-icons'
import Spinner from './Spinner'

describe('Spinner', () => {
  it('renders a lonely spinner', () => {
    render(<Spinner data-testid='spinner' />)

    expect(screen.getByTestId('spinner')).toHaveStyle('color: primary')
  })

  it('renders with an icon', () => {
    render(
      <Spinner data-testid='spinner'>
        <Hotels data-testid='icon' />
      </Spinner>
    )

    expect(screen.getByTestId('spinner')).toHaveStyle('color: primary')
    expect(screen.getByTestId('icon')).toHaveStyle('color: rgb(0, 104, 239)')
  })

  it('renders with multiple colors', () => {
    render(
      <Spinner color='secondary' data-testid='spinner'>
        <Hotels color='error' data-testid='icon' />
      </Spinner>
    )

    expect(screen.getByTestId('spinner')).toHaveStyle('color: secondary')
    expect(screen.getByTestId('icon')).toHaveStyle('color: rgb(204, 0, 0)')
  })
})
