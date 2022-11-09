import React from 'react'
import { fireEvent, render, screen } from '../__test__/testing-library'

import { Link } from '..'

describe('Link', () => {
  it('should render correctly with no props without throwing', () => {
    expect(() => {
      const { asFragment } = render(<Link>Dummy</Link>)

      expect(asFragment()).toMatchSnapshot()
    }).not.toThrow()
  })

  it('should add rel="noopener" when target="_blank"', () => {
    const { asFragment } = render(<Link target='_blank'>Dummy</Link>)

    expect(asFragment()).toMatchSnapshot()

    const link = screen.getByText('Dummy')

    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener')
  })

  it('should not add rel="noopener" when target is not "_blank"', () => {
    const { asFragment } = render(<Link>Dummy</Link>)

    expect(asFragment()).toMatchSnapshot()

    const link = screen.getByText('Dummy')

    expect(link).not.toHaveAttribute('target', '_blank')
    expect(link).not.toHaveAttribute('rel', 'noopener')
  })

  it('should be clickable when not disabled', () => {
    const mockOnClick = jest.fn()
    render(
      <Link href='href' onClick={mockOnClick}>
        Enabled
      </Link>
    )

    const link = screen.getByText('Enabled')
    expect(link).toHaveAttribute('href')
    expect(link).toHaveStyleRule('color', '#0068ef')
    expect(link).toHaveStyleRule('cursor', 'pointer')
    expect(link).toHaveStyleRule('text-decoration', 'underline', { modifier: ':hover' })

    expect(mockOnClick).toHaveBeenCalledTimes(0)
    fireEvent.click(link)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('should not be clickable when disabled', () => {
    const mockOnClick = jest.fn()
    render(
      <Link disabled href='href' onClick={mockOnClick}>
        Disabled
      </Link>
    )

    const link = screen.getByText('Disabled')
    expect(link).not.toHaveAttribute('href')
    expect(link).toHaveStyleRule('color', '#4f6f8f')
    expect(link).toHaveStyleRule('cursor', 'default')
    expect(link).toHaveStyleRule('text-decoration', 'none', { modifier: ':hover' })

    expect(mockOnClick).toHaveBeenCalledTimes(0)
    fireEvent.click(link)
    expect(mockOnClick).toHaveBeenCalledTimes(0)
  })
})
