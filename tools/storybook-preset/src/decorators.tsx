import React from 'react'
import { ThemeProvider } from 'pcln-design-system'
import { withPerformance } from 'storybook-addon-performance'

// eslint-disable-next-line @typescript-eslint/naming-convention
const ThemeProviderDecorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)

/** @public */
export const decorators = [ThemeProviderDecorator, withPerformance]
