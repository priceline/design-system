import kebabCase from 'lodash/kebabCase'
import React from 'react'

import { Box, Text } from '../..'

export type SectionProps = {
  heading: string
  children: React.ReactNode
}

export const Section = ({ heading, children }: SectionProps) => (
  <Box my={5}>
    <Text id={kebabCase(heading)} textStyle='heading2' mb={4}>
      {heading}
    </Text>
    {children}
  </Box>
)
