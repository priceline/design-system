import React from 'react'
import { render, screen } from '../__test__/testing-library'
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
      '0 -1px 0 0 rgb(0,68,153,0.03),0 8px 32px 0 rgba(0,0,0,0.24),0 8px 16px 0 rgba(0,0,0,0.2),0 24px 64px 0 rgba(0,0,0,0.2)'
    )
  })

  it('renders with border radius', () => {
    render(<Image src={imageSrc} alt='new-zealand-image' borderRadius='xsm' />)
    const image = screen.getByAltText('new-zealand-image')
    expect(image).toHaveStyleRule('border-radius', theme.borderRadii.xsm)
  })

  it.each([
    { propName: 'objectFit', propValue: undefined, styleName: 'object-fit', styleValue: 'unset' },
    { propName: 'objectFit', propValue: 'contain', styleName: 'object-fit', styleValue: 'contain' },
    { propName: 'objectFit', propValue: 'cover', styleName: 'object-fit', styleValue: 'cover' },
    {
      propName: 'objectPosition',
      propValue: undefined,
      styleName: 'object-position',
      styleValue: 'center',
    },
    { propName: 'objectPosition', propValue: 'left', styleName: 'object-position', styleValue: 'left' },
    { propName: 'objectPosition', propValue: 'right', styleName: 'object-position', styleValue: 'right' },
    { propName: 'objectPosition', propValue: 'top', styleName: 'object-position', styleValue: 'top' },
    {
      propName: 'objectPosition',
      propValue: 'topLeft',
      styleName: 'object-position',
      styleValue: 'top left',
    },
    {
      propName: 'objectPosition',
      propValue: 'topRight',
      styleName: 'object-position',
      styleValue: 'top right',
    },
    { propName: 'objectPosition', propValue: 'bottom', styleName: 'object-position', styleValue: 'bottom' },
    {
      propName: 'objectPosition',
      propValue: 'bottomLeft',
      styleName: 'object-position',
      styleValue: 'bottom left',
    },
    {
      propName: 'objectPosition',
      propValue: 'bottomRight',
      styleName: 'object-position',
      styleValue: 'bottom right',
    },
  ])(
    'renders with style $styleName = $styleValue, when $propName = $propValue',
    ({ propName, propValue, styleName, styleValue }) => {
      render(<Image alt='new-zealand-image' src={imageSrc} {...{ [propName]: propValue }} />)

      const image = screen.getByAltText('new-zealand-image')
      expect(image).toHaveStyleRule(styleName, styleValue)
    }
  )
})
