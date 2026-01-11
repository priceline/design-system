import React from 'react'
import { Box } from '../../Box/Box'
import { Text } from '../../Text/Text'

/**
 * @public
 */
export type NoteProps = {
  children: string
}

/**
 * A callout box for important notes or tips in documentation.
 *
 * Displays text with a "NOTE" prefix in a subtle background box. Use to highlight
 * important information, caveats, or tips that readers should pay attention to.
 *
 * @public
 */
export const Note = ({ children }: NoteProps) => (
  <Box bg='background' p={3} borderRadius='xl'>
    <Text.span color='text.tint'>
      <Text.span bold>NOTE </Text.span>
      {children}
    </Text.span>
  </Box>
)
