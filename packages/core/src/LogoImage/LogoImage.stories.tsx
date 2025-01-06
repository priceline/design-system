import React from 'react'
import { LogoImage } from './LogoImage'

export default {
  title: 'LogoImage',
  component: LogoImage,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
  },
}

const Template = (args) => <LogoImage {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  src: 'https://s1qa.pclncdn.com/rc-static/v2/partner-logos/AV/AV.png?width=250&height=72&opto&fit=bounds',
  alt: 'Avis logo',
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium',
  src: 'https://s1qa.pclncdn.com/rc-static/v2/partner-logos/AV/AV.png?width=250&height=72&opto&fit=bounds',
  alt: 'Avis logo',
}

export const MissingImage = Template.bind({})
MissingImage.args = {
  size: 'medium',
  src: 'non-existent-image.jpg',
  alt: 'Missing image',
}
