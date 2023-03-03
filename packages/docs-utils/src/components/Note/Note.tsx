import { Box, Text } from 'pcln-design-system'
import React from 'react'

export type NoteProps = {
  children: string
}

export const Note = ({ children }: NoteProps) => (
  <Box bg='background' p={3} borderRadius='xl'>
    <Text.span color='text.tint'>
      <Text.span bold>NOTE </Text.span>
      {children}
    </Text.span>
  </Box>
)
