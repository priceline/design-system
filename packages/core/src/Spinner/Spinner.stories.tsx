import React from 'react'
import { Hotels } from 'pcln-icons'
import Spinner from './Spinner'
import { argTypes, defaultArgs, iconMap } from './Spinner.stories.args'

export default {
  title: 'core / Spinner',
  component: Spinner,
  args: defaultArgs,
  argTypes,
}

const Template = (args) => {
  const { children, icon } = args

  const Child = typeof icon === 'string' ? iconMap[icon] : children
  return <Spinner {...args}>{Child}</Spinner>
}

export const _Spinner = Template.bind({})

export const WithIcon = Template.bind({})
WithIcon.args = { children: <Hotels /> }

export const Small = Template.bind({})
Small.args = { size: 'small', children: <Hotels /> }

export const Large = Template.bind({})
Large.args = { size: 'large', children: <Hotels /> }

export const OverrideWidthAndHeight = Template.bind({})
OverrideWidthAndHeight.args = { size: '240px', children: <Hotels size={40} /> }

export const OverrideIconColor = Template.bind({})
OverrideIconColor.args = {
  color: 'secondary',
  children: <Hotels color='promoPrimary' />,
}

export const MultipleIcons = Template.bind({})
MultipleIcons.args = {
  children: (
    <>
      <Hotels color='secondary' />
      <Hotels color='warning' />
    </>
  ),
}

export const Responsive = Template.bind({})
Responsive.args = {
  size: ['small', null, 'medium', null, 'large'],
  children: <Hotels />,
}
Responsive.parameters = {
  viewport: { defaultViewport: 'designSystem_sm' },
}
