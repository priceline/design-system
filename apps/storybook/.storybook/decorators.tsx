import { Box, ThemeProvider } from 'pcln-design-system'
import React from 'react'

const ThemeProviderDecorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)
const StageDecorator = (Story) => (
  <Box p={4}>
    <Story />
  </Box>
)

/** @public */
export const decorators = [ThemeProviderDecorator, StageDecorator]
