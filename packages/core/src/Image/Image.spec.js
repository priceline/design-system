import React from 'react'

import { Image } from '..'

const imageSrc =
  'https://www.qaa.priceline.com/home/public/735e9d77a0adaeaf0c46845da8c5db8b.jpg'

describe('Image', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Image src={imageSrc} />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
