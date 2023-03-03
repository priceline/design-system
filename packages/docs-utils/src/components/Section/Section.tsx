import kebabCase from 'lodash/kebabCase'
import { Box, Text } from 'pcln-design-system'
import React from 'react'

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
