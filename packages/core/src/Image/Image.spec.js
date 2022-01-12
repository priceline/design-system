import React from 'react'
import { render, screen } from '../../test/testing-library'
import { Image, theme } from '..'

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

  it('renders with box shadow', () => {
    render(
      <Image src={imageSrc} alt='new-zealand-image' boxShadowSize='overlay-lg' boxShadowColor='primary' />
    )
    const image = screen.getByAltText('new-zealand-image')
    expect(image).toHaveStyleRule(
      'box-shadow',
      '0 8px 32px 0 rgb(0,68,153,0.24),0 8px 16px 0 rgba(0,0,0,0.2),0 24px 64px 0 rgba(0,0,0,0.2)'
    )
  })

  it('renders with border radius', () => {
    render(<Image src={imageSrc} alt='new-zealand-image' borderRadius='xsm' />)
    const image = screen.getByAltText('new-zealand-image')
    expect(image).toHaveStyleRule('border-radius', theme.borderRadii.xsm)
  })
})
