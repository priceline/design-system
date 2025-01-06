import React from 'react'
import { render, screen } from '../__test__/testing-library'
import { LogoImage } from './LogoImage'

describe('LogoImage', () => {
  it('renders with small size', () => {
    render(<LogoImage alt='Test Logo' size='small' src='test-image.jpg' />)
    const img = screen.getByAltText('Test Logo')
    expect(img).toBeInTheDocument()
    expect(img).toHaveStyleRule('max-height', '16px')
    expect(img).toHaveStyleRule('max-width', '60px')
  })

  it('renders with medium size', () => {
    render(<LogoImage alt='Test Logo' size='medium' src='test-image.jpg' />)
    const img = screen.getByAltText('Test Logo')
    expect(img).toBeInTheDocument()
    expect(img).toHaveStyleRule('max-height', '28px')
    expect(img).toHaveStyleRule('max-width', '104px')
  })

  it('applies common styles', () => {
    render(<LogoImage alt='Test Logo' size='small' src='test-image.jpg' />)
    const img = screen.getByAltText('Test Logo')
    expect(img).toHaveStyleRule('object-fit', 'contain')
    expect(img).toHaveStyleRule('margin', 'auto')
  })

  it('passes src prop correctly', () => {
    render(<LogoImage alt='Test Logo' size='small' src='test-image.jpg' />)
    const img = screen.getByAltText('Test Logo')
    expect(img).toHaveAttribute('src', 'test-image.jpg')
  })
})
