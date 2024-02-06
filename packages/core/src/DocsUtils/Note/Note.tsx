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
