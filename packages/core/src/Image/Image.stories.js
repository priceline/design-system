import React from 'react'
import { Image } from '..'

const description = 'A low-level layout component that renders an image'
const imageSrc =
  'https://www.goodfreephotos.com/albums/new-zealand/other-new-zealand/lake-pukaki-and-mount-cook-in-the-background.jpg'

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

export const Default = () => <Image src={imageSrc} />

export const ResponsiveWidth = () => <Image width={1 / 2} src={imageSrc} />

export const SpecificWidthAndHeight = () => (
  <Image width='200px' height='300px' src={imageSrc} />
)
