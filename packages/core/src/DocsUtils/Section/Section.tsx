import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Box } from '../../Box/Box'
import { Text } from '../../Text/Text'

/**
 * @public
 */
export type SectionProps = {
  heading: string
  children: React.ReactNode
}

/**
 * @public
 */
export const Section = ({ heading, children }: SectionProps) => (
  <Box my={5}>
    <Text id={kebabCase(heading)} textStyle='heading2' mb={4}>
      {heading}
    </Text>
    {children}
  </Box>
)
