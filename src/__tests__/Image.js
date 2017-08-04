import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Image } from '..'

const imageSrc = 'https://www.qaa.priceline.com/home/public/735e9d77a0adaeaf0c46845da8c5db8b.jpg'

describe('Image', () => {
  test('renders', () => {
    const json = renderer.create(<Image src={imageSrc} />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('width prop sets width sizing', () => {
    const json = renderer.create(<Image width='300px' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveProperty('props.width', '300px')
  })
})
