import React from 'react'

import { Badge, textTransformValues } from '..'
import type { ColorSchemeName } from '../theme'
import { argTypes } from './Badge.stories.args'
import { colorNames, colorSchemeNames } from '../storybook/args'
import { DeprecatedColorsNote } from '../storybook/utils/DeprecatedColorsNote'

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
_Badge.args = {
  bg: 'lightGray',
}

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

export const BackgroundColor = () => (
  <>
    <DeprecatedColorsNote />
    {[...colorNames, 'lightGreen', 'lightRed', 'lightBlue'].map((color) => (
      <Badge m={3} p={3} bg={color} key={color}>
        {color}
      </Badge>
    ))}
  </>
)
BackgroundColor.storyName = 'Background Color (bg prop)'

export const Sizes = () => (
  <>
    {['small', 'medium'].map((size) => (
      <Badge m={3} size={size as 'small' | 'medium'} key={size}>
        {size}
      </Badge>
    ))}
  </>
)

const TextTransformTemplate = () => {
  return (
    <React.Fragment>
      {textTransformValues.map((textTransform) => (
        <Badge m={3} p={3} textTransform={textTransform} key={textTransform}>
          {textTransform}
        </Badge>
      ))}
    </React.Fragment>
  )
}
export const TextTransforms = TextTransformTemplate.bind({})
TextTransformTemplate.args = {}

const ColorSchemesTemplate = () => {
  return (
    <React.Fragment>
      {colorSchemeNames.map((colorScheme) => (
        <Badge m={3} p={3} colorScheme={colorScheme as ColorSchemeName} key={colorScheme}>
          {colorScheme}
        </Badge>
      ))}
    </React.Fragment>
  )
}
export const ColorSchemes = ColorSchemesTemplate.bind({})
ColorSchemesTemplate.args = {}
