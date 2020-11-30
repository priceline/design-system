import React from 'react'
import { Image } from '..'

const description = 'A low-level layout component that renders an image'

export default {
  title: 'Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export const Default = () => (
  <Image src='https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg' />
)

export const ResponsiveWidth = () => (
  <Image
    width={1 / 2}
    src='https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg'
  />
)
