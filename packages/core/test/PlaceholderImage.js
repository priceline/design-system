import React from 'react'
import renderer from 'react-test-renderer'
import { PlaceholderImage } from '../src'

describe('PlaceholderImage', () => {
  test('Default height and width', () => {
    const placeholderImage = renderer.create(<PlaceholderImage />).toJSON()
    expect(placeholderImage).toHaveStyleRule('height', '500px')
    expect(placeholderImage).toHaveStyleRule('width', '500px')
  })

  test('Variable height and width', () => {
    const placeholderImage = renderer
      .create(<PlaceholderImage height="300" width="600" />)
      .toJSON()
    expect(placeholderImage).toHaveStyleRule('height', '300px')
    expect(placeholderImage).toHaveStyleRule('width', '600px')
  })

  test('With blurred image', () => {
    const placeholderImage = renderer.create(<PlaceholderImage blur />).toJSON()
    expect(placeholderImage.props.src).toBe(
      'https://picsum.photos/500/500?blur'
    )
  })

  test('Use chooseSrc prop', () => {
    const placeholderImage = renderer
      .create(<PlaceholderImage chooseSrc="0" />)
      .toJSON()
    expect(placeholderImage.props.src).toBe('http://placeimg.com/500/500/any')
  })

  test('use alt prop', () => {
    const placeholderImage = renderer
      .create(<PlaceholderImage alt="Test alt text here" />)
      .toJSON()
    expect(placeholderImage.props.alt).toBe('Test alt text here')
  })
})
