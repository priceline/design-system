import { Meta } from '@storybook/react'
import React from 'react'
import { Flex } from '../Flex/Flex'
import { colorSchemeNames } from '../storybook/args'
import { RatingBadge } from './RatingBadge'

const meta: Meta<typeof RatingBadge> = {
  title: 'Core / RatingBadge',
  component: RatingBadge,
}
export default meta

export const Default = () => <RatingBadge>9.0</RatingBadge>
export const DeprecatedBgProp = () => <RatingBadge bg='primary.base'>9.0</RatingBadge>

export const MixBgAndColorProps = () => (
  <Flex width='150px' justifyContent='space-between'>
    <RatingBadge color='text.lightest' bg='alert.base'>
      9.0
    </RatingBadge>
    <RatingBadge color='text.dark' bg='secondary.base'>
      9.0
    </RatingBadge>
  </Flex>
)

export const Colors = () => (
  <Flex width='150px' justifyContent='space-between'>
    <RatingBadge color='primary'>7.6</RatingBadge>
    <RatingBadge color='secondary'>8.1</RatingBadge>
    <RatingBadge color='alert'>9.0</RatingBadge>
  </Flex>
)

const ColorSchemesTemplate = (args) => {
  return (
    <React.Fragment>
      {colorSchemeNames.map((colorScheme) => (
        <RatingBadge m={3} colorScheme={colorScheme} key={colorScheme}>
          {colorScheme}
        </RatingBadge>
      ))}
    </React.Fragment>
  )
}
export const ColorSchemes = ColorSchemesTemplate.bind({})
ColorSchemesTemplate.args = {}
