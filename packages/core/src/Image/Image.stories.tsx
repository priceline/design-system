import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { Image } from '..'

const description = 'A low-level layout component that renders an image'

storiesOf('Image', module)
  .add(
    'Image component',
    withInfo({
      text: description,
      inline: true,
    })(() => (
      <Image src='https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg' />
    ))
  )

  .add('Responsive width', () => (
    <Image
      width={1 / 2}
      src='https://www.priceline.com/home/public/assets/images/photos/photo-aruba.jpg'
    />
  ))
