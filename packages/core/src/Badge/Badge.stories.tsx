import React from 'react'

import { Badge } from '..'
import { argTypes } from './Badge.stories.args'

// for Args
// const sizes = { small: 'small', medium: 'medium' }

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Use the <Badge /> component to render a primitive badge.',
      },
    },
  },
  argTypes,
}

const Template = (args) => <Badge {...args}>badge</Badge>

export const _Badge = Template.bind({})

export const TextCustom = Template.bind({})
TextCustom.storyName = 'text (custom)'
TextCustom.args = {
  bg: 'text',
  color: 'white',
}

export const LightBlueAndTextCustom = Template.bind({})
LightBlueAndTextCustom.storyName = 'lightBlue and text (custom)'
LightBlueAndTextCustom.args = {
  bg: 'primary.light',
  color: 'text',
}

export const BadgeStyle = () => (
  <>
    <Badge m={1} badgeStyle='primary'>
      primary
    </Badge>

    <Badge m={1} badgeStyle='primaryLight'>
      primaryLight
    </Badge>

    <Badge m={1} badgeStyle='primaryDark'>
      primaryDark
    </Badge>

    <Badge m={1} badgeStyle='primaryDarkLight'>
      primaryDarkLight
    </Badge>

    <Badge m={1} badgeStyle='secondary'>
      secondary
    </Badge>

    <Badge m={1} badgeStyle='secondaryLight'>
      secondaryLight
    </Badge>

    <Badge m={1} badgeStyle='backgroundDarkest'>
      backgroundDarkest
    </Badge>

    <Badge m={1} badgeStyle='backgroundLightest'>
      backgroundLightest
    </Badge>

    <Badge m={1} badgeStyle='neutral'>
      neutral
    </Badge>

    <Badge m={1} badgeStyle='neutralLight'>
      neutralLight
    </Badge>

    <Badge m={1} badgeStyle='warning'>
      warning
    </Badge>

    <Badge m={1} badgeStyle='warningLight'>
      warningLight
    </Badge>

    <Badge m={1} badgeStyle='highlight'>
      hightlight
    </Badge>

    <Badge m={1} badgeStyle='notify'>
      notify
    </Badge>

    <Badge m={1} badgeStyle='success'>
      success
    </Badge>

    <Badge m={1} badgeStyle='successLight'>
      successLight
    </Badge>
  </>
)
