import React from 'react'
import { render } from 'testing-library'

import { PlaceholderImage } from '..'

describe('PlaceholderImage', () => {
  it('should use the default height and width when not specified', () => {
    const { getByAltText } = render(<PlaceholderImage />)

    const placeholderImage = getByAltText('Random image used for placeholder content')
    expect(placeholderImage).toHaveStyleRule('height', '500px')
    expect(placeholderImage).toHaveStyleRule('width', '500px')
  })

  it('should use provided height and width', () => {
    const { getByAltText } = render(<PlaceholderImage height='300' width='600' />)

    const placeholderImage = getByAltText('Random image used for placeholder content')

    expect(placeholderImage).toHaveStyleRule('height', '300px')
    expect(placeholderImage).toHaveStyleRule('width', '600px')
  })

  it('should use a blurred image', () => {
    const { getByAltText } = render(<PlaceholderImage blur />)

    const placeholderImage = getByAltText('Random image used for placeholder content')

    expect(placeholderImage).toHaveAttribute('src', 'https://picsum.photos/500/500?blur')
  })

  it('should allow the user to specify a placeholder service via chooseSrc', () => {
    const { getByAltText } = render(<PlaceholderImage chooseSrc='0' />)

    const placeholderImage = getByAltText('Random image used for placeholder content')

    expect(placeholderImage).toHaveAttribute('src', 'http://placeimg.com/500/500/any')
  })

  it('should apply the `alt` attribute as specified', () => {
    const { getByAltText } = render(<PlaceholderImage alt='Test alt text here' />)

    getByAltText('Test alt text here')
  })
})
