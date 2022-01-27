import React from 'react'
import { Image } from '..'
import { argTypes } from './Image.stories.args'

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
  argTypes,
}

const Template = (args) => <Image {...args} src={imageSrc} />

export const Default = Template.bind({})

export const Rounded = Template.bind({})
Rounded.args = { rounded: 'left', borderRadius: 'full' }

export const BoxShadow = Template.bind({})
BoxShadow.args = { boxShadowSize: 'overlay-lg' }

export const ResponsiveWidth = () => <Image width={1 / 2} src={imageSrc} />

export const SpecificWidthAndHeight = () => <Image width='200px' height='300px' src={imageSrc} />
