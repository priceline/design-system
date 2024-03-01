import React from 'react'
import styled from 'styled-components'
import { Grid } from '../Grid/Grid'
import { Text } from '../Text/Text'
import { colorSchemeNames } from '../storybook/args'
import { textTransformValues } from '../utils/attrs/typographyAttrs'
import { Badge, sizes, type BadgeProps } from './Badge'
import { argTypes } from './Badge.stories.args'

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

const GridTemplate = styled(Grid)`
  display: inline-grid;
  grid-auto-flow: column;
`
const TextTransformTemplate = (args) => {
  return (
    <GridTemplate
      templateColumns='repeat(5, 1fr)'
      templateRows='repeat(2, 1fr)'
      justifyItems='center'
      alignItems='center'
    >
      <Text textStyle='captionBold' style={{ justifySelf: 'left' }}>
        medium:
      </Text>
      <Text textStyle='caption' style={{ justifySelf: 'left' }}>
        captionMedium:
      </Text>
      {textTransformValues.map((textTransform) => (
        <>
          <Badge m={3} textTransform={textTransform} key={textTransform} {...args}>
            {textTransform}
          </Badge>
          <Badge m={3} textTransform={textTransform} size='captionMedium' key={textTransform} {...args}>
            {textTransform}
          </Badge>
        </>
      ))}
    </GridTemplate>
  )
}
export const TextTransforms = TextTransformTemplate.bind({})
TextTransformTemplate.args = {}

const SizeVariantsTemplate = (args) => {
  const sizeArray = Object.keys(sizes)
  return (
    <>
      {sizeArray.map((size: BadgeProps['size']) => (
        <Badge m={3} size={size} key={size} {...args}>
          {size}
        </Badge>
      ))}
    </>
  )
}
export const SizeVariants = SizeVariantsTemplate.bind({})
SizeVariantsTemplate.args = {}

const ColorSchemesTemplate = (args) => {
  return (
    <React.Fragment>
      {colorSchemeNames.map((colorScheme) => (
        <Badge m={3} colorScheme={colorScheme} key={colorScheme} {...args}>
          {colorScheme}
        </Badge>
      ))}
    </React.Fragment>
  )
}
export const ColorSchemes = ColorSchemesTemplate.bind({})
ColorSchemesTemplate.args = {}
