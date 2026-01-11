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
 * A documentation section with a heading and content area.
 *
 * Renders a heading2-styled title with an auto-generated kebab-case ID for anchor
 * linking, followed by children content. Use to organize documentation into
 * logical sections that can be linked from a TableOfContents.
 *
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
