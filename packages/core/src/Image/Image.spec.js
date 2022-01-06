import React from 'react'
import { render, screen } from 'testing-library'
import { Image } from '..'

const imageSrc =
  'https://www.goodfreephotos.com/albums/new-zealand/other-new-zealand/lake-pukaki-and-mount-cook-in-the-background.jpg'

describe('Image', () => {
  it('renders', () => {
    render(<Image src={imageSrc} alt='new-zealand-image' />)
    const image = screen.getByAltText('new-zealand-image')
    expect(image).toHaveStyleRule('max-width', '100%')
    expect(image).not.toHaveAttribute('width')
    expect(image).not.toHaveAttribute('height')
  })

  it('renders with fixed width', () => {
    render(<Image src={imageSrc} alt='new-zealand-image' width='500px' />)
    const image = screen.getByAltText('new-zealand-image')
    expect(image).toHaveAttribute('width', '500px')
    expect(image).not.toHaveAttribute('height')
  })

  it('renders with fixed width and height', () => {
    render(<Image src={imageSrc} alt='new-zealand-image' width='500px' height='500px' />)
    const image = screen.getByAltText('new-zealand-image')
    expect(image).toHaveAttribute('width', '500px')
    expect(image).toHaveAttribute('height', '500px')
  })

  it('renders with spacing', () => {
    render(<Image src={imageSrc} alt='new-zealand-image' pt={2} mt={3} />)
    const image = screen.getByAltText('new-zealand-image')
    expect(image).toHaveStyleRule('padding-top', '8px')
    expect(image).toHaveStyleRule('margin-top', '16px')
  })
})
