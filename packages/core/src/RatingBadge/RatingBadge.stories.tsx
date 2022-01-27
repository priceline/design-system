import React from 'react'
import { RatingBadge, Flex } from '..'

export default {
  title: 'RatingBadge',
  component: RatingBadge,
}

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
