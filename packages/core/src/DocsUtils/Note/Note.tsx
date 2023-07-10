import React from 'react'

import { Box, Text } from '../..'

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
