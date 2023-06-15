import type { DecoratorFunction } from '@storybook/addon-actions'

import React from 'react'
import { ThemeProvider, Box } from 'pcln-design-system'
import { withPerformance } from 'storybook-addon-performance'

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
export const decorators: DecoratorFunction[] = [ThemeProviderDecorator, StageDecorator, withPerformance]
